# Site update and Coolify migration

## Repository implementation

- Home information panel: Software Engineer; RAVL; AI & Data Infra; Go · Python · Java; Toronto, ON.
- April 2026 timeline: joined RAVL as a Software Engineer, supporting a major Canadian bank's AI/ML & Analytics platform infrastructure team with infrastructure, automation, and platform engineering.
- Contact wording reflects the RAVL role. Page titles, descriptions, canonical URLs and Open Graph URLs follow the current route. Keyboard skip navigation, focus outlines and reduced-motion styles are included.
- The supplied September 2026 resume PDF includes the RAVL role and is installed for both preview and download. The active copies match the supplied PDF byte for byte; keep them synchronized when replacing the resume.
- GHCR is the sole deployment workflow. Pull requests run checks and build an image without publishing or deploying. Passing `master` pushes publish `sha-<full commit SHA>`, sign the image, update the exact image tag, and invoke Coolify's authenticated resource deploy webhook.
- Docker Hub remains publish-only for existing consumers. The duplicate GHCR workflow and both Dokploy triggers are removed. Compose no longer declares a Dokploy network.
- Blog listing refreshes share pending requests and limit concurrent raw downloads. Compatible dependency patches remove the high advisories found by npm audit.

## Release gate

Run `npm ci`, `npm test`, `npm run check`, `npm run lint`, `npm run build`, and `npm audit --audit-level=critical` on the release revision. Review the repository security scan before release. Zero critical findings is required. The workflow enforces the executable checks before GHCR publishing.

The local checks use a resident copy of the working tree under `/private/tmp/site-release-validation`, because iCloud has offloaded files and dependencies in the original checkout. Use the supported Node version in `.nvmrc`. Preserve all original working-tree edits.

## Coolify setup

1. On the existing Coolify server, create or select a **Docker Image** application for this site. Set image name to `ghcr.io/enesyesil/me-enesyesil-dotcom` (verify against the GitHub repository), internal port `3000`, and a temporary HTTPS domain targeting that port (for example, `https://preview.example.com:3000` in the Domains field). Disable other auto-deployment triggers for this application.
2. Enable an HTTP health check at `/api/health` on port `3000`. Set `NODE_ENV=production`, `PORT=3000`, and `ORIGIN` to the temporary HTTPS origin; change `ORIGIN` to `https://enesyesil.me` during cutover. The image contains its release SHA; do not override `RELEASE_SHA` in Coolify.
3. The image runs as the `node` user. `RESUME_DATA_PATH=/tmp/resume-data.json` is an ephemeral counter. If persistence is required, mount a writable directory owned by UID 1000 and set the path inside it.
4. If GHCR is private, configure registry pull credentials on the Coolify server using a token with `read:packages`. Confirm the server can pull the exact published image.
5. Enable API Access in Settings > Advanced. Create a Coolify API token with update/deploy actions and the read access required for application/deployment verification. A deploy-only token is insufficient for updating the exact image tag and checking status. Restrict its scope where supported and allow the GitHub runner to reach the API. In this site's Configuration > Webhooks, copy **Deploy Webhook (auth required)**. Use the resource UUID webhook with `force=false`, not a tag webhook.
6. Configure the GitHub `production` environment and these Actions secrets:

| Secret                   | Value                                                                   |
| ------------------------ | ----------------------------------------------------------------------- |
| `COOLIFY_API_TOKEN`      | API token with application update, deploy, and read permissions         |
| `COOLIFY_DEPLOY_WEBHOOK` | `https://<coolify-host>/api/v1/deploy?uuid=<site-app-uuid>&force=false` |

Configure these two secrets through GitHub CLI from the repository root:

```sh
python3 scripts/setup-coolify-secrets.py
gh secret list --repo enesyesil/me-enesyesil-dotcom --env production
```

The helper prompts only for the webhook and hidden API token, and stores both through `gh secret set` using standard input. It preserves existing environment protection rules and does not deploy. Run it in your terminal; do not paste the token into chat. Alternatively, set them individually:

```sh
gh secret set COOLIFY_DEPLOY_WEBHOOK --repo enesyesil/me-enesyesil-dotcom --env production
gh secret set COOLIFY_API_TOKEN --repo enesyesil/me-enesyesil-dotcom --env production
```

The workflow derives the Coolify origin and single application UUID from the webhook. Public checks use the first HTTPS root domain in the application's `fqdn` configuration, dropping any internal target port suffix. Configure that domain in Coolify before releasing; no separate URL or UUID secrets are needed.

The deploy script validates the webhook's HTTPS format and single application target before sending credentials, updates the image name/tag, reads back the configuration, invokes the authenticated webhook with GET once, waits for that deployment to finish, verifies its recorded tag and healthy application status, and retries public `/api/health` readiness up to 12 times while requiring the released commit. It then smoke tests the home, Projects, IssueSight, Blog, Open Graph and resume-download routes, discovers a published blog post from the listing, and checks both its category and article route. Resume and Open Graph checks require the expected content types, a PDF signature/end marker, and a parsed SVG document. Review the visual layout on the temporary domain before cutover. Do not also add a GitHub repository push webhook that triggers Coolify before CI passes.

References: [Docker Image application](https://coolify.io/docs/applications/deployments/docker-image), [deploy webhooks](https://coolify.io/docs/core/automation/deploy-webhooks), [GitHub Actions](https://coolify.io/docs/applications/sources/github/actions), [application update API](https://coolify.io/docs/api/endpoints/applications/update-application-by-uuid), [deployment status API](https://coolify.io/docs/api/endpoints/deployments/get-deployment-by-uuid).

## Cutover and rollback

1. Configure the production secrets, review the final diff, and release the passing revision through `master`. Record the GHCR image tag/digest, previous image, Coolify deployment UUID, server, temporary domain and old DNS records.
2. Validate the temporary domain: exact `/api/health` commit; healthy container; home panel/timeline; project and blog category/post routes; Open Graph image; resume preview/download; desktop and mobile layout; keyboard navigation.
3. Add `https://enesyesil.me` to the healthy Coolify application and update `ORIGIN`. Point the live domain's DNS to the Coolify server. Verify TLS and that `/api/health` on the live domain reports the released SHA. Repeat route checks. Make the live domain the first HTTPS domain in the Coolify application's domain list so subsequent checks use it.
4. Retain the prior image. Test rollback on the temporary domain using [Coolify's rollback procedure](https://coolify.io/docs/applications/deployments/rollbacks), verify its prior commit and routes, then restore the intended release. If cutover fails, restore the recorded DNS and prior deployment.
5. After the cutover and rollback are verified, remove only this site's Dokploy application and site-specific credentials (`DOKPLOY_WEBHOOK_URL`, `DOKPLOY_APP_ID`, and any token unique to this site). Inspect credential consumers before deleting shared keys. Leave the Dokploy platform and its other services intact.

## Local verification

The resident snapshot passes all eight application tests, Svelte checks (zero errors), lint and production build. The webhook deployment suite has six tests covering deployment failures, exact commit verification, transient readiness, invalid assets and domain discovery and rejection of malformed/multi-resource webhook URLs. Svelte reports 1956 unused CSS warnings in the legacy Tailwind component. The completed baseline security scan found no critical/high source vulnerabilities and one medium blog refresh amplification issue, now fixed and regression tested. Dependency audit reports zero critical/high/moderate and three low advisories. Blog category/article navigation and the mobile menu were checked in the local production build. The local Docker daemon is stopped, so the image build still needs CI or a running Docker daemon.

## External work still required

GitHub CLI authentication was verified on October 1, 2026. The existing Production environment has no secrets configured yet. The Coolify deploy webhook, scoped API token and DNS access have not been supplied. The public check origin is read from the application configuration. No image has been published, no live deployment or DNS cutover has been performed, and no Dokploy application or credential has been removed. These remain required before the migration can be called complete.
