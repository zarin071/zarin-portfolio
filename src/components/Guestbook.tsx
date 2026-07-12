"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Entry = { name: string; message: string }

export default function Guestbook() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [submitted, setSubmitted] = useState<Entry | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!key) {
      console.error("Web3Forms key missing — set NEXT_PUBLIC_WEB3FORMS_KEY")
      setStatus("error")
      return
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: "New guestbook entry — portfolio",
          name: name || "Anonymous",
          email,
          message: message || "(no message)",
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setSubmitted({ name: name || "Anonymous", message: message || "" })
      setStatus("done")
    } catch (err) {
      console.error("Guestbook submit error:", err)
      setStatus("error")
    }
  }

  return (
    <section id="guestbook" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        Guestbook
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-syne font-medium text-[clamp(2rem,4.4vw,4.5rem)] leading-[1.05] tracking-tight text-balance mb-4"
      >
        Leave your <span className="font-serif italic font-normal">mark</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="body-lg mb-10 max-w-xl text-warmGray dark:text-darkWarmGray"
      >
        Old-school internet tradition. Sign in, say something nice (or honest).
      </motion.p>

      {/* Notebook card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.1 }}
        className="relative max-w-lg"
        style={{ transform: "rotate(-0.4deg)" }}
      >
        {/* Paper shadow layers */}
        <div
          className="absolute inset-0 rounded-2xl bg-subtle dark:bg-darkSubtle"
          style={{ transform: "rotate(1.2deg) translate(4px, 4px)" }}
        />
        <div
          className="absolute inset-0 rounded-2xl bg-subtle dark:bg-darkSubtle opacity-60"
          style={{ transform: "rotate(0.6deg) translate(2px, 2px)" }}
        />

        {/* Main paper */}
        <div
          className="relative rounded-2xl overflow-hidden border border-subtle dark:border-darkSubtle"
          style={{
            background: "var(--paper-bg, #FAFAF8)",
          }}
        >
          {/* Lined paper background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, #D4D0C8 27px, #D4D0C8 28px)",
              backgroundPositionY: "52px",
            }}
          />

          {/* Red margin line */}
          <div className="absolute top-0 bottom-0 left-[72px] w-px bg-red-300 dark:bg-red-900 opacity-60 pointer-events-none" />

          <div className="relative px-8 pt-8 pb-8 ml-[72px]">
            <AnimatePresence mode="wait">
              {status === "done" && submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-4"
                >
                  <p
                    className="font-serif italic text-2xl text-ink dark:text-darkInk mb-3 leading-snug"
                    style={{ fontStyle: "italic" }}
                  >
                    &ldquo;{submitted.message || "Just stopped by."}&rdquo;
                  </p>
                  <p className="text-sm text-warmGray dark:text-darkWarmGray">
                    — {submitted.name},{" "}
                    <span className="text-xs">
                      {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </p>
                  <p className="text-xs text-warmGray dark:text-darkWarmGray mt-4 opacity-70">
                    Entry added. Thanks for signing.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-warmGray dark:text-darkWarmGray mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Optional"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-subtle dark:border-darkSubtle text-sm text-ink dark:text-darkInk placeholder:text-warmGray/50 dark:placeholder:text-darkWarmGray/50 focus:outline-none focus:border-ink dark:focus:border-darkInk py-1 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-warmGray dark:text-darkWarmGray mb-1.5">
                        Email <span className="normal-case tracking-normal">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-subtle dark:border-darkSubtle text-sm text-ink dark:text-darkInk placeholder:text-warmGray/50 dark:placeholder:text-darkWarmGray/50 focus:outline-none focus:border-ink dark:focus:border-darkInk py-1 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-warmGray dark:text-darkWarmGray mb-1.5">
                      Leave a note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Say anything…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-subtle dark:border-darkSubtle text-sm text-ink dark:text-darkInk placeholder:text-warmGray/50 dark:placeholder:text-darkWarmGray/50 focus:outline-none focus:border-ink dark:focus:border-darkInk py-1 resize-none transition-colors leading-7"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {status === "error" && (
                      <p className="text-xs text-red-500">Something went wrong — try again.</p>
                    )}
                    <div className="ml-auto">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink dark:bg-darkInk text-white dark:text-darkBg text-xs font-medium tracking-wide hover:opacity-75 disabled:opacity-40 transition-opacity"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="w-3 h-3 rounded-full border border-current border-t-transparent animate-spin" />
                            Signing…
                          </>
                        ) : (
                          <>
                            Sign it
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Spiral holes */}
          <div className="absolute top-0 bottom-0 left-0 w-[72px] flex flex-col items-center justify-start pt-6 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border-2 border-subtle dark:border-darkSubtle bg-white dark:bg-darkBg"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
