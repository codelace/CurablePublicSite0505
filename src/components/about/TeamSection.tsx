
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
      {/* Fixed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neural-network opacity-10">
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <CommandHUDHeader 
          title={<span className="text-foreground">Our Team</span>}
          variant="secondary" 
          statusText="CONTRIBUTOR MODULE" 
          className="mb-2"
        />
        
        <TooltipProvider>
          <div 
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-4 bg-brand-charcoal/20 rounded-xl border border-quantum-red/20"
          >
            {people.map((person, index) => (
              <div 
                key={`team-member-${person.id}`}
                className="transform transition-all duration-500 hover:scale-110"
                style={{ 
                  transitionDelay: `${index * 25}ms`,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
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
