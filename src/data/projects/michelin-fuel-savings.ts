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
    "Michelin India could tell fleet operators their tyres saved fuel. They couldn't prove it to a single one of them.",
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

  overview: [
    "Sole designer and production React developer, embedded in Michelin India's B2B marketing team and working directly with the Michelin India head. The brief had two audiences at once: for fleet dealers and managers — Michelin's biggest B2B customers — it turned an abstract premium into a number they could act on and showed them what they were contributing environmentally. For leadership, it made the People/Profit/Planet brand vision measurable at the point of sale rather than stated on a page.",
  ],

  problem:[
    "Before this project, the entire fuel-savings argument lived as unquantified copy on the 'Why Choose Michelin' page — 'our tyres save fuel' — with no way for a fleet owner to see what that meant for their operation. No tool, no personalised number.",
    "Meanwhile the people the business needed to convince — fleet owners, fleet managers, and the Michelin sales reps pitching to them — were all circling the same doubt: how can a tyre actually lower my fuel bills and cut emissions, and is it worth the premium? The job was to turn a generic brand claim into a concrete, personal, believable figure, and to do it in a way that opened a sales conversation rather than ended one."
  ],

  // The core tension + the research plan that would validate each axis, surfaced
  // under the "Discovery" section (framed as planned research, not a run study).
  discovery: {
    summary:
      "The real difficulty wasn't visual, it was a three-way tension that pulled against itself: **Trust vs. Friction vs. Conversion**, all on an enterprise design system with no motion vocabulary. Every decision had to serve all three at once, lowering friction couldn't cost accuracy; capturing a lead couldn't cost trust. On a two-month build with solo design ownership, the design bets were made from that tension and Michelin's R&D data. Given more runway, here's the research I'd run to validate each axis: qualitative discovery with the people on both sides of the sale, evaluative testing of the riskiest design decisions, and in-market analytics:",
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
    "The tyre types — bias, tube-type radial, tubeless radial — were already set by what Michelin sells, and the promoted tyre was fixed by the campaign. The design decision was seeing that this existing structure could be the user's opening question: one choice they already know the answer to, that resolves to the promoted tyre's specification without them ever typing a dimension. From there, personalisation comes from what they do know: their current tyre, their annual volume, their fuel price. The second decision was more contested: gated form or value-first. The business case for gating was real — lead capture was the point of the tool. The case against: asking for contact details before the number appears is asking someone to trust a claim they haven't seen yet. We went value-first — show all four outcomes before a single CTA appears — on the basis that a fleet owner who has already seen what the Michelin premium returns in rupees is a warmer lead than one who submitted a form to find out. Value delivered first; lead earned second.",

  impact:
    "Michelin India's first market-facing fuel-savings calculator — a hypothesis the business had never tested. The concept was shared upward with the Michelin India head. The same core model later appeared in Michelin's global Connected Fleet Carbon Calculator. I can't claim a direct line from one to the other — but seeing a regional experiment show up at global scale is the outcome I'd measure a two-month solo build by.",

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
      "I came in as a designer who did what was asked: took the claim, the inputs and the assumptions the business handed me, and built a clean, convincing tool around them.",
      "What I didn't do enough of was ask why. Why this input and not another, why this assumption, why a fleet owner would trust this exact number. I treated those as settled when some of them were mine to question.",
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
        "The fuel-savings claim lived only as unquantified copy on the 'Why Choose Michelin' page — 'our tyres save fuel' — with nothing behind it. No calculator, no personalised number. The job: turn that generic claim into a concrete, believable figure, and do it in a way that opened a sales conversation rather than ended one.",
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
        "A single-screen, side-by-side experience: inputs on the left, a live results panel on the right. The tyre types — bias, tube-type radial, tubeless radial — were already set by what Michelin sells; the promoted tyre was fixed by the campaign. The design decision was using that existing structure as the user's first question: one choice they already know, that resolves to the promoted tyre's specification without them touching a dimension. Personalisation comes from what they do know: their current tyre, their annual volume, their fuel price.",
        "Both approaches were on the table: show the savings first, or gate the result behind a lead form. The business case for gating was real — lead capture was the point. The case against: asking for contact details before the number appears is asking someone to trust a claim they haven't seen yet. We went value-first. The savings panel shows all four outcomes — fuel saved, cost in ₹, CO₂ in tonnes, trees — and only then does the 'Yes, I am Interested' CTA appear. A fleet owner who has already seen ₹38 lakhs is a warmer lead than one who submitted a form to find out.",
        "Engineering the reveal meant introducing motion on top of an enterprise design system built for fixed, static imagery, bringing the most important moment to life without breaking the system's visual language.",
        "What I hadn't designed for was real data at real magnitudes. When the back-end's live savings engine and CMS-served data landed, layouts that held up in design started breaking — mobile first. Numbers came in longer than the design assumed; copy at lengths I hadn't stress-tested. Sorting the responsive behaviour after integration cost more than designing for it up front would have. Every build since: pressure-test against worst-case content before integration, not after.",
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
          caption: "The tyre types already existed — the decision was making them the user's first question, so the system resolves the spec they'd never know.",
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
