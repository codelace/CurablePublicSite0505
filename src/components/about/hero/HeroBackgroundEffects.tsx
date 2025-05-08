
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Warmer background elements with more dramatic glows */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-quantum-red/15 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-plasma-violet/15 blur-3xl animate-pulse-glow" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-bio-green/10 blur-3xl animate-pulse-glow" style={{animationDelay: "2s"}}></div>
      
      {/* Dramatic light beam effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[70vh] bg-gradient-to-b from-quantum-red/10 via-transparent to-transparent opacity-30 rotate-15"></div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none z-0"></div>
      
      {/* Scattered particles - small dots of light */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-quantum-red/80 animate-pulse-subtle"></div>
      <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-quantum-red/80 animate-pulse-subtle" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-quantum-red/80 animate-pulse-subtle" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 left-3/4 w-1 h-1 rounded-full bg-quantum-red/80 animate-pulse-subtle" style={{animationDelay: "1.5s"}}></div>
    </>
  );
};

export default HeroBackgroundEffects;
