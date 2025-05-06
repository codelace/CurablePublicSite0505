
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-dark-surface/20 border border-graphite-700/20 p-6 rounded-lg">
      <Button 
        className="bg-bio-green text-dark-base hover:bg-bio-green/90 font-mono font-bold flex items-center gap-2"
      >
        fork.protocol()
        <ArrowRight className="w-4 h-4" />
      </Button>
      
      <Button 
        variant="outline"
        className="bg-transparent border-arc-blue text-arc-blue hover:bg-arc-blue/10 font-mono flex items-center gap-2"
      >
        cite.whitepaper()
        <ExternalLink className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CallToAction;
