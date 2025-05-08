
import React, { useState, useEffect } from 'react';
import HeroStatus from '@/components/HeroStatus';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MissionTabContent from '@/components/home/MissionTabContent';
import PrinciplesTabContent from '@/components/home/PrinciplesTabContent';
import JoinTabContent from '@/components/home/JoinTabContent';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';
import GradientText from '@/components/ui/GradientText';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
  const [revealSections, setRevealSections] = useState<string[]>([]);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Enhanced dramatic staged animation on mount
  useEffect(() => {
    // Initial stage - Basic UI elements
    setTimeout(() => {
      setMounted(true);
    }, 200);
    
    // Second stage - Hero text and intro
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'hero-text']);
    }, 800);
    
    // Third stage - Status indicators
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'status']);
    }, 1400);
    
    // Fourth stage - Main content
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'tabs']);
    }, 2000);
  }, []);

  // Scroll to content function
  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-68px)] flex flex-col">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-dark-surface/10 to-gunmetal-900 opacity-90"></div>
        
        {/* Enhanced particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-2 w-2 rounded-full bg-bio-blue/50 top-1/4 left-1/3 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-plasma-violet/40 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-quantum-red/30 bottom-1/3 left-1/2 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-1 w-1 rounded-full bg-bio-green/50 top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-logo-blue/40 bottom-1/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Add more decorative elements */}
          <div className="absolute top-[10%] right-[15%] w-48 h-48 rounded-full bg-plasma-violet/5 blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-[20%] left-[10%] w-64 h-64 rounded-full bg-logo-blue/5 blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(30,174,219,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,174,219,0.1)_1px,transparent_1px)]" style={{backgroundSize: "50px 50px"}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
      
      {/* Hero section with dramatic entrance */}
      <div className={`container px-4 py-6 relative z-10 flex-1 transition-all duration-1000 transform ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Enhanced Hero content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] pb-12">
          {/* Main Hero Content with dramatic staggered animation */}
          <div className="mb-12 text-center max-w-5xl mx-auto">
            <div className="relative mb-6 inline-block">
              <div className={`h-24 w-24 sm:h-32 sm:w-32 relative mx-auto mb-8 transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="absolute inset-0 rounded-full border-4 border-logo-blue/20"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-logo-blue animate-spin"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-4 border-plasma-violet animate-pulse opacity-70"></div>
                <div className="absolute inset-0 m-8 rounded-full bg-logo-blue/20 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className={`transition-all duration-1000 delay-300 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space leading-tight tracking-tight mb-4">
                <span className="text-titanium-white">Curable</span>
                <span className="text-logo-blue">DAO</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl mt-2 text-titanium-white/80 font-light">
                The Future of <GradientText variant="blue-purple" animate>Biomedical Research</GradientText>
              </div>
            </h1>
            
            <p className={`text-titanium-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-8 mt-6 transition-all duration-1000 delay-500 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              An AI-powered, decentralized ecosystem for discovering, validating, and 
              delivering <span className="text-bio-green font-medium">novel cures</span> through 
              blockchain-native governance and collaborative research.
            </p>
            
            {/* Enhanced call to action buttons with dramatic hover effects */}
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="/about"
                className="group relative px-8 py-4 bg-logo-blue hover:bg-logo-blue/90 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(30,174,219,0.4)] hover:scale-105"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span>Explore Platform</span> 
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-logo-blue to-plasma-violet/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <a 
                href="/whitepaper"
                className="px-8 py-4 bg-transparent border-2 border-titanium-white/30 hover:border-titanium-white/70 text-titanium-white font-bold rounded-lg transition-all duration-500 hover:shadow-[0_0_15px_rgba(232,241,249,0.15)] hover:scale-105"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
          
          {/* Animated scroll indicator */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={scrollToContent}
              className="flex flex-col items-center text-titanium-white/60 hover:text-titanium-white transition-colors duration-300"
            >
              <span className="text-xs mb-2 font-mono">Explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
        
        {/* Main content section */}
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
      </div>
      
      {/* Enhanced floating action indicator */}
      <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-logo-blue/20 hover:bg-logo-blue/40 border border-logo-blue/40 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,174,219,0.3)] hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 text-titanium-white transform rotate-[-90deg]" />
        </button>
      </div>
    </div>
  );
};

export default Index;
