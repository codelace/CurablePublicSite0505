
import React, { useState, useEffect } from 'react';
import { ArrowRight, Beaker, Shield, Users, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import StatusTicker from '@/components/StatusTicker';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import GradientText from '@/components/ui/GradientText';

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
      {/* Background glowing orbs */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-logo-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-plasma-violet/10 blur-3xl"></div>
      
      {/* Enhanced CommandHUDHeader with animated border */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/5 via-plasma-violet/10 to-bio-green/5 rounded-lg blur-sm"></div>
        <CommandHUDHeader 
          title={isMobile ? "The Future of Cures" : (displayTitle || fullTitle)} 
          subtitle={<>Decentralized <GradientText variant="blue-purple" animate>research & development</GradientText> protocol</>} 
          statusText="CURABLE CORE ACTIVE"
        />
      </div>
      
      {/* Status ticker with enhanced styling */}
      <StatusTicker items={tickerItems} className="mb-8 hover:shadow-[0_0_20px_rgba(30,174,219,0.3)] transition-all duration-300" />
      
      {/* Enhanced mission panel with dramatic design elements */}
      <div className="glass-panel p-6 sm:p-8 mb-12 relative overflow-hidden group hover:shadow-[0_0_35px_rgba(142,228,175,0.2)] transition-all duration-500">
        {/* Corner brackets with animated glow */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-plasma-violet/60 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-plasma-violet/60 animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-plasma-violet/60 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-plasma-violet/60 animate-pulse" style={{animationDelay: "1.5s"}}></div>
        
        {/* Scan line effect */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-logo-blue/50 to-transparent scan-line"></div>
        
        {/* Mission text with enhanced typography */}
        <div className="relative">
          <Star className="absolute -left-2 -top-2 text-bio-green/40 w-8 h-8 animate-pulse" />
          <p className="text-titanium-white/90 mb-8 leading-relaxed text-base sm:text-lg break-words data-surge font-light">
            <span className="text-bio-green font-semibold text-xl">"</span>
            {mission}
            <span className="text-bio-green font-semibold text-xl">"</span>
          </p>
        </div>
        
        {/* Enhanced feature icons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gunmetal-900/60 border border-logo-blue/30 text-sm text-titanium-white/70 font-mono hover:text-bio-green hover:border-bio-green/50 transition-all duration-300 group cursor-default">
            <Beaker className="w-4 h-4 text-bio-green group-hover:scale-125 transition-transform duration-300" />
            <span>Research Driven</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gunmetal-900/60 border border-bio-blue/30 text-sm text-titanium-white/70 font-mono hover:text-bio-blue hover:border-bio-blue/50 transition-all duration-300 group cursor-default">
            <Shield className="w-4 h-4 text-bio-blue group-hover:scale-125 transition-transform duration-300" />
            <span>On-Chain Governance</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gunmetal-900/60 border border-plasma-violet/30 text-sm text-titanium-white/70 font-mono hover:text-plasma-violet hover:border-plasma-violet/50 transition-all duration-300 group cursor-default">
            <Users className="w-4 h-4 text-plasma-violet group-hover:scale-125 transition-transform duration-300" />
            <span>Community Owned</span>
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        {isMobile ? (
          <div className="mt-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full justify-center text-xs py-5 hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] hover:translate-y-[-2px]"
                >
                  EXPLORE PLATFORM
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gunmetal-900/95 border-graphite-700/40 p-4 w-[85vw] sm:max-w-[280px]">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2 text-titanium-white">
                      <GradientText variant="multi" animate>Launch Options</GradientText>
                    </h3>
                    <p className="text-titanium-white/70 text-sm">Choose your destination</p>
                  </div>
                  
                  <div className="space-y-5 w-full">
                    <a 
                      href="https://binding-db-integrator-1-codelace77.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-bio-blue hover:bg-bio-blue/90 text-white font-bold py-4 px-5 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-blue/60 shadow-[0_0_15px_rgba(91,192,235,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(91,192,235,0.5)] hover:translate-y-[-2px]"
                    >
                      BindingDB
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/novel" 
                      className="bg-bio-green hover:bg-bio-green/90 text-gunmetal-900 font-bold py-4 px-5 rounded-lg flex items-center justify-center gap-2 font-mono border border-bio-green/60 shadow-[0_0_15px_rgba(142,228,175,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(142,228,175,0.5)] hover:translate-y-[-2px]"
                    >
                      Novel Cure
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="/join" 
                      className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold py-4 px-5 rounded-lg flex items-center justify-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 w-full text-xs hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] hover:translate-y-[-2px]"
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
          <div className="mt-8 flex justify-center sm:justify-start">
            <a 
              href="https://binding-db-integrator-1-codelace77.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-to-r from-logo-blue to-plasma-violet hover:from-plasma-violet hover:to-logo-blue text-white font-bold flex items-center gap-3 font-mono border border-plasma-violet/60 shadow-[0_0_20px_rgba(161,98,255,0.4)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(161,98,255,0.6)] hover:translate-y-[-3px] text-base py-6 px-8"
              >
                launch --next-frontier
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </Button>
            </a>
          </div>
        )}
        
        {/* Enhanced animated data points with brighter colors */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] bg-logo-blue/60 w-2 h-2 rounded-full animate-pulse-dot"></div>
          <div className="absolute top-[40%] right-[20%] bg-plasma-violet/60 w-2.5 h-2.5 rounded-full animate-pulse-dot" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-[30%] left-[30%] bg-bio-green/60 w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-[10%] right-[10%] bg-quantum-red/60 w-2 h-2 rounded-full animate-pulse-dot" style={{animationDelay: "1.5s"}}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
