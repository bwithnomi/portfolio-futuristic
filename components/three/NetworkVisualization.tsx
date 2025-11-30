"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Create network nodes
  const { nodePositions, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const lines: number[] = [];
    const nodeCount = 50;

    // Create random node positions
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )
      );
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    return {
      nodePositions: nodes,
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }

    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Network nodes */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#b600ff" : "#00ff9d"}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export function NetworkVisualization() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <NetworkNodes />
      </Canvas>
    </div>
  );
}

