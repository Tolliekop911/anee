import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import logoImg from "@assets/logo_transparent.png";
import PricingSections from "@/components/pricing-sections";

const DARK_BG = "#0f0d0b";

export default function Pricing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-['Manrope'] overflow-x-hidden" style={{ backgroundColor: DARK_BG }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <a href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-14 md:h-16 w-auto invert" />
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
          <a href="/pricing" className="text-white">Pricing</a>
          <a href="/team" className="hover:text-white transition-colors">Team</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/contact" className="hidden md:inline-flex bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
            Work With Us
          </a>
          <button className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col pt-24 px-8 pb-10" style={{ backgroundColor: DARK_BG }}>
          <div className="flex flex-col gap-8 text-3xl font-['Anton'] uppercase text-white/80">
            {([["/#services", "Services"], ["/process", "Process"], ["/pricing", "Pricing"], ["/team", "Team"], ["/contact", "Contact"]] as [string, string][]).map(([href, label]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <a href="/contact" onClick={() => setOpen(false)} className="mt-auto bg-[#e5e1df] text-black text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-full text-center hover:bg-white transition-colors">
            Work With Us
          </a>
        </div>
      )}

      {/* HEADER */}
      <div className="px-6 md:px-12 pt-20 pb-12 max-w-7xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6">
          Pricing
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Anton'] text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] uppercase text-white">
          PLANS BUILT<br /><span className="text-[#737373]">TO SCALE.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/40 text-lg max-w-xl mx-auto mt-8 leading-relaxed">
          Transparent packages for every stage of growth — from establishing your presence to running a full marketing department.
        </motion.p>
      </div>

      {/* FULL PRICING CONTENT */}
      <PricingSections />

      {/* CTA */}
      <div className="border-t border-white/5 mt-16 px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">Not sure which plan?</p>
          <h2 className="font-['Anton'] text-3xl md:text-5xl uppercase text-white">LET'S FIND YOUR FIT.</h2>
        </div>
        <a href="/contact" className="shrink-0 bg-[#e5e1df] text-black font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white transition-colors">
          Talk to Us →
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#fcfcfc] pt-12 pb-10 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={logoImg} alt="GrowthMetrics" className="h-14 w-auto invert" />
          <div className="flex gap-8 text-black/40 text-sm font-bold uppercase tracking-widest">
            <a href="https://www.instagram.com/growth_metrics_marketing/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@growth.metrics" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">TikTok</a>
            <a href="https://www.facebook.com/profile.php?id=61580258575596" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
          </div>
          <div className="flex flex-wrap gap-5 text-black/30 text-xs font-bold uppercase tracking-widest justify-center">
            <Link href="/terms" className="hover:text-black transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-black transition-colors">Refund Policy</Link>
          </div>
          <p className="text-black/30 text-sm">&copy; {new Date().getFullYear()} GrowthMetrics</p>
        </div>
      </footer>
    </div>
  );
}
