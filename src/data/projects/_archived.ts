/*
  ARCHIVED PROJECTS
  ─────────────────
  Not shown on the Work grid. To feature one again, move it into
  the projects[] array in index.ts and give it a cover + coverLabel.
*/
import type { Project } from "./_types"

export const archivedProjects: Project[] = [
  {
    id: "bpcore-design-system",
    title: "bpcore Design System Rebrand",
    subtitle: "bp's enterprise design system — end-to-end rebranding",
    role: "Design Engineering Lead",
    timeline: "2025",
    tags: ["Design System", "Enterprise", "Rebranding"],
    problem:
      "bp's enterprise design system needed a comprehensive rebrand to align with updated brand guidelines, including a typeface migration from Roboto to BP Sans.",
    approach:
      "Led the end-to-end rebranding as design engineering lead. Refined the style guide, coordinated with cross-functional teams, and established migration patterns for practitioners globally.",
    impact:
      "Enabled consistent brand adoption across global markets. Reduced design friction for hundreds of practitioners.",
  },
  {
    id: "michelin-dashboard",
    title: "Dashboard Design — Salesforce",
    subtitle: "Data-heavy UX for sales, marketing, and operations",
    role: "UI/UX Designer",
    timeline: "2022",
    tags: ["UX Design", "Data Visualisation", "Salesforce"],
    problem:
      "Stakeholders across sales, marketing, and operations lacked real-time visibility into the lead lifecycle, campaign performance, and conversion metrics due to complex, non-intuitive dashboards.",
    approach:
      "Conducted user research with cross-functional stakeholders. Redesigned data visualisations to make high-density information accessible to non-technical users. Iterated through prototyping and usability testing.",
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
    problem:
      "Michelin's staff, dealership network, and fleet customers needed a unified mobile-first platform to access customer data and services — previously scattered across multiple tools.",
    approach:
      "Designed a Salesforce-built community platform with a mobile-first approach. Created consistent UX patterns across 3+ user personas with different needs and permissions.",
    impact:
      "Delivered a cohesive mobile experience across 3+ user personas, reducing support queries through intuitive self-service flows.",
    caseStudy: "https://drive.google.com/file/d/1i9dOy6aSlfkm_KfQDBXXzcpmJQFIeOGD/view",
  },
  {
    id: "swiggy-nux",
    title: "Swiggy NUX",
    subtitle: "Onboarding redesign for India's leading food delivery platform",
    role: "Product Designer",
    timeline: "2023",
    tags: ["Product Design", "UX", "App Design"],
    problem:
      "Swiggy's onboarding flow needed to align with updated design language while reducing signup friction and helping first-time users discover services like Instamart and Genie.",
    approach:
      "Redesigned the onboarding journey to be more welcoming and informative. Highlighted key services early in the flow while optimizing for faster completion times.",
    impact:
      "Reduced onboarding friction and increased first-time user conversion through a warmer, more informative flow.",
  },
  {
    id: "michelin-lifestyle",
    title: "Michelin B2C Lifestyle Pages",
    subtitle: "Research-informed landing pages with measurable uplift",
    role: "UI/UX Designer",
    timeline: "2022",
    tags: ["CRO", "UX Research", "A/B Testing"],
    problem:
      "Michelin's B2C landing pages for lifestyle products (wiper blades, accessories) were underperforming in conversion rates.",
    approach:
      "Conducted user testing and UX audits to identify friction points. Implemented structured A/B experiments informed by research insights. Iterated on design based on quantitative data.",
    impact: "15% conversion rate uplift. Michelin Champions Award 2022.",
    projectLink: "https://us.michelin-lifestyle.com/en/promotions/wiper-blades",
    caseStudy: "https://drive.google.com/file/d/1rrTo4JeVvg8_xkQc_Z-r8GtoAe7XtLGO/view",
  },
]
