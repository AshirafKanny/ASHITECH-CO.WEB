import Link from "next/link";
import SiteNavbar from "@/components/Navbar";

export const metadata = {
  title: "Refund Policy | Keni Web Design",
  description: "Refund Policy for Keni Web Design — terms for refunds and cancellations.",
  alternates: {
    canonical: "/refund-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-white text-[#0f1724]">
      <SiteNavbar />

      <section className="bg-linear-to-r from-blue-50 to-white py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f1724] sm:text-5xl">Refund Policy</h1>
            <p className="mt-4 text-lg text-[#54607a]">Last Updated: May 31, 2026</p>
            <p className="mt-6 text-base text-[#334155]">This Refund Policy explains the circumstances under which refunds may or may not be issued for services purchased from Keni Web Design.</p>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="max-w-4xl">
          <div className="sr-only">
            <h2>Refund policy content</h2>
          </div>

          <p className="mt-3 text-sm text-[#54607a]">Last Updated: May 31, 2026</p>

          <p className="mt-6 text-base text-[#334155]">At Keni Web Design, we are committed to providing high-quality website design, web development, SEO, and digital solutions. We value transparency and strive to maintain fair business practices for both our clients and our team.</p>

          <p className="mt-4 text-base text-[#334155]">This Refund Policy explains the circumstances under which refunds may or may not be issued for services purchased from Keni Web Design.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">1. General Policy</h2>
          <p className="mt-3 text-[#334155]">Due to the nature of digital services and the time, expertise, and resources invested in each project, refunds are not automatically guaranteed once work has commenced.</p>
          <p className="mt-3 text-[#334155]">By purchasing our services, you acknowledge and agree to the terms outlined in this Refund Policy.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">2. Eligible Refund Requests</h2>
          <p className="mt-3 text-[#334155]">Refunds may be considered under the following circumstances:</p>

          <h3 className="mt-4 font-semibold">Before Project Work Begins</h3>
          <p className="mt-2 text-[#334155]">If a client requests cancellation before any work has started, a full refund may be issued, excluding any transaction or processing fees incurred.</p>

          <h3 className="mt-4 font-semibold">Duplicate Payments</h3>
          <p className="mt-2 text-[#334155]">If a client accidentally makes duplicate payments for the same service, the duplicate payment will be refunded upon verification.</p>

          <h3 className="mt-4 font-semibold">Service Unavailability</h3>
          <p className="mt-2 text-[#334155]">If Keni Web Design is unable to provide the agreed service due to circumstances within our control, a partial or full refund may be issued depending on the situation.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">3. Non-Refundable Services</h2>
          <p className="mt-3 text-[#334155]">Refunds will generally not be provided for:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Completed website design projects</li>
            <li>Completed web development work</li>
            <li>SEO services already performed</li>
            <li>Consultation services</li>
            <li>Website maintenance services already delivered</li>
            <li>Digital product development work already completed</li>
            <li>Custom design work created specifically for the client</li>
            <li>Services where substantial work has already commenced</li>
          </ul>

          <p className="mt-4 text-[#334155]">Since digital services involve significant time and expertise, completed work cannot be returned like physical products.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">4. Project Deposits</h2>
          <p className="mt-3 text-[#334155]">Project deposits or advance payments are generally non-refundable once project planning, research, design, development, or other project-related work has started.</p>
          <p className="mt-3 text-[#334155]">Deposits are used to reserve project scheduling and allocate resources.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">5. Client-Initiated Cancellations</h2>
          <p className="mt-3 text-[#334155]">If a client chooses to cancel a project after work has begun:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Charges will apply for all work completed up to the cancellation date.</li>
            <li>Any remaining unused project funds may be considered for partial refund at the discretion of Keni Web Design.</li>
            <li>Completed deliverables may be provided upon request where applicable.</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">6. Delayed or Abandoned Projects</h2>
          <p className="mt-3 text-[#334155]">If a client fails to provide necessary information, approvals, content, or feedback for an extended period:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>The project may be placed on hold.</li>
            <li>No refund will be issued for work already completed.</li>
            <li>Keni Web Design reserves the right to close inactive projects after reasonable notice.</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">7. Revision Requests</h2>
          <p className="mt-3 text-[#334155]">Refunds will not be issued solely because a client changes their mind regarding:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Design preferences</li>
            <li>Color schemes</li>
            <li>Layout choices</li>
            <li>Features that were not included in the original agreement</li>
          </ul>
          <p className="mt-3 text-[#334155]">We encourage clients to communicate revision requests during the development process to ensure satisfaction.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">8. Third-Party Services</h2>
          <p className="mt-3 text-[#334155]">Refunds do not apply to third-party expenses including but not limited to:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Domain registrations</li>
            <li>Website hosting services</li>
            <li>Premium plugins</li>
            <li>Premium themes</li>
            <li>Software licenses</li>
            <li>Third-party subscriptions</li>
            <li>Advertising expenses</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">9. Refund Review Process</h2>
          <p className="mt-3 text-[#334155]">To request a refund, clients must contact us with:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Full name</li>
            <li>Project details</li>
            <li>Payment information</li>
            <li>Reason for the refund request</li>
          </ul>
          <p className="mt-3 text-[#334155]">Each request will be reviewed individually and fairly. Refund decisions will typically be communicated within 7–14 business days.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">10. Approved Refund Processing</h2>
          <p className="mt-3 text-[#334155]">If a refund is approved:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Refunds will be processed using the original payment method whenever possible.</li>
            <li>Processing times may vary depending on the payment provider or financial institution.</li>
            <li>Applicable transaction fees may be deducted where permitted.</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">11. Changes to This Refund Policy</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design reserves the right to modify this Refund Policy at any time. Updates will be posted on this page along with the revised effective date. Continued use of our services constitutes acceptance of any updates.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">12. Contact Information</h2>
          <p className="mt-3 text-[#334155]">For questions regarding this Refund Policy or to submit a refund request, please contact:</p>

          <div className="mt-4 space-y-2 text-[#334155]">
            <p className="font-semibold">Keni Web Design</p>
            <p>Website: <Link href="/">keniwebdesign.com</Link></p>
            <p>Email: <a href="mailto:info@keniwebdesign.com" className="text-[#ff6b3d]">info@keniwebdesign.com</a></p>
            <p>Phone: 0744429808</p>
            <p>Location: Kampala, Uganda</p>
          </div>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">Our Commitment</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design is dedicated to delivering professional digital solutions with transparency, fairness, and integrity. We encourage clients to discuss any concerns with us promptly so that we can work together toward a satisfactory resolution.</p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/contact" className="inline-block rounded-md bg-[#0b63ff] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0857d6]">Contact Us</Link>
            <Link href="/" className="text-sm text-[#6b7280] hover:text-[#0b63ff]">Return to home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
