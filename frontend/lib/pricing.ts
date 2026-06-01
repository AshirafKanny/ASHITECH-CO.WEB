export type PricingPackage = {
  name: string;
  price: string;
  oldPrice: string;
  features: string[];
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "BASIC PLAN",
    price: "UGX 800,000",
    oldPrice: "UGX 900,000",
    features: [
      "Landing page design (6 custom pages)",
      "HTML+CSS design",
      "Social Media Marketing",
      "Domin hosting provider",
      "Online support (24/7)",
    ],
  },
  {
    name: "STANDARD PLAN",
    price: "UGX 1,500,000",
    oldPrice: "UGX 1,700,000",
    features: [
      "Landing page design (10 custom pages)",
      "HTML+CSS design",
      "Social Media Marketing",
      "Domin hosting provider",
      "Online support (24/7)",
    ],
  },
  {
    name: "GOLDEN PLAN",
    price: "UGX 2,500,000",
    oldPrice: "UGX 2,800,000",
    features: [
      "Landing page design (30 custom pages)",
      "HTML+CSS design",
      "Social Media Marketing",
      "Domin hosting provider",
      "Online support (24/7)",
    ],
  },
  {
    name: "PLATINUM PLAN",
    price: "UGX 4,000,000",
    oldPrice: "UGX 4,500,000",
    features: [
      "Landing page design (Unlimited pages)",
      "HTML+CSS design",
      "Social Media Marketing",
      "Domin hosting provider",
      "Online support (24/7)",
    ],
  },
];