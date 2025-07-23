
import React from 'react';

interface AboutCallToActionProps {
  isVisible: boolean;
}

const AboutCallToAction: React.FC<AboutCallToActionProps> = ({ isVisible }) => {
  return (
    <div className={`fixed bottom-20 left-0 right-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/80 to-transparent h-32 z-20 flex justify-center items-end pb-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-500 backdrop-blur-sm`}>
      <div className="relative group magnetic-attraction">
        {/* Quantum glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-quantum-red via-warm-rose to-quantum-red rounded-full opacity-60 group-hover:opacity-100 blur-sm transition duration-400 animate-pulse"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-quantum-red/40 via-brand-charcoal/40 to-quantum-red/40 rounded-full opacity-40 group-hover:opacity-70 blur transition duration-400"></div>
        
        {/* Main button */}
        <a 
          href="/join" 
          className="btn-quantum-enhanced relative px-10 py-4 bg-gradient-to-r from-quantum-red to-warm-rose rounded-full border-2 border-quantum-red/50 text-white font-poppins font-bold flex items-center gap-3 transition transform duration-300 hover:scale-105 shadow-xl shadow-quantum-red/30"
        >
          {/* Enhanced text with better contrast */}
          <span className="text-white text-lg font-bold relative z-10 drop-shadow-lg">Join Our Mission</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl text-white relative z-10">→</span>
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
  );
};

export default AboutCallToAction;
