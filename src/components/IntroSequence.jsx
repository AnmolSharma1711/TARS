import React, { useEffect, useState, useRef } from 'react';
import { CircuitBoard } from './CircuitBoard';
import { RotatingRings } from './RotatingRings';
import { IntroParticles } from './IntroParticles';
import { CurrentLines } from './CurrentLines';
import './IntroSequence.css';

export function IntroSequence({ onComplete }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Simulation of system initialization
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.random() * 2 + 0.5;
        const newVal = prev + diff;
        return newVal > 100 ? 100 : newVal;
      });
    }, 50);

    // Animation loop for automatic floating/drifting
    let animationFrameId;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      setTime(currentTime);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
        clearInterval(progressInterval);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculate automatic rotation (Floating effect)
  // Using sine waves with different frequencies/phases for organic movement
  const rotX = Math.sin(time * 0.5) * 5; 
  const rotY = Math.cos(time * 0.3) * 8; 

  return (
    <div 
      ref={containerRef}
      className={`intro-sequence bg-slate-950 ${mounted ? 'mounted' : ''}`}
    >
      {/* Background Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
      <div className="intro-grid" />

      {/* Main 3D Container */}
      <div 
        className="intro-3d-container"
        style={{
          transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(0.9)`
        }}
      >
        <CircuitBoard />
        <RotatingRings />

        {/* Floating Side Panels (Left) */}
        <div className="side-panel-left hidden md:block">
             <div className="panel-status">
                <h3 className="panel-title">SYSTEM STATUS</h3>
                <div className="space-y-2">
                    <div className="progress-bar">
                        <div 
                          className="progress-fill cyan" 
                          style={{ width: `${Math.min(progress * 1.2, 100)}%` }}
                        ></div>
                    </div>
                    <div className="progress-label">
                        <span>LOADING_ASSETS</span>
                        <span>{Math.floor(progress)}%</span>
                    </div>
                     <div className="progress-bar">
                        <div 
                          className="progress-fill violet"
                          style={{ width: `${Math.min(progress * 0.8, 100)}%` }}
                        ></div>
                    </div>
                    <div className="progress-label">
                        <span>MEMORY_ALLOC</span>
                        <span>{progress < 100 ? 'ALLOCATING...' : 'OPTIMIZED'}</span>
                    </div>
                </div>
             </div>
             <div className="mt-4 flex gap-2">
                <div className={`status-indicator ${progress < 100 ? 'loading' : 'ready'}`}></div>
                <div className="text-[10px] font-mono text-cyan-400">
                    {progress < 100 ? 'INITIALIZING NEURAL LINK...' : 'LINK ESTABLISHED'}
                </div>
             </div>
        </div>

        {/* Floating Side Panels (Right) */}
        <div className="side-panel-right hidden md:flex">
             <div className="writing-vertical-rl text-[10px] tracking-widest text-cyan-600 opacity-70">
                 {progress < 100 ? 'ESTABLISHING_SECURE_CONNECTION' : 'SECURE_CONNECTION_ACTIVE'}
             </div>
             <div className="w-1 h-32 bg-slate-800 relative overflow-hidden">
                 <div className={`absolute bottom-0 w-full transition-all duration-500 ${progress < 100 ? 'bg-gradient-to-t from-orange-500 to-yellow-300 animate-[bounce_2s_infinite] h-1/2' : 'bg-cyan-500 h-full shadow-[0_0_10px_rgba(6,182,212,0.8)]'}`}></div>
             </div>
             <div className={`text-xs font-mono transition-colors ${progress < 100 ? 'text-orange-400' : 'text-cyan-400'}`}>
                {progress < 100 ? 'BUFFERING' : 'ONLINE'}
             </div>
        </div>

        {/* Central Content */}
        <div className="intro-central-content">
            <h1 className="glitch-title">
                <span className="glitch-layer">TARS</span>
                <span className="glitch-red">TARS</span>
                <span className="glitch-blue">TARS</span>
            </h1>
            
            <div className="h-20 w-full max-w-md flex flex-col items-center justify-center relative">
                {progress < 100 ? (
                    <>
                        <p className="loading-text">
                            INITIALIZING SYSTEM... {Math.floor(progress)}%
                        </p>
                        <div className="loading-bar-container">
                             <div 
                                className="loading-bar-fill" 
                                style={{ width: `${progress}%` }}
                             >
                                <div className="loading-bar-indicator"></div>
                             </div>
                        </div>
                    </>
                ) : (
                    <p className="ready-text">
                        System Ready
                    </p>
                )}
            </div>
            
            <div className={`enter-button-container ${progress === 100 ? '' : 'hidden'}`}>
                <button 
                    onClick={onComplete}
                    className="enter-button"
                >
                    <span className="enter-button-text">Enter System</span>
                    <div className="enter-button-bg"></div>
                </button>
            </div>
        </div>

      </div>

      {/* Enhanced Overlays */}
      <IntroParticles />
      <CurrentLines />
      
      {/* Scanline Overlay */}
      <div className="scanline-grid" />
      <div className="scanline-overlay" />

    </div>
  );
}
