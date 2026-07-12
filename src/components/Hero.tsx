"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero({ onChatOpen }: { onChatOpen: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Lightweight animated visual — floating gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />
      </div>

      <div className="w-full px-6 md:px-10 lg:px-16 py-20 relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="section-label mb-6"
        >
          Zarin Solanki · Senior Product Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-syne font-medium w-full text-[clamp(2rem,4.4vw,4.5rem)] leading-[1.05] tracking-tight text-warmGray dark:text-darkWarmGray"
        >
          <span className="text-ink dark:text-darkInk">Hi, I&apos;m </span>
          <span className="text-highlightSoft dark:text-highlight font-semibold">Zarin</span>
          <span className="text-ink dark:text-darkInk"> — a design-engineer hybrid.</span>{" "}
          I take ideas from research through design to shipped React code, with a decade of doing it at{" "}
          <span className="text-ink dark:text-darkInk">bp, Michelin, and beyond.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="body-lg mt-6 max-w-2xl"
        >
          Design meets engineering. Curiosity meets craft.{" "}
          <span className="easter-egg" data-egg="egg-1" aria-hidden="true">🥚</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#work"
            className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3.5 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:opacity-80 hover:shadow-sm transition-all duration-300"
          >
            See my work
          </a>
          <button
            onClick={onChatOpen}
            className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3.5 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink/5 dark:hover:bg-darkInk/5 transition-all duration-300"
          >
            Ask me anything
          </button>
          <span className="easter-egg self-center" data-egg="egg-2" aria-hidden="true">👾</span>
        </motion.div>
      </div>
    </section>
  )
}
