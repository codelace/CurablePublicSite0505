
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const AboutBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Minimalist background patterns with warmer tones */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern with red tint */}
        <div className="absolute inset-0 opacity-40">
          <CommandPatternBackground 
            variant="grid" 
            color="red" 
            intensity="low" 
            animated={false}
          />
        </div>
        
        {/* Node pattern overlay - warmer */}
        <div className="absolute inset-0 opacity-30">
          <CommandPatternBackground 
            variant="nodes" 
            color="red" 
            intensity="low" 
            animated={false}
          />
        </div>
        
        {/* Subtle floating particles - warmer colors */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute h-2 w-2 rounded-full bg-quantum-red/50 top-1/4 left-1/3 animate-float" style={{animationDuration: "3s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-plasma-violet/40 top-1/2 right-1/4 animate-float" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-quantum-red/50 bottom-1/3 left-1/2 animate-float" style={{animationDuration: "3.5s", animationDelay: "0.5s"}}></div>
        </div>
        
        {/* Dramatic light effect */}
        <div className="absolute top-0 left-1/3 right-1/3 h-1/3 bg-gradient-to-b from-quantum-red/15 to-transparent opacity-70"></div>
      </div>
      
      {/* Subtle gradient overlay with warmer tones */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-base/20 to-gunmetal-900/50"></div>
      
      {/* Subtle vignette effect around the edges */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-radial-gradient"></div>
    </>
  );
};

export default AboutBackgroundEffects;
