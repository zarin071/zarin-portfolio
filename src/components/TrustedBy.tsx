"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const MotionImage = motion(Image)

const companies = [
  { name: "bp", src: "/logos/bp.svg", h: 44 },
  { name: "Michelin", src: "/logos/michelin.png", h: 44 },
  { name: "Packt", src: "/logos/packt.png", h: 24 },
  { name: "Tata Consultancy Services", src: "/logos/tcs.png", h: 28 },
]

export default function TrustedBy() {
  return (
    <section aria-label="Companies I've worked with" className="border-y border-subtle dark:border-darkSubtle">
      <div className="w-full px-6 md:px-10 lg:px-16 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmGray dark:text-darkWarmGray shrink-0">
            Worked at
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 md:gap-x-14">
            {companies.map((c, i) => (
              <MotionImage
                key={c.name}
                src={c.src}
                alt={c.name}
                height={c.h}
                width={0}
                style={{ width: "auto", height: c.h }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="object-contain grayscale dark:invert"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
