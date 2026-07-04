import Link from "next/link";
import SiteNavbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service | Keni Web Design",
  description: "Terms of Service for Keni Web Design — terms governing use of our website and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-[#0f1724]">
      <SiteNavbar />

      <section className="bg-linear-to-r from-blue-50 to-white py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f1724] sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-[#54607a]">Last Updated: May 31, 2026</p>
            <p className="mt-6 text-base text-[#334155]">Welcome to Keni Web Design. These Terms of Service govern your use of our website, services, and related products.</p>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="max-w-4xl">
          <div className="sr-only">
            <h2>Terms of service content</h2>
          </div>

          <p className="mt-3 text-sm text-[#54607a]">Last Updated: May 31, 2026</p>

          <p className="mt-6 text-base text-[#334155]">Welcome to Keni Web Design. These Terms of Service govern your use of our website, services, and any related products provided by Keni Web Design.</p>

          <p className="mt-4 text-base text-[#334155]">By accessing our website or engaging our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">1. About Keni Web Design</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design is a digital agency based in Kampala, Uganda, providing services including:</p>
          <ul className="mt-3 list-disc pl-6 text-[#334155]">
            <li>Website Design and Development</li>
            <li>E-commerce Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
            <li>SEO Services</li>
            <li>Website Maintenance</li>
            <li>Digital Marketing</li>
            <li>Related Digital Solutions</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">2. Acceptance of Terms</h2>
          <p className="mt-3 text-[#334155]">By accessing our website or purchasing our services, you confirm that:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>You are legally capable of entering into a binding agreement.</li>
            <li>You will use our website and services lawfully.</li>
            <li>You agree to follow these Terms of Service.</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">3. Services</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design provides professional web and digital development services based on agreed project requirements.</p>
          <p className="mt-3 text-[#334155]">Project scope, timelines, pricing, and deliverables will be agreed upon before project commencement. Any additional features or changes requested after project approval may result in additional costs and revised timelines.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">4. Client Responsibilities</h2>
          <p className="mt-3 text-[#334155]">Clients agree to:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Provide accurate project information.</li>
            <li>Supply necessary content, images, branding materials, and documents.</li>
            <li>Respond promptly to requests for feedback or approvals.</li>
            <li>Review project deliverables within reasonable timeframes.</li>
            <li>Ensure they have legal rights to any content supplied to us.</li>
          </ul>
          <p className="mt-3 text-[#334155]">Delays in providing required materials may affect project timelines.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">5. Payments</h2>
          <p className="mt-3 text-[#334155]">Payment terms are communicated before project commencement. Unless otherwise agreed:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>A deposit may be required before work begins.</li>
            <li>Remaining balances are due upon project completion.</li>
            <li>Payments are non-refundable once work has commenced and resources have been allocated.</li>
          </ul>
          <p className="mt-3 text-[#334155]">Late payments may result in delayed project delivery or suspension of services.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
          <p className="mt-3 text-[#334155]">Upon full payment, clients receive ownership of the final approved website or project deliverables. Keni Web Design retains ownership of proprietary tools, frameworks, templates, methodologies, and reusable code components used during development.</p>
          <p className="mt-3 text-[#334155]">We reserve the right to display completed projects in our portfolio unless otherwise agreed in writing.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">7. Website Content</h2>
          <p className="mt-3 text-[#334155]">Clients are solely responsible for content accuracy, copyright compliance, trademark compliance, and legal use of text, images, videos, and other materials. Keni Web Design shall not be liable for content provided by clients.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">8. Revisions and Changes</h2>
          <p className="mt-3 text-[#334155]">Project proposals may include a specified number of revisions. Additional revisions beyond the agreed scope may incur additional charges. Major project changes requested after approval may require a new quotation.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">9. Project Timelines</h2>
          <p className="mt-3 text-[#334155]">Estimated delivery dates are provided in good faith. Project completion may be affected by client delays, scope changes, third-party service interruptions, and technical challenges beyond our control. We are not liable for delays caused by factors outside our reasonable control.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">10. Website Maintenance and Support</h2>
          <p className="mt-3 text-[#334155]">Unless specifically included in a service agreement, ongoing maintenance is not automatically included. Future updates, modifications, and technical support may require separate agreements. Support services are provided according to agreed support plans.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">11. Third-Party Services</h2>
          <p className="mt-3 text-[#334155]">Projects may involve third-party services such as domain registration providers, hosting companies, payment gateways, analytics platforms, and email service providers. Keni Web Design is not responsible for outages, policy changes, pricing adjustments, or service disruptions caused by third-party providers.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">12. Limitation of Liability</h2>
          <p className="mt-3 text-[#334155]">To the maximum extent permitted by law, Keni Web Design shall not be liable for indirect losses, loss of profits, business interruption, data loss, third-party service failures, or website downtime caused by external providers. Our total liability shall not exceed the amount paid by the client for the relevant service.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">13. Termination</h2>
          <p className="mt-3 text-[#334155]">We reserve the right to suspend or terminate services if terms are violated, payments remain outstanding, unlawful activities are identified, or abuse or misconduct occurs. Clients may terminate services by providing written notice, subject to any outstanding obligations.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">14. Prohibited Use</h2>
          <p className="mt-3 text-[#334155]">Users may not use our website or services to violate laws, distribute malicious software, engage in fraudulent activities, infringe intellectual property rights, harass or harm others, or attempt unauthorized access to systems. Violations may result in immediate termination of services.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">15. Privacy</h2>
          <p className="mt-3 text-[#334155]">Your use of our services is also governed by our Privacy Policy. We encourage all users to review our Privacy Policy to understand how personal information is collected, used, and protected.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">16. Changes to These Terms</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design reserves the right to update these Terms of Service at any time. Updated versions will be published on this page with a revised effective date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">17. Governing Law</h2>
          <p className="mt-3 text-[#334155]">These Terms of Service shall be governed and interpreted in accordance with the laws of Uganda. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Uganda.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">18. Contact Us</h2>
          <p className="mt-3 text-[#334155]">If you have questions regarding these Terms of Service, please contact us:</p>

          <div className="mt-4 space-y-2 text-[#334155]">
            <p className="font-semibold">Keni Web Design</p>
            <p>Website: <Link href="/">keniwebdesign.com</Link></p>
            <p>Email: <a href="mailto:info@keniwebdesign.com" className="text-[#ff6b3d]">info@keniwebdesign.com</a></p>
            <p>Phone: 0744429808</p>
            <p>Location: Kampala, Uganda</p>
          </div>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">Agreement</h2>
          <p className="mt-3 text-[#334155]">By accessing this website or engaging Keni Web Design's services, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/contact" className="inline-block rounded-md bg-[#0b63ff] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0857d6]">Contact Us</Link>
            <Link href="/" className="text-sm text-[#6b7280] hover:text-[#0b63ff]">Return to home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
