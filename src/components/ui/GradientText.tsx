
import React from 'react';
import { cn } from '@/lib/utils';

export type GradientVariant = 
  | 'blue' 
  | 'green' 
  | 'multi' 
  | 'violet'
  | 'red'
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
      case 'multi':
        return 'from-quantum-red via-warm-rose to-logo-blue';
      case 'red':
        return 'from-quantum-red to-warm-rose';
      case 'blue-purple':
        return 'from-logo-blue to-plasma-violet';
      case 'purple-red':
        return 'from-plasma-violet to-quantum-red';
      case 'green-blue':
        return 'from-bio-green to-logo-blue';
      case 'red-purple':
        return 'from-quantum-red to-plasma-violet';
      default:
        return 'from-quantum-red to-warm-rose';
    }
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-quantum-red font-poppins font-bold [&:not(:hover)]:text-transparent',
        getGradientClasses(),
        shouldAnimate ? 'animate-text-shimmer bg-[length:200%_auto]' : '',
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
