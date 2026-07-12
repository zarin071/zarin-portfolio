"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"

const experiments = [
  {
    id: "birthdate",
    title: "The Day You Arrived",
    description: "Enter your birthdate and travel back to the exact day you joined the world — the #1 song, weather, world events, leaders, your zodiac and more.",
    tag: "Interactive",
    src: "https://zarin071.github.io/Birthdate",
  },
]

export default function Playground() {
  const [chatOpen, setChatOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />

      <main className="min-h-screen pt-32 section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label"
        >
          Playground
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-syne font-medium text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight mb-6"
        >
          Experiments & <span className="font-serif italic font-normal">prototypes</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-lg mb-16 max-w-2xl text-warmGray dark:text-darkWarmGray"
        >
          A sandbox for interactive work at the intersection of design and code.
        </motion.p>

        <div className="space-y-8">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div>
                  <span className="inline-block font-sans text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 border border-subtle dark:border-darkSubtle rounded-full text-warmGray dark:text-darkWarmGray mb-3">
                    {exp.tag}
                  </span>
                  <h2 className="font-syne font-medium text-2xl text-ink dark:text-darkInk mb-1">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-warmGray dark:text-darkWarmGray max-w-xl">
                    {exp.description}
                  </p>
                </div>
                <button
                  onClick={() => setActive(active === exp.id ? null : exp.id)}
                  className="shrink-0 font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                >
                  {active === exp.id ? "Close" : "Launch →"}
                </button>
              </div>

              {/* Iframe embed */}
              {active === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 720 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  className="rounded-2xl overflow-hidden border border-subtle dark:border-darkSubtle"
                >
                  <iframe
                    src={exp.src}
                    title={exp.title}
                    className="w-full h-full"
                    style={{ height: 720 }}
                    loading="lazy"
                    allow="fullscreen"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
