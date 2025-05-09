
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
}

const GradientText = ({
  children,
  variant = 'blue',
  className,
  animated = false
}: GradientTextProps) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'blue':
        return 'from-logo-blue to-blue-400';
      case 'green':
        return 'from-bio-green to-emerald-400';
      case 'violet':
        return 'from-plasma-violet to-purple-400';
      case 'multi':
        return 'from-logo-blue via-plasma-violet to-quantum-red';
      case 'red':
        return 'from-quantum-red to-red-400';
      case 'blue-purple':
        return 'from-logo-blue to-plasma-violet';
      case 'purple-red':
        return 'from-plasma-violet to-quantum-red';
      case 'green-blue':
        return 'from-bio-green to-logo-blue';
      case 'red-purple':
        return 'from-quantum-red to-plasma-violet';
      default:
        return 'from-logo-blue to-blue-400';
    }
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        getGradientClasses(),
        animated ? 'animate-text-shimmer bg-[length:200%_auto]' : '',
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
