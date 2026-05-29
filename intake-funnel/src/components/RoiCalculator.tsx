"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [traffic, setTraffic] = useState(1000);
  const [fee, setFee] = useState(1000);

  const currentConversionRate = 0.04; // 4%
  const projectedConversionRate = 0.15; // 15%

  const currentPatients = Math.round(traffic * currentConversionRate);
  const projectedPatients = Math.round(traffic * projectedConversionRate);

  const currentRevenue = currentPatients * fee;
  const projectedRevenue = projectedPatients * fee;
  const additionalRevenue = projectedRevenue - currentRevenue;

  return (
    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Monthly Website Traffic</h3>
            <p className="text-sm text-slate-400 mb-4">How many visitors reach your site via SEO?</p>
            <input 
              type="range" 
              min="200" 
              max="5000" 
              step="100" 
              value={traffic} 
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm font-medium text-slate-300 mt-2">
              <span>{traffic.toLocaleString()} visitors</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Average Consultation Fee (₹)</h3>
            <input 
              type="range" 
              min="500" 
              max="3000" 
              step="100" 
              value={fee} 
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm font-medium text-slate-300 mt-2">
              <span>₹{fee.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-center space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">Current Bookings</p>
              <p className="text-2xl font-bold text-slate-300">{currentPatients}/mo</p>
              <p className="text-xs text-red-400 mt-1">At standard 4% conversion</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">With Earthly Systems</p>
              <p className="text-2xl font-bold text-primary">{projectedPatients}/mo</p>
              <p className="text-xs text-green-400 mt-1">At optimized 15% conversion</p>
            </div>
          </div>
          
          <div className="h-px w-full bg-slate-800"></div>
          
          <div>
            <p className="text-sm text-slate-400 mb-2">Projected Additional Monthly Revenue</p>
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              +₹{additionalRevenue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
