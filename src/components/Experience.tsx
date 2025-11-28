import { OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Particle Field - Subtle
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#3b82f6"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

export const Experience = () => {
  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        enableRotate={false}
      />
      
      {/* Particle Field - Subtle */}
      <ParticleField />

      {/* Soft Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={1.5} color="#3b82f6" />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.5} 
        penumbra={1} 
        intensity={0.8} 
        color="#60a5fa"
      />

      <Environment preset="city" />
    </>
  );
};
