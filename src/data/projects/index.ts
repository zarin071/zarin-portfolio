/*
  ═══════════════════════════════════════════════════════════════════════════
  WORK GRID ORDER
  ───────────────
  The order here controls the order on the /work grid.
  The entry with `featured: true` renders full-width at the top.

  To add a new case study:
    1. Create  src/data/projects/my-new-project.ts  (copy any existing file)
    2. Import it below
    3. Add it to projects[] in the position you want it to appear
  ═══════════════════════════════════════════════════════════════════════════
*/

export type { Project, Benefit } from "./_types"

import dash from "./dash"
import aiDealerBooking from "./ai-dealer-booking"
import fleetCo2Calculator from "./fleet-co2-calculator"
import packtDesignSystem from "./packt-design-system"
export { archivedProjects } from "./_archived"

export const projects = [
  aiDealerBooking,   // featured: true  — full-width hero card
  dash,
  fleetCo2Calculator,
  packtDesignSystem,
]
