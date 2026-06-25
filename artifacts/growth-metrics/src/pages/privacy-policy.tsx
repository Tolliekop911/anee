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

export default function PrivacyPolicy() {
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
        <h1 className="font-['Anton'] text-5xl uppercase mb-2">Privacy Policy</h1>
        <p className="text-black/40 text-sm mb-10">
          Growth Metrics (Pty) Ltd &bull; Somerset West, Western Cape, South Africa &bull; Last updated: June 22, 2026
        </p>
        <div className="border-t border-black/10 mb-12" />

        <Section title="1. Introduction">
          <p>This Privacy Policy explains how Growth Metrics (Pty) Ltd, doing business as Growth Metrics Marketing ("Growth Metrics Marketing," "we," "us," or "our"), collects, uses, discloses, and protects information when you visit our website at <a href="https://growthmetricsmarketing.com" className="text-[#2d6a4f] underline">growthmetricsmarketing.com</a> (the "Site") or engage our web design and social media marketing services (the "Services").</p>
          <p>By using the Site or our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site or Services.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong>Information you provide to us directly</strong>, including when you fill out a contact or quote form, subscribe to communications, or engage our Services:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identifiers such as your name, business name, email address, phone number, and mailing address;</li>
            <li>Billing and payment information (processed by our third-party payment processors — we do not store full card numbers);</li>
            <li>Account credentials and access you grant us to your websites, hosting, domains, social media accounts, and advertising platforms for the purpose of providing Services;</li>
            <li>Content and materials you provide (text, images, logos, branding, and other Client Materials);</li>
            <li>Any other information you choose to provide in communications with us.</li>
          </ul>
          <p><strong>Information collected automatically</strong> when you visit the Site:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Usage and device data such as IP address, browser type, operating system, referring URLs, pages viewed, and dates/times of access;</li>
            <li>Cookies and similar technologies (see Section 6).</li>
          </ul>
          <p><strong>Information from third parties</strong>, such as analytics providers, advertising platforms, and social media networks, where you have authorized us to access or manage your accounts.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide, operate, and deliver the Services and manage your account;</li>
            <li>Communicate with you about projects, quotes, invoices, and support;</li>
            <li>Process payments and prevent fraud;</li>
            <li>Operate, maintain, and improve the Site and our Services;</li>
            <li>Send administrative information and, where permitted, marketing communications (you may opt out at any time);</li>
            <li>Comply with legal obligations and enforce our agreements, including our Terms and Conditions.</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>We do <strong>not</strong> sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Service providers and subcontractors</strong> who help us operate our business and deliver Services (e.g., payment processors, hosting providers, email and CRM tools, analytics providers, design and development contractors), who are obligated to protect your information;</li>
            <li><strong>Third-party platforms</strong> you have authorized us to manage on your behalf (e.g., social media networks, advertising platforms);</li>
            <li><strong>Professional advisors</strong> such as accountants and lawyers;</li>
            <li><strong>Authorities or others</strong> when required by law, to comply with legal process, or to protect our rights, safety, or property;</li>
            <li><strong>Successors</strong> in connection with a merger, acquisition, financing, or sale of assets.</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Platforms">
          <p>Our Services involve third-party platforms (such as social media networks, advertising platforms, hosting providers, and analytics tools). Those platforms have their own privacy policies governing how they handle data. We are not responsible for the privacy practices of third parties, and we encourage you to review their policies.</p>
        </Section>

        <Section title="6. Cookies and Tracking Technologies">
          <p>The Site may use cookies and similar technologies to operate the Site, remember your preferences, analyze traffic, and measure the performance of our content and advertising. These may include first-party cookies and third-party cookies from analytics and advertising providers (for example, Google Analytics or social media pixels). You can control cookies through your browser settings; disabling cookies may affect some Site functionality. Where required by law, we will request your consent before placing non-essential cookies.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain personal information for as long as necessary to provide the Services, maintain our business records, resolve disputes, and comply with our legal obligations. When information is no longer needed, we take reasonable steps to delete or anonymize it.</p>
        </Section>

        <Section title="8. Data Security">
          <p>We implement reasonable administrative, technical, and organizational measures designed to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any credentials you use.</p>
        </Section>

        <Section title="9. Your Privacy Rights">
          <p>We process personal information in accordance with the South African Protection of Personal Information Act 4 of 2013 ("POPIA"). Under POPIA, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Be notified that your personal information is being collected and used;</li>
            <li>Request access to the personal information we hold about you;</li>
            <li>Request that we correct, update, or delete personal information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading, or unlawfully obtained;</li>
            <li>Object, on reasonable grounds, to the processing of your personal information;</li>
            <li>Object to processing for the purposes of direct marketing;</li>
            <li>Not have your information processed for direct marketing by means of unsolicited electronic communications except as permitted by law;</li>
            <li>Submit a complaint to the Information Regulator; and</li>
            <li>Institute civil proceedings regarding an alleged breach of your rights under POPIA.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:marketing@growthmetricsmedia.com" className="text-[#2d6a4f] underline">marketing@growthmetricsmedia.com</a>.</p>
          <p><strong>Information Officer.</strong> Our Information Officer, responsible for our compliance with POPIA, can be reached at <a href="mailto:marketing@growthmetricsmedia.com" className="text-[#2d6a4f] underline">marketing@growthmetricsmedia.com</a>.</p>
          <p><strong>Information Regulator.</strong> You may lodge a complaint with the Information Regulator of South Africa: Website: <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-[#2d6a4f] underline">inforegulator.org.za</a> | Email: <a href="mailto:enquiries@inforegulator.org.za" className="text-[#2d6a4f] underline">enquiries@inforegulator.org.za</a></p>
        </Section>

        <Section title="10. Marketing Communications">
          <p>If you receive marketing emails from us, you can opt out at any time by following the unsubscribe link in the email or by contacting us. We may still send you non-promotional, transactional messages related to your account or projects.</p>
        </Section>

        <Section title="11. Children's Privacy">
          <p>Our Site and Services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>
        </Section>

        <Section title="12. Third-Party Links">
          <p>The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any site you visit.</p>
        </Section>

        <Section title="13. International Users">
          <p>We operate from South Africa. Some of the third-party service providers we use (such as hosting, email, analytics, and advertising platforms) may store or process information in other countries. Where personal information is transferred outside South Africa, we take reasonable steps to ensure it is processed in accordance with POPIA and afforded a comparable level of protection.</p>
        </Section>

        <Section title="14. Changes to This Privacy Policy">
          <p>We may update this Privacy Policy from time to time. The "Last Updated" date reflects the most recent revision. Material changes will be posted on this page. Your continued use of the Site or Services after changes become effective constitutes acceptance of the revised policy.</p>
        </Section>

        <Section title="15. Contact Us">
          <p>
            Email: <a href="mailto:marketing@growthmetricsmedia.com" className="text-[#2d6a4f] underline">marketing@growthmetricsmedia.com</a><br />
            Website: <a href="https://growthmetricsmarketing.com" className="text-[#2d6a4f] underline">growthmetricsmarketing.com</a><br />
            7 Cape Heritage Park, Somerset West, Cape Town, Western Cape, South Africa
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
