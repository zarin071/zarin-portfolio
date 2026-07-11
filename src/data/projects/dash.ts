import type { Project } from "./_types"

const dash: Project = {
  id: "dash-digital-analytics-hub",
  title: "DASH — Digital Analytics Strategy Hub",
  subtitle: "A central hub giving bp delivery teams real-time control over performance",
  role: "Product Designer",
  timeline: "2025 — Present",
  tags: ["Product Design", "Data Analytics", "Enterprise", "AI/ML"],

  problem:
    "bp's delivery teams lacked a central, real-time view of performance. Critical data was scattered across multiple sources and detailed Power BIs, making it slow to manage budgets, headcount, and delivery status — and hard to spot when projects were heading off-track before late surprises derailed quarterly outcomes.",

  approach:
    "Designed DASH as a single integrated hub, developed collaboratively with a multitude of delivery teams and grounded in customer feedback gathered before development began. Consolidated finance, headcount, project delivery status, and TRM reporting into one place, powered by Palantir Foundry for robust data integration and advanced analytics — with a Strategy Cockpit that proactively alerts teams and leaders when intervention or escalation may be required.",

  impact:
    "Gave delivery teams and leadership one real-time hub for financial, headcount, and delivery insight — reducing duplication and manual reporting effort, increasing decision speed, and improving the integrity of the underlying data across products. Positioned as a driver of cultural and organisational change, not just reporting.",

  cover: "linear-gradient(135deg, #E8F4FD 0%, #B8D9F0 45%, #2E7AB8 100%)",
  coverLabel: "Digital Analytics",
  featured: false,

  // Confidential client work — gate the detail page behind a password.
  // Change or remove this value to control access (see _types.ts).
  password: "bp-dash-2025",

  // ── Rich sections ────────────────────────────────────────────────────────

  overview:
    "DASH is more than a dashboard — it's a tool designed to transform the way bp works. Built from team feedback, it provides a central hub for delivery teams to control performance with greater visibility and control. By consolidating data from multiple sources into one location, DASH enables faster, smarter decision making. Powered by Palantir Foundry for robust data integration and advanced analytics, it's geared towards ML/AI developments — supporting bp's digital transformation through better resource optimisation, financial control, and real-time value delivery. Importantly, DASH doesn't replace the detailed Power BIs teams rely on for greater depth; it sits above them as the one-stop, integrated view.",

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

  soundbites: [
    "Great progress so far – we're clearly heading in the right direction.",
    "A one-stop hub for project and financial insight — exactly what delivery teams have been asking for.",
    "This is simplifying how we work and reducing the manual overhead across teams.",
    "The consolidated view is a game-changer — finally all the key data in one place.",
    "DASH should support better project controls, not just analytics.",
    "Capturing business case evolution would help track scope, cost and value over time.",
  ],

  roadmap:
    "Upcoming features include full investment planning integration, enhanced ML automations, AI learning insights, and improved live value realisation tracking. DASH will continue to evolve based on team feedback — with efficiency and effectiveness, not solely reporting, as the goal.",
}

export default dash
