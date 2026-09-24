import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function MovingParticles() {
  const particlesRef = useRef()
  
  // Generate particle positions
  const particleCount = 1500
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    // Deep Space Blue and Cosmos Yellow palette
    const colorPalette = [
      new THREE.Color('#00E5FF'),
      new THREE.Color('#FFD700'),
      new THREE.Color('#FFA033'),
      new THREE.Color('#FFFFFF'),
      new THREE.Color('#888888'),
    ]
    
    for (let i = 0; i < particleCount; i++) {
      // Random position in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [particleCount])
  
  useFrame((_, delta) => {
    // Battery & CPU optimization: pause when browser tab is inactive
    if (document.hidden) return
    
    if (particlesRef.current) {
      // Smooth GPU-accelerated rotation (0 CPU buffer updates per frame)
      particlesRef.current.rotation.y += delta * 0.02
      particlesRef.current.rotation.x += delta * 0.01
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
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
      gl={{ powerPreference: 'high-performance', antialias: false }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00E5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFA033" />
      
      {/* Moving Particles */}
      <MovingParticles />
    </Canvas>
  )
}

export default SpaceScene
