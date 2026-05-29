"use client";

import Link from "next/link";
import {
  FileText,
  MessageCircle,
  LayoutGrid,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const patientLinks = [
  { label: "Download Intake Form", href: "#", icon: FileText },
  { label: "Book via WhatsApp", href: "https://wa.me/918708939028", icon: MessageCircle, external: true },
  { label: "View All Services", href: "/departments", icon: LayoutGrid },
  { label: "Unlimited Consultation Plans", href: "#", icon: CreditCard },
];

const insurances = ["Star Health", "HDFC Ergo", "Max Bupa", "ICICI Lombard", "Apollo Munich"];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 — Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0369A1] flex items-center justify-center">
              <span className="text-lg font-extrabold text-white">K</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Dr. Kochhar Healthcare
              </p>
              <p className="text-xs text-slate-400">Multi-Specialty Polyclinic</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Combining international NHS standards with compassionate South Delhi
            neighborhood care. Advanced diagnostics, digital booking, and
            comprehensive chronic care management.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <p className="text-xs font-semibold text-[#0D9488]">
              MRCGP (UK) · CCEBDM Certified
            </p>
          </div>
        </div>

        {/* Col 2 — Patient Utility */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
            Patient Utility
          </h4>
          <ul className="space-y-3">
            {patientLinks.map((link) => {
              const Icon = link.icon;
              const Comp = link.external ? "a" : Link;
              const extraProps = link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <li key={link.label}>
                  <Comp
                    href={link.href}
                    {...(extraProps as Record<string, string>)}
                    className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#0369A1] transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#0369A1] transition-colors" />
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 text-slate-300" />
                    )}
                  </Comp>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Col 3 — Location & Hours */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
            Location & Hours
          </h4>
          <ul className="space-y-4 text-sm text-slate-600 mb-6">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
              <span>F-39, East of Kailash, New Delhi – 110065</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0 text-slate-400" />
              <a href="tel:+918708939028" className="hover:text-[#0369A1] transition-colors font-medium">
                +91 87089 39028
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0 text-slate-400" />
              <a href="mailto:care@drkochhar.com" className="hover:text-[#0369A1] transition-colors">
                care@drkochhar.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 flex-shrink-0 text-slate-400" />
              <span>Open until <strong className="text-slate-900">12:00 AM</strong></span>
            </li>
          </ul>

          {/* Stylized Maps Placeholder */}
          <div className="rounded-xl overflow-hidden border border-slate-200 h-28 bg-slate-100 flex items-center justify-center">
            <p className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Google Maps — East of Kailash, Delhi
            </p>
          </div>
        </div>

        {/* Col 4 — Accepted Insurances */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
            Accepted Insurances & Partners
          </h4>
          <div className="flex flex-wrap gap-2">
            {insurances.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 shadow-[0_1px_3px_rgb(0,0,0,0.03)]"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-sky-50 border border-sky-100">
            <p className="text-xs text-[#0369A1] font-semibold mb-1">
              Don&apos;t see your insurer?
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              We accept most major health insurance plans. Contact us for
              verification before your visit.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Dr. Kochhar Healthcare. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold transition-colors">
              Earthly Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
