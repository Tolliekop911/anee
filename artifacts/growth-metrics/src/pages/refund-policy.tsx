import { Link } from "wouter";
import logoImg from "@assets/logo_transparent.png";

const DARK_BG = "#0f0d0b";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[#2d6a4f] font-bold text-xl mb-3">{title}</h2>
      <div className="text-black/70 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* NAV */}
      <nav className="px-6 md:px-12 py-5 border-b border-black/10 flex items-center justify-between">
        <Link href="/">
          <img src={logoImg} alt="GrowthMetrics" className="h-10 w-auto invert cursor-pointer" />
        </Link>
        <Link href="/" className="text-sm text-black/50 hover:text-black transition-colors font-bold uppercase tracking-widest">
          ← Back
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Growth Metrics Marketing</p>
        <h1 className="font-['Anton'] text-5xl uppercase mb-2">Refund Policy</h1>
        <p className="text-black/40 text-sm mb-10">
          Growth Metrics (Pty) Ltd &bull; Somerset West, Western Cape, South Africa &bull; Last updated: June 22, 2026
        </p>
        <div className="border-t border-black/10 mb-12" />

        <Section title="All Sales Are Final — No Refunds">
          <p>
            At Growth Metrics Marketing (operated by Growth Metrics (Pty) Ltd), we provide custom, time-intensive professional services, including web design, website development, and social media marketing. Because our work begins as soon as you engage us and involves the dedication of our time, labor, expertise, tools, and resources, <strong>all payments are final and non-refundable.</strong>
          </p>
          <p>By purchasing or engaging any of our Services, making a deposit, or paying any invoice or retainer, you acknowledge, understand, and agree that, to the maximum extent permitted by law:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>No refunds are provided</strong>, in whole or in part, for any Service, deposit, retainer, project fee, recurring fee, or any other amount paid to us.</li>
            <li>This no-refund policy applies <strong>regardless of</strong>:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your satisfaction or dissatisfaction with the deliverables or results;</li>
                <li>Whether the project or campaign is completed, in progress, or not yet started;</li>
                <li>Cancellation or termination of the engagement by you or by us;</li>
                <li>A change in your business needs, circumstances, or decision to no longer proceed;</li>
                <li>The performance of any website, content, campaign, or marketing effort, including any traffic, leads, sales, followers, engagement, or revenue figures.</li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="Why We Have This Policy — and Why It Is Fair to You">
          <p>Our Services are bespoke and labour-based. Unlike a physical product that can be returned, the time we invest in strategy, design, development, content creation, account management, and execution cannot be recovered or resold. Once our work has begun, the value has been delivered in the form of our professional time and effort.</p>
          <p>Our policy is also built around protecting you:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>You see it before you buy it.</strong> For web design projects, we take on the risk. We design and build your website first, and you review the actual finished website before you are required to pay for it. You only purchase once you have inspected and approved what we have created.</li>
            <li><strong>We stand behind our timelines.</strong> Where we have agreed to publish your approved website, we aim to make it live within seven (7) business days, beginning once you have paid and signed your chosen marketing retainer agreement. If we miss that window for reasons within our control, we give you your first month of social media marketing free of charge.</li>
            <li><strong>Exceptional value.</strong> We deliver full-scope marketing services at a fraction of what comparable agencies charge, which is only sustainable because our fees are committed to your project once you engage us.</li>
          </ul>
          <p>Because you have the opportunity to review and approve our work before paying, and because we carry the upfront risk, all sales are final once payment is made.</p>
        </Section>

        <Section title="No Guarantee of Results">
          <p>We do not guarantee any particular outcome from our Services. Marketing and web performance depend on many factors outside our control, including market conditions, competition, platform algorithms, audience behavior, and your own business and decisions. A lack of a specific result is not grounds for a refund. Please review Section 14 ("No Guarantee of Results") of our <Link href="/terms" className="text-[#2d6a4f] underline">Terms and Conditions</Link>.</p>
        </Section>

        <Section title="Cancellation of Recurring Services">
          <p>You may cancel ongoing or recurring Services (such as monthly social media management) in accordance with the cancellation terms in our <Link href="/terms" className="text-[#2d6a4f] underline">Terms and Conditions</Link>. Cancellation stops future billing for subsequent cycles but <strong>does not</strong> entitle you to a refund of any fees already paid, and does not relieve you of payment obligations for the current billing cycle or any agreed minimum term.</p>
        </Section>

        <Section title="Chargebacks and Payment Disputes">
          <p>Because you have agreed to this policy, initiating a chargeback or payment dispute for valid Services rendered is a breach of our Terms and Conditions. We document all engagements and reserve the right to dispute any unwarranted chargeback and to pursue any amounts owed, including associated costs.</p>
        </Section>

        <Section title="Your Statutory Rights (South Africa)">
          <p>This policy does not limit or exclude any rights you cannot lawfully waive under South African law, including the Consumer Protection Act 68 of 2008 (the "CPA") and the Electronic Communications and Transactions Act 25 of 2002 ("ECTA"). For example, certain consumer transactions concluded through direct marketing or electronic means may carry a limited statutory cooling-off period, and you may have remedies where services are not performed with reasonable care and skill. Our no-refund policy applies to the fullest extent the law allows and is not intended to deprive you of any non-waivable statutory right.</p>
        </Section>

        <Section title="Our Commitment to You">
          <p>While we do not offer refunds, we are committed to your satisfaction and to delivering professional, high-quality work. If you have concerns about your project or a deliverable, please contact us — we will work with you in good faith within the agreed scope to address reasonable concerns and make it right wherever possible.</p>
        </Section>

        <Section title="Acknowledgment">
          <p>By engaging Growth Metrics Marketing and submitting payment, you confirm that you have read, understood, and agreed to this No-Refund Policy and to our <Link href="/terms" className="text-[#2d6a4f] underline">Terms and Conditions</Link>.</p>
        </Section>

        <Section title="Contact Us">
          <p>
            Email: <a href="mailto:marketing@growthmetricsmedia.com" className="text-[#2d6a4f] underline">marketing@growthmetricsmedia.com</a><br />
            Website: <a href="https://growthmetricsmarketing.com" className="text-[#2d6a4f] underline">growthmetricsmarketing.com</a>
          </p>
        </Section>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: DARK_BG }} className="py-10 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoImg} alt="GrowthMetrics" className="h-10 w-auto" />
          <div className="flex flex-wrap gap-6 text-white/40 text-xs font-bold uppercase tracking-widest justify-center">
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Growth Metrics (Pty) Ltd</p>
        </div>
      </footer>
    </main>
  );
}
