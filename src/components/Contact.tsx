"use client"

import { motion } from "framer-motion"

const contactDetails = [
  {
    label: "Email",
    value: "zarinsolanki.work@gmail.com",
    href: "mailto:zarinsolanki.work@gmail.com",
  },
  {
    label: "Phone",
    value: "+91-7666757809",
    href: "tel:+917666757809",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zarin-solanki",
    href: "https://www.linkedin.com/in/zarin-solanki/",
  },
  {
    label: "Resume",
    value: "View Resume \u2197",
    href: "/resume.pdf",
  },
]

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
        className="font-syne font-medium text-[clamp(2rem,4.4vw,4.5rem)] leading-[1.05] tracking-tight text-balance mb-6"
      >
        Let&apos;s build something <span className="font-serif italic font-normal">together</span>.
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
      >
        {contactDetails.map((detail) => (
          <a
            key={detail.label}
            href={detail.href}
            target={detail.href.startsWith("http") ? "_blank" : undefined}
            rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group p-6 rounded-2xl border border-subtle dark:border-darkSubtle hover:border-ink dark:hover:border-darkInk transition-all duration-300"
          >
            <p className="font-sans text-xs uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-2">
              {detail.label}
            </p>
            <p className="font-serif text-lg text-ink dark:text-darkInk group-hover:opacity-70 transition-opacity">
              {detail.value}
            </p>
          </a>
        ))}
      </motion.div>
    </section>
  )
}
