"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Award, 
  FileText, 
  Mail
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home, color: "#00d4ff" },
  { id: "about", label: "About", icon: User, color: "#00ff9d" },
  { id: "experience", label: "Experience", icon: Briefcase, color: "#b600ff" },
  { id: "projects", label: "Projects", icon: Code2, color: "#00d4ff" },
  { id: "skills", label: "Skills", icon: Award, color: "#00ff9d" },
  { id: "certifications", label: "Certs", icon: FileText, color: "#b600ff" },
  { id: "contact", label: "Contact", icon: Mail, color: "#00d4ff" },
];

export function FuturisticNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const current = sections.find(
        section => section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        style={{ opacity }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Navigation Container */}
        <div className="relative">
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-xl opacity-20 -z-10"
            style={{
              background: "radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent)",
            }}
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              opacity: isHovered ? [0.2, 0.3, 0.2] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glass container */}
          <div
            className="relative p-2 rounded-lg backdrop-blur-xl border overflow-visible"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(0, 212, 255, 0.3)",
              boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
            }}
          >
            {/* Animated border scan */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                border: "1px solid rgba(0, 212, 255, 0.2)",
              }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Corner brackets */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#00d4ff]/50" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#00d4ff]/50" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#00d4ff]/50" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#00d4ff]/50" />

            {/* Navigation Items */}
            <div className="relative z-10 space-y-1.5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    className="relative group w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full"
                        style={{
                          background: `linear-gradient(180deg, ${item.color}, transparent)`,
                          boxShadow: `0 0 8px ${item.color}80`,
                        }}
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Nav Item Container */}
                    <motion.button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative flex items-center justify-center w-full rounded-md transition-all duration-300 p-2 ${
                        isActive
                          ? "bg-white/10"
                          : "bg-transparent hover:bg-white/8"
                      }`}
                      animate={{
                        scale: isActive ? [1, 1.08, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.12, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{
                          color: isActive ? item.color : "rgba(255, 255, 255, 0.6)",
                          filter: isActive ? `drop-shadow(0 0 6px ${item.color}80)` : "none",
                        }}
                      />

                      {/* Pulsing dot for active item */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full"
                          style={{
                            background: item.color,
                            boxShadow: `0 0 6px ${item.color}`,
                          }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.button>

                    {/* Tooltip on hover */}
                    <motion.div
                      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-md backdrop-blur-xl border opacity-0 pointer-events-none whitespace-nowrap z-50 group-hover:opacity-100"
                      style={{
                        background: "rgba(0, 0, 0, 0.95)",
                        borderColor: `${item.color}50`,
                        boxShadow: `0 0 10px ${item.color}30`,
                      }}
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                      <div
                        className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-3 border-b-3 border-r-3 border-transparent"
                        style={{
                          borderRightColor: item.color,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg opacity-40"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)",
              }}
              animate={{
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

