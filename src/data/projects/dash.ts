import type { Project } from "./_types"

const dash: Project = {
  id: "dash-digital-analytics-hub",
  title: "DASH, Digital Analytics Strategy Hub",
  subtitle:
    "A single, trusted pane of glass for bp's Digital & Technology performance, from the atomic team to the VP",
  role: "Product Designer",
  timeline: "2025",
  tags: ["Product Design", "Data Analytics", "Enterprise", "AI/ML"],
  password: process.env.NEXT_PUBLIC_WORK_PASSWORD ?? "",

  problem:
    "Every reporting cycle, a Digital VP at bp loses hours to fragmented, manual data. The performance rhythm: GFO, IGM, EPR, WPR: demands that VPs Orient, Gather, Interpret, Decide, and Act. But stage 2 (Gather) is where it breaks down: 30+ ERP instances, conflicting numbers, spreadsheets reassembled by hand, and actions that require leaving for separate tools. Outputs are data-heavy but insight-light. The cost is low trust, wasted effort, and decisions made too late.",

  approach:
    "Designed DASH as a four-layer stack: a data foundation on Palantir Foundry, a metrics layer computing cycle time and delivery health, a synthesis layer surfacing the 'why' behind amber/red, and the Single Pane of Glass that VPs actually open. Built collaboratively with a VP focus group and delivery teams, not big-bang, but sequenced by readiness. The design standard was set above Palantir's native interface from day one: 9 of 9 exec metrics readable at a glance versus 2 of 9 out of the box.",

  impact:
    "20 of 21 stakeholder requirements delivered in KPI widget v2. 9 of 9 exec metrics readable at a glance, with no manual calculation. 4 domains: Delivery, Money, Operations and People, designed directly from VP input. Built once on bp's Foundry data layer, reusable across portfolios. For the first time, DASH has active leadership mandate behind it, the reason every prior bp dashboard technically worked but still died.",

  notice:
    "This case study documents an MVP and a service design pitch, not a fully shipped product. It highlights the user research, VP discovery, and service design thinking that shaped it. The data foundation is in active build; the design vision is what this work captures.",

  cover: "linear-gradient(135deg, #E8F4FD 0%, #B8D9F0 45%, #2E7AB8 100%)",
  coverLabel: "Digital Analytics",
  featured: false,

  // ── Rich sections ────────────────────────────────────────────────────────

  overview:
    "DASH is the Single Pane of Glass for bp's Digital & Technology organisation, one trusted view that gives VPs everything they need to manage a portfolio without leaving the tool. Built on Palantir Foundry, it consolidates Delivery, Money, Operations and People into a single governed surface, replacing the fragmented, manual reporting cycle that costs Digital VPs hours every week. It doesn't replace the deep Power BIs and detailed tooling teams rely on, it sits one layer above them, turning data into the insight a VP needs to decide and act.",

  origin: [
    "DASH started as a VP's conviction that the digital delivery landscape deserved a genuinely better kind of understanding. Not just financial performance, but performance right down to the atomic team level. A squad, a pod. The vision was a product that would let leaders see the high-level health of every project and initiative happening across the business, and then drill to the root cause of how that performance was actually achieved at the team level. A product-led view on how work gets tracked and measured.",
    "Getting there meant rethinking how reporting works from the ground up. Across every vertical in Digital Delivery, team performance, how effectively, efficiently, and on-budget work gets done, was reported through entirely manual handoffs. PowerPoint decks. Screenshots of multiple tools. CSV files. Spreadsheets. These were collated by product managers and tech leads, handed to portfolio leads, aggregated again for the VP, then passed up to the SVP. Every business did it slightly differently. There was no standardised operational view, which meant enormous time spent assembling reports, and accuracy that wasn't always a true reflection of how the work had actually been done.",
    "The VP's idea was to replace all of that. To capture performance at source, integrate the tools, and surface everything in one singular view, so that each leader could understand how things were really going within their area, without waiting for the next round of manual handoffs. That became DASH.",
    "We'd ingested the data, we had multiple data sets that we felt are relevant for the reporting needs from the bottom personas of teams up to portfolio managers, portfolio managers to VPs and VPs to SVPs. And fundamentally, SVPs have been able to report specific metrics to the EVP, who has also been using a tool. So it's a full end-to-end tool, essentially. That's where the value is, the transparency in the 360 view of how work gets done. So we've aggregated data. We've got multiple data sets required for reporting in this tool now.",
  ],

  discovery: {
    summary:
      "Before a line of DASH was designed, we ran the Digital VP Survey - Understanding Performance & Making Decisions with VPs and the leadership team: a 60%+ response rate, which told us the topic mattered. The survey asked leaders to rank every major business process by value and by how hard it was to prepare insights from. That gap: high value, hard to prepare, became the design target. The Planning Cycle and GFO ranked highest for value. Value Delivery, Vendor Governance and EPR ranked hardest to prepare. VPs told us they wanted data from systems of record, not spreadsheets. They wanted to trust what they were reading, and they mostly couldn't. They wanted governance that felt purposeful, not bureaucratic. They wanted to delegate and escalate, not be buried in detail. And looking forward, they wanted automated reporting, clearer architecture, and far less time spent reconciling data. Those answers shaped every domain priority in DASH.",
    questions: [
      "Priority ranking: which business processes (IGM, GFO, EPR, WPR, Resource Management, Value Delivery) drive the most value for your role, and which are hardest to prepare insights from?",
      "Strategic decisions & alignment: what insights drove your last call between competing initiatives, and how did you align your leadership team?",
      "Day-to-day leadership & visibility, how do you stay close enough to progress without getting pulled into all the detail?",
      "Tools, information & resistance: where do you go first for quick clarity, and what stops those sources being truly reliable or adopted by teams?",
      "People-first leadership: what frustrations do you hear most from your teams, and how do you act on that feedback to ensure they feel heard?",
      "Looking forward: if 'perfect' existed, what would staying connected to strategy execution look like, especially in freeing you to focus on the bigger strategic stakes?",
      "Repetition & decision-making efficiency, which parts of your decision-making feel repetitive or manual today: the things you wish could just happen, or be prepared for you?",
    ],
  },

  offers: [
    "Financial & portfolio visibility: SPM integration, variance analysis, and third-party & software spend tracking.",
    "Resource & headcount tracking, Workday headcount and Resource 360 third-party visibility.",
    "Performance reporting: executive KPIs, top-project tracking, and a portfolio delivery overview.",
    "Live data connectivity: a direct ADO feed, real-time updates, and core cross-system data linkages.",
    "Simplified experience + in-tool bots, a streamlined executive page with AskMe (KPI definitions) and TalkWithData (deeper analysis) assistants.",
    "One layer above the detail, DASH doesn't replace the deep Power BIs; it sits above them as the single integrated view.",
  ],

  benefits: [
    {
      audience: "Strategy Cockpit",
      detail:
        "A comprehensive view of critical performance measures by team, with proactive alerting to inform teams and leaders when intervention or escalation may be required, cutting late surprises that derail quarterly outcomes.",
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
      need: "To report how effectively, efficiently and on-budget they deliver without the manual PowerPoint and CSV handoffs: DASH captures performance at source through the ADO feed, so effort goes into the work, not re-presenting it.",
    },
    {
      role: "Portfolio Lead",
      scope: "Aggregates team performance for a portfolio.",
      need: "To see dependencies, risks and performance across their teams in one place, and hand a consistent, business-ready view up the chain, instead of re-collating spreadsheets and screenshots every cycle.",
    },
    {
      role: "VP, core customer",
      scope: "Owns a portfolio's investment, delivery, cost, capacity and value.",
      need: "The primary customer. The VP lives the leadership rhythm: GFO, IGM, EPR, WPR, and today loses most time at the 'gather' stage, chasing owners to reconcile conflicting numbers. DASH replaces that with one trusted pane of glass, so more time goes to turning insight into decisions.",
    },
    {
      role: "SVP",
      scope: "Sponsors DASH; oversees Digital Delivery across portfolios.",
      need: "A standardised operational view across the verticals: cross-portfolio finance, delivery and value at a glance, with the Strategy Cockpit proactively flagging where to intervene before quarterly surprises.",
    },
    {
      role: "EVP",
      scope: "Accountable for Technology performance at the top.",
      need: "Trustworthy, high-level signals: cost tied to value, delivery on track, without dropping into the detail, so decisions are backed by data rather than reassembled reports.",
    },
  ],

  roadmap:
    "DASH is delivered in MVP phases, each building on the last: from a single trusted pane of glass, to connected operations and value tracking, to AI-driven foresight. Built in stages with a VP focus group, it keeps evolving on feedback, with efficiency and effectiveness (not solely reporting) as the goal.",

  phases: [
    {
      name: "MVP 1",
      title: "Integrated single pane of glass",
      status: "current",
      summary:
        "Where DASH is today. Fragmented sources are integrated on Palantir Foundry and given business logic through the ontology, then surfaced as one standardised, real-time view across the full reporting chain, team to portfolio to VP to SVP to EVP. It replaces the manual PowerPoint, screenshot and CSV handoffs with a single source of truth.",
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
        "Extending the pane of glass to operations and value. Operational metrics fill the signal gap between forums, value tracking becomes a single source of truth, and automated triggers move DASH from reporting to proactive governance, with ADO coverage scaled across teams.",
      items: [
        "Operational metrics: SNOW data, MTTR and service health",
        "Value tracking as a single source of truth (SPM + Itonics)",
        "Automated triggers and escalations, plus scaled ADO coverage",
      ],
    },
    {
      name: "MVP 3",
      title: "AI intelligence & decision companion",
      status: "future",
      summary:
        "The longer-term vision. Self-service and predictive analytics, scenario modelling and forecasting, and an AI assistant that becomes a decision-making companion: positioning DASH as Technology's trusted decision engine, driving cultural and organisational change.",
      items: [
        "Self-service and predictive analytics with scenario modelling",
        "AI-powered decision support and forecasting",
        "An intelligent assistant that augments leadership decisions",
      ],
    },
  ],

  soundbites: [
    "Great progress so far - we're clearly heading in the right direction.",
    "A one-stop hub for project and financial insight, exactly what delivery teams have been asking for.",
    "This is simplifying how we work and reducing the manual overhead across teams.",
    "The consolidated view is a game-changer, finally all the key data in one place.",
    "We need a consistent driver of amber / red causes and themes, EPR is the opportunity to look for broader insight.",
    "Where do we include measures on how digital is performing: CICD, ADO use, velocity, ageing of tickets in SNOW?",
    "DASH should support better project controls, not just analytics.",
    "Capturing business case evolution would help track scope, cost and value over time.",
  ],
}

export default dash
