
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
      className={`flex flex-col text-center h-full p-2 transition-all duration-300 
                ${isLoaded ? 'opacity-100' : 'opacity-0'} ${animationClass}`}
      glowColor={person.group === 'team' ? 'blue' : 
                person.group === 'advisor' ? 'red' : 
                person.group === 'contributor' ? 'amber' : 'purple'}
    >
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 
                  border-plasma-violet/30 mb-1.5 mx-auto relative transition-all duration-300"
        onLoad={() => setIsLoaded(true)}
      >
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name} 
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
          />
          <AvatarFallback 
            className="bg-plasma-violet/20 text-titanium-white"
            onLoad={() => setIsLoaded(true)}
          >
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-[10px] sm:text-xs font-poppins font-semibold mb-1 text-titanium-white">
          {person.group === 'founder' ? (
            <span className="cyber-highlight">{person.name}</span>
          ) : person.group === 'advisor' ? (
            <span className="quantum-text">{person.name}</span>
          ) : person.group === 'contributor' ? (
            <span className="warm-highlight">{person.name}</span>
          ) : (
            <span className="bio-highlight">{person.name}</span>
          )}
        </h3>
        
        <Badge variant={badgeVariant} className={`mb-0.5 text-[8px] ${badgeClass} mx-auto px-1.5 py-0.5`}>
          {groupDisplay}
        </Badge>
        
        <p className="text-plasma-violet text-[8px] font-mono mb-1.5 terminal-text">{person.role}</p>
        
        <div className="flex-1 flex flex-col justify-start">
          <div className="text-titanium-white/80 text-[9px] leading-tight text-left">
            {person.bio ? (
              person.bio.split('\n').filter(line => line.trim()).map((line, index) => (
                <p key={index} className="mb-0 last:mb-0">
                  {line.trim()}
                </p>
              ))
            ) : person.gptDescription ? (
              person.gptDescription.split('\n').filter(line => line.trim()).map((line, index) => (
                <p key={index} className="mb-0 last:mb-0">
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
