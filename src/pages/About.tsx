
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import { useIsMobile } from '@/hooks/use-mobile';
import BackgroundPatterns from '@/components/about/BackgroundPatterns';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const About = () => {
  // For value card hover state
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // For profile card hover state
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  
  // For device detection
  const isMobile = useIsMobile();

  // Force all sections to be visible initially to improve perceived performance
  useEffect(() => {
    const sections = ['mission-section', 'values-section', 'team-section'];
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.remove('opacity-0', 'translate-y-10');
        section.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      {/* Fixed background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern */}
        <div className="absolute inset-0">
          <CommandPatternBackground 
            variant="grid" 
            color="violet" 
            intensity="medium" 
            animated={true}
          />
        </div>
        
        {/* Node pattern overlay */}
        <div className="absolute inset-0 opacity-60">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="medium" 
            animated={false}
          />
        </div>
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-80"></div>
      
      <div className="container mx-auto px-4 max-w-full z-10 relative">
        {/* Mission Section */}
        <AboutHero />

        {/* Core values section */}
        <ValuesSection 
          isVisible={true} 
          hoveredValue={hoveredValue} 
          setHoveredValue={setHoveredValue} 
        />

        <SectionDivider />

        {/* Team Section */}
        <TeamSection 
          isVisible={true} 
          hoveredProfile={hoveredProfile} 
          setHoveredProfile={setHoveredProfile} 
        />
      </div>
    </div>
  );
};

export default About;
