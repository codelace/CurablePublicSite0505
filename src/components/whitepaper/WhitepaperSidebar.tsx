
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { WhitepaperSection } from '@/data/whitepaperSections';

interface WhitepaperSidebarProps {
  sections: WhitepaperSection[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  formatHex: (index: number) => string;
}

const WhitepaperSidebar: React.FC<WhitepaperSidebarProps> = ({ 
  sections, 
  activeSection, 
  onSectionClick,
  formatHex 
}) => {
  return (
    <aside className="w-full md:w-64 md:min-h-[calc(100vh-9rem)] border-r border-graphite-700/60 bg-dark-surface p-4 md:sticky md:top-20">
      <div className="font-mono text-sm text-titanium-white/70 mb-3">// Section Index</div>
      <nav className="space-y-1">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => onSectionClick(index)}
            className={`w-full text-left p-2 rounded transition-all flex items-center gap-2 hover:bg-dark-base 
              ${activeSection === index ? 'text-arc-blue bg-dark-base' : 'text-titanium-white/70'}`}
          >
            <span className={`inline-block w-2 h-2 rounded-full ${activeSection === index ? 'bg-arc-blue animate-pulse' : 'bg-titanium-white/30'}`}></span>
            <span className="text-xs text-bio-green font-mono mr-1">{formatHex(index)}:</span>
            <span className="font-mono text-sm truncate">{section.title.replace(/^\d+\.\s+/, '')}</span>
          </button>
        ))}
      </nav>
      
      <div className="mt-6 pt-6 border-t border-graphite-700/60">
        <Button 
          variant="outline" 
          className="w-full mb-2 bg-dark-base border-graphite-700/60 hover:bg-gunmetal-900 hover:border-arc-blue/60 font-mono text-arc-blue flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          download.pdf
        </Button>
        <Button 
          variant="outline" 
          className="w-full bg-dark-base border-graphite-700/60 hover:bg-gunmetal-900 hover:border-bio-green/60 font-mono text-bio-green flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          view.github
        </Button>
      </div>
    </aside>
  );
};

export default WhitepaperSidebar;
