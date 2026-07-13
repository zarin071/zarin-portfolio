"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const companies = [
  { name: "bp", src: `${base}/logos/bp.svg`, h: "h-9 md:h-11" },
  { name: "Michelin", src: `${base}/logos/michelin.png`, h: "h-9 md:h-11" },
  { name: "Packt", src: `${base}/logos/packt.png`, h: "h-5 md:h-6" },
  { name: "Tata Consultancy Services", src: `${base}/logos/tcs.png`, h: "h-6 md:h-7" },
]

export default function TrustedBy() {
  const { theme } = useTheme()
  const defaultFilter = theme === "dark" ? "grayscale(1) invert(1)" : "grayscale(1)"

  return (
    <section aria-label="Companies I've worked with" className="border-y border-subtle dark:border-darkSubtle">
      <div className="w-full px-6 md:px-10 lg:px-16 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray shrink-0">
            Worked at
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 md:gap-x-14">
            {companies.map((c, i) => (
              <motion.img
                key={c.name}
                src={c.src}
                alt={c.name}
                loading="lazy"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, filter: "grayscale(0) invert(0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                style={{ filter: defaultFilter }}
                className={`${c.h} w-auto object-contain cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
