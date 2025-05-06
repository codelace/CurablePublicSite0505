
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
  
  return (
    <div 
      id="team-section" 
      className={`mb-8 relative z-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
            key={person.id} // Use the person's ID as the key instead of index for better React reconciliation
            className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-quantum-red/20"
            onMouseEnter={() => setHoveredProfile(index)}
            onMouseLeave={() => setHoveredProfile(null)}
            style={{ 
              transitionDelay: `${index * 50}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <ProfileCard person={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
