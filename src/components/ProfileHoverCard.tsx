
import React, { useState } from 'react';
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
import { useIsMobile } from '@/hooks/use-mobile';
import useHoverState from '@/hooks/useHoverState';

interface ProfileHoverCardProps {
  person: Person;
  children: React.ReactNode;
  isActive?: boolean;
}

const ProfileHoverCard = ({ person, children, isActive = false }: ProfileHoverCardProps) => {
  const isMobile = useIsMobile();
  const [isSticky, setIsSticky] = useState(false);
  
  const { isActive: isHovering, hoverProps } = useHoverState({ 
    delay: 100 // Add a small delay to prevent accidental triggers
  });
  
  // Show card when either external isActive prop is true or component's hover state is active
  const showCard = isActive || isHovering || isSticky;
  
  // Extract URLs if they exist in the bio
  const hasLinkedIn = person.bio?.includes('linkedin.com');
  const linkedInUrl = hasLinkedIn ? 
    person.bio.match(/https?:\/\/(?:www\.)?linkedin\.com\/[^\s]+/)?.[0] : null;
    
  // Map group to background style
  const getBackgroundStyle = (group: string) => {
    switch (group) {
      case 'team': return 'bg-gradient-to-br from-gunmetal-900/90 to-logo-blue/30';
      case 'advisor': return 'bg-gradient-to-br from-gunmetal-900/90 to-quantum-red/30';
      case 'founder': return 'bg-gradient-to-br from-gunmetal-900/90 to-plasma-violet/30';
      default: return 'bg-gunmetal-900/90';
    }
  };
  
  // Map group to border style
  const getBorderStyle = (group: string) => {
    switch (group) {
      case 'team': return 'border-logo-blue/60';
      case 'advisor': return 'border-quantum-red/60';
      case 'founder': return 'border-plasma-violet/60';
      default: return 'border-graphite-700/60';
    }
  };
  
  // Map group to glow style (with static glow, no animation)
  const getGlowStyle = (group: string) => {
    switch (group) {
      case 'team': return 'shadow-[0_0_15px_rgba(30,174,219,0.4)]';
      case 'advisor': return 'shadow-[0_0_15px_rgba(255,51,102,0.4)]';
      case 'founder': return 'shadow-[0_0_15px_rgba(161,98,255,0.4)]';
      default: return '';
    }
  };
  
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  const glowClass = getGlowStyle(person.group);
  
  // Format the gptDescription as haiku with line breaks after periods only
  const formatHaikuDescription = (description?: string) => {
    if (!description) return null;
    
    // Split by periods only
    const sentences = description.split(/(?<=\.)\s+/);
    
    // Join with line breaks
    return sentences.map((sentence, i) => (
      <React.Fragment key={i}>
        {sentence}
        {i < sentences.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Lock the hover card in place when clicked
  const handleCardClick = () => {
    setIsSticky(!isSticky);
  };
  
  // Set up hover handlers for the HoverCardContent
  const handleMouseEnter = () => {
    hoverProps.onMouseEnter();
  };
  
  const handleMouseLeave = () => {
    hoverProps.onMouseLeave();
  };
  
  return (
    <HoverCard open={showCard}>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer" {...hoverProps}>
          {children}
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent 
        className={cn(
          "w-80 border-2 p-0 shadow-xl z-50 cursor-auto", 
          borderClass,
          backgroundClass,
          glowClass,
          isSticky ? "ring-2 ring-titanium-white/30" : "",
          "backdrop-blur-lg profile-card-enter"
        )}
        side="right"
        align="start"
        sideOffset={5}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-14 h-14 border-2 border-graphite-700/60">
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
            <div className="py-2 border-t border-graphite-700/30">
              <p className="text-titanium-white/90 text-sm italic">
                {formatHaikuDescription(person.gptDescription)}
              </p>
            </div>
          )}
          
          {person.bio && !person.gptDescription && (
            <div className="py-2 border-t border-graphite-700/30">
              <p className="text-titanium-white/80 text-sm max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-1">
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
                        className="text-titanium-white hover:text-titanium-white transition-colors"
                      >
                        <Linkedin size={16} className="hover:text-warm-rose" />
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
                        className="text-titanium-white hover:text-titanium-white transition-colors"
                      >
                        <Globe size={16} className="hover:text-warm-rose" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Website</TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          )}
        </div>
        
        {isSticky && (
          <div className="absolute -top-6 right-0 bg-gunmetal-800/90 text-xs px-2 py-1 rounded-t-md text-titanium-white/70">
            Click again to dismiss
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileHoverCard;
