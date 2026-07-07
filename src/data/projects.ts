/*
  ═══════════════════════════════════════════════════════════════
  PROJECTS — Edit this file to add/update your case studies
  ═══════════════════════════════════════════════════════════════

  TEMPLATE FOR EACH PROJECT:
  ──────────────────────────
  {
    id: "unique-id",                ← Used for URL (/work/unique-id)
    title: "Project Title",          ← Headline
    subtitle: "Brief one-liner",     ← Subtitle
    role: "Your Role Here",          ← Your role
    timeline: "Year or range",       ← When
    tags: ["Tag1", "Tag2"],          ← Upto ~4 tags
    problem: "The problem...",       ← What was the challenge?
    approach: "How you solved it...", ← Your process
    impact: "Measurable result...",  ← The outcome
    caseStudy: "https://...",        ← Optional: link to detailed case study (PDF/doc)
    projectLink: "https://...",      ← Optional: link to live project
  }

  To remove a link, just remove that line entirely.
*/

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
  /** CSS background value for the card cover art (placeholder until real screenshots land). */
  cover?: string
  /** Short label overlaid on the cover, e.g. a category. */
  coverLabel?: string
  /** Marks the hero/featured project (rendered full-width). */
  featured?: boolean
}

/*
  ─────────────────────────────────────────────────────────────
  FEATURED — exactly 3 projects (see docs/DESIGN-SPEC.md §4).
  To change the featured set, keep the count at 3 unless the spec
  is updated, and record the change in docs/CHANGELOG.md.
  ─────────────────────────────────────────────────────────────
*/
export const projects: Project[] = [
  {
    id: "ai-dealer-booking",
    title: "Conversational AI — Dealer Booking",
    subtitle: "Find and book a tyre-service dealer through conversation, not navigation",
    role: "Conversational Designer",
    timeline: "2024",
    tags: ["AI", "Conversational Design", "Generative AI"],
    problem: "To book a tyre-change service, customers had to navigate the entire Michelin site — searching for a nearby dealer, comparing options, and stepping through a multi-screen booking flow. The journey was long and easy to abandon.",
    approach: "Designed a generative-AI chatbot that finds and books a dealer entirely through conversation. Defined the conversation flows, the AI's persona and tone, and mapped the journey from a simple intent (\"I need a tyre change\") to a confirmed dealer booking — no manual site browsing required.",
    impact: "Collapsed dealer discovery and booking into a single conversation, removing the need to browse the website and cutting friction in the tyre-service journey.",
    cover: "linear-gradient(135deg, #EDE9FF 0%, #C9BEFF 45%, #7C6BE6 100%)",
    coverLabel: "Conversational AI",
    featured: true,
  },
  {
    id: "fleet-co2-calculator",
    title: "Fleet CO₂ Emissions Calculator",
    subtitle: "An interactive sustainability tool for Michelin Connected Fleet",
    role: "Product Designer + Front-End Developer",
    timeline: "2023",
    tags: ["Sustainability", "Data-Driven UI", "Front-End"],
    problem: "Fleet managers had no easy way to baseline their vehicles' carbon footprint. Sustainability reporting (CSRD, TCFD) is complex and inaccessible to non-experts, yet the pressure to measure and cut emissions was rising.",
    approach: "Designed and built an interactive fuel-saving calculator that takes fleet composition and monthly fuel-consumption inputs and returns estimated CO₂ emissions and savings with a breakdown by fuel type. Applied data-driven UI principles to make dense emissions data legible, and collaborated across design, data science, and engineering.",
    impact: "Gave fleet managers an accessible starting point for measuring emissions and improved retention through a clearer end-to-end journey. Featured on Michelin Connected Fleet.",
    projectLink: "https://b2b.michelin.in/fuel-saving-calculator",
    caseStudy: "https://connectedfleet.michelin.com/blog/calculate-co2-emissions/",
    cover: "linear-gradient(135deg, #E4F5E6 0%, #B4E4C4 45%, #4FA986 100%)",
    coverLabel: "Sustainability Tool",
  },
  {
    id: "packt-design-system",
    title: "Packt Design System",
    subtitle: "Scalable component library for a content-rich tech platform",
    role: "UI/UX Designer + Front-End Developer",
    timeline: "2018",
    tags: ["Design System", "Front-End", "Web Development"],
    problem: "Packt Publishing's platform serving emerging tech content (AI, data science, cloud) lacked a unified component library, causing inconsistent UI and slow design-to-development handoffs.",
    approach: "Built a reusable design system and component library from the ground up. Established a shared language between design and engineering through documented patterns and production-ready React components.",
    impact: "Reduced design-to-development handoff time by 30% and accelerated delivery of new product features.",
    projectLink: "https://www.packtpub.com/en-in",
    cover: "linear-gradient(135deg, #FFF0DA 0%, #FFD5A6 45%, #E08A55 100%)",
    coverLabel: "Design System",
  },
]

/*
  ─────────────────────────────────────────────────────────────
  ARCHIVED — not shown on the site, kept for future reuse.
  Move an item back into `projects` above to feature it again.
  ─────────────────────────────────────────────────────────────
*/
export const archivedProjects: Project[] = [
  {
    id: "bpcore-design-system",
    title: "bpcore Design System Rebrand",
    subtitle: "bp's enterprise design system — end-to-end rebranding",
    role: "Design Engineering Lead",
    timeline: "2025",
    tags: ["Design System", "Enterprise", "Rebranding"],
    problem: "bp's enterprise design system needed a comprehensive rebrand to align with updated brand guidelines, including a typeface migration from Roboto to BP Sans.",
    approach: "Led the end-to-end rebranding as design engineering lead. Refined the style guide, coordinated with cross-functional teams, and established migration patterns for practitioners globally.",
    impact: "Enabled consistent brand adoption across global markets. Reduced design friction for hundreds of practitioners.",
  },
  {
    id: "michelin-dashboard",
    title: "Dashboard Design — Salesforce",
    subtitle: "Data-heavy UX for sales, marketing, and operations",
    role: "UI/UX Designer",
    timeline: "2022",
    tags: ["UX Design", "Data Visualisation", "Salesforce"],
    problem: "Stakeholders across sales, marketing, and operations lacked real-time visibility into the lead lifecycle, campaign performance, and conversion metrics due to complex, non-intuitive dashboards.",
    approach: "Conducted user research with cross-functional stakeholders. Redesigned data visualisations to make high-density information accessible to non-technical users. Iterated through prototyping and usability testing.",
    impact: "Improved CRM dashboard engagement by 21% through research-informed redesign.",
    caseStudy: "https://drive.google.com/file/d/1rrTo4JeVvg8_xkQc_Z-r8GtoAe7XtLGO/view",
  },
  {
    id: "engage-portal",
    title: "Mobile Design — Michelin ENGAGE Portal",
    subtitle: "Unified mobile-first B2B community platform",
    role: "UI/UX Designer",
    timeline: "2022",
    tags: ["Mobile Design", "B2B", "Product Design"],
    problem: "Michelin's staff, dealership network, and fleet customers needed a unified mobile-first platform to access customer data and services — previously scattered across multiple tools.",
    approach: "Designed a Salesforce-built community platform with a mobile-first approach. Created consistent UX patterns across 3+ user personas with different needs and permissions.",
    impact: "Delivered a cohesive mobile experience across 3+ user personas, reducing support queries through intuitive self-service flows.",
    caseStudy: "https://drive.google.com/file/d/1i9dOy6aSlfkm_KfQDBXXzcpmJQFIeOGD/view",
  },
  {
    id: "swiggy-nux",
    title: "Swiggy NUX",
    subtitle: "Onboarding redesign for India's leading food delivery platform",
    role: "Product Designer",
    timeline: "2023",
    tags: ["Product Design", "UX", "App Design"],
    problem: "Swiggy's onboarding flow needed to align with updated design language while reducing signup friction and helping first-time users discover services like Instamart and Genie.",
    approach: "Redesigned the onboarding journey to be more welcoming and informative. Highlighted key services early in the flow while optimizing for faster completion times.",
    impact: "Reduced onboarding friction and increased first-time user conversion through a warmer, more informative flow.",
  },
  {
    id: "michelin-lifestyle",
    title: "Michelin B2C Lifestyle Pages",
    subtitle: "Research-informed landing pages with measurable uplift",
    role: "UI/UX Designer",
    timeline: "2022",
    tags: ["CRO", "UX Research", "A/B Testing"],
    problem: "Michelin's B2C landing pages for lifestyle products (wiper blades, accessories) were underperforming in conversion rates.",
    approach: "Conducted user testing and UX audits to identify friction points. Implemented structured A/B experiments informed by research insights. Iterated on design based on quantitative data.",
    impact: "15% conversion rate uplift. Michelin Champions Award 2022.",
    projectLink: "https://us.michelin-lifestyle.com/en/promotions/wiper-blades",
    caseStudy: "https://drive.google.com/file/d/1rrTo4JeVvg8_xkQc_Z-r8GtoAe7XtLGO/view",
  },
]
