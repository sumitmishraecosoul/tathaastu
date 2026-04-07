# VPS Deploy Notes (Hostinger + Nginx)

This project is a Vite SPA. Use the Nginx config in `deployment/nginx/tathaastu.conf`.

## 1) Build locally

```bash
npm install
npm run build
```

This creates `dist/` with hashed assets.

## 2) Upload with old-file cleanup (recommended)

On VPS, replace the deployed `dist` directory atomically:

```bash
rm -rf /var/www/tathaastu/dist
mkdir -p /var/www/tathaastu/dist
```

Then upload your fresh local `dist/*` into `/var/www/tathaastu/dist`.

Why this matters:
- old hashed assets are removed
- no stale disk bloat
- new `index.html` references only current hashes

## 3) Nginx config

Copy `deployment/nginx/tathaastu.conf` to your site config path, for example:

```bash
sudo cp /path/to/repo/deployment/nginx/tathaastu.conf /etc/nginx/sites-available/tathaastu.conf
sudo ln -sf /etc/nginx/sites-available/tathaastu.conf /etc/nginx/sites-enabled/tathaastu.conf
```

Make sure `root` points to your real deploy path (default in file is `/var/www/tathaastu/dist`).

## 4) Validate and reload

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 5) Optional Brotli

The config includes commented Brotli directives.
Enable only if your Nginx build includes Brotli modules; otherwise keep them commented.

## 6) Cache behavior summary

- `index.html`: no-cache/no-store (always fresh)
- hashed files in `/assets/*-hash.ext`: 1 year immutable
- other static files: 7 days

This ensures fast repeat loads and safe updates after each deployment.

