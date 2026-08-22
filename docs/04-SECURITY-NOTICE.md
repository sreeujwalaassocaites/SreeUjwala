# 4 — Security Notice

## Immediate action: rotate the old Twilio credential

The uploaded source archive contained a `.env.local` file with Twilio credentials. The modified package removes that file, but removal does not make the exposed credential safe.

The Twilio account owner should immediately:

1. Revoke/rotate the exposed Auth Token or API key in Twilio.
2. Update any legitimate deployment that used the old value.
3. Check Twilio message and authentication logs for unexpected use.
4. Remove the secret from the Git repository and its history if it was committed.
5. Enable repository secret scanning where available.

Never paste replacement credentials into chat or commit them to Git. Enter them directly in Portainer environment variables.

## Test-site controls

- Keep `NEXT_PUBLIC_DEPLOYMENT_STAGE=test`.
- Keep `X_ROBOTS_TAG=noindex, nofollow`.
- Prefer Cloudflare Access while only the owner and developer are testing.
- Enable Cloudflare Turnstile before sharing the form broadly.
- Use test names and contact details until the owner approves real-data testing.
- Do not accept identity documents through this public form.

## Stored leads

The API stores leads in the Docker volume `eazykredit_leads` for 30 days by default. The database includes names, mobile numbers, email addresses, city, employment type, income and requested amount.

- Limit Docker/Portainer access.
- Back up only when required.
- Encrypt any exported CSV.
- Do not email CSV exports through personal accounts.
- Delete test data after acceptance testing.
- Set `STORE_LEADS=false` only after another reliable delivery/record system is confirmed.

## Turnstile

Set both values together:

```text
TURNSTILE_SITE_KEY=<public site key>
TURNSTILE_SECRET_KEY=<secret key>
```

Create the widget for `eazykredit.franky.co.in`. The backend validates every token with Cloudflare Siteverify and checks the returned hostname.
