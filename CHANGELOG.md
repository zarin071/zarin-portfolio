# Changelog

All notable changes to this portfolio are documented here.
Format: `[date] — summary`, newest first.

---

## main (production)

### 2026-07-19
- Merge Michelin case study from staging to production
- Section numbers (01/02/03) now visible in dark mode (was black-on-black)
- Eggs 9 + 10 moved off shared Footer onto homepage-only sections (Testimonials, Contact)
- Footer privacy note updated: "homepage" not "site"
- Fun 404 page with glitching number and random designer messages

### 2026-07-18
- Staging branch + deployment pipeline: pushes to `staging` auto-deploy to `/staging` subfolder
- `next.config.js` made conditional on `GITHUB_PAGES=true` so Vercel/local builds work without basePath
- Fix packt-design-system.ts duplicate `problem`/`impact` fields (merge conflict leftovers)
- Analytics Agent password now opens GitHub repo in new tab

### 2026-07-14
- Restore `Figure`, `ProcessStep`, `Chapter` types lost in prior merge conflict
- Remove duplicate `roadmap`/`phases` keys from dash.ts
- Move DASH password to `NEXT_PUBLIC_WORK_PASSWORD` env var
- Remove `out/` build artefacts from git tracking
- Remove stale local branches

### Prior
- Easter Egg Hunt (10 eggs, HUD, combo system, confetti modal, Web3Forms)
- Playground page with AI Analytics Agent and Design System Audit Toolkit
- DASH and Packt DS case studies
- Michelin Fuel Savings case study
- Password-gated case study support
- Chat widget, dark mode, Nav reorder
- PlaygroundTeaser component on homepage
- Contact simplified to 3 links (EmailJS removed)
- About section rewritten (Person facet removed)

---

## staging

See `staging` branch CHANGELOG for in-progress work not yet on production.
