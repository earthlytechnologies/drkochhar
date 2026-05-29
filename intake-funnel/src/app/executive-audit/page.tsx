"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import InteractiveLeakModel from "@/components/InteractiveLeakModel";
import {
  TrendingDown,
  AlertCircle,
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  BarChart3,
  Smartphone,
  Clock,
  Target,
  Rocket,
  Database,
  Bot,
  Globe,
  MapPin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const funnelSteps = [
  { label: "100% - Total Local Search Traffic", detail: "", percent: 100, count: "", color: "bg-sky-500" },
  { label: "-55% Drop-off: The 'Template Bounce'", detail: "Patients leaving due to 4s+ load times", percent: 45, count: "", color: "bg-red-500", isDropoff: true },
  { label: "-25% Drop-off: The 'Discovery Friction'", detail: "Patients abandoning because specific therapies are buried in paginated grids", percent: 20, count: "", color: "bg-red-400", isDropoff: true },
  { label: "-12% Drop-off: The 'After-Hours Leak'", detail: "Patients attempting to book after 8 PM with no automated system", percent: 8, count: "", color: "bg-orange-500", isDropoff: true },
  { label: "Remaining Retained Traffic", detail: "The tiny fraction that actually manages to book", percent: 8, count: "", color: "bg-emerald-500" },
];

const leaks = [
  { id: "01", title: "The Mobile Speed Collapse", loss: "₹2.4L / mo", text: "Your current site relies on a heavy, templated Boost 360 architecture. Mobile LCP (Largest Contentful Paint) exceeds 4.5s. In healthcare, a 3-second delay drops conversion by 50%. High-intent patients in Malviya Nagar are clicking your SEO links and bouncing before the page renders.", icon: Smartphone },
  { id: "02", title: "The Service Discovery Void", loss: "₹1.8L / mo", text: "High-margin therapies like IV Glutathione and Nebulization are buried on Page 2 and 3 of a generic grid. Patients do not click through pagination. If they don't see the specific treatment above the fold, they assume you don't offer it.", icon: Globe },
  { id: "03", title: "The After-Hours Capture Gap", loss: "₹3.2L / mo", text: "Illness doesn't respect operating hours. 40% of healthcare searches happen after 8 PM. Without an AI WhatsApp booking engine securing the slot instantly, these leads are calling competitors the next morning.", icon: Clock },
];

const solutionSteps = [
  { icon: Rocket, title: 'Next.js "Semi-Hospital" Architecture', desc: "Replacing the Boost 360 template with sub-second, custom-coded infrastructure. Every page loads in under 0.8s with hospital-grade SEO built into every route." },
  { icon: Bot, title: "AI WhatsApp Triage Engine", desc: "Instant 24/7 patient capture. The moment someone requests an appointment, the AI responds in under 3 seconds — confirming slots, answering triage questions, and locking in bookings." },
  { icon: Database, title: "CRM-Driven Retention", desc: "Automated follow-ups for chronic patients (Diabetes, Hypertension, Thyroid). Every patient enters a structured nurturing pipeline — no lead is ever lost again." },
];

export default function ExecutiveAuditPage() {
  useEffect(() => {
    document.body.style.background = "#0F172A";
    document.body.style.color = "#94A3B8";
    return () => { document.body.style.background = ""; document.body.style.color = ""; };
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-400 selection:bg-sky-500/30 selection:text-white">
      {/* ═══ SECTION 1 — EXECUTIVE SUMMARY ═══ */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(3,105,161,0.08),_transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
          {/* Glassmorphic banner */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-3xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-2xl p-10 md:p-14 mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-700/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-400">
              <Shield className="h-3.5 w-3.5" />
              Strategic Digital Growth Proposal · Confidential
            </p>

            <h1 className="text-3xl leading-tight md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Your Digital Infrastructure is <br className="hidden sm:block" />
              Actively Restricting Patient Acquisition.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Based on a deep technical audit of your current Boost 360 storefront and a structural analysis of how legacy web architecture leaks local traffic.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Prepared for <strong className="text-slate-300">Dr. Ankit Kochhar</strong> by Earthly Technologies.
            </p>
          </motion.div>

          {/* Metric Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500 font-bold mb-3">
                Legacy Template Architecture
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-red-400">&gt; 4.5s Mobile Load Time</p>
              <p className="text-sm text-slate-500 mt-2">Current Boost 360 framework performance.</p>
            </motion.div>

            <motion.div
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500 font-bold mb-3">
                Earthly Next.js Standard
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-emerald-400">&lt; 0.8s Mobile Load Time</p>
              <p className="text-sm text-slate-500 mt-2">The threshold required to retain high-intent patients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — FUNNEL DECAY ═══ */}
      <section className="py-12 md:py-24 border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="h-5 w-5 text-sky-400" />
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                The Healthcare Traffic Drop-off Model
              </h2>
            </div>
            <p className="text-slate-400 max-w-2xl">
              How legacy template sites leak patient traffic before they ever book.
            </p>
          </motion.div>

          <div className="space-y-5">
            {funnelSteps.map((step, i) => (
              <motion.div key={step.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    {step.isDropoff && <TrendingDown className="h-4 w-4 text-red-400" />}
                    <span className="text-sm font-semibold text-white">{step.label}</span>
                  </div>
                  <span className={`text-sm font-bold ${step.isDropoff ? "text-red-400" : i === funnelSteps.length - 1 ? "text-emerald-400" : "text-sky-400"}`}>
                    {step.count}
                  </span>
                </div>
                <div className="h-9 rounded-xl bg-slate-800/60 overflow-hidden border border-slate-700/40">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(step.percent, 2)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                    className={`h-full ${step.color} rounded-xl flex items-center justify-end pr-3`}
                  >
                    {step.percent >= 10 && <span className="text-xs font-bold text-white/90">{step.percent}%</span>}
                  </motion.div>
                </div>
                {step.detail && <p className="text-xs text-slate-500 mt-1.5">{step.detail}</p>}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
            className="mt-12 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6"
          >
            <p className="text-sky-300 font-semibold text-lg">
              &ldquo;Conclusion: Investing in traffic without fixing the capture infrastructure yields a negative ROI.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3 — REVENUE LEAKS (INTERACTIVE) ═══ */}
      <section className="py-12 md:py-24 border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <InteractiveLeakModel />
        </div>
      </section>

      {/* ═══ SECTION 4 — THE SOLUTION ═══ */}
      <section className="py-12 md:py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.06),_transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-5 w-5 text-[#0D9488]" />
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                The Earthly Infrastructure Solution
              </h2>
            </div>
            <p className="text-slate-400 max-w-2xl">
              A three-phase system to close every revenue leak identified above.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#0D9488]/50 via-[#0D9488]/20 to-transparent" />

            <div className="space-y-12">
              {solutionSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="relative">
                    <div className="absolute -left-8 md:-left-12 top-1 w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-900 border-2 border-[#0D9488]/40 flex items-center justify-center shadow-[0_0_12px_rgba(13,148,136,0.2)]">
                      <span className="text-xs font-bold text-[#0D9488]">{i + 1}</span>
                    </div>

                    {/* Glassmorphic tech card */}
                    <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#0D9488]/10 border border-[#0D9488]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#0D9488]" />
                        </div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — INVESTMENT ═══ */}
      <section className="py-12 md:py-24 border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="h-5 w-5 text-sky-400" />
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                The Commercial Blueprint
              </h2>
            </div>
            <p className="text-slate-400 max-w-xl mx-auto">
              Transparent, phased investment for measurable ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
            {/* Phase 1 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-sky-400 font-bold mb-4">Phase 1</p>
              <h3 className="text-xl font-extrabold text-white tracking-tight mb-3">Infrastructure Revamp</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Complete Next.js rebuild, AI WhatsApp integration, CRM setup with automated patient pipelines.
              </p>
              <div className="space-y-2.5 mb-8">
                {["Custom Next.js 14+ Architecture", "AI WhatsApp Booking Engine", "CRM & Patient Pipeline", "SEO-Optimized Routes", "Mobile-First Design"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-slate-700/40">
                <p className="text-xs text-slate-500 mb-1">One-Time Investment</p>
                <p className="text-2xl font-extrabold text-white">Custom Quote</p>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="rounded-2xl border border-[#0D9488]/20 bg-[#0D9488]/[0.04] backdrop-blur-xl p-8 md:p-10 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#0D9488]/20 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
                Recommended
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#0D9488] font-bold mb-4">Phase 2</p>
              <h3 className="text-xl font-extrabold text-white tracking-tight mb-3">The Growth Ecosystem</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Local SEO authority & performance Meta Ads within 5km of Malviya Nagar.
              </p>
              <div className="space-y-2.5 mb-8">
                {["Hyper-Local Meta Ads (3-5km)", "Google Business Optimization", "Monthly Reporting", "Content & Review Strategy", "Competitor Monitoring"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-[#0D9488]/15">
                <p className="text-xs text-slate-500 mb-1">Monthly Investment</p>
                <p className="text-2xl font-extrabold text-white">₹20,000 – ₹50,000<span className="text-sm font-normal text-slate-500"> /mo</span></p>
              </div>
            </motion.div>
          </div>

          {/* Local Monopoly Matrix */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="mb-16">
            <div className="rounded-3xl border border-slate-700/50 bg-slate-800/40 p-1 md:p-2 shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
              <div className="rounded-2xl bg-slate-900 border border-slate-700/50 p-6 md:p-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                {/* Background Map Simulation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #334155 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                
                {/* Radar Radius */}
                <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-[#0D9488]/40 bg-[#0D9488]/10 flex items-center justify-center">
                  <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-[#0D9488]/20 bg-[#0D9488]/5 flex items-center justify-center">
                    {/* Glowing Pin */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 rounded-full bg-[#0D9488]/30 animate-ping" />
                      <div className="w-8 h-8 rounded-full bg-[#0D9488] shadow-[0_0_20px_rgba(13,148,136,0.6)] flex items-center justify-center relative z-10">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute top-10 whitespace-nowrap bg-slate-800 border border-slate-600 px-3 py-1 rounded-md text-xs font-bold text-white shadow-lg z-20">
                        East of Kailash
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Annotations */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                  <span className="text-xs font-bold text-slate-200">Targeted Meta Ads Zone (5km)</span>
                </div>
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-xs font-bold text-slate-200">Google Local Service Ads Overlay</span>
                </div>
                <div className="absolute bottom-8 left-8 md:top-12 md:right-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-200">Geofenced High-Intent Capture</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              We stop wasting your budget on broad Delhi traffic. We build a <strong className="text-slate-200 font-semibold">digital fence around East of Kailash</strong>, ensuring that every family within this radius sees your clinic first when searching for healthcare.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="text-center">
            <button className="group relative inline-flex items-center gap-3 bg-sky-500 text-white font-bold py-5 px-12 rounded-2xl text-lg hover:bg-sky-400 transition-colors cursor-pointer shadow-[0_8px_30px_rgba(3,105,161,0.3)] hover:shadow-[0_12px_40px_rgba(3,105,161,0.4)]">
              <span className="absolute inset-0 rounded-2xl border-2 border-sky-400 animate-ping opacity-15" />
              <span className="relative flex items-center gap-3">
                Approve Architecture & Schedule Kickoff
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <p className="text-sm text-slate-500 mt-4">Valid for 14 days from date of presentation.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
