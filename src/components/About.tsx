"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const facets = [
  {
    id: "professional",
    title: "The Designer-Engineer",
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
    id: "person",
    title: "The Person",
    subtitle: "A food connoisseur and a striker",
    content: [
      "Outside of design, I'm passionate about two pursuits that constantly challenge how I think: mixed martial arts and food.",
      "As an MMA striker, I've learned that discipline, preparation, resilience, and the ability to adapt under pressure are lessons that carry into every problem. The sport has taught me to embrace discomfort, stay focused on continuous improvement, and remain calm when navigating complexity.",
      "Food is where my curiosity takes a different form. I'm fascinated not just by what goes into a dish, but why. Why does a recipe use a particular ingredient? What role does it actually play? Could another ingredient achieve the same result? Is there a different technique that would create a better outcome?",
    ],
    stat: "∞",
    statLabel: "Questions about food and form",
  },
]

export default function About() {
  const [active, setActive] = useState(0)

  return (
    <section id="about" className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label mb-3"
      >
        About Me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg mb-6"
      >
        Who I am
      </motion.h2>

      <div className="flex gap-2 mb-6 border-b border-subtle dark:border-darkSubtle">
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
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 space-y-3">
            {facets[active].content.map((paragraph, i) => (
              <p key={i} className="body-base">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start justify-center p-6 bg-subtle/30 dark:bg-darkSubtle/30 rounded-2xl border border-subtle dark:border-darkSubtle">
            <span className="font-serif text-5xl md:text-6xl mb-2">
              {facets[active].stat}
            </span>
            <p className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray text-left">
              {facets[active].statLabel}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
