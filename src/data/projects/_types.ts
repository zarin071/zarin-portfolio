/*
  ═══════════════════════════════════════════════════════════════════════════
  PROJECT DATA TYPES & TEMPLATE
  ═══════════════════════════════════════════════════════════════════════════

  To add a new case study:
    1. Duplicate any existing file in this folder (e.g. copy dash.ts → my-new-project.ts)
    2. Fill in every field using the template below
    3. Import and add it to the projects[] array in index.ts
    4. Run `npm run dev` and visit /work/<your-id> to preview

  ──────────────────────────────────────────────────────────────────────────
  FIELD REFERENCE — what each field does and where it appears in the UI
  ──────────────────────────────────────────────────────────────────────────

  REQUIRED (all projects)
  ───────────────────────
  id            → URL slug: /work/<id>  — use kebab-case, unique across all projects
  title         → Card headline + detail page H1
  subtitle      → Card sub-heading + detail page body-lg
  role          → "Role · Timeline" line on the detail page meta row
  timeline      → same row as role (e.g. "2024" or "2024 — Present")
  tags          → Pill chips on the card and detail page (keep to ≤4)
  problem       → Section 01 on the detail page (serif, large)
  approach      → Section 02 on the detail page (serif, large)
  impact        → Section 03 on the detail page — rendered in an accent box

  OPTIONAL LINKS (appear as CTA buttons on card + detail page)
  ────────────────────────────────────────────────────────────
  caseStudy     → "View case study ↗" button — PDF, Google Drive, Notion, etc.
  projectLink   → "Live project ↗" button   — live URL

  CARD VISUALS (work grid + detail page hero)
  ────────────────────────────────────────────
  cover         → CSS background value for the cover art card.
                  Use a linear-gradient() until real screenshots arrive.
                  Good palette: pick 3 stops — light → mid → dark tone.
                  Example: "linear-gradient(135deg, #EDE9FF 0%, #C9BEFF 45%, #7C6BE6 100%)"
  coverLabel    → Short label shown bottom-left on the cover (e.g. "Enterprise Tool")
  featured      → true = full-width hero card on the Work grid (only one per page)

  RICH SECTIONS (detail page only — all optional, sections only render when present)
  ──────────────────────────────────────────────────────────────────────────────────
  overview      → Large serif paragraph above sections 01-03.
                  Use this to set the scene / product context in 3-5 sentences.

  offers        → Section 04 "What it offers" — string[]
                  Each string becomes a bullet point with an accent dot.
                  Best for: feature lists, capability summaries.

  benefits      → Section 05 "Benefits" — Benefit[]  ({ audience, detail })
                  Rendered as a 2-up card grid.
                  Use audience as the card label (e.g. "Leadership", "Delivery Teams").

  soundbites    → Section 06 "Feedback" — string[]
                  Each string becomes a blockquote with an accent left-border.
                  Use real stakeholder quotes or anonymised feedback.

  roadmap       → Section 07 "Roadmap" — single paragraph string.
                  What's planned next; what the product will become.
  ──────────────────────────────────────────────────────────────────────────
*/

export interface Benefit {
  audience: string
  detail: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  role: string
  timeline: string
  tags: string[]
  problem: string
  approach: string
  impact: string
  caseStudy?: string
  projectLink?: string
  cover?: string
  coverLabel?: string
  featured?: boolean
  // Rich detail-page sections (optional — see template above)
  overview?: string
  offers?: string[]
  benefits?: Benefit[]
  soundbites?: string[]
  roadmap?: string
}
