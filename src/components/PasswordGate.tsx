"use client"

/*
  ═══════════════════════════════════════════════════════════════════════════
  PASSWORD GATE
  ─────────────
  Wraps a locked case study. When the project has a `password`, this renders a
  lock screen until the visitor types the matching value; on success the study
  is revealed and the unlock is remembered for the browser session
  (sessionStorage — clears when the tab closes).

  ⚠️  Client-side deterrent only. The password ships in the site bundle, so this
      keeps a study out of casual view / search — it is NOT real security.
  ═══════════════════════════════════════════════════════════════════════════
*/

import { useEffect, useState, type ReactNode, type FormEvent } from "react"
import { motion } from "framer-motion"

const CONTACT_EMAIL = "zarinsolanki.work@gmail.com"

export default function PasswordGate({
  id,
  password,
  title,
  children,
}: {
  id: string
  password?: string
  title: string
  children: ReactNode
}) {
  const storageKey = `zp-unlocked:${id}`
  const [ready, setReady] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === "1") setUnlocked(true)
    } catch {
      /* sessionStorage unavailable — visitor just re-enters the password */
    }
    setReady(true)
  }, [storageKey])

  // Public project — nothing to gate.
  if (!password) return <>{children}</>
  // Avoid flashing protected content before we've checked sessionStorage.
  if (!ready) return null
  if (unlocked) return <>{children}</>

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value === password) {
      try {
        sessionStorage.setItem(storageKey, "1")
      } catch {
        /* ignore — unlock still applies for this render */
      }
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md mx-auto text-center py-12 md:py-20"
      >
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray mb-4">
          Protected case study
        </p>
        <h1 className="heading-lg mb-4 text-balance">{title}</h1>
        <p className="body-base mb-8 text-balance">
          This case study covers confidential client work. Enter the password to
          view it.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            autoFocus
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            placeholder="Password"
            aria-label="Case study password"
            aria-invalid={error}
            className="w-full px-5 py-3 rounded-full bg-subtle/40 dark:bg-darkSubtle/40 border border-subtle dark:border-darkSubtle focus:border-accent focus:outline-none text-center font-sans text-ink dark:text-darkInk placeholder:text-warmGray/60 dark:placeholder:text-darkWarmGray/60 transition-colors"
          />
          {error && (
            <p className="font-sans text-sm text-red-500" role="alert">
              Incorrect password — try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full font-sans text-sm uppercase tracking-[0.15em] px-6 py-3 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:opacity-80 hover:shadow-sm transition-all"
          >
            Unlock
          </button>
        </form>

        <p className="mt-8 font-sans text-sm text-warmGray dark:text-darkWarmGray">
          Don&rsquo;t have the password?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              `Access request — ${title}`,
            )}`}
            className="text-accent hover:underline"
          >
            Request access
          </a>
        </p>
      </motion.div>
    </section>
  )
}
