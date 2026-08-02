import type { Project } from "./_types"

const michelinConversationalAssistant: Project = {
  id: "michelin-conversational-assistant",
  title: "The Appointment Is the Demand Signal",
  subtitle: "A conversational assistant for Michelin's drivers and dealers",
  role: "AI Conversational Designer (solo)",
  timeline: "2 months",
  tags: ["Conversational AI", "Conversation Design", "Service Design", "AI Behaviour"],

  // Working research file. WhatsApp is the reference delivery medium; the
  // conversation logic sits above it.
  projectLink: "https://www.figma.com/design/6yGnvgoASZWe2gZa2RKETw/Whatsapp-Prototype?node-id=0-1&t=9PLcExiejqAfC4FT-1",
  projectLinkLabel: "WhatsApp prototype in Figma ↗",

  // Bibendum "looking out" line-art animation on white; light cover, so the
  // label renders dark and the card carries a subtle border on the white page.
  cover: "#FFFFFF",
  coverVideo: "/michelin/conversational-cover-v2.mp4",
  coverVideoWebm: "/michelin/conversational-cover-v2.webm",
  coverVideoPoster: "/michelin/conversational-cover-v2-poster.jpg",
  coverLabel: "Conversational AI",
  coverLabelDark: true,

  notice:
    "This case study documents a fully specified and prototyped concept, not a shipped product. It did not ship because no booking backend existed to ship it against, which turned out to be the finding. What it captures is the conversation design, AI behaviour definition, and service thinking behind it.",

  overview:
    "Twice a year, millions of European and North American drivers have to change their tyres, and in much of Europe they are legally required to. Michelin generates that demand, engineers the product, and funds the advertising, then hands the customer to a dealer directory with no way to book anything. I designed a conversational assistant that closes that gap: it carries a driver from an Instagram ad to a confirmed appointment in one conversation, with the dealer accepting the request the way a service marketplace works. Partway through, the project turned into something else. Once appointments exist, they stop being a convenience feature and become a forecasting instrument: every confirmed booking is a forward order for a specific tyre size, at a specific dealer, on a specific date. I set out to design a booking flow and finished having designed a demand signal, which mattered more to the dealer than the booking did to the customer.",

  origin: [
    "It started on [michelin.in](https://www.michelin.in/). The site generates the demand, engineers the product and funds the advertising, then ends at a dealer directory with a phone number and no way to book, at the exact moment the customer is ready to act. That gap is where this project began.",
  ],

  problem:
    "For the driver: they saw a seasonal creative and know they must act, but they do not know their tyre size, which product applies, or which dealer near them has capacity and stock this week. A catalogue answers none of that. It asks them to become an expert, hands them a phone number, then makes them wait. For the dealer: targets, stock updates, payment schedules and annual statements live across email, a portal and an account manager's phone, each a small task with a separate destination, while the peak arrives twice a year, demand is unmanaged, and inventory is financed on instinct. The question the whole system answers: can one conversation carry someone from intent to completion, without asking them to know something they have no reason to know or go somewhere they have no reason to go, while producing information the other side of the business urgently needs?",

  discovery: {
    summary:
      "A note on method: this work was informed by Michelin's business and commercial stakeholders, existing channel documentation, and analysis of the current journey. It was not validated with dealers or drivers directly, which is exactly why the 'what I would test' section exists. Five findings shaped every decision that followed.",
    questions: [
      "The blocker is identification, not choice. A driver knows they need winter tyres but not their tyre size, and the sidewall code is the least legible piece of consumer information on a mass-market product. People abandon before seeing a single product, because they could not answer question one.",
      "Michelin owns demand and product, but not the transaction. The website shows a dealer's location and directions, but it will not let you book them. The journey ends at a phone number, at the exact moment the customer is ready to act.",
      "Both sides lose to the same thing: unscheduled arrival. Without booking, a changeover season runs on walk-ins, a guessing game for the customer and an unstaffable, unplannable queue for the dealer. Neither is a tyre problem, both are a scheduling problem.",
      "Dealers carry the inventory risk, on credit. Stock is bought on credit against a monthly balance, so every ordering decision is a financed bet placed before demand is known, and seasonal tyres are the worst possible inventory to bet wrong on.",
      "Trust breaks at the physical handoff. A booking made in a chat thread is a promise with nothing behind it: nothing proves the right person arrived, or that the work was completed. Hence two one-time codes rather than one.",
    ],
  },

  approach:
    "The first decision was not what the assistant says, it was when the assistant should exist at all: browsing goes to the web, deciding goes to the assistant, and a handoff is a design decision rather than a failure, as long as context travels with the person so they never restart. Because the conversation is summoned by an ad, it never starts cold: it opens with a hypothesis drawn from the campaign, not a menu. Consent and channel preference are asked once, early, in plain language, with the opt-out designed as carefully as the opt-in. The consumer journey resolves fitment through two paths (by vehicle, or by reading the sidewall), reads back what it captured, recommends with a reason rather than a spec dump, and treats the booking as a request the dealer accepts, not a confirmation the assistant promises, which means the pending state had to be designed. It then continues into the physical world with two one-time codes, one to start the service and one to mark it complete, turning a chat thread into the verification layer for a physical service with no app to install.",

  personas: [
    {
      role: "Driver (consumer)",
      scope: "Summoned by a seasonal ad; must re-tyre, often by law.",
      need: "To get from an ad to a confirmed appointment in one conversation, without knowing their tyre size or being handed a phone number and a queue. The assistant is reactive: it removes friction from something they already have to do, at a moment they already know is coming.",
    },
    {
      role: "Dealer (marketplace)",
      scope: "An independent business carrying financed seasonal stock.",
      need: "To meet a business obligation without opening anything else, and to order against confirmed demand instead of a guess. The assistant is largely proactive, initiating messages that each tie to money: a target, an incentive, a payment, stock they wanted, or a customer waiting on an answer.",
    },
    {
      role: "Michelin (the brand)",
      scope: "Generates demand and funds advertising, but does not own the transaction.",
      need: "To close the loop it currently loses at the dealer directory, and to capture the demand history the business never had, so seasonal forecasting improves and unsold stock falls.",
    },
  ],

  impact:
    "The design reframed a booking feature as a demand signal. The moment a dealer accepts a request, the system knows a specific size, quantity, dealer and date, and a named customer committed to arriving: that is not a lead, it is a forward order with a delivery date. For the dealer it converts financed speculation into financed certainty: they can stock to the book rather than the guess, accept requests beyond current stock because the appointment date gives lead time to order in, staff to the shape of the day, and de-risk a credit position. Better forecasting here does not only improve margin, it reduces the volume of product manufactured, shipped and stored without ever being fitted, a sustainability argument arriving from operations rather than marketing. The project did not ship because no backend existed to receive a request, route it to a dealer and hold an appointment. That absence was the finding: the design surfaced an infrastructure gap, and closing it was a platform decision, not a design one. The most valuable output of a conversation design system turned out to be the data it produced, not the conversations themselves.",

  // The 13 numbered diagrams (three tiers) plus the demand-rhythm and
  // intent-fork figures, grouped into five visual chapters.
  narrativeLabel: "The system, drawn",
  narrative: [
    {
      era: "Context",
      kicker: "The market and the gap",
      title: "Demand on a schedule, a gap at the moment of action",
      status: "current",
      body: [
        "Two things frame the whole system: demand that arrives twice a year on a legal schedule, and a brand that owns everything except the moment the customer is ready to act.",
      ],
      figures: [
        { alt: "Demand curve with two seasonal changeover windows across the year", src: "/michelin/conv-diagram-demand-rhythm.webp", caption: "Demand arrives twice a year, on a schedule. Two changeover windows, one written into law." },
        { alt: "Entry routing: browsing goes to the web, deciding goes to the assistant", src: "/michelin/conv-diagram-intent-fork.webp", caption: "Where conversation is not the answer: browsing wants surface area, deciding wants an answer." },
        { alt: "The gap: Michelin owns demand, product and advertising but not the transaction", src: "/michelin/conv-diagram-01-gap.webp", caption: "The gap. Michelin owns everything except the moment the customer is ready to act; no booking mechanism exists." },
      ],
    },
    {
      era: "Flow",
      kicker: "The consumer journey",
      title: "Ten questions to one, and a booking that is a request",
      status: "current",
      body: [
        "Fitment collapses ten questions into one photograph. The booking is a request the dealer accepts, never a promise the assistant makes, and it continues into the workshop with two one-time codes.",
      ],
      figures: [
        { alt: "Two five-question fitment paths collapsing into a single sidewall photo", src: "/michelin/conv-diagram-02-ten-questions.webp", caption: "Ten questions, or one. By vehicle or by tyre, both resolved by photographing the sidewall." },
        { alt: "Request sent, dealer reviewing (pending), appointment confirmed", src: "/michelin/conv-diagram-03-request-pending-confirmed.webp", caption: "Request, pending, confirmed. The customer is never told a booking exists before one does." },
        { alt: "Timeline of two one-time codes bridging the digital and the workshop", src: "/michelin/conv-diagram-04-service-handshake.webp", caption: "The service handshake. Code 1 proves the right person arrived, code 2 proves the work happened." },
      ],
    },
    {
      era: "Value",
      kicker: "The demand signal and the commercial case",
      title: "A booking is a forward order",
      status: "current",
      body: [
        "The moment a dealer accepts, the appointment becomes a forward order with a delivery date, which connects stock, targets and credit into one commercial loop, and makes booked demand beat walk-in demand.",
      ],
      figures: [
        { alt: "What a confirmed appointment contains: size, quantity, dealer, date, committed customer", src: "/michelin/conv-diagram-05-appointment-contains.webp", caption: "What an appointment contains. Not a lead: a forward order with a delivery date." },
        { alt: "The commercial loop connecting appointments, stock, targets and credit", src: "/michelin/conv-diagram-06-commercial-loop.webp", caption: "The commercial loop. Booked appointments tie stock, targets, incentives and credit into one thread." },
        { alt: "Walk-in versus booked demand across a changeover season", src: "/michelin/conv-diagram-07-walkin-vs-booked.webp", caption: "Walk-in versus booked. Booking spreads the peak and lets a dealer accept beyond current stock." },
      ],
    },
    {
      era: "AI",
      kicker: "Where the model goes",
      title: "Cold start, confidence, and two modes on one channel",
      status: "current",
      body: [
        "The conversation never starts cold, the model acts inside three confidence bands, and the same channel runs a reactive consumer assistant and a proactive dealer one.",
      ],
      figures: [
        { alt: "The cold start: an ad-originated conversation opens with a hypothesis, not a menu", src: "/michelin/conv-diagram-08-cold-start.webp", caption: "The cold start. The assistant inherits the campaign and opens with a hypothesis, not a greeting." },
        { alt: "The confidence model: act on high, confirm on medium, ask one question on low", src: "/michelin/conv-diagram-09-confidence-model.webp", caption: "The confidence model. Act on high, confirm on medium, ask one open question on low. Never dump a menu." },
        { alt: "Reactive consumer assistant versus proactive dealer assistant on one channel", src: "/michelin/conv-diagram-10-reactive-proactive.webp", caption: "Reactive and proactive. One summoned by a tap, one that initiates most of its own messages." },
      ],
    },
    {
      era: "Rigour",
      kicker: "How it is held to account",
      title: "Errors, evals, and two registers",
      status: "current",
      body: [
        "A designed error taxonomy with four recoveries, an eval set that says what correct looks like before build, and one brand in two registers.",
      ],
      figures: [
        { alt: "The error taxonomy: four failure types with four different recoveries", src: "/michelin/conv-diagram-11-error-taxonomy.webp", caption: "The error taxonomy. Four failure types, four different recoveries." },
        { alt: "What the eval set tests: happy path, failure and recovery, refusal and escalation", src: "/michelin/conv-diagram-12-eval-set.webp", caption: "What the eval set tests. Written before build: how would you know if this was working?" },
        { alt: "Two registers on one voice: warm for the driver, precise for the dealer", src: "/michelin/conv-diagram-13-two-registers.webp", caption: "Two registers, one voice. Warm and plain for the driver, efficient and precise for the dealer." },
      ],
    },
  ],

  offers: [
    "Context-first entry: an ad-originated conversation inherits the campaign and opens with a hypothesis, not a greeting or a menu.",
    "Consent designed as conversation: asked once, early, in plain language, with the opt-out built with the same care as the opt-in.",
    "Two fitment paths to the same fact: by vehicle or by sidewall, each closing with a read-back the person confirms or edits.",
    "Request-and-accept booking: the dealer accepts a request rather than the assistant promising a slot, with pending and failure states all designed rather than assumed.",
    "A service handshake of two one-time codes: one to start the fitting, one to verify from the customer's side that it is complete.",
    "A proactive dealer assistant where every initiated message ties to money, so it never becomes a channel people mute.",
    "Guardrails written as copy: no price commitments, no warranty interpretation, no safety verdicts, no promises on the dealer's behalf, no cross-dealer data.",
  ],

  benefits: [
    {
      audience: "Stock to the book",
      detail:
        "Confirmed appointments state which sizes are needed and when, so a dealer orders against real commitments instead of last year's guess.",
    },
    {
      audience: "Out of stock becomes not yet",
      detail:
        "A dealer can accept a request for a size they do not hold, because the appointment date gives lead time to order it in. Under a walk-in model that customer is simply lost.",
    },
    {
      audience: "Financed certainty",
      detail:
        "Because dealers buy on credit against a monthly balance, ordering against confirmed appointments converts financed speculation into financed certainty.",
    },
    {
      audience: "Sustainability from operations",
      detail:
        "Fewer wrong-size winter tyres manufactured, shipped and stored unsold, an environmental gain that arrives from forecasting rather than from a marketing claim.",
    },
  ],

  processTitle: "The AI layer, and why it goes exactly here",
  processIntro:
    "The foundation is deterministic: menus, guided sequences, templates, because the whole thing rests on facts that must be correct. The AI layer is not a replacement. It is targeted at five points where the deterministic version demonstrably strains, each identified from the flows rather than assumed. One line governs all of it: the model chooses the words, it never chooses the facts.",
  process: [
    {
      step: "01",
      title: "The ten-question fitment sequence",
      detail:
        "Ten questions across two paths before the person sees a product. The fix: photograph the sidewall for vision extraction, accept a paste like '225/55 R18 92Y', accept a sentence like '2015 Cadillac CTS base', and partial-fill so you never re-ask what you already have. The guided path stays as the fallback for people who know nothing.",
      tools: ["Vision extraction", "Slot filling", "Partial fill"],
    },
    {
      step: "02",
      title: "The 'something else' intent",
      detail:
        "The catch-all a deterministic tree cannot resolve. The fix: intent classification with three confidence bands. High acts and says what it is acting on, medium confirms in one line, low asks one open question and never dumps a menu. Multi-intent turns are handled here too: answer the first, queue the second, lose neither.",
      tools: ["Intent classification", "Confidence bands", "Multi-intent"],
    },
    {
      step: "03",
      title: "Recommendation reasoning",
      detail:
        "Options sort by category, not by the person. The model explains why an option suits this person's climate, mileage and vehicle, in their own terms. The catalogue decides what is offered, the model decides only how it is explained.",
      tools: ["Grounded generation"],
    },
    {
      step: "04",
      title: "Dealer matching",
      detail:
        "Proximity alone routes people to a dealer who cannot help them. The model reasons across distance, availability against the requested date, and whether the dealer holds or can obtain the size in time.",
      tools: ["Reasoning over constraints"],
    },
    {
      step: "05",
      title: "Demand interpretation",
      detail:
        "Confirmed bookings produce a rich signal a template cannot read. The model summarises booked demand against held stock per size and surfaces the shortfall as a plain-language instruction with a deadline, not a dashboard the dealer has to decode. The highest-value application in the system, and the least visible.",
      tools: ["Summarisation", "Demand signal"],
    },
  ],

  soundbites: [
    "The model chooses the words. It never chooses the facts.",
    "A handoff is a design decision, not a failure.",
    "An assistant that opens by asking what you want has thrown away the only thing it already knew about you.",
    "That is not a lead. That is a forward order with a delivery date.",
    "The most valuable output of a conversation design system turned out to be the data it produced, not the conversations themselves.",
  ],

  roadmap:
    "Because the work was stakeholder-informed rather than user-validated, the next step is four studies that resolve the genuine unknowns: a Wizard-of-Oz test on fitment, comprehension testing on the refusal and safety copy, utterance collection from fifty people describing in their own words why they are shopping for tyres, and a two-week dealer diary study on tolerance for proactive messages and real response times. What I would change if it were built today: write the eval set before the flows, validate with dealers first rather than stakeholders, lead with the photo path in fitment and keep the guided sequence as the fallback, instrument the demand signal from day one, and keep every hard constraint (fitment, pricing, availability, stock, credit, safety) retrieval-grounded, because a fluent wrong answer is worse than no answer.",
}

export default michelinConversationalAssistant
