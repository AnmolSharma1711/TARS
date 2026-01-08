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
        <div className="hero-title hero-title-animation">
          <img 
            src="/Star Logo.png" 
            alt="STAR Logo" 
            className="hero-logo"
          />
        </div>
        
        <p className="hero-subtitle">
          Society of Technology and Automation Research
        </p>
        
        <p className="hero-description">
          Pioneering the future of intelligent systems and automated solutions.
          Innovating at the intersection of technology, research, and human advancement.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="hero-button-primary"
            onClick={() => window.open('https://tars-sage.vercel.app/', '_blank')}
          >
            Member Portal
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
