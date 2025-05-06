
import React, { useState } from 'react';
import { ArrowRight, Info, Activity, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import SectionDivider from '@/components/SectionDivider';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Status items for the command center
const statusItems = [
  { 
    label: 'API CONNECTED', 
    status: 'active',
    icon: <Database className="w-4 h-4" />,
    details: 'BindingDB API integration online and responding' 
  },
  { 
    label: 'DAO PROTOCOL v1.2.4', 
    status: 'active',
    icon: <Shield className="w-4 h-4" />,
    details: 'Governance protocol operating normally'
  },
  { 
    label: 'NETWORK UPTIME 99.8%', 
    status: 'active',
    icon: <Activity className="w-4 h-4" />,
    details: '23.9 hours of continuous operation' 
  },
  { 
    label: 'CONSENSUS PROTOCOL', 
    status: 'pending',
    icon: <Info className="w-4 h-4" />,
    details: 'Vote #32 in progress - closes in 3 hours' 
  }
];

const About = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Building the Future of Biomedical Research";
  
  // Simulated typewriter effect - in reality this would use useEffect
  React.useEffect(() => {
    const text = "Building the Future of Biomedical Research";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80); // Speed of typing
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="container px-4 py-8">
      {/* Command Center Status Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 animate-fade-up">
        {statusItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  item.status === 'active' 
                    ? 'bg-gradient-to-r from-gunmetal-900/80 to-graphite-700/60 border border-plasma-violet/40 shadow-[0_0_8px_rgba(161,98,255,0.3)]' 
                    : 'bg-gunmetal-900/70 border border-graphite-700/40'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'active' ? 'bg-plasma-violet animate-pulse-glow' : 'bg-graphite-700'
                  }`}></div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      {item.icon}
                      <span className="text-xs font-mono">{item.label}</span>
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-md p-2 text-xs">
                {item.details}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mb-12 animate-fade-up">
        <div className="inline-block px-3 py-1 mb-2 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40">
          ACTIVE MISSION
        </div>
        <h1 className="text-3xl font-bold text-titanium-white mb-4">
          <span className="block">{typedText}</span>
          <span className="text-arc-blue">Operational Status: Online</span>
        </h1>
        
        {/* Mission Feed */}
        <div className="overflow-hidden bg-gunmetal-900/30 border border-graphite-700/30 rounded-lg p-2 mb-6">
          <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-none">
            <div className="flex animate-[pan-grid_15s_linear_infinite]">
              <div className="flex items-center gap-4 px-4">
                <span className="text-plasma-violet">🔬</span>
                <span className="text-titanium-white/80 text-sm">BindingDB integration active</span>
                <span className="h-4 w-[1px] bg-graphite-700/40"></span>
                
                <span className="text-logo-blue">⬇️</span>
                <span className="text-titanium-white/80 text-sm">New TargetForge scaffold queued</span>
                <span className="h-4 w-[1px] bg-graphite-700/40"></span>
                
                <span className="text-quantum-red">📊</span>
                <span className="text-titanium-white/80 text-sm">Protocol v2.0 review in progress</span>
                <span className="h-4 w-[1px] bg-graphite-700/40"></span>
                
                <span className="text-plasma-violet">🧬</span>
                <span className="text-titanium-white/80 text-sm">{mission}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <a 
            href="https://binding-db-integrator-1-codelace77.replit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2 font-mono border border-plasma-violet/60 shadow-[0_0_15px_rgba(161,98,255,0.3)]"
            >
              > launch --next-frontier
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Core values section - interactive cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-titanium-white mb-6">System Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div 
                  onMouseEnter={() => setActiveValue(value.id)}
                  onMouseLeave={() => setActiveValue(null)}
                  className={`cursor-pointer transition-all duration-300 ${activeValue === value.id ? 'scale-105' : ''}`}
                >
                  <ValueCard value={value} isActive={activeValue === value.id} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                {value.id === 1 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold">Transparency Status:</h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Grants Published</span>
                        <span className="text-plasma-violet">32</span>
                      </div>
                      <div className="flex justify-between">
                        <span>On-Chain Votes</span>
                        <span className="text-plasma-violet">147</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Public Data Sets</span>
                        <span className="text-plasma-violet">8</span>
                      </div>
                    </div>
                  </div>
                )}
                {value.id === 2 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold">Scientific Rigor:</h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Peer Reviewers</span>
                        <span className="text-logo-blue">42</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Validation Runs</span>
                        <span className="text-logo-blue">215</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reproducibility Score</span>
                        <span className="text-logo-blue">89%</span>
                      </div>
                    </div>
                  </div>
                )}
                {value.id === 3 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold">Governance Activity:</h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Active Proposals</span>
                        <span className="text-plasma-violet">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guardian Votes</span>
                        <span className="text-plasma-violet">12/15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Vote Deadline</span>
                        <span className="text-plasma-violet">6h 42m</span>
                      </div>
                    </div>
                  </div>
                )}
                {value.id === 4 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold">Open Access:</h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>IP-NFTs Released</span>
                        <span className="text-logo-blue">7</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dataset Downloads</span>
                        <span className="text-logo-blue">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protocol Forks</span>
                        <span className="text-logo-blue">23</span>
                      </div>
                    </div>
                  </div>
                )}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-titanium-white mb-6">
          <span className="text-plasma-violet">$ ls</span> Command Center Guardians
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
