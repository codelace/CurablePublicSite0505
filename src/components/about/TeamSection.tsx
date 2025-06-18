
import React, { useRef } from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useInViewport } from '@/utils/performance';

interface TeamSectionProps {
  isVisible: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible }) => {
  const { ref, isInViewport } = useInViewport();
  const gridRef = useRef<HTMLDivElement>(null);
  
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
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {people.map((person) => (
            <div 
              key={`team-member-${person.id}`}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ProfileCard person={person} />
            </div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default TeamSection;
