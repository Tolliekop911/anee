import React, { useRef } from "react";
import { motion, useInView, MotionValue } from "framer-motion";
import logoImg from "@assets/logo_transparent.png";
import ceoImg from "@assets/photo_2026-05-17_03-09-05_1779001781858.jpg";
import heroPersonImg from "@assets/photo_2026-05-21_04-58-21_1779353908096.jpg";

import clientTechnoFresh from "@assets/photo_2026-05-17_03-14-52_(2)_1779002162325.jpg";
import clientSmoddo from "@assets/photo_2026-05-17_03-14-52_1779002162326.jpg";
import clientKubera from "@assets/photo_2026-05-17_03-14-51_1779002162326.jpg";
import clientKinzie from "@assets/photo_2026-05-17_03-14-50_1779002162326.jpg";
import clientFarmers from "@assets/photo_2026-05-17_03-14-49_(2)_1779002162326.jpg";
import clientPostNet from "@assets/photo_2026-05-17_03-14-49_1779002162327.jpg";
import clientPositiveStrides from "@assets/photo_2026-05-17_03-14-48_1779002162327.jpg";
import clientScrumptious from "@assets/photo_2026-05-17_03-14-47_1779002162327.jpg";
import clientDaKine from "@assets/photo_2026-05-17_03-14-46_1779002162327.jpg";
import clientSheerPerfection from "@assets/photo_2026-05-17_03-14-45_1779002162328.jpg";
import clientAgaSmor from "@assets/photo_2026-05-17_03-14-44_1779002162328.jpg";
import clientHausOfSauce from "@assets/photo_2026-05-17_03-14-43_1779002162328.jpg";
import clientBarrelProof from "@assets/photo_2026-05-17_03-14-41_1779002162328.jpg";
import clientHairNails from "@assets/photo_2026-05-17_03-14-40_1779002162329.jpg";
import clientAssessmentSystems from "@assets/photo_2026-05-17_03-14-38_1779002162329.jpg";

const CLIENT_LOGOS = [
  { src: clientTechnoFresh, alt: "TechnoFresh" },
  { src: clientSmoddo, alt: "SMODDO" },
  { src: clientKubera, alt: "Kubera Markets" },
  { src: clientKinzie, alt: "Kinzie" },
  { src: clientFarmers, alt: "Farmers Trust" },
  { src: clientPostNet, alt: "PostNet" },
  { src: clientPositiveStrides, alt: "Positive Strides" },
  { src: clientScrumptious, alt: "Scrumptious Brands" },
  { src: clientDaKine, alt: "Da Kine Hawaiian" },
  { src: clientSheerPerfection, alt: "Sheer Perfection" },
  { src: clientAgaSmor, alt: "Aga Smör" },
  { src: clientHausOfSauce, alt: "Haus of Sauce" },
  { src: clientBarrelProof, alt: "Barrel Proof" },
  { src: clientHairNails, alt: "Hair & Nails 4U" },
  { src: clientAssessmentSystems, alt: "Assessment Systems" },
];

const SERVICES = [
  { num: "01", title: "Social Media Marketing", desc: "Building cult audiences that actually buy. We turn followers into a pipeline." },
  { num: "02", title: "Content Creation", desc: "Editorial-grade visuals that stop the scroll and convert like direct response." },
  { num: "03", title: "Strategy", desc: "Data-backed roadmaps that outmaneuver the competition before you spend a dollar." },
  { num: "04", title: "Google Ads", desc: "Surgical intent-targeting that captures buyers exactly when they're ready." },
  { num: "05", title: "Meta Ads", desc: "Scaling revenue with ruthless efficiency. We train algorithms to find your best customers." },
];

const COMPARISON = [
  "Strategy before execution",
  "Conversion-focused content",
  "Clear ROI tracking & reporting",
  "Real testing & optimisation",
  "Transparent reporting",
  "Dedicated account team",
  "Performance guarantees",
];

const TESTIMONIALS = [
  { quote: "Better than expected. Our ROAS went from 1.8x to 6.4x in 90 days.", name: "Sarah K.", role: "Founder, Lumina Beauty" },
  { quote: "They actually understand performance AND aesthetics. Rare combination.", name: "Marcus T.", role: "CMO, Workflow Inc." },
  { quote: "Revenue tripled. Our content finally looks as good as our product.", name: "Priya L.", role: "CEO, Aura Wellness" },
  { quote: "The strategy alone was worth 10x what we paid. Results backed it up.", name: "James R.", role: "Director, Peak Commerce" },
];

const DARK_BG = "#0f0d0b";
const DARK_BG_DEEP = "#181410";

function FanCard({ rotate, x, y, scale, bg, label, views, delay }: {
  rotate: MotionValue<number> | number;
  x: MotionValue<number> | number;
  y: MotionValue<number> | number;
  scale?: MotionValue<number> | number;
  bg: string; label: string; views: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate, x, y, scale }}
      className="absolute w-[160px] h-[210px] md:w-[200px] md:h-[270px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
    >
      <div className={`w-full h-full ${bg} flex flex-col justify-between p-4`}>
        <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm" />
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-black/60 mb-1">{label}</div>
          <div className="text-lg font-bold text-black/80">{views}</div>
        </div>
      </div>
    </motion.div>
  );
}

function ClientLogoTicker({ reverse = false }: { reverse?: boolean }) {
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-8 ${reverse ? "animate-ticker-reverse" : "animate-ticker"} whitespace-nowrap`}>
        {items.map((logo, i) => (
          <div key={i} className="shrink-0 flex items-center justify-center h-20 w-44 mx-3">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto max-w-[160px] object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceRow({ num, title, desc, i }: { num: string; title: string; desc: string; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-black/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-default hover:bg-black/[0.02] transition-colors px-6 md:px-12"
    >
      <span className="text-black/20 font-['Anton'] text-3xl w-16 shrink-0">{num}</span>
      <h3 className="font-['Anton'] text-3xl md:text-4xl text-black uppercase tracking-wide flex-1 group-hover:text-[#737373] transition-colors">{title}</h3>
      <p className="text-black/50 text-sm md:text-base font-['Manrope'] max-w-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ScrollCard({ quote, name, role }: { i: number; total: number; quote: string; name: string; role: string }) {
  return (
    <div className="shrink-0 w-[320px] md:w-[380px] bg-white border border-black/10 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
      <div className="flex gap-1">
        {[...Array(5)].map((_, j) => (
          <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#000"><path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4L7 9.2 3.2 11.5l1.3-4L1 5h4.5z"/></svg>
        ))}
      </div>
      <p className="font-['Manrope'] text-black/80 leading-relaxed text-sm">"{quote}"</p>
      <div>
        <div className="font-bold text-black text-sm">{name}</div>
        <div className="text-black/40 text-xs">{role}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ backgroundColor: DARK_BG }} className="text-[#e5e1df] overflow-x-hidden font-['Manrope']">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-white/5" style={{ backgroundColor: `${DARK_BG}cc` }}>
        <a href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-14 md:h-16 w-auto" />
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="/team" className="hover:text-white transition-colors">Team</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="/contact" className="bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
          Work With Us
        </a>
      </nav>

      {/* HERO — fixed height, no black gap */}
      <div className="relative h-screen flex items-center px-6 md:px-12 pt-20" style={{ background: `linear-gradient(135deg, ${DARK_BG} 0%, ${DARK_BG} 60%, ${DARK_BG_DEEP} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(#e5e1df 1px, transparent 1px), linear-gradient(90deg, #e5e1df 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative h-[420px] md:h-[560px] w-[300px] md:w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img src={heroPersonImg} alt="GrowthMetrics" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Founder</div>
                <div className="text-white font-['Anton'] text-xl uppercase">GrowthMetrics</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-full lg:w-1/2 lg:pl-12">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Data-Driven Creative
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Anton'] text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] uppercase text-white mb-8">
              MARKETING<br />THAT BUILDS<br /><span className="text-[#e5e1df]">BRANDS.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#737373] text-lg max-w-md leading-relaxed mb-10">
              We combine high-end creative with ruthless performance analytics. Every client gets measurably bigger.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 mb-10">
              {[["5M+", "Total Views"], ["15+", "Brands Worked With"], ["3X", "Avg Engagement Growth"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-['Anton'] text-3xl text-white">{val}</div>
                  <div className="text-[#737373] text-xs uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="flex gap-4">
              <a href="/contact" className="bg-[#e5e1df] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-white transition-colors">
                Get Started
              </a>
              <a href="#results" className="border border-white/20 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:border-white/60 transition-colors">
                See Results
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CLIENT LOGO TICKER */}
      <div className="bg-[#f5f2ef] border-y border-black/8 py-6 overflow-hidden">
        <p className="text-center text-black/30 uppercase tracking-[0.3em] text-[10px] font-bold mb-5">Trusted by ambitious brands</p>
        <ClientLogoTicker />
      </div>

      {/* STRATEGY SECTION */}
      <section className="bg-[#fcfcfc] py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Our Approach
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-['Anton'] text-[clamp(2.5rem,5vw,5rem)] leading-[1] uppercase text-black">
              STRATEGY THAT GETS RESULTS.<br /><span className="text-[#737373]">EVERY TIME.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black/50 text-lg mt-8 max-w-lg leading-relaxed">
              We don't guess. We analyse, model, and execute. Every campaign is a calculated strike built on data before a single creative goes live.
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { val: "5M+", label: "Total Content Views" },
              { val: "15+", label: "Brands Worked With" },
              { val: "3X", label: "Avg Engagement Growth" },
              { val: "90%", label: "Client Satisfaction" },
            ].map(({ val, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ backgroundColor: DARK_BG }} className="rounded-2xl p-8">
                <div className="font-['Anton'] text-4xl md:text-5xl text-[#e5e1df]">{val}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest mt-2">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CEO SECTION */}
      <section id="about" className="bg-[#fcfcfc] py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] shrink-0"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[480px] mx-auto lg:mx-0 shadow-2xl">
              <img src={ceoImg} alt="CEO — GrowthMetrics" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Founder & CEO</div>
                <div className="text-white font-['Anton'] text-2xl uppercase">GrowthMetrics</div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Who We Are
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-['Anton'] text-[clamp(2.5rem,5vw,5rem)] leading-[1] uppercase text-black mb-8">
              MARKETING<br />THAT BUILDS<br /><span className="text-[#737373]">BRANDS.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black/50 text-lg leading-relaxed mb-12 max-w-lg">
              We combine high-end creative with ruthless performance analytics. Every client gets measurably bigger.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-10 mb-12">
              {[["5M+", "Total Views"], ["15+", "Brands Worked With"], ["3X", "Avg Engagement"], ["90%", "Client Satisfaction"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-['Anton'] text-4xl md:text-5xl text-black">{val}</div>
                  <div className="text-black/40 text-xs uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4">
              <a href="/contact" className="bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[#0f0d0b] transition-colors">
                Get Started
              </a>
              <a href="#results" className="border border-black/20 text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:border-black/60 transition-colors">
                See Results
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="bg-[#fcfcfc] py-16 md:py-24 overflow-hidden">
        <div className="px-6 md:px-12 mb-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4">
            What We Do
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-['Anton'] text-[clamp(2.5rem,5vw,5rem)] uppercase leading-none text-black">
            THE FULL<br /><span className="text-[#737373]">ARSENAL.</span>
          </motion.h2>
        </div>
        <div className="divide-y divide-black/10 border-t border-black/10">
          {SERVICES.map((s, i) => <ServiceRow key={i} {...s} i={i} />)}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ backgroundColor: DARK_BG }} className="py-24 md:py-36 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4 text-center">
            Why Us
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-['Anton'] text-[clamp(2rem,4.5vw,4.5rem)] uppercase leading-none text-white text-center mb-16">
            MORE THAN ORDINARY.<br /><span className="text-[#e5e1df]">SEE THE DIFFERENCE.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
              <div className="p-6 text-[#737373] text-xs uppercase tracking-widest font-bold">Benefits</div>
              <div className="p-6 flex items-center justify-center border-x border-white/10">
                <img src={logoImg} alt="GrowthMetrics" className="h-6 w-auto" />
              </div>
              <div className="p-6 text-center text-[#737373] text-xs uppercase tracking-widest font-bold">Others</div>
            </div>
            {COMPARISON.map((item, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                <div className="p-5 text-white/60 text-sm font-['Manrope']">{item}</div>
                <div className="p-5 flex justify-center items-center border-x border-white/5">
                  <div className="w-6 h-6 rounded-full bg-[#e5e1df]/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#e5e1df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="p-5 flex justify-center items-center">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="#737373" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLIENT LOGO CAROUSEL — reverse direction */}
      <div className="bg-[#f5f2ef] py-10 overflow-hidden border-y border-black/8">
        <p className="text-center text-black/30 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Brands we've grown</p>
        <ClientLogoTicker reverse />
      </div>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: DARK_BG }} className="py-24 md:py-36 overflow-hidden">
        <div className="px-6 md:px-12 mb-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Client Wins
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-['Anton'] text-[clamp(2.5rem,5vw,5rem)] uppercase leading-none text-white">
            BETTER THAN<br /><span className="text-[#e5e1df]">EXPECTED.</span>
          </motion.h2>
        </div>
        <div className="flex gap-5 px-6 md:px-12 overflow-x-auto pb-4 scrollbar-none">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <ScrollCard i={i} total={TESTIMONIALS.length} {...t} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#fcfcfc] pt-12 pb-10 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={logoImg} alt="GrowthMetrics" className="h-14 w-auto invert" />
          <div className="flex gap-8 text-black/40 text-sm font-bold uppercase tracking-widest">
            <a href="https://www.instagram.com/growth_metrics_marketing/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@growth.metrics" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">TikTok</a>
            <a href="https://www.facebook.com/profile.php?id=61580258575596" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
          </div>
          <p className="text-black/30 text-sm">&copy; {new Date().getFullYear()} GrowthMetrics</p>
        </div>
      </footer>
    </main>
  );
}
