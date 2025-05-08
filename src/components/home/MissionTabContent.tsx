
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import GradientText from '@/components/ui/GradientText';

const MissionTabContent: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  // Reveal title animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Header Section */}
      <section className="mb-6">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-titanium-white transform transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          The Future of Biomedical Breakthroughs Is <GradientText variant="blue-purple" animate className="holo-scan">Collective</GradientText>
        </h1>
        <p className={`text-titanium-white/90 leading-relaxed mb-4 text-base sm:text-lg max-w-3xl transform transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} data-surge`}>
          CurableDAO is building an agentic, decentralized ecosystem for discovering, validating, and delivering novel cures.
          We merge AI-powered research, open IP markets, and blockchain-native governance to transform stalled science into shared progress.
        </p>
      </section>
      
      {/* Supporting Subheader Section */}
      <section className="mb-6">
        <Card variant="elevated" className="p-6 bg-gunmetal-900/60 backdrop-blur-md energy-pulse">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-titanium-white">
            From <GradientText variant="purple-red" className="molecular-rotate inline-block origin-center">Molecule</GradientText> to <GradientText variant="green-blue" className="molecular-rotate inline-block origin-center" style={{animationDirection: "reverse"}}>Market</GradientText>, Reimagined.
          </h2>
          <p className="text-titanium-white/90 leading-relaxed">
            CurableDAO integrates agentic AI, transparent funding, and community-led validation into a living R&D platform.
            Our IP‑NFT framework unlocks collaboration, regulatory traceability, and scientific equity for the diseases that matter most.
          </p>
          
          {/* Progress indicators */}
          <ProgressIndicators />
        </Card>
      </section>
    </>
  );
};

const ProgressIndicators: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="relative">
        <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
          <div className="h-full bg-logo-blue rounded-full animate-expand" style={{width: "78%", animationDuration: "2.1s"}}></div>
        </div>
        <p className="text-xs mt-1 text-titanium-white/70">Research Pipeline: 78%</p>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
          <div className="h-full bg-plasma-violet rounded-full animate-expand" style={{width: "65%", animationDuration: "1.7s"}}></div>
        </div>
        <p className="text-xs mt-1 text-titanium-white/70">Community Growth: 65%</p>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-graphite-700/30 rounded-full overflow-hidden">
          <div className="h-full bg-quantum-red rounded-full animate-expand" style={{width: "92%", animationDuration: "2.5s"}}></div>
        </div>
        <p className="text-xs mt-1 text-titanium-white/70">Protocol Security: 92%</p>
      </div>
    </div>
  );
};

export default MissionTabContent;
