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
  title: "Design systems from Packt to bp",
  subtitle:
    "I built Packt a design system in 2018 and thought I'd solved it. In 2026, I rebuilt it, because the first version was a set of pictures, not a system.",
  role: "Packt 2018: UI/UX Designer (re-work) · Packt 2026: self-initiated rebuild · bp: Senior Product Designer & Design Engineering Lead",
  timeline: "2018 → 2026",
  tags: ["Design System", "Figma MCP", "AI-assisted", "Front-End"],

  problem:
    "A brand refresh had landed at bp — stronger greens, a move from Roboto to bp Sans — and none of it was in the system. Multiple business units were running local aliases of bpCore. One product, bpme, had diverged on two axes at once: mobile-first architecture, legitimately different branding. Meanwhile 90 projects were at full token coverage in design and only 2 in code. Design had a front door. Code didn't. The structural gap wasn't new — it was the same failure I'd built at Packt in 2018, eight years earlier, at a different order of magnitude.",

  approach:
    "I came back to the same brief eight years later with one question: what would I build if I started today? In 2018 I had a spec tool and a handoff. In 2026 I had Figma variables, the MCP, Claude, and Code Connect. The answer looked completely different.",

  impact:
    "At bp, a full brand refresh shipped across 221 products as token and component updates — not a redraw. The bpme divergence question got resolved with a four-tier federated architecture: brand tokens at the centre, domains owning their component reality beneath it, no central bottleneck. The Packt 2026 rebuild is the proof of method — one token core, two brands, design and code in lockstep through Code Connect. At bp, that method runs at enterprise scale.",

  overview: [
    "I built Packt a design system in 2018 and thought I was done. Documented the colours, the type scale, the button sizes, the grid — handed it to the front-end team. Then two teams shipped in parallel and the system started to drift. The documentation was fine. The problem was structural: I'd built a set of pictures of the UI, not a system.",
    "One note up front: the 2018 style guide was real client work. The 2026 rebuild is self-initiated — Packt didn't commission it. I rebuilt it to answer a question I'd been carrying for eight years: what would I do differently now, with tooling that didn't exist then? That's also why it can be shown in full — every token, component and decision is inspectable in the live Storybook, nothing behind an NDA.",
  ],

  narrative: [
    {
      era: "2018",
      kicker: "The style guide",
      title: "A well-documented style guide that quietly drifted",
      status: "past",
      body: [
        "My first pass at Packt was a style guide dressed as a design system. I documented colour, type, button sizes, an icon set and a responsive grid — carefully specified, exported as boards, handed to the front-end team as the reference. New pages looked more like Packt. Engineers stopped guessing hex codes. That part worked.",
        "But what I'd actually built was a set of pictures of the UI. Colours pinned to fixed hex values. Buttons in absolute pixels. Grids drawn per breakpoint. It described how things should look; it didn't enforce it. No tokens, no source of truth, no living components — so the moment two teams shipped in parallel, drift was structurally guaranteed.",
        "A style guide describes the surface. A design system makes the correct thing the easiest thing to build. In 2018, with the tools I had, I only got halfway.",
      ],
      figures: [
        {
          alt: "Packt 2018 colour guide: base, orange and black-and-white scales with hex values",
          placeholder: "Colour guide",
          src: "/packt/2018-colors.png",
          span: "half",
          ratio: "16 / 9",
          caption: "The colour guide: every value pinned to a fixed hex, not a token.",
        },
        {
          alt: "Packt 2018 typography specimen, the Outfit type scale",
          placeholder: "Typography specimen",
          src: "/packt/2018-typography.png",
          span: "half",
          ratio: "1 / 1",
          focus: "top",
          caption: "The Outfit type scale, every size and line-height fixed by hand.",
        },
        {
          alt: "Packt 2018 button styles: large, medium and small in material design, measured in pixels",
          placeholder: "Button styles",
          src: "/packt/2018-buttons.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Buttons specced in absolute pixels: large, medium, small.",
        },
        {
          alt: "Packt 2018 iconography: regular, custom and social icons",
          placeholder: "Iconography",
          src: "/packt/2018-iconography.png",
          span: "half",
          ratio: "16 / 9",
          caption: "Iconography, Bootstrap icons plus custom and social sets.",
        },
        {
          alt: "Packt 2018 responsive grid, 1440 / 1024 / 768 / 390 breakpoints drawn individually",
          placeholder: "Responsive grid",
          src: "/packt/2018-grid.png",
          span: "full",
          ratio: "16 / 9",
          caption: "A grid drawn per breakpoint (1440 / 1024 / 768 / 390): the responsive rules lived in pictures, not code.",
        },
      ],
      highlights: [
        "What it got right : a shared vocabulary for colour, type, icons and grid.",
        "What it really was : guardrails for the UI: fixed hex, pixel button sizes, per-breakpoint grids.",
        "Where it fell short : no tokens, no source of truth, no living components.",
        "The lesson : documentation alone can't stop drift; the system has to be the path of least resistance.",
      ],
    },
    {
      era: "2026",
      kicker: "The design system",
      title: "Redesigned with Figma MCP, Claude and Storybook — a single source of truth",
      status: "current",
      body: [
        "Eight years later, the unit of truth is a token, not a screen. Everything starts with primitive colours — base hues plus a tint-and-shade scale — named on a strict convention (Brand/100, Blue/500, Base/White). On top sit semantic tokens named for how they're used, not what they look like: Content, Background, Border, Surface, Overlay. A semantic token points at a primitive; a component points at the semantic token. Dark mode is one primitive swap — Background/Brand: Brand/500 → Brand/400 — that cascades through the whole system rather than a second palette to maintain.",
        "The system is built for two surfaces from the start: Packt (marketing, orange Brand tokens) and Packt Hub (the product, blue Hub-packt tokens) share one primitive core and diverge only at the semantic layer. Same components, two identities. The same discipline runs through type, spacing, radius, and a 12-column grid that collapses to 4 on mobile. Design and code stay in lockstep through Code Connect — not by Slack threads, not by discipline.",
        "Tables are the exception every automated workflow eventually hits. The variability is the problem — you never fully know what you're looking at until a real dataset lands in it. Every product handles data payloads differently, and that means the component needs to handle custom sorting, column pinning, virtualization for large datasets, and inline editing — none of which a scaffold can decide for you. The Figma plugin imported 44 components in a single run. The table I rebuilt by hand.",
      ],
      figures: [
        {
          alt: "Packt colour foundations, five primitive hues and a nine-step tint/shade scale",
          src: "/packt/2026-color-foundations.jpg",
          span: "full",
          ratio: "16 / 9",
          focus: "top",
          caption: "Foundations: primitive hues → a 9-step scale → a naming convention. Everything else references these.",
        },
        {
          alt: "Semantic colour tokens in light mode: Content, Background, Border, Surface, Brand and Hub-packt",
          src: "/packt/2026-semantic-light.jpg",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "Semantic tokens named by role, note the Brand (Packt) and Hub-packt (Packt Hub) sets.",
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
          alt: "Typography primitive styles, Heading 5XL down to Text XS",
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
          caption: "An 8-point spacing scale, 2XS to 12XL, as tokens.",
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
          alt: "Layout and breakpoints, a 12-column grid that collapses to 4 on mobile",
          src: "/packt/2026-layout.jpg",
          span: "full",
          ratio: "16 / 9",
          focus: "top",
          caption: "A 12-column grid that becomes 4 on mobile, with breakpoints defined as variables.",
        },
      ],
      highlights: [
        "Tokens as the single source of truth, primitives → semantic tokens → components.",
        "Dark mode and theming by primitive swap, not a duplicated palette.",
        "One token core, two brands,  Packt (Brand/orange) and Packt Hub (Hub-packt/blue).",
        "Storybook adds an effective visualisation layer and serves as a living handbook for both designers and developers.",
        "Figma MCP + Code Connect keep components mapped 1:1 with the design; Claude scaffolds, documents and audits for drift.",
      ],
    },
    {
      era: "Now",
      kicker: "bp — the same problem, enterprise scale",
      title: "221 products, one system, and a gap between design and code",
      status: "current",
      body: [
        "At bp, the brief arrived in a worse state. The 2025 brand revamp — stronger greens, a move from Roboto to bp Sans — had already landed, but none of it was reflected in bpCore's tokens or components. Multiple business units were running local aliases of the design system. No single source of truth, consistency broken across typography, colour, and component behaviour. As Senior Product Designer and Design Engineering Lead, I led the brand-to-system alignment: new colour ramps, neutral panes, token-ready foundations teams could ship without rework.",
        "The architecture question was harder. bp's B2C product, bpme, diverged from core on two axes at once: built for mobile, legitimately different branding. Three responses available: force conformance and break the product, accept drift, or change the architecture. When a consumer product is genuinely allowed to look different, the universal layer is brand and tokens — not components. That's what set bpCore up as the centre for visual authority, with domains owning their own component reality beneath it.",
        "The result is a federated, four-tier model: brand tokens at Tier 1, bpCore-owned universal components at Tier 2, domain kits at Tier 3, product teams consuming and extending at Tier 4. 221 projects are now consuming bpCore. 90 are at >90% token coverage. Two are using coded components. That gap — 90 in design, 2 in code — is the clearest signal in the data, and it drives the MVP's first iteration: make the coded layer as easy to reach for as the Figma one.",
        "When bp's brand refreshed in 2025, it shipped as token and component updates, not a redraw. Accessibility sits inside the change process — WCAG conformance built into governance, and when the accessibility specialist role was restructured out, we built our own audit process rather than letting the checks lapse. The tokens-to-code method I proved at Packt is how a global design system now ships across bp.",
      ],
      figures: [
        {
          alt: "Before: bpCore adoption varied across teams, with components cloned and disconnected",
          src: "/packt/bp-before.jpg",
          span: "half",
          ratio: "1500 / 797",
          caption: "Before: adoption varied, components cloned and disconnected across teams.",
        },
        {
          alt: "Now: a unified, federated System of Systems with a simplified bpCore",
          src: "/packt/bp-unified.jpg",
          span: "half",
          ratio: "1500 / 797",
          caption: "Now: a unified, federated System of Systems with a simplified core.",
        },
        {
          alt: "The tiered governance model, owners and standards at each of the four tiers",
          src: "/packt/bp-tiers-governance.jpg",
          span: "half",
          ratio: "1500 / 797",
          caption: "Governance layered on the tiers: clear owners and standards (WCAG, tests, responsive) at each level.",
        },
        {
          alt: "The contribution framework: build a component, then promote it up the tiers",
          src: "/packt/bp-contribution.jpg",
          span: "half",
          ratio: "1500 / 797",
          caption: "The contribution framework: teams build, then useful components get promoted up to tier 3 and tier 2.",
        },
        {
          alt: "bpCore design showcase: primitives, components and project kits",
          src: "/packt/bp-showcase.jpg",
          span: "full",
          ratio: "1500 / 797",
          caption: "The system made real, primitives → components → project kits.",
        },
        {
          alt: "New bpCore benefits: designed for Figma, integrated with bp, built for AI",
          src: "/packt/bp-benefits.jpg",
          span: "full",
          ratio: "1500 / 797",
          caption: "Why it wins: designed for Figma (Code Connect via the Figma MCP), integrated with bp, and built for AI.",
        },
      ],
      highlights: [
        "Diagnosed the design-to-code gap — 90 projects at full token coverage in design, 2 in code — and built the architecture to close it: Storybook as the coded front door, Figma MCP + Code Connect as the translation layer.",
        "bp's 2025 brand refresh (stronger greens, bp Sans) shipped as token and component updates across 221 products — not a redraw.",
        "When the accessibility specialist role was restructured out, built a self-owned audit process rather than letting WCAG checks lapse — mitigation by design, not by gap.",
      ],
      docs: [
        {
          title: "bpCore team and its OKRs",
          fullWidth: true,
          image: {
            alt: "bpCore federated tiers overview",
            src: "/packt/bp-core-tiers-dark.png",
            ratio: "4 / 3",
            focus: "top",
            caption: "bpCore federated tiers: brand tokens -> central core components -> domain kits",
          },
          body: [
            "Vision: bpCore is bp's global design system that creates a unified visual language across digital interfaces. It is built on four core principles: simple shared base styles to reduce entropy and improve consistency, modular composition so components can be used together without custom rework, DRY atomic design from particles to organisms to improve reuse and extensibility, and accessibility-by-default with evidenced governance built into change management.",
            "Value: The case for bpCore isn't an industry benchmark — it's what the portfolio audit already shows. 221 projects consume the system; 90 of them at more than 90% token coverage. Yet only 2 consume it in code, and across the 20 priority products design adoption outruns development adoption in every single category. The value on the table is that gap: hundreds of products already designing on-system, waiting for the coded layer to become as easy to reach for as the Figma one. Closing it is the difference between a system that describes bp's interface and one that builds it.",
            "OKRs: Objective 1 focuses on golden-path adoption through greenfield adoption rate, targeted migrations across business areas, and increasing share of bpCore components in shipped front-end code. Objective 2 focuses on first-loop velocity through WCAG AA compliance, brand alignment, and low component detachment rates — detachment rate is currently a target rather than a measured baseline, set from design system practice and bp's own read of what healthy component consumption looks like; instrumenting it properly is part of the adoption-tracking work with the agentic team. Objective 3 focuses on system-of-systems participation through active adoption in live sessions and measurable community contributions into federated tiers.",
          ],
        },
      ],
    },
    {
      era: "Survey",
      kicker: "Evidence-led prioritisation",
      title: "bpCore adoption survey findings that shaped the MVP",
      status: "current",
      body: [
        "To avoid guessing what to build next, we ran a structured adoption survey across product teams and paired that with component usage reconciliation. The goal was to rank real pain points, identify where teams found value, and map support expectations.",
        "The findings gave us a clear priority stack: keep brand compliance and accessibility strong, improve discoverability and documentation pathways, and focus the first MVP iterations on the most-used component groups and high-friction journeys.",
      ],
      figures: [
        {
          alt: "Survey chart, main reasons for using bpCore",
          src: "/packt/survey/reasons-usage.png",
          span: "full",
          ratio: "16 / 9",
          caption: "Main reasons teams use bpCore: brand compliance, accessibility standards, time savings, and mandated use.",
        },
        {
          alt: "Survey chart, ease of use rating",
          src: "/packt/survey/ease-of-use.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Ease-of-use baseline and score distribution.",
        },
        {
          alt: "Survey chart, usefulness for work",
          src: "/packt/survey/usefulness-rating.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Perceived usefulness baseline and distribution.",
        },
        {
          alt: "Survey chart, components used in projects",
          src: "/packt/survey/components-used.png",
          span: "full",
          ratio: "4 / 3",
          caption: "Most-used component families used to set reconciliation and MVP focus.",
        },
        {
          alt: "Survey chart: issues, limitations, and bugs (word cloud)",
          src: "/packt/survey/issues-wordcloud.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Recurring issue themes from open feedback.",
        },
        {
          alt: "Survey chart, requested improvements and features (word cloud)",
          src: "/packt/survey/improvements-wordcloud.png",
          span: "half",
          ratio: "16 / 10",
          caption: "Top improvement themes that informed roadmap sequencing.",
        },
        {
          alt: "Survey chart, preferred support and documentation channels",
          src: "/packt/survey/support-channels.png",
          span: "full",
          ratio: "16 / 9",
          caption: "Preferred channels for support and documentation, including Figma and Storybook.",
        },
      ],
      highlights: [
        "Survey data made prioritisation explicit instead of opinion-led.",
        "Component usage + feedback shaped the first bpCore MVP scope.",
        "Support-channel preferences validated Storybook and Figma as primary handbook surfaces.",
      ],
    },
    {
      era: "Baseline",
      kicker: "Adoption at scale",
      title: "221 products consuming bpCore — where the system stood at baseline",
      status: "current",
      body: [
        "Before defining the MVP roadmap we needed to know exactly where bpCore stood across bp's portfolio. Two datasets gave us the picture: a deep dive across 221 projects actively consuming bpCore, and a focused baseline on the 20 highest-priority products where design-to-development gaps were most critical to close.",
        "The headline number — 221 projects — confirms bpCore is operating at the scale of a real platform product, not a reference library. Of those, 90 projects are fully adopting (>90% UI token coverage), 90 are partially adopting (20–90%), and 36 are in early influence (<20%). Coded component adoption sat at 2 — and the reason isn't that tokens must come first. bpCore was distributed as a Figma system with a handoff: designers could adopt it, and developers had nothing to install. Design adoption raced ahead because design had a front door and code didn't. Storybook was conceptualised later, precisely to give the coded layer one, and the Figma MCP + Code Connect work is the second half of the same fix: it makes components reachable without a human translation step in between. The trajectory since baseline is improving; adoption at this scale is honestly only measurable over about a year, so I'd rather show the diagnosis and the intervention than a number I can't yet stand behind. The metric I'll judge it by is coded-component adoption moving from 2 toward the 90 projects already at >90% token coverage — that's the population already primed.",
        "The priority product baseline tells the more important story. Design adoption is ahead of development in every category. Seven of the 20 priority products fully consume bpCore in design; only two match that in development. Products like Wells & Subsurface and Wells Real Time Operations are true end-to-end adopters. BioVerse, Fleet Foundations, Pivot, bpme Global App and MyAirbp are fully adopted on the design side but the development side hasn't followed yet. That gap — design fully consuming, dev not using — is the clearest signal in the data and the primary driver of the bpCore MVP's first iteration: make the coded components as easy to reach for as the Figma ones.",
      ],
      figures: [
        {
          alt: "bpCore baseline — 20 priority products, design vs development adoption matrix",
          src: "/packt/bpcore-baseline.png",
          span: "full",
          ratio: "1670 / 1234",
          focus: "top",
          caption: "Priority product baseline: 20 products assessed across design and development adoption states. Green = design, purple = development.",
        },
        {
          alt: "bpCore deep dive — all 221 projects consuming bpCore, UI token and coded component adoption",
          src: "/packt/bpcore-deepdive.png",
          span: "full",
          ratio: "1315 / 9858",
          focus: "top",
          caption: "Deep dive: all 221 projects consuming bpCore, mapped by UI token adoption (influenced / partial / complete) and coded component usage.",
        },
      ],
      highlights: [
        "221 projects consuming bpCore across bp's global portfolio.",
        "90 projects completely adopting (>90% token coverage) — 41% of the portfolio.",
        "90 projects partially adopting (20–90%); 36 in early influence (<20%).",
        "Only 2 projects using coded components — the clearest MVP gap to close.",
        "7 of 20 priority products fully consuming in design; only 2 matching in development.",
        "Design → development gap drives the first MVP iteration: close what design already opened.",
      ],
      docs: [
        {
          title: "Priority product baseline — design vs development adoption (20 products)",
          body: [
            "Each product assessed across four states: Not using · Influencing · Fully Consumed · Supportable (can teams be supported using bpCore today?).",
            "— Fully Consumed in Design + Supportable —",
            "• Wells & Subsurface Application Platforms — Design: Fully Consumed · Dev: Fully Consumed · Supportable: Yes",
            "• Wells Real Time Operations — Design: Fully Consumed · Dev: Fully Consumed · Supportable: Yes",
            "• BioVerse — Design: Fully Consumed · Dev: Influencing · Supportable: Yes",
            "• Fleet Foundations (OneFleet) — Design: Fully Consumed · Dev: Not using · Supportable: Yes",
            "• Pivot — Design: Fully Consumed · Dev: Influencing · Supportable: Yes",
            "• bpme Global App — Design: Fully Consumed · Dev: Not using · Supportable: Yes (Design) / No (Dev)",
            "• MyAirbp — Design: Fully Consumed · Dev: Not using · Supportable: Yes (Design) / No (Dev)",
            "— Influencing in Design —",
            "• IRIS Incident Management & Reporting — Design: Influencing · Dev: Influencing · Supportable: Yes",
            "• Global Integrated Pricing Programme — Design: Influencing · Dev: Influencing · Supportable: Yes",
            "• Crude & Feedstock Quality — Design: Influencing · Dev: Not using · Supportable: Yes (Design)",
            "• Retail Operating System — Design: Influencing · Dev: Not using · Supportable: Yes (Design)",
            "— Not yet consuming —",
            "• Refinery Campaign Planning & Execution — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• BioSphere — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Credit Risk Mgmt (Rubix) — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• ERP Transformation — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Integrated CRM — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Intelligent Planning (Castrol – Project Spring) — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Production Optimization & Surveillance — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Production Surveillance — Design: Not using · Dev: Not using · Supportable: Unknown",
            "• Virtual Asset Management Platform (Digital Twin) — Design: Not using · Dev: Not using · Supportable: Unknown",
          ],
        },
        {
          title: "Deep dive — all 221 projects consuming bpCore (UI tokens + coded components)",
          body: [
            "UI & Design Token adoption across 221 projects: Influenced <20% (36 projects) · Partial 20–90% (90 projects) · Complete >90% (90 projects). Coded component adoption: 0 CSS-only · 0 tokens-only · 2 using components.",
            "— Complete adoption (>90%) — bp Helix · bp pulse · Board Reporting · CADOPS · CarbonTab · Castrol Fastlane · Castrol SFO · CEP · Clean Energy Parks · Communities Central · Control of Works · Corrosion Dashboard · CRM · Daisi · DAM · Data Search Workbench · Data Source · Data-Visualisation · Databases & Containers · DCM Marketplace · Demand Forecasting · Demeter · Design Science: Real Estate Tokenisation · Digital Best Practices · Digital Champions · Digital Maturity Self-Assess · DSF · EarthEye · EC Register refresh · EVOLVE · Fleet · I&E_Project - Catalyst · ILA Dashboards · In-Truck App · Incubation_Cerebro · Investor Relations Portal · Lean Portfolio Management App · M&A DE&O Execution Playbook · Major Projects: DPM · Major Projects: OneDecision · Major Projects: OnePortfolio · Major Projects: OneScreen · MFE Loyalty / MiBP Spain · Midstream Demand Management · NextGen Aviation · NextGen Castrol · Nexus · One Map Portal · Omni 2.0 · On the case · Open Loop · P&O - Transformation Radar · Polaris Pricing Platform · Superfleet · Superfleet SONIC · Superfleet | Accounts · Superfleet | Components · Superfleet | Payments · T&S Onboarding Prototype · Talent Marketplace · TRM and TDA · UDX · Well CaD · Accelerate · Agile Coach Ops · Airfield automation · BD Hopper · bp pulse HUN · bPowerd · bp Helix (2) · IRIS Overview · Castrol ANZ · Castrol Fastlane Indonesia · CEP (2) · bp CyberScores · BP Dealer Hub · bp EaaS + more",
            "— Partial adoption (20–90%) — AA&T · Amply integration into BP Pulse · Aral Webshop · AralMe · Aviation - Customer Consolidation Dashboard · Aviation Global Dashboard · B2B - Customer Dialog Center · B2B - Mobile Payments · B2B Dashboards · B2B2C - Onboarding and Redemption · BI Tools · BioVerse · bp Astrila · bp Midstream Control Tower · BP eDocket · BPme · BPme (AUS) · bPowerd · Business Cyber Barometer · Castrol · Citizen Dev · ConneXus · Contractor Management — MVP · DBaaS Web Platform · DCM marketing · DevPortal · DSW App · ELT Assessment App · Emails last version · Emissions tool - Reckitt · EoS · Finance Industrialisation MI Power BI · FM&S Campaign · Global Integrated Pricing Programme · IDP · Innovation · IRIS QR Code · MFE Global Transaction History · MFE Pay for Fuel · Midstream Planning & Insights · Midstream SupplyHub · Modularity · myService Hub · NL Pulse App · P&C Catalogue · People & Culture (Akumina) · Project Aurora · Project Colosseum · Reconciliation App · RFS - My Service Hub · Rio EV · Ruby · S&ORA · Safe2Go · SEAT SRM · Shipping OMS · Smart Digital Assets · Smart Digital Engagement · Smart Search · Strala · Supply Planning Tool · T&S Data Quality · TA&I · TA&M · TCO CoPilot · TCO Customer Shares · TCO Discovery · Team A - Presales + more",
            "— Influenced (<20%) — ADW · ALIM Registers · Argand · Asset Condition Monitoring · Climate Action DAO · Crude & Feedstock · D&A · DaaS · Dynamo · Ghia · Incubation · Lab · MAD · MARVEL B2B2C · Molecu · Neuniq · Partner360 · Project Eagle · Rewards Unlocked AU · Rio · RPTK Tool · Shipping Emissions Garage · Truck Decarbonisation · WDW Risk Toolkit (and sub-projects) · WDW Well PaD - WDO · Well Foundations · WPE: AIW · WPE: Connected Case Management · WPE: Mobility YIT · WPE: Operator Workbench · cxpartners UR BPme UK · FM&S POI & Crowdsourcing + more",
          ],
        },
      ],
    },
  ],

  processTitle: "Connecting Claude to Figma with the MCP",
  processIntro:
    "The reason 2026 works is the loop between design and code. Figma's Dev Mode MCP server exposes the file: variables, styles, component structure: as tools Claude can call, so instead of me translating a design by hand, Claude reads it directly and writes the system. This is the workflow I ran for the Packt system end to end.",
  process: [
    {
      step: "01",
      title: "Stand up the Figma MCP server",
      detail:
        "Turn on Figma's Dev Mode MCP server (Figma desktop → Preferences → Enable Dev Mode MCP server), then register it with Claude: `claude mcp add` for Claude Code, or an entry in the MCP config. Claude can now call Figma tools against whatever frame is selected.",
      tools: ["Figma Dev Mode MCP", "claude mcp add"],
    },
    {
      step: "02",
      title: "Author the token foundations as Figma variables",
      detail:
        "Build the source of truth in Figma: primitive colours and their tint/shade scales, then semantic tokens, type, spacing, radius and border variables, organised into collections with modes for light/dark and for the Packt and Packt Hub brands.",
      tools: ["Figma variables", "modes & collections"],
    },
    {
      step: "03",
      title: "Let Claude read the design context",
      detail:
        "Point Claude at a frame and it pulls the real values, not a screenshot: through the MCP: variable definitions, the design context and structure of a component, and a reference image to check against.",
      tools: ["get_variable_defs", "get_design_context", "get_screenshot"],
    },
    {
      step: "04",
      title: "Generate the code token layer",
      detail:
        "Claude turns the Figma variables into a typed token package that mirrors the collections and modes, CSS custom properties plus a Tailwind theme, so the same names (Background/Brand, Text/Primary) exist in design and in code.",
      tools: ["design tokens", "CSS vars", "Tailwind theme"],
    },
    {
      step: "05",
      title: "Scaffold components and map them with Code Connect",
      detail:
        "From the Figma components, Claude scaffolds the React components against the tokens and registers Code Connect mappings, so each Figma component resolves to its real coded counterpart, props and all, in Dev Mode. Storybook then becomes the visualisation and validation layer: a living handbook where designers and developers review states, variants and usage together.",
      tools: ["Code Connect", "React", "Storybook", "get_code"],
    },
    {
      step: "06",
      title: "Audit for drift and keep it in sync",
      detail:
        "Run it in reverse: Claude sweeps the codebase for hard-coded values and off-system components, checks them against the Figma variables, and flags where the two disagree, then drafts the docs and changelog. A token change in Figma becomes a regenerated token package, not a Slack thread.",
      tools: ["drift audit", "docs", "changelog"],
    },
    {
      step: "07",
      title: "Round-tripping the system: the Figma import plugin",
      detail:
        "Scaffolding components with Claude gets you code. Getting that code back into Figma without rebuilding it by hand is the part nobody solves — third-party tools cap out on component counts and charge for the privilege. So I wrote a Figma plugin against the Plugin API: 44 components and 400+ variants imported in a single run. The hard problem wasn't translation, it was load time. Volume is where plugin performance falls over, and the honest limit is that no matter how much you automate, there's always one component you end up rebuilding by hand. Which is why the deliverable that lasts isn't the plugin — it's the system guidelines that let someone build that one component correctly, as a Tier 3 contribution that can earn its way into core if adoption justifies it. This doc walks through the full approach.",
      tools: ["Figma Plugin API", "Storybook", "React", "JavaScript"],
      downloadUrl: "/figma-plugin-portfolio.docx",
    },
  ],

  projectLink: "https://zarin071.github.io/packt-ds/",
  projectLinkLabel: "Packt DS Storybook ↗",
  cover: "linear-gradient(135deg, #FF8A5B 0%, #F26B3A 50%, #C74B24 100%)",
  coverImage: "/packt/cover.jpg",
  coverImageFit: "contain",
  coverLabel: "Design System · 2018 → 2026",
}

export default packtDesignSystem
