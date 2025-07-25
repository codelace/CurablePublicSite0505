
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'red' | 'green' | 'amber' | 'neural' | 'biotech' | 'spectral' | 'cosmic';
  variant?: 'modern' | 'glass' | 'elevated' | 'magnetic' | 'spectacular';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className = '', 
  glowColor,
  variant = 'modern',
  interactive = false,
  onMouseEnter,
  onMouseLeave 
}, ref) => {
  const getGlowClass = () => {
    switch (glowColor) {
      case 'blue':
        return 'shadow-biotech border-cosmic-aura/30';
      case 'purple':
        return 'shadow-neural border-cosmic-indigo/30';
      case 'red':
        return 'shadow-warm border-spectral-crimson/30';
      case 'green':
        return 'shadow-glow border-bio-emerald/30';
      case 'amber':
        return 'shadow-warm border-spectral-glow/30';
      case 'neural':
        return 'shadow-neural border-cosmic-aura/30';
      case 'biotech':
        return 'shadow-biotech border-cosmic-indigo/30';
      case 'spectral':
        return 'shadow-spectral border-spectral-crimson/40';
      case 'cosmic':
        return 'shadow-cosmic border-cosmic-indigo/40';
      default:
        return 'border-border/50';
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'glass':
        return 'card-glass';
      case 'elevated':
        return 'card-modern shadow-depth';
      case 'magnetic':
        return 'card-modern magnetic-spectral';
      case 'spectacular':
        return 'card-modern border-spectral particle-field-spectral cosmic-aura';
      default:
        return 'card-modern';
    }
  };

  const interactiveClass = interactive ? 'interactive' : '';
  const combinedClasses = `${getVariantClass()} ${getGlowClass()} ${interactiveClass} ${className}`;

  return (
    <div 
      ref={ref}
      className={combinedClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
