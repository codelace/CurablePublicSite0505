
import React from 'react';

interface AboutCallToActionProps {
  isVisible: boolean;
}

const AboutCallToAction: React.FC<AboutCallToActionProps> = ({ isVisible }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gunmetal-900 to-transparent h-32 z-20 flex justify-center items-end pb-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-logo-blue via-plasma-violet to-bio-green rounded-full opacity-75 group-hover:opacity-100 blur transition duration-400"></div>
        <a 
          href="/join" 
          className="relative px-10 py-3 bg-gunmetal-900 rounded-full border border-logo-blue/50 text-titanium-white font-bold flex items-center gap-2 transition transform hover:scale-105 duration-300"
        >
          <span>Join Our Mission</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
};

export default AboutCallToAction;
