
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Spectacular quantum rainbow gradients with new accent colors */}
        
        {/* Enhanced multi-layered spectacular gradients */}
        <div className="absolute inset-0 bg-gradient-spectral-aurora opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-quantum-primary opacity-8"></div>
        <div className="absolute inset-0 bg-gradient-spectral-mesh opacity-6"></div>
        <div className="absolute inset-0 bg-gradient-quantum-accent opacity-4"></div>
        
        {/* Spectacular orbs with new crimson and cosmic indigo accents */}
        <div className="absolute top-[20%] right-[18%] w-96 h-96 rounded-full bg-gradient-radial from-spectral-crimson/12 to-transparent blur-3xl animate-pulse-glow will-change-transform"></div>
        <div className="absolute bottom-[25%] left-[12%] w-88 h-88 rounded-full bg-gradient-radial from-cosmic-indigo/10 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[55%] right-[8%] w-80 h-80 rounded-full bg-gradient-radial from-quantum-cyan/8 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-[40%] left-[70%] w-72 h-72 rounded-full bg-gradient-radial from-spectral-glow/6 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '9s'}}></div>
        <div className="absolute top-[35%] left-[5%] w-64 h-64 rounded-full bg-gradient-radial from-cosmic-aura/5 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '12s'}}></div>
        <div className="absolute bottom-[15%] right-[40%] w-68 h-68 rounded-full bg-gradient-radial from-quantum-emerald/4 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '15s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
