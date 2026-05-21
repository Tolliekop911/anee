import { useState } from "react";
import { motion } from "framer-motion";
import logoImg from "@assets/logo_transparent.png";

const PROJECT_TYPES = ["Social Media", "Content Creation", "Google Ads", "Meta Ads", "Strategy", "Other"];

const SOCIALS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    label: "INSTAGRAM",
    handle: "@growth_metrics_marketing",
    href: "https://www.instagram.com/growth_metrics_marketing/",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
    label: "TIKTOK",
    handle: "@growth.metrics",
    href: "https://www.tiktok.com/@growth.metrics",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    label: "FACEBOOK",
    handle: "Growth Metrics",
    href: "https://www.facebook.com/profile.php?id=61580258575596",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  function toggleType(type: string) {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen font-['Manrope']" style={{ backgroundColor: "#0f0d0b" }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <a href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-12 md:h-14 w-auto invert" />
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
          <a href="/#results" className="hover:text-white transition-colors">Results</a>
          <a href="/team" className="hover:text-white transition-colors">Team</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
        <a href="/contact" className="bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
          Work With Us
        </a>
      </nav>

      {/* MAIN */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">

        {/* LEFT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 px-8 md:px-14 py-14 border-r border-white/8"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start justify-center h-full gap-6 py-20"
            >
              <div className="w-12 h-12 rounded-full border border-[#e5e1df]/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l5 5 7-7" stroke="#e5e1df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-['Anton'] text-4xl uppercase text-white">Inquiry Sent.</h2>
              <p className="text-white/40 max-w-sm">We'll be in touch shortly. In the meantime, follow the process.</p>
              <button onClick={() => setSent(false)} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mt-4">
                Send Another →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-lg">
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-transparent border-0 border-b border-white/20 pb-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-transparent border-0 border-b border-white/20 pb-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${
                        selected.includes(type)
                          ? "border-[#e5e1df] text-[#e5e1df] bg-[#e5e1df]/10"
                          : "border-white/20 text-white/50 hover:border-white/40 hover:text-white/70"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Message</label>
                <textarea
                  placeholder="Tell us about your project goals..."
                  rows={6}
                  className="bg-transparent border-0 border-b border-white/20 pb-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 border border-white/30 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-all"
                >
                  Send Inquiry
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* RIGHT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[480px] px-8 md:px-14 py-14 flex flex-col gap-12"
        >
          {/* Location */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">Location</p>
            <h2 className="font-['Anton'] text-[clamp(2.5rem,5vw,4rem)] leading-[1] uppercase text-white">
              LONDON / UK<br />REMOTE / WORLD
            </h2>
          </div>

          {/* Email */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Email Us</p>
            <a
              href="mailto:growthmetricssmm@gmail.com"
              className="text-[#e5e1df] text-lg font-['Manrope'] hover:text-white transition-colors"
            >
              growthmetricssmm@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">Follow the Process</p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 hover:bg-white/[0.03] transition-all"
                >
                  <div className="text-white/50 group-hover:text-white/80 transition-colors shrink-0">
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">{s.label}</div>
                    <div className="text-white/80 text-sm font-['Manrope'] truncate">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
