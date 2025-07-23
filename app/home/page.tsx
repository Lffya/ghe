"use client"

import { useEffect } from "react"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Vision from "./components/vision"
import Footer from "../components/footer"

export default function HomePage() {

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Vision />
      <Footer />
    </main>
  )
}
