
import React, { useState } from 'react';
import Card from './Card';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileCardProps {
  person: Person;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Map the group to a display name
  const getGroupDisplay = (group: string) => {
    switch (group) {
      case 'team': return 'Guardian';
      case 'advisor': return 'Advisor';
      case 'founder': return 'Founder';
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
      default: 
        return 'bg-logo-blue/20 text-logo-blue border-logo-blue/30';
    }
  };

  const groupDisplay = getGroupDisplay(person.group);
  const badgeClass = getBadgeStyle(person.group);
  const badgeVariant = person.group === 'team' ? 'default' : person.group === 'advisor' ? 'secondary' : 'outline';
  
  const avatarSize = isMobile ? "w-12 h-12" : "w-16 h-16";
  
  // Apply different animation classes based on person group
  const getAnimationClass = () => {
    switch (person.group) {
      case 'team':
        return 'data-pulse';
      case 'advisor':
        return 'quantum-barrier';
      case 'founder':
        return 'bio-scan';
      default:
        return '';
    }
  };

  const animationClass = getAnimationClass();

  return (
    <Card 
      className={`flex flex-col items-center text-center h-full p-2 sm:p-3 
                transition-all duration-300 transform hover:scale-105
                ${isLoaded ? 'opacity-100' : 'opacity-0'} ${animationClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      glowColor={person.group === 'team' ? 'blue' : person.group === 'advisor' ? 'red' : 'purple'}
    >
      <div 
        className={`${avatarSize} rounded-full overflow-hidden border-2 
                  border-plasma-violet/30 mb-2 relative transition-all duration-300 
                  ${isHovered ? 'border-plasma-violet/60 scale-105' : ''}`}
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
        
        {/* Enhanced hover effect with subtle pulse */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-plasma-violet/5 animate-pulse"></div>
            <div className="w-[80%] h-[80%] border border-plasma-violet/60 rounded-full animate-pulse-glow"></div>
            <div className="absolute w-[60%] h-[60%] border border-plasma-violet/40 rounded-full animate-pulse-dot" style={{animationDelay: '0.5s'}}></div>
          </div>
        )}
      </div>
      
      <h3 className="text-xs sm:text-sm font-bold mb-1 text-titanium-white">
        {person.group === 'founder' ? (
          <span className="cyber-highlight">{person.name}</span>
        ) : person.group === 'advisor' ? (
          <span className="quantum-text">{person.name}</span>
        ) : (
          <span className="bio-highlight">{person.name}</span>
        )}
      </h3>
      
      <Badge variant={badgeVariant} className={`mb-1 text-xs ${badgeClass}`}>
        {groupDisplay}
      </Badge>
      
      <p className="text-plasma-violet text-xs font-mono truncate terminal-text">{person.role}</p>
    </Card>
  );
};

export default ProfileCard;
