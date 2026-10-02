#!/usr/bin/env bash
set -euo pipefail

for key in COOLIFY_API_TOKEN COOLIFY_DEPLOY_WEBHOOK COOLIFY_IMAGE RELEASE_SHA; do
  if [[ -z "${!key:-}" ]]; then
    echo "Missing required setting: $key" >&2
    exit 1
  fi
done
[[ "$RELEASE_SHA" =~ ^[a-f0-9]{40}$ ]] || { echo 'Expected full commit SHA' >&2; exit 1; }
[[ "$COOLIFY_IMAGE" =~ ^ghcr\.io/[a-z0-9._/-]+$ ]] || { echo 'Expected a GHCR image name' >&2; exit 1; }

# Derive the instance and single application from the configured webhook.
# Reject tag/multi-resource webhooks so other applications cannot be deployed accidentally.
settings=$(python3 - <<'PY'
import os
import sys
from urllib.parse import urlsplit, parse_qs

webhook = urlsplit(os.environ['COOLIFY_DEPLOY_WEBHOOK'])
query = parse_qs(webhook.query, keep_blank_values=True)
uuid = query.get('uuid', [])
if (webhook.scheme != 'https' or not webhook.hostname or webhook.username or webhook.password
        or webhook.path != '/api/v1/deploy' or webhook.fragment
        or len(uuid) != 1 or not uuid[0]
        or any(c not in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-' for c in uuid[0])
        or set(query) - {'uuid', 'force'}
        or query.get('force', ['false']) != ['false']):
    sys.exit('Use an HTTPS resource webhook with one application UUID and force=false')
print(f'https://{webhook.netloc}')
print(uuid[0])
PY
)
COOLIFY_URL=${settings%%$'\n'*}
COOLIFY_APP_UUID=${settings#*$'\n'}

api="${COOLIFY_URL%/}/api/v1"
tag="sha-$RELEASE_SHA"
work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' EXIT
# Keep API responses out of logs because deployment responses can include configuration.
request() {
  local operation="$1" status_code exit_code
  shift
  if status_code=$(curl --fail --silent --show-error --connect-timeout 10 --max-time 60 \
    --header "Authorization: Bearer $COOLIFY_API_TOKEN" \
    --header 'Content-Type: application/json' \
    --dump-header "$work_dir/api-headers.txt" \
    --output "$work_dir/api-response.json" --write-out '%{http_code}' "$@"); then
    cat "$work_dir/api-response.json"
  else
    exit_code=$?
    echo "Coolify $operation failed (HTTP $status_code)." >&2
    case "$status_code" in
      401) echo 'Replace COOLIFY_API_TOKEN with the complete, unexpired token for this application’s team.' >&2 ;;
      403) echo 'Token needs read, write (image update), and deploy permissions. Check token owner/team role, API Access and runner IP allowlist. A deploy-only token cannot update the image.' >&2 ;;
      405)
        echo 'The instance or reverse proxy rejected this request method. Check the Allow header below for the methods supported by this endpoint.' >&2
        # Print only protocol metadata; cookies and response bodies stay private.
        if [[ -f "$work_dir/api-headers.txt" ]]; then
          python3 - "$work_dir/api-headers.txt" >&2 <<'PY'
from pathlib import Path
import sys

for line in Path(sys.argv[1]).read_text().splitlines():
    if line.lower().startswith(('allow:', 'content-type:')):
        print(line)
PY
        fi
        ;;
    esac
    # Do not print response bodies: they may contain application configuration.
    return "$exit_code"
  fi
}
# Check resource visibility before attempting to change it.
request "application preflight read" "$api/applications/$COOLIFY_APP_UUID" > "$work_dir/application.json"
jq -e '.uuid and .docker_registry_image_name' "$work_dir/application.json" >/dev/null
jq -n --arg image "$COOLIFY_IMAGE" --arg tag "$tag" \
  '{docker_registry_image_name:$image,docker_registry_image_tag:$tag}' > "$work_dir/update.json"
request "image-tag update" --request PATCH "$api/applications/$COOLIFY_APP_UUID" \
  --data-binary "@$work_dir/update.json" > "$work_dir/application.json"
# Read back configuration before starting a deployment.
request "application read" "$api/applications/$COOLIFY_APP_UUID" > "$work_dir/application.json"
jq -e --arg image "$COOLIFY_IMAGE" --arg tag "$tag" \
  '.docker_registry_image_name == $image and .docker_registry_image_tag == $tag' \
  "$work_dir/application.json" >/dev/null
# Use the first HTTPS domain configured on the application for public checks.
# Coolify's domain port suffix selects the internal proxy target, not the public port.
COOLIFY_CHECK_URL=$(python3 - "$work_dir/application.json" <<'PY'
import json
import sys
from urllib.parse import urlsplit

application = json.load(open(sys.argv[1]))
for domain in (application.get('fqdn') or '').split(','):
    url = urlsplit(domain.strip())
    if (url.scheme == 'https' and url.hostname and not url.username and not url.password
            and url.path in ('', '/') and not url.query and not url.fragment):
        host = f'[{url.hostname}]' if ':' in url.hostname else url.hostname
        print(f'https://{host}')
        break
else:
    sys.exit('Configure an HTTPS root domain on this Coolify application before deploying')
PY
)
# Invoke the resource's authenticated deploy webhook once, after the immutable tag update.
request "deploy webhook" --request POST "$COOLIFY_DEPLOY_WEBHOOK" > "$work_dir/started.json"
deployment_uuid=$(jq -er --arg uuid "$COOLIFY_APP_UUID" \
  '.deployments[] | select(.resource_uuid == $uuid) | .deployment_uuid' "$work_dir/started.json")
[[ "$deployment_uuid" =~ ^[a-zA-Z0-9_-]+$ ]] || { echo 'Invalid deployment UUID' >&2; exit 1; }
echo "Deploying $COOLIFY_IMAGE:$tag (deployment $deployment_uuid)"

finished=false
for attempt in $(seq 1 90); do
  request "deployment status read" "$api/deployments/$deployment_uuid" > "$work_dir/status.json"
  if ! status=$(jq -er '.status | select(type == "string" and length > 0)' "$work_dir/status.json"); then
    echo 'Coolify deployment response has no usable status; inspect this deployment in the dashboard' >&2
    exit 1
  fi
  if [[ "${previous_status:-}" != "$status" ]]; then
    echo "Coolify deployment status: $status"
    previous_status=$status
  fi
  case "$status" in
    finished)
      # Some self-hosted versions omit the image tag from deployment records.
      # Reject a conflicting recorded tag; otherwise verify configuration and served SHA below.
      if ! jq -e --arg tag "$tag" \
        '.docker_registry_image_tag == null or .docker_registry_image_tag == "" or .docker_registry_image_tag == $tag' \
        "$work_dir/status.json" >/dev/null; then
        echo 'Finished deployment reports an image tag different from this release' >&2
        exit 1
      fi
      if jq -e '.docker_registry_image_tag == null or .docker_registry_image_tag == ""' "$work_dir/status.json" >/dev/null; then
        echo 'Deployment record omits the image tag; verifying application configuration and public release SHA'
      fi
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
  request "application read" "$api/applications/$COOLIFY_APP_UUID" > "$work_dir/application.json"
  if jq -e --arg image "$COOLIFY_IMAGE" --arg tag "$tag" \
    '.docker_registry_image_name == $image and .docker_registry_image_tag == $tag and ((.status // "") | startswith("running:healthy"))' \
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
