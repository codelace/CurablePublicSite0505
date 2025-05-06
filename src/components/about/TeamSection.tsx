
import React from 'react';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { Button } from '@/components/ui/button';

interface TeamSectionProps {
  isVisible: boolean;
  hoveredProfile: number | null;
  setHoveredProfile: (index: number | null) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible, hoveredProfile, setHoveredProfile }) => {
  return (
    <div 
      id="team-section" 
      className={`mb-16 relative z-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <CommandHUDHeader 
        title="Our Team" 
        variant="secondary" 
        statusText="CONTRIBUTOR MODULE" 
        className="mb-8"
      />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button 
          variant="outline" 
          className="bg-dark-surface/80 border-quantum-red/30 hover:border-quantum-red/60 text-titanium-white"
        >
          All Contributors
        </Button>
        <Button 
          variant="outline" 
          className="bg-dark-surface/60 border-plasma-violet/30 hover:border-plasma-violet/60 text-titanium-white/70 hover:text-titanium-white"
        >
          Founders
        </Button>
        <Button 
          variant="outline" 
          className="bg-dark-surface/60 border-logo-blue/30 hover:border-logo-blue/60 text-titanium-white/70 hover:text-titanium-white"
        >
          Guardians
        </Button>
        <Button 
          variant="outline" 
          className="bg-dark-surface/60 border-bio-green/30 hover:border-bio-green/60 text-titanium-white/70 hover:text-titanium-white"
        >
          Advisors
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((person, index) => (
          <div 
            key={index}
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
