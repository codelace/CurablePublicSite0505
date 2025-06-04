
import React from 'react';
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
  const cardId = `profile-${person.id}`;
  
  // Use global hover state
  const { isActive: isGloballyActive, hoverProps } = useGlobalHover(cardId);
  
  // Show card when either external isActive prop is true or global hover state is active
  const showCard = isActive || isGloballyActive;
  
  // Get style classes
  const backgroundClass = getBackgroundStyle(person.group);
  const borderClass = getBorderStyle(person.group);
  const glowClass = getGlowStyle(person.group);
  
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
          "backdrop-blur-lg"
        )}
        side="right"
        align="start"
        sideOffset={8}
        alignOffset={-20}
        onMouseEnter={hoverProps.onMouseEnter}
        onMouseLeave={hoverProps.onMouseLeave}
        avoidCollisions={true}
        sticky="always"
      >
        <ProfileCardContent 
          person={person} 
          isSticky={false} 
          onCloseSticky={() => {}} 
        />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileHoverCard;
