# thedevshubham.com

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy

1. **Contact form:** Sign up free at https://formspree.io, create a form, and paste your
   form ID into `components/ContactForm.tsx` (replace `YOUR_FORM_ID`).
2. **Hero photo:** Drop your photo into `public/hero.jpg`, then in `app/page.tsx` replace the
   placeholder `<div>` inside the hero photo block with:
   ```jsx
   <img src="/hero.jpg" alt="Shubham Bhatt, frontend engineer" className="w-full h-full object-cover" />
   ```
3. **Case study previews:** In `content/projects.json`, each project has `embeddable: true/false`.
   Check each live URL yourself — if the site refuses to load in an iframe (shows blank or an
   error), set `embeddable: false` so it falls back to the link-only card instead.

## Build for GitHub Pages

```bash
npm run build
```

This outputs a static site into the `out/` folder (thanks to `output: 'export'` in
`next.config.js`). Push the contents of `out/` to your GitHub Pages repo, or use a GitHub Action
to automate it — happy to write that workflow file too when you're ready.

Then follow the domain steps we already worked out:
1. Add `thedevshubham.com` as a custom domain in your repo's Settings → Pages
2. Point your registrar's DNS at GitHub's IPs (A records) or your `username.github.io` (CNAME)
3. Enable "Enforce HTTPS" once DNS propagates

## Analytics (Supabase) — not wired in yet

We agreed to hold off on this until the site itself is solid. When ready, this needs:
- A Supabase project + table for events
- A small tracking script in `app/layout.tsx` firing on page load and key button clicks
- Ask me and I'll build this next.
