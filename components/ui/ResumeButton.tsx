"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

export function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = "/NOMAN_MALIK_RESUME.pdf";
    link.download = "Noman_Malik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 hidden lg:block"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)",
        }}
        animate={{
          scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: isHovered ? [0.5, 0.8, 0.5] : [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main button */}
      <motion.button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glass container */}
        <div
          className="relative p-4 rounded-full backdrop-blur-xl border overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(0, 212, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 212, 255, 0.2)",
          }}
        >
          {/* Animated border scan */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid rgba(0, 212, 255, 0.3)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(0, 212, 255, 0.5), transparent)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00d4ff]/60" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00d4ff]/60" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00d4ff]/60" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00d4ff]/60" />

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Download
                className="w-6 h-6 text-[#00d4ff]"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))",
                }}
              />
            </motion.div>
          </div>

          {/* Pulsing dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00ff9d]"
            style={{
              boxShadow: "0 0 10px #00ff9d",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Tooltip - Clean and minimal */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-md backdrop-blur-xl border pointer-events-none"
              style={{
                background: "rgba(10, 10, 15, 0.98)",
                borderColor: "rgba(0, 212, 255, 0.4)",
                boxShadow: "0 4px 20px rgba(0, 212, 255, 0.2)",
              }}
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xs font-mono font-medium text-[#00d4ff] whitespace-nowrap">
                Download Resume PDF
              </span>
              <div
                className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent"
                style={{
                  borderRightColor: "rgba(0, 212, 255, 0.4)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00d4ff]"
            style={{
              boxShadow: "0 0 6px #00d4ff",
              left: `${50 + (i - 1) * 20}%`,
              top: `${50 + (i - 1) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.button>
    </motion.div>
  );
}

