
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
      {/* Enhanced quantum background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="quantum-particles opacity-15"></div>
        <div className="data-stream-bg opacity-5"></div>
      </div>
      
      <div className="relative z-10">
        {/* Status indicators removed */}

        {/* Tab Content with performance-optimized container */}
        <div className={`transition-all duration-500 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative min-h-[12rem] card-quantum-optimized bg-brand-charcoal/30 backdrop-blur-lg border border-molecular-accent/20 rounded-xl p-6 shadow-xl shadow-molecular-accent/20">
            {/* Performance-optimized neural network background for content */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-network-optimized opacity-8">
                <div className="neural-node-optimized"></div>
                <div className="neural-node-optimized"></div>
                <div className="neural-node-optimized"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <MissionTabContent />
            </div>
          </div>
        </div>
        
        {/* Enhanced page navigation hint */}
        <div className={`flex justify-center mt-6 transition-all duration-700 delay-400 ${revealSections.includes('tabs') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="magnetic-attraction flex flex-col items-center text-foreground/40 hover:text-molecular-bright transition-colors duration-300 group">
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-molecular-bright" />
            <span className="text-sm font-poppins font-medium mt-1 group-hover:text-molecular-bright">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
