
import React, { useState } from 'react';
import SectionDivider from '@/components/SectionDivider';
import useScrollReveal from '@/hooks/useScrollReveal';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import BackgroundPatterns from '@/components/about/BackgroundPatterns';

const About = () => {
  // For value card hover state
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // For profile card hover state
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  
  // For section scroll reveal animations
  const visibleSections = useScrollReveal();

  return (
    <div className="container px-4 py-8 relative">
      {/* Background patterns */}
      <BackgroundPatterns />
      
      {/* Mission Section with HUD header */}
      <AboutHero />

      {/* Core values section with enhanced interactive cards */}
      <ValuesSection 
        isVisible={visibleSections.values} 
        hoveredValue={hoveredValue} 
        setHoveredValue={setHoveredValue} 
      />

      <SectionDivider />

      {/* Team Section with improved layout */}
      <TeamSection 
        isVisible={visibleSections.team} 
        hoveredProfile={hoveredProfile} 
        setHoveredProfile={setHoveredProfile} 
      />
    </div>
  );
};

export default About;
