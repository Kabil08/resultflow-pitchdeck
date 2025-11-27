import { OrbitControls, Environment, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Elegant Neural Network Lines
const NeuralLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const positions = [];
    // Create a more spread out network
    for (let i = 0; i < 12; i++) {
      positions.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ),
      });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {/* Connection lines between nodes */}
      {nodes.map((node, i) => {
        if (i < nodes.length - 1) {
          const start = node.position;
          const end = nodes[(i + 1) % nodes.length].position;
          
          return (
            <line key={`line-${i}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array([...start.toArray(), ...end.toArray()]), 3]}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#3b82f6" opacity={0.4} transparent />
            </line>
          );
        }
        return null;
      })}
      
      {/* Nodes at connection points */}
      {nodes.map((node, i) => (
        <Sphere key={`node-${i}`} position={node.position} args={[0.12, 16, 16]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={1.5}
            toneMapped={false}
          />
        </Sphere>
      ))}
    </group>
  );
};


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
      
      {/* Neural Network Lines - Elegant background */}
      <NeuralLines />
      
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
