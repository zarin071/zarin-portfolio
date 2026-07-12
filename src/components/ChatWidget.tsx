"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { chatConfig } from "@/data/chat-config"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

const STARTER_IDS = ["about-me", "projects-overview", "can-you-code"]
const starters = chatConfig.filter((c) => STARTER_IDS.includes(c.id))

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "to", "of", "in", "on", "is", "are", "do",
  "you", "your", "me", "i", "what", "whats", "how", "can", "tell", "about",
  "for", "with", "have", "did", "was", "were", "at", "any", "some", "please",
])

function findBestMatch(message: string): (typeof chatConfig)[number] | null {
  const tokens = message
    .toLowerCase()
    .replace(/[^a-z0-9₂\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w))

  if (tokens.length === 0) return null

  let best: (typeof chatConfig)[number] | null = null
  let bestScore = 0

  for (const entry of chatConfig) {
    const haystack = `${entry.question} ${entry.category} ${entry.answer}`.toLowerCase()
    const qHaystack = `${entry.question} ${entry.category}`.toLowerCase()
    let score = 0
    for (const token of tokens) {
      if (qHaystack.includes(token)) score += 3
      else if (haystack.includes(token)) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  return bestScore >= 2 ? best : null
}

// Staggered chip list — each chip fades+slides in 150ms after the previous
function ChipList({
  items,
  onSelect,
  listKey,
}: {
  items: (typeof chatConfig)
  onSelect: (entry: (typeof chatConfig)[0]) => void
  listKey: string
}) {
  return (
    <motion.div
      key={listKey}
      className="flex flex-wrap gap-2"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {items.map((entry) => (
        <motion.button
          key={entry.id}
          onClick={() => onSelect(entry)}
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
          }}
          className="font-sans text-xs px-3 py-2 border border-subtle dark:border-darkSubtle rounded-full hover:bg-ink/5 dark:hover:bg-darkInk/5 hover:border-ink/30 dark:hover:border-darkInk/30 transition-colors text-left text-ink dark:text-darkInk"
        >
          {entry.question}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default function ChatWidget({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "👋 Hi, I'm Zarin's assistant. Pick a question below or type your own.",
    },
  ])
  const [input, setInput] = useState("")
  const [isModal, setIsModal] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const [lastEntry, setLastEntry] = useState<(typeof chatConfig)[0] | null>(null)
  const [answerCount, setAnswerCount] = useState(0)
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set(STARTER_IDS as string[]))

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, lastEntry])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || messages.length <= 1) return
    const isScrolledToBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60
    if (!isScrolledToBottom) {
      setShowScrollHint(true)
      setTimeout(() => setShowScrollHint(false), 3000)
    }
  }, [messages])

  const handlePresetClick = (entry: (typeof chatConfig)[0]) => {
    setLastEntry(entry)
    setAnswerCount((n) => n + 1)
    setSeenIds((prev) => new Set(Array.from(prev).concat(entry.id)))
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, type: "user", text: entry.question },
      { id: `bot-${Date.now()}`, type: "bot", text: entry.answer },
    ])
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input.trim()
    setInput("")

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, type: "user", text: userMsg },
    ])

    setTimeout(() => {
      const matched = findBestMatch(userMsg)
      if (matched) {
        setLastEntry(matched)
        setAnswerCount((n) => n + 1)
        setSeenIds((prev) => new Set<string>(Array.from(prev).concat(matched.id)))
      }

      const response = matched
        ? matched.answer
        : `Good question — I don't have a scripted answer for that. Try asking about experience, projects, skills, or contact. Or reach Zarin directly at zarinsolanki.work@gmail.com.`

      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, type: "bot", text: response },
      ])
    }, 500)
  }

  const handleReset = () => {
    setLastEntry(null)
    setAnswerCount(0)
    setSeenIds(new Set(STARTER_IDS as string[]))
    setMessages([
      {
        id: "welcome",
        type: "bot",
        text: "👋 Hi, I'm Zarin's assistant. Pick a question below or type your own.",
      },
    ])
  }

  // 2 related questions from same category, not yet seen
  const relatedQuestions = lastEntry
    ? chatConfig
        .filter((c) => c.category === lastEntry.category && !seenIds.has(c.id))
        .slice(0, 2)
    : []

  // Fallback to different category if current category exhausted
  const followUps =
    relatedQuestions.length > 0
      ? relatedQuestions
      : chatConfig.filter((c) => !seenIds.has(c.id)).slice(0, 2)

  const hasAnswers = answerCount > 0
  const showStarters = !hasAnswers

  const panelClasses = isModal
    ? "fixed inset-4 md:inset-10 z-50 w-auto h-auto max-w-none max-h-none rounded-2xl"
    : "fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-120px)]"

  return (
    <>
      <motion.button
        onClick={onToggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 2, type: "spring", stiffness: 260, damping: 20 } }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full shadow-lg flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {isModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModal(false)}
                className="fixed inset-0 bg-black/40 z-40"
              />
            )}
            <motion.div
              initial={{ opacity: 0, y: isModal ? 0 : 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isModal ? 0 : 100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`${panelClasses} bg-cream dark:bg-darkBg shadow-2xl border border-subtle dark:border-darkSubtle/60 flex flex-col overflow-hidden`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-subtle dark:border-darkSubtle bg-ink dark:bg-[#1A1A1A] text-cream flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cream text-ink dark:bg-darkInk dark:text-darkBg rounded-full flex items-center justify-center font-serif text-sm font-semibold">
                    Z
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium">Ask Zarin</p>
                    <p className="font-sans text-xs text-cream/60">Pick a question or type yours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModal(!isModal)}
                    className="text-cream/60 hover:text-cream transition-opacity p-1"
                    aria-label={isModal ? "Minimise" : "Expand"}
                  >
                    {isModal ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                      </svg>
                    )}
                  </button>
                  <button onClick={onToggle} className="text-cream/60 hover:text-cream transition-opacity p-1" aria-label="Close">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 dark:bg-darkBg scroll-smooth">
                {showScrollHint && (
                  <div className="text-center">
                    <span className="font-sans text-[10px] text-warmGray/50 dark:text-darkWarmGray/50 animate-pulse-gentle">
                      ↓ Scroll for more
                    </span>
                  </div>
                )}

                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-br-md"
                          : "bg-subtle/50 dark:bg-darkSubtle text-ink dark:text-darkInk rounded-bl-md"
                      }`}
                    >
                      <p className="font-sans text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {/* Starter questions — shown only before any answer */}
                {showStarters && (
                  <ChipList
                    items={starters}
                    onSelect={handlePresetClick}
                    listKey="starters"
                  />
                )}

                {/* Follow-up questions — iterative, appear after each answer */}
                {hasAnswers && followUps.length > 0 && (
                  <div className="pt-1">
                    <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-warmGray/60 dark:text-darkWarmGray/60 mb-2.5">
                      {relatedQuestions.length > 0 ? "Related" : "You might also ask"}
                    </p>
                    <ChipList
                      items={followUps}
                      onSelect={handlePresetClick}
                      listKey={`followup-${answerCount}`}
                    />
                  </div>
                )}

                {/* Reset */}
                {hasAnswers && (
                  <div className="pt-3 border-t border-subtle dark:border-darkSubtle">
                    <button
                      onClick={handleReset}
                      className="w-full py-2.5 rounded-xl border border-subtle dark:border-darkSubtle font-sans text-xs uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray hover:bg-ink/5 dark:hover:bg-darkInk/5 hover:text-ink dark:hover:text-darkInk transition-all"
                    >
                      ↺ Start over
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-4 border-t border-subtle dark:border-darkSubtle dark:bg-darkBg flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your own question..."
                    className="flex-1 px-4 py-2.5 bg-subtle/30 dark:bg-darkSubtle/30 border border-subtle dark:border-darkSubtle rounded-full font-sans text-sm outline-none focus:border-ink/50 dark:focus:border-darkInk/50 transition-colors placeholder:text-warmGray/50 dark:placeholder:text-darkWarmGray/50 text-ink dark:text-darkInk"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="w-10 h-10 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full flex items-center justify-center disabled:opacity-40 hover:opacity-80 transition-all flex-shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1.5 8L14 8M14 8L8.5 2.5M14 8L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>

              <div className="px-4 pb-3 text-center dark:bg-darkBg flex-shrink-0">
                <p className="font-sans text-[10px] text-warmGray/50 dark:text-darkWarmGray/50">
                  Answers are based on Zarin&apos;s real experience
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
