
import React, { useRef, useState, useEffect } from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useInViewport } from '@/utils/performance';
import GradientText from '@/components/ui/GradientText';

interface TeamSectionProps {
  isVisible: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible }) => {
  const { ref, isInViewport } = useInViewport();
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealCards, setRevealCards] = useState<number[]>([]);
  
  // Staggered reveal animation
  useEffect(() => {
    if (isVisible && people.length > 0) {
      const timer = setTimeout(() => {
        people.forEach((_, index) => {
          setTimeout(() => {
            setRevealCards(prev => [...prev, index]);
          }, index * 80); // Stagger each card by 80ms
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Group people by category for organized display
  const groupedPeople = {
    founders: people.filter(person => person.group === 'founder'),
    advisors: people.filter(person => person.group === 'advisor'), 
    team: people.filter(person => person.group === 'team'),
    contributors: people.filter(person => person.group === 'contributor')
  };
  
  return (
    <div 
      id="team-section" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-8 relative z-20 w-full"
    >
      {/* Revolutionary Quantum Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Particle System */}
        <div className="quantum-particles-optimized"></div>
        
        {/* Neural Network Grid */}
        <div className="neural-network-optimized opacity-10">
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
        </div>
        
        {/* Data Stream Background */}
        <div className="data-stream-optimized opacity-5"></div>
        
        {/* Holographic Mesh */}
        <div className="holographic-mesh-optimized opacity-8"></div>
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Header with Quantum Effects */}
        <div className="mb-8 text-center">
          <CommandHUDHeader 
            title={
              <span className="text-foreground font-bold">
                Meet Our <GradientText variant="multi" className="inline-block font-extrabold">Quantum</GradientText> Team
              </span>
            }
            variant="secondary" 
            statusText="CONTRIBUTOR MODULE ACTIVE" 
            className="mb-4"
          />
          
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto font-poppins leading-relaxed">
            A diverse collective of scientists, engineers, and visionaries working to 
            <span className="text-quantum-red font-semibold holographic-text"> revolutionize biotech research</span> through 
            decentralized innovation and AI-powered discovery.
          </p>
        </div>
        
        <TooltipProvider>
          {/* Unified Team Grid - All members together, sorted by priority */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[...groupedPeople.founders, ...groupedPeople.team, ...groupedPeople.advisors, ...groupedPeople.contributors]
              .map((person, index) => (
                <div 
                  key={`team-member-${person.id}`}
                  className={`magnetic-attraction-optimized transform transition-all duration-700 delay-${index * 60}
                            ${revealCards.includes(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                >
                  <ProfileCard 
                    person={person} 
                    featured={person.group === 'founder'} 
                    compact={person.group === 'contributor' || person.group === 'team'} 
                  />
                </div>
              ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TeamSection;
