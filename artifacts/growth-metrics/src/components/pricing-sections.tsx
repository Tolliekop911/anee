import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

/*
 * ─────────────────────────────────────────────────────────────
 *  PLACEHOLDER CHECKOUT LINKS
 *  Replace each `#checkout-...` below with the real Stripe Payment
 *  Link or Paystack payment URL for that plan.
 *  e.g. https://buy.stripe.com/xxxxxxxx  or  https://paystack.shop/pay/xxxxxxxx
 * ─────────────────────────────────────────────────────────────
 */
export const CHECKOUT = {
  foundation: "#checkout-marketing-foundation",
  growth: "#checkout-marketing-growth",
  scale: "#checkout-marketing-scale",
  accelerate: "#checkout-marketing-accelerate",
  enterprise: "/contact",
  webStarter: "#checkout-website-starter",
  webProfessional: "#checkout-website-professional",
  webPremium: "#checkout-website-premium",
};

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  best: string;
  features: string[];
  href: string;
  cta: string;
  featured?: boolean;
};

const MARKETING: Plan[] = [
  {
    name: "Foundation",
    price: "$299",
    period: "/month",
    tagline: "For businesses that need a professional, consistent online presence.",
    best: "Startups & small businesses establishing their online presence.",
    href: CHECKOUT.foundation,
    cta: "Subscribe",
    features: [
      "Social media strategy",
      "1 platform management",
      "8 social media posts / month",
      "4 short-form videos / month",
      "Caption writing & hashtags",
      "Basic content calendar",
      "Basic community management",
      "Monthly performance report",
      "Monthly strategy check-in",
    ],
  },
  {
    name: "Growth",
    price: "$499",
    period: "/month",
    tagline: "For businesses ready to grow their audience and generate more engagement.",
    best: "Growing brands that want consistent content + active growth.",
    href: CHECKOUT.growth,
    cta: "Subscribe",
    features: [
      "Everything in Foundation, plus:",
      "2 social media platforms",
      "12 social media posts / month",
      "8 short-form videos / month",
      "Content planning & creative direction",
      "Community management",
      "Basic competitor research",
      "Social media optimization",
      "Monthly strategy meeting",
    ],
  },
  {
    name: "Scale",
    price: "$999",
    period: "/month",
    tagline: "For businesses that want marketing managed as a complete growth system.",
    best: "Established businesses ready to generate leads, sales & measurable growth.",
    href: CHECKOUT.scale,
    cta: "Subscribe",
    featured: true,
    features: [
      "Everything in Growth, plus:",
      "Up to 3 social media platforms",
      "16 social media posts / month",
      "12 short-form videos / month",
      "Advanced content strategy",
      "Meta Ads management",
      "Google Ads management",
      "Ad creative development",
      "Campaign optimization",
      "Conversion-focused strategy",
      "Advanced monthly reporting",
    ],
  },
  {
    name: "Accelerate",
    price: "$1,499",
    period: "/month",
    tagline: "For brands that want an experienced team managing their entire digital growth strategy.",
    best: "Growing brands with a budget that want aggressive, measurable growth.",
    href: CHECKOUT.accelerate,
    cta: "Subscribe",
    featured: true,
    features: [
      "Everything in Scale, plus:",
      "Up to 4 social media platforms",
      "20 social media posts / month",
      "16 short-form videos / month",
      "Retargeting campaigns",
      "Funnel & landing page strategy",
      "Conversion Rate Optimization",
      "Email marketing strategy",
      "SEO strategy",
      "Advanced competitor research",
      "Bi-weekly reporting & strategy",
    ],
  },
];

const WEBSITE: Plan[] = [
  {
    name: "Starter",
    price: "$499",
    tagline: "For businesses that need a clean, professional website.",
    best: "Small businesses, freelancers & service providers.",
    href: CHECKOUT.webStarter,
    cta: "Get Started",
    features: [
      "Up to 5 pages",
      "Responsive & mobile optimized",
      "Professional layout",
      "Contact form",
      "Social media integration",
      "Basic SEO setup",
      "Google Maps integration",
      "Basic analytics setup",
      "Speed optimization",
      "1 round of revisions",
      "Website launch",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    tagline: "For businesses that need a stronger website designed to generate leads and sales.",
    best: "Growing businesses & professional brands.",
    href: CHECKOUT.webProfessional,
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "Up to 10 pages",
      "Custom website design",
      "Advanced SEO setup",
      "Google Analytics & Search Console",
      "Lead-generation forms",
      "Booking / inquiry functionality",
      "Blog & newsletter integration",
      "Conversion-focused layouts",
      "Basic copy optimization",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "$1,999",
    tagline: "For businesses that need a complete, high-converting digital experience.",
    best: "Established & e-commerce brands turning their site into a sales asset.",
    href: CHECKOUT.webPremium,
    cta: "Get Started",
    features: [
      "Everything in Professional, plus:",
      "Up to 20 pages",
      "Fully custom design & UX/UI strategy",
      "Conversion Rate Optimization",
      "Lead-generation funnels",
      "Booking systems",
      "Email marketing & CRM integration",
      "E-commerce & payment integration",
      "Advanced forms & custom graphics",
      "3 rounds of revisions",
      "Post-launch support",
    ],
  },
];

const ADDONS: [string, string][] = [
  ["Additional social media platform", "$100/mo"],
  ["Additional 4 social posts", "$100"],
  ["Additional short-form videos", "$150 / 4"],
  ["Additional website page", "$75"],
  ["Website maintenance", "$100–$250/mo"],
  ["SEO management", "From $300/mo"],
  ["Email marketing", "From $200/mo"],
  ["Meta Ads management", "From $300/mo"],
  ["Google Ads management", "From $300/mo"],
  ["Landing page", "From $250"],
  ["Brand strategy", "From $500"],
  ["Logo & visual identity", "From $300"],
  ["Professional copywriting", "From $200"],
  ["E-commerce setup", "From $500"],
  ["Marketing strategy / audit", "From $250"],
];

function Check() {
  return (
    <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-[#e5e1df]/15 flex items-center justify-center">
      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="#e5e1df" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PlanCard({ plan, i }: { plan: Plan; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const isPlaceholder = plan.href.startsWith("#");
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col rounded-2xl p-8 border transition-colors ${
        plan.featured
          ? "border-[#e5e1df]/40 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.015] hover:border-white/25"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-8 bg-[#e5e1df] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="font-['Anton'] text-3xl uppercase text-white tracking-wide">{plan.name}</h3>
      <div className="flex items-end gap-1 mt-4">
        <span className="font-['Anton'] text-5xl text-[#e5e1df]">{plan.price}</span>
        {plan.period && <span className="text-white/40 text-sm mb-2">{plan.period}</span>}
      </div>
      <p className="text-white/50 text-sm leading-relaxed mt-4 min-h-[60px]">{plan.tagline}</p>

      <ul className="flex flex-col gap-2.5 mt-6 mb-8 flex-1">
        {plan.features.map((f, j) => {
          const isHeader = f.endsWith("plus:");
          return isHeader ? (
            <li key={j} className="text-white/70 text-xs font-bold uppercase tracking-widest pt-1">
              {f}
            </li>
          ) : (
            <li key={j} className="flex gap-2.5 text-white/60 text-sm leading-snug">
              <Check />
              {f}
            </li>
          );
        })}
      </ul>

      <div className="mt-auto">
        <a
          href={plan.href}
          {...(isPlaceholder ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className={`block text-center font-bold uppercase tracking-widest text-sm px-6 py-4 rounded-full transition-colors ${
            plan.featured
              ? "bg-[#e5e1df] text-black hover:bg-white"
              : "border border-white/20 text-white hover:border-white/60"
          }`}
        >
          {plan.cta}
        </a>
        <p className="text-white/30 text-xs mt-4 leading-relaxed">
          <span className="text-white/50 font-bold">Best for: </span>
          {plan.best}
        </p>
      </div>
    </motion.div>
  );
}

function SubHead({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mb-14">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[#9ca1a2] uppercase tracking-[0.3em] text-xs font-bold mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-['Anton'] text-[clamp(2.25rem,5vw,4.5rem)] uppercase leading-[0.95] text-white"
      >
        {title}
      </motion.h2>
      {sub && <p className="text-white/40 text-base mt-6 max-w-xl leading-relaxed">{sub}</p>}
    </div>
  );
}

/**
 * The full pricing content (marketing plans, enterprise, website design,
 * add-ons) with no nav/header/footer — reused on the homepage and the
 * dedicated /pricing page. Pass `id` to make it an anchor target.
 */
export default function PricingSections({ id }: { id?: string }) {
  return (
    <div id={id}>
      {/* MARKETING PACKAGES */}
      <section className="px-6 md:px-12 pt-16 pb-8 max-w-7xl mx-auto">
        <SubHead eyebrow="Marketing Services" title={<>MONTHLY<br /><span className="text-[#737373]">GROWTH PLANS.</span></>} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MARKETING.map((p, i) => <PlanCard key={p.name} plan={p} i={i} />)}
        </div>

        {/* ENTERPRISE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 flex flex-col lg:flex-row lg:items-center gap-8 justify-between"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-['Anton'] text-3xl md:text-4xl uppercase text-white tracking-wide">Enterprise</h3>
              <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Custom Pricing</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              A dedicated marketing department for established companies — full-service digital marketing, high-volume
              content, multi-channel ads, SEO, funnels, automation, custom dashboards and priority support.
            </p>
            <p className="text-white/30 text-xs leading-relaxed">
              Scoped around your brands, channels, content volume, ad spend, campaigns and growth objectives.
              <span className="text-white/50 font-bold"> Starting from $2,500/month.</span>
            </p>
          </div>
          <a href={CHECKOUT.enterprise}
            className="shrink-0 bg-[#e5e1df] text-black font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white transition-colors text-center">
            Request a Quote →
          </a>
        </motion.div>

        <p className="text-white/30 text-xs mt-6 max-w-2xl leading-relaxed">
          Advertising spend is <span className="text-white/50 font-bold">not</span> included in your monthly fee and is paid
          directly to the advertising platform. Recommended ad budget: $500–$2,000+/month depending on your plan.
        </p>
      </section>

      {/* WEBSITE DESIGN */}
      <section className="px-6 md:px-12 pt-20 pb-8 max-w-7xl mx-auto">
        <SubHead
          eyebrow="Website Design"
          title={<>WEBSITES THAT<br /><span className="text-[#737373]">CONVERT.</span></>}
          sub="Project-based builds — a one-time investment in a site designed to turn visitors into customers."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {WEBSITE.map((p, i) => <PlanCard key={p.name} plan={p} i={i} />)}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="px-6 md:px-12 pt-20 pb-8 max-w-4xl mx-auto">
        <SubHead eyebrow="Add-Ons" title={<>EXTEND<br /><span className="text-[#737373]">ANY PLAN.</span></>} />
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-white/10"
        >
          {ADDONS.map(([service, price], i) => (
            <div key={service} className={`flex items-center justify-between gap-4 px-6 py-4 border-b border-white/5 last:border-b-0 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
              <span className="text-white/60 text-sm">{service}</span>
              <span className="text-[#e5e1df] text-sm font-bold whitespace-nowrap">{price}</span>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
