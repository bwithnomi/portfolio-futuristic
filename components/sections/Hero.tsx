"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ParticleField } from "../three/ParticleField";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines py-16 md:py-24 lg:py-32">
      <ParticleField />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 glitch font-mono"
            data-text={personalInfo.name}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2, 
              ease: [0.6, -0.05, 0.01, 0.99],
              type: "spring",
              stiffness: 100
            }}
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Job Title */}
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10 md:mb-12 text-[#00d4ff] font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              ease: "easeOut" 
            }}
          >
            {personalInfo.role}
          </motion.h2>

          <motion.div
            className="mb-10 md:mb-12 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8, 
              ease: "easeOut" 
            }}
          >
            {/* Value Proposition */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 font-mono max-w-3xl leading-relaxed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Building enterprise <span className="text-[#00d4ff] font-bold">microservices & Web3 applications</span> with modern architecture
            </motion.p>

            {/* Trust Signals */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex flex-col items-center gap-1.5 min-w-[80px] md:min-w-[90px]">
                <span className="text-2xl md:text-3xl font-bold text-[#00ff9d] font-mono">6+</span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider whitespace-nowrap">Years</span>
              </div>
              
              <div className="w-px h-12 bg-gray-700/50 hidden sm:block"></div>
              
              <div className="flex flex-col items-center gap-1.5 min-w-[80px] md:min-w-[90px]">
                <span className="text-2xl md:text-3xl font-bold text-[#00d4ff] font-mono">50+</span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider whitespace-nowrap">Projects</span>
              </div>
              
              <div className="w-px h-12 bg-gray-700/50 hidden sm:block"></div>
              
              <div className="flex flex-col items-center gap-1.5 min-w-[80px] md:min-w-[90px]">
                <span className="text-2xl md:text-3xl font-bold text-[#b600ff] font-mono">30+</span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider whitespace-nowrap">Clients</span>
              </div>
              
              <div className="w-px h-12 bg-gray-700/50 hidden sm:block"></div>
              
              <div className="flex flex-col items-center gap-1.5 min-w-[80px] md:min-w-[90px]">
                <div className="relative">
                  <span className="text-2xl md:text-3xl font-bold text-[#00ff9d] font-mono">✓</span>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse shadow-[0_0_6px_rgba(0,255,157,0.8)]"></span>
                </div>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider whitespace-nowrap">Open to Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact & Social Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center mt-6 md:mt-8 mb-6 md:mb-8 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm gap-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 150
            }}
          >
            {/* Email Button */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
              title="Email me"
              className="group relative p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#00ff9d]/10 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px] flex items-center justify-center"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#00ff9d] group-hover:drop-shadow-[0_0_10px_rgba(0,255,157,0.8)] transition-all" />
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              title="GitHub"
              className="group relative p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#00d4ff]/10 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px] flex items-center justify-center"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-[#00d4ff] group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all" />
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile"
              title="LinkedIn"
              className="group relative p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#b600ff]/10 hover:shadow-[0_0_30px_rgba(182,0,255,0.5)] min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px] flex items-center justify-center"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-[#b600ff] group-hover:drop-shadow-[0_0_10px_rgba(182,0,255,0.8)] transition-all" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 px-4 mb-16 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.7, 
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.a
              href="#projects"
              className="cyber-button min-w-[200px] md:min-w-[240px] text-center shadow-[0_0_20px_rgba(0,212,255,0.3)] text-base md:text-lg font-semibold"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 35px rgba(0,212,255,0.7)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              className="cyber-button border-[#b600ff] text-[#b600ff] hover:bg-[#b600ff] hover:text-[#0a0a0f] min-w-[200px] md:min-w-[220px] text-center shadow-[0_0_20px_rgba(182,0,255,0.3)] transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(182,0,255,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pb-4 md:pb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              {/* Outer rotating ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-[#00d4ff]/30 group-hover:border-[#00d4ff] transition-all duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle rotating ring (reverse) */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-[#b600ff]/30 group-hover:border-[#b600ff] transition-all duration-300"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner circle with arrow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#b600ff]/20 backdrop-blur-md border border-[#00d4ff]/50 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-[#00d4ff] group-hover:text-[#b600ff] group-hover:drop-shadow-[0_0_8px_rgba(182,0,255,0.8)] transition-all" />
              </div>
            </div>
            
            {/* Animated line with gradient */}
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-[#00d4ff] via-[#b600ff] to-transparent"
              animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

