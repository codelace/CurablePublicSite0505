
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
          <div className="absolute h-2 w-2 rounded-full bg-warm-rose/60 top-1/4 left-1/3 animate-float" style={{animationDuration: "3s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-warm-amber/50 top-1/2 right-1/4 animate-float" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-warm-coral/60 bottom-1/3 left-1/2 animate-float" style={{animationDuration: "3.5s", animationDelay: "0.5s"}}></div>
        </div>
        
        {/* Dramatic light effect with warmer tones */}
        <div className="absolute top-0 left-1/3 right-1/3 h-1/3 bg-gradient-to-b from-warm-rose/20 to-transparent opacity-70"></div>
        
        {/* New: Magnetic field visualization */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-gradient-to-r from-transparent via-warm-rose/80 to-transparent animate-magnetic-flow"></div>
          <div className="absolute left-1/5 right-1/5 top-1/3 h-px bg-gradient-to-r from-transparent via-warm-amber/80 to-transparent animate-magnetic-flow" style={{animationDelay: "1s"}}></div>
          <div className="absolute left-1/6 right-1/6 top-2/3 h-px bg-gradient-to-r from-transparent via-warm-coral/80 to-transparent animate-magnetic-flow" style={{animationDelay: "2s"}}></div>
        </div>
      </div>
      
      {/* Subtle gradient overlay with warmer tones */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-base/20 to-gunmetal-900/50"></div>
      
      {/* Subtle vignette effect around the edges */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-radial-gradient"></div>
      
      {/* New: Heat distortion effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay">
        <div className="w-full h-full bg-[url('/noise.png')] animate-pulse-subtle" style={{animationDuration: "8s"}}></div>
      </div>
    </>
  );
};

export default AboutBackgroundEffects;
