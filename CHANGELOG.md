# Changelog

All notable changes to this portfolio are documented here.
Format: `[date] — summary`, newest first.

---

## staging (preview)

### 2026-07-19
- Repo cleanup: remove tracked `src/.DS_Store`, `public/figma-plugin-portfolio.docx`, orphaned `src/app/food/` dir
- Section numbers (01/02/03) now visible in dark mode (was black-on-black)
- Eggs 9 + 10 moved off shared Footer onto homepage-only sections (Testimonials, Contact)
- Footer privacy note updated: "homepage" not "site"
- Fun 404 page added (`/not-found.tsx`) — glitching number, random designer messages, nav pills
- 404 hint corrected: eggs are on the homepage, not "the site"

### 2026-07-18
- Staging deployment pipeline: pushes to `staging` auto-deploy to `/staging` subfolder on GitHub Pages
- `next.config.js` conditional on `GITHUB_PAGES=true`; staging uses `/zarin-portfolio/staging` basePath
- Analytics Agent password unlocks GitHub repo in new tab instead of showing "You're in" state
- Fix packt-design-system.ts duplicate `problem`/`impact` fields (merge conflict artifacts)

### 2026-07-14
- Restore `Figure`, `ProcessStep`, `Chapter` types lost in prior merge conflict
- Remove duplicate `roadmap`/`phases` keys from dash.ts
- Move DASH password to `NEXT_PUBLIC_WORK_PASSWORD` env var
- Remove `out/` build artefacts from git tracking
- Remove stale local branches (4 branches)

### Prior
- Easter Egg Hunt: 10 eggs across homepage, HUD bottom-left, combo system, confetti, Web3Forms Wall of Hunters
- Playground page: AI Analytics Agent (overview + password → GitHub) and Design System Audit Toolkit (2 free skills)
- DASH case study (password-gated) with roadmap phases, VP discovery, strategy cockpit
- Packt DS case study: 2018 style guide → 2026 AI-assisted system, narrative chapters, gallery
- Michelin Fuel Savings case study with cover video, 7 screenshots
- Staging branch with auto-deploy separate from main production
- Chat widget, dark mode, Nav reorder (Work → About Me → Playground → Contact)
- PlaygroundTeaser component on homepage between Work and Testimonials
- Contact simplified to 3 links (EmailJS/guestbook removed)
- About section rewritten (MMA/food Person facet removed)

---

## main (production)

Tracks what's live at https://zarin071.github.io/zarin-portfolio/
Merge staging → main to publish. Never commit directly to main.
