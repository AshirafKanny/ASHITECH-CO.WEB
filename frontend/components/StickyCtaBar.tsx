import Link from "next/link";

export default function StickyCtaBar() {
  return (
    <div className="sticky-cta" aria-label="Quick contact actions">
      <Link href="/contact" className="sticky-cta__primary">
        Get a Quote
      </Link>
      <a href="tel:+256744429808" className="sticky-cta__secondary">
        Call Now
      </a>
      <a
        href="https://wa.me/256761856198"
        target="_blank"
        rel="noreferrer"
        className="sticky-cta__secondary"
      >
        WhatsApp
      </a>
    </div>
  );
}
