"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { experience } from "@/lib/data";
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Briefcase,
  TrendingUp,
  Rocket,
  Code2,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Monochrome experience variants - different shades of white/gray for visual distinction
const experienceVariants = [
  { opacity: 0.08, borderOpacity: 0.3, glowIntensity: 0.15 },
  { opacity: 0.1, borderOpacity: 0.4, glowIntensity: 0.2 },
  { opacity: 0.12, borderOpacity: 0.5, glowIntensity: 0.25 },
];

const techIcons: Record<string, any> = {
  "Node.js": Code2,
  "Docker": Layers,
  "Redis": Zap,
  "OAuth2.0": Cpu,
  "AWS": Rocket,
  "Laravel": Code2,
  "Vue.js": Code2,
  "Stripe": Zap,
  "PayPal": Zap,
  "MySQL": Layers,
  "PHP": Code2,
  "JavaScript": Code2,
};

function AnimatedCounter({ target, suffix = "" }: Readonly<{ target: number; suffix?: string }>) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Calculate total years of experience
  const totalYears = experience.reduce((acc, exp) => {
    const [startMonth, startYear] = exp.period.split(" – ")[0].split("/");
    const endDate = exp.period.split(" – ")[1];
    const [endMonth, endYear] = endDate === "present" 
      ? [new Date().getMonth() + 1, new Date().getFullYear()]
      : endDate.split("/");
    
    const start = new Date(parseInt(startYear), parseInt(startMonth) - 1);
    const end = endDate === "present" 
      ? new Date()
      : new Date(parseInt(endYear), parseInt(endMonth) - 1);
    
    const years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return acc + years;
  }, 0);

  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="Building the future, one line of code at a time"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div ref={containerRef} className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Hexagonal patterns */}
          <motion.div
            className="absolute top-0 left-[5%] w-[400px] h-[400px] border border-white/10"
            style={{ 
              y,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
              rotate: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-[5%] w-[500px] h-[500px] border border-white/10"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [-60, 60]),
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -50, 0],
              rotate: [0, -60, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Triangle shapes */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] border border-white/10"
            style={{ 
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -60, 0],
              rotate: [0, 120, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Animated grid pattern - different from contact */}
          <motion.div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0 0", "100px 100px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Diagonal cross pattern */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 40px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 40px)
              `,
            }}
          />
          
          {/* Scanning line effect - thicker */}
          <motion.div
            className="absolute inset-0 opacity-25"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              height: "4px",
              y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />
          
          {/* Corner brackets - different positions */}
          <motion.div
            className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/20"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/20"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Additional corner brackets */}
          <motion.div
            className="absolute top-1/2 left-0 w-8 h-8 border-l-2 border-white/15"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-8 h-8 border-r-2 border-white/15"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Stats Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative p-6 backdrop-blur-xl border overflow-hidden group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 border border-white/20 bg-white/5"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                    }}
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-black font-mono text-white mb-1">
                      <AnimatedCounter target={6} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">Years Experience</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative p-6 backdrop-blur-xl border overflow-hidden group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 border border-white/20 bg-white/5"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                    }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-black font-mono text-white mb-1">
                      {experience.length}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">Positions</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative p-6 backdrop-blur-xl border overflow-hidden group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 border border-white/20 bg-white/5"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                    }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-black font-mono text-white mb-1">
                      {experience.reduce((acc, exp) => acc + exp.achievements.length, 0)}+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">Achievements</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Vertical timeline line - Desktop */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5">
              <motion.div
                className="absolute inset-0 bg-white/20"
                style={{
                  scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  transformOrigin: "top",
                }}
              />
              {/* Animated dots on timeline */}
              {experience.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 bg-white/40 border-2 border-[#0a0a0f] rounded-full"
                  style={{
                    left: "-3px",
                    top: `${(index / (experience.length - 1)) * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Vertical timeline line - Mobile */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-white/20" />

            <div className="space-y-6 lg:space-y-8">
              {experience.map((exp, index) => {
                const variant = experienceVariants[index % experienceVariants.length];
                const isExpanded = expandedId === exp.id;
                const isHovered = hoveredId === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                    className="relative pl-0 lg:pl-24"
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Timeline dot - Desktop - Hexagonal */}
                    <motion.div
                      className="hidden lg:block absolute left-8 top-8 w-8 h-8 border-2 border-white/40 z-20 bg-[#0a0a0f]"
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                        boxShadow: `0 0 20px rgba(255, 255, 255, ${variant.glowIntensity})`,
                      }}
                      animate={{
                        scale: isHovered ? 1.4 : 1,
                        rotate: isHovered ? 60 : 0,
                        boxShadow: isHovered 
                          ? `0 0 30px rgba(255, 255, 255, ${variant.glowIntensity + 0.1})` 
                          : `0 0 20px rgba(255, 255, 255, ${variant.glowIntensity})`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 border-2 border-white/60"
                        style={{
                          clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>

                    {/* Timeline dot - Mobile - Hexagonal */}
                    <div 
                      className="lg:hidden absolute left-6 top-8 w-5 h-5 border-2 border-white/40 z-20 bg-[#0a0a0f]"
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                        boxShadow: `0 0 15px rgba(255, 255, 255, ${variant.glowIntensity})`,
                      }}
                    />

                    {/* Experience Card */}
                    <motion.div
                      className="relative group cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="relative p-5 md:p-6 backdrop-blur-xl border overflow-hidden transition-all duration-500"
                        style={{
                          background: isHovered
                            ? `rgba(255, 255, 255, ${variant.opacity + 0.02})`
                            : `rgba(255, 255, 255, ${variant.opacity})`,
                          borderColor: `rgba(255, 255, 255, ${variant.borderOpacity})`,
                          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                        }}
                      >
                        {/* Animated border scan */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            border: `1px solid rgba(255, 255, 255, ${variant.borderOpacity + 0.2})`,
                            clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                          }}
                        >
                          <motion.div
                            className="absolute top-0 left-0 right-0 h-0.5 bg-white/40"
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
                          }}
                          animate={{
                              x: ["-100%", "100%"],
                          }}
                          transition={{
                              duration: 2,
                            repeat: Infinity,
                              ease: "linear",
                          }}
                        />
                        </motion.div>

                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            boxShadow: `0 0 40px rgba(255, 255, 255, ${variant.glowIntensity})`,
                          }}
                        />

                        {/* Corner brackets */}
                        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/40" />

                        {/* Top accent line */}
                        <motion.div 
                          className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        />

                        {/* Left accent border */}
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/30"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <motion.div 
                                  className="p-1.5 border border-white/20 bg-white/5"
                                  whileHover={{ rotate: 90 }}
                                  transition={{ duration: 0.3 }}
                                  style={{
                                    clipPath: "polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))",
                                  }}
                                >
                                  <Briefcase className="w-4 h-4 text-white" />
                                </motion.div>
                                <h3 className="text-xl md:text-2xl font-bold font-mono text-white">
                                  {exp.title}
                                </h3>
                              </div>
                              <p className="text-lg md:text-xl text-white font-semibold mb-2">
                                {exp.company}
                              </p>
                            </div>
                            
                            <div className="flex flex-col gap-2 text-xs md:text-sm">
                              <motion.div 
                                className="flex items-center gap-2 text-gray-100"
                                whileHover={{ x: 2 }}
                              >
                                <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                                <span className="font-medium font-mono text-white/90">{exp.period}</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-2 text-gray-100"
                                whileHover={{ x: 2 }}
                              >
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                                <span className="font-medium font-mono text-white/90">{exp.location}</span>
                              </motion.div>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-3">
                              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                              <span className="text-xs text-gray-200 uppercase tracking-wider font-semibold font-mono">
                                Tech Stack
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => {
                                const TechIcon = techIcons[tech] || Code2;
                                return (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: techIndex * 0.05 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="relative group/tech"
                                  >
                                    <div
                                      className="px-3 py-1.5 border backdrop-blur-sm flex items-center gap-1.5 transition-all duration-300"
                                      style={{
                                        background: "rgba(255, 255, 255, 0.08)",
                                        borderColor: "rgba(255, 255, 255, 0.25)",
                                        clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                                      }}
                                    >
                                      <TechIcon className="w-3 h-3 text-white" />
                                      <span className="text-xs font-medium font-mono text-white">
                                        {tech}
                                      </span>
                                    </div>
                                    {/* Tech hover glow */}
                                    <motion.div
                                      className="absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"
                                      style={{
                                        boxShadow: `0 0 15px rgba(255, 255, 255, ${variant.glowIntensity})`,
                                        clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                                      }}
                                    />
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Achievements - Expandable */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: isExpanded ? "auto" : 0,
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-white/15">
                              <div className="flex items-center gap-2 mb-3">
                                <Rocket className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                                <span className="text-xs text-gray-200 uppercase tracking-wider font-semibold font-mono">
                                  Key Achievements
                                </span>
                              </div>
                              <ul className="space-y-2.5">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                                    transition={{ delay: i * 0.1, ease: "easeOut" }}
                                    className="flex items-start gap-4 text-gray-100 group/achievement"
                                  >
                                    <motion.div
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.5 }}
                                      className="flex-shrink-0 mt-0.5"
                                    >
                                      <div className="w-2 h-2 border-2 border-white/60 rotate-45 bg-white/20" />
                                    </motion.div>
                                    <span className="text-xs md:text-sm leading-relaxed text-white/95 group-hover/achievement:text-white transition-colors">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>

                          {/* Expand/Collapse Button */}
                          <motion.div
                            className="mt-4 flex items-center justify-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <button 
                              className="flex items-center gap-2 px-4 py-2 font-semibold text-xs font-mono transition-all duration-300 border border-white/20 bg-white/5 text-white"
                              style={{
                                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                              }}
                            >
                              <span>{isExpanded ? "Show Less" : "View Achievements"}</span>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ArrowRight className="w-3 h-3" />
                              </motion.div>
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-20"
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div 
              className="relative p-6 md:p-8 backdrop-blur-xl border overflow-hidden group"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateX: -0.5,
                rotateY: 0.5,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              animate={{
                rotateX: [0, -0.3, 0],
                rotateY: [0, 0.3, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Subtle 3D Shadow layer */}
              <div 
                className="absolute inset-0 opacity-10 blur-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  transform: "translateZ(-15px) translateY(5px)",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              />
              
              {/* Subtle edge highlight */}
              <div 
                className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transform: "translateZ(5px)",
                }}
              />
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40" />
              
              {/* Animated border scan */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
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
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-white font-mono">
                    Ready to Build Together?
                  </h3>
                </div>
                <p className="text-gray-200 text-base md:text-lg mb-5 max-w-2xl mx-auto">
                  Let&apos;s collaborate and create innovative solutions that push the boundaries of technology.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block relative px-6 py-3 font-semibold text-sm md:text-base text-white font-mono overflow-hidden group border border-white/20 bg-white/5"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
