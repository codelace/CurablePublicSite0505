import React, { memo } from 'react';
import { Person } from '@/data/people';

interface MinimalProfileCardProps {
  person: Person;
}

const MinimalProfileCard: React.FC<MinimalProfileCardProps> = memo(({ person }) => {
  console.log('MinimalProfileCard rendering for:', person?.name);
  
  return (
    <div className="bg-brand-charcoal/50 border border-quantum-cyan/30 rounded-xl p-4 text-center">
      <div className="w-16 h-16 rounded-full bg-quantum-red/20 mx-auto mb-3 flex items-center justify-center">
        <span className="text-white font-bold">
          {person.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <h3 className="text-white font-semibold mb-1">{person.name}</h3>
      <p className="text-quantum-red text-sm mb-2">{person.role}</p>
      <span className="text-xs text-foreground/60">{person.group}</span>
    </div>
  );
});

MinimalProfileCard.displayName = 'MinimalProfileCard';

export default MinimalProfileCard;