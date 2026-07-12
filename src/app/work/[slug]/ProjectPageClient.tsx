"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useRef, useState } from "react"
import { projects, type Benefit, type Persona, type Phase, type Discovery } from "@/data/projects"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import PasswordGate from "@/components/PasswordGate"

type Project = NonNullable<ReturnType<typeof projects.find>>

function HeroSection({ project, stagger, fadeUp }: {
  project: Project
  stagger: Variants
  fadeUp: Variants
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15])

  return (
    <section ref={sectionRef} className="pt-28 md:pt-32 pb-4">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/work"
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
  )
}

export default function ProjectPageClient() {
  const params = useParams()
  const [chatOpen, setChatOpen] = useState(false)
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return (
      <html>
        <body className="min-h-screen bg-cream dark:bg-darkBg flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-xl mb-4">Project not found</h1>
            <Link href="/work" className="text-accent hover:underline">← Back to work</Link>
          </div>
        </body>
      </html>
    )
  }

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />

      <PasswordGate id={project.id} password={project.password} title={project.title}>

        {/* ── Hero ── */}
        <HeroSection project={project} stagger={stagger} fadeUp={fadeUp} />

        {/* ── Content ── */}
        <section className="section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-24"
          >
            {/* Overview */}
            {project.overview && (
              <motion.div variants={fadeUp}>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-4">
                  Overview
                </p>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink dark:text-darkInk text-balance">
                  {project.overview}
                </p>
              </motion.div>
            )}

            {/* Origin */}
            {project.origin && project.origin.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp}>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-6">
                    Origin
                  </p>
                  <div className="space-y-5">
                    {project.origin.map((para, i) => (
                      <p key={i} className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

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

            {/* Discovery */}
            {project.discovery && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      Discovery
                    </p>
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                      {project.discovery.summary}
                    </p>
                    {project.discovery.questions.length > 0 && (
                      <ul className="space-y-3">
                        {project.discovery.questions.map((q, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span className="font-sans text-base leading-relaxed text-warmGray dark:text-darkWarmGray">
                              {q}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </>
            )}

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

            {/* Personas */}
            {project.personas && project.personas.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      Who it&apos;s for
                    </p>
                  </div>
                  <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                    {project.personas.map((persona: Persona) => (
                      <div
                        key={persona.role}
                        className="p-6 bg-subtle/20 dark:bg-darkSubtle/20 rounded-2xl border border-subtle/50 dark:border-darkSubtle/50"
                      >
                        <p className="font-sans text-xs uppercase tracking-[0.15em] text-accent mb-1">
                          {persona.role}
                        </p>
                        <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray mb-3">
                          {persona.scope}
                        </p>
                        <p className="font-serif text-base leading-relaxed text-ink dark:text-darkInk">
                          {persona.need}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

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

            {/* What it offers */}
            {project.offers && project.offers.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none">
                      04
                    </span>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      What it offers
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="space-y-4">
                      {project.offers.map((item) => (
                        <li key={item} className="flex gap-4 items-start">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                          <span className="font-serif text-lg md:text-xl leading-relaxed text-ink dark:text-darkInk">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </>
            )}

            {/* Benefits */}
            {project.benefits && project.benefits.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none">
                      05
                    </span>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      Benefits
                    </p>
                  </div>
                  <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                    {project.benefits.map((benefit: Benefit) => (
                      <div
                        key={benefit.audience}
                        className="p-6 bg-subtle/20 dark:bg-darkSubtle/20 rounded-2xl border border-subtle/50 dark:border-darkSubtle/50"
                      >
                        <p className="font-sans text-xs uppercase tracking-[0.15em] text-accent mb-2">
                          {benefit.audience}
                        </p>
                        <p className="font-serif text-base leading-relaxed text-ink dark:text-darkInk">
                          {benefit.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Soundbites */}
            {project.soundbites && project.soundbites.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none">
                      06
                    </span>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      Feedback
                    </p>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    {project.soundbites.map((quote) => (
                      <blockquote
                        key={quote}
                        className="pl-5 border-l-2 border-accent/40 font-serif text-lg leading-relaxed text-ink dark:text-darkInk italic"
                      >
                        &ldquo;{quote}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Roadmap */}
            {project.roadmap && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span className="font-serif text-7xl md:text-8xl text-accent/20 dark:text-accent/30 font-bold leading-none">
                      07
                    </span>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                      Roadmap
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk">
                      {project.roadmap}
                    </p>
                  </div>
                </motion.div>
              </>
            )}

            {/* Phases */}
            {project.phases && project.phases.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp}>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-8">
                    What&apos;s next
                  </p>
                  <div className="space-y-6">
                    {project.phases.map((phase: Phase) => (
                      <div
                        key={phase.name}
                        className={`p-6 md:p-8 rounded-2xl border ${
                          phase.status === "current"
                            ? "bg-accent/5 dark:bg-accent/10 border-accent/20"
                            : "bg-subtle/20 dark:bg-darkSubtle/20 border-subtle/50 dark:border-darkSubtle/50"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-sans text-xs uppercase tracking-[0.15em] text-accent">
                            {phase.name}
                          </span>
                          <span className={`font-sans text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full ${
                            phase.status === "current"
                              ? "bg-accent/15 text-accent"
                              : phase.status === "next"
                              ? "bg-warmGray/15 dark:bg-darkWarmGray/15 text-warmGray dark:text-darkWarmGray"
                              : "bg-subtle dark:bg-darkSubtle text-warmGray/60 dark:text-darkWarmGray/60"
                          }`}>
                            {phase.status === "current" ? "Now" : phase.status === "next" ? "Next" : "Future"}
                          </span>
                        </div>
                        <p className="font-serif text-xl md:text-2xl text-ink dark:text-darkInk mb-3">
                          {phase.title}
                        </p>
                        <p className="font-sans text-base leading-relaxed text-warmGray dark:text-darkWarmGray mb-4">
                          {phase.summary}
                        </p>
                        <ul className="space-y-2">
                          {phase.items.map((item) => (
                            <li key={item} className="flex gap-3 items-start">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span className="font-sans text-sm leading-relaxed text-warmGray dark:text-darkWarmGray">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Links */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center pt-8">
              <Link
                href="/work"
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

      </PasswordGate>

      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
