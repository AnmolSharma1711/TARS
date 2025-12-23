import React, { useMemo } from 'react';
import './CurrentLines.css';

export function CurrentLines() {
  const { horizontals, verticals } = useMemo(() => {
    const horizontals = Array.from({ length: 10 }).map((_, i) => ({
      id: `h-${i}`,
      top: Math.random() * 100,
      dur: 8 + Math.random() * 10,
      delay: -Math.random() * 10,
      hue: 180 + Math.round(Math.random() * 60),
    }));

    const verticals = Array.from({ length: 8 }).map((_, i) => ({
      id: `v-${i}`,
      left: Math.random() * 100,
      dur: 9 + Math.random() * 10,
      delay: -Math.random() * 10,
      hue: 180 + Math.round(Math.random() * 60),
    }));

    return { horizontals, verticals };
  }, []);

  return (
    <div className="current-lines">
      {horizontals.map(l => (
        <div
          key={l.id}
          className="line h"
          style={{
            top: `${l.top}%`,
            ['--dur']: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
            opacity: 0.25 + Math.random() * 0.3,
          }}
        />
      ))}
      {verticals.map(l => (
        <div
          key={l.id}
          className="line v"
          style={{
            left: `${l.left}%`,
            ['--dur']: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
            opacity: 0.25 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
}
