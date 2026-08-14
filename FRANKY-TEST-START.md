# Franky Lab Test Deployment

## Test objective

Deploy the EAZYKREDIT test build from the `franky-test` Git branch to:

`https://eazykredit.franky.co.in`

The no-additional-subscription test flow is:

1. Visitor submits the form.
2. The inquiry is validated and stored in the local Docker volume `eazykredit_leads` for 30 days.
3. A notification email is sent to `franky526@gmail.com`.
4. An acknowledgment email is sent to the applicant.
5. The success page offers a pre-filled **Continue on WhatsApp** button.

Automatic API-generated WhatsApp notifications are disabled for this test because official WhatsApp API messaging can introduce provider/platform charges. Do not use unofficial WhatsApp-Web automation on a real business number.

## Git branch

Create and use a branch named:

`franky-test`

Do not replace the friend's main branch until the test is approved.

## Portainer repository stack

- Stack name: `eazykredit-test`
- Repository: `https://github.com/franky526/SreeUjwala`
- Repository reference: `refs/heads/franky-test`
- Compose path: `compose.portainer.yml`

Copy the values from `FRANKY-TEST-PRIVATE-ENV.txt` into Portainer. Do not commit that local file.

## Gmail

Enable Google 2-Step Verification, create a dedicated App Password named `EazyKredit Homelab`, and paste the 16-character App Password only into Portainer as `SMTP_PASSWORD`. Never use or share the normal Gmail password.

## Local tests

```bash
curl -fsS http://127.0.0.1:8090/healthz
curl -fsS http://127.0.0.1:8090/api/healthz
```

Both should return a JSON response containing `"status":"ok"`.

## Cloudflare tunnel

Add this ingress rule before the final `http_status:404` rule:

```yaml
  - hostname: eazykredit.franky.co.in
    service: http://localhost:8090
```

Then validate and restart:

```bash
sudo cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
sudo systemctl restart cloudflared
sudo systemctl status cloudflared --no-pager
```

Add a Cloudflare DNS Tunnel record named `eazykredit` targeting the existing `homelab` tunnel.

## Before production

Replace the test recipient, SMTP account, public phone/WhatsApp number, domain, privacy contact, business address, and verified lender/business claims with values approved by the business owner.
