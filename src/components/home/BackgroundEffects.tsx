
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Revolutionary quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Quantum particle system */}
        <div className="absolute inset-0 quantum-particles"></div>
        
        {/* Neural network overlay */}
        <div className="absolute inset-0 neural-network opacity-15">
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
        </div>
        
        {/* DNA helix animation */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 dna-helix opacity-10">
          <div className="dna-strand"></div>
          <div className="dna-strand"></div>
        </div>
        
        {/* Quantum field distortion */}
        <div className="absolute inset-0 quantum-field"></div>
        
        {/* Data stream background */}
        <div className="absolute inset-0 data-stream-bg opacity-10"></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/8 via-transparent to-logo-blue/8"></div>
        
        {/* Holographic mesh pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--quantum-red))_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        {/* Enhanced glowing orbs */}
        <div className="absolute top-[15%] right-[20%] w-64 h-64 rounded-full bg-quantum-red/10 blur-3xl animate-pulse-glow magnetic-attraction"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-logo-blue/8 blur-3xl animate-pulse-glow magnetic-attraction" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-warm-rose/6 blur-3xl animate-pulse-glow magnetic-attraction" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
