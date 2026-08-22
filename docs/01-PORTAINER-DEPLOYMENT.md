# 1 — Deploy in Portainer

## Before deployment

Do not delete the existing Homepage, Nextcloud, MariaDB, Redis, Nginx Proxy Manager, Portainer or Uptime Kuma containers.

This project creates only:

```text
eazykredit-web
eazykredit-api
eazykredit_leads volume
eazykredit Docker network
```

The test site uses host port `8090`, bound only to `127.0.0.1`.

## A. Put the source in Git

1. Create a new private branch or private test repository.
2. Upload the complete contents of this package.
3. Confirm that `.env.local`, `.env`, passwords and tokens are not committed.
4. Use a branch such as `franky-test`.

Recommended Git layout:

```text
repo-root/
  compose.portainer.yml
  Dockerfile
  backend/
  nginx/
  public/
  src/
  package.json
  package-lock.json
```

## B. Create the Portainer stack

1. Open Portainer.
2. Select the Docker environment at `192.168.29.251`.
3. Select **Stacks**.
4. Select **Add stack**.
5. Stack name: `eazykredit-test`.
6. Build method: **Repository**.
7. Enter the private Git repository URL.
8. Repository reference: the test branch, for example `refs/heads/franky-test`.
9. Compose path: `compose.portainer.yml`.
10. For a private repository, use a read-only deploy token or read-only repository credential.

## C. Add Portainer environment variables

Add the non-secret values first:

```text
NEXT_PUBLIC_SITE_URL=https://eazykredit.franky.co.in
NEXT_PUBLIC_DEPLOYMENT_STAGE=test
EAZYKREDIT_PORT=8090
X_ROBOTS_TAG=noindex, nofollow
ALLOWED_HOSTS=eazykredit.franky.co.in
PUBLIC_PHONE=+919885011157
PUBLIC_WHATSAPP=+919885011157
STORE_LEADS=true
LEAD_RETENTION_DAYS=30
RATE_LIMIT_COUNT=5
RATE_LIMIT_WINDOW_SECONDS=600
SEND_APPLICANT_ACK=true
```

Email, WhatsApp and Turnstile secrets are covered in `03-EMAIL-WHATSAPP-AUTOMATION.md`. Enter them directly in Portainer; never commit them to Git.

## D. Deploy

Select **Deploy the stack**. The first build downloads Node/Python/Nginx images and npm packages, so it can take several minutes.

Expected containers:

```text
eazykredit-api    healthy
eazykredit-web    healthy
```

## E. Test locally on the home-lab VM

SSH to `192.168.29.251` and run:

```bash
curl -fsS http://127.0.0.1:8090/healthz
curl -fsS http://127.0.0.1:8090/api/healthz
curl -fsS http://127.0.0.1:8090/api/config
```

Expected health response:

```json
{"status":"ok"}
```

Check logs without printing secrets:

```bash
docker logs --tail 100 eazykredit-web
docker logs --tail 100 eazykredit-api
```

## F. Safe rollback

In Portainer:

```text
Stacks -> eazykredit-test -> Stop this stack
```

This affects only the EAZYKREDIT test stack. Do not select **Remove volumes** unless the business owner has approved deletion of the stored test leads.
