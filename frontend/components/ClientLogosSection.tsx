import Image from "next/image";

const topRowLogos = [
  { src: "/L1.webp", alt: "Client logo 1" },
  { src: "/L2.webp", alt: "Client logo 2" },
  { src: "/L3.webp", alt: "Client logo 3" },
  { src: "/L4.webp", alt: "Client logo 4" },
];

const bottomRowLogos = [
  { src: "/L5.webp", alt: "Client logo 5" },
  { src: "/L6.webp", alt: "Client logo 6" },
  { src: "/L7.webp", alt: "Client logo 7" },
  { src: "/L8.webp", alt: "Client logo 8" },
];

const topRowMarquee = [...topRowLogos, ...topRowLogos];
const bottomRowMarquee = [...bottomRowLogos, ...bottomRowLogos];

export default function ClientLogosSection() {
  return (
    <section className="bg-white py-12" aria-label="Trusted by industries">
      <div className="site-container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
          Trusted by local industries
        </p>
        <div className="mt-8 space-y-5">
          <div className="logo-marquee" role="presentation">
            <div className="logo-marquee__track logo-marquee__track--ltr">
              {topRowMarquee.map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="logo-marquee__card">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="logo-marquee__image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-marquee" role="presentation">
            <div className="logo-marquee__track logo-marquee__track--rtl">
              {bottomRowMarquee.map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="logo-marquee__card">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="logo-marquee__image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
