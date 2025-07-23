
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
        
        {/* Enhanced quantum rainbow spectrum overlay with glassmorphic effect */}
        <div className="absolute inset-0 bg-gradient-glassmorphic opacity-60 will-change-transform"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 via-quantum-lime/4 to-quantum-fuchsia/6 will-change-transform"></div>
        
        {/* Performance-optimized holographic mesh pattern */}
        <div className="absolute inset-0 opacity-4">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--quantum-red))_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        {/* Enhanced quantum rainbow orbs with varied colors */}
        <div className="absolute top-[15%] right-[20%] w-64 h-64 rounded-full bg-quantum-cyan/12 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-quantum-emerald/10 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-quantum-rose/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[40%] left-[25%] w-56 h-56 rounded-full bg-quantum-orange/6 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-[15%] right-[35%] w-72 h-72 rounded-full bg-quantum-indigo/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '8s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
