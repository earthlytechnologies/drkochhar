"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Database, MapPin, Target, TrendingUp } from "lucide-react";

export default function EarthlyEcosystem() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const hoverEffect: any = {
    y: -5,
    scale: 1.01,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  return (
    <div className="bg-slate-950 py-24 border-y border-slate-900 relative z-20 overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Your current SEO brings traffic. This system converts it.
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Box 1: The Conversion Funnel */}
          <motion.div 
            variants={item}
            whileHover={hoverEffect}
            className="md:col-span-2 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
          >
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
            
            <div className="flex-1 space-y-4 relative z-10">
              <h3 className="text-2xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">1</span>
                Website Revamp
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We replace your current site with the high-speed Next.js funnel you just experienced above.
              </p>
            </div>
            <div className="w-full md:w-48 h-48 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors shrink-0 z-10">
               <div className="absolute inset-0 bg-emerald-500/5"></div>
               <div className="text-center">
                 <div className="w-20 h-20 rounded-full border-4 border-emerald-400 flex items-center justify-center mx-auto mb-2 shadow-[0_0_20px_rgba(52,211,153,0.3)] bg-slate-950">
                   <span className="text-emerald-400 font-bold text-2xl">99</span>
                 </div>
                 <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Performance</span>
               </div>
            </div>
          </motion.div>

          {/* Box 2: AI Patient Receptionist */}
          <motion.div 
            variants={item}
            whileHover={hoverEffect}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm shrink-0">4</span>
                AI Automations
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The WhatsApp bot you just tested, recovering 40% of lost after-hours leads.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-3 group-hover:border-emerald-500/30 transition-colors relative z-10">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div className="bg-[#123026] text-emerald-100 text-xs p-3 rounded-2xl rounded-tl-none border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                Slot confirmed for 4:00 PM.
              </div>
            </div>
          </motion.div>

          {/* Box 3: Pipeline & Analytics */}
          <motion.div 
            variants={item}
            whileHover={hoverEffect}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm shrink-0">5</span>
                CRM Tracking
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The dashboard above, tracking every rupee of marketing spend to actual booked slots.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 group-hover:border-emerald-500/30 transition-colors relative z-10">
              <div className="flex justify-between items-end">
                <Database className="w-5 h-5 text-emerald-400" />
                <span className="text-[10px] text-emerald-400/70 font-mono">+12 New Patients</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Hyper-Local SEO */}
          <motion.div 
            variants={item}
            whileHover={hoverEffect}
            className="md:col-span-2 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group flex flex-col md:flex-row-reverse gap-8 items-center relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>

            <div className="w-full md:w-48 h-48 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors shrink-0 z-10">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative">
                 <div className="w-24 h-24 bg-emerald-500/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-75"></div>
                 <MapPin className="w-10 h-10 text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] mx-auto" />
                 <div className="mt-4 bg-slate-950/80 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                   <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase whitespace-nowrap">Malviya Nagar</span>
                 </div>
               </div>
            </div>
            <div className="flex-1 space-y-4 relative z-10">
              <h3 className="text-2xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm shrink-0">2</span>
                Local SEO
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Dominating the map pack for high-intent Malviya Nagar searches.
              </p>
            </div>
          </motion.div>

          {/* Box 5: Precision Scale */}
          <motion.div 
            variants={item}
            whileHover={hoverEffect}
            className="md:col-span-3 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors"></div>

            <div className="flex-1 space-y-4 relative z-10">
              <h3 className="text-2xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm shrink-0">3</span>
                Performance Marketing
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Hyper-targeted Meta ads within a 5km radius to scale patient acquisition.
              </p>
            </div>
            <div className="w-full md:w-auto bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col gap-4 group-hover:border-emerald-500/30 transition-colors shrink-0 relative z-10">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Target className="w-5 h-5 text-emerald-400" /> Targeting:
                </div>
                <span className="text-white font-semibold">5km Radius</span>
              </div>
              <div className="w-full h-[1px] bg-slate-800"></div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <TrendingUp className="w-5 h-5 text-emerald-400" /> ROI:
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">Tracked Live</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
