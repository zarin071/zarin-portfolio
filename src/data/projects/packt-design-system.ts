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
    "From a 2018 style guide to an AI-assisted design system for Packt & Packt Hub, the same problem, revisited with Figma MCP, Claude and Storybook. At bp, I led the evolution as Senior Product Designer and Design Engineering Lead through bpCore across dozens of teams and products.",
  role: "Senior Product Designer · Design Engineering Lead (bp) · Design Systems · UI/UX · Front-End",
  timeline: "2018 (revisited 2026)",
  tags: ["Design System", "Figma MCP", "AI-assisted", "Front-End"],

  problem:
    "Packt ships emerging-tech content within AI, data science, cloud, across a marketing site and a learning product. The surface area grew far faster than the UI could stay consistent, and every team reinvented the same buttons, cards and page shells slightly differently.",

  approach:
    "I revisited the problem twice, eight years apart. In 2018 I built a style guide: documented colour, type and components headed to development. Done and dusted. In 2026 I redesigned it as a real system: tokens as the single source of truth, Figma variables wired to code through the Figma MCP and Code Connect, and Claude doing the scaffolding, documentation and drift audits.",

  impact:
    "The result is one token core that themes cleanly across two brands Packt and Packt Hub, with design and code that stay in lockstep instead of drifting apart the moment a team ships. This also helped at bp, where I scaled the same principles to a federated design system for dozens of teams and products, with a single source of truth flowing down and real usage flowing back up.",

  overview:
    "This is a case study told across eight years. \n\n The same goal: a consistent, scalable design system for  tech platforms: approached first as a style guide in 2018, then reimagined in 2026 as an AI-assisted design system. \n\n It's a story about what changed: the tooling, the definition of \"done\", and how much of the busywork now belongs to the machine.",

  narrative: [
    {
      era: "2018",
      kicker: "The style guide",
      title: "A well-documented style guide, that quietly drifted",
      status: "past",
      body: [
        "My first pass at Packt was, a style guide dressed as a design system. Honestly, that is what I knew back then. I documented a colour guide, a type scale, three button sizes, an icon set and a responsive grid , carefully specified, exported as boards, and worked into the front-end team as the reference.",
        "Since my shift as a designer I realised the style guide did real work. New pages looked more like Packt and engineers stopped guessing hex codes. But look closely at what it actually was: a set of pictures of the UI. Colours pinned to fixed hex values, buttons measured in absolute pixels, grids drawn per breakpoint. It described how things should look, it didn't enforce it. There were no tokens, no single source of truth and no living components, so the moment two teams shipped in parallel the \"system\" started to drift.",
        "That's the gap I kept hitting: a style guide describes the surface; a design system makes the correct thing the easiest thing to build. In 2018, with the tools I had, I only got halfway to the second one.",
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
      title: "Redesigned with Figma MCP, Claude and Storybook. A the single source of truth",
      status: "current",
      body: [
        "Eight years later the same brief lands very differently. The unit of truth is no longer a screen , it's a token. Everything starts with primitive colours , the base hues plus a tint-and-shade scale ,named on a strict convention (Brand/100, Blue/500, Base/White).",
        "On top of the primitives sit semantic tokens named for how they're used, not what they look like: Content, Background, Border, Surface, Overlay, Brand, Status. A semantic token points at a primitive, and a component points at the semantic token, so dark mode is a single swap (Background Brand: Brand 500 → Brand 400) that cascades through the whole system rather than a second palette to maintain.",
        "The same discipline runs through type (a primitive scale, Heading 5XL → Text XS, remapped per breakpoint), an 8-point spacing scale with t-shirt sizing, radius and border-width tokens, and a 12-column grid that collapses to 4 on mobile. And it's built for two surfaces from day one: Packt (marketing, orange Brand tokens) and Packt Hub (the product, blue Hub-packt tokens) share one primitive core and diverge only at the semantic layer: same components, two identities.",
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
      kicker: "bpCore team and OKRs",
      title: "Setting up the bpCore team: structure, principles and objectives",
      status: "current",
      body: [
        "What was wrong at bp: during a major organisational restructure, the brand team was still being re-formed while the 2025 brand revamp had already landed. The visual language shifted towards stronger bp greens and greys, and the brand typeface moved from Roboto to the new digital-first bp Sans, but none of those changes were yet reflected in bpCore tokens or components.",
        "At the same time, multiple business units were running local aliases of the design system. There was no single source of truth, no common fallback model, and consistency broke across typography, colour usage, component behaviour, and documentation.",
        "My role at bpCore as Senior Product Designer and Design Engineering Lead: I owned the brand-to-system alignment, created updated colour ramps and neutral panes to support the revamp, and converted the new brand direction into token-ready foundations teams could ship without rework.",
        "Components were also scattered and unevenly adopted. So the first move was reconciliation: audit what existed, what teams were actually using, and what they needed next. We paired usage analytics with a structured survey and used that evidence to define the component structure and bpCore MVP scope.",
        "The answer is a federated, tiered architecture. Brand tokens sit at Tier 1; a central bpCore team owns the universally-used components at Tier 2; each domain: Product, Marketing, Agentic, Mobile, gets a federated \"kit\" at Tier 3; and product teams (GIPP, bp.com, Eva, bpMe and more) consume and extend at Tier 4. The single source of truth flows down, while real usage and new patterns flow back up and get promoted into core. It's the governance answer to the exact drift I first hit at Packt, turned into an operating model for an organisation.",
        "The discipline underneath is the same, just formalised: a small set of shared base styles, strictly modular components, and atomic design end-to-end, particles → atoms → molecules → organisms, so nothing is built twice, with accessibility (WCAG guidelines) baked into the change process and evidenced for every market. And when bp's brand refreshed in 2025, a leaning-in set of greens, a digital-first bp Sans typeface, a bento-grid system, it landed as token and component updates rather than a redraw. Dark-mode-by-swap at Packt became brand-refresh-by-token at bp.",
        "It also closes the very loop I built at Packt. bpCore is designed for Figma and built for AI: every component ships with Code Connect through the Figma MCP, and the docs are written AI-first so coding agents consume the system directly. The tokens-to-code method I proved on one product is now how a global design system ships across bp.",
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
        "Started from a fragmented reality: post-restructure teams, brand refresh not reflected in-system, and multiple bpCore aliases across businesses.",
        "As Senior Product Designer and Design Engineering Lead at bp, I led the brand-to-system reset and turned the revamp into a usable token and component foundation.",
        "Aligned brand to system with new green/grey colour ramps and neutral panes, then translated that into token-ready foundations.",
        "Ran component reconciliation using real usage plus survey input to define the bpCore MVP and roadmap.",
        "One core, many products, a federated tier model keeps dozens of teams on-system without a central bottleneck.",
        "Atomic design end-to-end: particles → atoms → molecules → organisms, so patterns are reused, never rebuilt.",
        "Accessibility baked into the change process and evidenced, regulatory-ready across every market bp operates in.",
        "A whole brand refresh (2025 greens + bp Sans) shipped as tokens, not a redraw, the Packt swap trick at enterprise scale.",
        "Designed for Figma, built for AI: Code Connect via the Figma MCP and AI-first docs, the same loop proven at Packt.",
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
            "Value: Organizations using design systems report significant delivery gains and quality improvements. Benchmarks referenced in this case include faster front-end and design cycles, reduced engineering effort, improved accessibility/performance/maintainability, stronger design-to-dev collaboration, faster onboarding, and measurable ROI. The strategic value is a future-ready product foundation that scales consistency, trust, and team velocity.",
            "OKRs: Objective 1 focuses on golden-path adoption through greenfield adoption rate, targeted migrations across business areas, and increasing share of bpCore components in shipped front-end code. Objective 2 focuses on first-loop velocity through WCAG AA compliance, brand alignment, and low component detachment rates. Objective 3 focuses on system-of-systems participation through active adoption in live sessions and measurable community contributions into federated tiers.",
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
        "The headline number — 221 projects — confirms bpCore is operating at the scale of a real platform product, not a reference library. Of those, 90 projects are fully adopting (>90% UI token coverage), 90 are partially adopting (20–90%), and 36 are in early influence (<20%). Coded component adoption is still early: only 2 projects consume bpCore components in code, which is expected at this stage — token adoption always precedes component adoption, and the coded layer needs to catch up.",
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
    "The reason 2026 works is the loop between design and code. Figma's Dev Mode MCP server exposes the file: variables, styles, component structure: as tools Claude can call, so instead of me translating a design by hand, Claude reads it directly and writes the system. Here's the workflow I'd run for Packt.",
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
      step: "★",
      title: "Bonus, Import your components back into Figma",
      detail:
        "If you've scaffolded components with Claude and want to bring them into Figma without doing it by hand, this doc walks you through building a custom Figma plugin that does it automatically: no third-party tools, no component limits. Applied to the Packt DS: 44 components and 400+ variants imported in one run.",
      tools: ["Figma Plugin API", "Storybook", "React", "JavaScript"],
      locked: true,
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
