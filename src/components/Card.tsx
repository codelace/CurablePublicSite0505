
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "glass-panel p-4 glow-hover animate-fade-up relative transition-all duration-300", 
        className
      )} 
      {...props}
    >
      {/* Subtle animated border/glow effect */}
      <div className="absolute inset-0 rounded-lg border border-graphite-700/20 hover:border-logo-blue/30 transition-colors duration-300"></div>
      {children}
    </div>
  );
};

export default Card;
