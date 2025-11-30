"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full rounded-full border-2 border-white" />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          background: "radial-gradient(circle, #00d4ff, transparent)",
          filter: "blur(8px)",
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </>
  );
}

