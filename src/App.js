import React from "react"
import { Navbar, Hero, Card } from './components'

export default function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <Card 
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </>
    )
}
