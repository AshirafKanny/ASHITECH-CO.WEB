import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar";

export const metadata = {
  title: "About Us | Keni Web Design",
  description: "Learn more about Keni Web Design, our mission, services, values, and process.",
};

const coreValues = [
  {
    title: "Innovation",
    text: "We embrace modern ideas and technology to create better digital experiences.",
  },
  {
    title: "Integrity",
    text: "We communicate honestly, deliver transparently, and keep our commitments.",
  },
  {
    title: "Excellence",
    text: "Every project is crafted with care, quality, and long-term performance in mind.",
  },
  {
    title: "Customer Success",
    text: "We measure our work by the results and growth our clients achieve.",
  },
  {
    title: "Continuous Improvement",
    text: "We keep learning, refining, and improving our process and solutions.",
  },
];

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "5+", label: "Years of Experience" },
  { value: "7 Days", label: "Support Availability" },
];

const faqs = [
  {
    question: "How much does a website cost in Uganda?",
    answer:
      "Website pricing depends on scope, features, and design complexity. We offer tailored proposals for small business sites, corporate sites, eCommerce, and custom platforms.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Timelines vary by project size, but most standard websites take a few weeks from discovery to launch depending on feedback and content readiness.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide website maintenance, updates, performance improvements, and ongoing support after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We redesign outdated websites into modern, responsive, and conversion-focused experiences.",
  },
  {
    question: "Do you offer SEO services in Uganda?",
    answer:
      "Yes. We provide on-page SEO, local SEO, technical SEO, and content-focused optimization for Ugandan businesses.",
  },
];

const services = [
  {
    title: "Website Design & Development",
    text: "Beautiful, responsive, and business-focused websites designed to convert visitors into customers.",
  },
  {
    title: "eCommerce Website Development",
    text: "Secure online stores with smooth shopping journeys and scalable product management.",
  },
  {
    title: "UI/UX Design",
    text: "Thoughtful interfaces and user flows that improve usability and engagement.",
  },
  {
    title: "SEO Services",
    text: "Search-ready websites built to improve visibility, traffic, and local rankings.",
  },
  {
    title: "Digital Product Development",
    text: "Custom digital products that help turn ideas into practical business solutions.",
  },
];

const process = [
  "Discovery & Consultation",
  "Planning & Strategy",
  "Design & Development",
  "Testing & Optimization",
  "Launch & Support",
];

export default function AboutUsPage() {
  return (
    <main className="bg-[#f5f8ff] text-[#0f172a]">
      <SiteNavbar />

      <section className="relative isolate overflow-hidden bg-[#050b1a] text-white">
        <div className="absolute inset-0">
          <Image
            src="/section-image1.webp"
            alt="Keni Web Design team working on a project"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,144,255,0.45),_rgba(2,8,23,0.94)_55%)]" />
          <div className="about-hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="about-hero-glow about-hero-glow-a" aria-hidden="true" />
          <div className="about-hero-glow about-hero-glow-b" aria-hidden="true" />
        </div>

        <div className="site-container relative z-10 py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mx-auto inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-100 backdrop-blur">
              About Keni Web Design
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Building Digital Experiences That Help Businesses Grow
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
              Keni Web Design is a professional website design and development company based in Kampala, Uganda,
              dedicated to helping businesses establish a strong online presence through modern, responsive, and
              results-driven digital solutions.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="about-cta-button rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.3)]">
                Start a Project
              </Link>
              <Link href="/portfolio" className="about-cta-button rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.3)]">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="about-stat-card rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="text-4xl font-black text-white">{item.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Our Core Values</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">
            Principles that guide every project
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="about-service-card rounded-[1.7rem] border border-blue-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_16px_35px_rgba(59,130,246,0.25)] relative">
                <span className="service-icon-tick" aria-hidden="true">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">{value.title}</h3>
              <p className="mt-3 text-base leading-8 text-[#4b5566]">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Who We Are</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">
              Keni Web Design creates websites that look impressive and perform exceptionally.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4b5566]">
              At Keni Web Design, we believe that every business deserves a professional online presence. Our team is
              passionate about combining creativity, technology, and strategy to develop websites that not only look
              impressive but also perform exceptionally.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#4b5566]">
              We work closely with clients to understand their objectives, target audience, and business challenges
              before creating solutions tailored to their unique needs.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "User-centered design",
                "Modern web technologies",
                "Mobile responsiveness",
                "Search engine optimization (SEO)",
                "Fast website performance",
                "Business growth and conversions",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-[#1f2a3f] shadow-[0_10px_30px_rgba(59,130,246,0.08)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-[0_24px_80px_rgba(59,130,246,0.16)]">
              <Image
                src="/computer%20on%20a%20table.webp"
                alt="Computer on a table at Keni Web Design"
                width={900}
                height={1100}
                className="h-[32rem] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/40 bg-white/85 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Our Mission</p>
                <p className="mt-2 text-sm leading-7 text-[#41516b]">
                  To empower businesses in Uganda and beyond with innovative digital solutions that enhance visibility,
                  improve customer engagement, and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_rgba(255,255,255,0)_55%)]" />
        <div className="site-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">What We Do</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">Services built for growth</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="about-service-card rounded-[1.7rem] border border-blue-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_16px_35px_rgba(59,130,246,0.25)] relative">
                  <span className="service-icon-tick" aria-hidden="true">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a]">{service.title}</h3>
                <p className="mt-3 text-base leading-8 text-[#4b5566]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_18px_60px_rgba(59,130,246,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Why Choose Keni Web Design?</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">
              A client-focused partner for modern websites.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                "Client-Focused Approach",
                "Modern & Responsive Design",
                "SEO-Optimized Solutions",
                "Affordable Pricing",
                "Reliable Support",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-blue-50 bg-blue-50/60 p-4" style={{ animationDelay: `${index * 0.08}s` }}>
                  <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  <div>
                    <h3 className="font-bold text-[#0f172a]">{item}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#4b5566]">
                      We align strategy, design, and development to support your business goals.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-blue-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Our Process</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">How we build your website</h2>
            <div className="mt-8 grid gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-blue-50 bg-[#f8fbff] px-5 py-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-lg font-black text-blue-600 shadow-[0_10px_28px_rgba(59,130,246,0.14)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a]">{step}</h3>
                    <p className="text-sm text-[#5b6577]">We move from strategy to launch with clear communication.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(59,130,246,0.06),rgba(255,255,255,0))]" />
        <div className="site-container relative">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-[0_18px_60px_rgba(59,130,246,0.08)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Serving Businesses Across Uganda</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">Kampala, Entebbe, Wakiso, Mukono and beyond</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#4b5566]">
              Keni Web Design proudly serves clients across Uganda with professional website design, web development,
              SEO, and digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#1d4ed8,#60a5fa)] px-6 py-12 text-white shadow-[0_24px_80px_rgba(37,99,235,0.3)] sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">Let's Build Something Great Together</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Ready to grow your business online?</h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Whether you need a business website, eCommerce platform, SEO services, or a custom digital solution,
              Keni Web Design is ready to help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="about-cta-button rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.3)]">
                Contact Us
              </Link>
              <Link href="/pricing" className="about-cta-button rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.3)]">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Frequently Asked Questions</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">Common questions, clear answers</h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#0f172a] [&::-webkit-details-marker]:hidden">
                <span className="mr-3 text-blue-500">Q.</span>
                {faq.question}
              </summary>
              <p className="mt-4 pl-7 text-base leading-8 text-[#4b5566]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}