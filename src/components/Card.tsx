
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'red' | 'green' | 'amber';
}

const Card: React.FC<CardProps> = ({ children, className = '', glowColor }) => {
  const getGlowClass = () => {
    switch (glowColor) {
      case 'blue':
        return 'shadow-[0_0_20px_rgba(30,174,219,0.3)] border-logo-blue/30';
      case 'purple':
        return 'shadow-[0_0_20px_rgba(147,51,234,0.3)] border-plasma-violet/30';
      case 'red':
        return 'shadow-[0_0_20px_rgba(255,51,102,0.3)] border-quantum-red/30';
      case 'green':
        return 'shadow-[0_0_20px_rgba(34,197,94,0.3)] border-green-500/30';
      case 'amber':
        return 'shadow-[0_0_20px_rgba(245,158,11,0.3)] border-warm-amber/30';
      default:
        return 'border-graphite-700/60';
    }
  };

  return (
    <div 
      className={`bg-dark-surface/90 backdrop-blur-sm border rounded-lg transition-all duration-300 hover:scale-105 ${getGlowClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
