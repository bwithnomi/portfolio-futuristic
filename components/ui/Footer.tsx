"use client";

import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

