
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
            className="bg-spectral-crimson hover:bg-cosmic-indigo text-white font-poppins font-bold flex items-center gap-3 border-2 border-spectral-crimson/70 hover:border-cosmic-indigo/70 shadow-[0_0_25px_hsl(0_85%_67%/0.5)] transition-all duration-700 w-full justify-center text-base py-7 hover:shadow-[0_0_40px_hsl(258_100%_69%/0.7)] hover:translate-y-[-3px] magnetic-attraction backdrop-blur-md relative overflow-hidden group"
          >
            <span className="holographic-text font-bold tracking-wider">EXPLORE PLATFORM</span>
            <ChevronRight className="w-6 h-6 animate-pulse group-hover:translate-x-1 transition-transform duration-500" />
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-spectral-crimson/20 to-cosmic-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-gunmetal-900/95 border-graphite-700/60 p-6 w-[90vw] sm:max-w-[350px] shadow-[0_0_30px_rgba(161,98,255,0.4)]">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-poppins font-bold mb-3 text-titanium-white">
                <GradientText variant="multi" animate>Launch Options</GradientText>
              </h3>
              <p className="text-titanium-white/80 text-sm">Choose your destination</p>
            </div>
            
            <div className="space-y-6 w-full">
              <a 
                href="https://binding-db-integrator-1-codelace77.replit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-poppins font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 border-2 border-brand-charcoal/70 shadow-[0_0_20px_hsl(213_40%_19%/0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_hsl(213_40%_19%/0.6)] hover:translate-y-[-2px]"
              >
                BindingDB Interface
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="/novel" 
                className="bg-bio-green hover:bg-bio-green/90 text-brand-charcoal font-poppins font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 border-2 border-bio-green/70 shadow-[0_0_20px_hsl(135_69%_67%/0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_hsl(135_69%_67%/0.6)] hover:translate-y-[-2px]"
              >
                Novel Cure Platform
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="/join" 
                className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-poppins font-bold py-5 px-6 rounded-lg flex items-center justify-center gap-3 border-2 border-plasma-violet/70 shadow-[0_0_20px_hsl(258_100%_69%/0.4)] transition-all duration-500 w-full text-sm hover:shadow-[0_0_30px_hsl(258_100%_69%/0.6)] hover:translate-y-[-2px]"
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
