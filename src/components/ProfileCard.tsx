
import React, { useState, useCallback } from 'react';
import Card from './Card';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileCardProps {
  person: Person;
  isActive?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person, isActive = false }) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Map the group to a display name
  const getGroupDisplay = (group: string) => {
    switch (group) {
      case 'team': return 'Guardian';
      case 'advisor': return 'Advisor';
      case 'founder': return 'Founder';
      case 'contributor': return 'Contributor';
      default: return group;
    }
  };
  
  // Get badge styling based on group
  const getBadgeStyle = (group: string) => {
    switch (group) {
      case 'team': 
        return 'bg-logo-blue/20 text-logo-blue border-logo-blue/30';
      case 'advisor': 
        return 'bg-quantum-red/20 text-quantum-red border-quantum-red/30';
      case 'founder': 
        return 'bg-plasma-violet/20 text-plasma-violet border-plasma-violet/30';
      case 'contributor':
        return 'bg-warm-amber/20 text-warm-amber border-warm-amber/30';
      default: 
        return 'bg-logo-blue/20 text-logo-blue border-logo-blue/30';
    }
  };

  const groupDisplay = getGroupDisplay(person.group);
  const badgeClass = getBadgeStyle(person.group);
  const badgeVariant = person.group === 'team' ? 'default' : 
                      person.group === 'advisor' ? 'secondary' : 
                      person.group === 'contributor' ? 'outline' : 'outline';
  
  // Apply different animation classes based on person group
  const getAnimationClass = () => {
    switch (person.group) {
      case 'team':
        return 'data-pulse';
      case 'advisor':
        return 'quantum-barrier';
      case 'founder':
        return 'bio-scan';
      case 'contributor':
        return 'warm-glow';
      default:
        return '';
    }
  };

  const animationClass = getAnimationClass();

  return (
    <Card 
      className={`flex flex-col text-center h-full p-3 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-quantum-red/20
                ${isLoaded ? 'opacity-100' : 'opacity-0'} ${animationClass}`}
      glowColor={person.group === 'team' ? 'blue' : 
                person.group === 'advisor' ? 'red' : 
                person.group === 'contributor' ? 'amber' : 'purple'}
    >
      {/* Simplified neural network background for profile cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neural-network opacity-5">
          <div className="neural-node"></div>
          <div className="neural-node"></div>
        </div>
      </div>
      
      <div 
        className="w-20 h-20 sm:w-24 sm:w-24 rounded-full overflow-hidden border-2 
                  border-quantum-red/40 mb-2 mx-auto relative transition-all duration-500 shadow-lg shadow-quantum-red/10"
        onLoad={() => setIsLoaded(true)}
      >
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name} 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            onLoad={() => setIsLoaded(true)}
          />
          <AvatarFallback 
            className="bg-brand-charcoal/80 text-foreground font-poppins font-bold holographic-text"
            onLoad={() => setIsLoaded(true)}
          >
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1 flex flex-col relative z-10">
        <h3 className="text-sm sm:text-base font-poppins font-bold mb-2 text-foreground">
          {person.group === 'founder' ? (
            <span className="text-foreground">{person.name}</span>
          ) : person.group === 'advisor' ? (
            <span className="text-foreground">{person.name}</span>
          ) : person.group === 'contributor' ? (
            <span className="text-foreground">{person.name}</span>
          ) : (
            <span className="text-foreground">{person.name}</span>
          )}
        </h3>
        
        <Badge variant={badgeVariant} className={`mb-2 text-xs ${badgeClass} mx-auto px-3 py-1 font-poppins font-semibold rounded-lg shadow-lg`}>
          {groupDisplay}
        </Badge>
        
        <p className="text-quantum-red text-sm font-poppins mb-2">{person.role}</p>
        
        <div className="flex-1 flex flex-col justify-start">
          <div className="text-foreground/80 text-sm leading-relaxed text-left font-poppins">
            {person.bio ? (
              person.bio.split('\n').filter(line => line.trim()).map((line, index) => (
                <p key={index} className="mb-1 last:mb-0">
                  {line.trim()}
                </p>
              ))
            ) : person.gptDescription ? (
              person.gptDescription.split('\n').filter(line => line.trim()).map((line, index) => (
                <p key={index} className="mb-1 last:mb-0">
                  {line.trim()}
                </p>
              ))
            ) : (
              <p>Profile details coming soon...</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
