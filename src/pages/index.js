import React from "react"
import { useEffect } from "react"
import Cirtificates from "../components/Cirtificates"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <main>
      <Hero />
      <Cirtificates />
      <Projects />
    </main>
  )
}
