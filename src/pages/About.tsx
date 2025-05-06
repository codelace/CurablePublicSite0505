
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import BackgroundPatterns from '@/components/about/BackgroundPatterns';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <div className="container px-3 sm:px-4 py-3 sm:py-4 relative min-h-screen max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      {/* Background patterns - simplify for mobile */}
      {!isMobile && <BackgroundPatterns />}
      
      {/* Mission Section with video embed */}
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
  );
};

export default About;
