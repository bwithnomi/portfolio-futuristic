import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "blue" | "purple" | "green";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
}

export function NeonButton({ 
  children, 
  className, 
  variant = "blue",
  onClick,
  type = "button",
  href,
  disabled = false
}: NeonButtonProps) {
  const baseClasses = "cyber-button";
  
  const variantClasses = {
    blue: "border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]",
    purple: "border-[#b600ff] text-[#b600ff] hover:bg-[#b600ff]",
    green: "border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d]",
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses, 
        variantClasses[variant], 
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

