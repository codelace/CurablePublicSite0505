
import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface CommandHUDHeaderProps {
  title: React.ReactNode; // Changed from string to ReactNode to accept JSX
  subtitle?: React.ReactNode;
  statusText?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  animated?: boolean;
}

const CommandHUDHeader: React.FC<CommandHUDHeaderProps> = ({
  title,
  subtitle,
  statusText = 'SYSTEM ONLINE',
  variant = 'primary',
  className = '',
  animated = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Clean color variations using semantic tokens
  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'text-primary',
          glow: 'shadow-primary/20',
          border: 'border-primary/30',
          hover: 'hover:border-primary/50'
        };
      case 'accent':
        return {
          accent: 'text-accent',
          glow: 'shadow-accent/20',
          border: 'border-accent/30',
          hover: 'hover:border-accent/50'
        };
      default:
        return {
          accent: 'text-primary',
          glow: 'shadow-primary/20',
          border: 'border-primary/30',
          hover: 'hover:border-primary/50'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`${className} mb-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-3 gap-2">
        <div className="inline-block px-3 py-1 rounded-full font-poppins text-xs bg-card/90 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            {statusText}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['CPU', 'NET', 'MEM'].map((metric, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge 
                    variant="outline" 
                    className={`bg-dark-surface/80 ${colors.border} hover:${colors.border} cursor-help transition-all duration-300 shadow-md`}
                  >
                    <span className={colors.accent}>{metric}</span>: 
                    <span className="ml-1 text-titanium-white/70">{Math.floor(Math.random() * 90) + 10}%</span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">System {metric} utilization</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      
      <div 
        className={`relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border ${colors.border} rounded-xl p-6 sm:p-8 ${colors.glow} shadow-2xl transition-all duration-500 ${colors.hover} overflow-hidden group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Clean scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-[scanLine_4s_infinite_linear] shadow-[0_0_8px_hsl(var(--primary))]"></div>
        </div>
        
        <h1 className="relative text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-3 font-poppins flex flex-wrap items-center gap-2 break-words z-10">
          <span className={`${colors.accent} mr-1`}>&gt;</span> {title}
          {isHovered && <span className="inline-block h-6 w-1 bg-primary animate-blink"></span>}
        </h1>
        
        {subtitle && (
          <p className="relative text-muted-foreground max-w-3xl font-poppins text-sm z-10 ml-6 border-l-2 border-primary/30 pl-3 hover:border-primary/50 transition-colors duration-300">
            <span className={colors.accent}>#</span> {subtitle}
          </p>
        )}
        
        {/* Clean corner indicators on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-lg"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandHUDHeader;
