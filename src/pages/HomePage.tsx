import { Cpu, Zap, Code, Cog } from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Canvas background
    const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    }
    
    function drawGrid() {
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.05)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    function createParticles() {
      const container = document.getElementById('particlesContainer');
      if (!container) return;
      
      container.innerHTML = '';
      
      const particleCount = 120;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle particle-core';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const radius = 400 + Math.random() * 300;
        const z = (Math.random() - 0.5) * 400;
        
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;
        
        const letterIndex = i % 4;
        const letterSpacing = 130;
        const targetX = (letterIndex - 1.5) * letterSpacing + (Math.random() - 0.5) * 40;
        const targetY = (Math.random() - 0.5) * 60;
        
        particle.style.setProperty('--start-x', `${startX}px`);
        particle.style.setProperty('--start-y', `${startY}px`);
        particle.style.setProperty('--start-z', `${z}px`);
        particle.style.setProperty('--target-x', `${targetX}px`);
        particle.style.setProperty('--target-y', `${targetY}px`);
        particle.style.setProperty('--duration', `${3 + Math.random() * 1}s`);
        particle.style.setProperty('--delay', `${Math.random() * 0.8}s`);
        
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        container.appendChild(particle);
        
        if (i % 3 === 0) {
          const trail = document.createElement('div');
          trail.className = 'particle particle-trail';
          trail.style.setProperty('--start-x', `${startX * 0.9}px`);
          trail.style.setProperty('--start-y', `${startY * 0.9}px`);
          trail.style.setProperty('--start-z', `${z * 0.9}px`);
          trail.style.setProperty('--target-x', `${targetX}px`);
          trail.style.setProperty('--target-y', `${targetY}px`);
          trail.style.setProperty('--duration', `${3.5 + Math.random() * 1}s`);
          trail.style.setProperty('--delay', `${Math.random() * 0.8 + 0.2}s`);
          trail.style.left = `${centerX}px`;
          trail.style.top = `${centerY}px`;
          container.appendChild(trail);
        }
      }
    }
    
    createParticles();
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      const logoWrapper = document.querySelector('.animated-logo-wrapper') as HTMLElement;
      if (logoWrapper) {
        logoWrapper.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="page home-page">
      <canvas className="bg-canvas" id="bgCanvas"></canvas>
      <div className="bg-gradient-anim"></div>
      
      <div className="particles-container" id="particlesContainer"></div>
      
      <div className="data-stream" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="data-stream" style={{ left: '30%', animationDelay: '1s' }}></div>
      <div className="data-stream" style={{ left: '50%', animationDelay: '0.5s' }}></div>
      <div className="data-stream" style={{ left: '70%', animationDelay: '1.5s' }}></div>
      <div className="data-stream" style={{ left: '90%', animationDelay: '0.7s' }}></div>
      
      <div className="hero-section animated-hero">
        <div className="energy-field">
          <div className="energy-ring ring-1"></div>
          <div className="energy-ring ring-2"></div>
          <div className="energy-ring ring-3"></div>
        </div>
        
        <div className="fusion-core"></div>
        
        <div className="animated-logo-wrapper">
          <div className="circuit-pattern circuit-top"></div>
          
          <div className="logo-main-animated">
            <span className="logo-letter-animated" style={{ '--letter-index': 0 } as React.CSSProperties}>T</span>
            <span className="logo-letter-animated" style={{ '--letter-index': 1 } as React.CSSProperties}>A</span>
            <span className="logo-letter-animated" style={{ '--letter-index': 2 } as React.CSSProperties}>R</span>
            <span className="logo-letter-animated" style={{ '--letter-index': 3 } as React.CSSProperties}>S</span>
          </div>
          
          <div className="circuit-pattern circuit-bottom"></div>
          
          <div className="logo-subtitle-animated">
            Technology and Automation Research Society
          </div>
        </div>
        
        <div className="hex-decoration hex-1"></div>
        <div className="hex-decoration hex-2"></div>
        <div className="hex-decoration hex-3"></div>
        <div className="hex-decoration hex-4"></div>
      </div>

      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>

      <div className="intro-section">
        <div className="intro-content">
          <h3 className="section-title">Welcome to the Future</h3>
          <p className="intro-text">
            TARS is a cutting-edge community of innovators, researchers, and technology enthusiasts
            dedicated to pushing the boundaries of automation and artificial intelligence. We bridge
            the gap between theoretical research and practical applications.
          </p>
          <p className="intro-text">
            Our mission is to foster innovation, collaboration, and learning in the fields of
            robotics, machine learning, IoT, and automation technologies. Join us in shaping the
            future of technology.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Cpu size={32} />
            </div>
            <h4>Research</h4>
            <p>Cutting-edge research in AI, ML, and automation technologies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={32} />
            </div>
            <h4>Innovation</h4>
            <p>Building revolutionary solutions for real-world problems</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Code size={32} />
            </div>
            <h4>Development</h4>
            <p>Hands-on projects using latest tech stacks and frameworks</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Cog size={32} />
            </div>
            <h4>Collaboration</h4>
            <p>Working together to create impactful technological solutions</p>
          </div>
        </div>
      </div>

      <div className="circuit-bg"></div>
    </div>
  );
}
