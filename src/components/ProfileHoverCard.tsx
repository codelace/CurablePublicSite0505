
import React from 'react';
import { Person } from '@/data/people';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Globe, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileHoverCardProps {
  person: Person;
  children: React.ReactNode;
}

const ProfileHoverCard = ({ person, children }: ProfileHoverCardProps) => {
  // Extract URLs if they exist in the bio
  const hasLinkedIn = person.bio?.includes('linkedin.com');
  const linkedInUrl = hasLinkedIn ? 
    person.bio.match(/https?:\/\/(?:www\.)?linkedin\.com\/[^\s]+/)?.[0] : null;
    
  // Map group to background style
  const getBackgroundStyle = (group: string) => {
    switch (group) {
      case 'team': return 'bg-gradient-to-br from-gunmetal-900/90 to-logo-blue/20';
      case 'advisor': return 'bg-gradient-to-br from-gunmetal-900/90 to-quantum-red/20';
      case 'founder': return 'bg-gradient-to-br from-gunmetal-900/90 to-plasma-violet/20';
      default: return 'bg-gunmetal-900/80';
    }
  };
  
  // Map group to border style
  const getBorderStyle = (group: string) => {
    switch (group) {
      case 'team': return 'border-logo-blue/40';
      case 'advisor': return 'border-quantum-red/40';
      case 'founder': return 'border-plasma-violet/40';
      default: return 'border-graphite-700/40';
    }
  };
  
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">
          {children}
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent 
        className={cn(
          "w-80 border p-0 shadow-xl", 
          borderClass,
          backgroundClass,
          "backdrop-blur-lg"
        )}
      >
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-14 h-14 border-2 border-graphite-700/30">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className="bg-gunmetal-900/80">
                {person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-bold text-titanium-white text-lg">{person.name}</h4>
              <p className={cn(
                "text-sm font-mono",
                person.group === 'team' ? 'text-logo-blue' :
                person.group === 'advisor' ? 'text-quantum-red' : 'text-plasma-violet'
              )}>
                {person.role}
              </p>
            </div>
          </div>
          
          {person.gptDescription && (
            <div className="py-2 border-t border-graphite-700/20">
              <p className="text-titanium-white/90 text-sm italic">"{person.gptDescription}"</p>
            </div>
          )}
          
          {person.bio && (
            <div className="py-2 border-t border-graphite-700/20">
              <p className="text-titanium-white/80 text-sm line-clamp-4">
                {person.bio}
              </p>
            </div>
          )}
          
          {(linkedInUrl || person.website) && (
            <div className="flex items-center gap-3 pt-2">
              <TooltipProvider delayDuration={300}>
                {linkedInUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-titanium-white/70 hover:text-titanium-white transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">LinkedIn Profile</TooltipContent>
                  </Tooltip>
                )}
                
                {person.website && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={person.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-titanium-white/70 hover:text-titanium-white transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Website</TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileHoverCard;
