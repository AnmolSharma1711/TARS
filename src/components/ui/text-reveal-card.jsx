"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if it's a touch device
    const isTouchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouchSupported);
    
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }

    // Force update on window resize
    const handleResize = () => {
      if (cardRef.current) {
        const { left, width: localWidth } =
          cardRef.current.getBoundingClientRect();
        setLeft(left);
        setLocalWidth(localWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    const touch = event.touches[0];
    if (touch && cardRef.current) {
      const relativeX = touch.clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function handleClick(event) {
    // Always handle click to toggle on mobile
    const width = window.innerWidth;
    if (width <= 768 || isTouchDevice) {
      event.preventDefault();
      event.stopPropagation();
      setIsRevealed(!isRevealed);
      if (!isRevealed) {
        setWidthPercentage(100);
      } else {
        setWidthPercentage(0);
      }
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (!isRevealed) {
      setWidthPercentage(0);
    }
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchMove={touchMoveHandler}
      onClick={handleClick}
      ref={cardRef}
      className={`w-full p-8 relative overflow-hidden ${isTouchDevice ? 'cursor-pointer' : ''} ${className || ""}`}
    >
      {children}

      <div className="h-40 relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-transparent z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(6, 182, 212, 0.8)",
            }}
            className="text-base sm:text-[3rem] py-10 font-bold text-center text-white w-full"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <motion.div
          animate={{
            clipPath: `inset(0 0 0 ${widthPercentage}%)`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] w-full"
        >
          <p className="text-base sm:text-[3rem] py-10 font-bold text-center text-white w-full">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-cyan-400 text-lg mb-2 text-center ${className || ""}`}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({ children, className }) => {
  return (
    <p className={`text-cyan-300/70 text-sm text-center ${className || ""}`}>
      {children}
    </p>
  );
};
