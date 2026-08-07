import type { Project } from "./_types"

/*
  ── Disclosure ───────────────────────────────────────────────────────────────
  This is bp enterprise work. The employer (bp) is named. Specific site IDs,
  analyst names and the exact incident location are still generalised or
  omitted throughout. Screens use synthetic demo data.

  ── Screenshots ─────────────────────────────────────────────────────────────
  Synthetic demo data — all site names, analyst names and figures are
  representative, not real. Screens are in public/fuel-workbench/screens/.
*/

const fuelSafetyWorkbench: Project = {
  id: "fuel-safety-workbench",
  title: "Signal in the Noise",
  subtitle:
    "A fuel-tank leak went undetected for five days — buried in 50,000 rows of noise a year. The job was to make the eleven that matter impossible to miss.",

  role: "Product Designer & Design Engineer at bp — concept, classification UX & front-end build",
  timeline: "2025 → 2026",
  tags: ["Product Design", "Design Engineering", "Detection Tooling", "Enterprise B2B"],

  notice:
    "bp enterprise work. Specific site identifiers, analyst names and the exact incident location are anonymised; all screens use synthetic demo data.",

  projectLink: "https://www.figma.com/board/xQ6oAGTv8sLZxtUkkOzbeE/ZFIR-Exploration?node-id=160-287&t=rZ6ydm2w6MXC15Dq-1",
  projectLinkLabel: "Research & meeting notes ↗",

  coverImage: "/fuel-workbench/cover.jpg",
  coverLabel: "bp · Fuel-Safety Detection Workbench",

  overview: [
    "A team of seven analysts reconciled fuel inventory every morning for ~260 highway fuel sites across the US. Each day they pulled a variance report out of SAP, pasted it into a master Excel workbook, split it into seven analyst sheets, and sent a broadcast email — 'data is ready' — then worked ~1,300 rows apiece by hand, cross-referencing tank readings, an external sensor portal and unstructured email threads.",
    "Across a year that's ~50,000 variance rows. Only about eleven of them are real physical events — a leak, theft, contamination. Everything else is noise: timing swings, loads that will self-post tomorrow, probe glitches, date-boundary shifts. There was no automated way to tell the eleven from the rest. I designed and built the tool that does — a detection-and-action workbench, not another report.",
  ],

  problem: [
    "The entire safety signal lived inside a daily wall of noise. Of ~50,000 variance rows a year, ~11 are genuine physical events; the rest resolve themselves. Seven analysts read ~1,300 rows each per morning looking for the handful that aren't noise — which is exactly the kind of search human attention is worst at.",
    "The cost of that design was concrete: one site's tank leak went undetected for 5.25 days because its physical-loss signature was indistinguishable, to a tired eye scanning a spreadsheet, from the timing swings around it. The failure wasn't a missing number. The number was right there. The system just had no way to make it louder than everything it wasn't.",
  ],

  // The core tension the design had to resolve, plus how I'd validate the one
  // decision that carries real risk (framed as the validation the tool needs,
  // not a study already run).
  discovery: {
    summary:
      "The hard part was never the interface — it was a single, dangerous trade-off: **recall vs. noise reduction** in a safety system. Suppress too aggressively and the filter hides the next leak; suppress too timidly and you've rebuilt the spreadsheet with a login page. A noise filter for a safety signal is only allowed to exist if it can prove it never filters a real event. That proof is the acceptance criterion the whole design stands or falls on:",
    questions: [
      "Recall back-test: run the classification engine against the known historical physical incidents and confirm it surfaces every one. A suppression tool earns the right to hide 85% of rows only by demonstrating 100% recall on the rows that matter. (De-risks the core suppress bet.)",
      "Analyst confirm/override telemetry: every classification is a hypothesis. Which categories do analysts override, and how often? The override rate per rule is the real measure of whether a heuristic is trustworthy or just plausible. (De-risks the rules.)",
      "Triage-time baseline vs. shadow-mode: time the current ~2-hour manual review, then run the tool in parallel for a week. The claim isn't 'faster' in the abstract — it's a measured before/after on the same day's data. (De-risks the impact claim.)",
      "Weekend-path test: the alert that matters most fires when no one is watching. Does an out-of-hours critical alert actually reach a human, or does it fire into a governance gap? (De-risks escalation — see the reflection.)",
    ],
  },

  // The central fork, stated with its rejected branch — the spine of the study.
  approach:
    "The first decision was what NOT to build. bp already ran a Power BI dashboard; a second reporting layer would have been the safe, expected deliverable. I argued the opposite: a detection-and-action tool where every screen ends in a decision, not a chart. The rejected branch — one more dashboard — is exactly the paradigm that let a five-day leak hide, because a dashboard shows you everything and asks nothing of you. The second, riskier decision followed from it: in a safety system, suppress ~85% of rows before an analyst ever sees them. Hiding data in a safety tool is a frightening thing to design, and the only honest justification is that showing everything is the failure mode we already had. The engine doesn't delete the noise — it classifies it, scores its confidence, and keeps a human's one-click override on every call. Value the machine is sure about, suppressed; judgement the machine isn't, surfaced.",

  impact:
    "The workbench was built and demonstrated: SSO-gated, role-scoped queues (analysts see their own sites, site managers see only theirs), live-alert polling, and a rule engine that classifies every variance row into one of eight categories with a confidence score. The piece that shipped end-to-end is the one that proves the thesis — the alert email. What used to be a manual 'data is ready' broadcast, and manual missing-load emails typed by hand, is now generated and sent by the system through a shared mailbox and Microsoft Graph, tested and confirmed received. 'Every screen leads to an action' stopped being a slogan at the point the tool started sending the action itself. Production rollout — and the cross-cloud database link it depends on — is the work still in progress; I'd rather show the working pipeline and the honest deployment state than claim a rollout that isn't live yet.",

  metrics: [
    { value: "11", label: "genuine safety events hidden in ~50,000 variance rows a year", note: "leaks, theft, contamination — everything else is noise" },
    { value: "5.25 days", label: "how long a tank leak stayed invisible in the daily noise", note: "the exact failure the system is built to prevent" },
    { value: "~85%", label: "of rows the engine classifies out of the analyst queue", note: "design target — suppress the noise, surface the signal" },
    { value: "Automated", label: "the alert email that was a manual broadcast is now sent by the system", note: "shared mailbox + Microsoft Graph, tested end-to-end" },
  ],

  reflection: {
    title: "Designing something that's allowed to hide data",
    body: [
      "The decision I'll defend hardest is also the one that could hurt someone if I got it wrong: building a tool whose job is to hide 85% of a safety feed. Everything else — the SSO, the queues, the emails — is craft. That one is a bet, and the only thing that makes it a responsible bet rather than a reckless one is the recall back-test: the tool has no right to suppress a single row until it has proven, against the real historical incidents, that it never suppresses a real one. I'd want that number green before go-live, not after.",
      "I also had to be honest, on the tool's own screens, about where software stops. A broken tank probe sends wrong data at the source — no amount of processing corrects garbage input; the most the tool can do is flag 'no reading received' and ask a human to go look. A leaking tank needs engineering and a regulator, not a notification. And the alert that matters most — the weekend critical — is only worth as much as the on-call ownership behind it: an alert fired to nobody changes nothing. The most useful thing the design does there isn't technical. It makes the gap visible: it logs who was notified, when, and whether anyone answered, and it escalates when they don't. Surfacing an organisational blind spot is a design act too.",
      "This is also the matured version of a lesson I learned the expensive way on an earlier build, where I shipped a tool without owning the metric that defined its success. This time the measurement plan came first: the acceptance criteria, the recall back-test, the shadow-mode triage-time baseline — all specified before a line of the queue was built, not bolted on after it shipped.",
    ],
  },

  personas: [
    {
      role: "Fuel-Inventory Analyst",
      scope: "Reviews ~1,300 variance rows a day across an assigned set of sites.",
      need: "The noise gone. A queue of only the rows that need a human, each with the signal that flagged it and a recommended action — not a spreadsheet to scan.",
    },
    {
      role: "FBT Supervisor / Ops Leader",
      scope: "Owns the team, the escalations, and the audit trail across all sites.",
      need: "Immediate escalation on a suspected physical loss, weekend coverage that actually reaches someone, and a record of who was notified and when — replacing email threads.",
    },
    {
      role: "Site General Manager",
      scope: "Runs a single site; acts on the ground when something's wrong.",
      need: "An unambiguous, actionable alert scoped to their site alone — 'inspect this tank now' — not a report to interpret and not other sites' data.",
    },
  ],

  journeyUrl: "/fuel-workbench/user-journey.html",

  soundbites: [
    "A variance of about 7,000 gallons immediately rings a bell — that could be a missing load.",
    "Large loss then a large gain is a probe. Continuous loss for two or three days? Ninety to ninety-five percent sure it's a real issue.",
  ],

  narrative: [
    {
      era: "Before",
      kicker: "The miss",
      title: "A five-day leak that was never actually invisible",
      status: "past",
      body: [
        "Every morning one analyst logged into SAP, ran the fuel-inventory variance report, exported it to Excel, pasted it into a master workbook of VLOOKUPs for analyst assignment and tolerance thresholds, split it into seven sheets, and emailed the team: data is ready. Then seven people read ~1,300 rows each, cross-referencing tank readings, an external sensor portal and email threads with site managers.",
        "The reconciliation itself is simple accounting: opening stock plus receipts minus sales is your book inventory; book inventory minus the physical midnight tank reading is the day's variance. A variance past a fuel-specific tolerance means investigate. The trouble is that on any given day dozens of rows breach tolerance for reasons that evaporate by tomorrow — a load that posts a day late, a probe that hiccups, a day-boundary sales roll.",
        "So when one site began losing fuel for real, the loss looked, row by row, like all the noise around it. It stayed unread in plain sight for 5.25 days. Nothing was hidden. Nothing was loud.",
      ],
      figures: [
        {
          alt: "Pain points identified in discovery",
          src: "/fuel-workbench/pain-points.png",
          caption: "Pain points surfaced during research — seven structural problems with the existing process",
          span: "full",
          ratio: "16 / 9",
          focus: "top",
        },
      ],
    },
    {
      era: "The bet",
      kicker: "The reframe",
      title: "Not another dashboard",
      status: "current",
      body: [
        "The expected build was a better report — bp already ran a Power BI dashboard, and one more view of the same data would have been the uncontroversial deliverable. I pushed against it. A dashboard is a surface you have to interrogate; it shows everything and asks nothing. That paradigm is precisely what let a real loss hide inside the daily wall of variances.",
        "The reframe was a detection-and-action tool: every screen ends in a decision. A per-analyst queue holds only the rows that need a human. Each row arrives pre-classified, with the specific signal that flagged it and a recommended next step — confirm, override, or escalate — one click away. The measure of the design isn't how much it shows. It's how little.",
        "Which forced the frightening decision: suppress ~85% of rows before anyone sees them. Designing a safety tool that deliberately hides data is uncomfortable, and it should be. The justification is only that the alternative — showing everything — is the failure we started with. The engine never deletes a row; it classifies it, attaches a confidence score, and leaves a human override on every call. Trust is earned by being overridable, not by being certain.",
      ],
    },
    {
      era: "Build",
      kicker: "The rules",
      title: "Encoding an analyst's instinct instead of guessing at a model",
      status: "current",
      body: [
        "The tempting branch was machine learning — the data volume invites it. I chose rules first, for three reasons: they're explainable to the people who have to trust them, they were demonstrable on a deadline, and their logic already existed, fully formed, in the analysts' own heads. Across four working sessions the team narrated the heuristics they apply without thinking — 'a ~7,000-gallon drop rings a bell as a missing load'; 'a big loss then a big gain is a probe, but continuous loss for three days is almost certainly real.' Those sentences became the engine.",
        "Eight signatures separate signal from noise: timing swings and date-boundary reversals get suppressed; a missing load drafts a supplier notification; an offsetting bio/diesel pair pre-fills a transfer entry; a one-or-two-day dip goes on a watchlist; and a loss that persists three days without a load to explain it and without swinging back escalates as a suspected physical loss. A weekend amplifier promotes the two most dangerous categories to critical, because that's when no one is watching.",
        "The trust boundary was deliberate and consistent: the tool pre-fills, it doesn't auto-post. A missing-load email is drafted for one-click send, not sent silently; a transfer entry is prepared for approval, not committed. Augmentation, not automation — the machine does the assembling, a human keeps the authorship.",
      ],
    },
    {
      era: "Shipped",
      kicker: "What's live, what's honest",
      title: "The email stopped being a person's job",
      status: "current",
      body: [
        "The workbench was built and demonstrated: Microsoft SSO, role-based access down to site level, a live-alert queue with polling, user management, and the eight-rule classification engine scoring every row. The part that closed the loop end-to-end is the alerting. The manual 'data is ready' broadcast and the hand-typed missing-load emails are now generated and sent by the system, through a dedicated shared mailbox and Microsoft Graph — built, wired to the alert logic, tested, and confirmed received.",
        "That's the whole thesis made literal. A dashboard would have told an analyst a load was missing and left them to write the email. This tool writes and sends it. The action isn't downstream of the screen; the screen performs it.",
        "What isn't done: production deployment, and the cross-cloud link between the Azure app and the client's AWS-hosted database it depends on — genuinely the hard part, and still in progress. I'd rather show a working pipeline and name the pending infrastructure than dress an unfinished rollout as a finished one.",
      ],
      highlights: [
        "Reframing a reporting request into a detection-and-action tool — refusing the dashboard the failure mode was made of.",
        "Designing a safety system that's allowed to suppress noise, and making that defensible with a 100%-recall back-test as its precondition to ship.",
        "Choosing explainable analyst heuristics over a black-box model, and pre-fill-not-auto-post as the trust boundary throughout.",
        "Shipping the alerting loop end-to-end: the notification the tool detects, it also sends.",
      ],
      figures: [
        {
          alt: "Team Today — supervisor dashboard",
          src: "/fuel-workbench/screens/01-team-today.png",
          caption: "Today — supervisor view: team workload, auto-resolved summary, sites needing attention, month-end status",
        },
        {
          alt: "Analyst personal queue",
          src: "/fuel-workbench/screens/05-analyst-queue.png",
          caption: "My Queue — analyst's assigned sites, attention items, and today's escalations",
        },
        {
          alt: "Site detail — Needs Attention (full queue)",
          src: "/fuel-workbench/screens/02-site-detail-full.png",
          caption: "Site detail: AI-recommended action, SAP / Warren Rogers / CBRD evidence panel, agent activity log",
        },
        {
          alt: "Site detail — critical queue filtered",
          src: "/fuel-workbench/screens/06-site-detail-filtered.png",
          caption: "Filtered to critical + high — same detail view with a scoped sidebar",
        },
        {
          alt: "Auto-Resolved log",
          src: "/fuel-workbench/screens/03-auto-resolved-log.png",
          caption: "Auto-Resolved — auditable log of every machine-classified row with action taken",
        },
        {
          alt: "Performance dashboard",
          src: "/fuel-workbench/screens/04-performance-dashboard.png",
          caption: "Performance — auto-resolution rate, classification accuracy, chronic sites, month-end readiness",
        },
        {
          alt: "ZIFR Assistant — AI chat panel",
          src: "/fuel-workbench/screens/07-zifr-assistant.png",
          caption: "ZIFR Assistant — conversational AI panel for site-level queries and morning briefing",
        },
      ],
    },
  ],

  processTitle: "How the engine tells signal from noise",
  processIntro:
    "Eight rules, elicited from the analysts across four sessions, run against every variance row. Together they decide what to suppress, what to surface, and what to escalate. These five carry the load.",
  process: [
    {
      step: "01",
      title: "Timing swing → suppress",
      detail:
        "A variance that's positive one day and near-equal negative the next, with no physical event to explain either, is a timing artefact. Suppressed from the queue, re-checked after two days in case it persists.",
      tools: ["auto-resolve", "2-day monitor"],
    },
    {
      step: "02",
      title: "Missing load → draft the email",
      detail:
        "A negative variance the size of a single delivery, where the day's posted receipts fall short of the deliveries the tank readings imply, is a load that hasn't posted. The tool flags it and pre-drafts the supplier notification — site, material, date, estimated volume — for one-click send.",
      tools: ["cross-check receipts", "pre-drafted email"],
    },
    {
      step: "03",
      title: "Bio transfer → pre-fill the entry",
      detail:
        "An offsetting negative-on-bio / positive-on-diesel pair at one site on one date, in the configured blend ratio, is a known transfer. The tool pre-fills the transfer entry for approval — but bails out and flags for investigation the moment the two sides stop being proportional.",
      tools: ["blend-ratio check", "pre-fill, not auto-post"],
    },
    {
      step: "04",
      title: "Probe-possible → watchlist, don't cry wolf",
      detail:
        "A one-or-two-day loss with no missing load and no matching sales pattern goes on a watchlist, not an alert. If it swings back within three days it was a probe — reclassify, no action. If it doesn't, it graduates to a suspected physical loss.",
      tools: ["watchlist", "swing-back monitor"],
    },
    {
      step: "05",
      title: "Physical loss → escalate immediately",
      detail:
        "A negative variance that persists three or more days, unexplained by any load, never swinging back, and growing — escalate now. Analyst, supervisor and site manager notified, inspection requested, SLA clock started. On a weekend, this fires as critical to on-call rather than waiting for Monday.",
      tools: ["immediate escalation", "SLA clock", "weekend amplifier"],
    },
  ],
}

export default fuelSafetyWorkbench
