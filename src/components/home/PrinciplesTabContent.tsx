
import React, { useState } from 'react';
import Card from '@/components/Card';
import GradientText from '@/components/ui/GradientText';

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
      {/* Principles Grid */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-titanium-white">
        <GradientText variant="multi" animate={true}>Decentralized Research & Development Protocol</GradientText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map(principle => (
          <PrincipleCard 
            key={principle.id}
            principle={principle}
            isHovered={hoveredPrinciple === principle.id}
            onHover={() => setHoveredPrinciple(principle.id)}
            onLeave={() => setHoveredPrinciple(null)}
          />
        ))}
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

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, isHovered, onHover, onLeave }) => {
  return (
    <Card 
      key={principle.id} 
      className="flex flex-col p-5 h-full transform transition-all duration-500 hover:scale-105"
      variant="elevated"
      glowColor={principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'purple' : 'blue'}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`text-4xl mb-3 transition-all duration-300 float-animation ${isHovered ? 'scale-125' : ''}`}>
        {principle.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-titanium-white">
        {isHovered ? (
          <GradientText variant={principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'purple-red' : 'green-blue'} className="text-distortion">
            {principle.title}
          </GradientText>
        ) : principle.title}
      </h3>
      <p className="text-titanium-white/80 text-sm">{principle.description}</p>
      
      {/* Interactive elements that appear on hover */}
      {isHovered && (
        <div className="mt-4 pt-3 border-t border-graphite-700/30 animate-fade-up">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-titanium-white/60">Impact Score</span>
            <span className="text-logo-blue">94.3%</span>
          </div>
          <div className="h-1 w-full bg-graphite-700/20 rounded-full mt-1 overflow-hidden">
            <div className={`h-full animate-expand rounded-full ${principle.id === 'agentic-intelligence' || principle.id === 'collective' ? 'bg-plasma-violet' : 'bg-logo-blue'}`} style={{width: "94%"}}></div>
          </div>
          
          {/* Animated nodes */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[1, 2, 3].map((nodeIndex) => (
              <div 
                key={nodeIndex} 
                className="w-full h-1 rounded-full bg-graphite-700/30 overflow-hidden" 
              >
                <div 
                  className="h-full rounded-full cyber-loading" 
                  style={{
                    background: nodeIndex === 1 ? 'linear-gradient(90deg, rgba(30,174,219,0.5), rgba(30,174,219,0.2))' : 
                    nodeIndex === 2 ? 'linear-gradient(90deg, rgba(161,98,255,0.5), rgba(161,98,255,0.2))' : 
                    'linear-gradient(90deg, rgba(142,228,175,0.5), rgba(142,228,175,0.2))',
                    animationDelay: `${nodeIndex * 0.2}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default PrinciplesTabContent;
