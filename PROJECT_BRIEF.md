# Project Brief — thedevshubham.com

Paste this whole document as your first message to Claude Code. It has everything needed to
continue building without losing context.

## Who this is for

Shubham Bhatt — frontend engineer, 7 years experience (NielsenIQ, Publicis Sapient, Kellton
Tech — **do not name these employers anywhere on the site**, only the client projects below are
disclosed). Real name used consistently as **thedevshubham** across Instagram, GitHub, X, and
this domain. LinkedIn is intentionally excluded from the growth plan — no link to it anywhere on
this site, and no resume download anywhere either.

**Important distinction:** Instagram deliberately never shows his face (mystery/anonymity is
part of that brand). This **portfolio site is different** — showing his face here is fine and
already planned (hero photo placeholder is waiting for a real photo). Don't apply the
no-face rule to this website.

## Goal

A portfolio + services site that:
1. Works as a freelance lead-gen "storefront" — linked from Instagram and X bios
2. Ranks #1 on Google when someone searches "thedevshubham" or "Shubham Bhatt developer"
3. Visually proves the craft it's selling — fast, accessible, well-built, not just claimed

## Services offered (broader than just Shopify)

- Web app development (React/Next.js)
- Shopify & e-commerce
- Web scraping & bots/automation
- Performance optimization (Core Web Vitals)
- Accessibility (A11y, WCAG)

## Real project case studies (already in `lib/projects.ts`)

- **Byzzer** — retail analytics dashboards (React, TypeScript)
- **Stio Apparel** — Shopify 2.0 storefront (Shopify, Liquid, Vue.js)
- **Dropps** — Shopify subscription flows (Shopify, React, TypeScript)
- **Sunbelt Rentals** — React + AEM e-commerce platform (React, GraphQL)

No hard performance metrics are available for these yet — copy uses honest, directional
language ("improved load times") rather than invented numbers. **Do not fabricate statistics.**
If real metrics are ever gathered (e.g. Lighthouse before/after screenshots), they can be added
later.

## Design system (already wired into `tailwind.config.js` and components)

Inspired by reference site `montgomery-6ca9de.webflow.io`, adapted for this brand:

- **Colors:** cream base `#F7EFE4`, near-black `#14120D`, accents lime `#C7DE4A`, mint `#A8E890`,
  gold `#EFC94C`
- **Type:** Anton (bold condensed display, all-caps), Inter (body), JetBrains Mono (labels/tags/eyebrows)
- **Signature mechanics:**
  - Scrolling marquee ticker at the very top
  - Manifesto section: full-bleed dark background, overlapping colored word-blocks (not a plain headline)
  - Services list: full-width stacked rows with dashed dividers, one row gets a full-bleed highlight color (not a card grid)
  - Work section: horizontally-scrollable, **fully colored** project cards (not white cards with a small tag), thick 2px black border
  - Process steps: circles connected by a dashed line
  - Footer: full-bleed dark section, huge "WRITE ME" in lime
- Thick black borders and dashed dividers are the unifying visual device throughout

## Architecture (already scaffolded)

- **Next.js 14, App Router, static export** (`output: 'export'` in `next.config.js`) — required
  for free GitHub Pages hosting, no server cost
- **Tailwind CSS**, custom theme matching the tokens above
- **Site map:** `/` (home), `/work` (index), `/work/[slug]` (4 case study pages), `/services`, `/contact`
- **Contact form:** Formspree (no backend needed) — form ID still needs to be added
- **SEO:** JSON-LD Person schema, sitemap.xml, robots.txt, per-page metadata already in place
- **Analytics:** planned via **Supabase** (free tier), custom event tracking — page views, button
  clicks, contact form submissions. Explicitly **not** Google Analytics (avoids needing a cookie
  consent banner). Not wired in yet — deliberately deferred until the site itself is solid.
- **Hosting:** GitHub Pages + custom domain `thedevshubham.com` (or `.dev` as backup)

## Current state

Full project already scaffolded and provided as a zip (`thedevshubham-site.zip`) — all pages,
components, and the real project data file exist and should run with `npm install && npm run dev`.

## Immediate next steps, in priority order

1. Run `npm install`, verify the dev server works, fix any errors from the scaffold
2. Sign up at formspree.io, get a form ID, paste it into `components/ContactForm.tsx`
   (replace `YOUR_FORM_ID`)
3. Once a hero photo is available: add it to `public/hero.jpg`, swap the placeholder `<div>` in
   `app/page.tsx`'s hero section for a real `<img>` tag (see comment in README.md for the exact code)
4. Test each project's `liveUrl` in `lib/projects.ts` for iframe-embeddability — some sites block
   embedding via `X-Frame-Options`. Set `embeddable: false` for any that fail, so they fall back
   to the link-only card instead of a broken embed
5. Write a GitHub Actions workflow to auto-deploy the `out/` folder to GitHub Pages on push to
   `main`, instead of manual copying
6. Later (not urgent): wire up Supabase analytics — schema + a small tracking script for page
   views and click events

## Hard constraints — do not violate these

- No employer names (NielsenIQ, Publicis Sapient, Kellton Tech) anywhere on the site
- No LinkedIn link anywhere on the site
- No resume download link anywhere on the site
- No fabricated statistics or metrics — honest, directional language only where hard numbers
  aren't available
- The site itself must stay fast and accessible — it's dogfooding the performance/A11y services
  being sold, so don't regress Lighthouse scores when adding features
