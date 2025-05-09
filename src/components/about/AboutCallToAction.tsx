
import React from 'react';

interface AboutCallToActionProps {
  isVisible: boolean;
}

const AboutCallToAction: React.FC<AboutCallToActionProps> = ({ isVisible }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gunmetal-900 to-transparent h-24 z-20 flex justify-center items-end pb-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-quantum-red/40 via-plasma-violet/40 to-quantum-red/40 rounded-full opacity-60 group-hover:opacity-90 blur transition duration-400"></div>
        <a 
          href="/join" 
          className="relative px-8 py-2.5 bg-gunmetal-900 rounded-full border border-quantum-red/30 text-titanium-white font-medium flex items-center gap-2 transition transform duration-300"
        >
          <span>Join Our Mission</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
};

export default AboutCallToAction;
