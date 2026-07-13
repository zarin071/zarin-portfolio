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
        "My first pass at Packt was, honestly, a style guide dressed as a design system. I documented a colour guide, a type scale, three button sizes, an icon set and a responsive grid — carefully specified, exported as boards, and handed to the front-end team as the reference.",
        "It did real work. New pages looked more like Packt and engineers stopped guessing hex codes. But look closely at what it actually was: a set of pictures of the UI. Colours pinned to fixed hex values, buttons measured in absolute pixels, grids drawn per breakpoint. It described how things should look — it didn't enforce it. There were no tokens, no single source of truth and no living components, so the moment two teams shipped in parallel the \"system\" started to drift.",
        "That's the gap I kept hitting: a style guide describes the surface; a design system makes the correct thing the easiest thing to build. In 2018, with the tools I had, I only got halfway to the second one.",
      ],
      figures: [
        {
          alt: "Packt 2018 colour guide — base, orange and black-and-white scales with hex values",
          placeholder: "Colour guide",
          src: "/packt/2018-colors.png",
          span: "half",
          ratio: "16 / 9",
          caption: "The colour guide — every value pinned to a fixed hex, not a token.",
        },
        {
          alt: "Packt 2018 typography specimen — the Outfit type scale",
          placeholder: "Typography specimen",
          src: "/packt/2018-typography.png",
          span: "half",
          ratio: "1 / 1",
          focus: "top",
          caption: "The Outfit type scale — every size and line-height fixed by hand.",
        },
        {
          alt: "Packt 2018 button styles — large, medium and small in material design, measured in pixels",
          placeholder: "Button styles",
          src: "/packt/2018-buttons.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Buttons specced in absolute pixels — large, medium, small.",
        },
        {
          alt: "Packt 2018 iconography — regular, custom and social icons",
          placeholder: "Iconography",
          src: "/packt/2018-iconography.png",
          span: "half",
          ratio: "16 / 9",
          caption: "Iconography — Bootstrap icons plus custom and social sets.",
        },
        {
          alt: "Packt 2018 responsive grid — 1440 / 1024 / 768 / 390 breakpoints drawn individually",
          placeholder: "Responsive grid",
          src: "/packt/2018-grid.png",
          span: "full",
          ratio: "16 / 9",
          caption: "A grid drawn per breakpoint (1440 / 1024 / 768 / 390) — the responsive rules lived in pictures, not code.",
        },
      ],
      highlights: [
        "What it got right — a shared vocabulary for colour, type, icons and grid.",
        "What it really was — pictures of the UI: fixed hex, pixel button sizes, per-breakpoint grids.",
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
        "Eight years later the same brief lands very differently. The unit of truth is no longer a screen — it's a token. Everything starts with primitive colours — the base hues plus a nine-step tint-and-shade scale — named on a strict convention (Brand/100, Blue/500, Base/White).",
        "On top of the primitives sit semantic tokens named for how they're used, not what they look like: Content, Background, Border, Surface, Overlay, Brand, Status. A semantic token points at a primitive, and a component points at the semantic token — so dark mode is a single swap (Background Brand: Brand 500 → Brand 400) that cascades through the whole system rather than a second palette to maintain.",
        "The same discipline runs through type (a primitive scale, Heading 5XL → Text XS, remapped per breakpoint), an 8-point spacing scale with t-shirt sizing, radius and border-width tokens, and a 12-column grid that collapses to 4 on mobile. And it's built for two surfaces from day one: Packt (marketing, orange Brand tokens) and Packt Hub (the product, blue Hub-packt tokens) share one primitive core and diverge only at the semantic layer — same components, two identities.",
      ],
      figures: [
        {
          alt: "Packt colour foundations — five primitive hues and a nine-step tint/shade scale",
          src: "/packt/2026-color-foundations.jpg",
          span: "full",
          ratio: "16 / 9",
          focus: "top",
          caption: "Foundations: primitive hues → a 9-step scale → a naming convention. Everything else references these.",
        },
        {
          alt: "Semantic colour tokens in light mode — Content, Background, Border, Surface, Brand and Hub-packt",
          src: "/packt/2026-semantic-light.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "Semantic tokens named by role — note the Brand (Packt) and Hub-packt (Packt Hub) sets.",
        },
        {
          alt: "The same semantic tokens in dark mode",
          src: "/packt/2026-semantic-dark.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "Dark mode is one primitive swap, not a second palette.",
        },
        {
          alt: "Typography primitive styles — Heading 5XL down to Text XS",
          src: "/packt/2026-type-primitive.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "A primitive type scale that semantic styles remap per breakpoint.",
        },
        {
          alt: "The 8-point spacing scale with t-shirt sizing",
          src: "/packt/2026-spacing.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "An 8-point spacing scale — 2XS to 12XL — as tokens.",
        },
        {
          alt: "Border radius and width tokens",
          src: "/packt/2026-borders.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "Radius and border-width tokens (Circle / Pill / L…XS).",
        },
        {
          alt: "Iconography set for the 2026 system",
          src: "/packt/2026-iconography.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "A single icon set drawn on the system's grid and stroke tokens.",
        },
        {
          alt: "Layout and breakpoints — a 12-column grid that collapses to 4 on mobile",
          src: "/packt/2026-layout.jpg",
          span: "full",
          ratio: "16 / 9",
          focus: "top",
          caption: "A 12-column grid that becomes 4 on mobile, with breakpoints defined as variables.",
        },
      ],
      highlights: [
        "Tokens as the single source of truth — primitives → semantic tokens → components.",
        "Dark mode and theming by primitive swap, not a duplicated palette.",
        "One token core, two brands — Packt (Brand/orange) and Packt Hub (Hub-packt/blue).",
        "Figma MCP + Code Connect keep components mapped 1:1 with the design; Claude scaffolds, documents and audits for drift.",
      ],
    },
    {
      era: "Now",
      kicker: "bpCore — scaling to enterprise",
      title: "The same playbook, scaled to bp's global design system",
      status: "current",
      body: [
        "Everything I proved at Packt — tokens as the source of truth, one core theming many brands, drift solved by making the right thing the easiest thing — is exactly what bpCore needed, only multiplied. bpCore is bp's global design system: one unified visual language across bp's websites and apps, worldwide. The Packt drift problem, scaled to dozens of product teams and four business domains, all protecting a single brand.",
        "The answer is a federated, tiered architecture. Brand tokens sit at Tier 1; a central bpCore team owns the universally-used components at Tier 2; each domain — Product, Marketing, Agentic, Mobile — gets a federated \"kit\" at Tier 3; and product teams (GIPP, bp.com, Eva, bpMe and more) consume and extend at Tier 4. The single source of truth flows down, while real usage and new patterns flow back up and get promoted into core. It's the governance answer to the exact drift I first hit at Packt — turned into an operating model for an organisation.",
        "The discipline underneath is the same, just formalised: a small set of shared base styles, strictly modular components, and atomic design end-to-end — particles → atoms → molecules → organisms — so nothing is built twice, with accessibility baked into the change process and evidenced for every market. And when bp's brand refreshed in 2025 — a leaning-in set of greens, a digital-first bp Sans typeface, a bento-grid system — it landed as token and component updates rather than a redraw. Dark-mode-by-swap at Packt became brand-refresh-by-token at bp.",
      ],
      figures: [
        {
          alt: "bpCore's four-tier federated model — brand tokens, central core components, domain kits and team packages",
          src: "/packt/bp-core-tiers.png",
          srcDark: "/packt/bp-core-tiers-dark.png",
          span: "full",
          ratio: "3 / 2",
          focus: "top",
          caption: "bpCore's federated tiers: Brand tokens → central core components → domain kits (Product / Marketing / Agentic / Mobile) → team packages. One core, many products.",
        },
        {
          alt: "Atomic design structure used across bpCore — particles to organisms",
          placeholder: "Atomic design — particles → organisms",
          src: "/packt/bp-atomic.png",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
        },
        {
          alt: "The 2025 bp brand refresh applied through bpCore — greens, bp Sans and a bento grid",
          placeholder: "2025 brand refresh in bpCore",
          src: "/packt/bp-brand-2025.png",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
        },
      ],
      highlights: [
        "One core, many products — a federated tier model keeps dozens of teams on-system without a central bottleneck.",
        "Atomic design end-to-end: particles → atoms → molecules → organisms, so patterns are reused, never rebuilt.",
        "Accessibility baked into the change process and evidenced — regulatory-ready across every market bp operates in.",
        "A whole brand refresh (2025 greens + bp Sans) shipped as tokens, not a redraw — the Packt swap trick at enterprise scale.",
      ],
    },
  ],

  processTitle: "Connecting Claude to Figma with the MCP",
  processIntro:
    "The reason 2026 works is the loop between design and code. Figma's Dev Mode MCP server exposes the file — variables, styles, component structure — as tools Claude can call, so instead of me translating a design by hand, Claude reads it directly and writes the system. Here's the workflow I'd run for Packt.",
  process: [
    {
      step: "01",
      title: "Stand up the Figma MCP server",
      detail:
        "Turn on Figma's Dev Mode MCP server (Figma desktop → Preferences → Enable Dev Mode MCP server), then register it with Claude — `claude mcp add` for Claude Code, or an entry in the MCP config. Claude can now call Figma tools against whatever frame is selected.",
      tools: ["Figma Dev Mode MCP", "claude mcp add"],
    },
    {
      step: "02",
      title: "Author the token foundations as Figma variables",
      detail:
        "Build the source of truth in Figma: primitive colours and their tint/shade scales, then semantic tokens, type, spacing, radius and border variables — organised into collections with modes for light/dark and for the Packt and Packt Hub brands.",
      tools: ["Figma variables", "modes & collections"],
    },
    {
      step: "03",
      title: "Let Claude read the design context",
      detail:
        "Point Claude at a frame and it pulls the real values — not a screenshot — through the MCP: variable definitions, the design context and structure of a component, and a reference image to check against.",
      tools: ["get_variable_defs", "get_design_context", "get_screenshot"],
    },
    {
      step: "04",
      title: "Generate the code token layer",
      detail:
        "Claude turns the Figma variables into a typed token package that mirrors the collections and modes — CSS custom properties plus a Tailwind theme — so the same names (Background/Brand, Text/Primary) exist in design and in code.",
      tools: ["design tokens", "CSS vars", "Tailwind theme"],
    },
    {
      step: "05",
      title: "Scaffold components and map them with Code Connect",
      detail:
        "From the Figma components, Claude scaffolds the React components against the tokens and registers Code Connect mappings, so each Figma component resolves to its real coded counterpart — props and all — in Dev Mode.",
      tools: ["Code Connect", "React", "get_code"],
    },
    {
      step: "06",
      title: "Audit for drift and keep it in sync",
      detail:
        "Run it in reverse: Claude sweeps the codebase for hard-coded values and off-system components, checks them against the Figma variables, and flags where the two disagree — then drafts the docs and changelog. A token change in Figma becomes a regenerated token package, not a Slack thread.",
      tools: ["drift audit", "docs", "changelog"],
    },
  ],

  projectLink: "https://www.packtpub.com/en-in",
  cover: "linear-gradient(135deg, #FF8A5B 0%, #F26B3A 50%, #C74B24 100%)",
  coverImage: "/packt/cover.jpg",
  coverLabel: "Design System · 2018 → 2026",
}

export default packtDesignSystem
