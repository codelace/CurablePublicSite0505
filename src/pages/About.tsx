
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutBackgroundEffects from '@/components/about/AboutBackgroundEffects';
import AboutCallToAction from '@/components/about/AboutCallToAction';

const About = () => {
  // For value card hover state
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // For profile card hover state
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  
  // For device detection
  const isMobile = useIsMobile();
  
  // For advanced section animation with sequential reveal
  const [animatedSections, setAnimatedSections] = useState<string[]>([]);

  // Force all sections to be visible with dramatic staggered timing
  useEffect(() => {
    const sections = ['mission-section', 'values-section', 'team-section'];
    
    // Enhanced staggered animation with longer delays for more drama
    const animateSection = (index: number) => {
      if (index >= sections.length) return;
      
      setTimeout(() => {
        setAnimatedSections(prev => [...prev, sections[index]]);
        animateSection(index + 1);
      }, 400); // Increased delay between sections for dramatic effect
    };
    
    // Slight initial delay for the first section to allow page transition
    setTimeout(() => {
      animateSection(0);
    }, 200);
  }, []);

  return (
    <div className="w-full relative min-h-screen pb-20">
      {/* Enhanced background effects */}
      <AboutBackgroundEffects />
      
      <div className="container mx-auto px-4 max-w-7xl z-10 relative pt-16">
        {/* Mission Section with enhanced reveal animation */}
        <div className={`transition-all duration-1000 ${animatedSections.includes('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <AboutHero />
        </div>

        <SectionDivider />

        {/* Core values section with enhanced staggered animation */}
        <div className={`transition-all duration-1000 delay-300 ${animatedSections.includes('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ValuesSection 
            isVisible={animatedSections.includes('values-section')} 
            hoveredValue={hoveredValue} 
            setHoveredValue={setHoveredValue} 
          />
        </div>

        <SectionDivider />

        {/* Team Section with enhanced animation */}
        <div className={`transition-all duration-1000 delay-500 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} mb-20`}>
          <TeamSection 
            isVisible={animatedSections.includes('team-section')} 
            hoveredProfile={hoveredProfile} 
            setHoveredProfile={setHoveredProfile} 
          />
        </div>
        
        {/* Enhanced footer element with dramatic call to action */}
        <AboutCallToAction isVisible={animatedSections.includes('team-section')} />
      </div>
    </div>
  );
};

export default About;
