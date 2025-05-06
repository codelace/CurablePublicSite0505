
import React from 'react';
import { tokenRows } from '@/data/tokenRows';
import { tokenIntro, vestingText } from '@/data/tokenCopy';
import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import HUDGrid from '@/components/HUDGrid';
import { ArrowRight, CircleDollarSign, TrendingUp } from 'lucide-react';

const TokenTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto card-holo relative h-full">
      <CommandPatternBackground variant="grid" intensity="low" />
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="border-b border-graphite-700/40">
            <th className="px-4 py-3 text-left font-mono text-quantum-red">Category</th>
            <th className="px-4 py-3 text-right font-mono text-quantum-red">Allocation %</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index} 
              className={`
                ${index === rows.length - 1 ? 'border-t-2 border-graphite-700/60' : 'border-b border-graphite-700/20'} 
                ${row.cat.startsWith('—') ? 'text-titanium-white/60' : ''}
                hover:bg-dark-surface/40 transition-colors
              `}
            >
              <td className="px-4 py-2 text-left font-mono">
                {row.cat}
              </td>
              <td className="px-4 py-2 text-right font-mono">
                {row.pct}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const VestingSchedule = () => {
  return (
    <div className="card-holo p-4 relative h-full">
      <CommandPatternBackground variant="nodes" intensity="low" />
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-mono text-sm text-titanium-white/70">Core Team</span>
            <span className="font-mono text-sm text-plasma-violet">4 year vesting, 1 year cliff</span>
          </div>
          <div className="h-3 bg-graphite-700/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-plasma-violet rounded-full animate-[vesting_2s_ease-out_forwards]"
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 prose prose-invert max-w-none text-titanium-white/80 text-sm">
        <div dangerouslySetInnerHTML={{ __html: vestingText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bio-blue">$1</strong>').replace(/\n/g, '<br/>') }} />
      </div>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HUDGrid variant="standard" color="violet" intensity="low" />
      </div>
      
      {/* Intro */}
      <div className="max-w-5xl mx-auto relative z-10">
        <CommandHUDHeader 
          title="CURE Token Economics"
          subtitle="Decentralized biomedical incentive mechanism"
          statusText="TOKENOMICS MODULE" 
          className="mb-4"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Token Intro Panel */}
          <div className="glass-panel p-4 relative group overflow-hidden">
            {/* Add subtle animated background for glass panel */}
            <div className="absolute inset-0 bg-dark-surface/40 rounded-lg -z-10 backdrop-blur-md"></div>
            
            {/* Add animated corners */}
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t border-l border-quantum-red/60 rounded-tl-sm group-hover:border-quantum-red/90 transition-colors duration-300"></div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t border-r border-bio-blue/60 rounded-tr-sm group-hover:border-bio-blue/90 transition-colors duration-300"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b border-l border-bio-blue/60 rounded-bl-sm group-hover:border-bio-blue/90 transition-colors duration-300"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b border-r border-quantum-red/60 rounded-br-sm group-hover:border-quantum-red/90 transition-colors duration-300"></div>
            
            <div className="flex items-start gap-2 h-full">
              <CircleDollarSign className="text-quantum-red w-5 h-5 mt-1 shrink-0" />
              <p className="text-sm text-titanium-white/90 leading-relaxed">
                {tokenIntro}
              </p>
            </div>
          </div>
          
          {/* Token Table */}
          <div className="md:col-span-2">
            <div className="mb-1 font-mono text-sm text-titanium-white flex items-center">
              <span className="text-quantum-red mr-2">&gt;</span> Token Allocation
              <TrendingUp className="ml-2 text-plasma-violet w-4 h-4" />
            </div>
            <TokenTable rows={tokenRows} />
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Vesting Schedule */}
          <div>
            <div className="mb-1 font-mono text-sm text-titanium-white">
              <span className="text-quantum-red">&gt;</span> Vesting Schedule
            </div>
            <VestingSchedule />
          </div>
          
          {/* Call-to-Action */}
          <div className="md:col-span-2">
            <Card className="text-center p-4 glow-hover h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2 text-titanium-white">
                <span className="text-quantum-red">&gt;</span> Get Involved
              </h3>
              <p className="text-titanium-white/80 mb-4 text-sm">
                Join the Curable DAO community and contribute to the future of decentralized biomedical research.
              </p>
              <Link 
                to="/join" 
                className="bg-quantum-red text-dark-base hover:bg-quantum-red/90 font-mono font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(255,51,102,0.3)] hover:shadow-[0_0_20px_rgba(255,51,102,0.5)] transition-all duration-300 relative overflow-hidden group px-4 py-2 rounded-lg mx-auto inline-flex"
              >
                <span className="relative z-10">JOIN THE DAO</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-quantum-red to-quantum-red/90 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
