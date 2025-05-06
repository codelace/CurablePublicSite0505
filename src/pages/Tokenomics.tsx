import React from 'react';
import { tokenRows } from '@/data/tokenRows';
import Card from '@/components/Card';
import { Link } from 'react-router-dom';

const TokenTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto card-holo">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="border-b border-graphite-700/40">
            <th className="px-6 py-4 text-left font-mono text-arc-blue">Category</th>
            <th className="px-6 py-4 text-right font-mono text-arc-blue">Allocation %</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index} 
              className={`
                ${index === rows.length - 1 ? 'border-t-2 border-graphite-700/60' : 'border-b border-graphite-700/20'} 
                ${row.cat.startsWith('—') ? 'text-titanium-white/60' : ''}
              `}
            >
              <td className="px-6 py-4 text-left font-mono">
                {row.cat}
              </td>
              <td className="px-6 py-4 text-right font-mono">
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
    <div className="card-holo p-8">
      <h3 className="text-xl font-bold mb-6 text-titanium-white">Vesting Schedule</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-mono text-sm text-titanium-white/70">Core Team</span>
            <span className="font-mono text-sm text-arc-blue">4 year vesting, 1 year cliff</span>
          </div>
          <div className="h-4 bg-graphite-700/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-arc-blue rounded-full animate-[vesting_2s_ease-out_forwards]"
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-titanium-white">
          <span className="text-arc-blue">CURE</span> Token Economics
        </h1>
        <p className="text-lg text-titanium-white/90 leading-relaxed">
          The CURE token powers the Curable ecosystem, aligning incentives across all stakeholders
          and providing governance rights within the DAO. Our token design emphasizes long-term
          sustainability and aligns with our mission of accelerating biomedical innovation.
        </p>
      </div>
      
      {/* Token Table */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-titanium-white">Token Allocation</h2>
        <TokenTable rows={tokenRows} />
      </div>
      
      {/* Vesting Schedule */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-titanium-white">Vesting Schedule</h2>
        <VestingSchedule />
      </div>
      
      {/* Call-to-Action */}
      <div className="max-w-2xl mx-auto">
        <Card className="text-center p-8">
          <h3 className="text-2xl font-bold mb-4 text-titanium-white">Get Involved</h3>
          <p className="text-titanium-white/80 mb-6">
            Join the Curable DAO community and contribute to the future of decentralized biomedical research.
          </p>
          <Link to="/join" className="btn-primary inline-block">
            JOIN THE DAO
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Tokenomics;
