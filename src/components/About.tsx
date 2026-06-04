"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const facets = [
  {
    id: "professional",
    title: "The Professional",
    subtitle: "Design-engineer hybrid · 10+ years",
    content: [
      "Senior Product Designer & Capability Lead at bp, driving design maturity across India and global hubs. Lead the bpcore enterprise design system rebrand. Mentor designers, define best practices, and embed design strategy into organisational goals.",
      "Before bp: nearly 5 years at Michelin where I delivered a 15% uplift in conversion rates, built reusable design systems cutting handoff time by 30%, improved CRM engagement by 21%, and won the Michelin Champions Award two years in a row.",
      "Earlier: UI/UX at Packt Publishing, engineering at TCS. Full arc from code to design to strategy.",
    ],
    stat: "10+",
    statLabel: "Years bridging design & code",
  },
  {
    id: "food",
    title: "The Food Historian",
    subtitle: "Why wasabi with sushi? Let me tell you.",
    content: [
      "I believe food tells the story of civilisation. Every dish has a history, a trade route, a cultural collision behind it. Why did the Mughals bring biryani to India? Why is dal chawal the ultimate comfort food across every Indian state?",
      "I explore cuisines the way I approach design — with research, curiosity, and a deep need to understand the 'why' behind the surface.",
      "My All About Food section is where I write these stories. It's my side passion project and the best conversation starter at any dinner table.",
    ],
    stat: "∞",
    statLabel: "Questions about food",
  },
  {
    id: "bjj",
    title: "The BJJ Learner",
    subtitle: "Flow state · Discipline · Controlled energy",
    content: [
      "Brazilian Jiu-Jitsu taught me something design school never could: the value of controlled failure. You tap out. You learn. You get back on the mat.",
      "BJJ is often called 'human chess' — it's about leverage, positioning, and reading your opponent's next move before they make it. Sound familiar? That's exactly what great product design requires.",
      "The mat keeps me humble, disciplined, and always learning. It's the closest thing to a design process in physical form.",
    ],
    stat: "♟",
    statLabel: "Human chess mindset",
  },
]

export default function About() {
  const [active, setActive] = useState(0)

  return (
    <section id="about" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-12"
      >
        Who is <span className="italic">Zarin</span>?
      </motion.h2>

      <div className="flex gap-2 mb-10 border-b border-subtle dark:border-darkSubtle">
        {facets.map((facet, i) => (
          <button
            key={facet.id}
            onClick={() => setActive(i)}
            className={`pb-3 px-1 font-serif text-sm md:text-base transition-all duration-300 relative ${
              active === i ? "text-ink dark:text-darkInk" : "text-warmGray dark:text-darkWarmGray hover:text-ink/70 dark:hover:text-darkInk/70"
            }`}
          >
            {facet.title}
            {active === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-4">
            {facets[active].content.map((paragraph, i) => (
              <p key={i} className="body-base">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-subtle/30 dark:bg-darkSubtle/30 rounded-2xl border border-subtle dark:border-darkSubtle">
            <span className="font-serif text-6xl md:text-7xl text-accent mb-3">
              {facets[active].stat}
            </span>
            <p className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray text-center">
              {facets[active].statLabel}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
