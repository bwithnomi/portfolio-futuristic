"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { stats } from "@/lib/data";
import { 
  Award, 
  Briefcase, 
  Code2, 
  Users, 
  TrendingDown, 
  Zap, 
  Gauge, 
  Shield,
  Sparkles,
  Rocket,
  Target
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const statIcons = {
  experience: Briefcase,
  projects: Code2,
  clients: Users,
  technologies: Award,
};

const achievements = [
  {
    icon: Zap,
    title: "Microservices Migration",
    description: "Migrated monolithic architecture to microservices, reducing deployment time by 60%",
    color: "#00d4ff",
    delay: 0.1,
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description: "Optimized AWS infrastructure, reducing costs by 20%",
    color: "#00ff9d",
    delay: 0.2,
  },
  {
    icon: Gauge,
    title: "Performance Boost",
    description: "Implemented Redis caching and optimized queries, improving API response time by 30%",
    color: "#b600ff",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Security Enhancement",
    description: "Designed secure OAuth2.0 auth flows and encrypted sensitive data, reducing security incidents",
    color: "#ff6b9d",
    delay: 0.4,
  },
];

function AnimatedCounter({ target, suffix = "" }: Readonly<{ target: string; suffix?: string }>) {
  const [count, setCount] = useState("0");
  const numericTarget = Number.parseInt(target, 10);

  useEffect(() => {
    if (Number.isNaN(numericTarget)) {
      // Use setTimeout to avoid synchronous setState
      const timer = setTimeout(() => setCount(target), 0);
      return () => clearTimeout(timer);
    }

    let current = 0;
    const increment = numericTarget / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current).toString() + "+");
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, numericTarget]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Crafting digital excellence through code and innovation"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div ref={containerRef} className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs with parallax */}
          <motion.div
            className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ 
              background: "radial-gradient(circle, #00d4ff, transparent)",
              y,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
            style={{ 
              background: "radial-gradient(circle, #b600ff, transparent)",
              y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
            style={{ 
              background: "radial-gradient(circle, #00ff9d, transparent)",
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
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
        </div>

        <div className="relative z-10">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Intro & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Main Introduction Card */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative p-8 md:p-10 rounded-3xl backdrop-blur-xl border overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(182, 0, 255, 0.05))",
                    borderColor: "rgba(0, 212, 255, 0.2)",
                  }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #b600ff, #00ff9d, #00d4ff)",
                      backgroundSize: "200% 200%",
                      padding: "2px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      animation: "gradient-shift 3s ease infinite",
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-[#00d4ff]/20 border border-[#00d4ff]/30">
                        <Sparkles className="w-5 h-5 text-[#00d4ff]" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-mono">Who I Am</h3>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                      Full-stack Software Engineer with{" "}
                      <span className="text-[#00d4ff] font-bold">6+ years</span> of experience 
                      building scalable web and blockchain applications.
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Specializing in{" "}
                      <span className="text-[#00ff9d] font-semibold">microservice architecture</span>,{" "}
                      <span className="text-[#00d4ff] font-semibold">cloud-native deployments</span>, and{" "}
                      <span className="text-[#b600ff] font-semibold">Web3 ecosystems</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid - Redesigned */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {Object.entries(stats).map(([key, value], index) => {
                  const Icon = statIcons[key as keyof typeof statIcons];
                  const colors = ["#00ff9d", "#00d4ff", "#b600ff", "#ff6b9d"];
                  const color = colors[index % colors.length];
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="relative group cursor-pointer"
                    >
                      <div 
                        className="relative p-6 rounded-2xl backdrop-blur-xl border overflow-hidden h-full transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${color}12, ${color}05)`,
                          borderColor: `${color}30`,
                        }}
                      >
                        {/* Hover glow effect */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                          style={{
                            boxShadow: `0 0 50px ${color}40`,
                          }}
                        />
                        
                        {/* Top accent line */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 opacity-70"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                          }}
                        />
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="mb-4">
                            <div
                              className="p-2.5 rounded-lg border"
                              style={{
                                background: `${color}20`,
                                borderColor: `${color}40`,
                              }}
                            >
                              <Icon className="w-5 h-5" style={{ color }} />
                            </div>
                          </div>
                          
                          <motion.div
                            className="text-3xl md:text-4xl font-black font-mono mb-2"
                            style={{ color }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.6 + index * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            <AnimatedCounter target={value} />
                          </motion.div>
                          
                          <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                            {key}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Achievements Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-[#00ff9d]/20 border border-[#00ff9d]/30">
                  <Target className="w-5 h-5 text-[#00ff9d]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">Key Achievements</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#b600ff] to-[#00ff9d] opacity-30" />
                
                <div className="space-y-6">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: achievement.delay }}
                        className="relative pl-20 group"
                      >
                        {/* Timeline dot */}
                        <div 
                          className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-white/20 backdrop-blur-sm z-10 transition-all duration-300 group-hover:scale-150"
                          style={{
                            background: achievement.color,
                            boxShadow: `0 0 20px ${achievement.color}60`,
                          }}
                        />
                        
                        {/* Card */}
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="relative p-6 rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${achievement.color}10, ${achievement.color}05)`,
                            borderColor: `${achievement.color}30`,
                          }}
                        >
                          {/* Hover glow */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                            style={{
                              boxShadow: `0 0 40px ${achievement.color}30`,
                            }}
                          />
                          
                          {/* Left accent border */}
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 opacity-60"
                            style={{
                              background: `linear-gradient(180deg, ${achievement.color}, transparent)`,
                            }}
                          />
                          
                          <div className="relative z-10 flex items-start gap-4">
                            <div 
                              className="p-3 rounded-xl border flex-shrink-0 transition-transform duration-300 group-hover:rotate-12"
                              style={{
                                background: `${achievement.color}20`,
                                borderColor: `${achievement.color}40`,
                              }}
                            >
                              <Icon className="w-6 h-6" style={{ color: achievement.color }} />
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-2 font-mono">
                                {achievement.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
