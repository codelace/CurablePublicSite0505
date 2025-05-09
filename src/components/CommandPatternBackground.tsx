
import React, { useState, useEffect } from 'react';
import DotsPattern from './patterns/DotsPattern';
import GridPattern from './patterns/GridPattern';
import NodesPattern from './patterns/NodesPattern';
import MatrixPattern from './patterns/MatrixPattern';
import DnaPattern from './patterns/DnaPattern';
import CircuitPattern from './patterns/CircuitPattern';
import { PatternProps } from './patterns/types';

interface CommandPatternBackgroundProps {
  variant?: 'dots' | 'grid' | 'nodes' | 'matrix' | 'dna' | 'circuit';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  color?: 'blue' | 'green' | 'violet' | 'multi' | 'red';
  interactive?: boolean;
}

const CommandPatternBackground: React.FC<CommandPatternBackgroundProps> = ({
  variant = 'grid',
  intensity = 'medium',
  animated = false,
  className = '',
  speed = 'medium',
  color = 'violet', // Default to violet for consistency
  interactive = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Add interactive mouse tracking for pattern effects
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => setIsInteracting(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);
  
  // Get pattern component based on variant
  const getPatternComponent = () => {
    switch (variant) {
      case 'dots':
        return <DotsPattern variant="dots" intensity={intensity} animated={animated} color={color} speed={speed} />;
      case 'nodes':
        return <NodesPattern variant="nodes" intensity={intensity} animated={animated} color={color} speed={speed} />;
      case 'matrix':
        return <MatrixPattern variant="matrix" intensity={intensity} animated={animated} color={color} speed={speed} />;
      case 'dna':
        return <DnaPattern variant="dna" intensity={intensity} animated={animated} color={color} speed={speed} />;
      case 'circuit':
        return <CircuitPattern variant="circuit" intensity={intensity} animated={animated} color={color} speed={speed} />;
      default: // grid
        return <GridPattern variant="grid" intensity={intensity} animated={animated} color={color} speed={speed} />;
    }
  };

  // Determine container class
  const containerClass = 'absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden';

  return (
    <div className={`${containerClass} ${className}`}>
      {getPatternComponent()}
      
      {/* Add a subtle radial gradient that follows mouse position when interactive */}
      {interactive && isInteracting && (
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-plasma-violet/5 to-transparent pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            opacity: 0.6,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      )}
      
      {/* Add ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-conic from-transparent via-plasma-violet/5 to-transparent opacity-50 animate-rotate-slow"></div>
    </div>
  );
};

export default CommandPatternBackground;
