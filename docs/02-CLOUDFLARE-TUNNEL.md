# 2 — Connect `eazykredit.franky.co.in`

The Franky Lab tunnel is locally managed. Add the route in `/etc/cloudflared/config.yml`, not in the dashboard route editor.

## A. Back up the tunnel file

```bash
sudo cp /etc/cloudflared/config.yml \
  /etc/cloudflared/config.yml.backup-$(date +%Y%m%d-%H%M%S)
```

## B. Add the ingress rule

Place this rule before the final `http_status:404` rule:

```yaml
  - hostname: eazykredit.franky.co.in
    service: http://localhost:8090
```

The relevant section should resemble:

```yaml
ingress:
  - hostname: franky.co.in
    service: http://localhost:8088

  - hostname: home.franky.co.in
    service: http://localhost:3000

  - hostname: nextcloud.franky.co.in
    service: http://localhost:8081

  - hostname: eazykredit.franky.co.in
    service: http://localhost:8090

  - service: http_status:404
```

Preserve every existing working route.

## C. Validate and restart

```bash
sudo cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
sudo cloudflared --config /etc/cloudflared/config.yml \
  tunnel ingress rule https://eazykredit.franky.co.in
sudo systemctl restart cloudflared
sudo systemctl status cloudflared --no-pager
```

## D. Add DNS

Use one of these methods.

### Cloudflare DNS interface

Create:

```text
Type: Tunnel
Name: eazykredit
Target: homelab
Proxy status: Proxied
```

### Local command

```bash
cloudflared tunnel route dns \
  8f9157ae-27e6-4a88-9691-273502d9a868 \
  eazykredit.franky.co.in
```

If a record already exists, edit or remove only that conflicting `eazykredit` web record. Do not modify MX, SPF, DKIM or DMARC records.

## E. Test

```bash
curl -I http://127.0.0.1:8090
curl -I https://eazykredit.franky.co.in
```

Then open the address in a private/incognito browser window.

For a private demonstration, place the hostname behind Cloudflare Access and allow only the owner and reviewer email addresses.
