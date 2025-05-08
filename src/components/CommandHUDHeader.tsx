
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface CommandHUDHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  statusText?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const CommandHUDHeader: React.FC<CommandHUDHeaderProps> = ({
  title,
  subtitle,
  statusText = 'SYSTEM ONLINE',
  variant = 'primary',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Color variations
  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'text-quantum-red',
          glow: 'shadow-quantum-red/20',
          border: 'border-quantum-red/30',
          hover: 'hover:border-quantum-red/50 hover:shadow-[0_0_20px_rgba(255,51,102,0.3)]'
        };
      case 'accent':
        return {
          accent: 'text-plasma-violet',
          glow: 'shadow-plasma-violet/20',
          border: 'border-plasma-violet/30',
          hover: 'hover:border-plasma-violet/50 hover:shadow-[0_0_20px_rgba(161,98,255,0.3)]'
        };
      default:
        return {
          accent: 'text-arc-blue',
          glow: 'shadow-arc-blue/20',
          border: 'border-arc-blue/30',
          hover: 'hover:border-arc-blue/50 hover:shadow-[0_0_20px_rgba(30,174,219,0.3)]'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`${className} mb-6`}>
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-2 gap-2">
        <div className="inline-block px-3 py-1 rounded-full font-mono text-xs bg-gunmetal-900/80 border border-graphite-700/60">
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
                    className={`bg-dark-surface/60 ${colors.border} hover:${colors.border} cursor-help transition-all duration-300`}
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
        className={`bg-dark-surface/60 backdrop-blur-lg border ${colors.border} rounded-lg p-4 ${colors.glow} shadow-lg transition-all duration-300 ${colors.hover}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-titanium-white mb-2 font-space flex items-center gap-2 break-words">
          <span className={`${colors.accent} ${isHovered ? 'animate-pulse' : ''}`}>&gt;</span> {title}
        </h1>
        {subtitle && (
          <p className="text-titanium-white/70 max-w-3xl font-mono text-sm">
            <span className="text-bio-green">#</span> {subtitle}
          </p>
        )}
        
        {/* Show corner accents on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-logo-blue/60 rounded-tl"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-logo-blue/60 rounded-tr"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-logo-blue/60 rounded-bl"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-logo-blue/60 rounded-br"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandHUDHeader;
