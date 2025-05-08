
import React from 'react';
import { mission } from '@/data/mission';

const MissionPanel: React.FC = () => {
  return (
    <div 
      className="magnetic-card p-6 sm:p-8 mb-8 relative overflow-hidden group transition-all duration-500 backdrop-blur-md"
    >
      {/* Enhanced corner brackets with warmer colors */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-quantum-red/40"></div>
      <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-quantum-red/40"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-quantum-red/40"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-quantum-red/40"></div>
      
      {/* Subtle glow effect in the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 via-transparent to-transparent opacity-50 animate-pulse-subtle"></div>
      
      {/* Mission text with enhanced styling */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-titanium-white mb-6 font-space">Mission<span className="text-quantum-red">_</span></h2>
        
        {/* Mission text with warmer border */}
        <div className="relative rounded-lg p-4 sm:p-6 bg-gunmetal-900/30 backdrop-blur-sm border border-quantum-red/20 shadow-inner">
          <p className="text-titanium-white/90 leading-relaxed text-base sm:text-lg font-light">
            <span className="text-quantum-red text-xl">"</span>
            {mission}
            <span className="text-quantum-red text-xl">"</span>
          </p>
        </div>
      </div>
      
      {/* Digital noise overlay - subtle texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.01] pointer-events-none z-0"></div>
    </div>
  );
};

export default MissionPanel;
