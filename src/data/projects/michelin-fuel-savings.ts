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
    "Turning an unproven marketing claim into a personalized, self-serve ROI tool for fleet operators — a model that later surfaced in Michelin's global fleet product.",
  role: "UI/UX Designer & Front-End Developer",
  timeline: "2022",
  tags: ["UX/UI", "Front-End (React)", "B2B", "Conversion"],

  projectLink: "https://b2b.michelin.in/fuel-saving-calculator",
  projectLinkLabel: "Live tool ↗",

  // Michelin brand: a Bibendum animation over the house yellow, with the
  // yellow→blue gradient as the fallback while the video loads / if it can't play.
  cover: "linear-gradient(135deg, #FFF3C4 0%, #FDCB00 42%, #27509B 100%)",
  coverVideo: "/michelin/cover.mp4",
  coverVideoWebm: "/michelin/cover.webm",
  coverVideoPoster: "/michelin/cover-poster.jpg",
  coverLabel: "Fuel Savings Calculator",

  overview:
    "Michelin's brand vision rests on three pillars: People, Profit, Planet. On the B2B side, that vision met a hard commercial reality: Michelin's fuel-efficient truck tyres cost more upfront, and fleet operators are ruthless about total cost. Telling them 'our tyres save fuel' wasn't enough, they needed to see the money. I owned the design end to end as the sole designer, embedded in the B2B marketing team, and built the production React front-end myself — collaborating with Michelin's back-end team, who served the savings logic and R&D-grounded data through the site's CMS integration. The project ran with direct sponsorship: I worked with the Michelin India head on it, because it served two audiences at once. For fleet dealers and fleet managers — Michelin's biggest B2B customers — it turned an abstract premium into a number they could act on, and showed them what they were contributing environmentally. For leadership, it made the People/Profit/Planet vision measurable at the point of sale rather than stated on a page. The build wasn't unchecked: a dedicated QA function tested each release, with defects raised and tracked continuously in Jira.",

  problem:
    "Michelin India could claim fuel savings, but it couldn't prove them to an individual fleet. Before this project, the entire argument lived as unquantified marketing copy on the 'Why Choose Michelin' page, statements like 'our tyres save fuel,' with no way for a fleet owner to see what that meant for their operation. No calculator, no tool, no personalized number. Meanwhile the people the business needed to convince, fleet owners, fleet managers, and the Michelin sales reps pitching to them, were all circling the same doubt: how can a tyre actually lower my fuel bills and cut emissions, and is it worth the premium? The job was to turn a generic brand claim into a concrete, personal, believable figure, and to do it in a way that opened a sales conversation rather than ending one.",

  // The core tension + the research plan that would validate each axis, surfaced
  // under the "Discovery" section (framed as planned research, not a run study).
  discovery: {
    summary:
      "The real difficulty wasn't visual, it was a three-way tension that pulled against itself: Trust vs. Friction vs. Conversion, all on an enterprise design system with no motion vocabulary. Every decision had to serve all three at once, lowering friction couldn't cost accuracy; capturing a lead couldn't cost trust. On a two-month build with solo design ownership, the design bets were made from that tension and Michelin's R&D data. Given more runway, here's the research I'd run to validate each axis: qualitative discovery with the people on both sides of the sale, evaluative testing of the riskiest design decisions, and in-market analytics:",
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
    "I designed a single-screen, side-by-side experience: inputs on the left, a live results panel on the right. As the user adjusts their fleet details, the savings respond, culminating in an animated reveal when they hit 'View Savings.' The comparison is anchored to the Michelin tyre currently under promotion — the campaign sets the product, and the tyre-type choice (bias, tube-type radial, tubeless radial) resolves to that tyre's specification. The user makes one choice they already know the answer to and never types a dimension. Personalisation comes from what they do know: their current tyre, their annual volume, their fuel price. That decision resolved the friction-vs-accuracy tension within a real constraint: this is a promotion vehicle, so the Michelin side of the comparison is fixed by the campaign, and every figure behind it is signed off by Michelin's R&D team. The design's job was to make a product-led comparison feel personal without pretending to know things it couldn't. From there the inputs stay in the fleet operator's own language — annual tyres purchased (slider) and current fuel price (slider) — over a stated, visible assumption: 90,000 kms/year.",

  impact:
    "As Michelin India's first market-facing fuel-savings calculator, the tool validated a hypothesis the business had never tested: that fleet decision-makers would engage with a self-serve tool converting a vague brand claim into a personalized rupee-and-CO₂ figure, and that doing so was an effective way to open sales conversations. The concept was shared upward with the Michelin India head, and the same core model later appeared in Michelin's global Connected Fleet Carbon Calculator. I can't claim a direct line from one to the other — but seeing the model I'd validated regionally show up at global scale is the outcome I'm proudest of. For a two-month build inside a regional marketing team — solo on design and front-end, partnered with back-end — that's the reach I'd measure it by.",

  // Factual, non-fabricated metrics drawn straight from the project. Swap or add
  // real engagement KPIs (completion rate, leads, conversion) once analytics allow.
  metrics: [
    { value: "1st", label: "market-facing fuel-savings calculator at Michelin India", note: "a hypothesis the business had never tested" },
    { value: "2 mo", label: "solo design + front-end build, integrated with the back-end team's savings engine" },
    { value: "4", label: "outcomes shown before any lead is asked for", note: "fuel, cost, CO₂ and trees" },
    { value: "Global", label: "the same model later appeared in Michelin's Connected Fleet Carbon Calculator" },
  ],

  reflection: {
    title: "Learning to ask why, not just how",
    body: [
      "I'll be honest about how I worked on this. I came in as a designer who did what was asked: I took the claim, the inputs and the assumptions the business handed me, and I built a clean, convincing tool around them.",
      "What I didn't do enough of was ask why. Why this input and not another, why this assumption, why a fleet owner would trust this exact number. I treated those as settled when some of them were mine to question.",
      "The biggest thing I carry forward is that asking why is part of the craft, not a threat to it. The strongest version of a product, and of me as a designer, comes from interrogating the brief, not only executing it well.",
      "The front-end was built and validated against ideal-case content. When the back end's live savings engine and CMS-served data landed, the numbers and copy came through at real-world lengths and magnitudes — and layouts that held up in design started breaking, mobile first. Sorting the responsive behaviour after integration cost more effort than it would have to design for it up front. The lesson I carry into every build since: pressure-test the layout against worst-case content — longest string, largest number — before integration, not after.",
      "The same gap shows up in what I can't tell you here. I shipped a lead-generation tool without owning — or asking for — the metric that defined its success. The lead logs behind the 'Yes, I am Interested' CTA were owned and monitored by the sales team, not by design, and I no longer have access to them. I'd rather say that than publish numbers I can't stand behind. The tool remains live. Since then, 'how will we know if this worked, and who gives me access to that?' is a question I ask before the build starts, not after it ships.",
      "Accessibility is the other thing I'd do differently. The tool inherited contrast and base accessibility from Michelin's design system and passed a basic checklist audit — which covers what the system had already solved, and none of what I added on top of it. The sliders, the dropdown, the tooltips and the animated reveal were new custom interaction and new motion in a system that had no motion vocabulary, and those are exactly the parts a design system can't inherit for you: keyboard operability on a custom control, whether a live results panel announces itself to a screen reader, whether a reveal respects reduced-motion. Knowing where inheritance stops is a large part of why accessibility is now evidenced as part of the change process in the systems I lead, rather than assumed.",
    ],
  },

  offers: [
    "One non-technical opening choice, bias / tube-type radial / tubeless radial, that resolves to the promoted tyre's specification, so accuracy never costs friction.",
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
        "The tyre-type choice resolves to the promoted tyre's specification: the user makes a decision they already know the answer to, and the system handles the spec. This was the key decision that resolved the friction-vs-accuracy tension within a real constraint — this is a promotion vehicle, so the Michelin side is fixed by the campaign.",
    },
    {
      audience: "Making the abstract tangible",
      detail:
        "The four outcomes aren't one message — they're two, to two audiences, on one screen. The dealer goes straight to the money: ₹38 lakhs saved is the number that decides whether the premium is worth it. The CO₂ and the trees are the segue — how Michelin's Planet commitment enters a commercial conversation as a figure rather than a lecture. Both metrics came from Michelin's R&D team, who model the environmental impact of tyres; the trees conversion is their science, not a designer's flourish. Whether fleet owners find that framing persuasive or decorative is one of the things I'd put in front of them first, given the runway (see Discovery).",
    },
    {
      audience: "Building trust",
      detail:
        "Credibility rests on brand + R&D data + open assumptions, not a black-box figure. Every metric carries a methodology tooltip, the running assumption is stated openly, and disclaimers stay visible. Every figure in the model — including the CO₂-to-trees conversion — is signed off by Michelin's R&D team before it ships.",
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
        "A single-screen, side-by-side experience: inputs on the left, a live results panel on the right. The comparison is anchored to the Michelin tyre currently under promotion — the campaign sets the product, and the tyre-type choice (bias, tube-type radial, tubeless radial) resolves to that tyre's specification. The user makes one choice they already know the answer to and never types a dimension. Personalisation comes from what they do know: their current tyre, their annual volume, their fuel price.",
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
      title: "From a regional experiment to a model that travelled",
      titleHref: "https://connectedfleet.michelin.com/blog/calculate-co2-emissions/",
      status: "future",
      body: [
        "I worked directly with the Michelin India head on this, and the validated concept was shared upward. The same core model — a self-serve, R&D-backed fleet calculator that leads with value before capturing intent — later appeared in Michelin's global Connected Fleet Carbon Calculator, a multi-vehicle-group emissions tool under the worldwide Connected Fleet brand.",
      ],
      figures: [
        {
          alt: "The global Michelin Connected Fleet Carbon Calculator",
          placeholder: "Connected Fleet Carbon Calculator",
          src: "/michelin/connected-fleet.webp",
          span: "full",
          ratio: "16 / 9",
          caption: "Michelin's global Connected Fleet Carbon Calculator — the same value-first model, at worldwide scale.",
        },
      ],
      highlights: [
        "Designing under a real business tension: trust, friction and conversion working against each other, and resolving it through interaction design rather than compromise.",
        "Working within an enterprise design system while extending it, adding motion where none existed without breaking its language.",
        "The design-engineer advantage — and its limit: owning both the UX decisions and the React build meant no translation loss between intent and implementation, but the boundary with the back-end team was where the real work happened. Integration is where design assumptions get tested.",
      ],
    },
  ],
}

export default michelinFuelSavings
