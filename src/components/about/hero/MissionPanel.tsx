
import React from 'react';
import { mission } from '@/data/mission';

const MissionPanel: React.FC = () => {
  return (
    <div 
      className="glass-panel p-6 sm:p-8 mb-8 relative overflow-hidden group transition-all duration-500 backdrop-blur-md bg-dark-surface/50 border border-plasma-violet/20 rounded-lg shadow-[0_0_20px_rgba(161,98,255,0.1)] hover:shadow-[0_0_30px_rgba(161,98,255,0.2)]"
    >
      {/* Subtle corner brackets */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-plasma-violet/30"></div>
      <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-plasma-violet/30"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-plasma-violet/30"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-plasma-violet/30"></div>
      
      {/* Mission text with minimalist styling */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-titanium-white mb-6 font-space">Mission<span className="text-logo-blue">_</span></h2>
        
        {/* Mission text with cleaner border */}
        <div className="relative rounded-lg p-4 sm:p-6 bg-gunmetal-900/30 backdrop-blur-sm border border-logo-blue/10 shadow-inner">
          <p className="text-titanium-white/90 leading-relaxed text-base sm:text-lg font-light">
            <span className="text-bio-green text-xl">"</span>
            {mission}
            <span className="text-bio-green text-xl">"</span>
          </p>
        </div>
      </div>
      
      {/* Digital noise overlay - subtle texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.01] pointer-events-none z-0"></div>
    </div>
  );
};

export default MissionPanel;
