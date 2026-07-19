"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const GLITCHES = ["4̷0̸4̵", "4⁰4", "¿404?", "404̲", "4·0·4"]

const MESSAGES = [
  "This page ghosted you.",
  "Design: perfect. URL: not so much.",
  "Even Figma can't find this frame.",
  "You've entered the void between components.",
  "No prototype here. Just vibes.",
]

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Playground", href: "/playground" },
  { label: "Contact", href: "/#contact" },
]

export default function NotFound() {
  const [glitch, setGlitch] = useState(GLITCHES[0])
  const [msg] = useState(() => MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
  const [chatOpen, setChatOpen] = useState(false)

  // Cycle through glitch variants
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % GLITCHES.length
      setGlitch(GLITCHES[i])
    }, 600)
    return () => clearInterval(id)
  }, [])

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Big glitchy number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative select-none"
        >
          {/* Shadow layer */}
          <span
            aria-hidden="true"
            className="absolute inset-0 font-syne font-semibold text-[clamp(8rem,22vw,18rem)] leading-none text-accent/20 dark:text-accent/15 blur-sm translate-x-1 translate-y-1 pointer-events-none"
          >
            404
          </span>
          {/* Glitch number */}
          <motion.span
            key={glitch}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08 }}
            className="relative font-syne font-semibold text-[clamp(8rem,22vw,18rem)] leading-none text-ink dark:text-darkInk tracking-tighter"
          >
            {glitch}
          </motion.span>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-[clamp(1.25rem,3vw,2rem)] text-warmGray dark:text-darkWarmGray mt-2 mb-10"
        >
          {msg}
        </motion.p>

        {/* Breadcrumb links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {CRUMBS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="font-sans text-sm px-5 py-2.5 rounded-full border border-subtle dark:border-darkSubtle text-warmGray dark:text-darkWarmGray hover:border-ink dark:hover:border-darkInk hover:text-ink dark:hover:text-darkInk transition-all duration-200"
            >
              {c.label}
            </Link>
          ))}
        </motion.div>

        {/* Little easter egg hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-sans text-[11px] uppercase tracking-[0.18em] text-warmGray/40 dark:text-darkWarmGray/30"
        >
          psst — there are 10 eggs hidden on the homepage 🥚
        </motion.p>
      </main>

      <Footer />
    </ThemeProvider>
  )
}
