
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
  
  // Enhanced color variations with spectacular quantum effects
  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'text-spectral-glow',
          glow: 'shadow-spectral/30',
          border: 'border-spectral-crimson/40',
          hover: 'hover:border-spectral-glow/70 hover:shadow-[0_0_40px_hsl(var(--spectral-crimson)/0.6)]'
        };
      case 'accent':
        return {
          accent: 'text-cosmic-aura',
          glow: 'shadow-cosmic/30',
          border: 'border-cosmic-indigo/40',
          hover: 'hover:border-cosmic-aura/70 hover:shadow-[0_0_40px_hsl(var(--cosmic-indigo)/0.6)]'
        };
      default:
        return {
          accent: 'text-spectral-glow',
          glow: 'shadow-quantum/30',
          border: 'border-spectral-crimson/40',
          hover: 'hover:border-spectral-glow/70 hover:shadow-[0_0_40px_hsl(var(--spectral-glow)/0.6)]'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`${className} mb-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-3 gap-2">
        <div className="inline-block px-3 py-1 rounded-full font-poppins text-xs bg-card/90 backdrop-blur-sm border border-spectral-crimson/50 shadow-lg shadow-spectral-crimson/20 hover:shadow-spectral-crimson/40 transition-all duration-300 status-quantum">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-cosmic-aura mr-2 glow-pulse"></span>
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
        className={`relative bg-card/80 backdrop-blur-lg border ${colors.border} rounded-xl p-6 sm:p-8 ${colors.glow} shadow-2xl hover:shadow-spectral/30 transition-all duration-500 ${colors.hover} overflow-hidden group quantum-field-enhanced`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced quantum background effect with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-spectral-crimson/10 via-cosmic-indigo/5 to-spectral-glow/10 pointer-events-none group-hover:from-spectral-crimson/20 group-hover:to-cosmic-indigo/15 transition-all duration-500 particles-quantum-enhanced"></div>
        
        {/* Dynamic quantum circuit lines with pulsing animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-spectral-glow/40 to-transparent quantum-field-line"></div>
          <div className="absolute bottom-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-aura/40 to-transparent quantum-field-line" style={{animationDelay: '1s'}}></div>
          <div className="absolute left-[10%] h-full w-[1px] bg-gradient-to-b from-transparent via-spectral-crimson/30 to-transparent quantum-field-line" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-cosmic-indigo/40 to-transparent quantum-field-line" style={{animationDelay: '1.5s'}}></div>
          
          {/* Enhanced quantum scan line effect */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-spectral-glow/80 to-transparent animate-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <h1 className="relative text-2xl md:text-3xl lg:text-5xl font-bold text-titanium-white mb-3 font-poppins flex flex-wrap items-center gap-2 break-words z-10">
          <span className={`${colors.accent} mr-1`}>&gt;</span> {title}
          {isHovered && <span className="inline-block h-6 w-1 bg-logo-blue/70 animate-blink"></span>}
        </h1>
        
        {subtitle && (
          <p className="relative text-titanium-white/80 max-w-3xl font-poppins text-sm z-10 ml-6 border-l-2 border-spectral-crimson/40 pl-3 hover:border-spectral-glow/70 transition-colors duration-300">
            <span className="text-cosmic-aura glow-cosmic">#</span> {subtitle}
          </p>
        )}
        
        {/* Enhanced interactive elements on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-logo-blue/80 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-logo-blue/80 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-logo-blue/80 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-logo-blue/80 rounded-br-lg"></div>
            
            <div className="absolute top-[50%] left-3 h-3 w-3 rounded-full bg-logo-blue/70 animate-pulse-dot"></div>
            <div className="absolute top-[30%] right-3 h-3 w-3 rounded-full bg-bio-green/70 animate-pulse-dot" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-[40%] left-[20%] h-2 w-2 rounded-full bg-blue-400/70 animate-ping" style={{animationDuration: "2s"}}></div>
            <div className="absolute top-[70%] right-[30%] h-2 w-2 rounded-full bg-quantum-red/70 animate-ping" style={{animationDuration: "3s", animationDelay: "1s"}}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandHUDHeader;
