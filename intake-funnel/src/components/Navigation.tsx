"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Lock,
  MessageCircle,
  UserCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Departments", href: "/departments" },
  { label: "Patient Portal", href: "/patient-portal" },
];

const drawerNavLinks = [
  { label: "Our Departments", href: "/departments" },
  { label: "Patient Resources", href: "#" },
  { label: "About Dr. Kochhar", href: "#" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="bg-[#0369A1] text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Clinic Open until 12 AM
          </span>
          <a
            href="tel:+918708939028"
            className="hidden font-semibold tracking-wide sm:inline-block hover:text-white/80 transition-colors"
          >
            Emergency: +91 87089 39028
          </a>
        </div>
      </div>

      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-[0_1px_3px_rgb(0,0,0,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0369A1]">
              <span className="text-lg font-extrabold text-white">K</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-slate-900">
                Dr. Kochhar Healthcare
              </p>
              <p className="text-xs text-slate-500">
                Multi-Specialty Polyclinic · East of Kailash
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sky-50 text-[#0369A1] font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Executive Audit */}
            <Link
              href="/executive-audit"
              className="group ml-3 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <Lock className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
              Executive Audit
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 transition-colors md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile Concierge Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-white"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-bold text-slate-900">
                Dr. Kochhar Healthcare
              </p>
              <button
                onClick={closeMenu}
                className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-8 px-5 py-6">
              {/* Actions */}
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  How can we help?
                </h2>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="https://wa.me/918708939028"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex w-full items-center gap-4 rounded-2xl bg-[#0D9488] p-5 text-lg font-bold text-white active:scale-[0.98] transition-transform"
                  >
                    <MessageCircle className="h-6 w-6 shrink-0" />
                    Book via WhatsApp
                  </a>
                  <Link
                    href="/patient-portal"
                    onClick={closeMenu}
                    className="flex w-full items-center gap-4 rounded-2xl bg-[#0369A1] p-5 text-lg font-bold text-white active:scale-[0.98] transition-transform"
                  >
                    <UserCircle className="h-6 w-6 shrink-0" />
                    Patient Portal
                  </Link>
                </div>
              </div>

              {/* Nav Links */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Explore
                </p>
                <nav className="mt-3">
                  {drawerNavLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-slate-100 py-4 text-base font-semibold text-slate-900 active:text-[#0369A1]"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Executive Audit Card */}
              <Link
                href="/executive-audit"
                onClick={closeMenu}
                className="block rounded-2xl bg-slate-900 p-6 active:scale-[0.98] transition-transform"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Dr. Kochhar
                </p>
                <p className="mt-1.5 text-lg font-bold text-white">
                  View your Earthly Executive Audit
                </p>
                <ArrowRight className="mt-3 h-5 w-5 text-sky-400" />
              </Link>

              <div className="flex-1" />

              {/* Footer */}
              <div className="border-t border-slate-100 pt-5 text-sm text-slate-400">
                <p>F-39, East of Kailash, New Delhi</p>
                <p className="mt-1">care@drkochhar.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
