
import React, { useEffect, useState } from 'react';
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
  const [teamMembers, setTeamMembers] = useState(people);
  
  // Debug the actual team members that are being processed
  console.log("Raw Team members data:", people);
  
  // Force re-render to ensure all team members are displayed
  useEffect(() => {
    // This is just to ensure the component re-renders properly
    console.log("TeamSection mounted or updated with people count:", people.length);
    
    // Force a re-render with a new reference to make sure all team members are displayed
    setTeamMembers([...people]);
  }, []);
  
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
        {teamMembers.map((person, index) => (
          <div 
            key={`team-member-${person.id}-${index}`}
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
