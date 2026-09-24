import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'TEAM', path: '/team' },
    { label: 'EVENTS', path: '/events' },
    { label: 'SPONSORS', path: '/sponsors' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Left */}
          <Link to="/" className="navbar-logo">
            <img src="/STAR_Logo.png" alt="STAR Logo" className="logo-image" />
            <span className="logo-text font-orbitron text-gradient">STAR</span>
          </Link>

          {/* Menu Centered */}
          <nav className={`navbar-menu font-inter ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* GLA Logo in bottom right corner - only on home page */}
      {location.pathname === '/' && (
        <div className="gla-logo-container">
          <img src="/GLA_Logo.png" alt="GLA Logo" className="gla-logo" />
        </div>
      )}
    </>
  );
}

export default Header
