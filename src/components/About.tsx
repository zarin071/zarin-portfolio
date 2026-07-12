"use client"

import { motion } from "framer-motion"

const content = [
  "Senior Product Designer & Capability Lead at bp, driving design maturity across India and global hubs. Lead the bpcore enterprise design system rebrand. Mentor designers, define best practices, and embed design strategy into organisational goals.",
  "Before bp: nearly 5 years at Michelin designing across B2C and B2B — research-informed work that measurably moved conversion and engagement, design systems that cut handoff time by 30%, and a Michelin Champions Award two years running.",
  "Earlier: UI/UX at Packt Publishing, engineering at TCS. Full arc from code to design to strategy.",
]

export default function About() {
  return (
    <section id="about" className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label mb-3"
      >
        About Me{" "}
        <span className="easter-egg" data-egg="egg-3" aria-hidden="true">◆</span>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg mb-10"
      >
        The Designer-<span className="font-serif italic font-normal">Engineer</span>.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="md:col-span-2 space-y-4">
          {content.map((paragraph, i) => (
            <p key={i} className="body-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center p-6 bg-subtle/30 dark:bg-darkSubtle/30 rounded-2xl border border-subtle dark:border-darkSubtle">
          <span className="font-serif text-5xl md:text-6xl mb-2">
            10+{" "}
            <span className="easter-egg" data-egg="egg-4" aria-hidden="true" style={{ fontSize: "0.4em" }}>⌘</span>
          </span>
          <p className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray text-left">
            Years bridging design &amp; code
          </p>
        </div>
      </motion.div>
    </section>
  )
}
