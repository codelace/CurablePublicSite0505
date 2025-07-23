
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
        {/* Core status indicators with enhanced styling */}
        <div className={`flex flex-wrap gap-2 justify-center mb-4 transition-all duration-700 delay-200 ${revealSections.includes('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {statusItems.map((item, idx) => (
            <div 
              key={`status-${idx}`} 
              className={`magnetic-attraction card-quantum-pro flex items-center gap-2 px-4 py-2 rounded-xl border-2 text-sm font-poppins font-semibold shadow-lg transition-all duration-300 hover:scale-105
                ${item.status === 'connected' ? 'border-quantum-red/50 text-quantum-red bg-quantum-red/10 shadow-quantum-red/20' : 
                  item.status === 'pending' ? 'border-warm-amber/50 text-warm-amber bg-warm-amber/10 shadow-warm-amber/20' : 
                  'border-logo-blue/50 text-logo-blue bg-logo-blue/10 shadow-logo-blue/20'}`}
            >
              <div className={`w-2 h-2 rounded-full
                ${item.status === 'connected' ? 'bg-quantum-red animate-pulse shadow-lg shadow-quantum-red/40' : 
                  item.status === 'pending' ? 'bg-warm-amber animate-pulse shadow-lg shadow-warm-amber/40' : 
                  'bg-logo-blue shadow-lg shadow-logo-blue/40'}`}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Tab Content with enhanced container */}
        <div className={`transition-all duration-700 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative min-h-[12rem] card-quantum-pro bg-brand-charcoal/30 backdrop-blur-lg border border-quantum-red/20 rounded-xl p-6 shadow-xl shadow-quantum-red/20">
            {/* Neural network background for content */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-network opacity-10">
                <div className="neural-node"></div>
                <div className="neural-node"></div>
                <div className="neural-node"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <MissionTabContent />
            </div>
          </div>
        </div>
        
        {/* Enhanced page navigation hint */}
        <div className={`flex justify-center mt-6 transition-all duration-700 delay-400 ${revealSections.includes('tabs') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="magnetic-attraction flex flex-col items-center text-foreground/40 hover:text-quantum-red transition-colors duration-300 group">
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-quantum-red" />
            <span className="text-sm font-poppins font-medium mt-1 group-hover:text-quantum-red">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
