import React from 'react'
import './About.css'
import FeatureCards from './FeatureCards'
import TeamCard from './TeamCard'

function About() {
  return (
    <section id="about" className="about">
      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Team Section */}
      <TeamCard />
    </section>
  )
}

export default About
