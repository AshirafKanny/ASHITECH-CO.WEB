import Link from "next/link";
import SiteNavbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | Keni Web Design",
  description: "Privacy Policy for Keni Web Design — how we collect and use information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-[#0f1724]">
      <SiteNavbar />

      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f1724] sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-[#54607a]">Last Updated: May 31, 2026</p>
            <p className="mt-6 text-base text-[#334155]">This page explains what information we collect, how we use it, and your rights.</p>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="max-w-4xl">
          <div className="sr-only">
            <h2>Privacy policy content</h2>
          </div>
          <p className="mt-3 text-sm text-[#54607a]">Last Updated: May 31, 2026</p>

          <p className="mt-6 text-base text-[#334155]">Welcome to Keni Web Design. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect information obtained through our website and services.</p>

          <p className="mt-4 text-base text-[#334155]">By using our website, you agree to the practices described in this Privacy Policy.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="mt-3 text-[#334155]">We may collect the following types of information:</p>

          <h3 className="mt-4 font-semibold">Personal Information</h3>
          <p className="mt-2 text-[#334155]">When you contact us, request a quote, subscribe to our newsletter, or use our services, we may collect:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Project Requirements</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h3 className="mt-4 font-semibold">Non-Personal Information</h3>
          <p className="mt-2 text-[#334155]">We may automatically collect:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Referring websites</li>
            <li>Website usage statistics</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design uses collected information to:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Respond to inquiries and support requests</li>
            <li>Provide web design and development services</li>
            <li>Prepare quotations and proposals</li>
            <li>Improve our website and services</li>
            <li>Send project updates and communications</li>
            <li>Monitor website performance and security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">3. Cookies and Tracking Technologies</h2>
          <p className="mt-3 text-[#334155]">Our website may use cookies and similar technologies to enhance user experience and analyze website performance. Cookies help us:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Remember user preferences</li>
            <li>Improve website functionality</li>
            <li>Understand visitor behavior</li>
            <li>Enhance website performance</li>
          </ul>
          <p className="mt-3 text-[#334155]">You can disable cookies through your browser settings, although some website features may not function properly.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">4. Information Sharing</h2>
          <p className="mt-3 text-[#334155]">We respect your privacy and do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>With trusted service providers who assist in operating our business</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights, property, or safety</li>
            <li>During business transfers or mergers if applicable</li>
          </ul>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p className="mt-3 text-[#334155]">We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, alteration, disclosure, and misuse. While we strive to use commercially acceptable methods to protect your data, no method of transmission over the internet is completely secure.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
          <p className="mt-3 text-[#334155]">Our website may contain links to third-party websites, services, or platforms. We are not responsible for the privacy practices, policies, or content of external websites. We encourage users to review the privacy policies of any third-party websites they visit.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <p className="mt-3 text-[#334155]">You may have the right to:</p>
          <ul className="mt-2 list-disc pl-6 text-[#334155]">
            <li>Access your personal information</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent where applicable</li>
            <li>Request information regarding how your data is processed</li>
          </ul>
          <p className="mt-3 text-[#334155]">To exercise these rights, please contact us using the information provided below.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">8. Data Retention</h2>
          <p className="mt-3 text-[#334155]">We retain personal information only for as long as necessary to provide our services, fulfill contractual obligations, resolve disputes, and meet legal and regulatory requirements. Once information is no longer needed, it will be securely deleted or anonymized.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">9. Children's Privacy</h2>
          <p className="mt-3 text-[#334155]">Our website and services are not directed toward children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to remove it.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">10. Changes to This Privacy Policy</h2>
          <p className="mt-3 text-[#334155]">Keni Web Design reserves the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our website following any changes constitutes acceptance of the revised Privacy Policy.</p>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">11. Contact Information</h2>
          <p className="mt-3 text-[#334155]">If you have any questions regarding this Privacy Policy or how we handle your information, please contact us:</p>

          <div className="mt-4 space-y-2 text-[#334155]">
            <p className="font-semibold">Keni Web Design</p>
            <p>Website: <Link href="/">keniwebdesign.com</Link></p>
            <p>Email: <a href="mailto:info@keniwebdesign.com" className="text-[#ff6b3d]">info@keniwebdesign.com</a></p>
            <p>Phone: 0744429808</p>
            <p>Location: Kampala, Uganda</p>
          </div>

          <hr className="my-8 border-[#E6EEF8]" />

          <h2 className="text-xl font-semibold">Our Commitment to Privacy</h2>
          <p className="mt-3 text-[#334155]">At Keni Web Design, protecting your information is a priority. We are committed to maintaining transparency, safeguarding your data, and delivering professional digital services with integrity and trust.</p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/contact" className="inline-block rounded-md bg-[#0b63ff] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0857d6]">Contact Us</Link>
            <Link href="/" className="text-sm text-[#6b7280] hover:text-[#0b63ff]">Return to home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
