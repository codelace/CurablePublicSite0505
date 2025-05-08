
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'blue-purple' | 'purple-red' | 'green-blue' | 'multi';
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}

const GradientText = ({ 
  children, 
  variant = 'blue-purple', 
  className = '', 
  animate = false,
  style
}: GradientTextProps) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'purple-red': 
        return 'from-plasma-violet via-plasma-violet to-quantum-red';
      case 'green-blue': 
        return 'from-bio-green via-bio-blue to-logo-blue';
      case 'multi': 
        return 'from-logo-blue via-plasma-violet to-quantum-red';
      default: // blue-purple
        return 'from-logo-blue via-bio-blue to-plasma-violet';
    }
  };

  return (
    <span 
      className={cn(
        `bg-gradient-to-r bg-clip-text text-transparent inline-block`,
        getGradientClass(),
        animate && 'animate-text-shimmer bg-[length:200%_auto]',
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
};

export default GradientText;
