import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="/spaceTheme.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-headline font-orbitron">
          EXPLORE THE <span className="text-gradient glow">COSMOS</span> WITH US
        </h1>
        
        <p className="hero-description font-orbitron telemetry-small" style={{color:'white'}}>
          STAR Cosmic Command. Pioneering the future of space exploration, intelligent systems, and automated astrophysics.
          Innovating at the intersection of universal discovery and human advancement.
        </p>
        
        <div className="hero-buttons">
          <button className="mission-button primary-mission" onClick={() => window.open('https://tars-sage.vercel.app/', '_blank')}>
            <span className="mission-button-text">Explore Missions</span>
            <div className="mission-button-sweep"></div>
          </button>
          
          <button className="mission-button secondary-mission">
            <span className="mission-button-text">Join Starfleet</span>
            <div className="mission-button-sweep"></div>
          </button>
        </div>

        {/* Floating elements & coordinates */}
        <div className="telemetry top-left font-orbitron">SYS.ORBITAL.901</div>
        <div className="telemetry bottom-right font-orbitron">STELLAR.NAV / SEC.4</div>
      </div>
    </section>
  )
}

export default Hero
