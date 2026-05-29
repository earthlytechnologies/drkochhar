import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import FloatingConcierge from "@/components/FloatingConcierge";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Kochhar Healthcare | Multi-Specialty Polyclinic, Malviya Nagar",
  description:
    "Advanced multi-specialty healthcare in South Delhi. Hospital-grade diagnostics, AI-assisted booking, and compassionate clinical care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${figtree.variable} font-sans antialiased bg-[#F8FAFC] text-[#0F172A]`}
      >
        <EmergencyBanner />
        <Navigation />
        {children}
        <Footer />
        <FloatingConcierge />
      </body>
    </html>
  );
}
