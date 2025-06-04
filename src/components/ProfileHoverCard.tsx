
import React, { useState, useRef } from 'react';
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
  const hoverCardRef = useRef<HTMLDivElement>(null);
  
  // Use improved hover state with better timing
  const { isActive: isHovering, hoverProps } = useHoverState({
    delay: 100,
    exitDelay: 200,
    isQuickSwitch: true
  });
  
  // Show card when either external isActive prop is true or component's hover state is active
  const showCard = isActive || isHovering || isSticky;
  
  // Get style classes
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  const glowClass = getGlowStyle(person.group);
  
  // Enhanced mouse enter for hover card content
  const handleCardMouseEnter = () => {
    hoverProps.onMouseEnter();
  };
  
  // Enhanced mouse leave for hover card content
  const handleCardMouseLeave = () => {
    if (!isSticky) {
      hoverProps.onMouseLeave();
    }
  };
  
  // Lock the hover card in place when clicked (toggle)
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSticky(!isSticky);
  };
  
  return (
    <HoverCard open={showCard} openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div 
          className="cursor-pointer" 
          {...hoverProps}
        >
          {children}
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent 
        ref={hoverCardRef}
        className={cn(
          "w-80 border-2 p-0 shadow-xl z-[100]", 
          borderClass,
          backgroundClass,
          glowClass,
          isSticky ? "ring-2 ring-titanium-white/30" : "",
          "backdrop-blur-lg profile-card-enter"
        )}
        side="right"
        align="start"
        sideOffset={8}
        alignOffset={-20}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        onClick={handleCardClick}
        avoidCollisions={true}
        sticky="always"
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
