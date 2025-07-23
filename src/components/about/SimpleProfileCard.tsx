import React, { memo, useState } from 'react';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface SimpleProfileCardProps {
  person: Person;
}

const SimpleProfileCard: React.FC<SimpleProfileCardProps> = memo(({ person }) => {
  console.log('SimpleProfileCard rendering for:', person?.name);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simple styling maps
  const groupDisplayMap = {
    team: 'Guardian',
    advisor: 'Advisor', 
    founder: 'Founder',
    contributor: 'Contributor'
  } as const;

  const badgeColorMap = {
    team: 'text-logo-blue border-logo-blue/40',
    advisor: 'text-plasma-violet border-plasma-violet/40',
    founder: 'text-blue-400 border-blue-400/40',
    contributor: 'text-warm-amber border-warm-amber/40'
  } as const;

  const borderColorMap = {
    team: 'border-logo-blue/50',
    advisor: 'border-plasma-violet/50',
    founder: 'border-blue-400/50',
    contributor: 'border-warm-amber/50'
  } as const;

  const groupDisplay = groupDisplayMap[person.group as keyof typeof groupDisplayMap] || person.group;
  const badgeClass = badgeColorMap[person.group as keyof typeof badgeColorMap] || badgeColorMap.team;
  const borderClass = borderColorMap[person.group as keyof typeof borderColorMap] || borderColorMap.team;

  return (
    <div className="bg-brand-charcoal/40 backdrop-blur-sm border border-graphite-700/60 rounded-xl p-4 h-full flex flex-col text-center">
      {/* Avatar - Simple, no complex effects */}
      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 ${borderClass} mb-3 mx-auto`}>
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <AvatarFallback className="bg-brand-charcoal/90 text-foreground font-poppins font-bold text-lg">
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Name */}
        <h3 className="text-sm sm:text-base font-poppins font-bold mb-2 text-foreground">
          {person.name}
        </h3>
        
        {/* Badge */}
        <Badge variant="outline" className={`mb-2 mx-auto px-3 py-1 font-poppins font-semibold rounded-lg border ${badgeClass} text-xs bg-transparent`}>
          {groupDisplay}
        </Badge>
        
        {/* Role */}
        <p className="text-quantum-red text-sm font-poppins mb-2 font-medium">
          {person.role}
        </p>
        
        {/* Bio - Simple, no complex parsing */}
        <div className="flex-1 flex flex-col justify-start">
          <div className="text-foreground/80 text-xs leading-relaxed text-left font-poppins">
            {person.bio ? (
              <p>{person.bio.split('\n')[0]?.trim() || 'Profile details coming soon...'}</p>
            ) : person.gptDescription ? (
              <p>{person.gptDescription.split('\n')[0]?.trim() || 'Profile details coming soon...'}</p>
            ) : (
              <p className="italic opacity-60">Profile details coming soon...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

SimpleProfileCard.displayName = 'SimpleProfileCard';

export default SimpleProfileCard;