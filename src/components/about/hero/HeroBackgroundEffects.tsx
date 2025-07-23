
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Quantum particle system */}
      <div className="absolute inset-0 quantum-particles"></div>
      
      {/* Neural network overlay */}
      <div className="absolute inset-0 neural-network">
        <div className="neural-node"></div>
        <div className="neural-node"></div>
        <div className="neural-node"></div>
        <div className="neural-node"></div>
      </div>
      
      {/* DNA helix animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 dna-helix opacity-20">
        <div className="dna-strand"></div>
        <div className="dna-strand"></div>
      </div>
      
      {/* Quantum field distortion */}
      <div className="absolute inset-0 quantum-field"></div>
      
      {/* Data stream background */}
      <div className="absolute inset-0 data-stream-bg"></div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 via-transparent to-logo-blue/5 pointer-events-none"></div>
      
      {/* Holographic mesh pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--quantum-red))_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Original dramatic elements enhanced */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-quantum-red/30 blur-3xl animate-pulse-glow magnetic-attraction"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-warm-amber/25 blur-3xl animate-pulse-glow magnetic-attraction" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-warm-coral/20 blur-3xl animate-pulse-glow magnetic-attraction" style={{animationDelay: "2s"}}></div>
    </>
  );
};

export default HeroBackgroundEffects;
