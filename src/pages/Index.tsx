
import React, { useState, useEffect } from 'react';
import HeroStatus from '@/components/HeroStatus';
import ParticleBackground from '@/components/ParticleBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MissionTabContent from '@/components/home/MissionTabContent';
import PrinciplesTabContent from '@/components/home/PrinciplesTabContent';
import JoinTabContent from '@/components/home/JoinTabContent';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';
import GradientText from '@/components/ui/GradientText';
import { ArrowRight } from 'lucide-react';

const statusItems = [
  { label: 'API CONNECTED', status: 'connected' as const },
  { label: 'DAO PROTOCOL v1.2.4', status: 'connected' as const },
  { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
  { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-68px)] flex flex-col">
      {/* Enhanced particle background with higher intensity */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground color="multi" intensity="medium" />
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
      
      {/* Hero section with dramatic entrance */}
      <div className={`container px-4 py-6 relative z-10 flex-1 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-space">
              <div className="leading-tight tracking-tight">
                <span className="text-titanium-white">Curable</span>
                <span className="text-logo-blue">DAO</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl mt-2 text-titanium-white/80">
                The Future of <GradientText variant="blue-purple">Biomedical Research</GradientText>
              </div>
            </h1>
            
            <p className="text-titanium-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-8">
              An AI-powered, decentralized ecosystem for discovering, validating, and 
              delivering <span className="text-bio-green font-medium">novel cures</span> through 
              blockchain-native governance and collaborative research.
            </p>
            
            {/* Enhanced call to action buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href="/about"
                className="group relative px-8 py-4 bg-logo-blue hover:bg-logo-blue/90 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,174,219,0.4)]"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span>Explore Platform</span> 
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-logo-blue to-plasma-violet/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="/whitepaper"
                className="px-8 py-4 bg-transparent border-2 border-titanium-white/30 hover:border-titanium-white/70 text-titanium-white font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,241,249,0.15)]"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
        </div>
        
        {/* Hero Status with enhanced styling */}
        <div className={`transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <HeroStatus items={statusItems} />
        </div>
        
        {/* Enhanced tabs with more dramatic styling */}
        <div className={`mt-8 transition-all duration-1000 delay-700 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Tabs 
            defaultValue="mission" 
            className="mt-6" 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto glass-panel bg-gunmetal-900/70 backdrop-blur-xl border border-graphite-700/60 p-1 shadow-lg">
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
      
      {/* Floating action indicator */}
      <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-logo-blue/20 hover:bg-logo-blue/40 border border-logo-blue/40 rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,174,219,0.3)]"
        >
          <ArrowRight className="w-5 h-5 text-titanium-white transform rotate-[-90deg]" />
        </button>
      </div>
    </div>
  );
};

export default Index;
