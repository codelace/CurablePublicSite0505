
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Quantum particle system */}
        <div className="absolute inset-0 quantum-particles-optimized"></div>
        
        {/* Neural network overlay */}
        <div className="absolute inset-0 neural-network-optimized opacity-12">
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
        </div>
        
        {/* Data stream background */}
        <div className="absolute inset-0 data-stream-optimized"></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/6 via-transparent to-logo-blue/6"></div>
        
        {/* Performance-optimized holographic mesh pattern */}
        <div className="absolute inset-0 opacity-4">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--quantum-red))_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        {/* Optimized glowing orbs */}
        <div className="absolute top-[15%] right-[20%] w-64 h-64 rounded-full bg-quantum-red/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-logo-blue/6 blur-3xl animate-pulse-glow magnetic-attraction-optimized" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-warm-rose/4 blur-3xl animate-pulse-glow magnetic-attraction-optimized" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
