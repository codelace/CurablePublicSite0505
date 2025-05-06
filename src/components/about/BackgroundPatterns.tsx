
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Multiple background patterns layered for depth and visual interest */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base layer with grid */}
        <CommandPatternBackground variant="grid" color="blue" intensity="high" animated={true} />
        
        {/* Foreground motion layer with nodes */}
        <CommandPatternBackground variant="nodes" color="violet" intensity="medium" animated={true} />
        
        {/* DNA helix pattern in the background */}
        <CommandPatternBackground variant="dna" color="green" intensity="medium" animated={true} speed="slow" />
      </div>
      
      {/* Gradient overlay to create depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial opacity-90"></div>
    </>
  );
};

export default BackgroundPatterns;
