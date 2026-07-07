"use client"

import { useState } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"

export default function AboutPage() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />
      {/* CSS 3D entrance (see .about-3d-enter): tilts up out of depth on arrival,
          then resets to transform:none so it never leaves overflow behind.
          The About section's own top padding clears the fixed nav. */}
      <main className="about-3d-enter">
        <About />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
