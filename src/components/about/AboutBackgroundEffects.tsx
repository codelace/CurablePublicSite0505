
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const AboutBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Minimalist background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern - more subtle */}
        <div className="absolute inset-0 opacity-60">
          <CommandPatternBackground 
            variant="grid" 
            color="violet" 
            intensity="low" 
            animated={false}
          />
        </div>
        
        {/* Node pattern overlay - even more subtle */}
        <div className="absolute inset-0 opacity-40">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="low" 
            animated={false}
          />
        </div>
        
        {/* Subtle floating particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-2 w-2 rounded-full bg-bio-blue/50 top-1/4 left-1/3 animate-float" style={{animationDuration: "3s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-plasma-violet/40 top-1/2 right-1/4 animate-float" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-bio-green/50 bottom-1/3 left-1/2 animate-float" style={{animationDuration: "3.5s", animationDelay: "0.5s"}}></div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-base/10 to-gunmetal-900/40"></div>
    </>
  );
};

export default AboutBackgroundEffects;
