
import React from 'react';
import { Beaker, ChevronDown } from 'lucide-react';
import MissionTabContent from './MissionTabContent';
import PrinciplesTabContent from './PrinciplesTabContent';
import JoinTabContent from './JoinTabContent';

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
      className="w-full mt-8 sm:mt-12"
    >
      {/* Core status indicators with reduced spacing */}
      <div className={`flex flex-wrap gap-2 justify-center mb-6 transition-all duration-700 delay-200 ${revealSections.includes('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {statusItems.map((item, idx) => (
          <div 
            key={`status-${idx}`} 
            className={`flex items-center gap-2 px-3 py-1 rounded-md border text-xs sm:text-sm font-mono
              ${item.status === 'connected' ? 'border-bio-green/50 text-bio-green bg-bio-green/10' : 
                item.status === 'pending' ? 'border-logo-blue/50 text-logo-blue bg-logo-blue/10' : 
                'border-quantum-red/50 text-quantum-red bg-quantum-red/10'}`}
          >
            <div className={`w-2 h-2 rounded-full
              ${item.status === 'connected' ? 'bg-bio-green animate-pulse' : 
                item.status === 'pending' ? 'bg-logo-blue animate-pulse' : 
                'bg-quantum-red'}`} 
            />
            {item.label}
          </div>
        ))}
      </div>
      
      {/* Tab Navigation with reduced vertical spacing */}
      <div className={`flex justify-center mb-4 border-b border-graphite-700/30 transition-all duration-700 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex space-x-1 sm:space-x-2">
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium relative ${activeTab === 'mission' ? 'text-titanium-white' : 'text-titanium-white/60 hover:text-titanium-white/80'}`}
            onClick={() => setActiveTab('mission')}
          >
            <span>Mission</span>
            {activeTab === 'mission' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bio-green/80" />
            )}
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium relative ${activeTab === 'principles' ? 'text-titanium-white' : 'text-titanium-white/60 hover:text-titanium-white/80'}`}
            onClick={() => setActiveTab('principles')}
          >
            <span>Principles</span>
            {activeTab === 'principles' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-logo-blue/80" />
            )}
          </button>
          <button
            className={`px-4 py-2 text-sm sm:text-base font-medium relative ${activeTab === 'join' ? 'text-titanium-white' : 'text-titanium-white/60 hover:text-titanium-white/80'}`}
            onClick={() => setActiveTab('join')}
          >
            <span>Join</span>
            {activeTab === 'join' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-plasma-violet/80" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content with reduced height */}
      <div className={`transition-all duration-700 delay-300 ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative min-h-[15rem]">
          {activeTab === 'mission' && <MissionTabContent />}
          
          {activeTab === 'principles' && <PrinciplesTabContent />}
          
          {activeTab === 'join' && <JoinTabContent />}
        </div>
      </div>
      
      {/* Page navigation hint with reduced margin */}
      <div className={`flex justify-center mt-8 transition-all duration-700 delay-400 ${revealSections.includes('tabs') ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-titanium-white/30 animate-pulse">
          <ChevronDown className="w-4 h-4" />
          <span className="text-xs font-mono">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
