
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
          {/* Founders Section */}
          {groupedPeople.founders.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-plasma-violet to-quantum-red"></div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  <GradientText variant="purple-red" className="font-extrabold">Founders</GradientText>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-quantum-red to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {groupedPeople.founders.map((person, index) => (
                  <div 
                    key={`founder-${person.id}`}
                    className={`magnetic-attraction-optimized transform transition-all duration-700 delay-${index * 100}
                              ${revealCards.includes(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  >
                    <ProfileCard person={person} featured={true} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advisors Section */}
          {groupedPeople.advisors.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-quantum-red to-warm-rose"></div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  <GradientText variant="red" className="font-extrabold">Strategic Advisors</GradientText>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-warm-rose to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {groupedPeople.advisors.map((person, index) => (
                  <div 
                    key={`advisor-${person.id}`}
                    className={`magnetic-attraction-optimized transform transition-all duration-700 delay-${(index + groupedPeople.founders.length) * 100}
                              ${revealCards.includes(index + groupedPeople.founders.length) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  >
                    <ProfileCard person={person} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Team Section */}
          {groupedPeople.team.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-logo-blue to-bio-green"></div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  <GradientText variant="green-blue" className="font-extrabold">Core Guardians</GradientText>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-bio-green to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {groupedPeople.team.map((person, index) => (
                  <div 
                    key={`team-${person.id}`}
                    className={`magnetic-attraction-optimized transform transition-all duration-700 delay-${(index + groupedPeople.founders.length + groupedPeople.advisors.length) * 80}
                              ${revealCards.includes(index + groupedPeople.founders.length + groupedPeople.advisors.length) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  >
                    <ProfileCard person={person} compact={true} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contributors Section */}
          {groupedPeople.contributors.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-warm-amber to-warm-coral"></div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  <GradientText variant="multi" className="font-extrabold">Contributors</GradientText>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-warm-coral to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {groupedPeople.contributors.map((person, index) => (
                  <div 
                    key={`contributor-${person.id}`}
                    className={`magnetic-attraction-optimized transform transition-all duration-700 delay-${(index + groupedPeople.founders.length + groupedPeople.advisors.length + groupedPeople.team.length) * 60}
                              ${revealCards.includes(index + groupedPeople.founders.length + groupedPeople.advisors.length + groupedPeople.team.length) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  >
                    <ProfileCard person={person} compact={true} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TeamSection;
