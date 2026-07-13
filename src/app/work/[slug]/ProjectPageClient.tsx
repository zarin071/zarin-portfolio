"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { projects, type Benefit, type Persona, type Phase, type Discovery, type Chapter, type Figure, type ProcessStep } from "@/data/projects"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import PasswordGate from "@/components/PasswordGate"

type Project = NonNullable<ReturnType<typeof projects.find>>

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const withBase = (s?: string) => (s ? (s.startsWith("/") ? `${base}${s}` : s) : null)

/* Gallery — a responsive grid of image cards with hover, plus an accessible
   lightbox (prev/next, keyboard, focus trap) that shows each board full size,
   fit to width and scrollable for the tall documentation boards. */
function Gallery({ figures, tag }: { figures: Figure[]; tag?: string }) {
  const imgs = figures.filter((f) => f.src)
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const [shown, setShown] = useState(false)
  const lastFocus = useRef<HTMLElement | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const openAt = (fig: Figure) => {
    const i = imgs.indexOf(fig)
    if (i < 0) return
    lastFocus.current = document.activeElement as HTMLElement
    setIdx(i)
    setOpen(true)
  }
  const close = () => {
    setShown(false)
    window.setTimeout(() => {
      setOpen(false)
      if (lastFocus.current) lastFocus.current.focus()
    }, 240)
  }
  const step = (d: number) => setIdx((i) => (i + d + imgs.length) % imgs.length)

  useEffect(() => {
    if (!open) return
    const raf = requestAnimationFrame(() => setShown(true))
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close() }
      else if (e.key === "ArrowRight") { e.preventDefault(); step(1) }
      else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1) }
      else if (e.key === "Tab") {
        const f = [document.getElementById("lb-prev"), document.getElementById("lb-next"), document.getElementById("lb-close")].filter(Boolean) as HTMLElement[]
        if (f.length < 2) return
        const first = f[0], last = f[f.length - 1]
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, imgs.length])

  // reset scroll to the top of each newly-selected board
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0 }, [idx])

  const cur = imgs[idx]
  const curSrc = cur ? withBase(cur.src) : null
  const curDark = cur ? withBase(cur.srcDark) : null
  const curLabel = cur ? (cur.caption ?? cur.alt) : ""

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {figures.map((fig) => {
          const src = withBase(fig.src)
          const srcDark = withBase(fig.srcDark)
          const label = fig.caption ?? fig.alt
          if (!src) {
            return (
              <div key={fig.alt} role="listitem" className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-subtle dark:border-darkSubtle bg-subtle/30 p-6 text-center dark:bg-darkSubtle/30">
                <span className="font-serif text-sm text-warmGray dark:text-darkWarmGray">{fig.placeholder ?? fig.alt}</span>
              </div>
            )
          }
          return (
            <button
              key={fig.alt}
              type="button"
              role="listitem"
              onClick={() => openAt(fig)}
              aria-label={`View ${label}`}
              className="group/card relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-subtle/60 bg-subtle/30 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-darkSubtle/60 dark:bg-darkSubtle/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={fig.alt} loading="lazy" className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105 motion-reduce:transition-none motion-reduce:group-hover/card:scale-100 ${srcDark ? "dark:hidden" : ""}`} />
              {srcDark && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={srcDark} alt="" aria-hidden="true" className="absolute inset-0 hidden h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105 dark:block" />
              )}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover/card:opacity-100" />
              {tag && (
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">{tag}</span>
              )}
              <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-500 group-hover/card:translate-y-0">
                <span className="line-clamp-2 text-sm font-medium text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">{label}</span>
              </span>
            </button>
          )
        })}
      </div>

      {open && cur && typeof document !== "undefined" && createPortal(
        <div
          className={`fixed inset-0 z-[9999] flex flex-col bg-black/70 backdrop-blur-xl transition-opacity duration-300 ${shown ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${curLabel}, image ${idx + 1} of ${imgs.length}`}
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <div className="relative z-10 flex items-center justify-between gap-4 px-4 py-3 text-cream md:px-6">
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{curLabel}</div>
              <div className="mt-0.5 text-xs text-cream/60 tabular-nums">{idx + 1} / {imgs.length}{tag ? `  ·  ${tag}` : ""}</div>
            </div>
            <button ref={closeRef} id="lb-close" type="button" onClick={close} aria-label="Close viewer (Escape)" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12 text-cream transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {imgs.length > 1 && (
            <>
              <button id="lb-prev" type="button" onClick={() => step(-1)} aria-label="Previous image (Left arrow)" className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-cream transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:left-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18 9 12l6-6" /></svg>
              </button>
              <button id="lb-next" type="button" onClick={() => step(1)} aria-label="Next image (Right arrow)" className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-cream transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:right-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </>
          )}

          <div ref={scrollRef} className="relative flex-1 overflow-y-auto overscroll-contain px-3 pb-10 md:px-20" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={idx}
              src={curSrc ?? undefined}
              alt={cur.alt}
              className={`mx-auto block w-full max-w-5xl rounded-lg shadow-2xl transition-all duration-300 ${shown ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${curDark ? "dark:hidden" : ""}`}
            />
            {curDark && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`d${idx}`}
                src={curDark}
                alt={cur.alt}
                className={`mx-auto hidden w-full max-w-5xl rounded-lg shadow-2xl transition-all duration-300 dark:block ${shown ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

const eraBadgeClass: Record<string, string> = {
  past: "bg-subtle dark:bg-darkSubtle text-ink dark:text-darkInk border border-transparent dark:border-darkWarmGray/25",
  current: "bg-accent/15 text-accent",
  future: "bg-warmGray/10 dark:bg-darkInk/40 text-warmGray dark:text-darkInk border border-transparent dark:border-darkWarmGray/25",
}

/* One act of the storyline — era badge, prose, figure grid and takeaways. */
function ChapterBlock({ chapter, fadeUp }: { chapter: Chapter; fadeUp: Variants }) {
  const status = chapter.status ?? "current"
  return (
    <motion.div variants={fadeUp} className="relative grid md:grid-cols-[7rem_1fr] gap-6 md:gap-10">
      {/* Era rail */}
      <div className="flex md:flex-col items-center md:items-start gap-3">
        <span className={`font-sans text-xs font-semibold tracking-[0.12em] px-3 py-1.5 rounded-full ${eraBadgeClass[status] ?? eraBadgeClass.current}`}>
          {chapter.era}
        </span>
        <span className="hidden md:block w-[1px] flex-1 bg-subtle dark:bg-darkSubtle" />
      </div>

      {/* Body */}
      <div className={`pb-4 ${chapter.reserved ? "opacity-90" : ""}`}>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-2">{chapter.kicker}</p>
        <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink dark:text-darkInk mb-5 text-balance">
          {chapter.title}
        </h3>

        <div className="space-y-4 max-w-3xl">
          {chapter.body.map((para, i) => (
            <p key={i} className="font-serif text-lg md:text-xl leading-relaxed text-ink/90 dark:text-darkInk/90">
              {para}
            </p>
          ))}
        </div>

        {chapter.reserved && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-dashed border-warmGray/40 dark:border-darkWarmGray/40 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray">
              Coming soon
            </span>
          </div>
        )}

        {chapter.figures && chapter.figures.length > 0 && (
          <Gallery figures={chapter.figures} tag={chapter.era} />
        )}

        {chapter.highlights && chapter.highlights.length > 0 && (
          <ul className="mt-8 space-y-3">
            {chapter.highlights.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="font-sans text-base leading-relaxed text-warmGray dark:text-darkWarmGray">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

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
      <div className="w-full px-5 md:px-8 lg:px-10">
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
          {project.coverImage ? (
            <>
              {/* Slow Ken Burns drift on the real cover image */}
              <motion.img
                src={project.coverImage.startsWith("/") ? `${base}${project.coverImage}` : project.coverImage}
                alt={`${project.title} cover`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.06, opacity: 0 }}
                animate={{ scale: [1.06, 1.12, 1.06], x: [0, -10, 0], opacity: 1 }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              {/* Legibility scrim for the label */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/30 blur-3xl" />
              <div className="absolute -bottom-12 right-0 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
            </>
          )}
          {project.coverLabel && (
            <span className={`absolute bottom-5 left-5 font-sans text-xs uppercase tracking-[0.12em] ${project.coverImage ? "text-white/90" : "text-ink/70"}`}>
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
        <section className="w-full px-5 md:px-8 lg:px-10 pt-10 pb-20 md:pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full space-y-20 md:space-y-24"
          >
            {/* Overview */}
            {project.overview && (
              <motion.div variants={fadeUp}>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-4">
                  Overview
                </p>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink dark:text-darkInk text-balance max-w-5xl">
                  {project.overview}
                </p>
              </motion.div>
            )}

            {/* Narrative — illustrated storyline timeline */}
            {project.narrative && project.narrative.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp}>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-10">
                    The evolution
                  </p>
                  <div className="space-y-16 md:space-y-20">
                    {project.narrative.map((chapter) => (
                      <ChapterBlock key={chapter.era + chapter.title} chapter={chapter} fadeUp={fadeUp} />
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Process — how it's built (e.g. Claude × Figma MCP) */}
            {project.process && project.process.length > 0 && (
              <>
                <motion.div className="w-full h-[1px] bg-subtle dark:bg-darkSubtle" variants={fadeUp} />
                <motion.div variants={fadeUp}>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-4">
                    How it&apos;s built
                  </p>
                  {project.processTitle && (
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink dark:text-darkInk mb-4 text-balance">
                      {project.processTitle}
                    </h3>
                  )}
                  {project.processIntro && (
                    <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/90 dark:text-darkInk/90 max-w-3xl mb-10">
                      {project.processIntro}
                    </p>
                  )}
                  <div className="space-y-4">
                    {project.process.map((s: ProcessStep) => (
                      <div
                        key={s.step}
                        className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-subtle/20 dark:bg-darkSubtle/20 border border-subtle/50 dark:border-darkSubtle/50"
                      >
                        <span className="font-serif text-3xl md:text-4xl font-bold leading-none text-accent/30 dark:text-accent/40">
                          {s.step}
                        </span>
                        <div>
                          <p className="font-serif text-lg md:text-xl text-ink dark:text-darkInk mb-2">
                            {s.title}
                          </p>
                          <p className="font-sans text-base leading-relaxed text-warmGray dark:text-darkWarmGray">
                            {s.detail}
                          </p>
                          {s.tools && s.tools.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {s.tools.map((t) => (
                                <span
                                  key={t}
                                  className="font-mono text-[11px] tracking-tight px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/15"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
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
                          {(phase.items ?? []).map((item) => (
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
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-start pt-8">
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
