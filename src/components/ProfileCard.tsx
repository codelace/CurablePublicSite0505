
import React from 'react';
import Card from './Card';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  person: Person;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
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

  return (
    <Card className="flex flex-col items-center text-center h-full">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-plasma-violet/30 mb-4 relative">
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name} 
            className="w-full h-full object-cover"
          />
          <AvatarFallback className="bg-plasma-violet/20 text-titanium-white">
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        {/* Reticle animation on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-plasma-violet/60 rounded-full animate-pulse-glow"></div>
            <div className="absolute w-[60%] h-[60%] border border-plasma-violet/40 rounded-full"></div>
            <div className="absolute w-[40%] h-[40%] border border-plasma-violet/20 rounded-full"></div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1 text-titanium-white">{person.name}</h3>
      <Badge variant={badgeVariant} className={`mb-2 ${badgeClass}`}>
        {groupDisplay}
      </Badge>
      <p className="text-plasma-violet text-sm font-mono">{person.role}</p>
    </Card>
  );
};

export default ProfileCard;
