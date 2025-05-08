
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesktopCTA: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center sm:justify-start">
      {/* Cleaner, more subtle CTA button */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-logo-blue/30 via-plasma-violet/30 to-bio-green/30 rounded-lg blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <a 
          href="https://binding-db-integrator-1-codelace77.replit.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-dark-surface hover:bg-gunmetal-900 text-white font-medium flex items-center gap-3 font-mono border border-logo-blue/30 transition-all duration-500 text-base py-4 px-8 rounded-lg hover:scale-[1.03]"
        >
          <span className="bg-gradient-to-r from-logo-blue/90 via-plasma-violet/90 to-bio-green/90 bg-clip-text text-transparent">launch --next-frontier</span>
          <ArrowRight className="w-5 h-5 text-logo-blue/80 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default DesktopCTA;
