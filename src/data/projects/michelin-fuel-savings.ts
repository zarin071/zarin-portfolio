import type { Project } from "./_types"

/*
  ── Screenshots ────────────────────────────────────────────────────────────
  Drop the real captures into  public/michelin/  and set the matching `src`
  on the figures below (they currently render as labelled placeholders):

    before-claim.*      → the unquantified "Why Choose Michelin" claim
    empty-state.*       → the calculator before any interaction
    tyre-dropdown.*     → the 3-option tyre-type dropdown open
    result-panel.*      → the animated savings reveal (the money shot)
    tooltip.*           → one R&D methodology tooltip open
    mobile.*            → the calculator on a phone
    connected-fleet.*   → the global Connected Fleet Carbon Calculator
*/

const michelinFuelSavings: Project = {
  id: "michelin-fuel-savings-calculator",
  title: "MICHELIN Fuel Savings Calculator",
  subtitle:
    "Turning an unproven marketing claim into a personalized, self-serve ROI tool for fleet operators, and seeding a global Michelin product.",
  role: "UI/UX Designer & Front-End Developer (solo)",
  timeline: "2022 · 2 months",
  tags: ["UX/UI", "Front-End (React)", "B2B", "Conversion"],

  projectLink: "https://b2b.michelin.in/fuel-saving-calculator",
  projectLinkLabel: "Live tool ↗",
  caseStudy: "https://connectedfleet.michelin.com/blog/calculate-co2-emissions/",

  // Michelin brand: a Bibendum animation over the house yellow, with the
  // yellow→blue gradient as the fallback while the video loads / if it can't play.
  cover: "linear-gradient(135deg, #FFF3C4 0%, #FDCB00 42%, #27509B 100%)",
  coverVideo: "/michelin/cover.mp4",
  coverVideoWebm: "/michelin/cover.webm",
  coverVideoPoster: "/michelin/cover-poster.jpg",
  coverLabel: "Fuel Savings Calculator",

  overview:
    "Michelin's brand vision rests on three pillars: People, Profit, Planet. On the B2B side, that vision met a hard commercial reality: Michelin's fuel-efficient truck tyres cost more upfront, and fleet operators are ruthless about total cost. Telling them 'our tyres save fuel' wasn't enough, they needed to see the money. I owned this project end to end as the sole designer and front-end developer, embedded in the B2B marketing team: I designed the UX and UI and built the production React front-end on Michelin's enterprise design system, with the savings logic and R&D-grounded data served through the site's CMS integration.",

  problem:
    "Michelin India could claim fuel savings, but it couldn't prove them to an individual fleet. Before this project, the entire argument lived as unquantified marketing copy on the 'Why Choose Michelin' page, statements like 'our tyres save fuel,' with no way for a fleet owner to see what that meant for their operation. No calculator, no tool, no personalized number. Meanwhile the people the business needed to convince, fleet owners, fleet managers, and the Michelin sales reps pitching to them, were all circling the same doubt: how can a tyre actually lower my fuel bills and cut emissions, and is it worth the premium? The job was to turn a generic brand claim into a concrete, personal, believable figure, and to do it in a way that opened a sales conversation rather than ending one.",

  // The core tension + the research plan that would validate each axis, surfaced
  // under the "Discovery" section (framed as planned research, not a run study).
  discovery: {
    summary:
      "The real difficulty wasn't visual, it was a three-way tension that pulled against itself: Trust vs. Friction vs. Conversion, all on an enterprise design system with no motion vocabulary. Every decision had to serve all three at once, lowering friction couldn't cost accuracy; capturing a lead couldn't cost trust. On a solo, two-month build the design bets were made from that tension and Michelin's R&D data. Given more runway, here's the research I'd run to validate each axis: qualitative discovery with the people on both sides of the sale, evaluative testing of the riskiest design decisions, and in-market analytics:",
    questions: [
      "Fleet owner & fleet-manager interviews: how they actually weigh tyre cost against the upfront premium, what evidence they'd trust from a supplier, and which inputs they know off the top of their head versus have to look up. (De-risks Trust + Friction.)",
      "Sales-rep interviews and field ride-alongs: the reps pitching the premium day to day: the objections they hit, and what a tool would need to hand them a warm, qualified lead rather than a cold form-fill. (De-risks Conversion + Trust.)",
      "Concept testing on the four-outcome framing: whether translating '43 tonnes of CO₂' into '1,968 trees' beside the ₹ figure genuinely makes the abstract tangible and believable, and which of the four outcomes fleets weight most.",
      "Task-based usability testing of the tyre-type auto-populate: can a non-technical operator reach an accurate result from one familiar choice, without ever knowing a tyre dimension? (De-risks Friction vs. accuracy.)",
      "Trust & credibility testing of the transparency layer: do the R&D-methodology tooltips, the stated 90,000 km/year assumption and visible disclaimers raise believability over a black-box number?",
      "A value-first vs. gated-form A/B, does revealing the full savings before asking for the lead beat a form-first gate on both completion rate and lead quality? (De-risks Conversion.)",
      "Post-launch funnel analytics: per-input drop-off, slider engagement, 'View Savings' rate, 'Yes, I am Interested' conversion and mobile-vs-desktop behaviour, with the underlying figures validated against Michelin R&D data.",
    ],
  },

  approach:
    "I designed a single-screen, side-by-side experience: inputs on the left, a live results panel on the right. As the user adjusts their fleet details, the savings respond, culminating in an animated reveal when they hit 'View Savings.' The flow opens with one simple, non-technical choice: what type of tyre do you run: bias, tube-type radial, or tubeless radial? That single selection auto-populates the tyre dimensions, so the user never has to know or type a technical spec. That decision resolved the friction-vs-accuracy tension: the system does the technical work, the user just makes a choice they already know the answer to. From there the inputs stay in the fleet operator's own language, current tyre vs. the Michelin tyre, annual tyres purchased (slider), current fuel price (slider), over a stated, visible assumption: 90,000 kms/year.",

  impact:
    "As Michelin India's first market-facing fuel-savings calculator, the tool validated a hypothesis the business had never tested: that fleet decision-makers would engage with a self-serve tool converting a vague brand claim into a personalized rupee-and-CO₂ figure, and that doing so was an effective way to open sales conversations. That validated concept didn't stay in India. The same core model, a self-serve, R&D-backed fleet calculator that leads with value before capturing intent, went on to inform Michelin's global Connected Fleet Carbon Calculator, which scaled the idea into a multi-vehicle-group emissions tool under the worldwide Connected Fleet brand. For a solo, two-month build inside a regional marketing team, watching the concept carry through to a global Michelin product is the outcome I'm proudest of.",

  // Factual, non-fabricated metrics drawn straight from the project. Swap or add
  // real engagement KPIs (completion rate, leads, conversion) once analytics allow.
  metrics: [
    { value: "1st", label: "market-facing fuel-savings calculator at Michelin India", note: "a hypothesis the business had never tested" },
    { value: "2 mo", label: "solo build: UX, UI and the production React front-end" },
    { value: "4", label: "outcomes shown before any lead is asked for", note: "fuel, cost, CO₂ and trees" },
    { value: "Global", label: "concept scaled into Michelin's Connected Fleet Carbon Calculator" },
  ],

  reflection: {
    title: "Learning to ask why, not just how",
    body: [
      "I'll be honest about how I worked on this. I came in as a designer who did what was asked: I took the claim, the inputs and the assumptions the business handed me, and I built a clean, convincing tool around them.",
      "What I didn't do enough of was ask why. Why this input and not another, why this assumption, why a fleet owner would trust this exact number. I treated those as settled when some of them were mine to question.",
      "The biggest thing I carry forward is that asking why is part of the craft, not a threat to it. The strongest version of a product, and of me as a designer, comes from interrogating the brief, not only executing it well.",
    ],
  },

  offers: [
    "One non-technical opening choice, bias / tube-type radial / tubeless radial, that auto-populates the tyre dimensions, so accuracy never costs friction.",
    "Inputs in the fleet operator's own language: their current tyre v/s the Michelin tyre, annual tyres purchased (slider), and current fuel price (slider).",
    "A live results panel that responds as inputs change, culminating in an animated savings reveal.",
    "Four outcomes, not one number: fuel saved (litres), cost saved (₹), CO₂ reduced (tonnes), and the equivalent trees required to absorb that CO₂.",
    "Radical transparency: an info tooltip on every metric exposing the R&D-backed methodology, a visibly stated running assumption (90,000 kms/year), and open disclaimers.",
    "A value-first close: the full savings are shown before anything is asked, then a single 'Yes, I am Interested' CTA earns the lead instead of extracting it.",
  ],

  benefits: [
    {
      audience: "Removing friction",
      detail:
        "The tyre-type choice auto-populates the technical dimensions: the user makes a decision they already know the answer to, and the system handles the spec. This was the key decision that resolved the friction-vs-accuracy tension.",
    },
    {
      audience: "Making the abstract tangible",
      detail:
        "'90 tonnes of CO₂' is a number nobody can feel. Translating it into 4,132 trees turns the Planet pillar human, sitting right beside the ₹38 lakhs that speaks to Profit. People and Planet, made concrete, side by side.",
    },
    {
      audience: "Building trust",
      detail:
        "Credibility rests on brand + R&D data + open assumptions, not a black-box figure. Every metric carries a methodology tooltip, the running assumption is stated openly, and disclaimers stay visible.",
    },
    {
      audience: "Earning the lead",
      detail:
        "The experience shows the full savings first, then asks 'Want to know how you can save more and contribute to the environment?' Value is delivered before anything is requested, which is how the tool captures intent without feeling like a gate.",
    },
  ],

  personas: [
    {
      role: "Fleet Owner",
      scope: "Owns the vehicles and the P&L; ruthless about total cost.",
      need: "A personal, believable number: what the premium actually returns in rupees and litres for their operation, not a generic brand claim.",
    },
    {
      role: "Fleet Manager",
      scope: "Runs day-to-day operations and tyre procurement.",
      need: "To reach a trustworthy result without being a tyre engineer: inputs in operational language, no technical specs to look up.",
    },
    {
      role: "Michelin Sales Rep",
      scope: "Pitches fuel-efficient tyres against a cheaper upfront price.",
      need: "A concrete, R&D-backed figure that opens the conversation: a self-serve tool that hands them a warm, qualified lead.",
    },
  ],

  soundbites: [
    "How can a tyre actually lower my fuel bills and cut emissions, and is it worth the premium?",
    "Want to know how you can save more and contribute to the environment? Yes, I am Interested.",
  ],

  narrative: [
    {
      era: "Before",
      kicker: "The claim",
      title: "A vague brand promise with nothing behind it",
      status: "past",
      body: [
        "The entire fuel-savings argument lived as unquantified copy on the 'Why Choose Michelin' page, 'our tyres save fuel,' with no way for a fleet owner to see what that meant for their operation. There was no calculator, no tool, no personalized number. Nothing.",
        "That's the gap this project set out to close: turn a generic claim into a concrete, personal, believable figure, and do it in a way that opened a sales conversation rather than ending one.",
      ],
      figures: [
        {
          alt: "The Why Choose MICHELIN? page: fuel savings stated only as prose, with no calculator or number",
          placeholder: "Before, the unquantified claim",
          src: "/michelin/before-claim.webp",
          span: "full",
          ratio: "16 / 9",
          caption: "The 'before' state: the Why Choose MICHELIN? page, where fuel savings lived only as prose (“a unique means of achieving new fuel savings”), with no number a fleet could act on.",
        },
      ],
    },
    {
      era: "Build",
      kicker: "The calculator",
      title: "One screen, four outcomes, a value-first close",
      status: "current",
      body: [
        "A single-screen, side-by-side experience: inputs on the left, a live results panel on the right. The flow opens with one non-technical choice: bias, tube-type radial, or tubeless radial, that auto-populates the tyre dimensions, so the user never types a spec they don't know.",
        "The savings panel deliberately shows four outcomes, not one: fuel saved, cost saved in ₹, CO₂ reduced in tonnes, and the equivalent trees required to absorb it. Every metric carries a tooltip exposing the R&D methodology, the running assumption is stated openly, and the full result is shown before a single 'Yes, I am Interested' CTA earns the lead.",
        "Engineering the reveal meant introducing motion on top of an enterprise design system built for fixed, static imagery, bringing the most important moment to life without breaking the system's visual language.",
      ],
      figures: [
        {
          alt: "The calculator's empty input state before any interaction",
          placeholder: "Empty input state",
          src: "/michelin/empty-state.webp",
          span: "half",
          ratio: "16 / 10",
          caption: "The empty state: tyre-type dropdown, the 'v/s Michelin Tyre' split, and sliders.",
        },
        {
          alt: "The tyre-type dropdown open, showing bias, tube-type radial and tubeless radial",
          placeholder: "Tyre-type dropdown open",
          src: "/michelin/tyre-dropdown.webp",
          span: "half",
          ratio: "16 / 10",
          caption: "One simple choice auto-populates the technical dimensions, the strongest friction-reduction move.",
        },
        {
          alt: "The animated savings result panel: fuel, cost, CO2 and trees",
          placeholder: "Result panel, the savings reveal",
          src: "/michelin/result-panel.webp",
          span: "full",
          ratio: "16 / 9",
          caption: "The reveal: four outcomes side by side (33,823 litres · ₹38 lakhs · 90 tonnes CO₂ · 4,132 trees), translating carbon into trees and rupees into something a fleet can feel.",
        },
        {
          alt: "A close-up of one info tooltip exposing the R&D-backed methodology",
          placeholder: "Methodology tooltip",
          src: "/michelin/tooltip.webp",
          span: "half",
          ratio: "4 / 3",
          caption: "Radical transparency, every metric exposes its R&D-backed methodology.",
        },
        {
          alt: "The calculator on a mobile device",
          placeholder: "Mobile view",
          src: "/michelin/mobile.webp",
          span: "half",
          ratio: "4 / 3",
          focus: "top",
          caption: "Built mobile-first for an India-first, mobile-first audience.",
        },
      ],
    },
    {
      era: "After",
      kicker: "Scaled globally",
      title: "From a regional experiment to a worldwide Michelin product",
      status: "future",
      body: [
        "The validated India concept, a self-serve, R&D-backed fleet calculator that leads with value before capturing intent, went on to inform Michelin's global Connected Fleet Carbon Calculator, scaling the idea into a multi-vehicle-group emissions tool under the worldwide Connected Fleet brand.",
      ],
      figures: [
        {
          alt: "The global Michelin Connected Fleet Carbon Calculator",
          placeholder: "Connected Fleet Carbon Calculator",
          src: "/michelin/connected-fleet.webp",
          span: "full",
          ratio: "16 / 9",
          caption: "The global tool the India concept seeded, the Connected Fleet Carbon Calculator.",
        },
      ],
      highlights: [
        "Designing under a real business tension: trust, friction and conversion working against each other, and resolving it through interaction design rather than compromise.",
        "Working within an enterprise design system while extending it, adding motion where none existed without breaking its language.",
        "The design-engineer advantage: owning both the UX decisions and the React build meant no translation loss between intent and implementation.",
      ],
    },
  ],
}

export default michelinFuelSavings
