
import React from 'react';

const Join = () => {
  // Replace this with the actual Google Form URL
  const formURL = "https://docs.google.com/forms/d/e/your-form-id/viewform";
  
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-titanium-white">
            Join <span className="text-arc-blue">Curable</span>DAO
          </h1>
          <p className="text-lg text-titanium-white/90">
            Become part of our global community and help shape the future of biomedical research
          </p>
        </div>
        
        <div className="bg-graphite-700/30 rounded-lg overflow-hidden border border-graphite-700/60 shadow-lg animate-fade-up">
          <iframe 
            src={`${formURL}#embedded=true`} 
            className="w-full h-[90vh] rounded-lg"
            title="Join CurableDAO"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
