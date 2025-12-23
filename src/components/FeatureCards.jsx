import React from 'react'
import './FeatureCards.css'
import { featuresData } from '../data/featuresData'

function FeatureCards() {

  return (
    <section className="features-section">
      <div className="features-container">
        <h3 className="features-subtitle">Welcome to the Future</h3>
        <p className="features-intro">
          TARS is a cutting-edge community of innovators, researchers, and technology enthusiasts
          dedicated to pushing the boundaries of automation and artificial intelligence. We bridge
          the gap between theoretical research and practical applications.
        </p>
        
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon-emoji">{feature.icon}</span>
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
