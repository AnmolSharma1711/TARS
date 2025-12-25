import React, { useState } from 'react'
import './Header.css'

function Header({ onNavigate, currentPage }) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Menu Button with Logo */}
      <button 
        className={`mobile-menu-button ${isSidebarOpen ? 'hidden' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <div className="mobile-logo-container">
          {/* Animated Lines around the circle */}
          <svg className={`mobile-logo-lines ${isLogoHovered || isSidebarOpen ? 'active' : ''}`} viewBox="0 0 100 100">
            {/* Outer circle border */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5"/>
            
            {/* Top line */}
            <line 
              x1="50" y1="2" x2="50" y2="15" 
              className="line line-1"
              stroke="url(#gradient1-mobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Right line */}
            <line 
              x1="98" y1="50" x2="85" y2="50" 
              className="line line-2"
              stroke="url(#gradient2-mobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Bottom line */}
            <line 
              x1="50" y1="98" x2="50" y2="85" 
              className="line line-3"
              stroke="url(#gradient3-mobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Left line */}
            <line 
              x1="2" y1="50" x2="15" y2="50" 
              className="line line-4"
              stroke="url(#gradient4-mobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Diagonal lines */}
            <line 
              x1="15" y1="15" x2="23" y2="23" 
              className="line line-5"
              stroke="url(#gradient5-mobile)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <line 
              x1="85" y1="15" x2="77" y2="23" 
              className="line line-6"
              stroke="url(#gradient6-mobile)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <line 
              x1="85" y1="85" x2="77" y2="77" 
              className="line line-7"
              stroke="url(#gradient7-mobile)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <line 
              x1="15" y1="85" x2="23" y2="77" 
              className="line line-8"
              stroke="url(#gradient8-mobile)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient2-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="gradient3-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradient4-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="gradient5-mobile">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradient6-mobile">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient7-mobile">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradient8-mobile">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Logo image in center */}
          <img src="/TARS_Logo.jpeg" alt="TARS Logo" className="mobile-logo-img" />
        </div>
      </button>
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <header 
        className={`header ${isSidebarOpen ? 'open' : ''}`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <nav className="header-nav">
          {/* Logo at top */}
          <div 
            className="header-logo"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="logo-container">
              {/* Animated Lines around the circle */}
              <svg className={`logo-lines ${isSidebarHovered || isLogoHovered ? 'active' : ''}`} viewBox="0 0 100 100">
                {/* Outer circle border */}
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5"/>
                
                {/* Top line */}
                <line 
                  x1="50" y1="2" x2="50" y2="15" 
                  className="line line-1"
                  stroke="url(#gradient1)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                
                {/* Right line */}
                <line 
                  x1="98" y1="50" x2="85" y2="50" 
                  className="line line-2"
                  stroke="url(#gradient2)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                
                {/* Bottom line */}
                <line 
                  x1="50" y1="98" x2="50" y2="85" 
                  className="line line-3"
                  stroke="url(#gradient3)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                
                {/* Left line */}
                <line 
                  x1="2" y1="50" x2="15" y2="50" 
                  className="line line-4"
                  stroke="url(#gradient4)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                
                {/* Diagonal lines */}
                <line 
                  x1="15" y1="15" x2="23" y2="23" 
                  className="line line-5"
                  stroke="url(#gradient5)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <line 
                  x1="85" y1="15" x2="77" y2="23" 
                  className="line line-6"
                  stroke="url(#gradient6)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <line 
                  x1="85" y1="85" x2="77" y2="77" 
                  className="line line-7"
                  stroke="url(#gradient7)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <line 
                  x1="15" y1="85" x2="23" y2="77" 
                  className="line line-8"
                  stroke="url(#gradient8)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="gradient5">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="gradient6">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="gradient7">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="gradient8">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Logo image in center */}
              <img src="/TARS_Logo.jpeg" alt="TARS Logo" className="header-logo-img" />
            </div>
            <span className="text-gradient glow">TARS</span>
          </div>
          
          {/* Vertical menu */}
          <ul className="header-menu">
          <li>
            <a 
              href="#home" 
              title="Home"
              className={currentPage === 'home' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="header-text">Home</span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              title="About"
              className={currentPage === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="header-text">About</span>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              title="Accomplishments"
              className={currentPage === 'projects' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="header-text">Accomplishments</span>
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              title="Team"
              className={currentPage === 'team' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'team')}
            >
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="header-text">Team</span>
            </a>
          </li>
          <li>
            <a 
              href="#events" 
              title="Events"
              className={currentPage === 'events' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'events')}
            >
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="header-text">Events</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    
    {/* GLA Logo in top right corner - only on home page */}
    {currentPage === 'home' && (
      <div className="gla-logo-container">
        <img src="/GLA_Logo.png" alt="GLA Logo" className="gla-logo" />
      </div>
    )}
    </>
  )
}

export default Header
