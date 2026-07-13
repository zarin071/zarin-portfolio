/*
  ═══════════════════════════════════════════════════════════════════════════
  PLAYGROUND ORDER
  ────────────────
  The order here controls the order on the /playground page and home teaser.

  To add a new experiment:
    1. Create  src/data/playground/my-experiment.ts  (copy any existing file)
    2. Import it below
    3. Add it to experiments[] in the position you want it to appear
  ═══════════════════════════════════════════════════════════════════════════
*/

export type { PlaygroundExperiment } from "./_types"

import birthdate from "./birthdate"
import analytics from "./analytics"
import audit from "./audit"

export const experiments = [
  birthdate,
  analytics,
  audit,
]
