import React, { useState, useEffect, useRef } from 'react';
import './CircularCarousel.css';
import { carouselCards } from '../data/carouselData';

function CircularCarousel() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [displayCards, setDisplayCards] = useState(carouselCards);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        
        // Calculate the width of the original cards (not tripled)
        const singleCardSetWidth = trackRef.current.scrollWidth / (shouldAnimate ? 3 : 1);
        
        // Check if single set of cards would overflow
        const needsAnimation = singleCardSetWidth > containerWidth;
        
        if (needsAnimation !== shouldAnimate) {
          setShouldAnimate(needsAnimation);
          // Update cards array based on animation need
          setDisplayCards(needsAnimation 
            ? [...carouselCards, ...carouselCards, ...carouselCards] 
            : carouselCards
          );
        }
      }
    };

    // Check on mount and window resize
    checkOverflow();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkOverflow, 100);
    };
    
    window.addEventListener('resize', handleResize);

    // Initial check with delay to ensure images are loaded
    const timer = setTimeout(checkOverflow, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      clearTimeout(resizeTimer);
    };
  }, [shouldAnimate]);

  return (
    <div className="circular-carousel-section">
      <h2 className="carousel-title">Our Core Values</h2>
      <div className="circular-carousel-container" ref={containerRef}>
        <div className="circular-carousel">
          <div 
            ref={trackRef}
            className={`carousel-track ${shouldAnimate ? 'animated' : 'static'}`}
          >
            {displayCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className="circular-card-wrapper"
              >
                <div className="circular-card">
                  <div className="card-logo">
                    <img src={card.image} alt="TARS Logo" />
                  </div>
                </div>
                <div className="card-text">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
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
