import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/gemini_generated_image_rzmp3lrzmp3lrzmp.png" alt="TARS Logo" />
          <span>TARS</span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`nav-link ${currentPage === page.id ? 'active' : ''}`}
              onClick={() => handleNavClick(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
