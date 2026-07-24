"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Playground", href: "/playground" },
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "#contact" },
]

export default function Nav({ onChatOpen }: { onChatOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        const sectionId = href.slice(1)
        if (pathname === "/") {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        } else {
          router.push(`/${href}`)
        }
      } else {
        router.push(href)
      }
    },
    [pathname, router]
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 dark:bg-darkBg/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick("/") }}
            className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink dark:text-darkInk hover:opacity-60 transition-opacity duration-300"
          >
            Z.
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggle}
              className="p-2 text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            <a
              href={`${base}/ZarinSolanki_Resume_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="ZarinSolanki_Resume_2026.pdf"
              className="font-sans text-sm uppercase tracking-[0.15em] px-4 py-2 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all duration-300"
            >
              Resume
            </a>
            <button
              onClick={onChatOpen}
              className="font-sans text-sm uppercase tracking-[0.15em] px-4 py-2 bg-accent text-cream rounded-full hover:opacity-80 hover:shadow-sm transition-all duration-300"
            >
              Ask me anything
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              className="p-2 text-warmGray dark:text-darkWarmGray"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[1.5px] bg-ink dark:bg-darkInk transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-ink dark:bg-darkInk transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-ink dark:bg-darkInk transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream dark:bg-darkBg border-t border-subtle dark:border-darkSubtle"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => { handleNavClick(item.href); setMobileOpen(false) }}
                  className="font-sans text-sm uppercase tracking-[0.15em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-3 pt-4 border-t border-subtle dark:border-darkSubtle">
                <a
                  href={`${base}/ZarinSolanki_Resume_2026.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="ZarinSolanki_Resume_2026.pdf"
                  className="font-sans text-sm uppercase tracking-[0.15em] px-4 py-2 border border-ink/20 dark:border-darkWarmGray/30 rounded-full hover:bg-ink hover:text-cream dark:hover:bg-darkInk dark:hover:text-darkBg transition-all"
                >
                  Resume
                </a>
                <button
                  onClick={() => { onChatOpen(); setMobileOpen(false) }}
                  className="font-sans text-sm uppercase tracking-[0.15em] px-4 py-2 bg-accent text-cream rounded-full"
                >
                  Ask me anything
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
