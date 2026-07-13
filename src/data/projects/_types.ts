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

  ACCESS CONTROL (optional)
  ─────────────────────────
  password      → If set, the /work/<id> case-study page is gated behind a
                  password screen and the Work-grid card shows a "Locked" badge.
                  The visitor must type this exact string to view the study;
                  a successful unlock is remembered for the browser session.
                  ⚠️ This is a client-side deterrent, NOT real security — the
                  value ships in the site bundle, so never use a sensitive
                  password here. Leave the field out to keep a project public.

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

  personas      → Section "Personas" — Persona[]  ({ role, scope, need })
                  Rendered as a leadership ladder (order top→bottom = ascending
                  seniority). Use for "who it's for" across an org hierarchy,
                  e.g. VP → SVP → Group Leadership → CEO.

  soundbites    → "Feedback" section — string[]
                  Each string becomes a blockquote with an accent left-border.
                  Use real stakeholder quotes or anonymised feedback.

  roadmap       → "Roadmap" section — single paragraph string.
                  What's planned next; what the product will become.

  (Section numbers on the detail page are assigned automatically in render
  order, so adding/removing an optional section renumbers the rest cleanly.)
  ──────────────────────────────────────────────────────────────────────────
*/

export interface Benefit {
  audience: string
  detail: string
}

export interface Persona {
  role: string   // title / seniority label, e.g. "VP", "SVP", "CEO"
  scope: string  // one-line remit, e.g. "Owns an organisation's delivery"
  need: string   // what this persona needs and how the product serves it
}

export interface Discovery {
  summary: string      // how the research was run and what it revealed
  questions: string[]  // the key research prompts / themes explored
}

export interface Phase {
  name: string     // short label, e.g. "MVP 1"
  title: string    // what the phase delivers
  status: "shipped" | "current" | "next" | "future"
  summary: string  // 1-3 sentences on the phase
  items?: string[] // optional bullet highlights
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
  password?: string
  cover?: string
  coverImage?: string   // /packt/cover.jpg — real hero/card image (base path added at render); `cover` gradient shows behind while it loads
  coverLabel?: string
  featured?: boolean
  // Rich detail-page sections (optional — see template above)
  overview?: string
  origin?: string[]
  offers?: string[]
  benefits?: Benefit[]
  personas?: Persona[]
  soundbites?: string[]
  roadmap?: string
  discovery?: Discovery
  personas?: Persona[]
  phases?: Phase[]
  narrative?: Chapter[]   // illustrated storyline timeline (see Chapter above)
  processTitle?: string   // heading for the process walkthrough
  processIntro?: string   // lead paragraph above the steps
  process?: ProcessStep[] // numbered "how it's built" walkthrough
}
