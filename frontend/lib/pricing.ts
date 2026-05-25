export type PricingPackage = {
  name: string;
  price: string;
  oldPrice: string;
};

export const pricingPackages: PricingPackage[] = [
  { name: "BASIC PLAN", price: "UGX 800,000", oldPrice: "UGX 900,000" },
  { name: "STANDARD PLAN", price: "UGX 1,500,000", oldPrice: "UGX 1,700,000" },
  { name: "GOLDER PLAN", price: "UGX 2,500,000", oldPrice: "UGX 2,800,000" },
  { name: "PLATINUM PLAN", price: "UGX 4,000,000", oldPrice: "UGX 4,500,000" },
];

export const pricingFeatures = [
  "Landing page design (no pages)",
  "HTML+CSS design (12 pages)",
  "Social Media Marketing",
  "Domin hosting provider",
  "Online support (24/7)",
];