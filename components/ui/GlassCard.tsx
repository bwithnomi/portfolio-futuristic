import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong";
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  hover = true 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variant === "default" ? "glass" : "glass-strong",
        hover && "transition-all duration-300 hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/20",
        className
      )}
    >
      {children}
    </div>
  );
}

