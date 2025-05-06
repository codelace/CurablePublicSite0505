
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mission } from '@/data/mission';
import { people } from '@/data/people';
import ProfileCard from '@/components/ProfileCard';
import SectionDivider from '@/components/SectionDivider';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';

const About = () => {
  return (
    <div className="container px-4 py-8">
      {/* Mission Section */}
      <div className="mb-12 animate-fade-up">
        <div className="inline-block px-3 py-1 mb-2 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40">
          OUR MISSION
        </div>
        <h1 className="text-3xl font-bold text-titanium-white mb-4">
          Building the Future of <span className="text-arc-blue">Biomedical Research</span>
        </h1>
        <p className="text-titanium-white/90 max-w-3xl mb-6">{mission.intro}</p>
        
        <div className="mt-4">
          <a 
            href="https://binding-db-integrator-1-codelace77.replit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-plasma-violet hover:bg-plasma-violet/90 text-white font-bold flex items-center gap-2"
            >
              The Next Frontier
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Core values section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-titanium-white mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-titanium-white mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <ProfileCard key={index} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
