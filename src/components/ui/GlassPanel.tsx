
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  borderGlow?: 'blue' | 'purple' | 'green' | 'red' | 'multi' | 'none';
  intensity?: 'low' | 'medium' | 'high';
  hover?: boolean;
  withCorners?: boolean;
  animated?: boolean;
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  borderGlow = 'blue',
  intensity = 'medium',
  hover = false,
  withCorners = false,
  animated = false,
}) => {
  // Border color based on glow type
  const getBorderColor = () => {
    switch (borderGlow) {
      case 'purple': return 'border-plasma-violet';
      case 'green': return 'border-bio-green';
      case 'red': return 'border-quantum-red';
      case 'multi': return 'border-transparent bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green'; 
      case 'none': return 'border-graphite-700/40';
      default: return 'border-logo-blue';
    }
  };
  
  // Shadow based on intensity and color
  const getShadow = () => {
    const color = {
      'blue': 'rgba(30, 174, 219, ',
      'purple': 'rgba(161, 98, 255, ',
      'green': 'rgba(142, 228, 175, ',
      'red': 'rgba(255, 51, 102, ',
      'multi': 'rgba(30, 174, 219, ',
      'none': 'rgba(0, 0, 0, '
    }[borderGlow];
    
    const strength = {
      'low': '0.2)',
      'medium': '0.3)',
      'high': '0.4)'
    }[intensity];
    
    return `shadow-[0_0_20px_${color}${strength}]`;
  };
  
  // Hover effects
  const getHoverClasses = () => {
    if (!hover) return '';
    
    const baseHover = 'transition-all duration-300 hover:scale-[1.02] ';
    
    const hoverEffect = {
      'blue': 'hover:shadow-[0_0_30px_rgba(30,174,219,0.5)] hover:border-logo-blue/70',
      'purple': 'hover:shadow-[0_0_30px_rgba(161,98,255,0.5)] hover:border-plasma-violet/70',
      'green': 'hover:shadow-[0_0_30px_rgba(142,228,175,0.5)] hover:border-bio-green/70',
      'red': 'hover:shadow-[0_0_30px_rgba(255,51,102,0.5)] hover:border-quantum-red/70',
      'multi': 'hover:shadow-[0_0_30px_rgba(30,174,219,0.5)]',
      'none': 'hover:shadow-[0_0_15px_rgba(39,44,51,0.5)] hover:border-graphite-700/60'
    }[borderGlow];
    
    return baseHover + hoverEffect;
  };

  return (
    <div 
      className={cn(
        "relative bg-dark-surface/80 backdrop-blur-lg p-6 rounded-xl border",
        getBorderColor(),
        getShadow(),
        getHoverClasses(),
        animated && 'animate-pulse-subtle',
        className
      )}
    >
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-900/50 via-transparent to-dark-surface/30 rounded-xl pointer-events-none"></div>
      
      {/* Corner brackets for futuristic effect */}
      {withCorners && (
        <>
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-logo-blue/60 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-logo-blue/60 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-logo-blue/60 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-logo-blue/60 rounded-br-lg"></div>
        </>
      )}
      
      {/* Content with z-index to appear above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassPanel;
