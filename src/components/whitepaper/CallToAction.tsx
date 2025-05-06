
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center glass-panel p-6 rounded-lg relative group">
      {/* Add subtle animated background */}
      <div className="absolute inset-0 bg-dark-surface/40 rounded-lg -z-10 backdrop-blur-md"></div>
      
      {/* Add animated corners */}
      <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t border-l border-quantum-red/60 rounded-tl-sm group-hover:border-quantum-red/90 transition-colors duration-300"></div>
      <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t border-r border-bio-blue/60 rounded-tr-sm group-hover:border-bio-blue/90 transition-colors duration-300"></div>
      <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b border-l border-bio-blue/60 rounded-bl-sm group-hover:border-bio-blue/90 transition-colors duration-300"></div>
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b border-r border-quantum-red/60 rounded-br-sm group-hover:border-quantum-red/90 transition-colors duration-300"></div>
      
      <Button 
        className="bg-quantum-red text-dark-base hover:bg-quantum-red/90 font-mono font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(255,51,102,0.3)] hover:shadow-[0_0_20px_rgba(255,51,102,0.5)] transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">fork.protocol()</span>
        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-quantum-red to-quantum-red/90 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
      
      <Button 
        variant="outline"
        className="bg-transparent border-bio-blue text-bio-blue hover:bg-bio-blue/10 font-mono flex items-center gap-2 shadow-[0_0_8px_rgba(91,192,235,0.1)] hover:shadow-[0_0_15px_rgba(91,192,235,0.3)] transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">cite.whitepaper()</span>
        <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-bio-blue/10 to-bio-blue/0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
    </div>
  );
};

export default CallToAction;
