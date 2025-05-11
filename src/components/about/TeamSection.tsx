
import React, { useState, useCallback } from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { useIsMobile } from '@/hooks/use-mobile';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useInViewport } from '@/utils/performance';

interface TeamSectionProps {
  isVisible: boolean;
  hoveredProfile: number | null;
  setHoveredProfile: (index: number | null) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible, hoveredProfile, setHoveredProfile }) => {
  const isMobile = useIsMobile();
  const [activeProfile, setActiveProfile] = useState<number | null>(null);
  const { ref, isInViewport } = useInViewport();
  
  // Enhanced hover handling for better detection
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredProfile(index);
    setActiveProfile(index);
  }, [setHoveredProfile]);
  
  const handleMouseLeave = useCallback(() => {
    setHoveredProfile(null);
    setActiveProfile(null);
  }, [setHoveredProfile]);
  
  // Handle click to toggle active profile state (for mobile and accessibility)
  const handleCardClick = useCallback((index: number) => {
    setActiveProfile(prev => prev === index ? null : index);
  }, []);
  
  return (
    <div 
      id="team-section" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-3 relative z-20 opacity-100 translate-y-0 w-full"
    >
      <CommandHUDHeader 
        title="Our Team" 
        variant="secondary" 
        statusText="CONTRIBUTOR MODULE" 
        className="mb-2"
      />
      
      <TooltipProvider>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1">
          {people.map((person, index) => (
            <div 
              key={`team-member-${person.id}`}
              className={`transform transition-all duration-300 ${
                hoveredProfile === index ? 'z-30 scale-105' : 'z-10'
              }`}
              onMouseEnter={() => isInViewport && handleMouseEnter(index)}
              onMouseLeave={() => isInViewport && handleMouseLeave()}
              onClick={() => handleCardClick(index)}
            >
              <ProfileCard
                person={person}
                isActive={activeProfile === index}
              />
            </div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default TeamSection;
