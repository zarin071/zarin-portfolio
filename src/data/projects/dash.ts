import type { Project } from "./_types"

const dash: Project = {
  id: "dash-digital-analytics-hub",
  title: "DASH — Digital Analytics Strategy Hub",
  subtitle: "A central hub giving bp delivery teams real-time control over performance",
  role: "Product Designer",
  timeline: "2025 — Present",
  tags: ["Product Design", "Data Analytics", "Enterprise", "AI/ML"],
  password: "bp-dash-2025", 

  problem:
    "bp's digital delivery business entity lacked a central, real-time view of performance. Critical data was scattered across multiple portfolios and detailed Power BIs,PDFS, PPTs making it slow to manage budgets, headcount, and delivery status — and hard to spot when projects were heading off-track before late surprises derailed quarterly outcomes.",

  approach:
    "Designed DASH as a single integrated hub, developed collaboratively with a portfolios within the dihital delivery entity  and grounded in customer feedback gathered before development began. Consolidated finance, headcount, project delivery status, and TRM reporting into one place, powered by Palantir Foundry for robust data integration and advanced analytics — with a Strategy Cockpit that proactively alerts teams and leaders when intervention or escalation may be required.",

  impact:
    "Gave portfolios within digital delivery business entity one real-time hub for financial, headcount, and delivery insight — reducing duplication and manual reporting effort, increasing decision speed, and improving the integrity of the underlying data across products. Positioned as a driver of cultural and organisational change, not just reporting.",

  cover: "linear-gradient(135deg, #E8F4FD 0%, #B8D9F0 45%, #2E7AB8 100%)",
  coverLabel: "Digital Analytics",
  featured: false,

  // ── Rich sections ────────────────────────────────────────────────────────

  overview:
    "DASH is more than a dashboard — it's a tool designed to transform the way bp works. Built from team feedback, it provides a central hub for leadering under digital delivery business entity to control performance with greater visibility and control of their portfolios. By consolidating data from multiple portfolios into one location, DASH enables faster, smarter decision making. Powered by Palantir Foundry for robust data integration and advanced analytics, it's geared towards ML/AI developments — supporting bp's digital transformation through better resource optimisation, financial control, and real-time value delivery. Importantly, DASH doesn't replace the detailed Power BIs teams rely on for greater depth; it sits above them as the one-stop, integrated view.",

  origin: [
    "DASH began as a concept from an SVP in bp's Digital Delivery Business entity, who wanted a genuinely better understanding of the digital delivery landscape — not just financial performance, but performance all the way down to the atomic team level (a squad or a pod). I partnered with the product owner to shape that vision into a product: a way to see the high-level health of projects and initiatives, and drill right down to the root cause of how performance happens at the team level.",
    "Today that understanding is assembled by hand. Teams report how effectively, efficiently and on-budget they deliver through manual handoffs — PowerPoints, screenshots of multiple tools, CSVs and spreadsheets — collated up a long chain: from squads and pods to product managers and tech leads, to portfolio leads, to the VP of a portfolio, to the SVP, and up to the EVP. Every vertical does it slightly differently, so there's no standardised operational view, preparation is slow, and the accuracy isn't always reflective of how the work was really done.",
    "DASH set out to reshape those processes: standardise how team performance is reported and integrate the tools so the data lands in one place. We chose Palantir Foundry to aggregate disparate data sets and used its ontology to give them business logic, then surfaced that through a tailored front-end experience — going beyond the out-of-the-box Workshop UI to make the journey genuinely usable for leaders.",
  ],

  discovery: {
    summary:
      "To ground DASH in real leadership needs, we ran the “Digital VP Survey – Understanding Performance & Making Decisions” with VPs and the leadership team. It asked leaders to rank the business processes and tools they rely on — by how much value they drive and by how hard they are to prepare insights from — and to reflect on how they actually make and align decisions. The gap between high-value and hard-to-prepare activities pointed directly at what DASH should simplify first.",
    questions: [
      "Strategic decisions & alignment — what insights drove your last call between competing initiatives, and how did you align your leadership team?",
      "Day-to-day leadership & visibility — how do you stay close to progress without getting pulled into all the detail?",
      "Tools, information & resistance — where do you go first for quick clarity, and what stops those sources being reliable or adopted by teams?",
      "People-first leadership — what frustrations do you hear most from your teams, and how do you act on them?",
      "Looking forward — if ‘perfect’ existed, what would staying connected to strategy execution look like?",
      "Repetition & decision-making efficiency — which parts of your decision-making feel repetitive or manual, and which do you wish would ‘just happen’?",
    ],
  },

  offers: [
    "High-level finance data to manage budgets and understand variances.",
    "Controlled organisation headcount reporting for VP visibility and resource optimisation.",
    "Project delivery status tracking across key activities.",
    "Consolidated TRM third-party and application simplification reporting.",
  ],

  benefits: [
    {
      audience: "Strategy Cockpit",
      detail:
        "A comprehensive view of critical performance measures by team, with proactive alerting to inform teams and leaders when intervention or escalation may be required — cutting late surprises that derail quarterly outcomes.",
    },
    {
      audience: "Delivery Teams",
      detail: "Simplifies performance management and reduces manual effort for reporting.",
    },
    {
      audience: "Leadership",
      detail: "Provides clear insights for strategic decisions.",
    },
    {
      audience: "Data Quality",
      detail: "Enhances the integrity and accuracy of the underlying data.",
    },
  ],

  personas: [
    {
      role: "VP",
      scope: "Owns an organisation's delivery, budget, and headcount.",
      need: "Controlled organisation headcount reporting and resource optimisation, alongside budget variances for their teams — the VP-visibility view DASH was built to surface, replacing scattered sources with one real-time picture.",
    },
    {
      role: "SVP",
      scope: "Oversees multiple portfolios and functions.",
      need: "A consolidated view of finance, delivery status, and TRM across teams, with the Strategy Cockpit proactively flagging where intervention or escalation is needed — before late surprises derail the quarter.",
    },
    {
      role: "Group Leadership (EVP)",
      scope: "Accountable for a whole business line's performance.",
      need: "Trustworthy, high-level performance signals for strategic decisions — one integrated hub rather than a stack of detailed Power BIs — improving decision speed and the integrity of the data behind them.",
    },
    {
      role: "CEO",
      scope: "Enterprise-wide accountability.",
      need: "Confidence that delivery is on track and value is landing, seen at the highest level without digging into the detail — DASH positioned as a driver of cultural and organisational change, not just reporting.",
    },
  ],

  soundbites: [
    "Great progress so far – we're clearly heading in the right direction.",
    "A one-stop hub for project and financial insight — exactly what delivery teams have been asking for.",
    "This is simplifying how we work and reducing the manual overhead across teams.",
    "The consolidated view is a game-changer — finally all the key data in one place.",
    "DASH should support better project controls, not just analytics.",
    "Capturing business case evolution would help track scope, cost and value over time.",
  ],

  roadmap:
    "DASH is delivered in MVP phases, each building on the last — from a single source of truth, to proactive action, to AI-driven foresight. It continues to evolve on team feedback, with efficiency and effectiveness (not solely reporting) as the goal.",

  phases: [
    {
      name: "MVP 1",
      title: "Integrated 360° reporting hub",
      status: "current",
      summary:
        "Where DASH is today. Disparate, manually-collated sources are integrated via Palantir Foundry and given business logic through its ontology, then surfaced as one standardised, real-time view of performance across the full reporting chain — team to portfolio to VP to SVP to EVP. It replaces the PowerPoint, screenshot and CSV handoffs with a single source of truth.",
      items: [
        "Data integration across finance, headcount, delivery status and TRM",
        "Standardised, real-time 360° performance view for the full reporting chain",
        "Tailored front-end experience beyond the out-of-the-box Workshop UI",
      ],
    },
    {
      name: "MVP 2",
      title: "Triggers, automations & actionable insights",
      status: "next",
      summary:
        "Moving from reporting to action. The Strategy Cockpit proactively alerts teams and leaders when intervention or escalation is needed, and automations prepare the insights so decisions and pivots happen faster — because insights are only as good as what you execute on.",
      items: [
        "Proactive alerting and escalation triggers",
        "Automated insight preparation to cut manual overhead",
        "Faster, more accurate decisions and quicker team pivots",
      ],
    },
    {
      name: "MVP 3",
      title: "AI intelligence & value realisation",
      status: "future",
      summary:
        "The longer-term vision. ML/AI learning insights and recommendations, full investment-planning integration, and live value-realisation tracking — positioning DASH as a driver of cultural and organisational change, not just reporting.",
      items: [
        "ML/AI learning insights and recommendations",
        "Full investment-planning integration",
        "Live value-realisation tracking",
      ],
    },
  ],
}

export default dash
