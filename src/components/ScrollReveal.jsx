import React from 'react'
import { motion } from 'framer-motion'

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  duration = 0.8,
  delay = 0,
  distance = 50,
  className = '' 
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } }
      case 'down': return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } }
      case 'left': return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } }
      case 'right': return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } }
      case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      default: return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } }
    }
  }

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
