"use client";

import { motion } from "framer-motion";
import { SkillSphere } from "../three/SkillSphere";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { skills } from "@/lib/data";

export function Skills() {
  const allSkills = [...skills.languages, ...skills.infrastructure];

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Mastering modern tech stacks"
    >
      <SkillSphere />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Languages & Frameworks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient-blue-purple font-mono">
              Languages & Frameworks
            </h3>
            <div className="space-y-4">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-mono text-sm">
                      {skill.name}
                    </span>
                    <span className="text-[#00d4ff] text-xs font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00d4ff] to-[#b600ff] glow-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Infrastructure & DevOps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient-blue-purple font-mono">
              Infrastructure & DevOps
            </h3>
            <div className="space-y-4">
              {skills.infrastructure.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-mono text-sm">
                      {skill.name}
                    </span>
                    <span className="text-[#b600ff] text-xs font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#b600ff] to-[#00ff9d] glow-purple"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Skill Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <GlassCard className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gradient-rainbow font-mono text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => {
              const colors = ["#00d4ff", "#b600ff", "#00ff9d"];
              const color = colors[index % 3];
              const borderColor = color === "#00d4ff" 
                ? "border-[#00d4ff]/30" 
                : color === "#b600ff" 
                ? "border-[#b600ff]/30" 
                : "border-[#00ff9d]/30";

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-lg glass border ${borderColor} cursor-default transition-all duration-300 hover:shadow-lg`}
                  style={{
                    boxShadow: `0 0 20px ${color}33`,
                  }}
                >
                  <span className="text-sm font-mono" style={{ color }}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}

