
import React from 'react';
import { tokenRows } from '@/data/tokenRows';
import { tokenIntro, vestingText } from '@/data/tokenCopy';
import { Link } from 'react-router-dom';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import HUDGrid from '@/components/HUDGrid';
import { ArrowRight, CircleDollarSign, TrendingUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TokenTable = ({ rows }) => {
  return (
    <div className="card-holo relative h-full overflow-hidden">
      <CommandPatternBackground variant="grid" intensity="high" animated={true} color="blue" />
      <div className="relative z-10">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-graphite-700/60">
              <TableHead className="px-2 py-1 text-left font-mono text-quantum-red text-xs w-3/4">Category</TableHead>
              <TableHead className="px-2 py-1 text-right font-mono text-quantum-red text-xs w-1/4">Allocation %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow 
                key={index} 
                className={`
                  ${index === rows.length - 1 ? 'border-t-2 border-graphite-700/60' : 'border-b border-graphite-700/30'} 
                  ${row.cat.startsWith('—') ? 'text-titanium-white/60' : ''}
                  hover:bg-dark-surface/50 transition-colors
                `}
              >
                <TableCell className="px-2 py-1 text-left font-mono text-xs">
                  {row.cat}
                </TableCell>
                <TableCell className="px-2 py-1 text-right font-mono text-xs">
                  {row.pct}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const VestingSchedule = () => {
  return (
    <div className="card-holo relative h-full overflow-hidden">
      <CommandPatternBackground variant="nodes" intensity="high" animated={true} color="violet" />
      <div className="space-y-2 relative z-10 p-2">
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-mono text-xs text-titanium-white/80">Core Team</span>
            <span className="font-mono text-xs text-plasma-violet">4 year vesting, 1 year cliff</span>
          </div>
          <div className="h-2 bg-graphite-700/60 rounded-full overflow-hidden">
            <div 
              className="h-full bg-plasma-violet rounded-full animate-[vesting_2s_ease-out_forwards]"
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 prose prose-invert max-w-none text-titanium-white/90 text-xs leading-tight relative z-10 p-2">
        <div dangerouslySetInnerHTML={{ __html: vestingText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bio-blue">$1</strong>').replace(/\n/g, '<br/>') }} />
      </div>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div className="container mx-auto p-4 relative">
      {/* Background pattern with increased visibility */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HUDGrid variant="dense" color="violet" intensity="high" />
      </div>
      
      {/* Intro */}
      <div className="max-w-5xl mx-auto relative z-10">
        <CommandHUDHeader 
          title="CURE Token Economics"
          subtitle="Decentralized biomedical incentive mechanism"
          statusText="TOKENOMICS MODULE" 
          className="mb-3"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Token Intro Panel */}
          <div className="glass-panel p-3 relative group overflow-hidden">
            {/* Enhanced background pattern */}
            <CommandPatternBackground variant="circuit" intensity="high" animated={true} color="multi" />
            <div className="absolute inset-0 bg-dark-surface/50 rounded-lg -z-10 backdrop-blur-md"></div>
            
            {/* Add animated corners */}
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t border-l border-quantum-red/70 rounded-tl-sm group-hover:border-quantum-red transition-colors duration-300"></div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t border-r border-bio-blue/70 rounded-tr-sm group-hover:border-bio-blue transition-colors duration-300"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b border-l border-bio-blue/70 rounded-bl-sm group-hover:border-bio-blue transition-colors duration-300"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b border-r border-quantum-red/70 rounded-br-sm group-hover:border-quantum-red transition-colors duration-300"></div>
            
            <div className="flex items-start gap-2 relative z-10">
              <CircleDollarSign className="text-quantum-red w-4 h-4 mt-1 shrink-0" />
              <p className="text-xs text-titanium-white leading-tight">
                {tokenIntro}
              </p>
            </div>
          </div>
          
          {/* Token Table */}
          <div>
            <div className="mb-1 font-mono text-xs text-titanium-white flex items-center">
              <span className="text-quantum-red mr-2">&gt;</span> Token Allocation
              <TrendingUp className="ml-2 text-plasma-violet w-3 h-3" />
            </div>
            <TokenTable rows={tokenRows} />
          </div>
          
          {/* Vesting Schedule */}
          <div>
            <div className="mb-1 font-mono text-xs text-titanium-white">
              <span className="text-quantum-red mr-2">&gt;</span> Vesting Schedule
            </div>
            <VestingSchedule />
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="mt-3">
          {/* Call-to-Action */}
          <div className="glass-panel p-3 text-center relative group overflow-hidden">
            <CommandPatternBackground variant="matrix" intensity="high" animated={true} color="green" />
            <div className="absolute inset-0 bg-dark-surface/60 backdrop-blur-md -z-10"></div>
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t border-l border-bio-blue/70 rounded-tl-sm"></div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t border-r border-bio-blue/70 rounded-tr-sm"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b border-l border-bio-blue/70 rounded-bl-sm"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b border-r border-bio-blue/70 rounded-br-sm"></div>
            <h3 className="text-sm font-poppins font-bold text-titanium-white mb-1 relative z-10">
              <span className="text-quantum-red">&gt;</span> Get Involved
            </h3>
            <p className="text-titanium-white/90 mb-2 text-xs relative z-10">
              Join the Curable DAO community and contribute to the future of decentralized biomedical research.
            </p>
            <Link 
              to="/join" 
              className="bg-quantum-red text-white hover:bg-quantum-red/90 font-poppins font-bold flex items-center gap-2 shadow-[0_0_12px_hsl(0_100%_67%/0.3)] hover:shadow-[0_0_20px_hsl(0_100%_67%/0.5)] transition-all duration-300 relative overflow-hidden group px-3 py-1.5 rounded-lg mx-auto inline-flex text-sm z-10"
            >
              <span className="relative z-10">JOIN THE DAO</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-red to-quantum-red/90 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

