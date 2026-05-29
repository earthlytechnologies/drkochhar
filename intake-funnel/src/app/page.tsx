"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Stethoscope,
  Globe,
  Activity,
  HeartPulse,
  Droplet,
  Users,
  ArrowRight,
  Star,
  BadgeCheck,
  MessageCircle,
  Quote,
  Lock,
  CheckCircle2,
} from "lucide-react";

/* ── animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

/* ── data ── */
const triageChips = [
  { emoji: "🤒", label: "Fever / Flu" },
  { emoji: "💉", label: "BP / Diabetes" },
  { emoji: "💧", label: "IV Therapy" },
];

const credentials = [
  { icon: Award, text: "MD (Med, Delhi)" },
  { icon: Globe, text: "MRCGP from NHS U.K." },
  { icon: ShieldCheck, text: "Certified in Diabetes & Thyroid Mgmt (CCEBDM)" },
  { icon: Stethoscope, text: "15+ Years Clinical Excellence" },
];

const services = [
  { icon: Activity, title: "Infectious Diseases & Fever", desc: "Rapid diagnostics, IV antibiotics, and same-day pathology for acute infections." },
  { icon: HeartPulse, title: "Diabetes & Hypertension", desc: "Long-term metabolic management with ECG monitoring and endocrine protocols." },
  { icon: Droplet, title: "IV Therapy & Transfusions", desc: "Multivitamin, glutathione, and iron transfusion suites with clinical supervision." },
  { icon: Users, title: "Pediatric & Family Health", desc: "Comprehensive care for children, women's health, and family wellness programs." },
];

const reviews = [
  {
    text: "Finally, a doctor in South Delhi who actually listens. The WhatsApp booking system meant I didn't have to wait in a crowded room while feeling sick. Highly recommended.",
    author: "Priya S.",
    location: "East of Kailash",
  },
  {
    text: "Dr. Kochhar manages my father's diabetes perfectly. The automated follow-up reminders are a lifesaver for our family.",
    author: "Rahul M.",
    location: "Verified Patient",
  },
  {
    text: "Went in for an IV multivitamin therapy. The clinic is spotless, modern, and the entire process was seamless.",
    author: "Sneha K.",
    location: "Verified Patient",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ================================================================
          SECTION 1 — HIGH-CONVERSION HERO
          ================================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50/70 via-[#F8FAFC] to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy & Triage */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />
                Advanced Care in East of Kailash
              </span>

              <h1 className="text-3xl leading-tight md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 mb-4 md:mb-5">
                Expert Medical Care.
                <br />
                <span className="text-[#0369A1]">Zero Waiting Room Anxiety.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10">
                Comprehensive diagnostics, chronic care management, and instant
                digital booking with Dr. Ankit Kochhar.
              </p>

              {/* Interactive Triage Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6"
              >
                <p className="text-sm font-bold text-slate-900 mb-4">
                  What are your symptoms today?
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {triageChips.map((chip) => (
                    <button
                      key={chip.label}
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 hover:border-[#0D9488] hover:bg-teal-50 hover:text-[#0D9488] transition-all duration-200 cursor-pointer"
                    >
                      <span className="text-lg">{chip.emoji}</span>
                      {chip.label}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-[#0D9488] text-white font-bold py-3.5 rounded-xl hover:bg-[#0F766E] transition-colors cursor-pointer flex items-center justify-center gap-2 text-sm">
                  Start Digital Check-in
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right — Image + Floating Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2000&auto=format&fit=crop"
                  alt="Dr. Kochhar's modern polyclinic"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glassmorphic badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-80 bg-white/90 backdrop-blur-lg rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    🟢 Accepting Walk-ins & WhatsApp Bookings
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Open until 12:00 AM · East of Kailash
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — CREDENTIAL & AUTHORITY STRIP
          ================================================================ */}
      <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-sky-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-200 leading-snug">
                    {cred.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — QUICK-ACCESS CARE (POPULAR SERVICES)
          ================================================================ */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0369A1] mb-3">
              Popular Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Specialized Care, Instantly Accessible.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7 hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] hover:border-slate-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors">
                    <Icon className="w-6 h-6 text-[#0369A1]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {svc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 text-[#0369A1] font-semibold text-sm hover:text-[#075985] transition-colors group"
            >
              View all 20+ Departments & Protocols
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — DOCTOR AUTHORITY PROFILE
          ================================================================ */}
      <section className="py-12 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200 max-w-md mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                  alt="Dr. Ankit Kochhar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#0369A1]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">MRCGP (UK)</p>
                  <p className="text-xs text-slate-500">NHS-Trained Standard</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-[#0369A1] font-bold">
                Chief Physician & Founder
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Meet Dr. Ankit Kochhar.
              </h2>

              <p className="text-slate-500 font-medium">
                MBBS · MD (Internal Medicine) · MRCGP (UK) · CCEBDM
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Bringing international NHS U.K. standards to South Delhi. Dr. Kochhar
                believes in unhurried consultations, pinpoint diagnostics, and treating
                the root cause — not just the symptoms. Supported by a modern digital
                infrastructure, your health records and follow-ups are seamlessly managed.
              </p>

              {/* Signature Quote */}
              <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6 mt-4">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#0369A1]/20 fill-[#0369A1]/10" />
                <blockquote className="text-slate-700 italic leading-relaxed">
                  &ldquo;Every patient deserves a doctor who sits down, looks them in
                  the eye, and says — let&apos;s figure this out together.&rdquo;
                </blockquote>
                <p className="text-sm font-bold text-slate-900 mt-3">
                  — Dr. Ankit Kochhar
                </p>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#0369A1] text-white font-bold py-4 px-8 rounded-xl text-base hover:bg-[#075985] transition-colors cursor-pointer mt-2">
                Book with Dr. Kochhar
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4.5 — THE EARTHLY CARE PLANS
          ================================================================ */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Complete Peace of Mind for Your Family.
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Dr. Kochhar&apos;s exclusive monthly consultation packages ensure you never have to hesitate before seeking care.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl p-1 bg-gradient-to-b from-[#0D9488]/40 to-sky-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div className="bg-white rounded-[1.4rem] p-6 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Unlimited Monthly Care
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
                    Popular
                  </span>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-slate-900">₹2499</span>
                  <span className="text-slate-500 font-medium"> / month</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Unlimited General Physician Consultations for 30 Days.",
                    "Priority WhatsApp access to the AI Triage system.",
                    "10% off on in-house IV Therapies and Vaccinations.",
                    "Automated digital prescription refills.",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#0D9488] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#0F766E] transition-colors cursor-pointer flex items-center justify-center gap-2 text-lg shadow-[0_4px_14px_0_rgb(13,148,136,0.39)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.23)] hover:scale-[1.02] active:scale-100">
                  <Lock className="w-4 h-4 opacity-80" />
                  Subscribe & Secure Coverage
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — LOCAL SOCIAL PROOF (PATIENT REVIEWS)
          ================================================================ */}
      <section className="py-12 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0369A1] mb-3">
              Patient Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Trusted by Families Across South Delhi.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {review.author}
                    </p>
                    <p className="text-xs text-slate-400">{review.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
