import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function MovingParticles() {
  const particlesRef = useRef()
  
  // Generate particle positions
  const particleCount = 1500
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    // Light blue color palette
    const colorPalette = [
      new THREE.Color('#4a90e2'),
      new THREE.Color('#5da5f5'),
      new THREE.Color('#80b9ff'),
      new THREE.Color('#a3d5ff'),
      new THREE.Color('#ffffff'),
    ]
    
    for (let i = 0; i < particleCount; i++) {
      // Random position in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Random velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
      
      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, velocities, colors }
  }, [])
  
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Update positions with velocity
        positions[i3] += particles.velocities[i3]
        positions[i3 + 1] += particles.velocities[i3 + 1]
        positions[i3 + 2] += particles.velocities[i3 + 2]
        
        // Wrap around if out of bounds
        if (Math.abs(positions[i3]) > 50) positions[i3] *= -1
        if (Math.abs(positions[i3 + 1]) > 50) positions[i3 + 1] *= -1
        if (Math.abs(positions[i3 + 2]) > 50) positions[i3 + 2] *= -1
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#5da5f5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a90e2" />
      
      {/* Moving Particles */}
      <MovingParticles />
    </Canvas>
  )
}

export default SpaceScene
