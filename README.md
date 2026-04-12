# Palm & Light Coffee Website — Beginner Guide

This guide is written for **non-developers** and walks you through:

1. Forking this project on GitHub
2. Publishing it on Vercel
3. Connecting your custom domain: **palmandlightcoffee.com**

---

## Before You Start

You only need:
- A **GitHub account** (free)
- A **Vercel account** (free)
- Access to your domain DNS settings for **palmandlightcoffee.com** (at your domain registrar, such as GoDaddy, Namecheap, Google Domains, Cloudflare, etc.)

> Tip: Keep two browser tabs open—one for **Vercel**, one for your **domain provider**.

---

## Part 1: Fork the Repository on GitHub

“Forking” means making your own copy of this project in your GitHub account.

1. Go to the original repository page on GitHub.
2. Click the **Fork** button (top-right area).
3. On the next screen:
   - Keep the owner as your account.
   - Keep the repo name (or rename if you prefer).
   - Click **Create fork**.
4. Wait a few seconds. You now have your own copy of the repo.

✅ You’re done with forking.

---

## Part 2: Publish to Vercel

Vercel can deploy your site directly from GitHub.

1. Go to [https://vercel.com](https://vercel.com) and sign in.
2. Click **Add New...** → **Project**.
3. Under “Import Git Repository,” find your forked repo and click **Import**.
4. Vercel usually detects the settings automatically for this project.
   - Framework: should auto-detect (Vite)
   - Build command: usually `npm run build`
   - Output directory: usually `dist`
5. Click **Deploy**.
6. Wait for deployment to complete.

When it finishes, Vercel gives you a default URL like:
`your-project-name.vercel.app`

Open that URL and confirm the site loads.

✅ Your website is now live on Vercel.

---

## Part 3: Add Custom Domain in Vercel

Now connect **palmandlightcoffee.com**.

### Step A — Add the domain in Vercel

1. In Vercel, open your project.
2. Go to **Settings** → **Domains**.
3. Enter: `palmandlightcoffee.com`
4. Click **Add**.
5. Also add: `www.palmandlightcoffee.com` (recommended)

Vercel will show DNS records you need to create.

---

### Step B — Update DNS at your domain provider

Go to where you bought/manage **palmandlightcoffee.com** and open DNS settings.

Create/update records to match what Vercel asks for. In most cases:

#### For root domain (`palmandlightcoffee.com`)
- Type: **A**
- Name/Host: `@`
- Value: `76.76.21.21`

#### For `www` subdomain (`www.palmandlightcoffee.com`)
- Type: **CNAME**
- Name/Host: `www`
- Value: `cname.vercel-dns.com`

> Important: If your provider already has conflicting A/CNAME records for `@` or `www`, remove old/conflicting ones first.

Save changes.

---

### Step C — Wait for verification

1. Return to Vercel’s **Domains** page.
2. Click **Refresh** (if needed).
3. Wait for status to become **Valid**.

DNS updates can be quick (a few minutes) or take up to 24–48 hours.

✅ Once valid, your site should work on:
- `https://palmandlightcoffee.com`
- `https://www.palmandlightcoffee.com`

---

## Optional: Make one version the “main” domain

In Vercel Domains settings, you can set either:
- `palmandlightcoffee.com` as primary, or
- `www.palmandlightcoffee.com` as primary.

Vercel will redirect the other one automatically.

---

## Updating the Website Later

When you make changes in your GitHub fork and push them:
- Vercel automatically redeploys the site.
- Your domain stays connected.

---

## Troubleshooting (Simple)

### “Domain not verified” in Vercel
- Re-check DNS values are exactly correct.
- Remove conflicting old records.
- Wait longer for DNS propagation.

### “Site works on vercel.app but not custom domain”
- Usually DNS is still propagating.
- Confirm both `@` and `www` records are correct.

### SSL/HTTPS warning
- Vercel auto-generates SSL after domain verifies.
- Give it a little time and refresh.

---

## License

This project is licensed under the **MIT License**, which allows free use, modification, and distribution.
See the [LICENSE](./LICENSE) file for full details.

---

## Need Help?

- Vercel domain docs: [https://vercel.com/docs/domains](https://vercel.com/docs/domains)
- Vercel support: [https://vercel.com/help](https://vercel.com/help)
