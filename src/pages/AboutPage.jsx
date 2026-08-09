import React from 'react'
import { LayoutTextFlip } from '../components/ui/layout-text-flip'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

function AboutPage() {
  return (
    <section className="py-20 relative min-h-screen flex flex-col items-center justify-center bg-transparent">
      <ScrollReveal direction="down">
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0">
          <div className="font-orbitron telemetry-small mb-4 text-cyan-500 tracking-widest text-sm">SYS.DIR // COSMIC_DIRECTIVE</div>
          <LayoutTextFlip
            text="MISSION PROTOCOL: "
            words={["INNOVATION 🚀", "COLLABORATION 🛰️", "EXCELLENCE ⭐", "GROWTH 🌌", "VISION 🔭"]}
            className="text-3xl font-normal tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-tight font-orbitron uppercase text-white"
          />
        </motion.div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-3xl mx-auto px-4 mt-12 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
<<<<<<< HEAD
          <p className="text-center text-lg md:text-xl text-gray-400 font-orbitron telemetry-small leading-relaxed">
=======
          <p className="text-center text-lg md:text-xl text-cyan-50/80 font-orbitron tracking-wide leading-relaxed">
>>>>>>> e984674fbbf01da92d2a24b65c17845de6c30ab0
            STAR Command is committed to pushing the boundaries of the known universe, fostering stellar teamwork, achieving astronomical excellence, 
            driving continuous growth, and maintaining a clear vision for the future of interstellar technology, intelligent systems, and robotics.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default AboutPage
