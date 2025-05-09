
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/GradientText';

const JoinTabContent: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto text-center">
      <Card className="p-8 bg-gunmetal-900/70 backdrop-blur-xl border border-graphite-700/60" variant="elevated" glowColor="red">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-titanium-white">
          <GradientText variant="multi" animate={true} className="holo-scan">Join CurableDAO</GradientText>
        </h2>
        <p className="text-titanium-white/90 mb-6 text-base sm:text-lg data-surge">
          Help decentralize the discovery of tomorrow's cures.
        </p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button className="btn-primary py-6 hover:scale-105 transition-all energy-pulse" asChild>
              <Link to="/join" className="flex flex-col items-center justify-center">
                <span className="text-base font-bold">Apply to Launch a Cure</span>
                <span className="text-xs opacity-80 mt-1">For researchers & institutions</span>
              </Link>
            </Button>
            <Button className="btn-secondary py-6 hover:scale-105 transition-all energy-pulse" asChild>
              <Link to="/join" className="flex flex-col items-center justify-center">
                <span className="text-base font-bold">Join the DAO</span>
                <span className="text-xs opacity-80 mt-1">For contributors & investors</span>
              </Link>
            </Button>
          </div>
          
          {/* Molecular orbiting particles - purely decorative */}
          <OrbitalParticles />
        </div>
      </Card>
    </section>
  );
};

const OrbitalParticles: React.FC = () => {
  return (
    <div className="relative h-8 opacity-60">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="relative w-32 h-8">
          <div className="absolute top-4 left-16 w-1 h-1 rounded-full bg-logo-blue animate-orbit"></div>
          <div className="absolute top-4 left-16 w-1.5 h-1.5 rounded-full bg-plasma-violet animate-orbit" style={{animationDelay: "0.5s", animationDirection: "reverse"}}></div>
          <div className="absolute top-4 left-16 w-0.5 h-0.5 rounded-full bg-bio-green animate-orbit" style={{animationDelay: "1s"}}></div>
        </div>
      </div>
    </div>
  );
};

export default JoinTabContent;
