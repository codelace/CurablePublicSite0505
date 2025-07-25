
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
  | 'red-purple'
  | 'rainbow'
  | 'glassmorphic'
  | 'orange'
  | 'rose'
  | 'emerald'
  | 'indigo'
  | 'lime'
  | 'fuchsia';

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
        return 'from-cosmic-aura to-cosmic-indigo';
      case 'green':
        return 'from-bio-green to-spectral-glow';
      case 'violet':
        return 'from-cosmic-indigo to-spectral-crimson';
      case 'electric':
        return 'from-spectral-glow to-cosmic-aura';
      case 'quantum':
        return 'from-spectral-crimson via-spectral-glow to-cosmic-indigo';
      case 'multi':
        return 'from-spectral-crimson via-spectral-glow to-cosmic-indigo';
      case 'red':
        return 'from-spectral-crimson to-spectral-glow';
      case 'blue-purple':
        return 'from-cosmic-aura to-cosmic-indigo';
      case 'purple-red':
        return 'from-cosmic-indigo to-spectral-crimson';
      case 'green-blue':
        return 'from-bio-green to-cosmic-aura';
      case 'red-purple':
        return 'from-spectral-crimson to-cosmic-indigo';
      case 'rainbow':
        return 'from-spectral-crimson via-spectral-glow via-cosmic-aura via-cosmic-indigo to-spectral-crimson';
      case 'glassmorphic':
        return 'from-spectral-glow/80 via-cosmic-aura/70 to-spectral-crimson/80';
      case 'orange':
        return 'from-spectral-glow to-spectral-crimson';
      case 'rose':
        return 'from-spectral-crimson to-spectral-glow';
      case 'emerald':
        return 'from-bio-green to-cosmic-aura';
      case 'indigo':
        return 'from-cosmic-indigo to-cosmic-aura';
      case 'lime':
        return 'from-spectral-glow to-cosmic-aura';
      case 'fuchsia':
        return 'from-spectral-crimson to-cosmic-indigo';
      default:
        return 'from-spectral-crimson to-spectral-glow';
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
        // Enhanced quantum visibility effects
        WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.6)',
        textShadow: '0 0 12px hsl(var(--spectral-glow) / 0.8), 0 0 24px hsl(var(--cosmic-aura) / 0.4)',
        filter: 'contrast(1.3) brightness(1.2) saturate(1.1)'
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
