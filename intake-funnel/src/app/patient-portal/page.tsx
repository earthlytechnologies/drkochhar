"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, CheckCircle2, Bot } from "lucide-react";

export default function PatientPortalPage() {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [chatStage, setChatStage] = useState(0);

  useEffect(() => {
    if (isBooking) {
      const t1 = setTimeout(() => setChatStage(1), 1000);
      const t2 = setTimeout(() => setChatStage(2), 2500);
      const t3 = setTimeout(() => setChatStage(3), 4000);
      const t4 = setTimeout(() => setChatStage(4), 5500);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    } else {
      setChatStage(0);
    }
  }, [isBooking]);

  const handleBook = () => {
    if (activeSymptom) {
      setIsBooking(true);
    }
  };

  const springConfig = { type: "spring", stiffness: 400, damping: 25 } as const;

  return (
    <main className="min-h-screen bg-[#FCFAF8] pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl leading-tight md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#0F172A] mb-4 md:mb-6">
            Patient Portal
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed px-2 md:px-0">
            Experience our zero-wait triage system. Select your symptoms below and our AI assistant will guide you through instant booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left: The Intake Form */}
          <div className="bg-white p-6 md:p-10 rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] rounded-tr-md rounded-bl-md shadow-[0_20px_40px_-15px_rgba(19,78,74,0.05)] border border-[#EBE5DF]">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0F172A] mb-6 md:mb-8">1. Describe Your Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              {[
                { id: "General Consult", emoji: "📋", text: "General Consult" },
                { id: "Fever/Infections", emoji: "🌡️", text: "Fever/Infections" },
                { id: "Chronic Care", emoji: "🩺", text: "Chronic Care" },
              ].map((chip) => (
                <motion.button
                  key={chip.id}
                  onClick={() => setActiveSymptom(chip.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-start gap-2 ${
                    activeSymptom === chip.id 
                      ? "border-[#134E4A] bg-teal-50" 
                      : "border-[#EBE5DF] bg-white hover:border-slate-300"
                  }`}
                >
                  <span className="text-3xl">{chip.emoji}</span>
                  <span className={`font-bold ${activeSymptom === chip.id ? "text-[#134E4A]" : "text-[#0F172A]"}`}>
                    {chip.text}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  disabled={isBooking}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#EBE5DF] bg-[#FCFAF8] focus:outline-none focus:border-[#134E4A] transition-colors text-base" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  disabled={isBooking}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#EBE5DF] bg-[#FCFAF8] focus:outline-none focus:border-[#134E4A] transition-colors text-base" 
                />
              </div>
              <motion.button 
                onClick={handleBook}
                disabled={!activeSymptom || isBooking}
                whileHover={(activeSymptom && !isBooking) ? { scale: 1.02 } : {}}
                whileTap={(activeSymptom && !isBooking) ? { scale: 0.98 } : {}}
                transition={springConfig as any}
                className={`px-6 md:px-10 py-4 md:py-5 rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-md rounded-bl-md font-bold text-lg transition-all w-full min-h-[56px] ${
                  activeSymptom && !isBooking
                    ? "bg-[#134E4A] text-white shadow-[0_20px_40px_-15px_rgba(19,78,74,0.3)]" 
                    : isBooking 
                      ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                      : "bg-[#FCFAF8] text-slate-400 cursor-not-allowed border border-[#EBE5DF]"
                }`}
              >
                {isBooking ? "Initiating Secure Chat..." : "Begin Triage"}
              </motion.button>
            </div>
          </div>

          {/* Right: The Live WhatsApp Simulation */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-[#EFEAE2] rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_40px_-15px_rgba(19,78,74,0.15)] border-8 border-white h-[500px] md:h-[600px] overflow-hidden flex flex-col relative">
              <div className="bg-[#134E4A] text-white p-4 -m-4 md:-m-6 mb-4 md:mb-6 rounded-t-xl md:rounded-t-[1.5rem] flex items-center gap-3 md:gap-4 z-10 shadow-md">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Kochhar Assistant</h3>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 px-2 pb-4">
                <AnimatePresence>
                  {chatStage >= 1 && (
                    <motion.div key="msg-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                      <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-[15px]">Hi! Dr. Kochhar's AI assistant here. We received your request for <strong>{activeSymptom}</strong>.</p>
                      </div>
                    </motion.div>
                  )}
                  {chatStage >= 2 && (
                    <motion.div key="msg-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                      <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm mt-2">
                        <p className="text-[15px]">Reply <strong>'1'</strong> to confirm a slot at 4:30 PM today.</p>
                      </div>
                    </motion.div>
                  )}
                  {chatStage >= 3 && (
                    <motion.div key="msg-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end mt-4">
                      <div className="bg-[#D9FDD3] text-slate-800 p-3 px-6 rounded-2xl rounded-tr-sm shadow-sm">
                        <p className="text-[15px] font-medium">1</p>
                      </div>
                    </motion.div>
                  )}
                  {chatStage >= 4 && (
                    <motion.div key="msg-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start mt-4">
                      <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-[15px] mb-2">Confirmed! ✅ Your slot is booked for 4:30 PM.</p>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#00A884]" />
                          <span className="text-sm font-medium">Digital Intake Form Attached</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input Mock */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#F0F2F5] p-4 flex items-center gap-3 rounded-b-[2rem]">
                <div className="flex-1 bg-white h-12 rounded-full px-6 flex items-center">
                  <span className="text-slate-400 text-sm">Type a message...</span>
                </div>
                <div className="w-12 h-12 bg-[#134E4A] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
