import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  angle: number;
  delay: number;
  duration: number;
  length: number;
}

export const ShootingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 10; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          angle: Math.random() * 45 - 22.5,
          delay: Math.random() * 10,
          duration: Math.random() * 2 + 1,
          length: Math.random() * 80 + 40,
        });
      }
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shooting-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `rotate(${star.angle}deg)`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            width: `${star.length}px`,
          }}
        />
      ))}
    </div>
  );
};
