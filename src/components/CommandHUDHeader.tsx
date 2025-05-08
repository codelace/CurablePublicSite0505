
import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface CommandHUDHeaderProps {
  title: React.ReactNode;
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
  
  // Color variations
  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'text-quantum-red',
          glow: 'shadow-quantum-red/20',
          border: 'border-quantum-red/30',
          hover: 'hover:border-quantum-red/50 hover:shadow-[0_0_30px_rgba(255,51,102,0.4)]'
        };
      case 'accent':
        return {
          accent: 'text-plasma-violet',
          glow: 'shadow-plasma-violet/20',
          border: 'border-plasma-violet/30',
          hover: 'hover:border-plasma-violet/50 hover:shadow-[0_0_30px_rgba(161,98,255,0.4)]'
        };
      default:
        return {
          accent: 'text-arc-blue',
          glow: 'shadow-arc-blue/20',
          border: 'border-arc-blue/30',
          hover: 'hover:border-arc-blue/50 hover:shadow-[0_0_30px_rgba(30,174,219,0.4)]'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`${className} mb-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-3 gap-2">
        <div className="inline-block px-3 py-1 rounded-full font-mono text-xs bg-gunmetal-900/90 border border-graphite-700/80 shadow-lg">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-bio-green mr-2 animate-pulse"></span>
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
        className={`relative bg-dark-surface/70 backdrop-blur-lg border ${colors.border} rounded-xl p-5 ${colors.glow} shadow-2xl transition-all duration-500 ${colors.hover} overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-900/50 via-transparent to-dark-surface/20 pointer-events-none"></div>
        
        {/* Dynamic circuit lines - purely decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute bottom-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute left-[10%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
        </div>
        
        <h1 className="relative text-2xl md:text-3xl lg:text-5xl font-bold text-titanium-white mb-3 font-space flex flex-wrap items-center gap-2 break-words z-10">
          <span className={`${colors.accent} ${isHovered && animated ? 'animate-pulse' : ''} mr-1`}>&gt;</span> {title}
          {isHovered && <span className="inline-block h-6 w-1 bg-logo-blue/70 animate-blink"></span>}
        </h1>
        
        {subtitle && (
          <p className="relative text-titanium-white/80 max-w-3xl font-mono text-sm z-10 ml-6 border-l-2 border-bio-green/30 pl-3">
            <span className="text-bio-green">#</span> {subtitle}
          </p>
        )}
        
        {/* Enhanced interactive elements on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-logo-blue/80 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-logo-blue/80 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-logo-blue/80 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-logo-blue/80 rounded-br-lg"></div>
            
            <div className="absolute top-[50%] left-3 h-2 w-2 rounded-full bg-logo-blue/70 animate-pulse-dot"></div>
            <div className="absolute top-[30%] right-3 h-2 w-2 rounded-full bg-bio-green/70 animate-pulse-dot" style={{animationDelay: "0.5s"}}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandHUDHeader;
