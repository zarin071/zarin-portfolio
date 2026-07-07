/*
  ═══════════════════════════════════════════════════════════════
  CHAT CONFIG — the "Ask Zarin" assistant's knowledge base
  ═══════════════════════════════════════════════════════════════

  Every answer here is grounded in Zarin's real resume
  (src/data/resume.ts), projects (src/data/projects.ts), and
  testimonials (src/data/testimonials.ts). Keep them in sync.

  To add/edit/remove questions:
  1. Each entry needs: id (unique), question, answer, category
  2. Category groups them under filter chips in the chat
  3. Answers support \n for line breaks
*/

export interface ChatEntry {
  id: string
  question: string
  answer: string
  category: string
}

export const chatConfig: ChatEntry[] = [
  // ─── GENERAL ───────────────────────────────────────────────
  {
    id: "about-me",
    question: "Tell me about yourself",
    category: "General",
    answer:
      "Hi! I'm Zarin — a design-engineer hybrid with 10+ years across UX design, front-end development, and AI product design. I've shipped B2B, B2C, and SaaS work at bp, Michelin, Packt Publishing, and TCS. Today I'm a Senior Product Designer & Capability Lead at bp, driving design maturity across India and global hubs. What makes me a bit different: I can take an idea from research, through design, all the way to deployed React code — no handoff gap.",
  },
  {
    id: "years",
    question: "How many years of experience do you have?",
    category: "General",
    answer:
      "10+ years, and the arc tells a story:\n\n• TCS (2015–2017) — Assistant Systems Engineer, enterprise systems\n• Packt Publishing (2017–2020) — UI/UX + front-end development\n• Michelin (2020–2025) — UI & front-end, award-winning B2C/B2B work\n• bp (2025–present) — Senior Product Designer & Capability Lead\n\nCode → design → strategy. I've grown across all three.",
  },
  {
    id: "resume",
    question: "Can I see your resume?",
    category: "General",
    answer:
      "Absolutely — hit the “Resume” button in the top navigation to open the full PDF. It covers my roles at bp, Michelin, Packt, and TCS with detailed, measurable impact.",
  },
  {
    id: "availability",
    question: "Are you open to opportunities?",
    category: "General",
    answer:
      "I'm always open to interesting conversations — full-time roles or collaborations that sit at the intersection of design and engineering. The fastest way to reach me is LinkedIn or email (see the Contact questions).",
  },
  {
    id: "testimonials-ask",
    question: "What do people say about working with you?",
    category: "General",
    answer:
      'The kindest words come from people I\'ve worked with directly. Dona calls me "an asset in any team." Tanoushka says I\'m "one of those rare humans who\'s not just insanely skilled, but also makes work feel lighter and more fun." Hugo from Michelin highlighted my adaptability and teamwork. Scroll down to the testimonials section to read them all.',
  },

  // ─── SKILLS ─────────────────────────────────────────────────
  {
    id: "skills",
    question: "What are your top skills?",
    category: "Skills",
    answer:
      "I operate at the intersection of three worlds:\n\n🎨 Design & UX Engineering — interaction design, prototyping (Hi-Fi & Lo-Fi), design systems, micro-interactions, responsive/adaptive UI, accessibility (WCAG).\n\n🤖 AI & Emerging Tech — generative AI product design, AI-powered prototyping, production-grade code with Claude, Cursor, and opencode.\n\n💻 Front-End Development — HTML5, CSS3, JavaScript (ES6+), React.\n\nPlus UX research, A/B testing, and stakeholder communication from years of cross-functional work.",
  },
  {
    id: "can-you-code",
    question: "Can you actually code?",
    category: "Skills",
    answer:
      "Yes — that's the core of my “design-engineer” label. I build production-ready interfaces in HTML, CSS, JavaScript (ES6+), and React, and I've owned work from wireframe to deployed code. It means fewer handoffs, tighter design intent, and prototypes that are the real thing, not a mockup.",
  },
  {
    id: "tools",
    question: "What tools do you use?",
    category: "Skills",
    answer:
      "Design: Figma, Framer, Webflow, Sketch, Axure, Miro, Notion, Zeplin, Storybook.\nCode & collaboration: React, Git, Jira, Confluence.\nAI: Claude, Cursor, opencode, Framer AI.",
  },
  {
    id: "ai-tools",
    question: "How do you use AI in your work?",
    category: "Skills",
    answer:
      "I use Claude for production-grade code and rapid prototyping, opencode as a coding agent for complex tasks, and Framer AI for quick explorations. More importantly, I design AI *into* products — generative-AI experiences that feel intuitive because AI is part of the flow, not a bolt-on. (See my Conversational AI project.)",
  },

  // ─── EXPERIENCE ─────────────────────────────────────────────
  {
    id: "experience-bp",
    question: "What do you do at bp?",
    category: "Experience",
    answer:
      "I'm a Senior Product Designer & Capability Lead (Sep 2025–present). I lead the design capability function across bp's India hub and global teams — defining best practices, design frameworks, and the strategic vision for design maturity. I led the end-to-end rebrand of bpcore (bp's enterprise design system, incl. the Roboto→BP Sans migration), designed the internal Product & Projects Hub, and I mentor designers and help grow the team.",
  },
  {
    id: "experience-michelin",
    question: "How was your experience at Michelin?",
    category: "Experience",
    answer:
      "Nearly 5 years (Oct 2020–Aug 2025) as Assistant Manager, UI & Front-End Development. Highlights:\n\n• 15% uplift in B2C conversion via research-informed A/B testing\n• AI-enhanced B2B CO₂-reduction & fuel-savings tools\n• Conversational designer on a gen-AI chatbot for dealer booking\n• Design system that cut design-to-dev handoff time by 30%\n• 21% lift in CRM dashboard engagement\n• Michelin Champions Award, 2022 and 2023",
  },
  {
    id: "experience-packt",
    question: "What did you do at Packt Publishing?",
    category: "Experience",
    answer:
      "At Packt (Nov 2017–May 2020) I was a Software Developer for UI/UX & front-end. I designed and shipped production UIs in HTML, CSS, JavaScript, and React — owning work from wireframe to deployed code — ran A/B testing and usability analysis, defined site information architecture, and built the Packt Design System (a reusable component library that's one of my featured projects).",
  },
  {
    id: "experience-tcs",
    question: "What about your time at TCS?",
    category: "Experience",
    answer:
      "TCS (Sep 2015–Nov 2017) was where I started, as an Assistant Systems Engineer. I translated client feedback into UX and functional improvements for business-critical enterprise apps, created process documentation and application flowcharts, and ran internal demos and usability walkthroughs — the foundation for my design-communication skills.",
  },

  // ─── PROJECTS ───────────────────────────────────────────────
  {
    id: "projects-overview",
    question: "What projects can I look at?",
    category: "Projects",
    answer:
      "Three featured case studies (scroll to the Work section):\n\n1. Conversational AI — Dealer Booking (Michelin, 2024)\n2. Fleet CO₂ Emissions Calculator (Michelin Connected Fleet, 2023)\n3. Packt Design System (2018)\n\nAsk me about any one of them!",
  },
  {
    id: "project-ai-chatbot",
    question: "Tell me about the Conversational AI project",
    category: "Projects",
    answer:
      "Booking a tyre-change service used to mean navigating the whole Michelin site to find a dealer and step through a multi-screen flow. As conversational designer, I helped design a generative-AI chatbot that finds *and* books a dealer entirely through conversation — I defined the flows, the AI's persona and tone, and mapped the journey from “I need a tyre change” to a confirmed booking, no browsing required.",
  },
  {
    id: "project-co2",
    question: "Tell me about the CO₂ calculator",
    category: "Projects",
    answer:
      "The Fleet CO₂ Emissions Calculator (a.k.a. the fuel-saving calculator) is a tool I designed and built for Michelin Connected Fleet. Fleet managers enter their fleet composition and fuel consumption and get estimated CO₂ emissions and savings, broken down by fuel type — making complex sustainability reporting accessible to non-experts. It's live at b2b.michelin.in/fuel-saving-calculator.",
  },
  {
    id: "project-packt-ds",
    question: "Tell me about the Packt Design System",
    category: "Projects",
    answer:
      "Packt's platform (emerging-tech content — AI, data science, cloud) had inconsistent UI and slow design-to-dev handoffs. I built a reusable design system and component library from the ground up, establishing a shared language between design and engineering with documented patterns and production-ready React components. Result: 30% less handoff time and faster feature delivery.",
  },

  // ─── PROCESS ────────────────────────────────────────────────
  {
    id: "design-process",
    question: "Tell me about your design process",
    category: "Process",
    answer:
      "Rooted in research, but it moves fast:\n\n1. 🔍 Research — interviews, usability testing, competitive analysis, data synthesis\n2. 💡 Ideate — design sprints, information architecture, systems thinking\n3. ✏️ Rapid prototype — LLM-assisted ideation and MVP screens to move quickly\n4. 🧪 Test — A/B testing, usability studies, stakeholder reviews\n5. 🚀 Ship — production-ready UI with clean handoff (or I build it in React)\n6. 📊 Measure — track impact, iterate on data\n\nMy edge: I can take a design from Figma all the way to deployed code.",
  },

  // ─── BACKGROUND ─────────────────────────────────────────────
  {
    id: "education",
    question: "What's your educational background?",
    category: "Background",
    answer:
      "I hold a Bachelor of Engineering in Electronics & Telecommunications from M.H. Saboo Siddik College of Engineering, Mumbai (2011–2015). I've since added focused certifications: Product Design in AI, Object-Oriented UX Fundamentals, Figma UI/UX Essentials, and a Webflow Certified Developer credential.",
  },
  {
    id: "awards",
    question: "Have you won any awards?",
    category: "Background",
    answer:
      "Yes — the Michelin Champions Award for B2C websites in both 2022 and 2023, and a Go-Getter Award for a B2B website at Michelin. They recognised research-informed, measurable design work.",
  },
  {
    id: "personal",
    question: "What are you like outside of work?",
    category: "Background",
    answer:
      "Two obsessions keep me sharp: mixed martial arts and food. As an MMA striker I've learned discipline, preparation, and staying calm under pressure — I carry that into every hard problem. Food is where my curiosity runs wild: not just what's in a dish, but *why* — which ingredient does what, and whether a different technique would do it better.",
  },

  // ─── CONTACT ────────────────────────────────────────────────
  {
    id: "contact",
    question: "How can I reach you?",
    category: "Contact",
    answer:
      "Happy to connect!\n\n✉️ zarinsolanki.work@gmail.com\n💼 linkedin.com/in/zarin-solanki\n📄 Resume — the button in the top nav\n\nOr just use the Contact section at the bottom of the page.",
  },
]
