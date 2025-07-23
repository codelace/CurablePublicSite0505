
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesktopCTA: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-quantum-red/30 via-brand-charcoal/30 to-bio-green/30 rounded-lg blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative bg-brand-charcoal/90 hover:bg-brand-charcoal text-white font-poppins font-medium flex items-center gap-2 font-mono border border-quantum-red/30 hover:border-quantum-red/50 transition-all duration-500 text-sm py-1.5 px-3 rounded-lg hover:scale-[1.03] whitespace-nowrap"
      >
        <span className="bg-gradient-to-r from-quantum-red/90 via-logo-blue/90 to-bio-green/90 bg-clip-text text-transparent">launch --next-frontier</span>
        <ArrowRight className="w-4 h-4 text-quantum-red/80 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default DesktopCTA;
