
import React from 'react';
import Card from './Card';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileCardProps {
  person: Person;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
  return (
    <Card className="flex flex-col items-center text-center h-full">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-arc-blue/30 mb-4 relative">
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name} 
            className="w-full h-full object-cover"
          />
          <AvatarFallback className="bg-arc-blue/20 text-titanium-white">
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        {/* Reticle animation on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-arc-blue/60 rounded-full animate-pulse-glow"></div>
            <div className="absolute w-[60%] h-[60%] border border-arc-blue/40 rounded-full"></div>
            <div className="absolute w-[40%] h-[40%] border border-arc-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1 text-titanium-white">{person.name}</h3>
      <p className="text-arc-blue text-sm font-mono">{person.role}</p>
    </Card>
  );
};

export default ProfileCard;
