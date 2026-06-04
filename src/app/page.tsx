"use client"

import { useState } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Work from "@/components/Work"
import Testimonials from "@/components/Testimonials"
import Food from "@/components/Food"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <ThemeProvider>
      <Nav onChatOpen={() => setChatOpen(true)} />
      <main>
        <Hero onChatOpen={() => setChatOpen(true)} />
        <About />
        <Work />
        <Testimonials />
        <Food />
        <Contact />
      </main>
      <Footer />
      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </ThemeProvider>
  )
}
