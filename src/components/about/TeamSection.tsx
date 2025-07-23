
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
      {/* Performance-optimized background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neural-network-optimized">
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <CommandHUDHeader 
          title={<span className="text-foreground font-bold">Our Team</span>}
          variant="secondary" 
          statusText="CONTRIBUTOR MODULE" 
          className="mb-2"
        />
        
        <TooltipProvider>
          <div 
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-4 card-quantum-optimized rounded-xl"
          >
            {people.map((person, index) => (
              <div 
                key={`team-member-${person.id}`}
                className="magnetic-attraction-optimized transform transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 20}ms`,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)'
                }}
              >
                <ProfileCard person={person} />
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TeamSection;
