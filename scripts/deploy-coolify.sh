#!/usr/bin/env bash
set -euo pipefail

for key in COOLIFY_URL COOLIFY_APP_UUID COOLIFY_API_TOKEN COOLIFY_IMAGE RELEASE_SHA COOLIFY_CHECK_URL; do
  if [[ -z "${!key:-}" ]]; then
    echo "Missing required setting: $key" >&2
    exit 1
  fi
done
[[ "$COOLIFY_URL" =~ ^https://[^/?#]+(/[^?#]*)?$ ]] || { echo 'COOLIFY_URL must use HTTPS' >&2; exit 1; }
[[ "$COOLIFY_CHECK_URL" =~ ^https://[^/?#]+$ ]] || { echo 'COOLIFY_CHECK_URL must be an HTTPS origin without a trailing slash' >&2; exit 1; }
[[ "$COOLIFY_APP_UUID" =~ ^[a-zA-Z0-9_-]+$ ]] || { echo 'Invalid application UUID' >&2; exit 1; }
[[ "$RELEASE_SHA" =~ ^[a-f0-9]{40}$ ]] || { echo 'Expected full commit SHA' >&2; exit 1; }
[[ "$COOLIFY_IMAGE" =~ ^ghcr\.io/[a-z0-9._/-]+$ ]] || { echo 'Expected a GHCR image name' >&2; exit 1; }

api="${COOLIFY_URL%/}/api/v1"
tag="sha-$RELEASE_SHA"
work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' EXIT
# Keep API responses out of logs because deployment responses can include configuration.
request() {
  curl --fail --silent --show-error --connect-timeout 10 --max-time 60 \
    --header "Authorization: Bearer $COOLIFY_API_TOKEN" \
    --header 'Content-Type: application/json' "$@"
}
jq -n --arg image "$COOLIFY_IMAGE" --arg tag "$tag" \
  '{docker_registry_image_name:$image,docker_registry_image_tag:$tag}' > "$work_dir/update.json"
request --request PATCH "$api/applications/$COOLIFY_APP_UUID" \
  --data-binary "@$work_dir/update.json" > "$work_dir/application.json"
# Read back configuration before starting a deployment.
request "$api/applications/$COOLIFY_APP_UUID" > "$work_dir/application.json"
jq -e --arg image "$COOLIFY_IMAGE" --arg tag "$tag" \
  '.docker_registry_image_name == $image and .docker_registry_image_tag == $tag' \
  "$work_dir/application.json" >/dev/null
jq -n --arg uuid "$COOLIFY_APP_UUID" '{uuid:$uuid,force:false}' > "$work_dir/deploy.json"
request --request POST "$api/deploy" --data-binary "@$work_dir/deploy.json" > "$work_dir/started.json"
deployment_uuid=$(jq -er --arg uuid "$COOLIFY_APP_UUID" \
  '.deployments[] | select(.resource_uuid == $uuid) | .deployment_uuid' "$work_dir/started.json")
[[ "$deployment_uuid" =~ ^[a-zA-Z0-9_-]+$ ]] || { echo 'Invalid deployment UUID' >&2; exit 1; }
echo "Deploying $COOLIFY_IMAGE:$tag (deployment $deployment_uuid)"

finished=false
for attempt in $(seq 1 90); do
  request "$api/deployments/$deployment_uuid" > "$work_dir/status.json"
  status=$(jq -er '.status' "$work_dir/status.json")
  case "$status" in
    finished)
      jq -e --arg tag "$tag" '.docker_registry_image_tag == $tag' "$work_dir/status.json" >/dev/null
      finished=true
      break
      ;;
    failed|cancelled|canceled)
      echo "Coolify deployment $status; inspect its logs in Coolify" >&2
      exit 1
      ;;
  esac
  sleep 10
done
[[ "$finished" == true ]] || { echo 'Coolify deployment timed out' >&2; exit 1; }
healthy=false
for attempt in $(seq 1 18); do
  request "$api/applications/$COOLIFY_APP_UUID" > "$work_dir/application.json"
  if jq -e --arg tag "$tag" '.docker_registry_image_tag == $tag and (.status | startswith("running:healthy"))' \
    "$work_dir/application.json" >/dev/null; then
    healthy=true
    break
  fi
  sleep 5
done
[[ "$healthy" == true ]] || { echo 'Application did not become healthy' >&2; exit 1; }
ready=false
# Allow the public proxy to catch up; every successful check must identify this release.
for attempt in $(seq 1 12); do
  if curl --fail --silent --show-error --connect-timeout 3 --max-time 5 \
    "$COOLIFY_CHECK_URL/api/health" > "$work_dir/health.json" &&
    jq -e --arg commit "$RELEASE_SHA" '.status == "ok" and .commit == $commit' \
      "$work_dir/health.json" >/dev/null 2>&1; then
    ready=true
    break
  fi
  if [[ "$attempt" -lt 12 ]]; then sleep 3; fi
done
[[ "$ready" == true ]] || { echo 'Public site did not become ready for the released commit' >&2; exit 1; }

for route in / /Projects /Projects/issuesight /Blog; do
  curl --fail --silent --show-error --location --connect-timeout 10 --max-time 30 \
    --output /dev/null "$COOLIFY_CHECK_URL$route"
done
pdf_type=$(curl --fail --silent --show-error --location --connect-timeout 10 --max-time 30 \
  --output "$work_dir/resume.pdf" --write-out '%{content_type}' "$COOLIFY_CHECK_URL/api/resume/download")
og_type=$(curl --fail --silent --show-error --location --connect-timeout 10 --max-time 30 \
  --output "$work_dir/og.svg" --write-out '%{content_type}' "$COOLIFY_CHECK_URL/api/og")
[[ "${pdf_type%%;*}" == application/pdf ]] || { echo 'Resume returned an unexpected content type' >&2; exit 1; }
[[ "${og_type%%;*}" == image/svg+xml ]] || { echo 'Open Graph image returned an unexpected content type' >&2; exit 1; }
python3 - "$work_dir/resume.pdf" "$work_dir/og.svg" <<'PY'
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

pdf = Path(sys.argv[1]).read_bytes()
if not pdf.startswith(b'%PDF-') or b'%%EOF' not in pdf[-1024:]:
    sys.exit('Resume response is not a complete PDF')
try:
    svg = ET.parse(sys.argv[2]).getroot()
except ET.ParseError:
    sys.exit('Open Graph response is not valid XML')
if svg.tag != '{http://www.w3.org/2000/svg}svg':
    sys.exit('Open Graph response is not an SVG image')
PY
echo "Coolify is healthy for $tag"
curl --fail --silent --show-error --connect-timeout 10 --max-time 30 \
  --output "$work_dir/blog.html" "$COOLIFY_CHECK_URL/Blog"
python3 - "$work_dir/blog.html" > "$work_dir/blog-routes.txt" <<'PY'
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import sys

class BlogLinks(HTMLParser):
    post = None
    def handle_starttag(self, tag, attrs):
        if tag != 'a' or self.post is not None:
            return
        href = dict(attrs).get('href', '')
        url = urlsplit(href)
        parts = url.path.split('/')
        if not url.netloc and not url.scheme and len(parts) == 4 and parts[1] == 'Blog' and all(part not in ('', '.', '..') for part in parts[2:]):
            self.post = url.path

parser = BlogLinks()
parser.feed(Path(sys.argv[1]).read_text())
if parser.post is None:
    sys.exit('Blog returned no post routes; inspect upstream content before release')
print(parser.post.rsplit('/', 1)[0])
print(parser.post)
PY
while IFS= read -r route; do
  curl --fail --silent --show-error --location --connect-timeout 10 --max-time 30 \
    --output /dev/null "$COOLIFY_CHECK_URL$route"
done < "$work_dir/blog-routes.txt"
echo "Blog category and post smoke checks passed for $tag"
