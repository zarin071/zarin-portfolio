import type { Project } from "./_types"

/*
  IMAGES
  ──────
  Drop the Framer case-study assets into  public/packt/  using the filenames
  referenced below, and they replace the placeholder boxes automatically.
  See  public/packt/README.md  for the full list.
*/

const packtDesignSystem: Project = {
  id: "packt-design-system",
  title: "Packt Design System",
  subtitle:
    "From a 2018 style guide to an AI-assisted design system for Packt & Packt Hub — the same problem, revisited with Claude and the Figma MCP.",
  role: "Design Systems · UI/UX · Front-End",
  timeline: "2018 → 2026",
  tags: ["Design System", "Figma MCP", "AI-assisted", "Front-End"],

  problem:
    "Packt ships emerging-tech content — AI, data science, cloud — across a marketing site and a learning product. The surface area grew far faster than the UI could stay consistent, and every team reinvented the same buttons, cards and page shells slightly differently.",

  approach:
    "I revisited the problem twice, eight years apart. In 2018 I built a style guide: documented colour, type and components handed to engineering. In 2026 I redesigned it as a real system — tokens as the single source of truth, Figma variables wired to code through the Figma MCP and Code Connect, and Claude doing the scaffolding, documentation and drift audits.",

  impact:
    "The result is one token core that themes cleanly across two brands — Packt and Packt Hub — with design and code that stay in lockstep instead of drifting apart the moment a team ships.",

  overview:
    "This is a case study told across eight years. The same goal — a consistent, scalable UI for a content-rich tech platform — approached first as a style guide in 2018, then reimagined in 2026 as an AI-assisted design system. It's a story about what changed: the tooling, the definition of \"done\", and how much of the busywork now belongs to the machine.",

  narrative: [
    {
      era: "2018",
      kicker: "The style guide",
      title: "A well-documented style guide — that quietly drifted",
      status: "past",
      body: [
        "My first pass at Packt was, honestly, a style guide dressed as a design system. I set a colour palette, a type scale, spacing rules and a sheet of buttons, cards and form fields — designed in Sketch, annotated in Zeplin, and handed to the front-end team as the reference.",
        "It did real work. New pages looked more like Packt, and engineers stopped guessing hex codes. But it documented style, it didn't enforce it. There were no tokens, no single source of truth and no living components — so the moment two teams shipped in parallel, the \"system\" started to drift. A button gained a fourth shade here, a card lost its radius there, and within months the spec and the product no longer agreed.",
        "The gap I kept hitting: a style guide describes how things should look. A design system makes the correct thing the easiest thing to build. In 2018, with the tools I had, I only got halfway to the second one.",
      ],
      figures: [
        {
          alt: "The 2018 Packt style guide — colour, type and component board",
          placeholder: "2018 style-guide board",
          src: "/packt/2018-style-guide.png",
          span: "full",
          ratio: "16 / 9",
          caption: "The original 2018 board — palette, type scale and a component sheet.",
        },
        {
          alt: "Packt landing page designed against the 2018 style guide",
          placeholder: "Packt landing page (2018)",
          src: "/packt/2018-landing-page.png",
          span: "half",
          ratio: "4 / 3",
        },
        {
          alt: "Type and colour specimen from the 2018 style guide",
          placeholder: "Type & colour specimen",
          src: "/packt/2018-type-colour.png",
          span: "half",
          ratio: "4 / 3",
        },
      ],
      highlights: [
        "What it got right — a shared vocabulary for colour, type and spacing.",
        "Where it fell short — no tokens, no source of truth, no living components.",
        "The lesson — documentation alone can't stop drift; the system has to be the path of least resistance.",
      ],
    },
    {
      era: "2026",
      kicker: "The design system",
      title: "Redesigned with Claude and the Figma MCP",
      status: "current",
      body: [
        "Eight years later the same brief lands very differently. The unit of truth is no longer a screen — it's a token. Colour, type, spacing, radius and elevation live as Figma variables and ship to code as one token package, so design and engineering read from the same file rather than two copies that slowly disagree.",
        "The Figma MCP is what closes the loop. Claude reads the live Figma variables and component structure straight from the design, generates the matching React components, and keeps them mapped through Code Connect — so a token change in Figma shows up as a code change, not a Slack message. The same connection runs in reverse for audits: Claude sweeps the codebase for hard-coded values and off-system components and flags exactly where the product has drifted from the design.",
        "Crucially it's built for two surfaces from day one. Packt (the marketing site) and Packt Hub (the learning product) share one primitive token core and diverge only at a thin brand/theme layer — same components, two identities — instead of the two separate UIs they'd otherwise become.",
      ],
      figures: [
        {
          alt: "Token architecture — primitives, semantic tokens and brand themes",
          placeholder: "Token architecture diagram",
          src: "/packt/2026-token-architecture.png",
          span: "full",
          ratio: "16 / 9",
          caption: "One primitive core → semantic tokens → per-brand themes for Packt and Packt Hub.",
        },
        {
          alt: "Figma variables mapped to React components through the Figma MCP and Code Connect",
          placeholder: "Figma variables ↔ code (MCP)",
          src: "/packt/2026-figma-code-connect.png",
          span: "half",
          ratio: "4 / 3",
        },
        {
          alt: "The component library — buttons, cards and page shells for Packt and Packt Hub",
          placeholder: "Component library",
          src: "/packt/2026-component-library.png",
          span: "half",
          ratio: "4 / 3",
        },
        {
          alt: "One component set themed for Packt versus Packt Hub",
          placeholder: "Packt vs Packt Hub theming",
          src: "/packt/2026-packt-vs-hub.png",
          span: "full",
          ratio: "16 / 9",
          caption: "Same components, two brands — the divergence lives entirely in the theme layer.",
        },
      ],
      highlights: [
        "Tokens as the single source of truth — Figma variables that ship to code.",
        "Figma MCP + Code Connect keep components mapped 1:1 with the design.",
        "Claude scaffolds components, drafts docs and audits the codebase for drift.",
        "One token core, two brands — Packt and Packt Hub theme from the same primitives.",
      ],
    },
    {
      era: "Next",
      kicker: "BP — applying the learnings",
      title: "Scaling the same playbook to enterprise at bp",
      status: "future",
      reserved: true,
      body: [
        "This is where the bp work comes in. The tokens-as-truth, design-wired-to-code approach proven here is what I carried into an enterprise setting at bp — larger surface, stricter governance, many more teams.",
        "Reserved — I'll expand this chapter with the bp case study and link it back to these learnings.",
      ],
    },
  ],

  projectLink: "https://www.packtpub.com/en-in",
  cover: "linear-gradient(135deg, #FFF0DA 0%, #FFD5A6 45%, #E08A55 100%)",
  coverLabel: "Design System · 2018 → 2026",
}

export default packtDesignSystem
