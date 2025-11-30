"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { NeonButton } from "../ui/NeonButton";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Zap, MessageSquare, Sparkles, CornerDownRight, CheckCircle2, XCircle } from "lucide-react";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_rgr360e",
        "template_ye2wdym",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "G21sFppsA2kyHvOrV" // Public key as 4th parameter
      );

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      // Error handling
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again or contact me directly via email."
      );
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}`,
      delay: 0.1
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: personalInfo.phone, 
      href: `tel:${personalInfo.phone}`,
      delay: 0.2
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: personalInfo.location, 
      href: null,
      delay: 0.3
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something amazing together"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div ref={containerRef} className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric shapes */}
          <motion.div
            className="absolute top-0 left-[10%] w-[300px] h-[300px] border border-white/10 rotate-45"
            style={{ y }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              rotate: [45, 50, 45],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-[10%] w-[400px] h-[400px] border border-white/10 rotate-12"
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            animate={{
              x: [0, -40, 0],
              y: [0, -40, 0],
              rotate: [12, 18, 12],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0 0", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Diagonal lines pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 255, 255, 0.1) 10px,
                rgba(255, 255, 255, 0.1) 20px
              )`,
            }}
          />
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)",
              height: "2px",
              y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />
          
          {/* Corner brackets */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative p-8 backdrop-blur-xl border overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                {/* Animated corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40" />
                
                {/* Scanline overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0"
                    style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)",
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="p-2 border border-white/20 bg-white/5"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MessageSquare className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white font-mono tracking-tight">Let's Connect</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>
          </div>
              </div>
            </motion.div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: info.delay }}
                  whileHover={{ x: 8 }}
                  className="relative group cursor-pointer"
                >
                  <div 
                    className="relative p-5 backdrop-blur-xl border overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    }}
                  >
                    {/* Hover glow */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                      }}
                    />
                    
                    {/* Left accent line */}
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/30"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: info.delay + 0.2, duration: 0.5 }}
                    />
                    
                    {/* Top corner bracket */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40" />
                    
                  {info.href ? (
                      <a href={info.href} className="relative z-10 flex items-center gap-4">
                        <motion.div 
                          className="p-3 border flex-shrink-0 transition-transform duration-300 group-hover:rotate-90 bg-white/5"
                          style={{
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                          }}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold font-mono">
                          {info.label}
                        </p>
                          <p className="text-gray-200 group-hover:text-white transition-colors font-medium">
                          {info.value}
                        </p>
                      </div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-white/40"
                        >
                          <CornerDownRight className="w-4 h-4" />
                        </motion.div>
                    </a>
                  ) : (
                      <div className="relative z-10 flex items-center gap-4">
                        <motion.div 
                          className="p-3 border flex-shrink-0 bg-white/5"
                          style={{
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                          }}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold font-mono">
                          {info.label}
                        </p>
                          <p className="text-gray-200 font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                    </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-1.5 border border-white/20 bg-white/5">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider font-mono">
              Follow Me
            </h4>
              </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-5 backdrop-blur-xl border overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    {/* Corner brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40" />
                    
                    {/* Hover glow */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                      }}
                    />
                    <social.icon 
                      className="relative z-10 w-6 h-6 text-white transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
            </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-white/10"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${10 + i * 15}%`,
                    width: `${8 + i * 2}px`,
                    height: `${8 + i * 2}px`,
                    rotate: 45,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>

            <div className="relative p-8 backdrop-blur-xl border overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
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

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-2 border border-white/20 bg-white/5"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white font-mono tracking-tight">Send Message</h3>
                </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <motion.label
                      htmlFor="name"
                      className="block text-sm font-mono mb-2 transition-colors"
                      style={{
                        color: focusedField === "name" ? "#ffffff" : "#a0a0b0",
                      }}
                    >
                  Name *
                    </motion.label>
                    <div className="relative">
                      <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                  required
                        className="w-full px-4 py-3 bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm font-mono"
                        style={{
                          borderColor: focusedField === "name" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
                          boxShadow: focusedField === "name" ? "0 0 20px rgba(255, 255, 255, 0.1)" : "none",
                          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                  placeholder="Your name"
                />
                      {focusedField === "name" && (
                        <>
                          <motion.div
                            className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                          <motion.div
                            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        </>
                      )}
                    </div>
              </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <motion.label
                      htmlFor="email"
                      className="block text-sm font-mono mb-2 transition-colors"
                      style={{
                        color: focusedField === "email" ? "#ffffff" : "#a0a0b0",
                      }}
                    >
                  Email *
                    </motion.label>
                    <div className="relative">
                      <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                  required
                        className="w-full px-4 py-3 bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm font-mono"
                        style={{
                          borderColor: focusedField === "email" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
                          boxShadow: focusedField === "email" ? "0 0 20px rgba(255, 255, 255, 0.1)" : "none",
                          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                  placeholder="your.email@example.com"
                />
                      {focusedField === "email" && (
                        <>
                          <motion.div
                            className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                          <motion.div
                            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        </>
                      )}
                    </div>
              </div>

                  {/* Subject Field */}
                  <div className="relative group">
                    <motion.label
                      htmlFor="subject"
                      className="block text-sm font-mono mb-2 transition-colors"
                      style={{
                        color: focusedField === "subject" ? "#ffffff" : "#a0a0b0",
                      }}
                    >
                  Subject *
                    </motion.label>
                    <div className="relative">
                      <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                  required
                        className="w-full px-4 py-3 bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm font-mono"
                        style={{
                          borderColor: focusedField === "subject" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
                          boxShadow: focusedField === "subject" ? "0 0 20px rgba(255, 255, 255, 0.1)" : "none",
                          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                  placeholder="What's this about?"
                />
                      {focusedField === "subject" && (
                        <>
                          <motion.div
                            className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                          <motion.div
                            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        </>
                      )}
                    </div>
              </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <motion.label
                      htmlFor="message"
                      className="block text-sm font-mono mb-2 transition-colors"
                      style={{
                        color: focusedField === "message" ? "#ffffff" : "#a0a0b0",
                      }}
                    >
                  Message *
                    </motion.label>
                    <div className="relative">
                      <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                        className="w-full px-4 py-3 bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm font-mono"
                        style={{
                          borderColor: focusedField === "message" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
                          boxShadow: focusedField === "message" ? "0 0 20px rgba(255, 255, 255, 0.1)" : "none",
                          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                  placeholder="Tell me about your project..."
                />
                      {focusedField === "message" && (
                        <>
                          <motion.div
                            className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                          <motion.div
                            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        </>
                      )}
                    </div>
              </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-4 rounded-lg border backdrop-blur-xl flex items-center gap-3"
                      style={{
                        background: "rgba(0, 255, 157, 0.1)",
                        borderColor: "rgba(0, 255, 157, 0.3)",
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00ff9d] flex-shrink-0" />
                      <p className="text-sm text-white font-mono">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-4 rounded-lg border backdrop-blur-xl flex items-start gap-3"
                      style={{
                        background: "rgba(255, 107, 157, 0.1)",
                        borderColor: "rgba(255, 107, 157, 0.3)",
                      }}
                    >
                      <XCircle className="w-5 h-5 text-[#ff6b9d] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-white font-mono font-semibold mb-1">
                          Failed to send message
                        </p>
                        <p className="text-xs text-gray-300 font-mono">
                          {errorMessage || "Please try again or contact me directly via email."}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                <NeonButton 
                  type="submit"
                      variant="blue"
                      className="w-full flex items-center justify-center gap-2 py-4 text-base"
                      disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                          <motion.div 
                            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                          <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </NeonButton>
                  </motion.div>
                </form>
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

