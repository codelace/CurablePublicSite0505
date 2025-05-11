
import React, { useState } from 'react';
import { Person } from '@/data/people';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import useHoverState from '@/hooks/useHoverState';
import ProfileCardContent from './profile/ProfileCardContent';
import { getBorderStyle, getBackgroundStyle, getGlowStyle } from '@/utils/profileStyles';

interface ProfileHoverCardProps {
  person: Person;
  children: React.ReactNode;
  isActive?: boolean;
}

const ProfileHoverCard = ({ person, children, isActive = false }: ProfileHoverCardProps) => {
  const isMobile = useIsMobile();
  const [isSticky, setIsSticky] = useState(false);
  
  // Configure for instant transition without delays
  const { isActive: isHovering, hoverProps } = useHoverState({ 
    delay: 0,
    exitDelay: 0,
    isQuickSwitch: true
  });
  
  // Show card when either external isActive prop is true or component's hover state is active
  const showCard = isActive || isHovering || isSticky;
  
  // Get style classes
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  const glowClass = getGlowStyle(person.group);
  
  // Lock the hover card in place when clicked
  const handleCardClick = () => {
    setIsSticky(!isSticky);
  };
  
  // Immediate response handlers
  const handleMouseEnter = () => {
    hoverProps.onMouseEnter();
  };
  
  const handleMouseLeave = () => {
    if (!isSticky) {
      hoverProps.onMouseLeave();
    }
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
          "backdrop-blur-lg profile-card-enter pointer-events-auto"
        )}
        side="right"
        align="start"
        sideOffset={5}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProfileCardContent 
          person={person} 
          isSticky={isSticky} 
          onCloseSticky={() => setIsSticky(false)} 
        />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileHoverCard;
