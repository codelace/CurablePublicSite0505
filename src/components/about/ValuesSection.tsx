
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
      className={`mb-3 relative z-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full quantum-field`}
    >
      {/* Quantum background effects */}
      <div className="absolute inset-0 quantum-particles"></div>
      <div className="absolute inset-0 data-stream-bg opacity-5"></div>
      
      <div className="relative z-10">
        <CommandHUDHeader 
          title={<span className="holographic-text">Our Core Values</span>}
          variant="accent" 
          statusText="VALUES MODULE"
          className="mb-2"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {values.map((value, index) => (
            <div 
              key={index}
              className="magnetic-attraction card-quantum-pro transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-quantum-red/30"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              style={{ 
                transitionDelay: `${index * 75}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <ValueCard value={value} isHovered={hoveredValue === index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
