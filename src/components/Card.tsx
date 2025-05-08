
import { cn } from "@/lib/utils";
import React, { useState, forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'blue' | 'purple' | 'red' | 'green';
  hoverEffect?: boolean;
  variant?: 'default' | 'elevated' | 'outline';
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className, 
  glowColor = 'blue', 
  hoverEffect = true,
  variant = 'default',
  interactive = true,
  ...props 
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const glowStyles = {
    blue: 'hover:shadow-[0_0_20px_rgba(30,174,219,0.3)]',
    purple: 'hover:shadow-[0_0_20px_rgba(161,98,255,0.3)]',
    red: 'hover:shadow-[0_0_20px_rgba(255,51,102,0.3)]',
    green: 'hover:shadow-[0_0_20px_rgba(142,228,175,0.3)]',
  };
  
  const variantStyles = {
    default: 'glass-panel',
    elevated: 'glass-panel shadow-lg',
    outline: 'glass-panel border-2',
  };
  
  const glowClass = glowStyles[glowColor];
  
  return (
    <div 
      ref={ref}
      className={cn(
        variantStyles[variant],
        "p-4 relative transition-all duration-300",
        hoverEffect ? `hover-lift ${glowClass}` : '',
        interactive && isHovered ? "border-logo-blue/40" : "border-graphite-700/20",
        className
      )}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      {...props}
    >
      {/* Subtle animated border/glow effect */}
      <div className="absolute inset-0 rounded-lg border border-graphite-700/20 hover:border-logo-blue/30 transition-colors duration-300"></div>
      
      {/* Corner accents that appear on hover */}
      {hoverEffect && isHovered && (
        <>
          <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l border-${glowColor === 'blue' ? 'logo-blue' : glowColor === 'purple' ? 'plasma-violet' : glowColor === 'red' ? 'quantum-red' : 'bio-green'}/60 rounded-tl transition-all duration-300 animate-pulse-glow`}></div>
          <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-${glowColor === 'blue' ? 'logo-blue' : glowColor === 'purple' ? 'plasma-violet' : glowColor === 'red' ? 'quantum-red' : 'bio-green'}/60 rounded-tr transition-all duration-300 animate-pulse-glow`}></div>
          <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-${glowColor === 'blue' ? 'logo-blue' : glowColor === 'purple' ? 'plasma-violet' : glowColor === 'red' ? 'quantum-red' : 'bio-green'}/60 rounded-bl transition-all duration-300 animate-pulse-glow`}></div>
          <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r border-${glowColor === 'blue' ? 'logo-blue' : glowColor === 'purple' ? 'plasma-violet' : glowColor === 'red' ? 'quantum-red' : 'bio-green'}/60 rounded-br transition-all duration-300 animate-pulse-glow`}></div>
        </>
      )}
      
      {/* Inner glow effect on hover */}
      {hoverEffect && isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-20 pointer-events-none"></div>
      )}
      
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
