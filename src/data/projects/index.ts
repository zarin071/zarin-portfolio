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

export type { Project, Benefit, Persona, Phase, Discovery, Chapter, ChapterDoc, Figure, ProcessStep, Metric, Reflection } from "./_types"

// import dash from "./dash"  // hidden — restore when ready
// import aiDealerBooking from "./ai-dealer-booking"   // hidden — case study in progress
// import fleetCo2Calculator from "./fleet-co2-calculator"  // hidden — case study in progress
import michelinFuelSavings from "./michelin-fuel-savings"
import packtDesignSystem from "./packt-design-system"
export { archivedProjects } from "./_archived"

export const projects = [
  // dash,  // restore when ready
  // aiDealerBooking,   // restore when case study is ready
  // fleetCo2Calculator,  // restore when case study is ready
  michelinFuelSavings,
  packtDesignSystem,
]
