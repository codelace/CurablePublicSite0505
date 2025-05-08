
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'blue' | 'purple' | 'red';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  glowColor = 'blue', 
  hoverEffect = true, 
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const glowStyles = {
    blue: 'hover:shadow-[0_0_20px_rgba(30,174,219,0.3)]',
    purple: 'hover:shadow-[0_0_20px_rgba(161,98,255,0.3)]',
    red: 'hover:shadow-[0_0_20px_rgba(255,51,102,0.3)]',
  };
  
  const glowClass = glowStyles[glowColor];
  
  return (
    <div 
      className={cn(
        "glass-panel p-4 relative transition-all duration-300",
        hoverEffect ? `hover-lift ${glowClass}` : '',
        isHovered ? "border-logo-blue/40" : "border-graphite-700/20",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Subtle animated border/glow effect */}
      <div className="absolute inset-0 rounded-lg border border-graphite-700/20 hover:border-logo-blue/30 transition-colors duration-300"></div>
      
      {/* Corner accents that appear on hover */}
      {hoverEffect && isHovered && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-logo-blue/60 rounded-tl"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-logo-blue/60 rounded-tr"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-logo-blue/60 rounded-bl"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-logo-blue/60 rounded-br"></div>
        </>
      )}
      
      {children}
    </div>
  );
};

export default Card;
