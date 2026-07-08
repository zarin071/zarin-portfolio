import type { Project } from "./_types"

const dash: Project = {
  id: "dash-digital-analytics-hub",
  title: "DASH — Digital Analytics Strategy Hub",
  subtitle:
    "A single, trusted pane of glass for bp's Digital & Technology performance — from the atomic team to the VP",
  role: "Product Designer",
  timeline: "2025 — Present",
  tags: ["Product Design", "Service Design", "Data & Analytics", "Enterprise"],

  problem:
    "Across bp's Digital & Technology, VPs own investment, delivery, cost, capacity and value — but the picture is fragmented. Delivery data sits in disconnected systems (ADO, Foundry, SPM, Workday, finance), and every leadership cycle (GFO, IGM, EPR, WPR) it's re-assembled by hand — PowerPoints, screenshots and spreadsheets passed up a long chain from squads to portfolio leads to VPs. The result: low trust in the numbers, wasted effort, insight-light outputs, and slow decisions, with no standardised operational view across the verticals.",

  approach:
    "I treated DASH as a service-design problem, not just a dashboard. I mapped the VP's real performance cycle — orient, gather, interpret, decide, act — and found the pain concentrated in 'gather' (chasing owners to reconcile conflicting numbers) and the value in the moment insight becomes a decision. DASH consolidates the fragmented sources into one governed layer on Palantir Foundry (integrating ADO, SPM, Workday, Ariba and finance), uses the ontology to give data business logic and lift it out of spreadsheets, and surfaces it as a single, trusted pane of glass — built in stages, not big-bang, and shaped by a VP focus group. Guiding principles: trust first, simplify relentlessly, insight over reporting, and connect cost to value.",

  impact:
    "Gave leaders one real-time, trusted view across finance, headcount, delivery and value — cutting duplication and manual reporting, speeding decisions, and improving the integrity of the underlying data. A 60%+ survey response rate signalled strong leadership buy-in, and DASH is maturing from a reporting tool into an insight-led decision engine — positioned as a driver of cultural and organisational change, not just reporting.",

  cover: "linear-gradient(135deg, #E8F4FD 0%, #B8D9F0 45%, #2E7AB8 100%)",
  coverLabel: "Digital Analytics",
  featured: false,

  // ── Rich sections ────────────────────────────────────────────────────────

  origin: [
    "DASH began as a concept from an SVP in bp's Digital Delivery organisation, who wanted a genuinely better understanding of the digital delivery landscape — not just financial performance, but performance all the way down to the atomic team level (a squad or a pod). I partnered with the product owner to shape that vision into a product: a way to see the high-level health of projects and initiatives, and drill right down to the root cause of how performance happens at the team level.",
    "Today that understanding is assembled by hand. Teams report how effectively, efficiently and on-budget they deliver through manual handoffs — PowerPoints, screenshots of multiple tools, CSVs and spreadsheets — collated up a long chain: from squads and pods to product managers and tech leads, to portfolio leads, to the VP of a portfolio, to the SVP, and up to the EVP. Every vertical does it slightly differently, so there's no standardised operational view, preparation is slow, and the accuracy isn't always reflective of how the work was really done.",
    "DASH set out to reshape those processes: standardise how team performance is reported and integrate the tools so the data lands in one place. We chose Palantir Foundry to aggregate disparate data sets and used its ontology to give them business logic, then surfaced that through a tailored front-end experience — going beyond the out-of-the-box Workshop UI to make the journey genuinely usable for leaders.",
  ],

  discovery: {
    summary:
      "To ground DASH in real leadership needs, I helped run the “Digital VP Survey – Understanding Performance & Making Decisions” — a 60%+ response rate signalled how live the topic was. Leaders ranked the processes they rely on by value and by how hard they are to prepare: the highest-value activities (Planning Cycle, GFO, IGM, EPR, Strategic Priority Tracking) overlapped heavily with the hardest (Value Delivery, Vendor Governance, IGM, EPR, WPR) — a clear map of what DASH should simplify first. Three themes stood out: shaky data quality and a pull toward systems of record over spreadsheets; heavy, repetitive manual process; and a call for tighter strategy-to-execution alignment.",
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
    "Financial & portfolio visibility — SPM integration, variance analysis, and third-party & software spend tracking.",
    "Resource & headcount tracking — Workday headcount and Resource 360 third-party visibility.",
    "Performance reporting — executive KPIs, top-project tracking, and a portfolio delivery overview.",
    "Live data connectivity — a direct ADO feed, real-time updates, and core cross-system data linkages.",
    "Simplified experience + in-tool bots — a streamlined executive page with AskMe (KPI definitions) and TalkWithData (deeper analysis) assistants.",
    "One layer above the detail — DASH doesn't replace the deep Power BIs; it sits above them as the single integrated view.",
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
      detail: "Provides clear, trusted insights for strategic decisions.",
    },
    {
      audience: "Data Quality",
      detail: "Enhances the integrity and accuracy of the underlying data.",
    },
  ],

  personas: [
    {
      role: "Delivery Team (Squad / Pod)",
      scope: "Plans and delivers at the atomic team level.",
      need: "To report how effectively, efficiently and on-budget they deliver without the manual PowerPoint and CSV handoffs — DASH captures performance at source through the ADO feed, so effort goes into the work, not re-presenting it.",
    },
    {
      role: "Portfolio Lead",
      scope: "Aggregates team performance for a portfolio.",
      need: "To see dependencies, risks and performance across their teams in one place, and hand a consistent, business-ready view up the chain — instead of re-collating spreadsheets and screenshots every cycle.",
    },
    {
      role: "VP — core customer",
      scope: "Owns a portfolio's investment, delivery, cost, capacity and value.",
      need: "The primary customer. The VP lives the leadership rhythm — GFO, IGM, EPR, WPR — and today loses most time at the 'gather' stage, chasing owners to reconcile conflicting numbers. DASH replaces that with one trusted pane of glass, so more time goes to turning insight into decisions.",
    },
    {
      role: "SVP",
      scope: "Sponsors DASH; oversees Digital Delivery across portfolios.",
      need: "A standardised operational view across the verticals — cross-portfolio finance, delivery and value at a glance, with the Strategy Cockpit proactively flagging where to intervene before quarterly surprises.",
    },
    {
      role: "EVP",
      scope: "Accountable for Technology performance at the top.",
      need: "Trustworthy, high-level signals — cost tied to value, delivery on track — without dropping into the detail, so decisions are backed by data rather than reassembled reports.",
    },
  ],

  roadmap:
    "DASH is delivered in MVP phases, each building on the last — from a single trusted pane of glass, to connected operations and value tracking, to AI-driven foresight. Built in stages with a VP focus group, it keeps evolving on feedback, with efficiency and effectiveness (not solely reporting) as the goal.",

  phases: [
    {
      name: "MVP 1",
      title: "Integrated single pane of glass",
      status: "current",
      summary:
        "Where DASH is today. Fragmented sources are integrated on Palantir Foundry and given business logic through the ontology, then surfaced as one standardised, real-time view across the full reporting chain — team to portfolio to VP to SVP to EVP. It replaces the manual PowerPoint, screenshot and CSV handoffs with a single source of truth.",
      items: [
        "Financial, portfolio, headcount and performance KPIs in one view",
        "Live ADO feed, proven across a credible sample of boards",
        "Simplified executive experience with AskMe & TalkWithData bots and KPI commentary",
      ],
    },
    {
      name: "MVP 2",
      title: "Connected operations, value & smart governance",
      status: "next",
      summary:
        "Extending the pane of glass to operations and value. Operational metrics fill the signal gap between forums, value tracking becomes a single source of truth, and automated triggers move DASH from reporting to proactive governance — with ADO coverage scaled across teams.",
      items: [
        "Operational metrics — SNOW data, MTTR and service health",
        "Value tracking as a single source of truth (SPM + Itonics)",
        "Automated triggers and escalations, plus scaled ADO coverage",
      ],
    },
    {
      name: "MVP 3",
      title: "AI intelligence & decision companion",
      status: "future",
      summary:
        "The longer-term vision. Self-service and predictive analytics, scenario modelling and forecasting, and an AI assistant that becomes a decision-making companion — positioning DASH as Technology's trusted decision engine, driving cultural and organisational change.",
      items: [
        "Self-service and predictive analytics with scenario modelling",
        "AI-powered decision support and forecasting",
        "An intelligent assistant that augments leadership decisions",
      ],
    },
  ],

  soundbites: [
    "Great progress so far – we're clearly heading in the right direction.",
    "A one-stop hub for project and financial insight — exactly what delivery teams have been asking for.",
    "This is simplifying how we work and reducing the manual overhead across teams.",
    "The consolidated view is a game-changer — finally all the key data in one place.",
    "We need a consistent driver of amber / red causes and themes — EPR is the opportunity to look for broader insight.",
    "Where do we include measures on how digital is performing — CICD, ADO use, velocity, ageing of tickets in SNOW?",
    "DASH should support better project controls, not just analytics.",
    "Capturing business case evolution would help track scope, cost and value over time.",
  ],
}

export default dash
