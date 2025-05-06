
import React, { useEffect, useState } from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamSectionProps {
  isVisible: boolean;
  hoveredProfile: number | null;
  setHoveredProfile: (index: number | null) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible, hoveredProfile, setHoveredProfile }) => {
  const isMobile = useIsMobile();
  const [teamMembers, setTeamMembers] = useState(people);
  
  // For mobile carousel
  const [activePage, setActivePage] = useState(0);
  const pageSize = isMobile ? 4 : people.length; // Show 4 team members per page on mobile
  const totalPages = Math.ceil(people.length / pageSize);
  
  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Calculate visible team members based on current page
  const visibleTeamMembers = isMobile 
    ? people.slice(activePage * pageSize, (activePage + 1) * pageSize)
    : people;
  
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
      
      {isMobile && (
        <div className="flex justify-between items-center mb-3">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full bg-graphite-700/30 border border-graphite-700/40 text-titanium-white"
            aria-label="Previous team page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-sm text-titanium-white/70 font-mono">
            {activePage + 1} / {totalPages}
          </div>
          <button 
            onClick={nextPage}
            className="p-2 rounded-full bg-graphite-700/30 border border-graphite-700/40 text-titanium-white"
            aria-label="Next team page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <div className={`grid grid-cols-2 ${isMobile ? 'gap-3' : 'sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'}`}>
        {visibleTeamMembers.map((person, index) => (
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
      
      {isMobile && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={`page-dot-${i}`}
              onClick={() => setActivePage(i)}
              className={`w-2 h-2 mx-1 rounded-full ${i === activePage ? 'bg-bio-green' : 'bg-graphite-700/40'}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamSection;
