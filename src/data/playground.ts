export interface PlaygroundExperiment {
  id: string
  title: string
  description: string
  tag: string
  preview: string
}

export const experiments: PlaygroundExperiment[] = [
  {
    id: "birthdate",
    title: "The Day You Arrived",
    description:
      "Enter your birthdate and travel back to the exact day you joined the world — the #1 song, weather, world events, leaders, your zodiac and more.",
    tag: "Interactive",
    preview: "Your birth day — reimagined.",
  },
  {
    id: "analytics",
    title: "AI Analytics Agent Platform",
    description:
      "A production-ready, portable Mixpanel-class analytics platform with a built-in AI agent. Copy into any project, edit one config file, and funnels, retention, cohorts, anomaly detection, and natural-language insights work automatically.",
    tag: "Platform",
    preview: "Full analytics stack + AI, in one repo.",
  },
  {
    id: "audit",
    title: "Design System Audit Toolkit",
    description:
      "11 AI skills that run your design system like it has a full-time ops lead. 9 daily skills that prevent design debt, 2 quarterly audits that score system health — so you can put a number in front of leadership.",
    tag: "AI Skills",
    preview: "11 AI skills for design system ops.",
  },
]
