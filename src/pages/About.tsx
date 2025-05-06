
import React from 'react';
import HeroStatus from '@/components/HeroStatus';
import { values } from '@/data/values';
import { people } from '@/data/people';
import { mission } from '@/data/mission';
import ValueCard from '@/components/ValueCard';
import ProfileCard from '@/components/ProfileCard';
import SectionDivider from '@/components/SectionDivider';

const statusItems = [
  { label: 'API CONNECTED', status: 'connected' as const },
  { label: 'DAO PROTOCOL v1.2.4', status: 'connected' as const },
  { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
  { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      {/* Hero Status */}
      <HeroStatus items={statusItems} />
      
      {/* Mission Section */}
      <section className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-titanium-white">
          The Future of <span className="text-gradient-purple-blue">Biomedical Research</span> is Decentralized
        </h1>
        <p className="text-lg text-titanium-white/90 leading-relaxed whitespace-pre-line">
          {mission}
        </p>
      </section>
      
      {/* Values Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-titanium-white">
          Our <span className="text-plasma-violet">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(value => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </section>
      
      <SectionDivider />
      
      {/* All Team Members Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-titanium-white">
          Our <span className="text-plasma-violet">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {people.map(person => (
            <ProfileCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
