import React from 'react';

export function RotatingRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-container">
      {/* Outer Glow Ring */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-500/10 shadow-[0_0_50px_rgba(6,182,212,0.1)] animate-pulse" />

      {/* Large Dashed Ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-cyan-500/20 animate-spin-slow" />
      
      {/* Middle Tech Ring */}
      <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-cyan-400/30 border-t-transparent border-b-transparent animate-spin-reverse-slow shadow-[0_0_15px_rgba(34,211,238,0.2)]" />
      
      {/* Inner Static Ring with Ticks */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-slate-700/50 flex items-center justify-center">
         <div className="w-[260px] h-[260px] rounded-full border border-cyan-500/10" />
      </div>

      {/* Core Chip Glow */}
      <div className="absolute w-[100px] h-[100px] bg-slate-900 border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center transform rotate-45">
        <div className="w-[80%] h-[80%] border border-cyan-400/50 bg-cyan-900/10 flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#fff] animate-ping" />
        </div>
      </div>
      
      {/* Top Decor */}
      <div className="absolute -top-[180px] w-px h-20 bg-gradient-to-b from-transparent to-cyan-500" />
    </div>
  );
}
