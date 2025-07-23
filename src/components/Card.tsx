
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'red' | 'green' | 'amber' | 'neural' | 'biotech';
  variant?: 'modern' | 'glass' | 'elevated' | 'magnetic';
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
        return 'shadow-biotech border-bio-cyan/30';
      case 'purple':
        return 'shadow-neural border-blue-400/30';
      case 'red':
        return 'shadow-warm border-quantum-red/30';
      case 'green':
        return 'shadow-glow border-bio-emerald/30';
      case 'amber':
        return 'shadow-warm border-warm-amber/30';
      case 'neural':
        return 'shadow-neural border-neural-pink/30';
      case 'biotech':
        return 'shadow-biotech border-bio-cyan/30';
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
        return 'card-modern magnetic-hover';
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
