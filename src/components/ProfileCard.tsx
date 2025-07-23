
import React, { useState, useCallback } from 'react';
import Card from './Card';
import { Person } from '@/data/people';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileCardProps {
  person: Person;
  isActive?: boolean;
  featured?: boolean;
  compact?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  person, 
  isActive = false, 
  featured = false, 
  compact = false 
}) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Map the group to a display name
  const getGroupDisplay = (group: string) => {
    switch (group) {
      case 'team': return 'Guardian';
      case 'advisor': return 'Advisor';
      case 'founder': return 'Founder';
      case 'contributor': return 'Contributor';
      default: return group;
    }
  };
  
  // Enhanced badge styling based on group with quantum effects
  const getBadgeStyle = (group: string) => {
    switch (group) {
      case 'team': 
        return 'bg-logo-blue/20 text-logo-blue border-logo-blue/40 shadow-logo-blue/30';
      case 'advisor': 
        return 'bg-quantum-red/20 text-quantum-red border-quantum-red/40 shadow-quantum-red/30';
      case 'founder': 
        return 'bg-plasma-violet/20 text-plasma-violet border-plasma-violet/40 shadow-plasma-violet/30';
      case 'contributor':
        return 'bg-warm-amber/20 text-warm-amber border-warm-amber/40 shadow-warm-amber/30';
      default: 
        return 'bg-logo-blue/20 text-logo-blue border-logo-blue/40 shadow-logo-blue/30';
    }
  };

  // Enhanced glow effects for different groups
  const getGlowEffect = (group: string) => {
    switch (group) {
      case 'team':
        return 'shadow-xl shadow-logo-blue/20 hover:shadow-logo-blue/40';
      case 'advisor':
        return 'shadow-xl shadow-quantum-red/20 hover:shadow-quantum-red/40';
      case 'founder':
        return 'shadow-xl shadow-plasma-violet/20 hover:shadow-plasma-violet/40';
      case 'contributor':
        return 'shadow-xl shadow-warm-amber/20 hover:shadow-warm-amber/40';
      default:
        return 'shadow-xl shadow-logo-blue/20 hover:shadow-logo-blue/40';
    }
  };

  const groupDisplay = getGroupDisplay(person.group);
  const badgeClass = getBadgeStyle(person.group);
  const glowEffect = getGlowEffect(person.group);
  
  // Enhanced animation classes based on person group and featured status
  const getAnimationClass = () => {
    const baseClass = featured ? 'quantum-pulse-enhanced' : 'quantum-pulse-subtle';
    switch (person.group) {
      case 'team':
        return `${baseClass} data-pulse-optimized`;
      case 'advisor':
        return `${baseClass} quantum-barrier-optimized`;
      case 'founder':
        return `${baseClass} bio-scan-optimized`;
      case 'contributor':
        return `${baseClass} warm-glow-optimized`;
      default:
        return baseClass;
    }
  };

  const animationClass = getAnimationClass();

  // Responsive sizing based on featured and compact props
  const getCardSizing = () => {
    if (featured) {
      return 'p-6 min-h-[320px]';
    } else if (compact) {
      return 'p-3 min-h-[200px]';
    } else {
      return 'p-4 min-h-[260px]';
    }
  };

  const getAvatarSizing = () => {
    if (featured) {
      return 'w-24 h-24 sm:w-32 sm:h-32';
    } else if (compact) {
      return 'w-16 h-16 sm:w-20 sm:h-20';
    } else {
      return 'w-20 h-20 sm:w-24 sm:h-24';
    }
  };

  const cardSizing = getCardSizing();
  const avatarSizing = getAvatarSizing();

  return (
    <Card 
      className={`card-quantum-optimized magnetic-attraction-optimized flex flex-col text-center h-full 
                transition-all duration-500 hover:scale-105 group ${cardSizing} ${glowEffect} ${animationClass}
                ${isLoaded ? 'opacity-100' : 'opacity-0'} 
                ${featured ? 'border-2 border-plasma-violet/30' : 'border border-quantum-red/20'}`}
      glowColor={person.group === 'team' ? 'blue' : 
                person.group === 'advisor' ? 'red' : 
                person.group === 'contributor' ? 'amber' : 'purple'}
    >
      {/* Revolutionary quantum background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        {/* Neural network background */}
        <div className="neural-network-optimized opacity-10">
          <div className="neural-node-optimized"></div>
          <div className="neural-node-optimized"></div>
          {featured && <div className="neural-node-optimized"></div>}
        </div>
        
        {/* Quantum particle effects */}
        <div className="quantum-particles-optimized opacity-15"></div>
        
        {/* Holographic mesh for featured cards */}
        {featured && (
          <div className="holographic-mesh-optimized opacity-10"></div>
        )}
        
        {/* Data stream effects */}
        <div className="data-stream-optimized opacity-5"></div>
      </div>
      
      {/* Enhanced avatar with quantum border */}
      <div 
        className={`${avatarSizing} rounded-full overflow-hidden border-2 
                   ${person.group === 'founder' ? 'border-plasma-violet/50' : 
                     person.group === 'advisor' ? 'border-quantum-red/50' : 
                     person.group === 'team' ? 'border-logo-blue/50' : 'border-warm-amber/50'} 
                   mb-3 mx-auto relative transition-all duration-500 
                   ${featured ? 'shadow-2xl' : 'shadow-lg'} 
                   ${person.group === 'founder' ? 'shadow-plasma-violet/20' : 
                     person.group === 'advisor' ? 'shadow-quantum-red/20' : 
                     person.group === 'team' ? 'shadow-logo-blue/20' : 'shadow-warm-amber/20'}
                   group-hover:shadow-2xl group-hover:scale-110`}
      >
        <Avatar className="w-full h-full">
          <AvatarImage 
            src={person.avatar} 
            alt={person.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onLoad={() => setIsLoaded(true)}
          />
          <AvatarFallback 
            className="bg-brand-charcoal/90 text-foreground font-poppins font-bold holographic-text text-lg"
            onLoad={() => setIsLoaded(true)}
          >
            {person.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        {/* Quantum ring effect around avatar */}
        <div className={`absolute inset-0 rounded-full border-2 
                        ${person.group === 'founder' ? 'border-plasma-violet/30' : 
                          person.group === 'advisor' ? 'border-quantum-red/30' : 
                          person.group === 'team' ? 'border-logo-blue/30' : 'border-warm-amber/30'} 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        animate-[spin_3s_linear_infinite]`}></div>
      </div>
      
      <div className="flex-1 flex flex-col relative z-10">
        {/* Enhanced name with gradient text for featured */}
        <h3 className={`font-poppins font-bold mb-2 text-foreground transition-all duration-300
                       ${featured ? 'text-lg sm:text-xl' : compact ? 'text-sm' : 'text-sm sm:text-base'}
                       group-hover:text-quantum-red`}>
          {featured ? (
            <span className="holographic-text font-extrabold">{person.name}</span>
          ) : (
            <span>{person.name}</span>
          )}
        </h3>
        
        {/* Enhanced badge with better styling */}
        <Badge 
          variant="outline" 
          className={`mb-2 mx-auto px-3 py-1 font-poppins font-semibold rounded-lg 
                     transition-all duration-300 border ${badgeClass} shadow-lg
                     ${featured ? 'text-sm' : 'text-xs'}
                     group-hover:scale-105`}
        >
          {groupDisplay}
        </Badge>
        
        {/* Role with enhanced styling */}
        <p className={`text-quantum-red font-poppins mb-2 font-medium holographic-text
                      ${featured ? 'text-base' : compact ? 'text-xs' : 'text-sm'}`}>
          {person.role}
        </p>
        
        {/* Bio section with improved readability */}
        {!compact && (
          <div className="flex-1 flex flex-col justify-start">
            <div className={`text-foreground/80 leading-relaxed text-left font-poppins
                           ${featured ? 'text-sm' : 'text-xs'}`}>
              {person.bio ? (
                person.bio.split('\n').filter(line => line.trim()).slice(0, featured ? 4 : 2).map((line, index) => (
                  <p key={index} className="mb-1 last:mb-0">
                    {line.trim()}
                  </p>
                ))
              ) : person.gptDescription ? (
                person.gptDescription.split('\n').filter(line => line.trim()).slice(0, featured ? 4 : 2).map((line, index) => (
                  <p key={index} className="mb-1 last:mb-0">
                    {line.trim()}
                  </p>
                ))
              ) : (
                <p className="italic opacity-60">Profile details coming soon...</p>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Quantum effect overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </Card>
  );
};

export default ProfileCard;
