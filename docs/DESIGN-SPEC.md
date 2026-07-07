# Design Spec — Zarin Solanki Portfolio

> Single source of truth for the look, feel, and structure of the site.
> Update this file **before** making design changes; log the change in `CHANGELOG.md`.

- **Owner:** Zarin Solanki
- **Stack:** Next.js 16 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion 11
- **Reference for look & feel:** [andrerodrigues.in](https://andrerodrigues.in/) — minimal, light, generous whitespace, editorial type, a small grid of project case studies with hover interaction.
- **Content source (previous site):** [zortfolio.framer.website](https://zortfolio.framer.website/)

---

## 1. Design Principles

1. **Minimal & editorial.** White space is a feature. Big serif headlines, quiet supporting text. Nothing decorative without a job.
2. **Content first.** The work speaks. Each project reads Problem → Approach → Impact, with a measurable outcome.
3. **Calm motion.** Entrances are subtle (fade + rise). Motion guides attention, never competes with it.
4. **Light by default, dark by choice.** Light is the primary aesthetic (matches the reference); dark mode is a first-class toggle, not an afterthought.
5. **Accessible.** WCAG AA contrast, keyboard-navigable, respects `prefers-reduced-motion`, semantic landmarks.

---

## 2. Design Tokens

Defined in `tailwind.config.js`. Do not hardcode hex values in components — use the token classes.

### Color

| Token | Light | Role |
|-------|-------|------|
| `cream` | `#FFFFFF` | Page background |
| `ink` | `#111111` | Primary text / primary buttons |
| `warmGray` | `#6B6B6B` | Secondary / supporting text |
| `accent` | `#111111` | Accent (currently monochrome — see note) |
| `subtle` | `#E5E5E5` | Borders, dividers, card fills |

| Token | Dark | Role |
|-------|------|------|
| `darkBg` | `#121212` | Page background |
| `darkInk` | `#EDEDED` | Primary text |
| `darkWarmGray` | `#888888` | Secondary text |
| `darkSubtle` | `#2A2A2A` | Borders, dividers |

> **Accent note:** `accent` is currently monochrome (`#111111`) to stay true to the reference's restraint. If a signature color is ever introduced, change it **only** in `tailwind.config.js` and record it here.

### Typography

- **Display / headings:** `Syne` (geometric sans, weights 400–800). Powers the full-bleed hero headline **and** all `.heading-xl/.heading-lg/.heading-md` (section titles, project card titles, case-study title). Class: `font-syne`. Syne has no true italic.
- **Serif accent:** `Fraunces` — used for (a) the single italic accent word inside each section heading (`font-serif italic`, a deliberate serif-against-sans contrast), and (b) editorial body serif: testimonial quotes, case-study Problem/Approach/Impact copy, stat numbers. Loaded via Google Fonts in `globals.css`.
- **Sans (UI/body):** `Inter` — body copy, labels, nav, buttons.
- **Emphasis rules:** hero uses **weight** (`font-extrabold`) for emphasis; section headings use a **Fraunces-italic** accent word. Don't rely on synthetic italic for Syne.
- **Type scale** (utility classes in `globals.css`):
  - `.heading-xl` — hero, `text-5xl → 8xl`
  - `.heading-lg` — section titles, `text-3xl → 5xl`
  - `.heading-md` — card titles, `text-2xl → 3xl`
  - `.body-lg` / `.body-base` — paragraph copy
  - `.section-label` — uppercase eyebrow, `text-xs`, `tracking-[0.2em]`

### Spacing & Layout

- **Full-bleed layout:** content spans the full viewport width with a shared edge padding of `px-6 md:px-10 lg:px-16` (no `max-w` cap). Every section, the nav, and the footer use this so their left edges line up with the hero. Reading columns inside case studies keep a `max-w-4xl` for legibility.
- Section padding: `.section-container` = `w-full px-6 md:px-10 lg:px-16 py-24 md:py-32`.
- Corner radius: cards `rounded-2xl`, pills/buttons `rounded-full`.
- Borders: 1px `subtle` / `darkSubtle`.

### Motion

- Entrance easing: `[0.22, 1, 0.36, 1]` (custom ease-out).
- Standard entrance: `opacity 0→1`, `y 20→0`, `whileInView` with `once: true`.
- Durations: 0.3–0.6s. Stagger project cards by `i * 0.05`.
- **Must** honor `prefers-reduced-motion` (see audit item A-06).

---

## 3. Page & Section Structure

Single-page site (`src/app/page.tsx`) with anchor navigation, plus sub-routes.

| Order | Section | Component | Notes |
|-------|---------|-----------|-------|
| — | Nav (sticky) | `Nav.tsx` | Logo `Z.`, links (Work / About / Playground), theme toggle, Resume, Say Hello |
| 1 | Hero | `Hero.tsx` | **Big editorial intro** (left-aligned serif paragraph with italic-emphasised roles), supporting line, CTAs, + a lightweight animated visual (floating gradient blobs) |
| 2 | Worked-with | `TrustedBy.tsx` | Grayscale wordmark strip: bp · Michelin · Packt · TCS |
| 3 | Work | `Work.tsx` | **Exactly 3 featured projects** — first is full-width `featured`, other two in a 2-up grid. Big cover-art cards (no "Featured" badge) |
| 4 | Contact | `Contact.tsx` | Big closing CTA (`heading-xl`), contact detail cards |
| — | Footer | `Footer.tsx` | Copyright, tagline, email |
| — | Floating | `ChatWidget.tsx` | "Ask Zarin" AI assistant (resume-grounded, `chat-config.ts`) |

**Sub-routes:** `/about` (About tabs + Testimonials — moved off the home page), `/work` (index), `/work/[slug]` (case study detail), `/playground` (hidden from nav).

**Home flow:** Hero → Worked-with logos → Work → Contact. About & Testimonials live on `/about`.

### 3a. Reference-inspired patterns (from andrerodrigues.in)

- **Editorial hero:** one large serif statement, roles set in italic, generous line-height. No rotating-role widget (removed for a calmer, more editorial feel).
- **Project cards:** each card = a large rounded **cover-art** block (aspect `16/9` featured, `16/10` others) with a `Featured` badge, a category `coverLabel`, and a hover state (cover scales `1.04`, an ↗ arrow rises in). Title + year on one baseline row, subtitle, tag pills, then external `Live project ↗` / `Case study ↗` links.
- **Cover art:** CSS gradient placeholders per project (`project.cover`) with two blurred depth blobs. **Swap for real screenshots/video when available** — that is the single biggest fidelity upgrade to the reference (see `AUDIT.md` A-11).
- **Animated visual:** three blurred, slowly-floating radial-gradient blobs behind the hero (`.hero-blob` in `globals.css`). Frozen under `prefers-reduced-motion`.
- **Nesting rule:** card cover + meta are wrapped in a single `next/link`; external links live **outside** that anchor (never nest `<a>` in `<a>`).

---

## 4. Featured Projects (exactly 3)

Source of truth: `src/data/projects.ts`. Removed projects are preserved in `archivedProjects` in the same file (recoverable without git).

1. **Conversational AI — Dealer Booking** (`ai-dealer-booking`) — 2024. Chatbot that finds + books a tyre-service dealer entirely through conversation.
2. **Fleet CO₂ Emissions Calculator** (`fleet-co2-calculator`) — 2023. Interactive sustainability tool for Michelin Connected Fleet. Live: connectedfleet.michelin.com.
3. **Packt Design System** (`packt-design-system`) — 2018. Reusable component library; cut design-to-dev handoff by 30%.

> To change the featured set: edit `projects.ts`, keep the count at 3 unless this spec is updated, and log it in `CHANGELOG.md`.

---

## 5. Deviations from the Reference

We intentionally diverge from andrerodrigues.in where it serves Zarin's story:

- **Keep the AI Chat widget** — reinforces the "AI product designer" positioning (the reference has none).
- **Keep Testimonials** — social proof for a hybrid design/engineering profile.
- **Dark-mode toggle** — the reference is light-only; we ship both.
- **No 3D playground hero** (yet) — `/playground` route is reserved for future experiments.

---

## 6. Definition of Done (per change)

- [ ] Matches tokens in §2 (no hardcoded colors/fonts).
- [ ] Works in light **and** dark mode.
- [ ] Responsive at 375 / 768 / 1280 px.
- [ ] `npm run build` passes.
- [ ] Relevant `AUDIT.md` items updated; change logged in `CHANGELOG.md`.
