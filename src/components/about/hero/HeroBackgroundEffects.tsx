
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Warmer background elements with more dramatic glows */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-quantum-red/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-warm-amber/20 blur-3xl animate-pulse-glow" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-warm-coral/15 blur-3xl animate-pulse-glow" style={{animationDelay: "2s"}}></div>
      
      {/* Dramatic light beam effect with warmer tones */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[70vh] bg-gradient-to-b from-quantum-red/15 via-warm-amber/10 to-transparent opacity-40 rotate-15"></div>
      
      {/* Digital noise overlay - enhanced */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-0 mix-blend-overlay"></div>
      
      {/* Scattered particles - warmer colors */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-warm-rose/90 animate-pulse-subtle"></div>
      <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-quantum-red/90 animate-pulse-subtle" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-warm-coral/80 animate-pulse-subtle" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 rounded-full bg-warm-amber/90 animate-pulse-subtle" style={{animationDelay: "1.5s"}}></div>
      
      {/* New: Heat ripples effect */}
      <div className="absolute inset-y-1/4 inset-x-1/3 w-1/3 h-1/2 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-quantum-red/30 to-transparent animate-warm-pulse"></div>
      </div>
      
      {/* New: Magnetic field lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[1px] top-1/4 bg-gradient-to-r from-transparent via-warm-rose/80 to-transparent animate-magnetic-flow"></div>
        <div className="absolute w-full h-[1px] top-2/4 bg-gradient-to-r from-transparent via-warm-coral/80 to-transparent animate-magnetic-flow" style={{animationDelay: "1s"}}></div>
        <div className="absolute w-full h-[1px] top-3/4 bg-gradient-to-r from-transparent via-warm-amber/80 to-transparent animate-magnetic-flow" style={{animationDelay: "2s"}}></div>
      </div>
    </>
  );
};

export default HeroBackgroundEffects;
