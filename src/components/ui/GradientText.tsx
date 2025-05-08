
import React from 'react';
import { cn } from '@/lib/utils';

type GradientVariant = 'blue-purple' | 'green-blue' | 'orange-red' | 'red-blue' | 'red-purple' | 'full-rainbow';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: GradientVariant;
  className?: string;
  animated?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  variant = 'blue-purple',
  className = '',
  animated = false
}) => {
  // Create a mapping of gradient variants - added new warm variants
  const gradientMap = {
    'blue-purple': 'from-logo-blue to-plasma-violet',
    'green-blue': 'from-bio-green to-logo-blue',
    'orange-red': 'from-[#FF6B6B] to-quantum-red',
    'red-blue': 'from-quantum-red to-logo-blue',
    'red-purple': 'from-quantum-red to-plasma-violet',
    'full-rainbow': 'from-quantum-red via-plasma-violet to-logo-blue'
  };
  
  const selectedGradient = gradientMap[variant];
  
  return (
    <span 
      className={cn(
        `bg-gradient-to-r ${selectedGradient} bg-clip-text text-transparent inline-block`,
        animated && 'animate-text-shimmer bg-size-200',
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
