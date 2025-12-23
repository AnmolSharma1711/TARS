import React, { useState } from 'react'
import { IntroSequence } from './components/IntroSequence'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import SpaceScene from './components/SpaceScene'
import FeatureCards from './components/FeatureCards'
import TeamCard from './components/TeamCard'
import EventCards from './components/EventCards'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleIntroComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1000); // Wait for transition out
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Main Content */}
      {!showIntro && (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
          {/* Background Gradient & Grid */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
          <div className="fixed inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* 3D Background */}
          <div className="fixed inset-0 z-0">
            <SpaceScene />
          </div>
          
          {/* Vertical Header */}
          <Header onNavigate={setCurrentPage} currentPage={currentPage} />
          
          {/* Content with left margin for sidebar */}
          <div className="relative z-10 ml-0 md:ml-20">
            {currentPage === 'home' && <Hero />}
            {currentPage === 'about' && <FeatureCards />}
            {currentPage === 'team' && <TeamCard />}
            {currentPage === 'events' && <EventCards />}
            
            {/* Always show footer at bottom */}
            <Footer />
          </div>
        </div>
      )}

      {/* Intro Overlay */}
      {showIntro && (
        <div className={`absolute inset-0 z-50 transition-all duration-1000 ease-in-out ${fadeOut ? 'opacity-0 scale-110 pointer-events-none blur-sm' : 'opacity-100'}`}>
          <IntroSequence onComplete={handleIntroComplete} />
        </div>
      )}
    </div>
  )
}

export default App
