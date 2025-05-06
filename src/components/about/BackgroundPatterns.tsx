
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Enhanced background patterns with higher intensity */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern with higher intensity */}
        <CommandPatternBackground 
          variant="grid" 
          color="blue" 
          intensity="high" 
          animated={true} 
          className="pattern-pulse"
        />
        
        {/* Foreground node pattern with higher visibility */}
        <CommandPatternBackground 
          variant="nodes" 
          color="violet" 
          intensity="high" 
          animated={true} 
          className="pattern-pulse"
        />
        
        {/* DNA helix pattern in the background */}
        <CommandPatternBackground 
          variant="dna" 
          color="green" 
          intensity="high" 
          animated={true} 
          speed="slow" 
          className="pattern-pulse"
        />
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-80"></div>
    </>
  );
};

export default BackgroundPatterns;
