# Changelog — Zarin Solanki Portfolio

All notable changes to the site are recorded here. Newest first.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).
Reference target: [andrerodrigues.in](https://andrerodrigues.in/).

---

## [v1.0.0] — 2026-07-14 — Initial public release

First stable version of the portfolio. Marks the baseline from which all future iterations are versioned.

### Added
- **Packt DS Storybook link** — "View Project" on the Packt Design System case study now links to the live Storybook at `zarin071.github.io/packt-ds/` with the label "Packt DS Storybook ↗" (replaces the generic packtpub.com link).
- **`projectLinkLabel` field** added to the `Project` type so any project can override the default "Live project ↗" button label.
- **Easter egg hunt** — 10 hidden emoji eggs across the site with score HUD, combo multiplier, confetti, Wall of Hunters submission, and session-persistent state.
- **Easter egg notification** scoped to homepage only — the intro banner no longer fires on inner pages (`/work/`, `/about`, etc.).
- **Packt Design System case study** fully built out with overview, narrative sections, timeline entries, and 8 survey chart images (`public/packt/survey/`).
- **Real company logos** in `TrustedBy` strip: bp (SVG), Michelin, Packt, TCS — rendered monochrome, full opacity on hover.
- **Ask Zarin assistant** — 22 resume-grounded Q&As covering all roles, projects, education, awards, and contact.
- **About Me page** at `/about` with Testimonials section; removed from homepage to keep the home flow clean.
- **Playground section** — accessible at `/playground` but unlinked from nav.
- **`public/resume.pdf`** — selectable, ATS-clean single-column résumé.
- `docs/DESIGN-SPEC.md`, `docs/AUDIT.md`, `docs/CHANGELOG.md`.

### Design & layout
- **Editorial hero** — large left-aligned Syne heading with Fraunces italic accents and floating radial-gradient blob background.
- **Full-bleed layout** — all sections use consistent edge padding (`px-6 md:px-10 lg:px-16`); no centered `max-w-6xl` cap on the outer shell.
- **Big cover-art project cards** — featured project full-width, two others in a 2-up grid with gradient covers, hover scale, and external links.
- **Case-study detail pages** — left-aligned editorial layout with gradient banner, tag pills, and parallax scroll effect.
- **Syne** applied to all headings; **Fraunces** italic for accent words and editorial body.
- **3D entrance transition** on `/about` — page tilts up out of depth on navigation in.
- Home page flow: Hero → Worked-with → Work → Contact.

### Projects
- Featured set: Conversational AI Dealer Booking, Fleet CO₂ Emissions Calculator, Packt Design System.
- Five earlier case studies archived in `archivedProjects` (not deleted).

---

## [2026-07-14] — Packt Design System case study

### Added
- **Packt Design System case study** (`src/data/projects/packt-design-system.ts`) fully built out: overview split into two paragraphs, narrative sections, timeline entries, and survey data images (`public/packt/survey/`).
- **8 survey chart images** added to `public/packt/survey/`: components-used, ease-of-use, improvements-wordcloud, issues-wordcloud, reasons-usage, support-channels, usefulness-alt, usefulness-rating.
- `gallery` field added to `ProjectDetails` type (`src/data/projects/_types.ts`) to support image galleries in case studies.

### Changed
- **`ProjectPageClient.tsx`** updated to render gallery images and new content structure for the Packt case study.
- Overview copy broken into two paragraphs with `\n\n` separators for better readability on the case study page.
- `layout.tsx` minor metadata tweak.

---

## [Unreleased]

### Changed — About Me page
- Renamed **About → "About Me"** (section label + nav item).
- Compacted the About section: full-width left-aligned layout, stat card left-aligned (was centered), reduced section/heading/tab/grid spacing, smaller stat, and trimmed the page's top offset (`pt-20/24` → `pt-14/16`).
- Added a **3D entrance transition** on `/about` — the page tilts up out of depth (`rotateX 18°→0`, `y`, `scale`, `perspective 1400`) when navigating in from home.

### Changed — full-bleed layout
- **All sections aligned to full width.** Removed the centered `max-w-6xl` cap from `.section-container`, the nav, footer, Testimonials, TrustedBy, and the case-study hero; all now use the hero's `px-6 md:px-10 lg:px-16` edge padding. Every left edge (nav logo, hero, section labels) lines up at the same x.

### Changed — structure & branding pass
- **Real company logos** replace the text wordmarks in `TrustedBy.tsx`: bp (SVG), Michelin, Packt, TCS. Backgrounds were stripped and the images trimmed, staged in `public/logos/`. Rendered monochrome (`grayscale`, `dark:invert`) at ~60% opacity → full on hover, so they read cleanly in both themes (A-12 done).
- **Ask Zarin assistant expanded** — `chat-config.ts` grew from 8 to 22 resume-grounded Q&As (added Packt & TCS roles, all 3 projects, education, awards, personal/MMA+food, contact, years-of-experience). Smarter keyword matcher for free-typed questions, warmer welcome/fallback copy, and the dev-hint footer replaced with a visitor-facing line.
- **"Featured" badge removed** from project cover cards and the case-study banner (the featured project still renders full-width).
- **About + Testimonials moved to a dedicated `/about` page** (`src/app/about/page.tsx`); removed from the home page. Nav "About" now routes to `/about`. Home flow is now Hero → Worked-with → Work → Contact.

### Changed — copy & polish pass
- **Hero headline** now reads "Hi, I'm Zarin, a multi-disciplinary digital product designer. Always at the intersection of cutting-edge innovation and user-centric design." (mirrors the reference's phrasing).
- **Hero typeface → Syne** (geometric sans, added to `globals.css` + `tailwind.config.js` as `font-syne`). Emphasis phrases use `font-extrabold` since Syne has no true italic.
- **Hero headline extended full-width** — breaks out of the `max-w-6xl` container to a full-bleed padded row.
- **Hero size tuned so CTAs sit above the fold** — headline capped at `clamp(2rem, 4.4vw, 4.5rem)` with tightened vertical rhythm (`py-20`, `mt-6/mt-8`). Verified CTAs render above the fold at 820px viewport height.
- **Syne applied to all headings** — `.heading-xl/.heading-lg/.heading-md` switched from Fraunces to Syne (`font-syne`, `font-semibold`, `tracking-tight`). Each section's italic accent word now renders in **Fraunces italic** (`font-serif italic`) for a serif-against-sans contrast; editorial body serif (quotes, case-study copy, stat numbers) stays Fraunces.
- **Testimonials** vertical spacing tightened (section padding `py-24/32` → `py-16/20`, heading margin and min-height reduced) so the section is more compact.
- **Playground hidden from the UI** — removed from the nav (`Nav.tsx`). The `/playground` route file still exists but is unlinked; re-add to `navItems` to restore.
- **Case-study detail pages** (`/work/[slug]`) restyled to match the new card aesthetic: left-aligned editorial layout with the project's gradient **cover-art banner** (Featured badge + category label) at the top, subtle tag pills, and a parallax scale/fade on scroll. Replaced the previous centered accent-gradient hero.

### Added — andrerodrigues.in look & feel recreation
- **Editorial hero** (`Hero.tsx`): rebuilt as a large left-aligned serif statement with italic-emphasised roles + supporting line, replacing the centered "I build bridges" headline and rotating-role widget.
- **Lightweight animated visual**: three blurred, slowly-floating radial-gradient blobs behind the hero (`.hero-blob` in `globals.css`), frozen under `prefers-reduced-motion`.
- **`TrustedBy.tsx`** worked-with strip: bp · Michelin · Packt · TCS as styled grayscale wordmarks (real logo SVGs can be dropped in later).
- **Big cover-art project cards** (`Work.tsx`): featured project full-width, other two in a 2-up grid; each card has a gradient cover, `Featured` badge, category label, hover scale + ↗ arrow, tags, and external Live/Case-study links. Added `cover`, `coverLabel`, `featured` fields to the `Project` type and the 3 projects.
- **`prefers-reduced-motion`** media query in `globals.css` (A-06).

### Changed — layout
- Section order now work-forward to match the reference: Hero → Worked-with → Work → About → Testimonials → Contact.
- Contact heading promoted to `heading-xl` as a big closing CTA.

### Added
- `docs/DESIGN-SPEC.md` — design system, tokens, section structure, featured-project rules, and deviations from the reference site.
- `docs/AUDIT.md` — living gap checklist between current state and the spec.
- `docs/CHANGELOG.md` — this file.
- `archivedProjects` export in `src/data/projects.ts` — preserves the 5 removed case studies for future reuse without relying on git history.

### Changed
- **Title aligned to the resume** — site now reads "UX Researcher | AI Product Designer | Design Engineer" (was "UX Engineer") across the hero rotating roles, `layout.tsx` metadata, and `resume.ts`. The "Design & UX Engineering" skills-category label is unchanged (it matches the resume's skills section).
- **Featured projects narrowed 8 → 3** per the plan: Conversational AI Dealer Booking (2024), Fleet CO₂ Emissions Calculator (2023), Packt Design System (2018).
- **Fleet CO₂ project** rewritten with accurate scope (fleet composition + fuel inputs → monthly CO₂ output). Live link now points to the actual tool she built — the fuel-saving calculator at `b2b.michelin.in/fuel-saving-calculator` — with the connectedfleet.michelin.com feature/write-up as the case-study link.
- **Conversational AI project** reframed around finding **and** booking a tyre-service dealer entirely through conversation (no site navigation), matching Zarin's description.

### Removed
- Five case studies moved from the featured `projects` array into `archivedProjects`: bpcore Design System, Salesforce Dashboard, Michelin ENGAGE Portal, Swiggy NUX, Michelin B2C Lifestyle Pages.

### Added
- Real `public/resume.pdf` (`ZarinSolanki_Resume_2026.pdf`) replacing the 0-byte placeholder. Nav resume links now open in a new tab and download with a proper filename. ATS check passed — selectable text, single-column reading order, standard section headings (A-05).

### Verified
- `npm run build` passes clean; `/work/[slug]` now generates exactly the 3 featured slugs (A-14).
- No component, chat preset, or testimonial links to a removed project slug (A-15).

---

_Template for future entries:_

```
## [YYYY-MM-DD] — short title
### Added / Changed / Removed / Fixed
- description (audit ref A-XX if applicable)
```
