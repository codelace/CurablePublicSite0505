
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
      border: 'border-logo-blue/40',
      shadow: 'rgba(30, 174, 219, ',
      hover: 'hover:shadow-[0_0_20px_rgba(30,174,219,0.3)] hover:border-logo-blue/60',
      cornerColor: 'border-logo-blue/40',
    },
    purple: {
      border: 'border-plasma-violet/40',
      shadow: 'rgba(161, 98, 255, ',
      hover: 'hover:shadow-[0_0_20px_rgba(161,98,255,0.3)] hover:border-plasma-violet/60',
      cornerColor: 'border-plasma-violet/40',
    },
    green: {
      border: 'border-bio-green/40',
      shadow: 'rgba(142, 228, 175, ',
      hover: 'hover:shadow-[0_0_20px_rgba(142,228,175,0.3)] hover:border-bio-green/60',
      cornerColor: 'border-bio-green/40',
    },
    red: {
      border: 'border-quantum-red/40',
      shadow: 'rgba(255, 51, 102, ',
      hover: 'hover:shadow-[0_0_20px_rgba(255,51,102,0.3)] hover:border-quantum-red/60',
      cornerColor: 'border-quantum-red/40',
    },
    multi: {
      border: 'border-transparent bg-gradient-to-r from-logo-blue/30 via-plasma-violet/30 to-bio-green/30',
      shadow: 'rgba(30, 174, 219, ',
      hover: 'hover:shadow-[0_0_20px_rgba(30,174,219,0.3)]',
      cornerColor: 'border-logo-blue/40',
    },
    none: {
      border: 'border-graphite-700/20',
      shadow: 'rgba(0, 0, 0, ',
      hover: 'hover:shadow-[0_0_10px_rgba(39,44,51,0.3)] hover:border-graphite-700/40',
      cornerColor: 'border-graphite-700/30',
    },
  };

  // Intensity mapping for shadow strength - reduced for more minimalist look
  const intensityMap = {
    low: '0.1)',
    medium: '0.2)',
    high: '0.25)',
  };

  // Get styles based on color and intensity
  const borderColor = colorMap[borderGlow].border;
  const shadowColor = colorMap[borderGlow].shadow + intensityMap[intensity];
  const hoverEffect = hover ? `transition-all duration-500 ${colorMap[borderGlow].hover}` : '';
  const cornerColor = colorMap[borderGlow].cornerColor;
  
  return (
    <div 
      className={cn(
        "relative bg-dark-surface/60 backdrop-blur-md p-5 rounded-lg border",
        borderColor,
        `shadow-[0_0_15px_${shadowColor}]`,
        hoverEffect,
        animated && 'animate-pulse-subtle',
        className
      )}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal-900/30 via-transparent to-dark-surface/20 rounded-lg pointer-events-none"></div>
      
      {/* Corner brackets for futuristic effect - more subtle now */}
      {withCorners && (
        <>
          <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${cornerColor} rounded-tl-sm`}></div>
          <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${cornerColor} rounded-tr-sm`}></div>
          <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${cornerColor} rounded-bl-sm`}></div>
          <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${cornerColor} rounded-br-sm`}></div>
        </>
      )}
      
      {/* Content with z-index to appear above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassPanel;
