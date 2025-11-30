import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong";
  hover?: boolean;
  style?: CSSProperties;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  hover = true,
  style
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variant === "default" ? "glass" : "glass-strong",
        hover && "transition-all duration-300 hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/20",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

