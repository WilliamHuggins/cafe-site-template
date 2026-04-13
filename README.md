# Cafe Website Template — Business Owner Setup Guide

This guide is written for **non-developers** and shows you how to:

1. Fork this repo into your own GitHub account
2. Publish your own copy on Vercel
3. Connect your own custom domain
4. Customize content/design quickly with Claude Code or OpenAI Codex
5. Enable optional prototype-only features using environment variables

---

## 1) Fork this repo to your own account

Forking makes a private working copy under your GitHub account.

1. Open this repository on GitHub.
2. Click **Fork** (top-right).
3. Choose your account as the owner.
4. Keep or rename the repository.
5. Click **Create fork**.

You now own your own version and can safely customize it for your business.

---

## 2) Deploy your fork to Vercel

1. Sign in at [vercel.com](https://vercel.com).
2. Click **Add New → Project**.
3. Import your forked GitHub repository.
4. Keep default Vite settings (Vercel auto-detects these in most cases):
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

After deploy, Vercel gives you a temporary URL like:
`your-project.vercel.app`

---

## 3) Connect your custom domain after publish

1. In Vercel, open your project.
2. Go to **Settings → Domains**.
3. Add your root domain (example: `yourbusiness.com`).
4. Add your `www` domain (example: `www.yourbusiness.com`).
5. Copy the DNS records Vercel asks for into your registrar (GoDaddy, Namecheap, Cloudflare, etc.).
6. Wait for DNS propagation and domain verification.

Typical DNS setup:

- Root (`@`) record: **A** → `76.76.21.21`
- `www` record: **CNAME** → `cname.vercel-dns.com`

> If records already exist for `@` or `www`, remove conflicting entries first.

---

## 4) Customize quickly with Claude Code or OpenAI Codex

You can use either tool to speed up edits in your fork.

### What these tools are best for

- **Styling updates:** colors, spacing, typography, button styles
- **Naming conventions:** rename brand text, section headings, product names
- **Menus & navigation:** add/remove menu items, reorder links, route updates
- **Copy/content edits:** hero section text, about text, CTA wording, contact language

### Prompt examples you can use directly

#### Styling

```txt
Update the site to use a warm neutral palette with deep green accents.
Keep contrast WCAG-compliant and preserve all existing page layouts.
```

#### Naming conventions

```txt
Replace all brand mentions with "<YOUR BUSINESS NAME>" and keep title case
for navigation labels.
```

#### Menu + links

```txt
Update header nav to: Home, Menu, Catering, About, Contact.
Remove Careers and Merch links, and ensure mobile nav matches desktop.
```

#### Copy rewrite

```txt
Rewrite homepage copy for a premium neighborhood cafe tone.
Keep sections the same length and avoid changing page structure.
```

### Recommended workflow

1. Ask AI to propose a plan first.
2. Approve only one focused change at a time.
3. Run local checks (`npm run build`).
4. Commit and push.
5. Let Vercel auto-deploy and review live.

---

## 5) Dual version (Production + Prototype) via environment variables

This template now supports a simple dual-version setup:

- **Production mode** (default): clean public-facing site
- **Prototype mode**: optional banner + prototype-only page for internal demos

### Add these Environment Variables in Vercel

In **Vercel → Project → Settings → Environment Variables**, add:

| Variable | Value | What it does |
|---|---|---|
| `VITE_SITE_VARIANT` | `production` or `prototype` | Switches app behavior by environment |
| `VITE_SHOW_PROTOTYPE_BANNER` | `true` or `false` | Controls the top prototype banner |
| `VITE_ENABLE_PROTOTYPE_PAGE` | `true` or `false` | Enables the `/prototype-notes` route |

### Recommended values

- **Production environment:**
  - `VITE_SITE_VARIANT=production`
  - `VITE_SHOW_PROTOTYPE_BANNER=false`
  - `VITE_ENABLE_PROTOTYPE_PAGE=false`

- **Preview / prototype environment:**
  - `VITE_SITE_VARIANT=prototype`
  - `VITE_SHOW_PROTOTYPE_BANNER=true`
  - `VITE_ENABLE_PROTOTYPE_PAGE=true`

> Tip: Set these per Vercel environment (Production / Preview / Development) so only your prototype builds show prototype content.

---

## 6) Additional prototype-only page included

A prototype-only page is now available at:

- `/prototype-notes`

It is automatically hidden unless `VITE_ENABLE_PROTOTYPE_PAGE=true`.

Use it for:

- Temporary client notes
- In-progress feature checklist
- Internal links not ready for public launch

---

## Troubleshooting

### Domain not verifying

- Re-check DNS entries exactly match Vercel requirements
- Remove conflicting old records
- Wait up to 48 hours for propagation

### Site loads on `vercel.app` but not your domain

- DNS likely still propagating
- Confirm both root and `www` entries are correct

### HTTPS warning

- SSL is auto-provisioned after domain verification
- Wait and refresh

---

## License

MIT License. See [LICENSE](./LICENSE).

---

## Helpful links

- [Vercel Domains Docs](https://vercel.com/docs/domains)
- [Vercel Support](https://vercel.com/help)
