
import React from 'react';
import Card from './Card';
import { Value } from '@/data/values';

interface ValueCardProps {
  value: Value;
  isHovered: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, isHovered }) => {
  const iconMap = {
    transparency: (
      <svg className={`w-8 h-8 text-plasma-violet transition-all duration-500 ${isHovered ? 'scale-110 text-glow-purple' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
    rigor: (
      <svg className={`w-8 h-8 text-logo-blue transition-all duration-500 ${isHovered ? 'scale-110 text-glow' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" className={isHovered ? 'animate-pulse' : ''} />
      </svg>
    ),
    governance: (
      <svg className={`w-8 h-8 text-plasma-violet transition-all duration-500 ${isHovered ? 'scale-110 text-glow-purple' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

  return (
    <Card 
      className={`flex flex-col items-center text-center h-full p-3 transition-all duration-300 ${isHovered ? 'transform -translate-y-2 magnetic-hover' : ''}`}
      glowColor={value.icon === 'rigor' || value.icon === 'access' ? 'blue' : 'purple'}
    >
      <div className={`mb-3 relative ${isHovered ? 'animate-pulse-dot' : ''}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-radial opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>
        {iconMap[value.icon as keyof typeof iconMap]}
      </div>
      <h3 className={`text-lg font-bold mb-2 transition-all duration-300 ${isHovered ? 'text-gradient-purple-blue' : 'text-titanium-white'}`}>
        {value.title}
      </h3>
      <p className={`text-titanium-white/80 text-xs mb-2 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-75'}`}>
        {value.description}
      </p>
      
      {isHovered && (
        <div className="mt-2 pt-2 border-t border-graphite-700/40 w-full fade-in-up">
          <p className="text-xs font-mono text-logo-blue flex items-center glow-text">
            <span className="mr-1 opacity-70">›</span>
            {valueDetailMap[value.icon as keyof typeof valueDetailMap]}
          </p>
          <div className="mt-1 w-full h-1 bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent rounded-full animate-pulse-glow"></div>
        </div>
      )}
    </Card>
  );
};

export default ValueCard;
