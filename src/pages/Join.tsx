
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const Join = () => {
  // Typeform URL for joining Curable Labs
  const formURL = "https://curablelabs.typeform.com/to/iaikPSbI";
  
  return (
    <div className="container mx-auto px-4 py-16 pt-24 relative">
      {/* Background pattern specific to this page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CommandPatternBackground variant="nodes" intensity="medium" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          <CommandHUDHeader 
            title="Join Curable Labs"
            subtitle="Onboarding protocol initialized"
            statusText="MEMBER ONBOARDING" 
          />
          
          <div className="glass-panel p-6 mb-8">
            <p className="text-lg text-foreground/90 max-w-2xl font-poppins">
              Become part of a global network accelerating life‑saving cures. Submit the form below and we'll
              welcome you to the community.
            </p>
          </div>
        </div>
        
        <div className="bg-brand-charcoal/30 rounded-lg overflow-hidden border border-quantum-red/60 shadow-lg animate-fade-up relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <CommandPatternBackground variant="grid" intensity="low" />
          </div>
          <iframe 
            src={`${formURL}?embedded=true`} 
            className="w-full h-[90vh] rounded-lg relative z-10"
            title="Join Curable Labs"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
