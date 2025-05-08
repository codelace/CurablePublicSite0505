
import React from 'react';
import { cn } from '@/lib/utils';

type BorderGlowType = 'blue' | 'purple' | 'green' | 'red' | 'multi' | 'none';
type GlowIntensity = 'low' | 'medium' | 'high';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  borderGlow?: BorderGlowType;
  intensity?: GlowIntensity;
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
  // Color mapping for consistent styling
  const colorMap = {
    blue: {
      border: 'border-logo-blue',
      shadow: 'rgba(30, 174, 219, ',
      hover: 'hover:shadow-[0_0_30px_rgba(30,174,219,0.5)] hover:border-logo-blue/70',
      cornerColor: 'border-logo-blue/60',
    },
    purple: {
      border: 'border-plasma-violet',
      shadow: 'rgba(161, 98, 255, ',
      hover: 'hover:shadow-[0_0_30px_rgba(161,98,255,0.5)] hover:border-plasma-violet/70',
      cornerColor: 'border-plasma-violet/60',
    },
    green: {
      border: 'border-bio-green',
      shadow: 'rgba(142, 228, 175, ',
      hover: 'hover:shadow-[0_0_30px_rgba(142,228,175,0.5)] hover:border-bio-green/70',
      cornerColor: 'border-bio-green/60',
    },
    red: {
      border: 'border-quantum-red',
      shadow: 'rgba(255, 51, 102, ',
      hover: 'hover:shadow-[0_0_30px_rgba(255,51,102,0.5)] hover:border-quantum-red/70',
      cornerColor: 'border-quantum-red/60',
    },
    multi: {
      border: 'border-transparent bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green',
      shadow: 'rgba(30, 174, 219, ',
      hover: 'hover:shadow-[0_0_30px_rgba(30,174,219,0.5)]',
      cornerColor: 'border-logo-blue/60',
    },
    none: {
      border: 'border-graphite-700/40',
      shadow: 'rgba(0, 0, 0, ',
      hover: 'hover:shadow-[0_0_15px_rgba(39,44,51,0.5)] hover:border-graphite-700/60',
      cornerColor: 'border-graphite-700/40',
    },
  };

  // Intensity mapping for shadow strength
  const intensityMap = {
    low: '0.2)',
    medium: '0.3)',
    high: '0.4)',
  };

  // Get styles based on color and intensity
  const borderColor = colorMap[borderGlow].border;
  const shadowColor = colorMap[borderGlow].shadow + intensityMap[intensity];
  const hoverEffect = hover ? `transition-all duration-300 hover:scale-[1.02] ${colorMap[borderGlow].hover}` : '';
  const cornerColor = colorMap[borderGlow].cornerColor;
  
  return (
    <div 
      className={cn(
        "relative bg-dark-surface/80 backdrop-blur-lg p-6 rounded-xl border",
        borderColor,
        `shadow-[0_0_20px_${shadowColor}]`,
        hoverEffect,
        animated && 'animate-pulse-subtle',
        className
      )}
    >
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-900/50 via-transparent to-dark-surface/30 rounded-xl pointer-events-none"></div>
      
      {/* Corner brackets for futuristic effect */}
      {withCorners && (
        <>
          <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${cornerColor} rounded-tl-lg`}></div>
          <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${cornerColor} rounded-tr-lg`}></div>
          <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${cornerColor} rounded-bl-lg`}></div>
          <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${cornerColor} rounded-br-lg`}></div>
        </>
      )}
      
      {/* Content with z-index to appear above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassPanel;
