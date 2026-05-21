import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logoImg from "@assets/logo_transparent.png";
import processPersonImg from "@assets/photo_2026-05-21_04-59-08_1779353997617.jpg";

const STEPS = [
  {
    num: "01",
    stage: "DISCOVERY",
    title: "Extraction",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    desc: "We dismantle your complex problems through clinical analysis, isolating the core technical and creative objectives required for high-tier performance.",
  },
  {
    num: "02",
    stage: "STRATEGY",
    title: "Blueprint",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    desc: "Defining the invisible architecture. We craft a technical and visual roadmap that ensures stability, scalability, and absolute cinematic immersion.",
  },
  {
    num: "03",
    stage: "EXECUTION",
    title: "Materialize",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    desc: "The construction phase. Using cutting-edge 3D engines and custom-built frontends, we bring the vision into a functional, tangible digital reality.",
  },
  {
    num: "04",
    stage: "DEPLOY",
    title: "Refinement",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    desc: 'Final polishing to achieve the "Invisible" standard. We optimize motion, light, and performance until the experience feels effortless and elite.',
  },
];

function StepCard({ step, i }: { step: typeof STEPS[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: i * 48 }}
      className="relative flex flex-col border border-white/10 rounded-2xl p-8 w-full max-w-[260px] min-h-[420px] justify-between hover:border-white/25 transition-colors group"
      >
      {/* Icon */}
      <div>
        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white/90 group-hover:border-white/25 transition-all mb-10">
          {step.icon}
        </div>
        <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">{step.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
      </div>

      {/* Stage number */}
      <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mt-8">
        {step.num} / {step.stage}
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <div className="min-h-screen font-['Manrope'] overflow-x-hidden" style={{ backgroundColor: "#0f0d0b" }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <a href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-7 md:h-9 w-auto invert" />
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="text-white">Process</a>
          <a href="/#results" className="hover:text-white transition-colors">Results</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="/contact" className="bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
          Work With Us
        </a>
      </nav>

      {/* HEADER */}
      <div className="px-6 md:px-12 pt-20 pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6"
          >
            How We Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Anton'] text-[clamp(3rem,7vw,7rem)] leading-[0.95] uppercase text-white"
          >
            THE<br /><span className="text-[#e5e1df]">PROCESS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/40 text-lg max-w-xl mt-8 leading-relaxed"
          >
            Four ruthlessly engineered phases. Every project runs through this framework — no shortcuts, no guesswork, no exceptions.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-full lg:w-[340px] h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img src={processPersonImg} alt="GrowthMetrics team" className="w-full h-full object-cover object-top" />
        </motion.div>
      </div>

      {/* CARDS */}
      <div className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">Ready to start?</p>
          <h2 className="font-['Anton'] text-3xl md:text-5xl uppercase text-white">LET'S EXTRACT YOUR VISION.</h2>
        </div>
        <a
          href="/contact"
          className="shrink-0 bg-[#e5e1df] text-black font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white transition-colors"
        >
          Start a Project →
        </a>
      </div>
    </div>
  );
}
