import { motion } from "framer-motion";
import logoImg from "@assets/logo_transparent.png";
import person1Img from "@assets/photo_2026-05-21_04-58-21_1779353908096.jpg";

const DARK_BG = "#0f0d0b";

const TEAM = [
  {
    img: person1Img,
    name: "Ane Snyman",
    role: "Founder & CEO",
    bio: "Serial brand builder with a track record of taking brands from zero to viral. Ane leads strategy and client partnerships, ensuring every campaign is designed to dominate — not just participate.",
    socials: {
      ig: "https://www.instagram.com/growth_metrics_marketing/",
      tiktok: "https://www.tiktok.com/@growth.metrics",
    },
  },
];

const VALUES = [
  { num: "01", title: "Obsessed with results", desc: "Every piece of content we make has one job — grow the brand. We measure everything." },
  { num: "02", title: "Platform-native thinking", desc: "We don't repurpose. We build for TikTok, Instagram, Meta, and Google the way each platform rewards." },
  { num: "03", title: "Radical transparency", desc: "You see every number, every report, every result. No smoke, no mirrors." },
  { num: "04", title: "Small team, big output", desc: "We stay lean so every client gets the A-team — not an intern with a template." },
];

export default function Team() {
  return (
    <div className="min-h-screen font-['Manrope'] overflow-x-hidden" style={{ backgroundColor: DARK_BG }}>

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <a href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-12 md:h-14 w-auto invert" />
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
          <a href="/#results" className="hover:text-white transition-colors">Results</a>
          <a href="/team" className="text-white">Team</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="/contact" className="bg-[#e5e1df] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors">
          Work With Us
        </a>
      </nav>

      {/* HEADER */}
      <div className="px-6 md:px-12 pt-20 pb-16 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-6"
        >
          The People Behind the Results
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Anton'] text-[clamp(3rem,7vw,7rem)] leading-[0.95] uppercase text-white"
        >
          MEET THE<br /><span className="text-[#e5e1df]">TEAM.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/40 text-lg max-w-xl mt-8 leading-relaxed"
        >
          A tight crew of strategists, creators, and data obsessives. No bloated agency overhead — just the people who actually do the work.
        </motion.p>
      </div>

      {/* TEAM CARDS */}
      <div className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-white/10 rounded-3xl overflow-hidden hover:border-white/25 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{member.role}</div>
                  <div className="text-white font-['Anton'] text-2xl uppercase">{member.name}</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/50 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.socials.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/30 hover:text-white/80 transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href={member.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/30 hover:text-white/80 transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div style={{ backgroundColor: "#181410" }} className="px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4"
          >
            How We Operate
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-['Anton'] text-[clamp(2.5rem,5vw,5rem)] leading-[1] uppercase text-white mb-16"
          >
            OUR<br /><span className="text-[#e5e1df]">VALUES.</span>
          </motion.h2>
          <div className="divide-y divide-white/5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12"
              >
                <span className="text-white/20 font-['Anton'] text-3xl w-16 shrink-0">{v.num}</span>
                <h3 className="font-['Anton'] text-2xl md:text-3xl text-white uppercase tracking-wide flex-1">{v.title}</h3>
                <p className="text-white/40 text-sm font-['Manrope'] max-w-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-2">Ready to work together?</p>
          <h2 className="font-['Anton'] text-3xl md:text-5xl uppercase text-white">LET'S BUILD YOUR BRAND.</h2>
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
