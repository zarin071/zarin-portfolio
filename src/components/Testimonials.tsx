"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-container bg-subtle/20 dark:bg-darkSubtle/20">
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
        className="heading-lg text-balance mb-16"
      >
        Kind words from <span className="italic">people I&apos;ve worked with</span>.
      </motion.h2>

      <div className="relative min-h-[300px] md:min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-4xl mx-auto"
          >
            <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-balance mb-8 italic text-ink dark:text-darkInk">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <footer>
              <p className="font-sans font-semibold text-ink dark:text-darkInk">
                {testimonials[active].name}
              </p>
              <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray">
                {testimonials[active].role}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
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
