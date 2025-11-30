"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { certifications } from "@/lib/data";
import { 
  Award, 
  ExternalLink, 
  Target,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

const certificationColors = [
  { primary: "#00d4ff", secondary: "#00a8cc", glow: "#00d4ff" },
  { primary: "#00ff9d", secondary: "#00cc7d", glow: "#00ff9d" },
  { primary: "#b600ff", secondary: "#8a00cc", glow: "#b600ff" },
  { primary: "#ff6b9d", secondary: "#cc5579", glow: "#ff6b9d" },
  { primary: "#ffd700", secondary: "#ccaa00", glow: "#ffd700" },
];

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Continuous learning and professional development"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div ref={containerRef} className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <motion.div
            className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ 
              background: "radial-gradient(circle, #00d4ff, transparent)",
              y,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-[10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
            style={{ 
              background: "radial-gradient(circle, #b600ff, transparent)",
              y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -70, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%)",
              height: "2px",
              y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />
          
          {/* Particle effects */}
          {[...new Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: ["#00d4ff", "#00ff9d", "#b600ff", "#ff6b9d", "#ffd700"][i],
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                boxShadow: `0 0 10px ${["#00d4ff", "#00ff9d", "#b600ff", "#ff6b9d", "#ffd700"][i]}`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Certifications Timeline */}
          <div className="relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-2 rounded-lg bg-[#00ff9d]/20 border border-[#00ff9d]/30">
                <Target className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Professional Certifications</h3>
            </motion.div>

            {/* Timeline - Alternating Layout */}
            <div className="space-y-8 md:space-y-12">
              {certifications.map((cert, index) => {
                const colors = certificationColors[index % certificationColors.length];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                    className="relative"
                  >
                    {/* Desktop: Alternating layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-8 items-center relative">
                      {/* Year badge - positioned in front of card with absolute positioning */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        <div className="relative">
                          {/* Glowing background effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full blur-xl opacity-60"
                            style={{
                              background: colors.primary,
                              boxShadow: `0 0 30px ${colors.glow}80`,
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 0.8, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          {/* Year badge */}
                          <motion.div
                            className="relative px-4 py-2 rounded-full text-sm font-black font-mono border-2 backdrop-blur-xl whitespace-nowrap flex items-center gap-2"
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary}30, ${colors.primary}15)`,
                              borderColor: colors.primary,
                              color: colors.primary,
                              boxShadow: `0 0 20px ${colors.glow}60, inset 0 0 20px ${colors.primary}20`,
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Sparkle icon */}
                            <Sparkles className="w-3 h-3" />
                            {cert.year}
                            <Sparkles className="w-3 h-3" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Left side (even) or Right side (odd) */}
                      <div className={`${isEven ? 'md:col-span-5' : 'md:col-span-5 md:col-start-8'} relative z-10`}>
                        {/* Timeline connector line with animated glow */}
                        <motion.div 
                          className="absolute top-1/2 w-full h-0.5 opacity-40"
                          style={{
                            background: `linear-gradient(${isEven ? 'to right' : 'to left'}, ${colors.primary}, transparent)`,
                            [isEven ? 'right' : 'left']: '-2rem',
                            boxShadow: `0 0 10px ${colors.primary}60`,
                          }}
                          animate={{
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Certification Card */}
                        <motion.div
                          className="relative p-6 rounded-2xl backdrop-blur-xl border overflow-hidden group cursor-pointer"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}08)`,
                            borderColor: `${colors.primary}40`,
                          }}
                          whileHover={{ scale: 1.05, x: isEven ? 10 : -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated border gradient */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                              backgroundSize: "200% 200%",
                              padding: "2px",
                              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                            }}
                            animate={{
                              backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />

                          {/* Hover glow */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `0 0 50px ${colors.glow}50, inset 0 0 30px ${colors.primary}20`,
                            }}
                          />

                          {/* Scanning line effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
                            style={{
                              background: `linear-gradient(to bottom, transparent 0%, ${colors.primary}40 50%, transparent 100%)`,
                              height: "2px",
                            }}
                            animate={{
                              y: ["0%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                          {/* Top accent with glow */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-1 opacity-70"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                              boxShadow: `0 0 10px ${colors.primary}60`,
                            }}
                          />

                          {/* Corner accents */}
                          <div 
                            className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 opacity-50"
                            style={{ borderColor: colors.primary }}
                          />
                          <div 
                            className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-50"
                            style={{ borderColor: colors.primary }}
                          />
                          <div 
                            className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-50"
                            style={{ borderColor: colors.primary }}
                          />
                          <div 
                            className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 opacity-50"
                            style={{ borderColor: colors.primary }}
                          />

                          <div className="relative z-10">
                            {/* Badge Icon */}
                            <div className="flex items-center gap-4 mb-4">
                              <motion.div
                                className="p-3 rounded-xl border flex-shrink-0 relative overflow-hidden"
                                style={{
                                  background: `${colors.primary}25`,
                                  borderColor: `${colors.primary}50`,
                                }}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                              >
                                {/* Icon glow */}
                                <div 
                                  className="absolute inset-0 rounded-xl opacity-50"
                                  style={{
                                    boxShadow: `inset 0 0 20px ${colors.primary}40`,
                                  }}
                                />
                                <Award className="w-6 h-6 relative z-10" style={{ color: colors.primary }} />
                              </motion.div>
                              <div className="flex-1">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">
                                  {cert.issuer}
                                </p>
                                <motion.p 
                                  className="text-sm font-mono"
                                  style={{ color: colors.primary }}
                                  initial={{ opacity: 0.5 }}
                                  whileHover={{ opacity: 1 }}
                                >
                                  CERTIFIED
                                </motion.p>
                              </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-bold text-white font-mono mb-3 relative">
                              <span className="relative z-10">{cert.title}</span>
                              {/* Text glow effect */}
                              <motion.span
                                className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50"
                                style={{ color: colors.primary }}
                              >
                              {cert.title}
                              </motion.span>
                            </h4>

                            {/* Verification Link */}
                            {cert.link && (
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link relative"
                                style={{ color: colors.primary }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                <span className="relative z-10">Verify Certificate</span>
                                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:rotate-12" />
                                {/* Link underline effect */}
                                <motion.div
                                  className="absolute bottom-0 left-0 h-0.5"
                                  style={{ background: colors.primary }}
                                  initial={{ width: 0 }}
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* Center Timeline Dot - Removed */}
                      <div className="md:col-span-2 hidden md:block" />

                      {/* Right side placeholder for odd items */}
                      <div className="md:col-span-5 hidden md:block" />
                    </div>

                    {/* Mobile: Stacked layout */}
                    <div className="md:hidden relative pl-16">
                      {/* Timeline line with glow */}
                      <motion.div 
                        className="absolute left-6 top-0 bottom-0 w-0.5 opacity-40"
                        style={{
                          background: `linear-gradient(180deg, ${colors.primary}, transparent)`,
                          boxShadow: `0 0 10px ${colors.primary}60`,
                        }}
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />


                      {/* Year badge - Mobile */}
                      <motion.div
                        className="absolute left-4 top-12 z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-full blur-lg opacity-60"
                            style={{
                              background: colors.primary,
                              boxShadow: `0 0 20px ${colors.glow}80`,
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 0.8, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="relative px-3 py-1 rounded-full text-xs font-black font-mono border-2 backdrop-blur-xl whitespace-nowrap flex items-center gap-1"
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary}30, ${colors.primary}15)`,
                              borderColor: colors.primary,
                              color: colors.primary,
                              boxShadow: `0 0 15px ${colors.glow}60`,
                            }}
                          >
                            <Sparkles className="w-2.5 h-2.5" />
                            {cert.year}
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Certification Card */}
                      <motion.div
                        className="relative p-6 rounded-2xl backdrop-blur-xl border overflow-hidden group"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}08)`,
                          borderColor: `${colors.primary}40`,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Animated border on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                            backgroundSize: "200% 200%",
                            padding: "2px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />

                        {/* Top accent with glow */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 opacity-70"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                            boxShadow: `0 0 10px ${colors.primary}60`,
                          }}
                        />

                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <motion.div
                            className="p-3 rounded-xl border flex-shrink-0 relative overflow-hidden"
                            style={{
                              background: `${colors.primary}25`,
                              borderColor: `${colors.primary}50`,
                            }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div 
                              className="absolute inset-0 rounded-xl opacity-50"
                              style={{
                                boxShadow: `inset 0 0 20px ${colors.primary}40`,
                              }}
                            />
                            <Award className="w-6 h-6 relative z-10" style={{ color: colors.primary }} />
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">
                              {cert.issuer}
                            </p>
                            <motion.p 
                              className="text-xs font-mono mb-2"
                              style={{ color: colors.primary }}
                            >
                              CERTIFIED
                            </motion.p>
                            <h4 className="text-lg font-bold text-white font-mono">
                              {cert.title}
                            </h4>
                          </div>
                        </div>

                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 relative z-10"
                            style={{ color: colors.primary }}
                          >
                            <span>Verify Certificate</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Vertical timeline line - Desktop only with animated glow */}
            <motion.div 
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 opacity-30 z-0"
              style={{
                background: "linear-gradient(180deg, #00d4ff, #b600ff, #00ff9d, #00ff9d)",
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                boxShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                  "0 0 30px rgba(182, 0, 255, 0.4)",
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
