
import React from 'react';
import { WhitepaperSection as WhitepaperSectionType } from '@/data/whitepaperSections';

interface WhitepaperSectionProps {
  section: WhitepaperSectionType;
  index: number;
  activeSection: number;
  formatHex: (index: number) => string;
  isLast: boolean;
}

const WhitepaperSectionComponent: React.FC<WhitepaperSectionProps> = ({ 
  section, 
  index, 
  activeSection, 
  formatHex,
  isLast 
}) => {
  return (
    <div 
      id={`section-${index}`} 
      className={`whitepaper-section space-y-4 transition-opacity duration-300 
        ${activeSection === index ? 'opacity-100' : 'opacity-80'}`}
    >
      <div className="font-mono bg-dark-surface border border-graphite-700/60 p-3 rounded flex items-center">
        <span className="text-arc-blue mr-2">{formatHex(index)}:</span>
        <h2 className="text-xl text-bio-green font-bold font-space">
          {section.title}
        </h2>
      </div>
      
      <div className="font-sans text-titanium-white/90 leading-relaxed whitespace-pre-line pl-4 ml-2 border-l-2 border-graphite-700/60">
        {section.body}
      </div>
      
      {/* Decorative elements to enhance the terminal/code look */}
      {!isLast && (
        <div className="font-mono text-xs text-titanium-white/30 pl-4">
          # End of section {formatHex(index)}
        </div>
      )}
    </div>
  );
};

export default WhitepaperSectionComponent;
