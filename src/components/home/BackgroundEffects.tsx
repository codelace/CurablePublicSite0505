
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
        
        {/* Autumn rainbow spectrum overlay with reduced red intensity */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/8 via-quantum-amber/6 to-quantum-purple/8 will-change-transform"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-quantum-emerald/5 via-quantum-orange/4 to-quantum-indigo/6 will-change-transform"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-quantum-lime/4 via-quantum-rose/3 to-quantum-fuchsia/5 will-change-transform"></div>
        
        {/* Enhanced rainbow holographic mesh pattern */}
        <div className="absolute inset-0 opacity-6">
          <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_75%_75%,hsl(var(--quantum-purple))_1px,transparent_1px),radial-gradient(circle_at_50%_50%,hsl(var(--quantum-amber))_1px,transparent_1px)] bg-[length:40px_40px,60px_60px,80px_80px] animate-pulse"></div>
        </div>
        
        {/* Autumn rainbow orbs with varied colors - reduced red */}
        <div className="absolute top-[15%] right-[20%] w-64 h-64 rounded-full bg-quantum-cyan/10 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-quantum-emerald/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-quantum-amber/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[40%] left-[25%] w-56 h-56 rounded-full bg-quantum-lime/6 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-[15%] right-[35%] w-72 h-72 rounded-full bg-quantum-indigo/8 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '8s'}}></div>
        <div className="absolute top-[25%] left-[60%] w-40 h-40 rounded-full bg-quantum-fuchsia/6 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '10s'}}></div>
        <div className="absolute bottom-[40%] left-[5%] w-60 h-60 rounded-full bg-quantum-orange/5 blur-3xl animate-pulse-glow magnetic-attraction-optimized will-change-transform" style={{animationDelay: '12s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
