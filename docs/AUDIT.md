# Audit — Zarin Solanki Portfolio

> Living checklist of the gap between current state and the [Design Spec](./DESIGN-SPEC.md).
> Status: `☐ open` · `◐ in progress` · `☑ done` · `⊘ won't do`
> When you close an item, add a dated line in `CHANGELOG.md`.

_Last reviewed: 2026-07-05_

---

## Baseline (state as of first audit, 2026-07-05)

Inherited a working Next.js 16 + Tailwind + Framer Motion scaffold with:
- Sticky nav, hero, tabbed About, Work grid, Testimonials, Contact, Footer, floating AI ChatWidget, theme toggle.
- **8 projects** in `projects.ts` (target: 3).
- Fraunces + Inter, cream/ink palette, dark-mode via `ThemeProvider`.

The scaffold is already well-aligned with the reference aesthetic. Work is refinement + content correctness, not a rebuild.

---

## A. Content correctness

| ID | Item | Status |
|----|------|--------|
| A-01 | Narrow featured projects from 8 → the 3 chosen (Conversational AI, Fleet CO₂, Packt DS) | ☑ |
| A-02 | Preserve removed projects in `archivedProjects` (recoverable) | ☑ |
| A-03 | Fleet CO₂ project: correct copy + live link to connectedfleet.michelin.com | ☑ |
| A-04 | Conversational AI project: reframe as **dealer finding + booking via chat** (not generic tyre booking) | ☑ |
| A-05 | Real `resume.pdf` added to `/public` (ATS-checked: selectable text, single-column, standard headings). Nav links open in new tab + download as `ZarinSolanki_Resume_2026.pdf` | ☑ |

## B. Accessibility

| ID | Item | Status |
|----|------|--------|
| A-06 | Respect `prefers-reduced-motion` — hero blobs + pulse animations frozen, smooth-scroll disabled via CSS media query. (Framer entrance opacity still animates; acceptable) | ◐ |
| A-07 | Audit color contrast for `warmGray` on `cream` (AA for body text) | ☐ |
| A-08 | Ensure all interactive elements are keyboard-focusable with visible focus ring | ☐ |
| A-09 | Add `alt` text / `aria-label`s where project imagery is introduced | ☐ |

## C. Look & feel vs reference

| ID | Item | Status |
|----|------|--------|
| A-10 | 3-project grid reads as intentional — featured full-width + 2-up grid | ☑ |
| A-11 | Project card hover reveal (cover scales, ↗ arrow rises). **Real screenshots/video still needed** to fully match reference — currently gradient placeholders | ◐ |
| A-12 | Worked-with strip uses **real logos** (bp/Michelin/Packt/TCS) in `public/logos/`, backgrounds stripped, monochrome + `dark:invert` treatment | ☑ |

## D. Engineering / hygiene

| ID | Item | Status |
|----|------|--------|
| A-13 | Confirm `.next/` build artifacts are gitignored (repo currently tracks some) | ☐ |
| A-14 | `npm run build` passes clean after project changes | ☑ |
| A-15 | Chat presets / testimonials don't reference removed project slugs | ☑ |
| A-16 | SEO: title + description in `layout.tsx` reflect Zarin | ☑ (OG/Twitter tags still ☐) |

---

## Notes / open questions

- **resume.pdf**: Nav and Hero both link `/resume.pdf`. Confirm the file is in `public/` or update the links.
- **Playground**: hidden from the nav (unlinked) as of the polish pass. Route file still present; reserved for a future 3D/interactive experiment. Re-add to `navItems` in `Nav.tsx` to expose it.
- **Case-study cover art**: `/work/[slug]` now reuses the same gradient `cover` as the cards. When real screenshots replace the gradients (A-11), the detail-page banner upgrades automatically.
- **Accent color**: currently monochrome by design. Revisit if a signature color is desired.
