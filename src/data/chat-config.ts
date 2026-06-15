/*
  ═══════════════════════════════════════════════════════════════
  CHAT CONFIG — Edit this file to change all Q&A in the chatbot
  ═══════════════════════════════════════════════════════════════

  To add/edit/remove questions:
  1. Each entry needs: id, question, answer, category
  2. id must be unique
  3. Category groups them under section headers in the chat
  4. Questions appear as quick-select buttons
  5. Answers support \n for line breaks

  Example:
    {
      id: "my-new-question",
      question: "What is your question?",
      category: "General",
      answer: "Your answer here. Use \\n for new lines.",
    }
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
      "Hi! I'm Zarin. I'm a design-engineer with 10+ years of experience spanning UX design, front-end development, and AI product design. I've worked across global B2B and B2C platforms at bp, Michelin, Packt Publishing, and TCS. Currently, I'm a Senior Product Designer and a global capability Lead at bp, driving design maturity across India and global hubs. To know more about me check out my about section.",
  },
  {
    id: "resume",
    question: "Can I see your resume?",
    category: "General",
    answer:
      "Of course! You can download my full resume [here]. It covers my experience across bp, Michelin, Packt Publishing, and TCS with detailed metrics on business impact.",
  },
  {
    id: "availability",
    question: "Are you open to freelance / full-time?",
    category: "General",
    answer:
      "I'm currently open to interesting conversations! Whether it's full-time roles or collaborations that sit at the intersection of design and engineering, I'd love to hear from you. Reach out on LinkedIn or drop me an email.",
  },
  // {
  //   id: "live-prototypes",
  //   question: "Can I see live prototypes?",
  //   category: "General",
  //   answer:
  //     "Absolutely! Head over to my Playground section where I showcase interactive experiments, UI prototypes, and side projects. Some are built in Framer, some in React — all of them are hands-on explorations at the intersection of design and code.",
  // },
  {
    id: "testimonials-ask",
    question: "What do people say about working with you?",
    category: "General",
    answer:
      'The kindest words come from people I\'ve worked with directly. Dona calls me "an asset in any team." Tanoushka says I\'m "one of those rare humans who\'s not just insanely skilled, but also makes work feel lighter and more fun." Hugo from Michelin highlighted my adaptability and teamwork. You can read all the testimonials in the section below!',
  },

  // ─── SKILLS ─────────────────────────────────────────────────
  {
    id: "skills",
    question: "What are your top skills?",
    category: "Skills",
    answer:
      "I operate at the intersection of three worlds:\n\n🎨 Design & UX Engineering — I work across the full product lifecycle—from discovery and user research to design systems, prototyping, implementation collaboration, and measuring product success through user and business metrics. Interaction design, prototyping (Hi-Fi & Lo-Fi), design systems, micro-animations, responsive UI, accessibility (WCAG).\n\n🤖 AI & Emerging Tech — Generative AI product design, AI-powered prototyping, working with Claude, Cursor, and opencode for production-grade code.\n\n💻 Front-End Development — HTML5, CSS3, JavaScript (ES6+), React.\n\nI also bring strong UX research, A/B testing, and stakeholder communication skills from years of cross-functional collaboration.",
  },
  {
    id: "ai-tools",
    question: "What AI tools do you use?",
    category: "Skills",
    answer:
      "I actively work with: Claude (for code creation and production-grade code), opencode (coding agent for complex tasks), Kimi (for decision making). I'm deeply interested in generative AI product design, how to design interfaces and experiences that feel intuitive when AI is part of the product, not just a bolt-on feature.",
  },

  // ─── EXPERIENCE ─────────────────────────────────────────────
  {
    id: "experience-bp",
    question: "What do you do at bp?",
    category: "Experience",
    answer:
      "At bp, I'm a Senior Product Designer and global capability Lead. I lead the design capability function within bp's India hub and across global teams , defining best practices, establishing design frameworks, and setting the strategic vision for design maturity. I led the end-to-end rebranding of bpcore (bp's enterprise design system), and I designed the internal Product and Projects Hub site. I also mentor product designers across levels and I am a part of talent acquisition to grow the team.",
  },
  {
    id: "experience-michelin",
    question: "How was your experience at Michelin?",
    category: "Experience",
    answer:
      "I spent nearly 5 years at Michelin (Oct 2020 - Aug 2025) as Assistant Manager for UI and Front-End Development. Some highlights:\n\n• Delivered a 15% uplift in B2C conversion rates through research-informed A/B testing\n• Designed AI-enhanced B2B features for CO2 reduction and fuel savings tools\n• Contributed as conversational designer for a gen-AI chatbot for tyre service booking\n• Built a design system that cut design-to-development handoff time by 30%\n• Improved CRM dashboard engagement by 21%\n• Won the Michelin Champions Award in 2022 and 2023",
  },

  // ─── PROCESS ────────────────────────────────────────────────
  {
    id: "design-process",
    question: "Tell me about your design process",
    category: "Process",
    answer:
      "My process is rooted in research but moves fast. It typically follows:\n\n1. 🔍 Research — User interviews, usability testing, competitive analysis, data synthesis\n2. 💡 Ideate — Setting up design sprints, information architecture,  setting up systems for designs\n3. ✏️ Rapid Prototyping — Using LLM's to create ideas and setting up screens with an MVP for rapid prototyping.\n4. 🧪 Test — A/B testing, usability studies, stakeholder reviews\n5. 🚀 Ship — Production-ready UI with clean handoff (or I build it myself in React)\n6. 📊 Measure — Track impact, iterate based on data\n\nWhat sets me apart is that I can take a design from Figma all the way to deployed code — no handoff gap.",
  },
]
