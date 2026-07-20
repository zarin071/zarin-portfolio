"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { experiments } from "@/data/playground/index"

export default function PlaygroundTeaser() {
  return (
    <section className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        Playground
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.05 }}
        className="body-base max-w-2xl mb-10"
      >
        Things nobody asked me to build. The rebuilt Packt design system, the Figma import plugin, an AI skills toolkit for design system ops — the same instinct that makes me useful inside a system is the one that keeps building tools beside it.
      </motion.p>

      <div className="flex items-end justify-between gap-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="heading-lg"
        >
          Experiments &amp; <span className="font-serif italic font-normal">prototypes</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="shrink-0 hidden sm:block"
        >
          <Link
            href="/playground"
            className="font-sans text-sm uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
          >
            Explore all →
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              href="/playground"
              className="group block p-6 rounded-2xl border border-subtle dark:border-darkSubtle hover:border-ink dark:hover:border-darkInk transition-all duration-300 h-full"
            >
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 border border-subtle dark:border-darkSubtle rounded-full text-warmGray dark:text-darkWarmGray mb-4">
                {exp.tag}
              </span>
              <h3 className="font-syne font-medium text-lg text-ink dark:text-darkInk mb-2 group-hover:opacity-70 transition-opacity">
                {exp.title}
              </h3>
              <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray leading-relaxed">
                {exp.preview}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="sm:hidden mt-6 text-center">
        <Link
          href="/playground"
          className="font-sans text-sm uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream transition-all duration-200 inline-block"
        >
          Explore all →
        </Link>
      </div>
    </section>
  )
}
