import { Mail, MapPin, PhoneCall } from "lucide-react";

const contactItems = [
  {
    label: "Location",
    value: "UK MALL Kansanga 2nd floor",
    icon: MapPin,
  },
  {
    label: "Email Address",
    value: "ashirafkanny04@gmail.com",
    icon: Mail,
    href: "mailto:ashirafkanny04@gmail.com",
  },
  {
    label: "Phone No",
    value: "0744429808",
    icon: PhoneCall,
  },
];

export default function ContactMessageSection() {
  return (
    <section className="relative overflow-hidden bg-[#171422] py-24 text-white" aria-labelledby="contact-message-heading">
      <div className="hero-breath-wave hero-breath-wave-one pointer-events-none absolute -left-36 top-6 z-5 h-120 w-lg rounded-full" aria-hidden="true" />
      <div className="hero-breath-wave hero-breath-wave-two pointer-events-none absolute left-[32%] -top-22 z-5 h-96 w-96 rounded-full" aria-hidden="true" />
      <div className="hero-breath-wave hero-breath-wave-three pointer-events-none absolute -right-40 top-4 z-5 h-132 w-132 rounded-full" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_6%_46%,rgba(249,115,22,0.26),rgba(23,20,34,0)_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_98%_5%,rgba(249,115,22,0.82),rgba(23,20,34,0)_28%)]" />
      <div className="pointer-events-none absolute -right-10 -top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.68),rgba(249,115,22,0)_72%)] blur-[2px]" aria-hidden="true" />
      <div className="spin-right-loop pointer-events-none absolute right-24 top-22 h-24 w-24 rounded-full bg-[radial-gradient(circle,#ffffff_1.4px,transparent_1.4px)] bg-size-[9px_9px] opacity-45" aria-hidden="true" />
      <div className="pointer-events-none absolute left-40 bottom-24 h-18 w-18 rotate-45 bg-[radial-gradient(circle,#ffffff_1.4px,transparent_1.4px)] bg-size-[7px_7px] opacity-40" aria-hidden="true" />

      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-36 w-44"
        viewBox="0 0 176 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M176 5C154 21 130 8 114 19C97 31 106 58 88 68C71 78 47 56 27 67C9 76 2 103 0 120"
          stroke="rgba(255,255,255,0.78)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="site-container relative z-10 grid gap-12 lg:grid-cols-[1fr_0.96fr] lg:items-start">
        <div>
          <h2 id="contact-message-heading" className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Have any project on
            <br />
            mind! feel free contact
            <br />
            with us or <span className="text-[#ff6b3d]">say hello</span>
          </h2>

          <div className="mt-12 max-w-xl border border-white/12 bg-[#191726]/45 px-8 py-8">
            <ul className="space-y-7">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ff6b3d] text-white">
                      <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                    </span>

                    {"href" in item ? (
                      <a
                        href="mailto:ashirafkanny04@gmail.com"
                        className="block"
                        aria-label="Email ashirafkanny04@gmail.com"
                        title="ashirafkanny04@gmail.com"
                      >
                        <p className="text-base font-medium text-white/90">{item.label}</p>
                        <p className="mt-0.5 break-all text-xl text-white transition-colors hover:text-[#ff6b3d] sm:text-2xl">{item.value}</p>
                      </a>
                    ) : (
                      <div>
                        <p className="text-base font-medium text-white/90">{item.label}</p>
                        <p className="mt-0.5 text-xl text-white sm:text-2xl">{item.value}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-[#f5f5f6] px-8 py-8 text-[#1E293B] shadow-[0_14px_32px_rgba(10,12,24,0.22)] lg:mt-8">
          <h3 className="text-center text-3xl font-semibold">Send us Message</h3>

          <form className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="h-10 w-full rounded-sm border border-[#CCD8E9] bg-transparent px-4 text-xs text-[#1E293B] outline-none placeholder:text-[#1E293B]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-10 w-full rounded-sm border border-[#CCD8E9] bg-transparent px-4 text-xs text-[#1E293B] outline-none placeholder:text-[#1E293B]"
            />
            <input
              type="text"
              placeholder="Website"
              className="h-10 w-full rounded-sm border border-[#CCD8E9] bg-transparent px-4 text-xs text-[#1E293B] outline-none placeholder:text-[#1E293B]"
            />
            <textarea
              rows={5}
              placeholder="Write Message"
              className="w-full rounded-sm border border-[#CCD8E9] bg-transparent px-4 py-3 text-xs text-[#1E293B] outline-none placeholder:text-[#1E293B]"
            />

            <button
              type="submit"
              className="mx-auto mt-3 inline-flex h-11 w-48 items-center justify-center rounded-full bg-[#ff6b3d] text-xs font-semibold text-white transition-colors hover:bg-[#ff7d54]"
            >
              Send Messages &raquo;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}