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

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15])

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
      <section ref={sectionRef} className="pt-28 md:pt-32 pb-4">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
            >
              <span>←</span> All projects
            </Link>
          </motion.div>

          {/* Cover art — mirrors the Work cards */}
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity, background: project.cover ?? "#E5E5E5" }}
            className="relative mt-6 rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9]"
          >
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-12 right-0 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
            {project.coverLabel && (
              <span className="absolute bottom-5 left-5 font-sans text-xs uppercase tracking-[0.12em] text-ink/70">
                {project.coverLabel}
              </span>
            )}
          </motion.div>

          {/* Title + meta */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-10 max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-subtle/60 dark:bg-darkSubtle/60 rounded-full text-warmGray dark:text-darkWarmGray"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={fadeUp} className="heading-xl text-balance mb-4">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="body-lg mb-3 max-w-2xl">
              {project.subtitle}
            </motion.p>

            <motion.p variants={fadeUp} className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray">
              {project.role} · {project.timeline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
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
      </section>

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
