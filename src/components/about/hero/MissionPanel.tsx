
import React from 'react';
import { mission } from '@/data/mission';

const MissionPanel: React.FC = () => {
  return (
    <div 
      className="magnetic-card p-3 sm:p-4 mb-3 relative overflow-hidden group transition-all duration-500 backdrop-blur-md"
    >
      {/* Enhanced corner brackets with warmer colors */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-warm-rose/50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-warm-rose/50"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-warm-rose/50"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-warm-rose/50"></div>
      
      {/* Subtle glow effect in the background with enhanced warm colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-rose/10 via-warm-amber/5 to-transparent opacity-70 animate-pulse-subtle"></div>
      
      {/* Heat shimmer effect */}
      <div className="absolute inset-0 heat-shimmer pointer-events-none"></div>
      
      {/* Mission text with enhanced styling */}
      <div className="relative z-10">
        <h2 className="text-lg sm:text-xl font-bold text-titanium-white mb-2 font-poppins">
          Mission<span className="text-warm-rose">_</span>
          <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-warm-rose to-transparent"></span>
        </h2>
        
        {/* Mission text with warmer border - more compact */}
        <div className="relative rounded-lg p-2 sm:p-3 bg-gunmetal-900/30 backdrop-blur-sm border border-warm-rose/30 shadow-inner">
          <p className="text-titanium-white/90 leading-relaxed text-sm font-light">
            <span className="text-warm-rose text-base">"</span>
            {mission}
            <span className="text-warm-rose text-base">"</span>
          </p>
          
          {/* Magnetic corner glow */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-warm-rose/20 to-transparent rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-warm-amber/20 to-transparent rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* Digital noise overlay - subtle texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none z-0"></div>
    </div>
  );
};

export default MissionPanel;
