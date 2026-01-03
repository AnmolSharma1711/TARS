import React from 'react'
import Hero from '../components/Hero'
import CircularCarousel from '../components/CircularCarousel'
import OrbitCarousel from '../components/OrbitCarousel'
import { orbitCarouselItems } from '../data/orbitCarouselData'

function HomePage() {
  return (
    <>
      <Hero />
      <CircularCarousel />
      <OrbitCarousel items={orbitCarouselItems} />
    </>
  )
}

export default HomePage
