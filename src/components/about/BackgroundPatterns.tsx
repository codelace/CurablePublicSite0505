
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Enhanced background patterns with static display */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern with moderate intensity - allowing this one to animate since it's subtle */}
        <CommandPatternBackground 
          variant="grid" 
          color="blue" 
          intensity="high" 
          animated={false} 
          className=""
        />
        
        {/* Foreground node pattern with higher visibility - no animation */}
        <CommandPatternBackground 
          variant="nodes" 
          color="violet" 
          intensity="high" 
          animated={false} 
          className=""
        />
        
        {/* DNA helix pattern in the background - no animation */}
        <CommandPatternBackground 
          variant="dna" 
          color="violet" 
          intensity="high" 
          animated={false} 
          speed="slow" 
          className=""
        />
      </div>
      
      {/* Subtle gradient overlay for depth - static */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-80"></div>
    </>
  );
};

export default BackgroundPatterns;
