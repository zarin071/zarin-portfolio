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
}

export const projects: Project[] = [
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
    id: "packt-design-system",
    title: "Packt Design System",
    subtitle: "Scalable component library for content-rich tech platform",
    role: "UI/UX Designer + Front-End Developer",
    timeline: "2018",
    tags: ["Design System", "Front-End", "Web Development"],
    problem: "Packt Publishing's platform serving emerging tech content (AI, data science, cloud) lacked a unified component library, causing inconsistent UI and slow design-to-development handoffs.",
    approach: "Built a reusable design system and component library from the ground up. Established shared language between design and engineering through documented patterns and production-ready React components.",
    impact: "Reduced design-to-development handoff time by 30% and accelerated delivery of new product features.",
    projectLink: "https://www.packtpub.com/en-in",
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
  {
    id: "ai-chatbot-michelin",
    title: "AI-Powered Chatbot — Michelin",
    subtitle: "Generative AI chatbot for tyre service booking",
    role: "Conversational Designer",
    timeline: "2024",
    tags: ["AI", "Conversational Design", "Generative AI"],
    problem: "Customers faced friction when trying to book tyre change services through traditional website navigation.",
    approach: "Contributed as conversational designer to introduce a generative AI-powered chatbot. Designed conversation flows, defined AI persona and tone, and mapped user journeys from discovery to booking completion.",
    impact: "Reduced customer journey friction for tyre service bookings through conversational AI.",
  },
  {
    id: "fuel-savings-tool",
    title: "AI-Enhanced B2B Fuel Savings Tool",
    subtitle: "CO2 reduction and fuel savings features for Michelin B2B",
    role: "Product Designer",
    timeline: "2023",
    tags: ["AI", "B2B", "Data-Driven UI"],
    problem: "Michelin's B2B platform needed AI-enhanced tools for CO2 reduction and fuel savings, but user retention was low due to poor end-to-end journey design.",
    approach: "Redesigned end-to-end user journeys applying data-driven UI principles. Collaborated across design, data science, and engineering workstreams to integrate AI features seamlessly.",
    impact: "Improved user retention through redesigned end-to-end journeys.",
    projectLink: "https://b2b.michelin.in/fuel-saving-calculator",
  },
]
