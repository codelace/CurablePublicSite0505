
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import useScrollReveal from '@/hooks/useScrollReveal';
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
  
  // For section scroll reveal animations
  const visibleSections = useScrollReveal();
  const isMobile = useIsMobile();

  // Force initial visibility on mobile
  useEffect(() => {
    if (isMobile) {
      const sections = ['mission-section', 'values-section', 'team-section'];
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          section.classList.remove('opacity-0', 'translate-y-10');
          section.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }
  }, [isMobile]);

  return (
    <div className="container px-4 py-4 relative min-h-screen">
      {/* Background patterns */}
      <BackgroundPatterns />
      
      {/* Mission Section with HUD header */}
      <AboutHero />

      {/* Core values section with reduced vertical spacing */}
      <ValuesSection 
        isVisible={visibleSections.values || isMobile} 
        hoveredValue={hoveredValue} 
        setHoveredValue={setHoveredValue} 
      />

      <SectionDivider />

      {/* Team Section with improved layout and reduced spacing */}
      <TeamSection 
        isVisible={visibleSections.team || isMobile} 
        hoveredProfile={hoveredProfile} 
        setHoveredProfile={setHoveredProfile} 
      />
    </div>
  );
};

export default About;
