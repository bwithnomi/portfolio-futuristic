"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({ 
  children, 
  id, 
  className,
  title,
  subtitle 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative min-h-fit py-12 md:py-16 px-8 md:px-12 lg:px-24",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 md:mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-mono">
              {title}
            </h2>
            {subtitle && (
              <motion.p 
                className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

