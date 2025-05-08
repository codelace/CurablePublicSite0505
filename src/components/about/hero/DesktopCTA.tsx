
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesktopCTA: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center sm:justify-start">
      {/* Enhanced glowing CTA button */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500 animate-pulse-glow"></div>
        <a 
          href="https://binding-db-integrator-1-codelace77.replit.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-gradient-to-br from-gunmetal-900 to-dark-surface hover:from-dark-surface hover:to-gunmetal-900 text-white font-bold flex items-center gap-3 font-mono border-2 border-logo-blue/50 transition-all duration-500 text-base py-6 px-10 rounded-lg hover:scale-105"
        >
          <span className="bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">launch --next-frontier</span>
          <ArrowRight className="w-6 h-6 text-logo-blue group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default DesktopCTA;
