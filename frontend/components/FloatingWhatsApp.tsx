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
      <span className="whatsapp-fab__icon-wrap" aria-hidden="true">
        <Image
          src="/WhatsApp_icon.webp"
          alt=""
          width={64}
          height={64}
          className="whatsapp-fab__image object-contain"
        />
      </span>
    </a>
  );
}
