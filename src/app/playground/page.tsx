"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"

const experiments = [
  {
    title: "Coming Soon",
    description: "Interactive prototypes and UI experiments will live here. Built with Framer, React, and a touch of curiosity.",
    status: "In Progress",
  },
]

export default function Playground() {
  const [chatOpen, setChatOpen] = useState(false)

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
          className="heading-xl mb-6"
        >
          Experiments & <span className="italic">prototypes</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-lg mb-16 max-w-2xl"
        >
          A sandbox for interactive experiments at the intersection of design and code.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-8 card bg-subtle/20 dark:bg-darkSubtle/20"
            >
              <span className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-accent/10 text-accent rounded-full">
                {exp.status}
              </span>
              <h2 className="font-serif text-2xl mt-4 mb-3 text-ink dark:text-darkInk">{exp.title}</h2>
              <p className="body-base">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
