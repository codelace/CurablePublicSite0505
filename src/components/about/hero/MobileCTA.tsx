
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/GradientText';

const MobileCTA: React.FC = () => {
  return (
    <div className="mt-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border-2 border-plasma-violet/70 shadow-[0_0_20px_rgba(161,98,255,0.4)] transition-all duration-500 w-full justify-center text-sm py-6 hover:shadow-[0_0_30px_rgba(161,98,255,0.6)] hover:translate-y-[-2px]"
          >
            EXPLORE PLATFORM
            <ChevronRight className="w-5 h-5 animate-pulse" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-gunmetal-900/95 border-graphite-700/60 p-6 w-[90vw] sm:max-w-[350px] shadow-[0_0_30px_rgba(161,98,255,0.4)]">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-3 text-titanium-white">
                <GradientText variant="multi" animate>Launch Options</GradientText>
              </h3>
              <p className="text-titanium-white/80 text-sm">Choose your destination</p>
            </div>
            
            <div className="space-y-6 w-full">
              <a 
                href="https://binding-db-integrator-1-codelace77.replit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bio-blue hover:bg-bio-blue/90 text-white font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 font-mono border-2 border-bio-blue/70 shadow-[0_0_20px_rgba(91,192,235,0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_rgba(91,192,235,0.6)] hover:translate-y-[-2px]"
              >
                BindingDB Interface
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="/novel" 
                className="bg-bio-green hover:bg-bio-green/90 text-gunmetal-900 font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 font-mono border-2 border-bio-green/70 shadow-[0_0_20px_rgba(142,228,175,0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_rgba(142,228,175,0.6)] hover:translate-y-[-2px]"
              >
                Novel Cure Platform
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="/join" 
                className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 font-mono border-2 border-plasma-violet/70 shadow-[0_0_20px_rgba(161,98,255,0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_rgba(161,98,255,0.6)] hover:translate-y-[-2px]"
              >
                Join DAO Community
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileCTA;
