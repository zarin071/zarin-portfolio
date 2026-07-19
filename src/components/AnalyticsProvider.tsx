"use client"

import { useEffect, useRef } from "react"
import { track } from "@/lib/analytics"

const SECTIONS = ["hero", "about", "work", "testimonials", "contact"]

export default function AnalyticsProvider({ page }: { page: string }) {
  const viewed = useRef(new Set<string>())

  // Page view on mount
  useEffect(() => {
    track("page_viewed", { page })
  }, [page])

  // Section view via IntersectionObserver (homepage only)
  useEffect(() => {
    if (page !== "home") return
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !viewed.current.has(id)) {
            viewed.current.add(id)
            track("section_viewed", { section: id })
          }
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [page])

  return null
}
