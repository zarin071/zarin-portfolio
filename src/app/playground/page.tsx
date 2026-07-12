"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import { auditSkills } from "@/data/audit-skills"
import { experiments } from "@/data/playground/index"

// ─── Audit skills viewer ────────────────────────────────────────────────────

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function AuditToolkit() {
  const [selected, setSelected] = useState(auditSkills[0].id)
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const skill = auditSkills.find((s) => s.id === selected)!

  useEffect(() => {
    if (content[selected]) return
    setLoading(true)
    fetch(`${base}/audit-skills/${skill.file}`)
      .then((r) => r.text())
      .then((text) => {
        setContent((prev) => ({ ...prev, [selected]: text }))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [selected, skill.file, content])

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
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {loading ? (
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

function AnalyticsAgent() {
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
          <a
            href="https://github.com/zarin071/AI-analytics-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle dark:border-darkSubtle text-xs text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk hover:border-ink/30 transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
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
                <button
                  onClick={() => setActive(active === exp.id ? null : exp.id)}
                  className="shrink-0 font-sans text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full border border-ink/20 dark:border-darkInk/20 hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-200"
                >
                  {active === exp.id ? "Close" : "View →"}
                </button>
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
                        <AnalyticsAgent />
                        <ContactCTA label="Want to deploy this in your product or explore a collaboration?" />
                      </>
                    )}

                    {exp.id === "audit" && (
                      <>
                        <AuditToolkit />
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
