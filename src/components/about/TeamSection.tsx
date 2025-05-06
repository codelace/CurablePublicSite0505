
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
  
  // Force display of all team members
  console.log("Team members:", people.map(p => p.name)); // Debug log to check all members
  
  return (
    <div 
      id="team-section" 
      className="mb-8 relative z-10 opacity-100 translate-y-0"
    >
      <CommandHUDHeader 
        title="Our Team" 
        variant="secondary" 
        statusText="CONTRIBUTOR MODULE" 
        className="mb-4"
      />
      
      <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'}`}>
        {people.map((person, index) => (
          <div 
            key={person.id}
            className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-quantum-red/20"
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
