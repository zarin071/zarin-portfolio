import type { PlaygroundExperiment } from "./_types"

const analytics: PlaygroundExperiment = {
  id: "analytics",
  title: "AI Analytics Agent Platform",
  description:
    "A production-ready, portable Mixpanel-class analytics platform with a built-in AI agent. Copy into any project, edit one config file, and funnels, retention, cohorts, anomaly detection, and natural-language insights work automatically.",
  tag: "Platform",
  preview: "Full analytics stack + AI, in one repo.",
  password: process.env.NEXT_PUBLIC_WORK_PASSWORD ?? "",
}

export default analytics
