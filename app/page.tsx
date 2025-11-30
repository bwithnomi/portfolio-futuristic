"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { Footer } from "@/components/ui/Footer";
import { FuturisticNav } from "@/components/ui/FuturisticNav";
import { ResumeButton } from "@/components/ui/ResumeButton";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <ScrollProgress />
        <CursorTrail />
        <FuturisticNav />
        <ResumeButton />
        
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
