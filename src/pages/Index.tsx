
import React from 'react';
import HeroStatus from '@/components/HeroStatus';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Card from '@/components/Card';

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
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      {/* Hero Status */}
      <HeroStatus items={statusItems} />
      
      {/* Hero Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-titanium-white">
          The Future of Biomedical Breakthroughs Is <span className="text-gradient-purple-blue">Collective</span>
        </h1>
        <p className="text-lg text-titanium-white/90 leading-relaxed mb-8">
          CurableDAO is building an agentic, decentralized ecosystem for discovering, validating, and delivering novel cures.
          We merge AI-powered research, open IP markets, and blockchain-native governance to transform stalled science into shared progress.
        </p>
      </section>
      
      {/* Supporting Subheader Section */}
      <section className="mb-16 bg-gunmetal-900/60 backdrop-blur-md border border-graphite-700/60 rounded-2xl p-8 animate-fade-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-titanium-white">
            From <span className="text-plasma-violet">Molecule</span> to <span className="text-logo-blue">Market</span>, Reimagined.
          </h2>
          <p className="text-md text-titanium-white/90 leading-relaxed mb-4 text-center">
            CurableDAO integrates agentic AI, transparent funding, and community-led validation into a living R&D platform.
            Our IP‑NFT framework unlocks collaboration, regulatory traceability, and scientific equity for the diseases that matter most.
          </p>
        </div>
      </section>
      
      {/* Principles Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-titanium-white">
          Our <span className="text-plasma-violet">Core Principles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map(principle => (
            <Card key={principle.id} className="flex flex-col items-center text-center h-full">
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-titanium-white">
                {principle.title}
              </h3>
              <p className="text-titanium-white/80 text-sm">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-2xl mx-auto text-center mb-16 p-8 bg-gunmetal-900/40 backdrop-blur-sm border border-graphite-700/40 rounded-2xl animate-fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titanium-white">
          <span className="text-gradient-purple-blue">Join CurableDAO</span>
        </h2>
        <p className="text-lg text-titanium-white/90 mb-8">
          Help decentralize the discovery of tomorrow's cures.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="btn-primary" asChild>
            <Link to="/join">Apply to Launch a Cure</Link>
          </Button>
          <Button className="btn-secondary" asChild>
            <Link to="/join">Join the DAO</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
