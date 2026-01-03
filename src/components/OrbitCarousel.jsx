import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './OrbitCarousel.css';

const OrbitCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Determine layout based on text density
  const shouldUseCenteredLayout = (item) => {
    if (!item.description) return true;
    const words = item.description.split(/\s+/);
    const lines = Math.ceil(item.description.length / 50); // Estimate lines
    const wordsPerLine = words.length / Math.max(lines, 1);
    return wordsPerLine < 5;
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Handle Swipe
  const onDragEnd = (event, info) => {
    setIsDragging(false);
    if (info.offset.x < -30 && info.velocity.x < 0) {
      handleNext();
    } else if (info.offset.x > 30 && info.velocity.x > 0) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Calculate visual position for each card
  const getCardStyle = (index) => {
    const total = items.length;
    let offset = (index - activeIndex + total) % total;
    if (offset > total / 2) {
      offset -= total;
    }

    const isActive = offset === 0;
    const absOffset = Math.abs(offset);
    const isVisible = absOffset <= 2;
    
    // Configurable visual parameters
    // Add non-linear spacing for a more spherical feel
    const visualX = offset === 0 ? 0 : Math.sign(offset) * (160 + (absOffset - 1) * 100);
    
    const scale = isActive ? 1.15 : Math.max(0.6, 1 - absOffset * 0.2);
    const zIndex = isActive ? 100 : (50 - absOffset * 10);
    const translateZ = isActive ? '200px' : '0px';
    const opacity = isActive ? 1 : Math.max(0, 1 - absOffset * 0.4);
    const rotateY = -offset * 30; // 3D Rotation
    const brightness = isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.3);
    const blur = isActive ? 0 : absOffset * 2;

    return {
      x: visualX,
      scale,
      zIndex,
      translateZ,
      opacity: isVisible ? opacity : 0,
      rotateY,
      brightness,
      blur,
      isActive,
      pointerEvents: isActive ? 'auto' : 'none',
      isVisible
    };
  };

  return (
    <div className="orbit-carousel-wrapper">
      
      {/* Dynamic Background Glow based on active card */}
      <div className="orbit-background-glow">
         <div className="orbit-glow-circle" />
      </div>

      {/* Cards Container */}
      <div className="orbit-cards-container">
        {items.map((item, index) => {
          const style = getCardStyle(index);
          
          return (
            <motion.div
              key={item.id}
              className="orbit-card"
              initial={false}
              animate={{
                x: style.x,
                scale: style.scale,
                zIndex: style.zIndex,
                opacity: style.opacity,
                rotateY: style.rotateY,
                translateZ: style.translateZ,
                filter: `brightness(${style.brightness}) blur(${style.blur}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 1.1
              }}
              drag={style.isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={onDragEnd}
              whileTap={{ cursor: "grabbing" }}
              style={{
                transformStyle: 'preserve-3d',
                pointerEvents: style.pointerEvents,
              }}
            >
              {/* Solid White Background Layer - Prevents ANY transparency */}
              <div className="orbit-card-background-solid"></div>
              
              {/* Card Container with Content and Corner Image */}
              <div className={`orbit-card-inner ${shouldUseCenteredLayout(item) ? 'centered-layout' : 'side-layout'}`}>
                {/* Image in Top Right Corner - Only render if imageUrl exists */}
                {item.imageUrl && (
                  <div className="orbit-card-image-corner">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title || 'Card image'} 
                      className="orbit-card-image"
                      draggable={false}
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className={`orbit-card-content-section ${!item.imageUrl ? 'no-image' : ''}`}>
                  <motion.div 
                     className="orbit-card-text"
                     animate={{
                       y: style.isActive ? 0 : 20,
                       opacity: style.isActive ? 1 : 0
                     }}
                     transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {item.title && (
                      <h2 className="orbit-card-title">
                        {item.title}
                      </h2>
                    )}
                    {item.description && (
                      <div className="orbit-card-description">
                        {item.description}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Specular Highlight Overlay */}
              <div className="orbit-specular-highlight" />
            </motion.div>
          );
        })}
      </div>

      {/* Side Navigation Buttons - Left */}
      <button 
        onClick={handlePrev}
        className="orbit-nav-btn orbit-nav-left"
        aria-label="Previous"
      >
        <ChevronLeft className="orbit-chevron-icon" />
      </button>

      {/* Side Navigation Buttons - Right */}
      <button 
        onClick={handleNext}
        className="orbit-nav-btn orbit-nav-right"
        aria-label="Next"
      >
        <ChevronRight className="orbit-chevron-icon" />
      </button>

      {/* Bottom Indicators */}
      <div className="orbit-indicators-wrapper">
        <div className="orbit-indicators-container">
            {items.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)} 
                    className={`orbit-indicator ${idx === activeIndex ? 'orbit-indicator-active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrbitCarousel;
