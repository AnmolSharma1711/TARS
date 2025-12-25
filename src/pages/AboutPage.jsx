import React from 'react'
import { LayoutTextFlip } from '../components/ui/layout-text-flip'
import { motion } from 'framer-motion'

function AboutPage() {
  return (
    <section className="py-20 relative min-h-screen flex flex-col items-center justify-center">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0">
        <LayoutTextFlip
          text="Our Core Value: "
          words={["Innovation 💡", "Collaboration 🤝", "Excellence ⭐", "Growth 📈", "Vision 🔭"]}
        />
      </motion.div>
      <p className="mt-8 text-center text-lg text-cyan-400/80 dark:text-neutral-400 max-w-3xl mx-auto px-4">
        We are committed to pushing boundaries, fostering teamwork, achieving excellence, 
        continuous growth, and maintaining a clear vision for the future of technology and robotics.
      </p>
    </section>
  )
}

export default AboutPage
