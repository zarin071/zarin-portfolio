"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { projects } from "@/data/projects"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import { useState } from "react"

function ProjectPage() {
  const params = useParams()
  const [chatOpen, setChatOpen] = useState(false)
  const project = projects.find((p) => p.id === params.slug)

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  if (!project) {
    return (
      <html>
        <body className="min-h-screen bg-cream dark:bg-darkBg flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-xl mb-4">Project not found</h1>
            <Link href="/#work" className="text-accent hover:underline">← Back to work</Link>
          </div>
        </body>
      </html>
    )
  }

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />

      {/* ── Hero ── */}
      <motion.section
        ref={sectionRef}
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent dark:from-accent/10" />
        <div className="section-container text-center relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-accent/10 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={fadeUp} className="heading-xl text-balance mb-4">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="font-sans text-lg md:text-xl text-warmGray dark:text-darkWarmGray mb-3">
              {project.subtitle}
            </motion.p>

            <motion.p variants={fadeUp} className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray">
              {project.role} · {project.timeline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/#work"
                className="font-sans text-sm uppercase tracking-[0.15em] px-6 py-2.5 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink/5 dark:hover:bg-darkInk/5 transition-all"
              >
                ← All projects
              </Link>
              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm uppercase tracking-[0.15em] px-6 py-2.5 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:opacity-80 hover:shadow-sm transition-all"
                >
                  View case study ↗
                </a>
              )}
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm uppercase tracking-[0.15em] px-6 py-2.5 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink/5 dark:hover:bg-darkInk/5 transition-all"
                >
                  Live project ↗
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-ink/20 dark:border-darkWarmGray/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-ink/40 dark:bg-darkWarmGray/30 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* ── Content ── */}
      <section className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-24"
        >
          {/* Problem */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none"
              >
                01
              </motion.span>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                Problem
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                {project.problem}
              </p>
            </div>
          </motion.div>

          <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />

          {/* Approach */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none"
              >
                02
              </motion.span>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                Approach
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                {project.approach}
              </p>
            </div>
          </motion.div>

          <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />

          {/* Impact */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none"
              >
                03
              </motion.span>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                Impact
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="p-6 md:p-8 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/10">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                  {project.impact}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center pt-8">
            <Link
              href="/#work"
              className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink/5 dark:hover:bg-darkInk/5 transition-all"
            >
              ← Back to all projects
            </Link>
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:opacity-80 hover:shadow-sm transition-all"
              >
                View full case study ↗
              </a>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 bg-accent text-cream rounded-full hover:opacity-80 hover:shadow-sm transition-all"
              >
                Visit live project ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}

export default function Page() {
  return <ProjectPage />
}
