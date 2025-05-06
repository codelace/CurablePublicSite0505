
import React from 'react';

const Join = () => {
  // Google Form URL for joining CurableDAO
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdu5VMFl1uiLK0uIrWpYPn7WknpzhW7AeRNePRet1mxg5Tovg/viewform";
  
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-titanium-white">
            Join <span className="text-arc-blue">Curable</span>DAO
          </h1>
          <p className="text-lg text-titanium-white/90 max-w-2xl mx-auto">
            Become part of a global network accelerating life‑saving cures. Submit the form below and we'll
            welcome you to the community.
          </p>
        </div>
        
        <div className="bg-graphite-700/30 rounded-lg overflow-hidden border border-graphite-700/60 shadow-lg animate-fade-up">
          <iframe 
            src={`${formURL}?embedded=true`} 
            className="w-full h-[90vh] rounded-lg"
            title="Join CurableDAO"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
