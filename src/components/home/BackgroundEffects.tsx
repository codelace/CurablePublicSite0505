
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Subtle quantum background system */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_80%_80%,hsl(var(--quantum-purple))_1px,transparent_1px)] bg-[length:80px_80px,120px_120px] animate-pulse"></div>
        </div>
        
        {/* Clean quantum rainbow gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/4 via-transparent to-quantum-purple/4"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-quantum-emerald/3 via-transparent to-quantum-indigo/3"></div>
        
        {/* Elegant quantum orbs - reduced count */}
        <div className="absolute top-[20%] right-[15%] w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/8 to-transparent blur-3xl animate-pulse-glow will-change-transform"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-gradient-radial from-quantum-emerald/6 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[50%] right-[5%] w-64 h-64 rounded-full bg-gradient-radial from-quantum-purple/6 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
