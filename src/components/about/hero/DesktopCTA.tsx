
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesktopCTA: React.FC = () => {
  return (
    <div className="relative group">
      {/* Enhanced quantum glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-spectral-crimson/30 via-cosmic-indigo/20 to-spectral-crimson/30 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow"></div>
      
      {/* Rotating border effect */}
      <div className="absolute -inset-0.5 bg-gradient-conic from-spectral-crimson via-cosmic-indigo to-spectral-crimson rounded-xl blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500 animate-spin-slow"></div>
      
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative bg-gunmetal-900/95 hover:bg-gunmetal-800/95 text-white font-poppins font-bold flex items-center gap-3 border-2 border-spectral-crimson/50 hover:border-cosmic-indigo/70 transition-all duration-500 text-sm py-3 px-6 rounded-xl hover:scale-105 whitespace-nowrap backdrop-blur-md shadow-2xl shadow-spectral-crimson/40 hover:shadow-cosmic-indigo/50 magnetic-attraction"
      >
        <span className="holographic-text font-bold tracking-wide">launch --next-frontier</span>
        <ArrowRight className="w-5 h-5 text-spectral-crimson group-hover:text-cosmic-indigo group-hover:translate-x-2 transition-all duration-500" />
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-spectral-crimson/5 to-cosmic-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </a>
    </div>
  );
};

export default DesktopCTA;
