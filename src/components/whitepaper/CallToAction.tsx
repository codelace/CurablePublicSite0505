
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import GradientText from '@/components/ui/GradientText';

const CallToAction: React.FC = () => {
  const [hover, setHover] = useState<string | null>(null);
  
  return (
    <div 
      className="flex flex-col sm:flex-row gap-4 items-center justify-center glass-panel p-6 rounded-lg relative group"
      onMouseEnter={() => setHover('container')}
      onMouseLeave={() => setHover(null)}
    >
      {/* Enhanced animated background */}
      <div className={`absolute inset-0 bg-dark-surface/40 rounded-lg -z-10 backdrop-blur-md transition-all duration-500 ${hover === 'container' ? 'bg-dark-surface/60' : ''}`}></div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <div className={`w-full h-1 bg-logo-blue/15 absolute -translate-y-full ${hover === 'container' ? 'animate-scan-line' : ''}`}></div>
      </div>
      
      {/* Enhanced animated corners */}
      <div className={`absolute -top-0.5 -left-0.5 w-5 h-5 border-t border-l border-quantum-red/60 rounded-tl-sm transition-all duration-300 ${hover === 'container' ? 'border-quantum-red w-6 h-6' : ''}`}></div>
      <div className={`absolute -top-0.5 -right-0.5 w-5 h-5 border-t border-r border-bio-blue/60 rounded-tr-sm transition-all duration-300 ${hover === 'container' ? 'border-bio-blue w-6 h-6' : ''}`}></div>
      <div className={`absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b border-l border-bio-blue/60 rounded-bl-sm transition-all duration-300 ${hover === 'container' ? 'border-bio-blue w-6 h-6' : ''}`}></div>
      <div className={`absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b border-r border-quantum-red/60 rounded-br-sm transition-all duration-300 ${hover === 'container' ? 'border-quantum-red w-6 h-6' : ''}`}></div>
      
      <div className="text-center sm:text-left mb-3 sm:mb-0 sm:mr-4">
        <h3 className="text-lg font-poppins font-bold mb-1">
          <GradientText variant="red">Join the Movement</GradientText>
        </h3>
        <p className="text-sm text-foreground/70 font-poppins">Contribute to the next generation of decentralized biomedical research</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          className={`bg-quantum-red text-white font-poppins font-bold flex items-center gap-2 shadow-lg shadow-quantum-red/30 transition-all duration-300 relative overflow-hidden group btn-hover-effect premium-hover ${hover === 'fork' ? 'shadow-xl shadow-quantum-red/50 scale-105' : ''}`}
          onMouseEnter={() => setHover('fork')}
          onMouseLeave={() => setHover('container')}
        >
          <span className="relative z-10">fork.protocol()</span>
          <ArrowRight className={`w-4 h-4 relative z-10 transition-transform duration-300 ${hover === 'fork' ? 'translate-x-1' : ''}`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-quantum-red to-quantum-red/90 -z-0 transition-opacity duration-300 ${hover === 'fork' ? 'opacity-100' : 'opacity-0'}`}></div>
        </Button>
        
        <Button 
          variant="outline"
          className={`bg-transparent border-logo-blue text-logo-blue font-poppins flex items-center gap-2 shadow-lg shadow-logo-blue/20 transition-all duration-300 relative overflow-hidden group btn-hover-effect premium-hover ${hover === 'cite' ? 'shadow-xl shadow-logo-blue/40 scale-105' : ''}`}
          onMouseEnter={() => setHover('cite')}
          onMouseLeave={() => setHover('container')}
        >
          <span className="relative z-10">cite.whitepaper()</span>
          <ExternalLink className={`w-4 h-4 relative z-10 transition-transform duration-300 ${hover === 'cite' ? 'translate-x-1' : ''}`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-bio-blue/10 to-bio-blue/0 -z-0 transition-opacity duration-300 ${hover === 'cite' ? 'opacity-100' : 'opacity-0'}`}></div>
        </Button>
      </div>
      
      {/* Subtle pulse effect around the container */}
      <div className={`absolute -inset-px rounded-lg bg-gradient-to-r from-quantum-red/20 via-bio-blue/20 to-quantum-red/20 -z-20 blur-md transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

export default CallToAction;
