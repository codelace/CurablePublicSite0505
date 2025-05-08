
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
  const [displayedElements, setDisplayedElements] = useState<string[]>([]);
  const title = 'The Future of Cures: Molecule-to-Market';
  const isMobile = useIsMobile();
  
  const [tickerItems] = useState([
    '🔬 Advanced protein modeling initiated',
    '⬇️ New TargetForge scaffold queued',
    '📊 Protocol v2.0 review in progress',
    '🧪 42 active experiments running',
    '💊 Novel cure candidates: 17',
    '🧬 Gene sequence analysis complete'
  ]);
  
  // Staggered animation for elements
  useEffect(() => {
    const elements = ['header', 'ticker', 'mission', 'features', 'cta'];
    
    const showElements = async () => {
      for (const element of elements) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setDisplayedElements(prev => [...prev, element]);
      }
    };
    
    showElements();
  }, []);

  return (
    <div className="relative z-10 w-full overflow-visible">
      {/* Enhanced background elements */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-logo-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-plasma-violet/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-bio-green/5 blur-3xl"></div>
      
      {/* Command HUD Header with dramatic appearance */}
      <div className={`relative mb-6 transform transition-all duration-500 ${displayedElements.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/10 via-plasma-violet/15 to-bio-green/10 rounded-xl blur-sm"></div>
        <CommandHUDHeader 
          title={<>
            <span className="text-titanium-white">The Future of Cures:</span>
            <span className="ml-2 bg-gradient-to-r from-bio-blue via-logo-blue to-plasma-violet bg-clip-text text-transparent">Molecule-to-Market</span>
          </>}
          subtitle={<>Decentralized <GradientText variant="blue-purple">research & development</GradientText> protocol</>} 
          statusText="CURABLE CORE ACTIVE"
          animated={false}
        />
      </div>
      
      {/* Enhanced Status Ticker with dramatic styling */}
      <div className={`transform transition-all duration-500 ${displayedElements.includes('ticker') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <StatusTicker 
          items={tickerItems} 
          className="mb-8 hover:shadow-[0_0_30px_rgba(30,174,219,0.4)] transition-all duration-500 glass-panel"
        />
      </div>
      
      {/* Enhanced mission panel with futuristic design elements */}
      <div 
        className={`glass-panel p-6 sm:p-8 mb-12 relative overflow-hidden group transition-all duration-700 transform ${displayedElements.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-[0_0_40px_rgba(142,228,175,0.3)]`}
      >
        {/* Enhanced corner brackets with animated glow */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-plasma-violet/70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-plasma-violet/70 animate-pulse" style={{animationDelay: "1.5s"}}></div>
        
        {/* Enhanced scan line effect */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-logo-blue/60 to-transparent scan-line"></div>
        
        {/* Mission text with enhanced typography and effects */}
        <div className="relative z-10">
          <Star className="absolute -left-2 -top-2 text-bio-green/60 w-10 h-10 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-titanium-white mb-4">Mission Statement<span className="text-logo-blue">_</span></h2>
          <p className="text-titanium-white/90 mb-8 leading-relaxed text-base sm:text-lg break-words data-surge font-light pl-4 border-l-2 border-plasma-violet/30">
            <span className="text-bio-green font-semibold text-2xl">"</span>
            {mission}
            <span className="text-bio-green font-semibold text-2xl">"</span>
          </p>
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-graphite-700/60 to-transparent my-8"></div>
        </div>
        
        {/* Enhanced feature icons with more dramatic styling */}
        <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-700 delay-300 ${displayedElements.includes('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-bio-green hover:border-bio-green/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(142,228,175,0.3)]">
            <Beaker className="w-5 h-5 text-bio-green group-hover:scale-125 transition-transform duration-300" />
            <span>Research Driven</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-bio-blue hover:border-bio-blue/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(91,192,235,0.3)]">
            <Shield className="w-5 h-5 text-bio-blue group-hover:scale-125 transition-transform duration-300" />
            <span>On-Chain Governance</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-plasma-violet hover:border-plasma-violet/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(161,98,255,0.3)]">
            <Users className="w-5 h-5 text-plasma-violet group-hover:scale-125 transition-transform duration-300" />
            <span>Community Owned</span>
          </div>
        </div>
        
        {/* Enhanced CTA section with more dramatic styling */}
        <div className={`transform transition-all duration-700 delay-500 ${displayedElements.includes('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {isMobile ? (
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
          ) : (
            <div className="mt-10 flex justify-center sm:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
                <a 
                  href="https://binding-db-integrator-1-codelace77.replit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-br from-gunmetal-900 to-dark-surface hover:from-dark-surface hover:to-gunmetal-900 text-white font-bold flex items-center gap-3 font-mono border-2 border-logo-blue/50 transition-all duration-500 text-base py-6 px-10 rounded-lg"
                >
                  <span className="bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green bg-clip-text text-transparent">launch --next-frontier</span>
                  <ArrowRight className="w-6 h-6 text-logo-blue animate-pulse" />
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* Enhanced animated data points with brighter colors and more dramatic effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] bg-logo-blue/70 w-2 h-2 rounded-full animate-ping" style={{animationDuration: "3s"}}></div>
          <div className="absolute top-[40%] right-[20%] bg-plasma-violet/70 w-3 h-3 rounded-full animate-ping" style={{animationDuration: "4s", animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-[30%] left-[30%] bg-bio-green/70 w-2 h-2 rounded-full animate-ping" style={{animationDuration: "5s", animationDelay: "1s"}}></div>
          <div className="absolute bottom-[10%] right-[10%] bg-quantum-red/70 w-2.5 h-2.5 rounded-full animate-ping" style={{animationDuration: "3.5s", animationDelay: "1.5s"}}></div>
        </div>
      </div>
      
      {/* Digital noise overlay - purely decorative */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-0"></div>
    </div>
  );
};

export default AboutHero;
