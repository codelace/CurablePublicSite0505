
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface CommandHUDHeaderProps {
  title: string;
  subtitle?: string;
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
  // Color variations
  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'text-quantum-red',
          glow: 'shadow-quantum-red/20',
          border: 'border-quantum-red/30'
        };
      case 'accent':
        return {
          accent: 'text-plasma-violet',
          glow: 'shadow-plasma-violet/20',
          border: 'border-plasma-violet/30'
        };
      default:
        return {
          accent: 'text-arc-blue',
          glow: 'shadow-arc-blue/20',
          border: 'border-arc-blue/30'
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
                    className={`bg-dark-surface/60 ${colors.border} hover:${colors.border} cursor-help`}
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
      
      <div className={`bg-dark-surface/60 backdrop-blur-lg border ${colors.border} rounded-lg p-4 ${colors.glow} shadow-lg`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-titanium-white mb-2 font-space flex items-center gap-2 break-words">
          <span className={colors.accent}>&gt;</span> {title}
        </h1>
        {subtitle && (
          <p className="text-titanium-white/70 max-w-3xl font-mono text-sm">
            <span className="text-bio-green">#</span> {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommandHUDHeader;
