
import React, { useState, useEffect } from 'react';
import { ArrowRight, FlaskConical, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import StatusTicker from '@/components/StatusTicker';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutHero = () => {
  // For typewriter effect
  const [displayTitle, setDisplayTitle] = useState('');
  const fullTitle = 'Building the Future of Cures: Molecule to Market';
  const isMobile = useIsMobile();
  
  const [tickerItems] = useState([
    '🔁 BindingDB integration active',
    '⬇️ New TargetForge scaffold queued',
    '📊 Protocol v2.0 review in progress',
    '🧪 42 active experiments running',
    '💊 Novel cure candidates: 17'
  ]);
  
  // Typewriter effect
  useEffect(() => {
    if (displayTitle.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayTitle(fullTitle.substring(0, displayTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayTitle]);

  // Add class to make the section visible on initial load
  useEffect(() => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.classList.remove('opacity-0', 'translate-y-10');
      missionSection.classList.add('opacity-100', 'translate-y-0');
    }
  }, []);

  return (
    <div className="mb-16 relative z-10 transition-all duration-1000" id="mission-section">
      <CommandHUDHeader 
        title={displayTitle || 'Building the Future of Cures: Molecule to Market'} 
        subtitle="Decentralized research & development protocol" 
        statusText="CURABLE CORE ACTIVE"
      />
      
      {/* Status ticker */}
      <StatusTicker items={tickerItems} className="mb-8" />
      
      {/* Enhanced mission panel with animated border */}
      <div className="glass-panel p-6 mb-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(142,228,175,0.15)] transition-all duration-500">
        {/* Animated scan line effect */}
        <div className="absolute inset-0 scan-line pointer-events-none"></div>
        
        {/* Corner brackets for command center look */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-bio-blue/60"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-bio-blue/60"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-bio-blue/60"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-bio-blue/60"></div>
        
        <p className="text-titanium-white/90 max-w-3xl mb-6 leading-relaxed text-lg font-light">{mission}</p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-titanium-white/70 font-mono">
            <FlaskConical className="w-4 h-4 text-bio-green" />
            <span>Research Driven</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-titanium-white/70 font-mono">
            <Shield className="w-4 h-4 text-bio-blue" />
            <span>On-Chain Governance</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-titanium-white/70 font-mono">
            <Users className="w-4 h-4 text-plasma-violet" />
            <span>Community Owned</span>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="https://binding-db-integrator-1-codelace77.replit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(161,98,255,0.5)] hover:translate-y-[-2px]"
            >
              {isMobile ? 'launch' : 'launch --next-frontier'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
