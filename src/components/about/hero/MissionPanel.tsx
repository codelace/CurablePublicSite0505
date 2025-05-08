
import React from 'react';
import { Star } from 'lucide-react';
import { mission } from '@/data/mission';
import GradientText from '@/components/ui/GradientText';

const MissionPanel: React.FC = () => {
  return (
    <div 
      className="glass-panel p-6 sm:p-8 mb-12 relative overflow-hidden group transition-all duration-1000 transform hover:shadow-[0_0_40px_rgba(142,228,175,0.3)]"
    >
      {/* Corner brackets with animated glow */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-plasma-violet/70 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "1.5s"}}></div>
      
      {/* Scan line effect */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-logo-blue/60 to-transparent animate-scan-line"></div>
      
      {/* Mission text with enhanced typography and effects */}
      <div className="relative z-10">
        <Star className="absolute -left-2 -top-2 text-bio-green/60 w-10 h-10 animate-pulse" />
        <h2 className="text-2xl sm:text-3xl font-bold text-titanium-white mb-4">Mission Statement<span className="text-logo-blue">_</span></h2>
        
        {/* Mission text with gradient border */}
        <div className="relative rounded-lg p-4 sm:p-6 bg-gradient-to-br from-gunmetal-900/50 to-dark-surface/30 backdrop-blur-sm border border-logo-blue/30 shadow-inner">
          <p className="text-titanium-white/90 leading-relaxed text-base sm:text-lg break-words font-light">
            <span className="text-bio-green font-semibold text-2xl">"</span>
            {mission}
            <span className="text-bio-green font-semibold text-2xl">"</span>
          </p>
          
          {/* Bottom highlight line */}
          <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-bio-green/40 to-transparent"></div>
        </div>
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-graphite-700/60 to-transparent my-8"></div>
      </div>
      
      {/* Animated data points with brighter colors and more dramatic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] bg-logo-blue/70 w-2 h-2 rounded-full animate-ping" style={{animationDuration: "3s"}}></div>
        <div className="absolute top-[40%] right-[20%] bg-plasma-violet/70 w-3 h-3 rounded-full animate-ping" style={{animationDuration: "4s", animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-[30%] left-[30%] bg-bio-green/70 w-2 h-2 rounded-full animate-ping" style={{animationDuration: "5s", animationDelay: "1s"}}></div>
        <div className="absolute bottom-[10%] right-[10%] bg-quantum-red/70 w-2.5 h-2.5 rounded-full animate-ping" style={{animationDuration: "3.5s", animationDelay: "1.5s"}}></div>
      </div>
      
      {/* Digital noise overlay - purely decorative */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-0"></div>
    </div>
  );
};

export default MissionPanel;
