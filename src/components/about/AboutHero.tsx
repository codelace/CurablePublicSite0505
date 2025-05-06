
import React, { useState, useEffect } from 'react';
import { ArrowRight, FlaskConical, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import StatusTicker from '@/components/StatusTicker';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const AboutHero = () => {
  // For typewriter effect
  const [displayTitle, setDisplayTitle] = useState('');
  const fullTitle = 'The Future of Cures: Molecule-to-Market';
  const isMobile = useIsMobile();
  
  const [tickerItems] = useState([
    '🔁 BindingDB integration active',
    '⬇️ New TargetForge scaffold queued',
    '📊 Protocol v2.0 review in progress',
    '🧪 42 active experiments running',
    '💊 Novel cure candidates: 17'
  ]);
  
  // Typewriter effect - only on desktop to improve mobile performance
  useEffect(() => {
    if (!isMobile && displayTitle.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayTitle(fullTitle.substring(0, displayTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayTitle === '') {
      setDisplayTitle(isMobile ? fullTitle : '');
    }
  }, [displayTitle, fullTitle, isMobile]);

  // Add class to make the section visible on initial load
  useEffect(() => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.classList.remove('opacity-0', 'translate-y-10');
      missionSection.classList.add('opacity-100', 'translate-y-0');
    }
  }, []);

  return (
    <div className="mb-10 sm:mb-16 relative z-10 transition-all duration-1000" id="mission-section">
      <CommandHUDHeader 
        title={isMobile ? "The Future of Cures" : (displayTitle || fullTitle)} 
        subtitle="Decentralized research & development protocol" 
        statusText="CURABLE CORE ACTIVE"
      />
      
      {/* Status ticker */}
      <StatusTicker items={tickerItems} className="mb-6 sm:mb-8" />
      
      {/* Enhanced mission panel with animated border and consistent accent colors */}
      <div className="glass-panel p-4 sm:p-6 mb-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(142,228,175,0.15)] transition-all duration-500">
        {/* Corner brackets for command center look - using consistent colors */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-plasma-violet/60"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-plasma-violet/60"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-plasma-violet/60"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-plasma-violet/60"></div>
        
        <p className="text-titanium-white/90 max-w-3xl mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg font-light">{mission}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-titanium-white/70 font-mono">
            <FlaskConical className="w-4 h-4 text-bio-green" />
            <span>Research Driven</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-titanium-white/70 font-mono">
            <Shield className="w-4 h-4 text-bio-blue" />
            <span>On-Chain Governance</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-titanium-white/70 font-mono">
            <Users className="w-4 h-4 text-plasma-violet" />
            <span>Community Owned</span>
          </div>
        </div>
        
        {isMobile ? (
          <div className="mt-4 sm:mt-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full justify-center text-sm py-5"
                >
                  LAUNCH APP
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gunmetal-900/95 border-graphite-700/40 p-4 w-[90vw] max-w-md">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-titanium-white">Launch Options</h3>
                    <p className="text-titanium-white/70 text-sm">Choose your destination</p>
                  </div>
                  
                  <div className="space-y-4 w-full">
                    <a 
                      href="https://binding-db-integrator-1-codelace77.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-bio-blue hover:bg-bio-blue/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-blue/60 shadow-[0_0_15px_rgba(91,192,235,0.3)] transition-all duration-300 w-full text-sm"
                    >
                      BindingDB Integrator
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/novel" 
                      className="bg-bio-green hover:bg-bio-green/90 text-gunmetal-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-green/60 shadow-[0_0_15px_rgba(142,228,175,0.3)] transition-all duration-300 w-full text-sm"
                    >
                      Novel Cure App
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/join" 
                      className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full text-sm"
                    >
                      Join DAO
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://binding-db-integrator-1-codelace77.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] hover:translate-y-[-2px]"
              >
                launch --next-frontier
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutHero;
