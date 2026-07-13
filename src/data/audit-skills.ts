export interface AuditSkill {
  id: string
  name: string
  description: string
  type: "daily" | "quarterly"
  file: string
}

export const auditSkills: AuditSkill[] = [
  {
    id: "design-critique-partner",
    name: "Design Critique Partner",
    description: "Prioritized senior critique: 5 issues max, ranked by impact. Run on any design shared for feedback.",
    type: "daily",
    file: "design-critique-partner.md",
  },
  {
    id: "component-api-designer",
    name: "Component API Designer",
    description: "Props, variants, slots, states — designed before build. Audit mode for existing components.",
    type: "daily",
    file: "component-api-designer.md",
  },
  {
    id: "token-architect",
    name: "Token Architect",
    description: "3-tier token architecture, naming, Figma→code pipeline. Audit mode for hardcoded values & mode gaps.",
    type: "daily",
    file: "token-architect.md",
  },
  {
    id: "handoff-spec-generator",
    name: "Handoff Spec Generator",
    description: "Complete dev specs + design–code parity verification (Code Connect, prop alignment). Run per handoff.",
    type: "daily",
    file: "handoff-spec-generator.md",
  },
  {
    id: "accessibility-auditor",
    name: "Accessibility Auditor",
    description: "WCAG 2.2 AA audit — contrast math, the new 2.2 criteria, color token coverage, cited criteria per failure.",
    type: "daily",
    file: "accessibility-auditor.md",
  },
  {
    id: "design-system-documentarian",
    name: "Design System Documentarian",
    description: "Component docs with when-NOT-to-use guidance. Doc coverage audit with tier scoring.",
    type: "daily",
    file: "design-system-documentarian.md",
  },
  {
    id: "ux-copy-reviewer",
    name: "UX Copy Reviewer",
    description: "Buttons, errors, empty states — 3 options per string with a recommendation. Run per copy task.",
    type: "daily",
    file: "ux-copy-reviewer.md",
  },
  {
    id: "research-synthesizer",
    name: "Research Synthesizer",
    description: "Transcripts and tickets → evidence-graded insights (3+ sources or it's labeled an anecdote).",
    type: "daily",
    file: "research-synthesizer.md",
  },
  {
    id: "stakeholder-presentation-builder",
    name: "Stakeholder Presentation Builder",
    description: "Design rationale → the decision narrative executives fund. Run per review or pitch.",
    type: "daily",
    file: "stakeholder-presentation-builder.md",
  },
  {
    id: "governance-health",
    name: "Governance Health Audit",
    description: "Adoption metrics, debt ratios, versioning, contribution process — scored /100. Run quarterly.",
    type: "quarterly",
    file: "governance-health.md",
  },
  {
    id: "pattern-consistency",
    name: "Pattern Consistency Audit",
    description: "Cross-component interaction conflicts, anti-patterns, duplicate components — scored /100. Run quarterly.",
    type: "quarterly",
    file: "pattern-consistency.md",
  },
]
