"use client";

import { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { AlertCircle, TrendingDown, Activity, Settings2 } from "lucide-react";

// Animated counter component
function AnimatedNumber({ value, prefix = "", suffix = "", className = "" }: { value: number, prefix?: string, suffix?: string, className?: string }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const animation = animate(motionValue, value, {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString("en-IN"));
      }
    });
    return animation.stop;
  }, [value, motionValue]);

  return (
    <span className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function InteractiveLeakModel() {
  const [traffic, setTraffic] = useState(1500);
  const [ltv, setLtv] = useState(2500);

  // Calculations
  const bounceTraffic = Math.round(traffic * 0.55);
  const bounceRevenueLoss = bounceTraffic * ltv;
  
  const remainingTraffic = traffic - bounceTraffic;
  const afterHoursTraffic = Math.round(remainingTraffic * 0.30);
  const afterHoursRevenueLoss = afterHoursTraffic * ltv;

  const totalRevenueLoss = bounceRevenueLoss + afterHoursRevenueLoss;
  const potentialRecapture = totalRevenueLoss; // Assuming we can recapture this with the new system

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <Activity className="h-5 w-5 text-sky-400" />
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          Predictive Revenue Leakage Calculator
        </h2>
      </div>
      <p className="text-slate-400 mb-8 max-w-3xl">
        Because we do not have access to your private analytics, use the sliders below to input your estimated monthly traffic and consultation fee. The model will calculate your exact structural revenue leak in real-time.
      </p>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* The Control Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
              <Settings2 className="w-4 h-4 text-slate-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Control Panel</h3>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="text-sm font-medium text-slate-400">Monthly SEO Traffic</label>
                  <span className="text-lg font-bold text-white">{traffic.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-sky-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-600 font-medium">
                  <span>500</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="text-sm font-medium text-slate-400">Avg. Patient LTV</label>
                  <span className="text-lg font-bold text-white">₹{ltv.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-emerald-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-600 font-medium">
                  <span>₹500</span>
                  <span>₹10,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Real-Time Calculations */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1: Template Bounce */}
            <motion.div layout className="rounded-2xl border border-red-500/20 bg-slate-800/40 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(220,38,38,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingDown className="w-24 h-24 text-red-500" />
              </div>
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.1em] text-red-400/80 font-bold mb-2">Leak 01</p>
                <h3 className="text-lg font-extrabold text-white tracking-tight mb-4">The Template Bounce Leak</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[60px]">
                  Industry benchmark bounce rate for sites loading slower than 4 seconds (like Boost 360). These patients leave before reading a single word.
                </p>
                <div className="pt-4 border-t border-red-500/10">
                  <p className="text-xs text-slate-500 mb-1">Lost Revenue (55% Traffic)</p>
                  <AnimatedNumber 
                    value={bounceRevenueLoss} 
                    prefix="₹" 
                    className="text-3xl font-extrabold text-red-400" 
                  />
                  <span className="text-sm text-slate-500 font-medium ml-2">/ mo</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: After-Hours Friction */}
            <motion.div layout className="rounded-2xl border border-orange-500/20 bg-slate-800/40 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(249,115,22,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertCircle className="w-24 h-24 text-orange-500" />
              </div>
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.1em] text-orange-400/80 font-bold mb-2">Leak 02</p>
                <h3 className="text-lg font-extrabold text-white tracking-tight mb-4">The After-Hours Friction</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[60px]">
                  Patients who find you after 8 PM but leave because there is no automated booking or instant WhatsApp capture.
                </p>
                <div className="pt-4 border-t border-orange-500/10">
                  <p className="text-xs text-slate-500 mb-1">Lost Revenue (30% Remainder)</p>
                  <AnimatedNumber 
                    value={afterHoursRevenueLoss} 
                    prefix="₹" 
                    className="text-3xl font-extrabold text-orange-400" 
                  />
                  <span className="text-sm text-slate-500 font-medium ml-2">/ mo</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: The Earthly Recovery Matrix */}
          <motion.div layout className="rounded-2xl border border-slate-700/50 bg-slate-900 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1),_transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                The Earthly Recovery Matrix
              </p>
              <h3 className="text-slate-300 mb-8 font-medium">Estimated Monthly Revenue Leaked by Current Infrastructure</h3>
              
              <div className="mb-10">
                <AnimatedNumber 
                  value={totalRevenueLoss} 
                  prefix="₹" 
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-red-500 tracking-tighter drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]" 
                />
              </div>

              <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/30">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2">
                  Potential Recaptured Revenue via Next.js + AI Triage
                </p>
                <AnimatedNumber 
                  value={potentialRecapture} 
                  prefix="+" 
                  className="text-3xl font-extrabold text-[#0D9488] drop-shadow-[0_0_15px_rgba(13,148,136,0.4)]" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
