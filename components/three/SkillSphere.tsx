"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OrbitingSkills() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  const skillCount = 15;
  const radius = 5;

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00d4ff" wireframe />
      </mesh>

      {/* Orbiting skill nodes */}
      {Array.from({ length: skillCount }).map((_, index) => {
        const phi = Math.acos(-1 + (2 * index) / skillCount);
        const theta = Math.sqrt(skillCount * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        const colors = ["#00d4ff", "#b600ff", "#00ff9d"];
        const color = colors[index % 3];

        return (
          <group key={index}>
            {/* Connecting line to core */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([0, 0, 0, x, y, z])}
                  itemSize={3}
                  args={[new Float32Array([0, 0, 0, x, y, z]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color={color} transparent opacity={0.2} />
            </line>

            {/* Skill node */}
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshBasicMaterial color={color} transparent opacity={0.8} />
            </mesh>

            {/* Orbit ring */}
            <mesh position={[x, y, z]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
              <torusGeometry args={[0.3, 0.02, 8, 32]} />
              <meshBasicMaterial color={color} transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function SkillSphere() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <OrbitingSkills />
      </Canvas>
    </div>
  );
}

