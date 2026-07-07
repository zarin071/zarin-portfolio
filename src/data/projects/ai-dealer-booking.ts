import type { Project } from "./_types"

const aiDealerBooking: Project = {
  id: "ai-dealer-booking",
  title: "Conversational AI — Dealer Booking",
  subtitle: "Find and book a tyre-service dealer through conversation, not navigation",
  role: "Conversational Designer",
  timeline: "2024",
  tags: ["AI", "Conversational Design", "Generative AI"],

  problem:
    "To book a tyre-change service, customers had to navigate the entire Michelin site — searching for a nearby dealer, comparing options, and stepping through a multi-screen booking flow. The journey was long and easy to abandon.",

  approach:
    "Designed a generative-AI chatbot that finds and books a dealer entirely through conversation. Defined the conversation flows, the AI's persona and tone, and mapped the journey from a simple intent (\"I need a tyre change\") to a confirmed dealer booking — no manual site browsing required.",

  impact:
    "Collapsed dealer discovery and booking into a single conversation, removing the need to browse the website and cutting friction in the tyre-service journey.",

  cover: "linear-gradient(135deg, #EDE9FF 0%, #C9BEFF 45%, #7C6BE6 100%)",
  coverLabel: "Conversational AI",
  featured: true,
}

export default aiDealerBooking
