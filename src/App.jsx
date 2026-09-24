import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IntroSequence } from './components/IntroSequence'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import TeamPage from './pages/TeamPage'
import EventsPage from './pages/EventsPage'
import SponsorsPage from './pages/SponsorsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'
import SpaceScene from './components/SpaceScene'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // Check if user has already experienced the intro sequence during this session
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('star_intro_seen');
  });
  const [fadeOut, setFadeOut] = useState(false);

  const handleIntroComplete = () => {
    sessionStorage.setItem('star_intro_seen', 'true');
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1000);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative w-full min-h-screen overflow-x-hidden">
        {/* Main Application Content */}
        <div className="relative min-h-screen bg-space-900 text-white overflow-x-hidden font-inter">
          {/* Background Gradient & Grid */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-800 via-space-900 to-black z-0 pointer-events-none" />
          <div className="fixed inset-0 z-0 opacity-20 cyber-grid pointer-events-none" />
          
          {/* 3D Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <SpaceScene />
          </div>
          
          {/* Top Navbar */}
          <Header />
          
          {/* Main Route Content */}
          <main className="relative z-10 overflow-visible pt-16 min-h-[calc(100vh-120px)]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>

        {/* Intro Overlay with Smooth Fadeout */}
        {showIntro && (
          <div className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${fadeOut ? 'opacity-0 scale-110 pointer-events-none blur-sm' : 'opacity-100'}`}>
            <IntroSequence onComplete={handleIntroComplete} />
          </div>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
