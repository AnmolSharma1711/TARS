import { useState } from 'react';
import SidebarNavigation from './components/SidebarNavigation';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import EventsPage from './pages/EventsPage';
import { ShootingStars } from './components/ui/shooting-stars';
import { StarsBackground } from './components/ui/stars-background';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'team':
        return <TeamPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'events':
        return <EventsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <ShootingStars />
      <StarsBackground />
      <SidebarNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 TARS - Technology and Automation Research Society. All rights reserved.</p>
          <div className="footer-circuit"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
