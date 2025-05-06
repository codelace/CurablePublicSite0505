
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
      const missionSection = document.getElementById('mission-section');
      if (missionSection) {
        missionSection.classList.remove('opacity-0', 'translate-y-10');
        missionSection.classList.add('opacity-100', 'translate-y-0');
      }
    }
  }, [isMobile]);

  return (
    <div className="container px-4 py-8 relative">
      {/* Background patterns */}
      <BackgroundPatterns />
      
      {/* Mission Section with HUD header */}
      <AboutHero />

      {/* Core values section with enhanced interactive cards */}
      <ValuesSection 
        isVisible={visibleSections.values || isMobile} 
        hoveredValue={hoveredValue} 
        setHoveredValue={setHoveredValue} 
      />

      <SectionDivider />

      {/* Team Section with improved layout */}
      <TeamSection 
        isVisible={visibleSections.team || isMobile} 
        hoveredProfile={hoveredProfile} 
        setHoveredProfile={setHoveredProfile} 
      />
    </div>
  );
};

export default About;
