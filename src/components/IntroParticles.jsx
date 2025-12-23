import React, { useMemo } from 'react';
import './IntroParticles.css';

export function IntroParticles() {
  const { dots, streaks } = useMemo(() => {
    const dots = Array.from({ length: 120 }).map((_, i) => ({
      id: `dot-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      floatDur: 22 + Math.random() * 18,
      blinkDur: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.6,
    }));

    const streaks = Array.from({ length: 8 }).map((_, i) => ({
      id: `streak-${i}`,
      top: Math.random() * 100,
      delay: -Math.random() * 8,
      dur: 6 + Math.random() * 6,
      rotate: (Math.random() - 0.5) * 10, // subtle angle
    }));

    return { dots, streaks };
  }, []);

  return (
    <div className="intro-particles">
      {dots.map(d => (
        <div
          key={d.id}
          className="particle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            ['--floatDur']: `${d.floatDur}s`,
            ['--blinkDur']: `${d.blinkDur}s`,
          }}
        />
      ))}

      {streaks.map(s => (
        <div
          key={s.id}
          className="particle streak"
          style={{
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            ['--streakDur']: `${s.dur}s`,
            transform: `rotate(${s.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
