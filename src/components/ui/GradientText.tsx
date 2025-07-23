
import React from 'react';
import { cn } from '@/lib/utils';

export type GradientVariant = 
  | 'blue' 
  | 'green' 
  | 'multi' 
  | 'violet'
  | 'red'
  | 'electric'
  | 'quantum'
  | 'blue-purple'
  | 'purple-red'
  | 'green-blue'
  | 'red-purple';

export interface GradientTextProps {
  children: React.ReactNode;
  variant?: GradientVariant;
  className?: string;
  animated?: boolean;
  animate?: boolean; // Adding this property for backwards compatibility
}

const GradientText = ({
  children,
  variant = 'blue',
  className,
  animated = false,
  animate = false // Support for legacy prop, will be merged with animated
}: GradientTextProps) => {
  // Use either animated or animate prop (for backward compatibility)
  const shouldAnimate = animated || animate;
  
  const getGradientClasses = () => {
    switch (variant) {
      case 'blue':
        return 'from-logo-blue to-blue-400';
      case 'green':
        return 'from-bio-green to-emerald-400';
      case 'violet':
        return 'from-plasma-violet to-purple-400';
      case 'electric':
        return 'from-electric-quantum-blue to-quantum-electric';
      case 'quantum':
        return 'from-quantum-red via-electric-quantum-blue to-quantum-electric';
      case 'multi':
        return 'from-quantum-red via-electric-quantum-blue to-logo-blue';
      case 'red':
        return 'from-warm-rose to-quantum-red';
      case 'blue-purple':
        return 'from-electric-quantum-blue to-quantum-electric';
      case 'purple-red':
        return 'from-electric-quantum-blue to-quantum-red';
      case 'green-blue':
        return 'from-bio-green to-electric-quantum-blue';
      case 'red-purple':
        return 'from-quantum-red to-electric-quantum-blue';
      default:
        return 'from-quantum-red to-warm-rose';
    }
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent font-poppins font-bold',
        getGradientClasses(),
        shouldAnimate ? 'animate-text-shimmer bg-[length:200%_auto]' : '',
        className
      )}
      style={{
        // Enhanced visibility without blur
        WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)',
        textShadow: '0 0 8px rgba(255, 87, 87, 0.8), 0 0 16px rgba(255, 87, 87, 0.4)',
        filter: 'contrast(1.2) brightness(1.1)'
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
