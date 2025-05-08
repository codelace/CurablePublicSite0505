
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Subtle background elements */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-logo-blue/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-plasma-violet/10 blur-3xl animate-pulse-glow" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-bio-green/8 blur-3xl animate-pulse-glow" style={{animationDelay: "2s"}}></div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.01] pointer-events-none z-0"></div>
    </>
  );
};

export default HeroBackgroundEffects;
