"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingCards() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const cardCount = 8;
  const radius = 8;

  return (
    <group ref={groupRef}>
      {Array.from({ length: cardCount }).map((_, index) => {
        const angle = (index / cardCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const color = index % 3 === 0 ? "#00d4ff" : index % 3 === 1 ? "#b600ff" : "#00ff9d";

        return (
          <group key={index} position={[x, Math.sin(angle * 2) * 2, z]} rotation={[0, -angle, 0]}>
            {/* Card frame */}
            <mesh>
              <planeGeometry args={[3, 4]} />
              <meshBasicMaterial color={color} transparent opacity={0.1} wireframe />
            </mesh>
            
            {/* Card border */}
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(3, 4)]} />
              <lineBasicMaterial color={color} transparent opacity={0.5} />
            </lineSegments>
          </group>
        );
      })}

      {/* Central particle system */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(
              Array.from({ length: 300 }, () => (Math.random() - 0.5) * 5)
            )}
            itemSize={3}
            args={[new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 5)), 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00d4ff" transparent opacity={0.6} />
      </points>
    </group>
  );
}

export function ProjectCarousel() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <FloatingCards />
      </Canvas>
    </div>
  );
}

