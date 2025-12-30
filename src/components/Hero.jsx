import React from 'react'
import './Hero.css'
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title hero-title-animation">
          <span className="text-gradient glow">
            TARS
          </span>
        </h1>
        
        <p className="hero-subtitle">
          Technology and Automation Research Society
        </p>
        
        <p className="hero-description">
          Pioneering the future of intelligent systems and automated solutions.
          Innovating at the intersection of technology, research, and human advancement.
        </p>
        
        <div className="hero-buttons">
          <button className="hero-button-primary">
            Explore Technology
          </button>
          
          <button className="hero-button-secondary">
            Our Research
          </button>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <TextRevealCard
            text="You bring the Vision"
            revealText="We build the Version"
          >
            <TextRevealCardTitle>
              <span className="hidden md:inline">Hover over the text to reveal our commitment</span>
              <span className="md:hidden">Tap on the text to reveal our commitment</span>
            </TextRevealCardTitle>
          </TextRevealCard>
        </div>
      </div>
    </section>
  )
}

export default Hero
