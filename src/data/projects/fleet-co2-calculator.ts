import type { Project } from "./_types"

const fleetCo2Calculator: Project = {
  id: "fleet-co2-calculator",
  title: "Fleet CO₂ Emissions Calculator",
  subtitle: "An interactive sustainability tool for Michelin Connected Fleet",
  role: "Product Designer + Front-End Developer",
  timeline: "2023",
  tags: ["Sustainability", "Data-Driven UI", "Front-End"],

  problem:
    "Fleet managers had no easy way to baseline their vehicles' carbon footprint. Sustainability reporting (CSRD, TCFD) is complex and inaccessible to non-experts, yet the pressure to measure and cut emissions was rising.",

  approach:
    "Designed and built an interactive fuel-saving calculator that takes fleet composition and monthly fuel-consumption inputs and returns estimated CO₂ emissions and savings with a breakdown by fuel type. Applied data-driven UI principles to make dense emissions data legible, and collaborated across design, data science, and engineering.",

  impact:
    "Gave fleet managers an accessible starting point for measuring emissions and improved retention through a clearer end-to-end journey. Featured on Michelin Connected Fleet.",

  projectLink: "https://b2b.michelin.in/fuel-saving-calculator",
  caseStudy: "https://connectedfleet.michelin.com/blog/calculate-co2-emissions/",
  cover: "linear-gradient(135deg, #E4F5E6 0%, #B4E4C4 45%, #4FA986 100%)",
  coverLabel: "Sustainability Tool",
}

export default fleetCo2Calculator
