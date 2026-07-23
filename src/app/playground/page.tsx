"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, type FormEvent } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import { auditSkills } from "@/data/audit-skills"
import { experiments } from "@/data/playground/index"
import { track } from "@/lib/analytics"
import AnalyticsProvider from "@/components/AnalyticsProvider"

// ─── Audit skills viewer ────────────────────────────────────────────────────

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Experiments that also live as a standalone site — surfaced as an "Open ↗" link.
const EXTERNAL_LINKS: Record<string, string> = {
  "createbot-labs": "https://www.createbotlabs.com/",
  birthdate: "https://zarin071.github.io/Birthdate",
}

const GITHUB_LINKS: Record<string, string> = {
  "createbot-labs": "https://github.com/zarin071/createbots",
}

// Experiments whose "View →" button opens the external link directly (no inline expand).
const OPEN_EXTERNALLY = new Set(["createbot-labs"])

const FREE_SKILLS = new Set(["ux-copy-reviewer", "design-critique-partner"])

const CONTACT_EMAIL = "zarinsolanki.work@gmail.com"

// ─── Access control: "Have password?" + "Get access" ────────────────────────
// Two options — enter a password to unlock now, or request access by email.

function AccessControl({
  subject,
  password,
  onUnlock,
}: {
  subject: string
  password?: string
  onUnlock: () => void
}) {
  const [showInput, setShowInput] = useState(false)
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (password && value.trim() === password) {
      setError(false)
      onUnlock()
    } else {
      setError(true)
    }
  }

  if (showInput) {
    return (
      <form onSubmit={submit} className="flex w-full max-w-xs flex-col items-center gap-2.5">
        <div className="flex w-full gap-2">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder="Enter password"
            aria-label="Access password"
            aria-invalid={error}
            className="min-w-0 flex-1 rounded-full border border-subtle bg-subtle/40 px-4 py-2.5 font-sans text-sm text-ink transition-colors placeholder:text-warmGray/60 focus:border-accent focus:outline-none dark:border-darkSubtle dark:bg-darkSubtle/40 dark:text-darkInk dark:placeholder:text-darkWarmGray/60"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-cream transition-opacity hover:opacity-80 dark:bg-darkInk dark:text-darkBg"
          >
            Unlock
          </button>
        </div>
        {error && (
          <p className="font-sans text-xs text-red-500" role="alert">Incorrect password — try again.</p>
        )}
        <div className="flex items-center gap-3 font-sans text-xs">
          <button
            type="button"
            onClick={() => { setShowInput(false); setError(false); setValue("") }}
            className="text-warmGray transition-colors hover:text-ink dark:text-darkWarmGray dark:hover:text-darkInk"
          >
            ← Back
          </button>
          <span className="text-warmGray/40">·</span>
          <a href={mailto} className="text-accent hover:underline">Request access →</a>
        </div>
      </form>
    )
  }

  return (
    <div className="flex flex-col items-center gap-2.5">
      {password && (
        <button
          type="button"
          onClick={() => setShowInput(true)}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-cream transition-opacity hover:opacity-80 dark:bg-darkInk dark:text-darkBg"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Have a password?
        </button>
      )}
      <a
        href={mailto}
        className="font-sans text-xs text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
      >
        Request access →
      </a>
    </div>
  )
}

function AuditToolkit({ password }: { password?: string }) {
  const [selected, setSelected] = useState("design-critique-partner")
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const skill = auditSkills.find((s) => s.id === selected)!
  const viewable = FREE_SKILLS.has(selected) || unlocked

  useEffect(() => {
    try {
      if (sessionStorage.getItem("zp-unlocked:audit") === "1") setUnlocked(true)
    } catch { /* sessionStorage unavailable */ }
  }, [])

  const unlock = () => {
    try { sessionStorage.setItem("zp-unlocked:audit", "1") } catch { /* ignore */ }
    setUnlocked(true)
  }

  useEffect(() => {
    if (!viewable) return
    if (content[selected]) return
    setLoading(true)
    fetch(`${base}/audit-skills/${skill.file}`)
      .then((r) => r.text())
      .then((text) => {
        setContent((prev) => ({ ...prev, [selected]: text }))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [selected, skill.file, content, viewable])

  const copy = async () => {
    const text = content[selected]
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const daily = auditSkills.filter((s) => s.type === "daily")
  const quarterly = auditSkills.filter((s) => s.type === "quarterly")

  return (
    <div className="mt-6 rounded-2xl border border-subtle dark:border-darkSubtle overflow-hidden" style={{ height: 640 }}>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-56 shrink-0 border-r border-subtle dark:border-darkSubtle overflow-y-auto flex flex-col bg-subtle/10 dark:bg-darkSubtle/10">
          <div className="px-4 pt-4 pb-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray mb-2">Daily</p>
            {daily.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg mb-0.5 text-xs transition-all ${
                  selected === s.id
                    ? "bg-ink dark:bg-darkInk text-cream dark:text-darkBg font-medium"
                    : "text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk hover:bg-subtle/40 dark:hover:bg-darkSubtle/40"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="px-4 pt-3 pb-4">
            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray mb-2">Quarterly</p>
            {quarterly.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg mb-0.5 text-xs transition-all ${
                  selected === s.id
                    ? "bg-ink dark:bg-darkInk text-cream dark:text-darkBg font-medium"
                    : "text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk hover:bg-subtle/40 dark:hover:bg-darkSubtle/40"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content pane */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center justify-between px-6 py-3 border-b border-subtle dark:border-darkSubtle shrink-0">
            <div>
              <p className="font-syne font-medium text-sm text-ink dark:text-darkInk">{skill.name}</p>
              <p className="text-xs text-warmGray dark:text-darkWarmGray">{skill.description}</p>
            </div>
            {viewable && (
              <button
                onClick={copy}
                className="shrink-0 ml-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle dark:border-darkSubtle text-xs text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk hover:border-ink/30 dark:hover:border-darkInk/30 transition-all"
              >
                {copied ? (
                  <>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M8 4V2a1 1 0 00-1-1H2a1 1 0 00-1 1v5a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                    Copy skill
                  </>
                )}
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {!viewable ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="w-10 h-10 rounded-xl border border-subtle dark:border-darkSubtle flex items-center justify-center text-warmGray dark:text-darkWarmGray">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="font-syne font-medium text-sm text-ink dark:text-darkInk mb-1">{skill.name}</p>
                  <p className="text-xs text-warmGray dark:text-darkWarmGray max-w-xs">
                    Locked. Enter the password to unlock all 11 skills, or request access.
                  </p>
                </div>
                <AccessControl subject={`Access request — Design System Audit Toolkit`} password={password} onUnlock={unlock} />
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center h-full">
                <span className="w-4 h-4 rounded-full border border-current border-t-transparent animate-spin text-warmGray" />
              </div>
            ) : (
              <pre className="font-mono text-xs leading-relaxed text-ink/80 dark:text-darkInk/80 whitespace-pre-wrap break-words">
                {content[selected] ?? ""}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Analytics agent overview ────────────────────────────────────────────────

function AnalyticsAgent({ password }: { password?: string }) {
  const unlock = () => {
    window.open("https://github.com/zarin071/AI-analytics-agent", "_blank", "noopener,noreferrer")
  }

  const capabilities = [
    { label: "Event tracking", detail: "Validation, naming standard, auto-taxonomy" },
    { label: "Sessions & profiles", detail: "Identity stitching, user timelines" },
    { label: "Funnels, retention, cohorts", detail: "Journeys, adoption, conversion, churn prediction" },
    { label: "Anomaly detection", detail: "AI root-cause analysis with query evidence" },
    { label: "Natural-language queries", detail: "Ask the agent; it calls real engines for answers" },
    { label: "Dashboard", detail: "Event Explorer, Funnels, Retention, AI Chat" },
    { label: "Connectors", detail: "Slack, webhooks, BigQuery, plugin system" },
  ]

  return (
    <div className="mt-6 rounded-2xl border border-subtle dark:border-darkSubtle overflow-hidden">
      <div className="px-8 py-8">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray mb-2">Architecture</p>
            <code className="font-mono text-xs text-ink/70 dark:text-darkInk/70 bg-subtle/40 dark:bg-darkSubtle/40 px-3 py-1.5 rounded-lg block">
              SDK → Agent → Database → Dashboard → AI Insights
            </code>
          </div>
          <div className="shrink-0">
            <AccessControl subject="Access request — AI Analytics Agent Platform" password={password} onUnlock={unlock} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {capabilities.map((c) => (
            <div key={c.label} className="flex gap-3 p-4 rounded-xl border border-subtle dark:border-darkSubtle">
              <div className="w-1.5 h-1.5 rounded-full bg-ink dark:bg-darkInk mt-1.5 shrink-0" />
              <div>
                <p className="font-sans text-sm font-medium text-ink dark:text-darkInk">{c.label}</p>
                <p className="text-xs text-warmGray dark:text-darkWarmGray mt-0.5">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-subtle/30 dark:bg-darkSubtle/30 border border-subtle dark:border-darkSubtle">
          <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray">
            <span className="font-medium text-ink dark:text-darkInk">Stack:</span>{" "}
            Node 20 · PostgreSQL · Claude API · React Dashboard · Docker · pnpm workspaces
          </p>
        </div>

      </div>
    </div>
  )
}

// ─── Contact CTA ─────────────────────────────────────────────────────────────

function ContactCTA({ label }: { label: string }) {
  return (
    <div className="mt-5 p-4 rounded-xl bg-subtle/30 dark:bg-darkSubtle/30 border border-subtle dark:border-darkSubtle flex items-center justify-between gap-4">
      <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray">
        {label}
      </p>
      <a
        href="mailto:zarinsolanki.work@gmail.com"
        className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink dark:bg-darkInk text-cream dark:text-darkBg text-xs font-medium hover:opacity-80 transition-opacity"
      >
        Contact me →
      </a>
    </div>
  )
}

// ─── Playground page ─────────────────────────────────────────────────────────

export default function Playground() {
  const [chatOpen, setChatOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  return (
    <ThemeProvider>
      <AnalyticsProvider page="playground" />
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

        <div className="space-y-10">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block font-sans text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 border border-subtle dark:border-darkSubtle rounded-full text-warmGray dark:text-darkWarmGray">
                      {exp.tag}
                    </span>
                  </div>
                  <h2 className="font-syne font-medium text-2xl text-ink dark:text-darkInk mb-1">{exp.title}</h2>
                  <p className="text-sm text-warmGray dark:text-darkWarmGray max-w-2xl">{exp.description}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  {GITHUB_LINKS[exp.id] && (
                    <a
                      href={GITHUB_LINKS[exp.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {EXTERNAL_LINKS[exp.id] && (
                    <a
                      href={EXTERNAL_LINKS[exp.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                    >
                      Open ↗
                    </a>
                  )}
                  {OPEN_EXTERNALLY.has(exp.id) ? (
                    <a
                      href={EXTERNAL_LINKS[exp.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("experiment_opened", { experiment: exp.id })}
                      className="font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                    >
                      View →
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        const next = active === exp.id ? null : exp.id
                        setActive(next)
                        if (next) track("experiment_opened", { experiment: exp.id })
                      }}
                      className="font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                    >
                      {active === exp.id ? "Close" : "View →"}
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {active === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  >
                    {exp.id === "birthdate" && (
                      <div
                        className="mt-6 rounded-2xl overflow-hidden border border-subtle dark:border-darkSubtle"
                        style={{ height: 720 }}
                      >
                        <iframe
                          src="https://zarin071.github.io/Birthdate"
                          title="The Day You Arrived"
                          className="w-full h-full"
                          style={{ height: 720 }}
                          loading="lazy"
                          allow="fullscreen"
                        />
                      </div>
                    )}

                    {exp.id === "analytics" && (
                      <>
                        <AnalyticsAgent password={exp.password} />
                        <ContactCTA label="Want to deploy this in your product or explore a collaboration?" />
                      </>
                    )}

                    {exp.id === "audit" && (
                      <>
                        <AuditToolkit password={exp.password} />
                        <ContactCTA label="Want the full toolkit configured for your design system?" />
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {i < experiments.length - 1 && (
                <div className="mt-10 border-t border-subtle dark:border-darkSubtle" />
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
