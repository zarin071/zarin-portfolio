"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
  }, [])

  const stopInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    startInterval()
    return stopInterval
  }, [startInterval, stopInterval])

  return (
    <section
      className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-subtle/20 dark:bg-darkSubtle/20"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        What People Say
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-10"
      >
        What the <span className="font-serif italic font-normal">people I&apos;ve built things with</span> say.
      </motion.h2>

      <div className="relative min-h-[160px] md:min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-balance mb-8 italic text-ink dark:text-darkInk">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <footer>
              <div className="flex items-center gap-2">
                <p className="font-sans font-semibold text-ink dark:text-darkInk">
                  {testimonials[active].name}
                </p>
                {testimonials[active].linkedin && (
                  <a
                    href={testimonials[active].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
                    aria-label={`${testimonials[active].name} on LinkedIn`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray">
                {testimonials[active].role}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex justify-start gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-accent" : "w-2 bg-subtle dark:bg-darkSubtle hover:bg-warmGray/30 dark:hover:bg-darkWarmGray/30"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
