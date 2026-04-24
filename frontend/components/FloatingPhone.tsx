"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

const contactNumbers = [
  {
    carrier: "MTN",
    displayNumber: "0761856198",
    tel: "+256761856198",
    logoClass: "phone-fab__logo--mtn",
  },
  {
    carrier: "AIRTEL",
    displayNumber: "0744429808",
    tel: "+256744429808",
    logoClass: "phone-fab__logo--airtel",
  },
];

export default function FloatingPhone() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="phone-fab-wrap">
      {isOpen ? (
        <div className="phone-fab__panel" role="dialog" aria-label="Phone numbers">
          <p className="phone-fab__panel-title">Call Us</p>
          <ul className="phone-fab__list">
            {contactNumbers.map((item) => (
              <li key={item.carrier}>
                <a href={`tel:${item.tel}`} className="phone-fab__item" aria-label={`Call ${item.carrier} ${item.displayNumber}`}>
                  <span className={`phone-fab__logo ${item.logoClass}`} aria-hidden="true">
                    {item.carrier}
                  </span>
                  <span className="phone-fab__number">{item.displayNumber}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle phone numbers"
        className="phone-fab"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="phone-fab__wave phone-fab__wave--one" aria-hidden="true" />
        <span className="phone-fab__wave phone-fab__wave--two" aria-hidden="true" />
        <span className="phone-fab__icon-wrap" aria-hidden="true">
          <Phone size={22} strokeWidth={2.2} />
        </span>
        <span className="phone-fab__label">Call Us</span>
      </button>
    </div>
  );
}
