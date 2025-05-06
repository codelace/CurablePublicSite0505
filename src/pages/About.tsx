
import React, { useState, useEffect } from 'react';
import { ArrowRight, FlaskConical, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import SectionDivider from '@/components/SectionDivider';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import StatusTicker from '@/components/StatusTicker';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const About = () => {
  // For typewriter effect
  const [displayTitle, setDisplayTitle] = useState('');
  const fullTitle = 'Building the Future of Cures';
  
  const [tickerItems] = useState([
    '🔁 BindingDB integration active',
    '⬇️ New TargetForge scaffold queued',
    '📊 Protocol v2.0 review in progress',
    '🧪 42 active experiments running',
    '💊 Novel cure candidates: 17'
  ]);
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);
  
  // For value card hover state
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // For profile card hover state
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  
  // For section scroll reveal animations
  const [visibleSections, setVisibleSections] = useState({
    mission: false,
    values: false,
    team: false
  });

  // Typewriter effect
  useEffect(() => {
    if (displayTitle.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayTitle(fullTitle.substring(0, displayTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayTitle]);

  // Ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTickerIndex(prev => (prev + 1) % tickerItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tickerItems.length]);
  
  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Check mission section
      const missionEl = document.getElementById('mission-section');
      if (missionEl && scrollY + windowHeight * 0.8 > missionEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, mission: true }));
      }
      
      // Check values section
      const valuesEl = document.getElementById('values-section');
      if (valuesEl && scrollY + windowHeight * 0.8 > valuesEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, values: true }));
      }
      
      // Check team section
      const teamEl = document.getElementById('team-section');
      if (teamEl && scrollY + windowHeight * 0.8 > teamEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, team: true }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container px-4 py-8 relative">
      {/* Multiple background patterns layered for depth and visual interest */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base layer with grid */}
        <CommandPatternBackground variant="grid" color="blue" intensity="high" animated={true} />
        
        {/* Foreground motion layer with nodes */}
        <CommandPatternBackground variant="nodes" color="violet" intensity="medium" animated={true} />
        
        {/* DNA helix pattern in the background */}
        <CommandPatternBackground variant="dna" color="green" intensity="medium" animated={true} speed="slow" />
      </div>
      
      {/* Gradient overlay to create depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial opacity-90"></div>
      
      {/* Mission Section with HUD header */}
      <div id="mission-section" className={`mb-16 relative z-10 transition-all duration-1000 ${visibleSections.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <CommandHUDHeader 
          title={displayTitle} 
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
                launch --next-frontier
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Core values section with enhanced interactive cards */}
      <div id="values-section" className={`mb-24 relative z-10 transition-all duration-1000 delay-100 ${visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <CommandHUDHeader 
          title="Our Core Values" 
          variant="accent" 
          statusText="VALUES MODULE"
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-bio-blue/20"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: visibleSections.values ? 1 : 0,
                transform: visibleSections.values ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <ValueCard value={value} isHovered={hoveredValue === index} />
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Team Section with improved layout */}
      <div id="team-section" className={`mb-16 relative z-10 transition-all duration-1000 delay-200 ${visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <CommandHUDHeader 
          title="Our Team" 
          variant="secondary" 
          statusText="CONTRIBUTOR MODULE" 
          className="mb-8"
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button 
            variant="outline" 
            className="bg-dark-surface/80 border-quantum-red/30 hover:border-quantum-red/60 text-titanium-white"
          >
            All Contributors
          </Button>
          <Button 
            variant="outline" 
            className="bg-dark-surface/60 border-plasma-violet/30 hover:border-plasma-violet/60 text-titanium-white/70 hover:text-titanium-white"
          >
            Founders
          </Button>
          <Button 
            variant="outline" 
            className="bg-dark-surface/60 border-logo-blue/30 hover:border-logo-blue/60 text-titanium-white/70 hover:text-titanium-white"
          >
            Guardians
          </Button>
          <Button 
            variant="outline" 
            className="bg-dark-surface/60 border-bio-green/30 hover:border-bio-green/60 text-titanium-white/70 hover:text-titanium-white"
          >
            Advisors
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {people.map((person, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-quantum-red/20"
              onMouseEnter={() => setHoveredProfile(index)}
              onMouseLeave={() => setHoveredProfile(null)}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: visibleSections.team ? 1 : 0,
                transform: visibleSections.team ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <ProfileCard person={person} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
