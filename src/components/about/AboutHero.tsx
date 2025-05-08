
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
    <div className="mb-8 sm:mb-12 relative z-10 transition-all duration-1000 overflow-hidden w-full" id="mission-section">
      <CommandHUDHeader 
        title={isMobile ? "The Future of Cures" : (displayTitle || fullTitle)} 
        subtitle="Decentralized research & development protocol" 
        statusText="CURABLE CORE ACTIVE"
      />
      
      {/* Status ticker */}
      <StatusTicker items={tickerItems} className="mb-6" />
      
      {/* Enhanced mission panel with animated border and consistent accent colors */}
      <div className="glass-panel p-3 sm:p-4 md:p-6 mb-6 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(142,228,175,0.15)] transition-all duration-500 holo-scan">
        {/* Corner brackets for command center look - using consistent colors */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-plasma-violet/60"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-plasma-violet/60"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-plasma-violet/60"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-plasma-violet/60"></div>
        
        <p className="text-titanium-white/90 mb-4 leading-relaxed text-sm sm:text-base break-words data-surge">{mission}</p>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-titanium-white/70 font-mono hover:text-bio-green transition-colors duration-300 group cursor-default">
            <FlaskConical className="w-4 h-4 text-bio-green group-hover:scale-125 transition-transform duration-300" />
            <span>Research Driven</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-titanium-white/70 font-mono hover:text-bio-blue transition-colors duration-300 group cursor-default">
            <Shield className="w-4 h-4 text-bio-blue group-hover:scale-125 transition-transform duration-300" />
            <span>On-Chain Governance</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-titanium-white/70 font-mono hover:text-plasma-violet transition-colors duration-300 group cursor-default">
            <Users className="w-4 h-4 text-plasma-violet group-hover:scale-125 transition-transform duration-300" />
            <span>Community Owned</span>
          </div>
        </div>
        
        {isMobile ? (
          <div className="mt-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full justify-center text-xs py-4 hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] energy-pulse"
                >
                  LAUNCH APP
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gunmetal-900/95 border-graphite-700/40 p-4 w-[85vw] sm:max-w-[280px]">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-titanium-white">Launch Options</h3>
                    <p className="text-titanium-white/70 text-sm">Choose your destination</p>
                  </div>
                  
                  <div className="space-y-4 w-full">
                    <a 
                      href="https://binding-db-integrator-1-codelace77.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-bio-blue hover:bg-bio-blue/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-blue/60 shadow-[0_0_15px_rgba(91,192,235,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(91,192,235,0.5)] cyber-loading"
                    >
                      BindingDB
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/novel" 
                      className="bg-bio-green hover:bg-bio-green/90 text-gunmetal-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-green/60 shadow-[0_0_15px_rgba(142,228,175,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(142,228,175,0.5)] cyber-loading"
                    >
                      Novel Cure
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/join" 
                      className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] cyber-loading"
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
          <div className="mt-6">
            <a 
              href="https://binding-db-integrator-1-codelace77.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] hover:translate-y-[-2px] energy-pulse"
              >
                launch --next-frontier
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </Button>
            </a>
          </div>
        )}
        
        {/* New: Animated data points that appear on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-[20%] left-[10%] bg-logo-blue/30 w-1.5 h-1.5 rounded-full animate-pulse"></div>
          <div className="absolute top-[40%] right-[20%] bg-plasma-violet/30 w-2 h-2 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-[30%] left-[30%] bg-bio-green/30 w-1 h-1 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-[10%] right-[10%] bg-quantum-red/30 w-1.5 h-1.5 rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
