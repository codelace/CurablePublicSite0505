
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

  // Force all sections to be visible with more compact timing
  useEffect(() => {
    const sections = ['mission-section', 'values-section', 'team-section'];
    
    // Enhanced staggered animation with shorter delays for less scrolling
    const animateSection = (index: number) => {
      if (index >= sections.length) return;
      
      setTimeout(() => {
        setAnimatedSections(prev => [...prev, sections[index]]);
        animateSection(index + 1);
      }, 150); // Even shorter delay between sections for faster reveal
    };
    
    // Slight initial delay for the first section to allow page transition
    setTimeout(() => {
      animateSection(0);
    }, 100); // Shorter initial delay
  }, []);

  return (
    <div className="w-full relative min-h-screen pb-8 pt-[60px] sm:pt-[68px]"> {/* Added padding top to account for navbar height */}
      {/* Enhanced background effects */}
      <AboutBackgroundEffects />
      
      <div className="container mx-auto px-4 max-w-7xl z-10 relative pt-4"> {/* Further reduced top padding */}
        {/* Mission Section with enhanced reveal animation */}
        <div className={`transition-all duration-700 ${animatedSections.includes('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <AboutHero />
        </div>

        {/* Smaller divider */}
        <div className="my-2">
          <SectionDivider />
        </div>

        {/* Core values section with enhanced staggered animation */}
        <div className={`transition-all duration-700 delay-100 ${animatedSections.includes('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ValuesSection 
            isVisible={animatedSections.includes('values-section')} 
            hoveredValue={hoveredValue} 
            setHoveredValue={setHoveredValue} 
          />
        </div>

        {/* Smaller divider */}
        <div className="my-2">
          <SectionDivider />
        </div>

        {/* Team Section with enhanced animation */}
        <div className={`transition-all duration-700 delay-200 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} mb-8`}>
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
