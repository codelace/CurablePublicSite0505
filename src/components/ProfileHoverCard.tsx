
import React, { useState } from 'react';
import { Person } from '@/data/people';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { useGlobalHover } from '@/hooks/useGlobalHover';
import ProfileCardContent from './profile/ProfileCardContent';
import { getBorderStyle, getBackgroundStyle, getGlowStyle } from '@/utils/profileStyles';

interface ProfileHoverCardProps {
  person: Person;
  children: React.ReactNode;
  isActive?: boolean;
}

const ProfileHoverCard = ({ person, children, isActive = false }: ProfileHoverCardProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const cardId = `profile-${person.id}`;
  
  // Use global hover state
  const { isActive: isGloballyActive, hoverProps } = useGlobalHover(cardId);
  
  // Show card when either external isActive prop is true, global hover state is active, or sticky
  const showCard = isActive || isGloballyActive || isSticky;
  
  // Get style classes
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  const glowClass = getGlowStyle(person.group);
  
  // Handle card click to make it sticky
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
        className={cn(
          "w-80 border-2 p-0 shadow-xl z-[100]", 
          borderClass,
          backgroundClass,
          glowClass,
          isSticky ? "ring-2 ring-titanium-white/30" : "",
          "backdrop-blur-lg"
        )}
        side="right"
        align="start"
        sideOffset={8}
        alignOffset={-20}
        onMouseEnter={hoverProps.onMouseEnter}
        onMouseLeave={hoverProps.onMouseLeave}
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
