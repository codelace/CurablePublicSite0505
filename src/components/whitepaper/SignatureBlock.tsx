
import React from 'react';
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from "@/components/ui/tooltip";

const SignatureBlock: React.FC = () => {
  return (
    <div className="font-mono bg-brand-charcoal/40 border border-quantum-red/40 p-6 rounded-xl mt-12 relative overflow-hidden shadow-lg shadow-quantum-red/20 backdrop-blur-sm">
      {/* Background scan effect */}
      <div className="absolute inset-0 holo-scan pointer-events-none"></div>
      
      {/* Technical signatures visualization */}
      <div className="absolute right-3 top-3 bottom-3 w-16 opacity-20">
        <div className="h-full w-full flex flex-col">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i}
              className="h-px bg-gradient-to-r from-bio-blue to-transparent" 
              style={{ 
                width: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="text-foreground/80 text-sm relative z-10 font-poppins">
        <div className="text-quantum-red mb-4 glow-text">/*</div>
        <div className="mb-2 hover:text-foreground transition-colors">CurableDAO is a protocol for collective healing.</div>
        <div className="mb-2 hover:text-foreground transition-colors">We, the network, sign this whitepaper in shared pursuit</div>
        <div className="mb-4 hover:text-foreground transition-colors">of decentralized biomedical breakthroughs.</div>
        <div className="mb-2 hover:text-foreground transition-colors">Signed,</div>
        <div className="text-logo-blue mb-2 glow-text">The CurableDAO Genesis Contributors</div>
        <div className="text-quantum-red glow-text">*/</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {Array(5).fill(0).map((_, i) => (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="w-10 h-10 rounded-full bg-plasma-violet/20 flex items-center justify-center border border-plasma-violet/30 hover:bg-plasma-violet/30 transition-colors hover:scale-110 relative group overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="text-xs font-mono text-plasma-violet relative z-10">0x{i.toString(16).padStart(2, '0')}</span>
                  
                  {/* Inner pulsing effect */}
                  <div className="absolute inset-0 bg-plasma-violet/10 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="absolute inset-1 border border-plasma-violet/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all"></div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-dark-surface/90 backdrop-blur-md border-graphite-700">
                <div className="text-xs font-mono">
                  <div className="text-bio-blue">contributor.{i+1}.eth</div>
                  <div className="text-titanium-white/60">signed: 05/02/2024</div>
                  <div className="text-titanium-white/40 text-[0.6rem]">hash: 0x{Array(8).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default SignatureBlock;
