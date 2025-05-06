
import React from 'react';
import DotsPattern from './patterns/DotsPattern';
import GridPattern from './patterns/GridPattern';
import NodesPattern from './patterns/NodesPattern';
import MatrixPattern from './patterns/MatrixPattern';
import DnaPattern from './patterns/DnaPattern';
import CircuitPattern from './patterns/CircuitPattern';

interface CommandPatternBackgroundProps {
  variant?: 'dots' | 'grid' | 'nodes' | 'matrix' | 'dna' | 'circuit';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  color?: 'blue' | 'green' | 'violet' | 'multi';
}

const CommandPatternBackground: React.FC<CommandPatternBackgroundProps> = ({
  variant = 'grid',
  intensity = 'medium',
  animated = false, // Default to false to force all patterns to be static
  className = '',
  speed = 'medium',
  color = 'blue',
}) => {
  // Override animation setting to always be false
  const isAnimated = false; // Force false regardless of prop
  
  // Get pattern component based on variant
  const getPatternComponent = () => {
    switch (variant) {
      case 'dots':
        return <DotsPattern intensity={intensity} animated={false} color={color} speed={speed} />;
      case 'nodes':
        return <NodesPattern intensity={intensity} animated={false} color={color} speed={speed} />;
      case 'matrix':
        return <MatrixPattern intensity={intensity} animated={false} color={color} speed={speed} />;
      case 'dna':
        return <DnaPattern intensity={intensity} animated={false} color={color} speed={speed} />;
      case 'circuit':
        return <CircuitPattern intensity={intensity} animated={false} color={color} speed={speed} />;
      default: // grid
        return <GridPattern intensity={intensity} animated={false} color={color} speed={speed} />;
    }
  };

  // Determine container class and ensure pattern-static class is applied
  const containerClass = 'absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden pattern-static';

  return (
    <div className={`${containerClass} ${className} pattern-static`} style={{animation: 'none !important'}}>
      {getPatternComponent()}
    </div>
  );
};

export default CommandPatternBackground;
