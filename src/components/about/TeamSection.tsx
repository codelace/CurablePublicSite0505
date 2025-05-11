
import React, { useState, useCallback, useRef, useEffect } from 'react';
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
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for better horizontal movement detection
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  
  // Enhanced hover handling with better horizontal movement support
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredProfile(index);
    setActiveProfile(index);
  }, [setHoveredProfile]);
  
  const handleMouseLeave = useCallback(() => {
    // Only clear if we're not in "sticky" mode
    setHoveredProfile(null);
    setActiveProfile(null);
  }, [setHoveredProfile]);
  
  // Track mouse movement within the grid for smoother transitions
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!gridRef.current) return;
    
    const rect = gridRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);
  
  // Handle click to toggle active profile state
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
        <div 
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1"
        >
          {people.map((person, index) => (
            <div 
              key={`team-member-${person.id}`}
              className={`transform transition-all duration-100 ${
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
