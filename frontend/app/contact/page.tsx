import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact | ASHITECH",
  description: "Contact ASHITECH to discuss your website design and development project.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="contact-heading">
          <div className="site-container">
            <h1 id="contact-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Contact
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              Share your project goals and we will respond with the right next steps.
            </p>
            <form className="mt-10 max-w-2xl space-y-5" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[#0F172A] px-4 py-3 text-[#0F172A] outline-none focus:border-[#012166]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#0F172A] px-4 py-3 text-[#0F172A] outline-none focus:border-[#012166]"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-[#0F172A] px-4 py-3 text-[#0F172A] outline-none focus:border-[#012166]"
                />
              </div>
              <button
                type="submit"
                aria-label="Send message"
                className="rounded-lg bg-[#012166] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0F172A]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
