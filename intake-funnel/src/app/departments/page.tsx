"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Stethoscope,
  Syringe,
  Heart,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

/* ─── data ─── */
const departments = [
  {
    id: "internal-medicine",
    title: "Internal Medicine & Chronic Care",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop",
    services: [
      "Comprehensive General Physician & Practitioner Consults (MBBS, MD)",
      "Diabetes, Thyroid, & Endocrine Management",
      "Hypertension, ECG & Preventive Cardiology",
      "Gastroenterology & Digestive Health",
      "Asthma, COPD & Nebulization Treatments",
      "Sleep Disorder Management",
    ],
    ctaLabel: "Consult Internal Medicine Specialist",
  },
  {
    id: "urgent-care",
    title: "Specialized Therapies & Acute Care",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    services: [
      "Infectious Diseases & Emergency Medicine (IV Antibiotics)",
      "Advanced Pain Management (Neuropathy, Burning Sensation)",
      "IV Therapy Suite (Multivitamin, Glutathione, and Iron Transfusions)",
      "Comprehensive Vaccination Center (Typhoid, TB, Travel)",
      "Minor Surgical Procedures (Ingrown Toenail / Nail Avulsion)",
    ],
    ctaLabel: "Consult Acute Care Specialist",
  },
  {
    id: "family-health",
    title: "Women's, Children's & Psychological Health",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop",
    services: [
      "Gynaecology Consultations",
      "Pediatric & Child Health Care",
      "Psychiatry, Psychology & Life Coaching Counseling",
      "Medical & Fitness Certificate Issuance",
    ],
    ctaLabel: "Consult Family Health Specialist",
  },
  {
    id: "dermatology-specialty",
    title: "Dermatology, ENT & Specialty Care",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    services: [
      "Nephrology & UTI Management (Kidney Stones, Bladder Infections)",
      "ENT (Ear, Nose, Throat) & Thoracentesis",
      "Dermatology & Clinical Skin Care",
      "Hair Fall & Alopecia Treatment",
      "Plastic Surgery Consults (Scar & Keloid Suture Treatments)",
    ],
    ctaLabel: "Consult Specialty Specialist",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

/* ─── desktop card ─── */
function DepartmentCard({ dept }: { dept: (typeof departments)[number] }) {
  const Icon = dept.icon;
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12">
      <div className="aspect-[21/9] rounded-xl overflow-hidden mb-8 border border-slate-100">
        <img src={dept.image} alt={dept.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#0369A1]" />
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 pt-1">
          {dept.title}
        </h3>
      </div>

      <ul className="space-y-3 mb-10">
        {dept.services.map((s) => (
          <li key={s} className="flex items-start gap-3 text-slate-600">
            <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed">{s}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button className="bg-[#0369A1] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#075985] transition-colors cursor-pointer flex items-center gap-2">
          {dept.ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <MessageCircle className="w-4 h-4" />
          Or use our 24/7 AI WhatsApp Triage.
        </p>
      </div>
    </div>
  );
}

/* ─── mobile accordion ─── */
function AccordionItem({
  dept,
  isOpen,
  onToggle,
}: {
  dept: (typeof departments)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = dept.icon;
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-5 text-left cursor-pointer"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#0369A1]" />
        </div>
        <span className="flex-1 text-base font-bold text-slate-900 tracking-tight">
          {dept.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">
              <div className="aspect-video rounded-xl overflow-hidden mb-5 border border-slate-100">
                <img src={dept.image} alt={dept.title} className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-2.5 mb-6">
                {dept.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#0369A1] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#075985] transition-colors w-full text-sm cursor-pointer">
                {dept.ctaLabel}
              </button>
              <p className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                <MessageCircle className="w-3.5 h-3.5" />
                Or use our 24/7 AI WhatsApp Triage.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── page ─── */
export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (i: number) => {
    setActiveTab(i);
    contentRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Promo Banner */}
      <div className="sticky top-0 z-40 bg-[#0369A1] text-white text-center py-2.5 px-4 text-sm font-semibold">
        💳 Ask about our &ldquo;Unlimited Monthly Consultation&rdquo; packages for
        comprehensive family coverage.
      </div>

      {/* Header */}
      <section className="py-10 md:py-24 text-center px-4 md:px-8">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.15em] text-[#0369A1] font-bold mb-4"
        >
          Centers of Excellence
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="text-3xl leading-tight md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Specialized Medical Departments
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="text-lg text-slate-500 max-w-2xl mx-auto mt-5 leading-relaxed"
        >
          Advanced diagnostic and treatment protocols delivered with compassionate, unhurried care.
        </motion.p>
      </section>

      {/* Desktop: Sidebar + Content */}
      <section className="hidden md:flex max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-24 gap-8">
        <div className="w-72 flex-shrink-0">
          <div className="sticky top-16 space-y-1.5">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mb-4 px-3">
              Directory
            </p>
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={dept.id}
                  onClick={() => handleTabClick(i)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                    isActive
                      ? "bg-[#0369A1] text-white shadow-lg shadow-sky-200/50"
                      : "text-slate-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? "text-sky-200" : "text-[#0369A1]"}`} />
                  <span className="font-semibold text-sm">{dept.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-8">
          {departments.map((dept, i) => (
            <div
              key={dept.id}
              ref={(el) => { contentRefs.current[i] = el; }}
              className="scroll-mt-20"
            >
              <DepartmentCard dept={dept} />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile: Accordion */}
      <section className="md:hidden max-w-2xl mx-auto px-4 pb-12 md:pb-24 space-y-3">
        {departments.map((dept, i) => (
          <AccordionItem
            key={dept.id}
            dept={dept}
            isOpen={openAccordion === i}
            onToggle={() => setOpenAccordion(openAccordion === i ? null : i)}
          />
        ))}
      </section>
    </main>
  );
}
