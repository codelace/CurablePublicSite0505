
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
  
  // For section animation
  const [animatedSections, setAnimatedSections] = useState<string[]>([]);

  // Force all sections to be visible initially to improve perceived performance
  useEffect(() => {
    const sections = ['mission-section', 'values-section', 'team-section'];
    
    // Add staggered animation with a small delay between sections
    const animateSection = (index: number) => {
      if (index >= sections.length) return;
      
      setTimeout(() => {
        setAnimatedSections(prev => [...prev, sections[index]]);
        animateSection(index + 1);
      }, 200); // 200ms delay between sections
    };
    
    animateSection(0);
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      {/* Fixed background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern with enhanced animations */}
        <div className="absolute inset-0">
          <CommandPatternBackground 
            variant="grid" 
            color="violet" 
            intensity="medium" 
            animated={true}
          />
        </div>
        
        {/* Node pattern overlay with subtle pulse */}
        <div className="absolute inset-0 opacity-60">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="medium" 
            animated={false}
          />
        </div>
        
        {/* New: Subtle floating particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-2 w-2 rounded-full bg-bio-blue/50 top-1/4 left-1/3 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-plasma-violet/40 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-quantum-red/30 bottom-1/3 left-1/2 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-1 w-1 rounded-full bg-bio-green/50 top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-logo-blue/40 bottom-1/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay for better text contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-80"></div>
      
      <div className="container mx-auto px-4 max-w-full z-10 relative">
        {/* Mission Section with enhanced reveal animation */}
        <div className={`transition-all duration-700 ${animatedSections.includes('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AboutHero />
        </div>

        {/* Core values section with staggered animation */}
        <div className={`transition-all duration-700 delay-100 ${animatedSections.includes('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ValuesSection 
            isVisible={animatedSections.includes('values-section')} 
            hoveredValue={hoveredValue} 
            setHoveredValue={setHoveredValue} 
          />
        </div>

        <SectionDivider />

        {/* Team Section with enhanced animation */}
        <div className={`transition-all duration-700 delay-200 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TeamSection 
            isVisible={animatedSections.includes('team-section')} 
            hoveredProfile={hoveredProfile} 
            setHoveredProfile={setHoveredProfile} 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
