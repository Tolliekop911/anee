import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import logoImg from "@assets/image_1778352511729.png";

const SERVICES = [
  { num: "01", title: "Social Media Marketing", desc: "Building cult audiences that actually buy. We turn followers into a pipeline." },
  { num: "02", title: "Content Creation", desc: "Editorial-grade visuals that stop the scroll and convert like direct response." },
  { num: "03", title: "Strategy", desc: "Data-backed roadmaps that outmaneuver the competition before you spend a dollar." },
  { num: "04", title: "Google Ads", desc: "Surgical intent-targeting that captures buyers exactly when they're ready." },
  { num: "05", title: "Meta Ads", desc: "Scaling revenue with ruthless efficiency. We train algorithms to find your best customers." },
];

const LOGOS = [
  "Shopify", "HubSpot", "Klaviyo", "ClickFunnels", "Meta", "Google",
  "TikTok", "LinkedIn", "Stripe", "Figma", "Notion", "Salesforce",
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

function Ticker() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="overflow-hidden py-6 bg-[#e5e1df] border-y border-black/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((logo, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8 text-black/40 font-bold uppercase tracking-[0.2em] text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 inline-block" />
            {logo}
          </span>
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
      <div className="shrink-0 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
        <svg width="12" height="12" viewBox="0 0 12 12" className="group-hover:invert transition-all">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
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
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroScrollRef,
    offset: ["start start", "end end"],
  });

  const c1Rotate = useTransform(heroScroll, [0, 1], [-18, -65]);
  const c1X     = useTransform(heroScroll, [0, 1], [-70, -260]);
  const c1Y     = useTransform(heroScroll, [0, 1], [20, -120]);
  const c1Scale = useTransform(heroScroll, [0, 1], [1, 0.85]);

  const c2Rotate = useTransform(heroScroll, [0, 1], [-5, 0]);
  const c2X      = useTransform(heroScroll, [0, 1], [-20, -20]);
  const c2Y      = useTransform(heroScroll, [0, 1], [0, -200]);
  const c2Scale  = useTransform(heroScroll, [0, 1], [1, 1.15]);

  const c3Rotate = useTransform(heroScroll, [0, 1], [10, 58]);
  const c3X      = useTransform(heroScroll, [0, 1], [50, 230]);
  const c3Y      = useTransform(heroScroll, [0, 1], [30, -100]);
  const c3Scale  = useTransform(heroScroll, [0, 1], [1, 0.85]);

  const textOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const textY       = useTransform(heroScroll, [0, 0.5], [0, -60]);

  return (
    <main style={{ backgroundColor: DARK_BG }} className="text-[#e5e1df] overflow-x-hidden font-['Manrope']">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md border-b border-white/5" style={{ backgroundColor: `${DARK_BG}cc` }}>
        <img src={logoImg} alt="GrowthMetrics" className="h-7 md:h-9 w-auto invert" />
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="/contact" className="bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
          Work With Us
        </a>
      </nav>

      {/* HERO */}
      <div ref={heroScrollRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center px-6 md:px-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${DARK_BG} 0%, ${DARK_BG} 60%, ${DARK_BG_DEEP} 100%)` }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(#e5e1df 1px, transparent 1px), linear-gradient(90deg, #e5e1df 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0 pt-20">
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative h-[300px] md:h-[380px] w-[280px] md:w-[360px]">
                <FanCard rotate={c1Rotate} x={c1X} y={c1Y} scale={c1Scale}
                  bg="bg-gradient-to-br from-[#9ca1a2] to-[#737373]" label="Meta Campaign" views="3.5M Views" delay={0.2} />
                <FanCard rotate={c2Rotate} x={c2X} y={c2Y} scale={c2Scale}
                  bg="bg-gradient-to-br from-[#e6dada] to-[#d4c4c4]" label="Content Series" views="8.2M Reach" delay={0.35} />
                <FanCard rotate={c3Rotate} x={c3X} y={c3Y} scale={c3Scale}
                  bg="bg-gradient-to-br from-[#e5e1df] to-[#c8c2bc]" label="Google Ads" views="450% ROAS" delay={0.5} />
              </div>
            </div>

            <motion.div style={{ opacity: textOpacity, y: textY }} className="w-full lg:w-1/2 lg:pl-12">
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
                {[["50B+", "Total Views"], ["600+", "Followers Gained"], ["450%", "Avg ROAS"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-['Anton'] text-3xl text-white">{val}</div>
                    <div className="text-[#737373] text-xs uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="flex gap-4">
                <a href="#contact" className="bg-[#e5e1df] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-white transition-colors">
                  Get Started
                </a>
                <a href="#results" className="border border-white/20 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:border-white/60 transition-colors">
                  See Results
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LOGO TICKER */}
      <Ticker />

      {/* STRATEGY SECTION */}
      <section className="bg-[#fcfcfc] py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-black/5" id="about">
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
              { val: "$100M+", label: "Revenue Generated" },
              { val: "45", label: "Brands Scaled" },
              { val: "5X", label: "Average ROI" },
              { val: "92%", label: "Client Retention" },
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

      {/* CARD SPREAD */}
      <section id="results" style={{ backgroundColor: DARK_BG }} className="py-24 md:py-36 px-6 md:px-12 text-center overflow-hidden">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4">
          What We Deliver
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-['Anton'] text-[clamp(2.5rem,6vw,6rem)] leading-[1] uppercase text-white mb-16">
          BILLIONS OF<br /><span className="text-[#e5e1df]">IMPRESSIONS</span> DELIVERED.
        </motion.h2>
        <div className="relative flex justify-center items-center h-[340px] md:h-[440px]">
          {[
            { rotate: -35, x: -280, y: 40, bg: "from-[#9ca1a2] to-[#737373]", label: "Brand Film", views: "12M" },
            { rotate: -20, x: -170, y: -10, bg: "from-[#e6dada] to-[#c8b8b8]", label: "Meta Ads", views: "8.5M" },
            { rotate: -8, x: -70, y: -30, bg: "from-[#737373] to-[#555]", label: "UGC Content", views: "6.2M" },
            { rotate: 5, x: 40, y: -30, bg: "from-[#e5e1df] to-[#c4bfbb]", label: "IG Reels", views: "9.1M" },
            { rotate: 18, x: 150, y: -10, bg: "from-[#9ca1a2] to-[#6a7071]", label: "TikTok Series", views: "14M" },
            { rotate: 32, x: 260, y: 40, bg: "from-[#e6dada] to-[#b8a8a8]", label: "Google Display", views: "5.8M" },
          ].map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: card.y, rotate: card.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: card.x } as React.CSSProperties}
              className="absolute w-[120px] h-[160px] md:w-[150px] md:h-[200px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className={`w-full h-full bg-gradient-to-br ${card.bg} flex flex-col justify-between p-3`}>
                <div className="w-5 h-5 rounded-full bg-black/20" />
                <div>
                  <div className="text-black/60 text-[9px] font-bold uppercase tracking-wider">{card.label}</div>
                  <div className="text-black/80 font-bold text-sm">{card.views} Views</div>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ backgroundColor: DARK_BG }} className="relative z-10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
            <div className="font-['Anton'] text-2xl text-white">50B+</div>
            <div className="text-[#9ca1a2] text-xs uppercase tracking-widest">Total Views</div>
          </motion.div>
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
              <div className="p-6 text-center border-x border-white/10">
                <img src={logoImg} alt="GrowthMetrics" className="h-5 w-auto invert mx-auto" />
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

      {/* LOGO CAROUSEL */}
      <div className="bg-[#fcfcfc] py-12 overflow-hidden border-y border-black/10">
        <p className="text-center text-black/30 uppercase tracking-[0.3em] text-xs font-bold mb-8">Trusted by ambitious brands</p>
        <div className="overflow-hidden">
          <div className="flex animate-ticker-reverse whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-10 text-black/25 font-['Anton'] text-xl tracking-wider">
                {logo}
              </span>
            ))}
          </div>
        </div>
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

      {/* FOOTER / CTA */}
      <footer id="contact" className="bg-[#fcfcfc] pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-20">
            <p className="text-black/30 uppercase tracking-[0.3em] text-xs font-bold mb-6">Ready to scale?</p>
            <h2 className="font-['Anton'] text-[clamp(3rem,8vw,8rem)] uppercase leading-none text-black mb-8">
              LET'S BUILD<br /><span className="text-[#737373]">SOMETHING</span><br />BIG.
            </h2>
            <a href="mailto:hello@growthmetrics.com"
              className="inline-block text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:opacity-80 transition-colors"
              style={{ backgroundColor: DARK_BG }}>
              hello@growthmetrics.com
            </a>
          </motion.div>

          <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <img src={logoImg} alt="GrowthMetrics" className="h-7 w-auto" />
            <div className="flex gap-8 text-black/40 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">Instagram</a>
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors">TikTok</a>
              <a href="#" className="hover:text-black transition-colors">Facebook</a>
            </div>
            <p className="text-black/30 text-sm">&copy; {new Date().getFullYear()} GrowthMetrics</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
