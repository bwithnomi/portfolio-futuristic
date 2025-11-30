"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const meshRef2 = useRef<THREE.Points>(null);
  const meshRef3 = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particle positions - increased count and spread
  const particlesCount = 8000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  const positions2 = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  const positions3 = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    return pos;
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003;
      meshRef.current.rotation.x = mousePosition.current.y * 0.15 + Math.sin(time * 0.2) * 0.1;
      meshRef.current.rotation.y += mousePosition.current.x * 0.002;
      
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time * 0.3 + positions[i] * 0.1) * 0.01;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (meshRef2.current) {
      meshRef2.current.rotation.y -= 0.0004;
      meshRef2.current.rotation.x = -mousePosition.current.y * 0.1 + Math.cos(time * 0.25) * 0.1;
      meshRef2.current.rotation.z = mousePosition.current.x * 0.001;
    }

    if (meshRef3.current) {
      meshRef3.current.rotation.y += 0.0002;
      meshRef3.current.rotation.x = Math.sin(time * 0.15) * 0.05;
      meshRef3.current.rotation.z = Math.cos(time * 0.18) * 0.05;
    }
  });

  return (
    <>
      {/* Primary particle layer - Cyan */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00d4ff"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Secondary particle layer - Purple */}
      <points ref={meshRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions2}
            itemSize={3}
            args={[positions2, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#b600ff"
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Tertiary particle layer - Green */}
      <points ref={meshRef3}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions3}
            itemSize={3}
            args={[positions3, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ff9d"
          transparent
          opacity={0.4}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}

