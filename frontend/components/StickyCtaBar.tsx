import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StickyCtaBar() {
  return (
    <div className="sticky-cta" aria-label="Quick contact actions">
      <Button href="/contact" variant="primary" className="sticky-cta__primary">Get a Quote</Button>
      <Button href="tel:+256744429808" variant="secondary" className="sticky-cta__secondary">Call Now</Button>
      <Button href="https://wa.me/256761856198" variant="secondary" target="_blank" rel="noopener noreferrer" className="sticky-cta__secondary">WhatsApp</Button>
    </div>
  );
}
