# Portfolio Changes — Mock Interview Review
**Source:** `/Users/zarin/Downloads/portfolio-changes.md`
**Applied:** 2026-07-20

---

## Status key
🟢 Applied · 🟡 Partial (copy written, needs content from Zarin) · 🔴 Needs Zarin content

---

## Applied Changes

### CHANGE 01 — Michelin: remove "solo build" framing 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `role`: removed "(solo)" → `"UI/UX Designer & Front-End Developer"`
- `timeline`: extended → `"2022 · 2 months · Solo design, built with Michelin's back-end team"`
- `overview`: rewrote "I owned this project end to end as the sole designer and front-end developer" → "I owned the design end to end as the sole designer … collaborating with Michelin's back-end team"
- `discovery.summary`: "On a solo, two-month build" → "On a two-month build with solo design ownership"
- `metrics[1].label`: "solo build: UX, UI and the production React front-end" → "solo design + front-end build, integrated with the back-end team's savings engine"
- `impact`: "For a solo, two-month build inside a regional marketing team" → "For a two-month build inside a regional marketing team — solo on design and front-end, partnered with back-end"

### CHANGE 02 — Michelin: integration friction beat 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
Added 4th paragraph to `reflection.body`: front-end built on ideal-case content, integration revealed real-world layout failures, pressure-test worst-case content before integration lesson.

### CHANGE 03 — Michelin: rewrite design-engineer advantage 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `narrative[2].highlights[2]`: "no translation loss" → added "— and its limit … boundary with the back-end team was where the real work happened. Integration is where design assumptions get tested."

### CHANGE 04 — Homepage: unify positioning spine 🟢
**Files:** `src/components/Hero.tsx`, `src/app/layout.tsx`
- Hero eyebrow: `"Zarin Solanki · Senior Product Designer"` → `"Zarin Solanki · Senior Product Designer & Design Engineer"`
- Hero headline: "a design-engineer hybrid" → "a product designer who ships the code" + updated supporting copy
- Hero sub: KEPT as-is
- Meta description: updated to "Senior Product Designer and Design Engineer with 10+ years…"

### CHANGE 06 — About: replace "driving design maturity" 🟢
**Files:** `src/components/About.tsx`
First `content` paragraph now includes the development programme for 50+ designers, legible growth paths, non-design manager assessment language, and peer-to-peer community programmes. "Still running and still evolving today" preserved.

### CHANGE 08 — Michelin: de-risk "seeded a global product" 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `subtitle`: "seeding a global Michelin product" → "a model that later surfaced in Michelin's global fleet product"
- `narrative[2].title`: "From a regional experiment to a worldwide Michelin product" → "From a regional experiment to a model that travelled"
- `narrative[2].body[0]`: "went on to inform" → "later appeared"; added "I can't claim a direct line from one to the other"
- `narrative[2].figures[0].caption`: removed "seeded" → "the same value-first model, at worldwide scale"
- `impact`: rewritten to state sequence not causation
- `metrics[3].label`: "concept scaled into" → "the same model later appeared in"

### CHANGE 09 — Michelin: stakeholder seniority + two-way business case 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
Added to `overview`: worked with the Michelin India head directly; tool served two audiences — fleet operators and leadership; People/Profit/Planet measurable at point of sale.

### CHANGE 10 — Michelin: outcome data disclosure 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
Added 5th paragraph to `reflection.body`: lead logs owned by sales team, no longer have access, would rather say that than publish unverifiable numbers, tool remains live. Includes "how will we know if this worked, and who gives me access to that?" question.

### CHANGE 11 — Michelin: four outcomes = two audiences 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `benefits[1].detail` ("Making the abstract tangible"): rewritten as two audiences/two messages, R&D provenance of trees metric, links back to Discovery "what I'd test" list.

### CHANGE 12 — Michelin: tyre dropdown accuracy 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `approach`: "auto-populates the tyre dimensions" → "comparison is anchored to the Michelin tyre currently under promotion … resolves to that tyre's specification"
- `narrative[1].body[0]`: same correction applied
- `offers[0]`: "auto-populates the tyre dimensions" → "resolves to the promoted tyre's specification"
- `benefits[0].detail` ("Removing friction"): corrected + added "promotion vehicle, so the Michelin side is fixed by the campaign"
- `benefits[2].detail` ("Building trust"): added "Every figure in the model … is signed off by Michelin's R&D team before it ships"

### CHANGE 13 — bpCore: tier model as something LEARNED 🟢
**Files:** `src/data/projects/packt-design-system.ts`
Inserted new paragraph before federation answer in `narrative[2].body`: bpme divergence on two axes, three available responses, what divergence clarified about the universal layer.

### CHANGE 14 — Michelin: QA process + accessibility scope 🟢
**Files:** `src/data/projects/michelin-fuel-savings.ts`
- `overview`: added "The build wasn't unchecked: a dedicated QA function tested each release, with defects raised and tracked continuously in Jira."
- `reflection.body`: added 6th paragraph on accessibility — inherited coverage vs. custom controls, keyboard operability, screen reader announcements, reduced-motion. Links to bpCore practice.

### CHANGE 15 — Packt DS 2026: disclose self-initiated 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `subtitle` (homepage card dek): "From a 2018 style guide to a self-initiated, AI-assisted rebuild of the same system — then the enterprise version of the same problem at bp."
- `role`: split into "Packt 2018: UI/UX Designer (client work) · Packt 2026: self-initiated rebuild · bp: Senior Product Designer & Design Engineering Lead"
- `timeline`: "2018 → 2026"
- `overview`: added disclosure paragraph up front — 2018 was client work, 2026 is self-set brief, why it can be shown in full
- `impact`: "The result — a working system, not a proposal — is one token core…"
- `processIntro`: "Here's the workflow I'd run for Packt" → "This is the workflow I ran for the Packt system end to end"

### CHANGE 16 — bpCore: "2 coded projects" as diagnosis not excuse 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `narrative[4].body[1]` (Baseline era): replaced "expected at this stage — token adoption always precedes component adoption" excuse with diagnosis: distributed as Figma + handoff, no front door for developers, Storybook + Figma MCP as the fix, honest trajectory statement, metric to judge it by.

### CHANGE 17 — bpCore: label contribution/promotion as PROPOSED 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `narrative[2].body[5]` (Now era): "flows back up and get promoted into core" → labelled as designed-and-awaiting-first-cycle; added honest sequencing; added agentic adoption-tracking paragraph.

### CHANGE 18 — bpCore: cut borrowed benchmarks 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `narrative[2].docs[0].body[1]` (Value section): deleted generic Forrester-style benchmarks; replaced with proprietary audit data (221 projects, 90 at >90%, 2 in code, the gap is the value).
- OKRs: added honesty clause on detachment rate being a target not a measured baseline.

### CHANGE 19 — bpCore: calibrate accessibility claim 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `narrative[2].body` (Now era): added dedicated accessibility paragraph — specialist removed in restructure, self-built audit process as mitigation, contrast on input fields as caught failure class, token-level fix = everywhere fix.
- `narrative[2].highlights`: "regulatory-ready across every market" → self-built audit process framing.

### CHANGE 20 — Promote Figma plugin from "Bonus" 🟢
**Files:** `src/data/projects/packt-design-system.ts`
- `process` step ★: removed `locked: true` (removes "Bonus" badge), renumbered to `"07"`, new title "Round-tripping the system: the Figma import plugin", updated detail with new framing (load time as the hard problem, honest limit, guidelines as the durable deliverable).

### CHANGE 21 — About: TCS/Packt era credibility line 🟢
**Files:** `src/components/About.tsx`
- Third `content` paragraph: "Earlier: UI/UX at Packt Publishing, engineering at TCS. Full arc from code to design to strategy." → "I started the other way round — engineering at TCS, then UI/UX at Packt Publishing, where I designed and built the front end of the site. Design came after code, which is why the two have never been separate for me."

### CHANGE 22 — About: remove 30% handoff claim ⚠️ 🟢
**Files:** `src/components/About.tsx`
- Removed "design systems that cut handoff time by 30%" (industry benchmark)
- Removed "research-informed work that measurably moved conversion and engagement" (assumed, not measured)
- Michelin paragraph now: "from the fuel savings calculator I designed and built end to end, to a shared design system the engineering teams built from, so the same components stopped being redrawn per project."

### CHANGE 23 — About: Michelin award specific 🟢
**Files:** `src/components/About.tsx`
- "Michelin Champions Award two years running" → "Michelin Champions Award, two years running — awarded by Michelin VPs for the fuel savings calculator and the wiper blades platform."

### CHANGE 04 (About heading) — Design through to production 🟢
**Files:** `src/components/About.tsx`
- Heading: `The Designer-Engineer.` → `Design through to production.`

### CHANGE 04.5 (About opener) — bp description update 🟢
**Files:** `src/components/About.tsx`
- First paragraph: "driving design maturity across India and global hubs" → full capability programme description merged with bp positioning.

### CHANGE 24.1 — About: leadership framing as leverage not management bid 🟢
**Files:** `src/components/About.tsx`
- Added 4th `content` paragraph: "That's the part of the job I'd keep in any role: building the system, the programme or the tool that scales other people — not the reporting line."

---

## Changes Not Applied — Content Needed from Zarin

### CHANGE 05 — DASH teaser: unlock research publicly 🔴
**What's needed:**
1. Approximate number of participants in VP interviews/usability sessions
2. Number/duration of sessions or rounds
3. The one design decision that CHANGED because of what was heard — the reversal (the single sentence that turns a research *claim* into research *evidence*)
4. Any other clearable details: role types beyond VPs, whether research was solo or with a researcher

**Approach confirmed:** partial teaser visible, password requested for the rest; "request access" CTA instead of bare password wall.

### CHANGE 07 — Testimonials: add bp-era social proof 🔴
**What's needed:** 2–3 quotes from:
- An engineer who consumed bpCore in real product code
- A designer Zarin mentored / capability programme participant
- A design or product leader Zarin reported to / partnered with
(Ask for specificity over praise; get permission to use name, role, LinkedIn)

### CHANGE 25 — "What I got wrong" interview answer 🔴
**What's needed:**
1. What was the actual decision around AI governance? (e.g. opening component generation before governance was ready? AI-scaffolded components without review gate?)
2. What did it cost concretely — rebuild time, a component set discarded, trust lost?
3. What changed as a result?

---

## Suggested Order for Remaining Work

**Immediately (content to supply, then implement):**
1. Change 05 — DASH teaser: answer the 4 questions above → unlocks the biggest structural fix on the site
2. Change 07 — testimonials: gather 2–3 quotes from bp colleagues
3. Change 25 — "what I got wrong": write the concrete AI-governance story

**Site-wide:**
4. Tense sweep (Change 17 note): check remaining site copy for aspirational-present-tense — any place intention is stated as present-tense fact
5. ~~Playground intro (Change 24.2)~~ 🟢 Applied — "Things nobody asked me to build…" added to `src/components/PlaygroundTeaser.tsx`

**Operational:**
6. Archiving (Change 23 note): start saving bp artefacts now while you have access — screenshots of your own work, numbers you generated personally, notes on what you did and why. Nothing confidential, just a personal record.

---

## One Pattern to Remember
Nearly every fix in this document is the same fix: **the site was stating intentions, inherited numbers and inferences in the same voice it stated facts.** The work underneath is strong and mostly under-claimed. Say what happened, name what you don't know, and let the scale speak.
