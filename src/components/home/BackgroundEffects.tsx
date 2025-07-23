
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Minimal quantum background system */}
        <div className="absolute inset-0 opacity-4">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--quantum-cyan))_1px,transparent_1px)] bg-[length:120px_120px] animate-pulse"></div>
        </div>
        
        {/* Clean quantum rainbow gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/3 via-transparent to-quantum-purple/3"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-quantum-emerald/2 via-transparent to-quantum-indigo/2"></div>
        
        {/* Minimal quantum orbs */}
        <div className="absolute top-[25%] right-[20%] w-80 h-80 rounded-full bg-gradient-radial from-quantum-cyan/6 to-transparent blur-3xl animate-pulse-glow will-change-transform"></div>
        <div className="absolute bottom-[30%] left-[15%] w-64 h-64 rounded-full bg-gradient-radial from-quantum-emerald/4 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
