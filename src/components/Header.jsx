import React, { useState, useEffect } from 'react'
import './Header.css'

function Header({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 900) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      onNavigate('home');
    }
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Left */}
          <div className="navbar-logo" onClick={handleLogoClick}>
            <img src="/STAR_Logo.png" alt="STAR" className="logo-image" />
            <span className="logo-text font-orbitron text-gradient">STAR</span>
          </div>

          {/* Menu Centered */}
          <nav className={`navbar-menu font-inter ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {['home', 'about', 'projects', 'team', 'events', 'sponsors'].map((page) => (
              <a
                key={page}
                href={`#${page}`}
                className={`nav-link ${currentPage === page ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, page)}
              >
                {page.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* CTA Right */}
          <div className="navbar-cta">
            {/* 
            <button className="cta-button font-orbitron">
              <span className="cta-text">COMMAND_LOGIN</span>
              <div className="cta-glow"></div>
            </button> 
            */}
          </div>
        </div>
      </header>

      {/* GLA Logo in top right corner - only on home page */}
      {currentPage === 'home' && (
        <div className="gla-logo-container">
          <img src="/GLA_Logo.png" alt="GLA Logo" className="gla-logo" />
        </div>
      )}
    </>
  );
}

export default Header

