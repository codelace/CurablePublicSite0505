
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
  
  // For profile card hover state - keeping the state but removing the hover message
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

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

  return (
    <div className="container px-4 py-8 relative">
      {/* Additional background patterns specific to this page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CommandPatternBackground variant="nodes" intensity="medium" />
      </div>
      
      {/* Mission Section with HUD header */}
      <div className="mb-12 relative z-10 animate-fade-up">
        <CommandHUDHeader 
          title={displayTitle} 
          subtitle="Decentralized research & development protocol" 
          statusText="CURABLE CORE ACTIVE"
        />
        
        {/* Status ticker */}
        <StatusTicker items={tickerItems} className="mb-6" />
        
        {/* Static mission paragraph */}
        <div className="glass-panel p-6 mb-6">
          <p className="text-titanium-white/90 max-w-3xl mb-4">{mission}</p>
          
          <div className="mt-4">
            <a 
              href="https://binding-db-integrator-1-codelace77.replit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)]"
              >
                launch --next-frontier
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Core values section with enhanced interactive cards */}
      <div className="mb-16 relative z-10">
        <CommandHUDHeader 
          title="Our Core Values" 
          variant="accent" 
          statusText="VALUES MODULE"
          className="mb-8"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-bio-blue/20"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <ValueCard value={value} isHovered={hoveredValue === index} />
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Team Section with improved layout */}
      <div className="mb-16 relative z-10">
        <CommandHUDHeader 
          title="Our Team" 
          variant="secondary" 
          statusText="CONTRIBUTOR MODULE" 
          className="mb-8"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-quantum-red/20"
              onMouseEnter={() => setHoveredProfile(index)}
              onMouseLeave={() => setHoveredProfile(null)}
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
