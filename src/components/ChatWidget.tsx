"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { chatConfig } from "@/data/chat-config"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

const categories = Array.from(new Set(chatConfig.map((c) => c.category)))

export default function ChatWidget({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "👋 Hi there! Pick a question below to learn more about Zarin, or type your own.",
    },
  ])
  const [input, setInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showPresets, setShowPresets] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handlePresetClick = (entry: (typeof chatConfig)[0]) => {
    setShowPresets(false)
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
    setSelectedCategory(null)

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, type: "user", text: userMsg },
    ])

    setTimeout(() => {
      const matched = chatConfig.find(
        (c) =>
          c.question.toLowerCase().includes(userMsg.toLowerCase()) ||
          userMsg.toLowerCase().includes(c.question.toLowerCase().split(" ").slice(0, 3).join(" "))
      )

      const response = matched
        ? matched.answer
        : `I don't have an exact answer for that yet! Try one of the suggested questions above.`

      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, type: "bot", text: response },
      ])
    }, 500)
  }

  const handleReset = () => {
    setShowPresets(true)
    setMessages([
      {
        id: "welcome",
        type: "bot",
        text: "👋 Hi there! Pick a question below to learn more about Zarin, or type your own.",
      },
    ])
    setSelectedCategory(null)
  }

  const filteredPresets = selectedCategory
    ? chatConfig.filter((c) => c.category === selectedCategory)
    : chatConfig

  return (
    <>
      <motion.button
        onClick={onToggle}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { delay: 2, type: "spring", stiffness: 260, damping: 20 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-cream rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
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
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-120px)] bg-cream dark:bg-darkBg rounded-2xl shadow-2xl border border-subtle dark:border-darkSubtle flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-subtle dark:border-darkSubtle bg-ink dark:bg-darkBg text-cream">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-serif text-sm font-semibold">
                  Z
                </div>
                <div>
                  <p className="font-sans text-sm font-medium">Ask Zarin</p>
                  <p className="font-sans text-xs text-cream/60">Pick a question or type yours</p>
                </div>
              </div>
              <button onClick={onToggle} className="text-cream/60 hover:text-cream transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 dark:bg-darkBg">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-accent text-cream rounded-br-md"
                        : "bg-subtle/50 dark:bg-darkSubtle/50 text-ink dark:text-darkInk rounded-bl-md"
                    }`}
                  >
                    <p className="font-sans text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}

              {showPresets && (
                <>
                  <div className="flex gap-1.5 pt-2 flex-wrap">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`font-sans text-[11px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full transition-all ${
                        selectedCategory === null
                          ? "bg-ink dark:bg-darkInk text-cream dark:text-darkBg"
                          : "bg-subtle/30 dark:bg-darkSubtle/30 text-warmGray dark:text-darkWarmGray hover:bg-subtle/50 dark:hover:bg-darkSubtle/50"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-sans text-[11px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full transition-all ${
                          selectedCategory === cat
                            ? "bg-ink dark:bg-darkInk text-cream dark:text-darkBg"
                            : "bg-subtle/30 dark:bg-darkSubtle/30 text-warmGray dark:text-darkWarmGray hover:bg-subtle/50 dark:hover:bg-darkSubtle/50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {filteredPresets.map((entry) => (
                      <button
                        key={entry.id}
                        onClick={() => handlePresetClick(entry)}
                        className="font-sans text-xs px-3 py-2 border border-subtle dark:border-darkSubtle rounded-full hover:bg-subtle/30 dark:hover:bg-darkSubtle/30 hover:border-accent/30 transition-all duration-200 text-left text-ink dark:text-darkInk"
                      >
                        {entry.question}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {messages.length > 1 && (
                <button
                  onClick={handleReset}
                  className="font-sans text-xs text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
                >
                  ← Start over
                </button>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-subtle dark:border-darkSubtle dark:bg-darkBg">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your own question..."
                  className="flex-1 px-4 py-2.5 bg-subtle/30 dark:bg-darkSubtle/30 border border-subtle dark:border-darkSubtle rounded-full font-sans text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-warmGray/50 dark:placeholder:text-darkWarmGray/50 text-ink dark:text-darkInk"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-accent text-cream rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-accent/90 transition-all flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.5 8L14 8M14 8L8.5 2.5M14 8L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="px-4 pb-3 text-center dark:bg-darkBg">
              <p className="font-sans text-[10px] text-warmGray/50 dark:text-darkWarmGray/50">
                Edit questions in src/data/chat-config.ts
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
