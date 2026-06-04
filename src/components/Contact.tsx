"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        Get in Touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-4"
      >
        Let&apos;s build something <span className="italic">together</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="body-lg mb-12 max-w-2xl"
      >
        Whether you have a project in mind, a collaboration idea, or just want to
        chat about food history — I&apos;d love to hear from you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="max-w-xl"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-transparent border-b border-subtle dark:border-darkSubtle focus:border-ink dark:focus:border-darkInk outline-none transition-colors font-serif text-lg text-ink dark:text-darkInk"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border-b border-subtle dark:border-darkSubtle focus:border-ink dark:focus:border-darkInk outline-none transition-colors font-serif text-lg text-ink dark:text-darkInk"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border-b border-subtle dark:border-darkSubtle focus:border-ink dark:focus:border-darkInk outline-none transition-colors font-serif text-lg resize-none text-ink dark:text-darkInk"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 bg-ink dark:bg-darkInk text-cream dark:text-darkBg rounded-full hover:bg-ink/90 dark:hover:bg-darkInk/90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
