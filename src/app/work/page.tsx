"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import { projects } from "@/data/projects"

export default function WorkIndex() {
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
          All Projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="heading-xl mb-6"
        >
          Work that <span className="italic">speaks</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-lg mb-16 max-w-2xl"
        >
          A curated selection of projects spanning enterprise design systems, AI-enhanced platforms, and research-driven UX.
        </motion.p>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={`/work/${project.id}`}
                className="group flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 card-hover gap-3"
              >
                <div className="flex-1">
                  <h2 className="font-serif text-xl md:text-2xl group-hover:opacity-60 transition-opacity duration-300">
                    {project.title}
                  </h2>
                  <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray mt-1">
                    {project.role} · {project.timeline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs uppercase tracking-[0.1em] px-2.5 py-1 bg-subtle/50 dark:bg-darkSubtle/50 rounded-full text-warmGray dark:text-darkWarmGray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
