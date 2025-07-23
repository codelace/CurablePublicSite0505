
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesktopCTA: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-quantum-cyan/20 via-quantum-purple/20 to-quantum-emerald/20 rounded-lg blur-sm opacity-40 group-hover:opacity-70 transition duration-500"></div>
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative bg-brand-charcoal/95 hover:bg-brand-charcoal text-white font-poppins font-medium flex items-center gap-2 border border-quantum-cyan/40 hover:border-quantum-cyan/60 transition-all duration-500 text-sm py-2 px-4 rounded-lg hover:scale-[1.03] whitespace-nowrap backdrop-blur-sm shadow-lg"
      >
        <span className="text-white font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>launch --next-frontier</span>
        <ArrowRight className="w-4 h-4 text-quantum-cyan group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default DesktopCTA;
