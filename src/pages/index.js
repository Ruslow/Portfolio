import React from "react"
import Cirtificates from "../components/Cirtificates"
import { useGlobalContext } from "../components/Context"
import Hero from "../components/Hero"
import Projectos from "../components/Projectos"

export default function Home() {
  const { render } = useGlobalContext()

  return (
    <>
      <main>
        <Hero />
        <Cirtificates />
        <Projectos />
      </main>
    </>
  )
}
