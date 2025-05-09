
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import useMagneticEffect from '@/hooks/useMagneticEffect';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  glowColor?: string;
  glowRadius?: number;
  scale?: number;
  borderColor?: string;
  background?: string;
}

const MagneticCard = ({
  children,
  className,
  strength = 5,
  glowColor = 'rgba(255, 70, 118, 0.4)',
  glowRadius = 15,
  scale = 1.02,
  borderColor = 'warm-rose',
  background = 'dark-surface/60',
}: MagneticCardProps) => {
  const { ref, style, isHovering } = useMagneticEffect({
    strength,
    scale,
    glowColor,
    glowRadius
  });
  
  // Map border color to Tailwind classes
  const getBorderClass = () => {
    switch (borderColor) {
      case 'warm-rose': return 'border-warm-rose/40';
      case 'warm-amber': return 'border-warm-amber/40';
      case 'warm-coral': return 'border-warm-coral/40';
      case 'blue': return 'border-logo-blue/40';
      case 'green': return 'border-bio-green/40';
      case 'violet': return 'border-plasma-violet/40';
      default: return 'border-warm-rose/40';
    }
  };
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        `rounded-lg border ${getBorderClass()} bg-${background} backdrop-blur-md p-4`,
        isHovering && 'z-10',
        className
      )}
      style={style}
    >
      {/* Inner content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Magnetic glow effect */}
      {isHovering && (
        <div className="absolute inset-0 -z-10 rounded-lg pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-warm-rose/20 via-transparent to-transparent opacity-70"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-rose/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-rose/40 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default MagneticCard;
