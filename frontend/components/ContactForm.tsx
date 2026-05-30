"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xpqnynno";

type ContactFormProps = {
  selectedPlan?: string;
};

const planOptions = [
  "BASIC PLAN",
  "STANDARD PLAN",
  "GOLDER PLAN",
  "PLATINUM PLAN",
];

export default function ContactForm({ selectedPlan = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(event.currentTarget);
      formData.set("_subject", "New Website Inquiry");
      const email = formData.get("email");
      if (email) {
        formData.set("_replyto", String(email));
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      let data: { errors?: Array<{ message?: string }> } | null = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (data?.errors && data.errors.length > 0) {
        throw new Error(data.errors.map((err) => err.message).filter(Boolean).join(" "));
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (error) {
      setStatus("success");
    }
  };

  return (
    <div className="mt-6 max-w-xl">
      <form className="mt-5 space-y-4" aria-label="Contact form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/70 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70 focus:border-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/70 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70 focus:border-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="w-full rounded-lg border border-white/70 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70 focus:border-white"
          />
        </div>
        <div>
          <label htmlFor="plan" className="mb-2 block text-sm font-medium text-white">
            Package
          </label>
          <select
            id="plan"
            name="plan"
            defaultValue={selectedPlan}
            className="w-full rounded-lg border border-white/70 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
          >
            <option value="" className="text-[#0F172A]">
              Select a package
            </option>
            {planOptions.map((plan) => (
              <option key={plan} value={plan} className="text-[#0F172A]">
                {plan}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full rounded-lg border border-white/70 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70 focus:border-white"
          />
        </div>
        <div>
          <button
            type="submit"
            aria-label="Send message"
            className="app-animated-button rounded-lg bg-[#012166] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0F172A] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" ? (
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
              Thanks! Your message has been sent successfully. We will reply soon.
            </div>
          ) : null}
          {status === "error" ? (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Something went wrong. Please try again.
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
