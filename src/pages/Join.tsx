
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const Join = () => {
  // Google Form URL for joining CurableDAO
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdu5VMFl1uiLK0uIrWpYPn7WknpzhW7AeRNePRet1mxg5Tovg/viewform";
  
  return (
    <div className="container mx-auto px-4 py-16 pt-24 relative">
      {/* Background pattern specific to this page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CommandPatternBackground variant="nodes" intensity="medium" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          <CommandHUDHeader 
            title="Join CurableDAO"
            subtitle="Onboarding protocol initialized"
            statusText="MEMBER ONBOARDING" 
          />
          
          <div className="glass-panel p-6 mb-8">
            <p className="text-lg text-titanium-white/90 max-w-2xl">
              Become part of a global network accelerating life‑saving cures. Submit the form below and we'll
              welcome you to the community.
            </p>
          </div>
        </div>
        
        <div className="bg-graphite-700/30 rounded-lg overflow-hidden border border-graphite-700/60 shadow-lg animate-fade-up relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <CommandPatternBackground variant="grid" intensity="low" />
          </div>
          <iframe 
            src={`${formURL}?embedded=true`} 
            className="w-full h-[90vh] rounded-lg relative z-10"
            title="Join CurableDAO"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
