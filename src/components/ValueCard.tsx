
import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';
import GradientText from './ui/GradientText';
import { Value } from '@/data/values';

interface ValueCardProps {
  value: Value;
  isHovered: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, isHovered }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Add magnetic movement effect on hover
  useEffect(() => {
    if (!isHovered || !cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Adjust strength of the magnetic effect
      const strength = 0.08;
      card.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.02) translateY(-8px)`;
    };
    
    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = '';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation sequence
    setIsAnimating(true);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      setIsAnimating(false);
    };
  }, [isHovered]);
  
  const iconMap = {
    transparency: (
      <svg className={`w-8 h-8 text-molecular-bright transition-all duration-500 ${isHovered ? 'scale-110 text-glow-purple' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
    rigor: (
      <svg className={`w-8 h-8 text-logo-blue transition-all duration-500 ${isHovered ? 'scale-110 text-glow' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
    governance: (
      <svg className={`w-8 h-8 text-molecular-bright transition-all duration-500 ${isHovered ? 'scale-110 text-glow-purple' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
    access: (
      <svg className={`w-8 h-8 text-logo-blue transition-all duration-500 ${isHovered ? 'scale-110 text-glow' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.9-6M3 15v-2m4 4v-6m4 0V7a4 4 0 014-4" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
  };

  const valueDetailMap = {
    transparency: "Transparency metric: 98.7% transactions verified",
    rigor: "Scientific rigidity: 42 peer validations this week",
    governance: "Governance health: 89% participation rate",
    access: "Access index: 1,287 open datasets available",
  };

  // Color schemes for different value types
  const getValueColorScheme = (icon: string) => {
    switch (icon) {
      case 'rigor':
        return {
          gradientFrom: 'from-logo-blue/10',
          gradientTo: 'to-bio-blue/5',
          ringColor: 'border-logo-blue/40',
          glowColor: 'blue'
        };
      case 'access':
        return {
          gradientFrom: 'from-bio-blue/10',
          gradientTo: 'to-bio-green/5',
          ringColor: 'border-bio-blue/40',
          glowColor: 'blue'
        };
      case 'governance':
        return {
          gradientFrom: 'from-molecular-bright/10',
          gradientTo: 'to-quantum-red/5',
          ringColor: 'border-molecular-bright/40',
          glowColor: 'purple'
        };
      default: // transparency
        return {
          gradientFrom: 'from-molecular-bright/10',
          gradientTo: 'to-logo-blue/5',
          ringColor: 'border-molecular-bright/40',
          glowColor: 'purple'
        };
    }
  };

  const colorScheme = getValueColorScheme(value.icon);

  return (
    <Card 
      ref={cardRef}
      className={`card-quantum-optimized magnetic-attraction-optimized flex flex-col items-center text-center h-full p-3 transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 scale-102' : ''
      }`}
      glowColor={colorScheme.glowColor === 'blue' ? 'blue' : 'purple'}
    >
      {/* Performance-optimized quantum background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="quantum-particles-optimized opacity-15"></div>
      </div>
      
      {/* Enhanced background effect */}
      {isHovered && (
        <div className={`absolute inset-0 bg-gradient-to-br from-quantum-red/8 via-brand-charcoal/15 to-quantum-red/5 rounded-xl transition-opacity duration-300 opacity-70`}></div>
      )}
      
      <div className={`mb-3 relative z-10 ${isHovered ? 'animate-pulse-dot' : ''}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-radial from-quantum-red/30 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-60' : ''}`}></div>
        {iconMap[value.icon as keyof typeof iconMap]}
        
        {/* Add orbiting particle effect */}
        {isHovered && (
          <div className="absolute inset-[-12px] pointer-events-none">
            <div className="absolute w-2 h-2 rounded-full bg-quantum-red/80 animate-orbit shadow-lg shadow-quantum-red/40" style={{animationDuration: '3s'}}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-logo-blue/80 animate-orbit shadow-lg shadow-logo-blue/40" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          </div>
        )}
      </div>
      
      <h3 className={`text-lg font-poppins font-bold mb-2 transition-all duration-300 relative z-10 ${isHovered ? '' : 'text-foreground'}`}>
        {isHovered ? (
          <GradientText variant="red" animate={true}>
            {value.title}
          </GradientText>
        ) : (
          <span className="holographic-text">{value.title}</span>
        )}
      </h3>
      
      <p className={`text-foreground/80 text-sm mb-2 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-75'} relative z-10 font-poppins`}>
        {value.description}
      </p>
      
      {isHovered && (
        <div className="mt-3 pt-3 border-t border-quantum-red/30 w-full fade-in-up relative z-10">
          <p className="text-sm font-poppins text-quantum-red flex items-center holographic-text">
            <span className="mr-2 opacity-70 animate-pulse text-base">›</span>
            {valueDetailMap[value.icon as keyof typeof valueDetailMap]}
          </p>
          <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-quantum-red/50 to-transparent rounded-full animate-pulse-glow shadow-lg shadow-quantum-red/30"></div>
          
          {/* Add data visualization bar */}
          <div className="mt-3 w-full h-2 bg-brand-charcoal/50 rounded-full overflow-hidden border border-quantum-red/20">
            <div 
              className={`h-full bg-gradient-to-r from-quantum-red to-warm-rose rounded-full animate-expand shadow-lg shadow-quantum-red/40`}
              style={{
                width: value.icon === 'transparency' ? '98%' : 
                       value.icon === 'rigor' ? '84%' : 
                       value.icon === 'governance' ? '89%' : '75%'
              }}
            ></div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ValueCard;
