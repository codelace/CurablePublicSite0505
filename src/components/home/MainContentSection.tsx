
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MissionTabContent from '@/components/home/MissionTabContent';
import PrinciplesTabContent from '@/components/home/PrinciplesTabContent';
import JoinTabContent from '@/components/home/JoinTabContent';
import HeroStatus from '@/components/HeroStatus';
import CommandHUDHeader from '@/components/CommandHUDHeader';

interface MainContentSectionProps {
  statusItems: Array<{
    label: string;
    status: 'connected' | 'pending' | 'error' | 'warning';
  }>;
  activeTab: string;
  setActiveTab: (value: string) => void;
  revealSections: string[];
}

const MainContentSection: React.FC<MainContentSectionProps> = ({ 
  statusItems, 
  activeTab, 
  setActiveTab, 
  revealSections 
}) => {
  return (
    <div id="main-content" className="pt-20 pb-24">
      {/* Hero Status with enhanced styling */}
      <div className={`transition-all duration-1000 transform ${revealSections.includes('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <HeroStatus items={statusItems} />
      </div>
      
      {/* Enhanced section header */}
      <div className={`mt-16 mb-10 transition-all duration-1000 delay-200 transform ${revealSections.includes('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <CommandHUDHeader 
          title={
            <>
              <span className="text-titanium-white">Core</span>
              <span className="text-logo-blue ml-2">Principles</span>
            </>
          }
          subtitle="Decentralized biomedical research protocol"
          statusText="SYSTEM ACTIVE"
          className="mb-4"
        />
      </div>
      
      {/* Enhanced tabs with more dramatic styling */}
      <div className={`mt-8 transition-all duration-1000 delay-400 transform ${revealSections.includes('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Tabs 
          defaultValue="mission" 
          className="mt-6" 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto glass-panel bg-gunmetal-900/70 backdrop-blur-xl border border-graphite-700/60 p-1 shadow-xl">
            <TabsTrigger 
              value="mission" 
              className="data-[state=active]:bg-logo-blue/30 data-[state=active]:text-titanium-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-logo-blue/20 py-3"
            >
              Mission
            </TabsTrigger>
            <TabsTrigger 
              value="principles" 
              className="data-[state=active]:bg-plasma-violet/30 data-[state=active]:text-titanium-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-plasma-violet/20 py-3"
            >
              Principles
            </TabsTrigger>
            <TabsTrigger 
              value="join" 
              className="data-[state=active]:bg-quantum-red/30 data-[state=active]:text-titanium-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-quantum-red/20 py-3"
            >
              Join Us
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="mt-8 animate-fade-up">
            <MissionTabContent />
          </TabsContent>
          
          <TabsContent value="principles" className="mt-8 animate-fade-up">
            <PrinciplesTabContent />
          </TabsContent>
          
          <TabsContent value="join" className="mt-8 animate-fade-up">
            <JoinTabContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainContentSection;
