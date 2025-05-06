
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import { useIsMobile } from '@/hooks/use-mobile';
import BackgroundPatterns from '@/components/about/BackgroundPatterns';

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
    <div className="w-full relative min-h-screen px-3">
      {/* Use consistent background patterns */}
      <BackgroundPatterns />
      
      <div className="container mx-auto max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
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
