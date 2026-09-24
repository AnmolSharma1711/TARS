import React from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Home } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center relative z-10">
      <ScrollReveal direction="down">
        <div className="font-orbitron text-xs tracking-[0.4em] text-red-400 mb-4 animate-pulse">
          ERROR // 404: SECTOR_NOT_FOUND
        </div>
        
        <h1 className="text-6xl md:text-8xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-yellow-400 mb-6 drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
          404
        </h1>
        
        <div className="title-underline mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-orbitron telemetry-small mb-10 leading-relaxed">
          The celestial coordinates you are trying to reach do not exist in STAR star charts. You may have drifted into uncharted subspace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-orbitron text-sm font-bold tracking-wider uppercase rounded hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return to Command
          </Link>
          
          <Link
            to="/projects"
            className="px-8 py-3.5 bg-slate-900/80 border border-cyan-500/40 text-cyan-400 font-orbitron text-sm font-bold tracking-wider uppercase rounded hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            Explore Missions
          </Link>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default NotFoundPage
