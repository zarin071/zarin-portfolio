"use client"

import { motion } from "framer-motion"

const content = [
  "Senior Product Designer and Capability Lead at bp — I design the system and I build it. I lead the bpcore enterprise design system, mentor designers, and embed design strategy into organisational goals across India and global hubs. As Capability Lead I was a key stakeholder in building a development programme for 50+ designers across India and global hubs — still running and still evolving today. It gave designers a legible growth and promotion path, and gave non-design managers the language to assess design contribution, growth and learning at appraisal time. I also pioneered the design community programmes that turned isolated designers into a peer-to-peer learning network.",
  "Before bp: nearly five years at Michelin designing across B2C and B2B — from the fuel savings calculator I designed and built end to end, to a shared design system the engineering teams built from, so the same components stopped being redrawn per project. Michelin Champions Award, two years running — awarded by Michelin VPs for the fuel savings calculator and the wiper blades platform.",
  "I started the other way round — engineering at TCS, then UI/UX at Packt Publishing, where I designed and built the front end of the site. Design came after code, which is why the two have never been separate for me.",
  "That's the part of the job I'd keep in any role: building the system, the programme or the tool that scales other people — not the reporting line.",
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
        <span className="easter-egg" data-egg="egg-3" aria-hidden="true">✨</span>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg mb-10"
      >
        Design through to <span className="font-serif italic font-normal">production</span>.
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
            <span className="easter-egg" data-egg="egg-4" aria-hidden="true" style={{ fontSize: "0.45em" }}>🎯</span>
          </span>
          <p className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray text-left">
            Years bridging design &amp; code
          </p>
        </div>
      </motion.div>
    </section>
  )
}
