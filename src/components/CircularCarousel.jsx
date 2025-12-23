import React from 'react';
import './CircularCarousel.css';
import { carouselCards } from '../data/carouselData';

function CircularCarousel() {
  // Only duplicate cards if there are more than 5
  const shouldAnimate = carouselCards.length > 5;
  const displayCards = shouldAnimate ? [...carouselCards, ...carouselCards] : carouselCards;

  return (
    <div className="circular-carousel-section">
      <h2 className="carousel-title">Our Core Values</h2>
      <div className="circular-carousel-container">
        <div className="circular-carousel">
          <div className={`carousel-track ${shouldAnimate ? 'animated' : 'static'}`}>
            {displayCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className="circular-card"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="circular-card-overlay">
                  <p className="circular-card-subtitle">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularCarousel;
