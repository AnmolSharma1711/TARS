import React from 'react'
import './Header.css'

function Header({ onNavigate, currentPage }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        {/* Logo at top */}
        <div className="header-logo">
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
  )
}

export default Header
