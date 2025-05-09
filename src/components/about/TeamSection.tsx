
import React from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { useIsMobile } from '@/hooks/use-mobile';

interface TeamSectionProps {
  isVisible: boolean;
  hoveredProfile: number | null;
  setHoveredProfile: (index: number | null) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible, hoveredProfile, setHoveredProfile }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      id="team-section" 
      className="mb-4 relative z-10 opacity-100 translate-y-0 w-full"
    >
      <CommandHUDHeader 
        title="Our Team" 
        variant="secondary" 
        statusText="CONTRIBUTOR MODULE" 
        className="mb-3"
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {people.map((person, index) => (
          <div 
            key={`team-member-${person.id}`}
            className="transform transition-all duration-300"
            onMouseEnter={() => setHoveredProfile(index)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <ProfileCard person={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
