
import React from 'react';
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from "@/components/ui/tooltip";

const SignatureBlock: React.FC = () => {
  return (
    <div className="font-mono bg-dark-surface/40 border border-graphite-700/40 p-6 rounded mt-12">
      <div className="text-titanium-white/80 text-sm">
        <div className="text-quantum-red mb-4">/*</div>
        <div className="mb-2">CurableDAO is a protocol for collective healing.</div>
        <div className="mb-2">We, the network, sign this whitepaper in shared pursuit</div>
        <div className="mb-4">of decentralized biomedical breakthroughs.</div>
        <div className="mb-2">Signed,</div>
        <div className="text-bio-blue mb-2">The CurableDAO Genesis Contributors</div>
        <div className="text-quantum-red">*/</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {Array(5).fill(0).map((_, i) => (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-10 h-10 rounded-full bg-plasma-violet/20 flex items-center justify-center border border-plasma-violet/30 hover:bg-plasma-violet/30 transition-colors">
                  <span className="text-xs font-mono text-plasma-violet">0x{i.toString(16).padStart(2, '0')}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-xs font-mono">
                  <div>contributor.{i+1}.eth</div>
                  <div className="text-titanium-white/60">signed: 05/02/2024</div>
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
