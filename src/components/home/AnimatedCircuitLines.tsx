
import React from 'react';

const AnimatedCircuitLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Horizontal data flow lines */}
      <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent data-flow"></div>
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/30 to-transparent data-flow" style={{animationDuration: "7s"}}></div>
      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bio-green/30 to-transparent data-flow" style={{animationDuration: "9s"}}></div>
      <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-quantum-red/30 to-transparent data-flow" style={{animationDuration: "8s"}}></div>
      <div className="absolute top-[90%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bio-blue/30 to-transparent data-flow" style={{animationDuration: "10s"}}></div>
      
      {/* Vertical data flow lines */}
      <div className="absolute left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent data-flow-vertical"></div>
      <div className="absolute left-[75%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent data-flow-vertical" style={{animationDuration: "12s"}}></div>
      
      {/* Connection nodes */}
      <div className="absolute top-[30%] left-[15%] w-3 h-3 rounded-full bg-logo-blue/50 animate-pulse-dot"></div>
      <div className="absolute top-[50%] left-[75%] w-3 h-3 rounded-full bg-blue-400/60 animate-pulse-dot" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-[70%] left-[15%] w-2.5 h-2.5 rounded-full bg-bio-green/50 animate-pulse-dot" style={{animationDelay: "1.5s"}}></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(30,174,219,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,174,219,0.1)_1px,transparent_1px)]" style={{backgroundSize: "50px 50px"}}></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full bg-logo-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-[30%] left-[20%] w-40 h-40 rounded-full bg-blue-500/8 blur-3xl animate-pulse-glow" style={{animationDelay: "2s"}}></div>
    </div>
  );
};

export default AnimatedCircuitLines;
