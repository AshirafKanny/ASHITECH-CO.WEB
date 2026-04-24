import Image from "next/image";

const whatsappHref = "https://wa.me/256761856198";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-fab"
    >
      <span className="whatsapp-fab__wave whatsapp-fab__wave--one" aria-hidden="true" />
      <span className="whatsapp-fab__wave whatsapp-fab__wave--two" aria-hidden="true" />
      <span className="whatsapp-fab__icon-wrap" aria-hidden="true">
        <Image
          src="/pot/whatsappp.webp"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </span>
      <span className="whatsapp-fab__label">Chat on WhatsApp</span>
    </a>
  );
}
