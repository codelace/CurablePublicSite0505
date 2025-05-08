
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
      {/* Enhanced fixed background patterns with more dramatic effects */}
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
        
        {/* Node pattern overlay with intensified pulse */}
        <div className="absolute inset-0 opacity-70">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="high" 
            animated={true}
          />
        </div>
        
        {/* Enhanced floating particles with more dramatic animation */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute h-3 w-3 rounded-full bg-bio-blue/70 top-1/4 left-1/3 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute h-4 w-4 rounded-full bg-plasma-violet/60 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-quantum-red/50 bottom-1/3 left-1/2 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-bio-green/70 top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-logo-blue/60 bottom-1/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Added more particles for enhanced effect */}
          <div className="absolute h-2 w-2 rounded-full bg-bio-green/50 top-1/5 right-1/5 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-logo-blue/40 bottom-1/5 left-1/4 animate-ping" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Added circuit-like lines for futuristic effect */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute bottom-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute left-[10%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay for better depth and contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-base/20 to-gunmetal-900/80"></div>
      
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
        <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gunmetal-900 to-transparent h-32 z-20 flex justify-center items-end pb-6 ${animatedSections.includes('team-section') ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green rounded-full opacity-75 group-hover:opacity-100 blur transition duration-400"></div>
            <a 
              href="/join" 
              className="relative px-10 py-3 bg-gunmetal-900 rounded-full border border-logo-blue/50 text-titanium-white font-bold flex items-center gap-2 transition transform hover:scale-105 duration-300"
            >
              <span>Join Our Mission</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
