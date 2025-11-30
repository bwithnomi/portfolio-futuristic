"use client";

import { motion } from "framer-motion";
import { ProjectCarousel } from "../three/ProjectCarousel";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { useState } from "react";

type Category = "all" | "fullstack" | "web3";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "fullstack", label: "Full-stack" },
    { value: "web3", label: "Web3" },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Innovative solutions across web and blockchain"
    >
      <ProjectCarousel />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
              selectedCategory === cat.value
                ? "bg-[#00d4ff] text-[#0a0a0f] glow-blue"
                : "glass text-gray-300 hover:border-[#00d4ff]/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          const isWeb3 = project.category === "web3";
          const accentColor = isWeb3 ? "#b600ff" : "#00ff9d";
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              layout
              className="group"
            >
              <GlassCard className="p-8 lg:p-10 h-full flex flex-col relative overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  borderColor: 'rgba(0, 212, 255, 0.2)',
                }}
              >
                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}05)`,
                    boxShadow: `0 0 40px ${accentColor}30, inset 0 0 40px ${accentColor}10`,
                  }}
                />

                {/* Top accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    boxShadow: `0 0 10px ${accentColor}60`,
                  }}
                />

                {/* Corner accents */}
                <div 
                  className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ borderColor: accentColor }}
                />
                <div 
                  className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ borderColor: accentColor }}
                />

                <div className="relative z-10">
                  {/* Project Icon */}
                  <div className="mb-6">
                    <motion.div 
                      className="w-20 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}25, ${accentColor}10)`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon glow */}
                      <div 
                        className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow: `inset 0 0 30px ${accentColor}40`,
                        }}
                      />
                      <Code2 className="w-10 h-10 relative z-10" style={{ color: accentColor }} />
                    </motion.div>
                  </div>

                  {/* Title & Category Badge */}
                  <div className="mb-4">
                    <motion.span 
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold inline-block ${
                        isWeb3 
                          ? "bg-[#b600ff]/20 text-[#b600ff]" 
                          : "bg-[#00ff9d]/20 text-[#00ff9d]"
                      }`}
                      style={{
                        boxShadow: `0 0 15px ${accentColor}30`,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category.toUpperCase()}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 font-mono transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}, #00d4ff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base mb-6 flex-grow leading-relaxed">
                    {expandedId === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border backdrop-blur-sm text-gray-300 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: accentColor,
                          color: accentColor,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Highlights (expandable) */}
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i} 
                            className="text-sm text-gray-300 flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-[#00d4ff] mt-1.5 text-lg">▸</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <motion.button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      className="text-sm font-mono text-[#00d4ff] hover:text-[#b600ff] transition-colors relative"
                      whileHover={{ x: 4 }}
                    >
                      {expandedId === project.id ? "Show Less" : "Learn More"}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#b600ff]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg glass hover:border-[#00d4ff] transition-all duration-300 relative overflow-hidden"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            borderColor: 'rgba(0, 212, 255, 0.2)',
                          }}
                          aria-label="View live project"
                        >
                          <div 
                            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `inset 0 0 20px ${accentColor}30`,
                            }}
                          />
                          <ExternalLink className="w-5 h-5 text-gray-400 hover:text-[#00d4ff] relative z-10 transition-colors" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg glass hover:border-[#b600ff] transition-all duration-300 relative overflow-hidden"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            borderColor: 'rgba(182, 0, 255, 0.2)',
                          }}
                          aria-label="View source code"
                        >
                          <div 
                            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `inset 0 0 20px ${accentColor}30`,
                            }}
                          />
                          <Github className="w-5 h-5 text-gray-400 hover:text-[#b600ff] relative z-10 transition-colors" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

