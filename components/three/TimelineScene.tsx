"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TimelineObjects() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central line */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 15, 8]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </mesh>

      {/* Timeline markers */}
      {[0, 1, 2].map((index) => {
        const yPos = 4 - index * 4;
        const colors = ["#00d4ff", "#b600ff", "#00ff9d"];
        
        return (
          <group key={index} position={[0, yPos, 0]}>
            {/* Marker sphere */}
            <mesh>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.8} />
            </mesh>
            
            {/* Rotating ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.5, 0.05, 8, 32]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.5} />
            </mesh>
          </group>
        );
      })}

      {/* Floating geometric shapes */}
      <mesh position={[3, 2, 0]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="#00d4ff" wireframe />
      </mesh>
      
      <mesh position={[-3, -1, 0]} rotation={[0.3, 0.8, 0]}>
        <octahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#b600ff" wireframe />
      </mesh>
      
      <mesh position={[2.5, -4, 0]} rotation={[0.7, 0.2, 0]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#00ff9d" wireframe />
      </mesh>
    </group>
  );
}

export function TimelineScene() {
  return (
    <div className="absolute right-0 top-0 w-1/3 h-full -z-10 opacity-40 hidden lg:block">
      <Canvas camera={{ position: [5, 0, 8], fov: 50 }}>
        <TimelineObjects />
      </Canvas>
    </div>
  );
}

