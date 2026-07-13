/*
  ═══════════════════════════════════════════════════════════════════════════
  PLAYGROUND DATA TYPES

  To add a new experiment:
    1. Create  src/data/playground/my-experiment.ts  (copy any existing file)
    2. Import it below in index.ts
    3. Add it to experiments[] in the position you want it to appear
  ═══════════════════════════════════════════════════════════════════════════
*/

export interface PlaygroundExperiment {
  id: string
  title: string
  description: string
  tag: string
  preview: string
  /* Optional client-side access password. When set, the experiment's gated
     content offers a "Have password?" unlock alongside "Get access".
     ⚠️ Ships in the bundle — a casual deterrent, not real security. */
  password?: string
}
