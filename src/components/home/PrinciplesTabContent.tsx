
import React, { useState } from 'react';
import Card from '@/components/Card';
import GradientText from '@/components/ui/GradientText';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface Principle {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const principles: Principle[] = [
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

const PrinciplesTabContent: React.FC = () => {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);
  
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-foreground font-poppins">
        <GradientText variant="multi" animate={true}>Decentralized Research Protocol</GradientText>
      </h2>
      
      {/* Horizontal layout on wider screens */}
      <div className="hidden md:grid grid-cols-4 gap-3">
        {principles.map(principle => (
          <CompactPrincipleCard 
            key={principle.id}
            principle={principle}
            isHovered={hoveredPrinciple === principle.id}
            onHover={() => setHoveredPrinciple(principle.id)}
            onLeave={() => setHoveredPrinciple(null)}
          />
        ))}
      </div>
      
      {/* Tabbed interface for mobile */}
      <div className="md:hidden">
        <Tabs defaultValue={principles[0].id} className="w-full">
          <TabsList className="grid grid-cols-4 mb-2">
            {principles.map(principle => (
              <TabsTrigger 
                key={principle.id} 
                value={principle.id}
                className="px-2 py-1 text-xs flex flex-col items-center"
              >
                <span className="text-lg mb-1">{principle.icon}</span>
                <span className="truncate max-w-[60px]">{principle.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {principles.map(principle => (
            <TabsContent key={principle.id} value={principle.id} className="mt-0">
              <Card 
                className="p-4"
                variant="elevated"
                glowColor={principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'purple' : 'blue'}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{principle.icon}</span>
                  <h3 className="text-lg font-bold text-foreground font-poppins">{principle.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm font-poppins">{principle.description}</p>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

interface PrincipleCardProps {
  principle: Principle;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CompactPrincipleCard: React.FC<PrincipleCardProps> = ({ principle, isHovered, onHover, onLeave }) => {
  // Color schemes for different value types
  const getValueColorScheme = (id: string) => {
    switch (id) {
      case 'transparent':
      case 'open':
        return {
          glowColor: 'blue',
          textColor: 'text-quantum-red',
          iconBg: 'bg-quantum-red/10'
        };
      default: // agentic-intelligence, collective
        return {
          glowColor: 'purple',
          textColor: 'text-warm-rose',
          iconBg: 'bg-warm-rose/10'
        };
    }
  };

  const colorScheme = getValueColorScheme(principle.id);

  return (
    <Card 
      className={`flex flex-col p-3 h-full transition-all duration-300 ${
        isHovered ? 'transform -translate-y-1' : ''
      }`}
      variant="elevated"
      glowColor={colorScheme.glowColor === 'blue' ? 'blue' : 'purple'}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center mb-2">
        <div className={`w-8 h-8 rounded-full ${colorScheme.iconBg} flex items-center justify-center ${isHovered ? 'animate-pulse' : ''}`}>
          <span className="text-xl">{principle.icon}</span>
        </div>
        <h3 className={`ml-2 text-sm font-bold font-poppins ${isHovered ? colorScheme.textColor : 'text-foreground'}`}>
          {principle.title.split(' ')[0]}
        </h3>
      </div>
      
      <p className="text-foreground/80 text-xs leading-tight font-poppins">{principle.description}</p>
      
      {isHovered && (
        <div className="mt-2 pt-1 border-t border-quantum-red/20 w-full animate-fade-in">
          <div className="flex justify-between text-[0.65rem] text-foreground/50 font-mono">
            <span>Protocol</span>
            <span className={colorScheme.textColor}>active</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PrinciplesTabContent;
