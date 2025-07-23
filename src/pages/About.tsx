
import React, { memo, useState } from 'react';
import AboutHero from '@/components/about/AboutHero';
import SimpleTeamSection from '@/components/about/SimpleTeamSection';

const About = memo(() => {
  console.log('About component rendering...');
  console.log('AboutHero:', AboutHero);
  console.log('SimpleTeamSection:', SimpleTeamSection);
  
  return (
    <div className="w-full relative min-h-screen bg-dark-base about-page hw-accelerated">
      {/* Minimal Background - No heavy effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/3 to-transparent blur-3xl"></div>
      </div>
      
      {/* Main Content Container - No animations */}
      <div className="relative z-10">
        {/* Test with just a simple div first */}
        <section className="pt-[75px] pb-4">
          <div className="container mx-auto px-4 max-w-8xl">
            <div>About Hero Section</div>
          </div>
        </section>

        {/* Simple Team Section */}
        <section className="py-4 relative">
          <div className="container mx-auto px-4 max-w-8xl">
            <div>Team Section</div>
          </div>
        </section>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
