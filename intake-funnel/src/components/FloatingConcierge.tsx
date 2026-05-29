"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Stethoscope, X, MessageCircle, AlertCircle, IndianRupee } from "lucide-react";

export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 md:mb-6 w-[calc(100vw-2rem)] md:w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#0369A1] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0369A1]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0369A1]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Dr. Kochhar&apos;s Assistant</h3>
                  <p className="text-xs text-sky-100 flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-5 bg-slate-50/50">
              <div className="mb-4 flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[#0369A1]">
                  <Stethoscope className="h-4 w-4" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-white border border-slate-200 p-3 shadow-sm">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Hi! I can help you book a slot, check clinic hours, or answer basic questions. What do you need?
                  </p>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-colors cursor-pointer">
                  <MessageCircle className="h-4 w-4" />
                  Book Appointment
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                  <AlertCircle className="h-4 w-4" />
                  Emergency / Walk-in
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-[#0369A1] hover:bg-[#0369A1] hover:text-white transition-colors cursor-pointer">
                  <IndianRupee className="h-4 w-4" />
                  Check Prices
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <div className="relative">
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#0D9488] animate-ping opacity-30" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
            isOpen ? "bg-slate-900 text-white" : "bg-[#0D9488] text-white"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
        </button>
      </div>
    </div>
  );
}
