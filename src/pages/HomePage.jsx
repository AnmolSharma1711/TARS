import React from 'react'
import Hero from '../components/Hero'
import CircularCarousel from '../components/CircularCarousel'
import OrbitCarousel from '../components/OrbitCarousel'
import { orbitCarouselItems } from '../data/orbitCarouselData'
import ScrollReveal from '../components/ScrollReveal'

function HomePage() {
  return (
    <>
      <ScrollReveal direction="none" duration={1}>
        <Hero />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <CircularCarousel />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <OrbitCarousel items={orbitCarouselItems} />
      </ScrollReveal>
    </>
  )
}

export default HomePage
