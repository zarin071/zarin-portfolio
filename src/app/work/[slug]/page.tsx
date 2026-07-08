"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { projects, type Benefit, type Persona, type Phase } from "@/data/projects"
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
            <Link href="/#work" className="text-ink dark:text-darkInk hover:underline">← Back to work</Link>
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

  // Section numbers are assigned in render order, so optional sections
  // (offers, personas, benefits, feedback, roadmap) renumber cleanly.
  const sectionOrder = [
    "problem",
    ...(project.discovery ? ["discovery"] : []),
    "approach",
    "impact",
    ...(project.offers?.length ? ["offers"] : []),
    ...(project.personas?.length ? ["personas"] : []),
    ...(project.benefits?.length ? ["benefits"] : []),
    ...(project.roadmap || project.phases?.length ? ["roadmap"] : []),
    ...(project.soundbites?.length ? ["soundbites"] : []),
  ]
  const num = (key: string) => String(sectionOrder.indexOf(key) + 1).padStart(2, "0")

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
            className="mt-10 w-full"
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
          className="w-full space-y-24"
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

          {/* Origin (unnumbered narrative — styled as a standout panel) */}
          {project.origin && project.origin.length > 0 && (
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl border border-ink/10 dark:border-darkInk/15 bg-ink/[0.03] dark:bg-darkInk/[0.06] p-8 md:p-12 overflow-hidden"
            >
              <span aria-hidden className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-ink/30 dark:bg-darkInk/30" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink dark:text-darkInk mb-6">
                Origin — how DASH started
              </p>
              <div className="space-y-5 w-full">
                {project.origin.map((para, i) => (
                  <p
                    key={i}
                    className={`font-serif leading-relaxed text-ink dark:text-darkInk ${
                      i === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Problem */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none"
              >
                {num("problem")}
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

          {/* Discovery */}
          {project.discovery && (
            <>
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("discovery")}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                    Discovery
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk mb-6">
                    {project.discovery.summary}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray mb-3">
                    What we asked leaders
                  </p>
                  <ul className="space-y-3">
                    {project.discovery.questions.map((q) => (
                      <li key={q} className="flex gap-4 items-start">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-ink dark:bg-darkInk shrink-0" />
                        <span className="font-serif text-base md:text-lg leading-relaxed text-ink dark:text-darkInk">
                          {q}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
            </>
          )}

          {/* Approach */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none"
              >
                {num("approach")}
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
                className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none"
              >
                {num("impact")}
              </motion.span>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                Impact
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="p-6 md:p-8 bg-ink/[0.04] dark:bg-darkInk/[0.06] rounded-2xl border border-ink/10 dark:border-darkInk/15">
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
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("offers")}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                    What it offers
                  </p>
                </div>
                <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                  {project.offers.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 items-start p-5 rounded-2xl border border-subtle/60 dark:border-darkSubtle/60 bg-subtle/20 dark:bg-darkSubtle/20 hover:border-ink/40 dark:hover:border-darkInk/40 transition-colors"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-ink dark:bg-darkInk shrink-0" />
                      <span className="font-serif text-base md:text-lg leading-relaxed text-ink dark:text-darkInk">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {/* Personas */}
          {project.personas && project.personas.length > 0 && (
            <>
              <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("personas")}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                    Personas
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray mb-6">
                    Built for the delivery leadership ladder — escalating from VP all the way up to the CEO.
                  </p>
                  <ol className="relative space-y-6 border-l border-subtle dark:border-darkSubtle pl-6">
                    {project.personas.map((persona: Persona) => (
                      <li key={persona.role} className="relative">
                        <span className="absolute -left-[1.95rem] top-1.5 w-3.5 h-3.5 rounded-full bg-ink dark:bg-darkInk ring-4 ring-cream dark:ring-darkBg" />
                        <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
                          <h3 className="font-syne font-semibold text-xl md:text-2xl tracking-tight text-ink dark:text-darkInk">
                            {persona.role}
                          </h3>
                          <p className="font-sans text-xs uppercase tracking-[0.12em] text-warmGray dark:text-darkWarmGray">
                            {persona.scope}
                          </p>
                        </div>
                        <p className="font-serif text-base md:text-lg leading-relaxed text-ink dark:text-darkInk">
                          {persona.need}
                        </p>
                      </li>
                    ))}
                  </ol>
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
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("benefits")}
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
                      <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink dark:text-darkInk mb-2">
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

          {/* Roadmap / MVP phases */}
          {(project.roadmap || (project.phases && project.phases.length > 0)) && (
            <>
              <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("roadmap")}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                    MVP roadmap
                  </p>
                </div>
                <div className="md:col-span-2">
                  {project.roadmap && (
                    <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink dark:text-darkInk mb-8">
                      {project.roadmap}
                    </p>
                  )}
                  {project.phases && project.phases.length > 0 && (
                    <ol className="relative space-y-5 border-l border-subtle dark:border-darkSubtle pl-6">
                      {project.phases.map((phase: Phase) => {
                        const isCurrent = phase.status === "current"
                        const statusLabel = {
                          shipped: "Shipped",
                          current: "Current",
                          next: "Next",
                          future: "Future",
                        }[phase.status]
                        return (
                          <li key={phase.name} className="relative">
                            <span
                              className={`absolute -left-[1.9rem] top-1.5 w-3 h-3 rounded-full ring-4 ring-cream dark:ring-darkBg ${
                                isCurrent ? "bg-ink dark:bg-darkInk" : "bg-subtle dark:bg-darkSubtle"
                              }`}
                            />
                            <div
                              className={`p-5 rounded-2xl border ${
                                isCurrent
                                  ? "border-ink/25 dark:border-darkInk/30 bg-ink/[0.04] dark:bg-darkInk/[0.06]"
                                  : "border-subtle/60 dark:border-darkSubtle/60 bg-subtle/10 dark:bg-darkSubtle/10"
                              }`}
                            >
                              <div className="flex items-center gap-3 flex-wrap mb-1.5">
                                <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink dark:text-darkInk">
                                  {phase.name}
                                </p>
                                <span className="font-sans text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border border-subtle dark:border-darkSubtle text-warmGray dark:text-darkWarmGray">
                                  {statusLabel}
                                </span>
                              </div>
                              <p className="font-serif text-lg text-ink dark:text-darkInk mb-2">
                                {phase.title}
                              </p>
                              <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray leading-relaxed">
                                {phase.summary}
                              </p>
                              {phase.items && phase.items.length > 0 && (
                                <ul className="mt-3 space-y-1.5">
                                  {phase.items.map((item) => (
                                    <li key={item} className="flex gap-2.5 items-start">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink/50 dark:bg-darkInk/50 shrink-0" />
                                      <span className="font-sans text-sm text-ink/80 dark:text-darkInk/80">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ol>
                  )}
                </div>
              </motion.div>
            </>
          )}

          {/* Feedback — moved to the bottom, each quote highlighted separately */}
          {project.soundbites && project.soundbites.length > 0 && (
            <>
              <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
              <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="font-serif text-7xl md:text-8xl text-ink/20 dark:text-darkInk/25 font-bold leading-none">
                    {num("soundbites")}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mt-2">
                    Feedback
                  </p>
                </div>
                <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                  {project.soundbites.map((quote) => (
                    <blockquote
                      key={quote}
                      className="p-5 rounded-2xl bg-subtle/25 dark:bg-darkSubtle/25 border border-subtle/60 dark:border-darkSubtle/60 font-serif text-base leading-relaxed text-ink dark:text-darkInk italic"
                    >
                      <span className="not-italic text-ink dark:text-darkInk text-2xl leading-none mr-0.5 align-[-0.2em]">&ldquo;</span>
                      {quote}
                      &rdquo;
                    </blockquote>
                  ))}
                </div>
              </motion.div>
            </>
          )}

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
                className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:opacity-80 hover:shadow-sm transition-all"
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
