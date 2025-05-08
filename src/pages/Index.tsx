
import React, { useState, useEffect } from 'react';
import HeroStatus from '@/components/HeroStatus';
import ParticleBackground from '@/components/ParticleBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MissionTabContent from '@/components/home/MissionTabContent';
import PrinciplesTabContent from '@/components/home/PrinciplesTabContent';
import JoinTabContent from '@/components/home/JoinTabContent';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const statusItems = [
  { label: 'API CONNECTED', status: 'connected' as const },
  { label: 'DAO PROTOCOL v1.2.4', status: 'connected' as const },
  { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
  { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Interactive particle background */}
      <ParticleBackground color="multi" intensity="low" />
      
      {/* Animated circuit lines */}
      <AnimatedCircuitLines />

      <div className="container px-4 py-8 relative z-10">
        {/* Hero Status */}
        <HeroStatus items={statusItems} />
        
        <Tabs 
          defaultValue="mission" 
          className="mt-6" 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto glass-panel bg-gunmetal-900/50 particle-drift">
            <TabsTrigger value="mission" className="data-[state=active]:bg-logo-blue/20 transition-all duration-300 hover:bg-logo-blue/10">Mission</TabsTrigger>
            <TabsTrigger value="principles" className="data-[state=active]:bg-plasma-violet/20 transition-all duration-300 hover:bg-plasma-violet/10">Principles</TabsTrigger>
            <TabsTrigger value="join" className="data-[state=active]:bg-quantum-red/20 transition-all duration-300 hover:bg-quantum-red/10">Join Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="mt-6 animate-fade-up">
            <MissionTabContent />
          </TabsContent>
          
          <TabsContent value="principles" className="mt-6 animate-fade-up">
            <PrinciplesTabContent />
          </TabsContent>
          
          <TabsContent value="join" className="mt-6 animate-fade-up">
            <JoinTabContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
