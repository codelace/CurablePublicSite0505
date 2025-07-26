
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
      className="w-full mt-4 sm:mt-6 relative quantum-field"
    >
      
      <div className="relative z-10">
        {/* Status indicators removed */}

        {/* Tab Content with performance-optimized container */}
        <div className={`transition-all duration-500 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative min-h-[12rem] bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <MissionTabContent />
          </div>
        </div>
        
        {/* Enhanced page navigation hint */}
        <div className={`flex justify-center mt-6 transition-all duration-700 delay-400 ${revealSections.includes('tabs') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <ChevronDown className="w-5 h-5 animate-bounce" />
            <span className="text-sm font-medium mt-1">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
