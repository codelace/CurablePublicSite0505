
import React, { useState, useEffect } from 'react';
import HeroStatus from '@/components/HeroStatus';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Card from '@/components/Card';
import GradientText from '@/components/ui/GradientText';
import ParticleBackground from '@/components/ParticleBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const statusItems = [
  { label: 'API CONNECTED', status: 'connected' as const },
  { label: 'DAO PROTOCOL v1.2.4', status: 'connected' as const },
  { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
  { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
];

const principles = [
  {
    id: 'agentic-intelligence',
    title: 'Agentic Intelligence',
    icon: '🧠',
    description: 'AI agents guide discovery, simulate risk, and surface regulatory insights—amplifying human creativity, not replacing it.'
  },
  {
    id: 'transparent',
    title: 'Transparent & Traceable',
    icon: '🔎',
    description: 'Every experiment, vote, and funding milestone is recorded on-chain for full scientific auditability.'
  },
  {
    id: 'collective',
    title: 'Collective Ownership',
    icon: '⚖️',
    description: 'Researchers, patients, and supporters govern together—equally empowered to propose, fund, and license IP.'
  },
  {
    id: 'open',
    title: 'Open by Default',
    icon: '🌍',
    description: 'Data, protocols, and breakthroughs are shared to accelerate global collaboration and cure accessibility.'
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

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

      <div className="container px-4 py-8 relative z-10">
        {/* Hero Status */}
        <HeroStatus items={statusItems} />
        
        <Tabs 
          defaultValue="mission" 
          className="mt-6" 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto glass-panel bg-gunmetal-900/50">
            <TabsTrigger value="mission" className="data-[state=active]:bg-logo-blue/20">Mission</TabsTrigger>
            <TabsTrigger value="principles" className="data-[state=active]:bg-plasma-violet/20">Principles</TabsTrigger>
            <TabsTrigger value="join" className="data-[state=active]:bg-quantum-red/20">Join Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="mt-6 animate-fade-up">
            {/* Hero Header Section */}
            <section className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-titanium-white">
                The Future of Biomedical Breakthroughs Is <GradientText variant="blue-purple" animate>Collective</GradientText>
              </h1>
              <p className="text-titanium-white/90 leading-relaxed mb-4 text-base sm:text-lg max-w-3xl">
                CurableDAO is building an agentic, decentralized ecosystem for discovering, validating, and delivering novel cures.
                We merge AI-powered research, open IP markets, and blockchain-native governance to transform stalled science into shared progress.
              </p>
            </section>
            
            {/* Supporting Subheader Section */}
            <section className="mb-6">
              <Card variant="elevated" className="p-6 bg-gunmetal-900/60 backdrop-blur-md">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-titanium-white">
                  From <GradientText variant="purple-red">Molecule</GradientText> to <GradientText variant="green-blue">Market</GradientText>, Reimagined.
                </h2>
                <p className="text-titanium-white/90 leading-relaxed">
                  CurableDAO integrates agentic AI, transparent funding, and community-led validation into a living R&D platform.
                  Our IP‑NFT framework unlocks collaboration, regulatory traceability, and scientific equity for the diseases that matter most.
                </p>
                
                {/* Progress indicators */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
                      <div className="h-full bg-logo-blue rounded-full" style={{width: "78%"}}></div>
                    </div>
                    <p className="text-xs mt-1 text-titanium-white/70">Research Pipeline: 78%</p>
                  </div>
                  
                  <div className="relative">
                    <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
                      <div className="h-full bg-plasma-violet rounded-full" style={{width: "65%"}}></div>
                    </div>
                    <p className="text-xs mt-1 text-titanium-white/70">Community Growth: 65%</p>
                  </div>
                  
                  <div className="relative">
                    <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
                      <div className="h-full bg-quantum-red rounded-full" style={{width: "92%"}}></div>
                    </div>
                    <p className="text-xs mt-1 text-titanium-white/70">Protocol Security: 92%</p>
                  </div>
                </div>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="principles" className="mt-6 animate-fade-up">
            {/* Principles Grid */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-titanium-white">
              <GradientText variant="multi" animate={true}>Decentralized Research & Development Protocol</GradientText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map(principle => (
                <Card 
                  key={principle.id} 
                  className="flex flex-col p-5 h-full transform transition-all duration-500 hover:scale-105"
                  variant="elevated"
                  glowColor={principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'purple' : 'blue'}
                  onMouseEnter={() => setHoveredPrinciple(principle.id)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                >
                  <div className={`text-4xl mb-3 transition-all duration-300 ${hoveredPrinciple === principle.id ? 'scale-125' : ''}`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-titanium-white">
                    {hoveredPrinciple === principle.id ? (
                      <GradientText variant={principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'purple-red' : 'green-blue'}>
                        {principle.title}
                      </GradientText>
                    ) : principle.title}
                  </h3>
                  <p className="text-titanium-white/80 text-sm">{principle.description}</p>
                  
                  {/* Interactive elements that appear on hover */}
                  {hoveredPrinciple === principle.id && (
                    <div className="mt-4 pt-3 border-t border-graphite-700/30 animate-fade-up">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-titanium-white/60">Impact Score</span>
                        <span className="text-logo-blue">94.3%</span>
                      </div>
                      <div className="h-1 w-full bg-graphite-700/20 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full animate-expand rounded-full ${principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'bg-plasma-violet' : 'bg-logo-blue'}`} style={{width: "94%"}}></div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="join" className="mt-6 animate-fade-up">
            {/* CTA Section */}
            <section className="max-w-2xl mx-auto text-center">
              <Card className="p-8 bg-gunmetal-900/70 backdrop-blur-xl border border-graphite-700/60" variant="elevated" glowColor="red">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-titanium-white">
                  <GradientText variant="multi" animate={true}>Join CurableDAO</GradientText>
                </h2>
                <p className="text-titanium-white/90 mb-6 text-base sm:text-lg">
                  Help decentralize the discovery of tomorrow's cures.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button className="btn-primary py-6 hover:scale-105 transition-all" asChild>
                      <Link to="/join" className="flex flex-col items-center justify-center">
                        <span className="text-base font-bold">Apply to Launch a Cure</span>
                        <span className="text-xs opacity-80 mt-1">For researchers & institutions</span>
                      </Link>
                    </Button>
                    <Button className="btn-secondary py-6 hover:scale-105 transition-all" asChild>
                      <Link to="/join" className="flex flex-col items-center justify-center">
                        <span className="text-base font-bold">Join the DAO</span>
                        <span className="text-xs opacity-80 mt-1">For contributors & investors</span>
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Latest stats section */}
                  <div className="mt-8 pt-6 border-t border-graphite-700/30 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-logo-blue">137</div>
                      <div className="text-xs text-titanium-white/70">Active Researchers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-plasma-violet">16.4M</div>
                      <div className="text-xs text-titanium-white/70">TVL (USD)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-red">7</div>
                      <div className="text-xs text-titanium-white/70">Active Studies</div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
