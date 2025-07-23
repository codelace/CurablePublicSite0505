
import React from 'react';
import { Beaker, ChevronDown } from 'lucide-react';
import MissionTabContent from './MissionTabContent';

// Define the valid status types
type StatusType = 'connected' | 'pending' | 'offline';

interface StatusItem {
  label: string;
  status: StatusType;
}

interface MainContentSectionProps {
  statusItems: StatusItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  revealSections: string[];
}

const MainContentSection: React.FC<MainContentSectionProps> = ({
  statusItems,
  activeTab,
  setActiveTab,
  revealSections
}) => {
  return (
    <div 
      id="main-content" 
      className="w-full mt-4 sm:mt-6"
    >
      {/* Core status indicators with reduced spacing */}
      <div className={`flex flex-wrap gap-1 justify-center mb-3 transition-all duration-700 delay-200 ${revealSections.includes('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {statusItems.map((item, idx) => (
          <div 
            key={`status-${idx}`} 
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md border text-xs font-mono
              ${item.status === 'connected' ? 'border-quantum-red/50 text-quantum-red bg-quantum-red/10' : 
                item.status === 'pending' ? 'border-warm-amber/50 text-warm-amber bg-warm-amber/10' : 
                'border-logo-blue/50 text-logo-blue bg-logo-blue/10'} font-poppins`}
          >
            <div className={`w-1.5 h-1.5 rounded-full
              ${item.status === 'connected' ? 'bg-quantum-red animate-pulse' : 
                item.status === 'pending' ? 'bg-warm-amber animate-pulse' : 
                'bg-logo-blue'}`}
            />
            {item.label}
          </div>
        ))}
      </div>

      {/* Tab Content with reduced height */}
      <div className={`transition-all duration-700 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative min-h-[10rem]">
          <MissionTabContent />
        </div>
      </div>
      
      {/* Page navigation hint with reduced margin */}
      <div className={`flex justify-center mt-4 transition-all duration-700 delay-400 ${revealSections.includes('tabs') ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-foreground/30 animate-pulse">
          <ChevronDown className="w-4 h-4" />
          <span className="text-xs font-poppins">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
