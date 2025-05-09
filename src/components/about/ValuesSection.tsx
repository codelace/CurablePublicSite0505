
import React from 'react';
import { values } from '@/data/values';
import ValueCard from '@/components/ValueCard';
import CommandHUDHeader from '@/components/CommandHUDHeader';

interface ValuesSectionProps {
  isVisible: boolean;
  hoveredValue: number | null;
  setHoveredValue: (index: number | null) => void;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ isVisible, hoveredValue, setHoveredValue }) => {
  return (
    <div 
      id="values-section" 
      className={`mb-3 relative z-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full`}
    >
      <CommandHUDHeader 
        title="Our Core Values" 
        variant="accent" 
        statusText="VALUES MODULE"
        className="mb-2"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {values.map((value, index) => (
          <div 
            key={index}
            className="transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-bio-blue/20"
            onMouseEnter={() => setHoveredValue(index)}
            onMouseLeave={() => setHoveredValue(null)}
            style={{ 
              transitionDelay: `${index * 50}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <ValueCard value={value} isHovered={hoveredValue === index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
