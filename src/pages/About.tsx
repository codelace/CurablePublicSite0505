
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import SectionDivider from '@/components/SectionDivider';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';

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
    <div className="container px-4 py-8">
      {/* Mission Section with dynamic elements */}
      <div className="mb-8 animate-fade-up">
        <div className="inline-block px-3 py-1 mb-2 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40">
          {/* Status panel with animation */}
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            SYSTEM ONLINE
          </span>
        </div>
        
        {/* Animated Title with Typewriter Effect */}
        <h1 className="text-3xl font-bold text-titanium-white mb-4">
          {displayTitle}<span className="text-arc-blue cursor-blink">|</span>
        </h1>
        
        {/* Mission statement as ticker */}
        <div className="bg-gunmetal-900/40 border border-graphite-700/40 rounded-lg p-3 mb-4 overflow-hidden">
          <div className="flex items-center space-x-4 animate-slide">
            <div className="whitespace-nowrap flex items-center font-mono text-plasma-violet">
              <span className="text-logo-blue mr-2">$</span> {tickerItems[currentTickerIndex]}
            </div>
          </div>
        </div>
        
        {/* Static mission paragraph */}
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

      {/* Core values section with enhanced interactive cards */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-titanium-white mb-4">
          <span className="text-logo-blue">&gt;</span> Our Core Values
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
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
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-titanium-white mb-4">
          <span className="text-plasma-violet">&gt;</span> Our Team
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProfile(index)}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <ProfileCard person={person} />
              {hoveredProfile === index && (
                <div className="mt-2 bg-gunmetal-900/80 border border-graphite-700/60 rounded p-2 text-xs font-mono text-quantum-red animate-fade-up">
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-quantum-red mr-2 animate-pulse"></span>
                    Active protocol contributor
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
