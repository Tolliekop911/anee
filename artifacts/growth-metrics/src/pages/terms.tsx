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

export default function Terms() {
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
        <h1 className="font-['Anton'] text-5xl uppercase mb-2">Terms &amp; Conditions</h1>
        <p className="text-black/40 text-sm mb-10">
          Growth Metrics (Pty) Ltd &bull; Somerset West, Western Cape, South Africa &bull; Last updated: June 22, 2026
        </p>
        <div className="border-t border-black/10 mb-12" />

        <Section title="1. Agreement to Terms">
          <p>
            These Terms and Conditions ("Terms") are a binding legal agreement between you ("Client," "you," or "your") and Growth Metrics (Pty) Ltd, doing business as Growth Metrics Marketing ("Growth Metrics Marketing," "Company," "we," "us," or "our"), governing your access to and use of our website at <a href="https://growthmetricsmarketing.com" className="text-[#2d6a4f] underline">growthmetricsmarketing.com</a> and your purchase or use of any services we provide, including web design, website development, and social media marketing services (collectively, the "Services").
          </p>
          <p>
            By accessing the Site, requesting a quote, signing a proposal or statement of work, making a payment, or otherwise engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{" "}
            <Link href="/privacy-policy" className="text-[#2d6a4f] underline">Privacy Policy</Link> and{" "}
            <Link href="/refund-policy" className="text-[#2d6a4f] underline">Refund Policy</Link>, each incorporated by reference.{" "}
            <strong>If you do not agree to these Terms, do not use the Site or our Services.</strong>
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>You must be at least 18 years of age and have the legal authority to enter into a binding contract on behalf of yourself or the business you represent. By engaging our Services, you represent and warrant that you meet these requirements and that all information you provide is accurate and complete.</p>
        </Section>

        <Section title="3. Services">
          <p>Growth Metrics Marketing provides professional services that may include, without limitation:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Web Design &amp; Development</strong> — website design, layout, build-out, redesign, landing pages, and related configuration.</li>
            <li><strong>Social Media Marketing</strong> — content creation, scheduling, account management, campaign strategy, paid advertising management, and related services.</li>
          </ul>
          <p>The specific scope, deliverables, timeline, fees, and payment schedule for your engagement (the "Scope of Work") will be defined in a separate written proposal, statement of work, service agreement, or invoice (each, an "Order"). Each Order, once accepted by you (including by signature, written confirmation, or payment), is incorporated into and governed by these Terms. In the event of a conflict between an Order and these Terms, the Order controls for that specific engagement.</p>
        </Section>

        <Section title="4. Quotes, Proposals, and Project Commencement">
          <p>All quotes and proposals are valid for the period stated within them or, if none is stated, for thirty (30) days. Work on a project commences only after (a) you have accepted the applicable Order, and (b) we have received any required initial deposit or payment, except where we offer a preview-before-payment arrangement under Section 4A. We reserve the right to decline or discontinue any project at our discretion.</p>
        </Section>

        <Section title="4A. Preview Before Purchase (Web Design)">
          <p>For web design projects, we may, at our discretion, design and build your website and present it to you for review before you are required to pay for it. This means you have the opportunity to see the actual website we have created for you and confirm that it meets your expectations before you commit to the purchase. By proceeding to pay for the website after this review, you confirm that you have inspected and approved the website as delivered. Because you have reviewed and accepted the website before paying, all payments for web design are final and non-refundable as set out in Section 9 and our Refund Policy.</p>
        </Section>

        <Section title="4B. Go-Live Commitment">
          <p>Where we have agreed to publish your approved website, we aim to make your website live within <strong>seven (7) business days</strong>. This period begins only once both of the following have occurred: (a) we have received full payment for your approved website; and (b) you have signed a marketing retainer agreement with us. If we fail to publish your approved website within that period for reasons within our reasonable control, we will provide your first month of social media marketing services free of charge as your sole and exclusive remedy for the delay. This commitment does not apply to delays caused by you or by third parties outside our reasonable control. This Go-Live Commitment is a service remedy only and does not entitle you to any refund.</p>
        </Section>

        <Section title="5. Client Responsibilities">
          <p>The timely and successful delivery of Services depends on your cooperation. You agree to:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Provide all content, text, images, logos, branding, account access, credentials, and other materials necessary for us to perform the Services, in a timely manner.</li>
            <li>Review deliverables and provide clear, consolidated feedback and approvals within the timeframes we request.</li>
            <li>Designate a primary point of contact authorized to make decisions and approve work on your behalf.</li>
            <li>Maintain your own accounts with third-party platforms and pay all associated third-party fees directly.</li>
            <li>Ensure you have all rights and licenses to any materials you provide to us.</li>
          </ol>
          <p>Delays caused by your failure to provide materials, feedback, approvals, or payment may extend project timelines and may incur additional fees.</p>
        </Section>

        <Section title="6. Revisions and Scope Changes">
          <p>Each Order specifies the number of revision rounds included, if any. Revisions requested beyond the included rounds, or any work that materially expands the agreed Scope of Work ("Scope Creep"), will be quoted separately and require your written approval before we proceed. Requests to change the direction of work after approval of a deliverable are considered new work and may be billed accordingly.</p>
        </Section>

        <Section title="7. Fees and Payment">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Fees.</strong> You agree to pay all fees set forth in the applicable Order. Fees may be structured as one-time project fees, recurring retainers, or a combination.</li>
            <li><strong>Deposits.</strong> Many projects require a non-refundable deposit before work begins, as specified in the Order.</li>
            <li><strong>Recurring Services.</strong> Social media marketing and other ongoing Services are typically billed on a recurring basis and renew automatically each billing cycle until cancelled in accordance with Section 8.</li>
            <li><strong>Invoices and Due Dates.</strong> Payment is due as stated on each invoice or Order. Unless otherwise specified, invoices are due upon receipt.</li>
            <li><strong>Late Payments.</strong> Past-due amounts may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law. We may suspend or pause Services, withhold deliverables, or remove published work for any account that is past due.</li>
            <li><strong>Third-Party and Advertising Costs.</strong> Advertising spend, software subscriptions, premium plugins, stock media, fonts, hosting, and domain fees are not included in our Service fees unless expressly stated, and are your responsibility.</li>
            <li><strong>Taxes.</strong> Fees are exclusive of applicable taxes. You are responsible for all sales, use, and similar taxes, excluding taxes on our net income.</li>
            <li><strong>Chargebacks.</strong> Initiating a chargeback or payment dispute in violation of these Terms or our Refund Policy is a breach of this agreement.</li>
          </ol>
        </Section>

        <Section title="8. Term, Cancellation, and Termination">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Recurring Services Cancellation.</strong> Either party may cancel recurring Services by providing written notice at least thirty (30) days before the next billing cycle. Cancellation does not entitle you to a refund of fees already paid.</li>
            <li><strong>Minimum Terms.</strong> Some engagements include a minimum commitment period stated in the Order. You remain responsible for fees through the end of any minimum term.</li>
            <li><strong>Termination for Cause.</strong> Either party may terminate an engagement if the other party materially breaches these Terms and fails to cure the breach within ten (10) days of written notice. We may suspend or terminate Services immediately for non-payment, abusive conduct, or violation of Section 13.</li>
            <li><strong>Effect of Termination.</strong> Upon termination, you must pay for all Services performed and costs incurred through the effective date of termination. All fees paid are non-refundable as set forth in our Refund Policy.</li>
          </ol>
        </Section>

        <Section title="9. No Refunds">
          <p className="font-bold">All sales are final. To the maximum extent permitted by law, Growth Metrics Marketing does not offer refunds of any kind, in whole or in part, for any Services, deposits, retainers, or fees, whether paid in advance or otherwise.</p>
          <p>This applies regardless of project status, completion, satisfaction, cancellation, or termination. Nothing in these Terms limits or excludes any non-waivable rights you may have under the South African Consumer Protection Act 68 of 2008 (the "CPA") or the Electronic Communications and Transactions Act 25 of 2002 ("ECTA"). Full details are set out in our <Link href="/refund-policy" className="text-[#2d6a4f] underline">Refund Policy</Link>.</p>
        </Section>

        <Section title="10. Intellectual Property">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Client Materials.</strong> You retain ownership of all Client Materials you provide. You grant us a non-exclusive, royalty-free license to use them solely to perform the Services.</li>
            <li><strong>Deliverables.</strong> Upon our receipt of full and final payment, we assign to you the ownership rights in the final deliverables created specifically for you under that Order. Until full payment is received, all deliverables and work product remain our exclusive property.</li>
            <li><strong>Pre-Existing and Third-Party Materials.</strong> We retain all rights in our pre-existing materials, tools, templates, frameworks, code libraries, know-how, and methodologies. Third-party components remain subject to their own licenses, which you are responsible for maintaining.</li>
            <li><strong>Portfolio and Promotional Use.</strong> Unless you request otherwise in writing, you grant us the right to display and reference your project and deliverables in our portfolio, case studies, and marketing materials.</li>
          </ol>
        </Section>

        <Section title="11. Confidentiality">
          <p>Each party may receive confidential information from the other. Both parties agree to keep such information confidential and use it only as necessary to perform or receive the Services. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.</p>
        </Section>

        <Section title="12. Third-Party Platforms and Services">
          <p>Our Services rely on third-party platforms and tools (e.g., social media networks, hosting providers, domain registrars, advertising platforms, content management systems, and analytics tools). We do not control these third parties and are not responsible for their availability, performance, policies, pricing, algorithm changes, account suspensions, or actions. We are not liable for any loss arising from a third party's acts or omissions.</p>
        </Section>

        <Section title="13. Acceptable Use and Client Conduct">
          <p>You agree not to use our Services or provide us with any materials that:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Infringe any third party's intellectual property, privacy, or other rights;</li>
            <li>Are unlawful, defamatory, fraudulent, harassing, hateful, or obscene;</li>
            <li>Promote illegal activity or violate any applicable law or platform policy;</li>
            <li>Contain malware or are designed to disrupt or compromise any system.</li>
          </ul>
          <p>We may refuse or discontinue work that we believe violates this section or exposes us to legal or reputational risk, without refund.</p>
        </Section>

        <Section title="14. No Guarantee of Results">
          <p>Web design and social media marketing outcomes depend on many factors outside our control, including market conditions, competition, platform algorithms, your products and pricing, audience behavior, and your own actions. <strong>We do not guarantee any specific results, including but not limited to traffic, rankings, leads, sales, revenue, followers, engagement, reach, conversions, or return on investment.</strong> Any examples, estimates, or projections we provide are illustrative only and are not promises of performance.</p>
        </Section>

        <Section title="15. Disclaimer of Warranties">
          <p className="uppercase font-semibold text-xs tracking-wide">
            The site and services are provided "as is" and "as available," without warranties of any kind, whether express, implied, or statutory. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the site or services will be uninterrupted, error-free, secure, or free of harmful components.
          </p>
        </Section>

        <Section title="16. Limitation of Liability">
          <p className="uppercase font-semibold text-xs tracking-wide">
            To the fullest extent permitted by law, Growth Metrics Marketing and its owners, officers, employees, contractors, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity. Our total aggregate liability for all claims will not exceed the total amount you actually paid to us for the specific services giving rise to the claim during the three (3) months immediately preceding the event giving rise to the claim.
          </p>
        </Section>

        <Section title="17. Indemnification">
          <p>You agree to indemnify, defend, and hold harmless Growth Metrics Marketing and its owners, officers, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your breach of these Terms; (b) Client Materials or your products, services, or business; (c) your violation of any law or third-party right; or (d) your use of any deliverable in a manner not authorized by these Terms.</p>
        </Section>

        <Section title="18. Force Majeure">
          <p>We are not liable for any delay or failure to perform resulting from causes beyond our reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, internet or utility failures, third-party platform outages, government actions, or pandemics.</p>
        </Section>

        <Section title="19. Governing Law and Dispute Resolution">
          <p>These Terms are governed by and construed in accordance with the laws of the Republic of South Africa, without regard to conflict-of-laws principles. The parties will first attempt to resolve any dispute in good faith through informal negotiation. Any dispute that cannot be resolved informally will be subject to the jurisdiction of the courts of the Western Cape, South Africa. This section does not limit any rights you may have to refer a matter to the National Consumer Commission, the Consumer Goods and Services Ombud, or a relevant tribunal under the CPA.</p>
        </Section>

        <Section title="20. Changes to These Terms">
          <p>We may update these Terms from time to time. The "Last Updated" date reflects the most recent revision. Material changes will be posted on this page and, where appropriate, communicated to active clients. Your continued use of the Site or Services after changes become effective constitutes acceptance of the revised Terms.</p>
        </Section>

        <Section title="21. General Provisions">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Entire Agreement.</strong> These Terms, together with any applicable Order, our Privacy Policy, and Refund Policy, constitute the entire agreement between the parties.</li>
            <li><strong>Severability.</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.</li>
            <li><strong>No Waiver.</strong> Our failure to enforce any provision is not a waiver of our right to do so later.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Independent Contractor.</strong> We provide Services as an independent contractor. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship.</li>
          </ul>
        </Section>

        <Section title="22. Contact Us">
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
