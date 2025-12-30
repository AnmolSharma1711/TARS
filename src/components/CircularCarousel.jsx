import React, { useState, useEffect, useRef } from 'react';
import './CircularCarousel.css';
import { carouselCards } from '../data/carouselData';

function CircularCarousel() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [displayCards, setDisplayCards] = useState(carouselCards);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const lastTranslateRef = useRef(0);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const singleCardSetWidth = trackRef.current.scrollWidth / (shouldAnimate ? 3 : 1);
        const needsAnimation = singleCardSetWidth > containerWidth;

        if (needsAnimation !== shouldAnimate) {
          setShouldAnimate(needsAnimation);
          setDisplayCards(needsAnimation 
            ? [...carouselCards, ...carouselCards, ...carouselCards] 
            : carouselCards
          );
          // Reset translate when switching modes to avoid layout jumps
          setCurrentTranslate(0);
          if (trackRef.current) trackRef.current.style.transform = `translateX(0px)`;
        }
      }
    };

    checkOverflow();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkOverflow, 100);
    };

    window.addEventListener('resize', handleResize);
    const timer = setTimeout(checkOverflow, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      clearTimeout(resizeTimer);
    };
  }, [shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate || !trackRef.current) return;

    const track = trackRef.current;
    const singleSetWidth = track.scrollWidth / 3;

    const animate = () => {
      if (!animationPaused && !isDragging) {
        setCurrentTranslate(prev => {
          let newTranslate = prev - 0.5;
          if (Math.abs(newTranslate) >= singleSetWidth) {
            newTranslate = 0;
          }
          return newTranslate;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [shouldAnimate, animationPaused, isDragging]);

  useEffect(() => {
    if (trackRef.current && shouldAnimate) {
      trackRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate, shouldAnimate]);


  // Ensure we reset translate and transform whenever the set of displayed cards changes
  useEffect(() => {
    if (!trackRef.current) return;
    setCurrentTranslate(0);
    trackRef.current.style.transform = `translateX(0px)`;
  }, [displayCards]);

  const handleStart = (clientX) => {
    if (!shouldAnimate) return;
    setIsDragging(true);
    setStartX(clientX - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(currentTranslate);
    lastTimeRef.current = Date.now();
    lastTranslateRef.current = currentTranslate;
    velocityRef.current = 0;
  };

  const handleMove = (clientX) => {
    if (!isDragging || !shouldAnimate) return;
    const x = clientX - (trackRef.current?.offsetLeft || 0);
    const walk = x - startX;
    const newTranslate = scrollLeft + walk;

    const now = Date.now();
    const timeDelta = now - lastTimeRef.current;
    if (timeDelta > 0) {
      velocityRef.current = (newTranslate - lastTranslateRef.current) / timeDelta;
    }
    lastTimeRef.current = now;
    lastTranslateRef.current = newTranslate;

    const singleSetWidth = trackRef.current.scrollWidth / 3;

    let finalTranslate = newTranslate;
    if (finalTranslate > 0) {
      finalTranslate = -singleSetWidth + (finalTranslate % singleSetWidth);
    } else if (Math.abs(finalTranslate) >= singleSetWidth) {
      finalTranslate = finalTranslate % singleSetWidth;
    }

    setCurrentTranslate(finalTranslate);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(velocityRef.current) > 0.1) {
      let momentum = velocityRef.current * 100;
      const decay = 0.95;

      const applyMomentum = () => {
        if (Math.abs(momentum) < 0.1) return;
        setCurrentTranslate(prev => {
          const singleSetWidth = trackRef.current.scrollWidth / 3;
          let newTranslate = prev + momentum;
          if (newTranslate > 0) {
            newTranslate = -singleSetWidth + (newTranslate % singleSetWidth);
          } else if (Math.abs(newTranslate) >= singleSetWidth) {
            newTranslate = newTranslate % singleSetWidth;
          }
          return newTranslate;
        });
        momentum *= decay;
        requestAnimationFrame(applyMomentum);
      };
      requestAnimationFrame(applyMomentum);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.pageX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.pageX);
  };

  const handleMouseUp = () => handleEnd();
  const handleMouseLeave = () => handleEnd();
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  return (
    <div className="circular-carousel-section">
      <h2 className="carousel-title">Our Core Values</h2>
      <div className="circular-carousel-container" ref={containerRef}>
        <div
          className="circular-carousel"
          onMouseEnter={() => setAnimationPaused(true)}
          onMouseLeave={() => {
            setAnimationPaused(false);
            if (isDragging) handleEnd();
          }}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: shouldAnimate ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
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