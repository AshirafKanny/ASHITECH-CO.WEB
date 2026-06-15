export type Location = {
  slug: string;
  name: string;
  region: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  businessContext: string;
  industries: string[];
  faqItems: { question: string; answer: string }[];
  image: string;
};

// Single hero image for all locations
const HERO_IMAGE = "/city1.webp";

// Image rotation for different locations - creates visual variety
const locationImages = [
  "/city1.webp",
  "/city2.webp",
  "/city3.webp",
  "/city4.webp",
  "/city5.webp",
  "/city6.webp",
  "/city7.webp",
  "/city8.webp",
];

const getLocationImage = (index: number) => {
  return locationImages[index % locationImages.length];
};

const baseLocations = [
  { slug: "kampala", name: "Kampala", region: "Kampala Area", description: "Uganda's capital city", heroTitle: "Professional Website Design Services in Kampala", heroSubtitle: "Helping Kampala businesses build modern websites", businessContext: "Kampala is Uganda's economic powerhouse.", industries: ["Retail", "Restaurants", "Clinics", "Hotels", "Professional Services"], faqItems: [{ question: "Cost?", answer: "Varies based on complexity. Contact for quote." }, { question: "In-person meetings?", answer: "Yes, we meet clients in Kampala." }] },
  { slug: "ntinda", name: "Ntinda", region: "Kampala Area", description: "Active commercial center", heroTitle: "Web Design for Ntinda", heroSubtitle: "Professional websites for Ntinda", businessContext: "Vibrant commercial center with diverse businesses.", industries: ["Restaurants", "Clinics", "Retail", "Professional Services"], faqItems: [{ question: "Ntinda?", answer: "Yes, we work in Ntinda." }] },
  { slug: "kololo", name: "Kololo", region: "Kampala Area", description: "Upscale neighborhood", heroTitle: "Premium Web Design for Kololo", heroSubtitle: "Luxury websites for premium businesses", businessContext: "Upscale area with high-end businesses.", industries: ["Luxury Hotels", "Fine Dining", "Professional Services", "Retail"], faqItems: [{ question: "Luxury?", answer: "Yes, we specialize in premium design." }] },
  { slug: "naguru", name: "Naguru", region: "Kampala Area", description: "Growing mixed-use neighborhood", heroTitle: "Web Design for Naguru", heroSubtitle: "Modern websites for Naguru", businessContext: "Growing neighborhood with mixed businesses.", industries: ["Cafes", "Retail", "Salons", "Schools"], faqItems: [{ question: "Naguru?", answer: "Yes, we serve Naguru." }] },
  { slug: "bugolobi", name: "Bugolobi", region: "Kampala Area", description: "Historic neighborhood", heroTitle: "Websites for Bugolobi", heroSubtitle: "Cultural web design", businessContext: "Historic area with cultural significance.", industries: ["Hotels", "Restaurants", "Cultural Centers", "Retail"], faqItems: [{ question: "Cultural?", answer: "Yes, cultural heritage in design." }] },
  { slug: "nakasero", name: "Nakasero", region: "Kampala Area", description: "Central commercial area", heroTitle: "Web Design for Nakasero", heroSubtitle: "Professional websites for Nakasero", businessContext: "Central commercial and residential area.", industries: ["Corporate", "Retail", "Health Services", "Education"], faqItems: [{ question: "Corporate?", answer: "Yes, corporate clients." }] },
  { slug: "najjera", name: "Najjera", region: "Kampala Area", description: "Emerging business district", heroTitle: "Web Design for Najjera Startups", heroSubtitle: "Affordable websites for emerging businesses", businessContext: "Emerging area with growing commercial activity.", industries: ["Retail", "Restaurants", "Clinics", "Services"], faqItems: [{ question: "Startups?", answer: "Yes, affordable packages." }] },
  { slug: "kisaasi", name: "Kisaasi", region: "Kampala Area", description: "Residential with commercial growth", heroTitle: "Web Design for Kisaasi", heroSubtitle: "Professional websites for Kisaasi", businessContext: "Transitioning to commercial hub.", industries: ["Retail", "Restaurants", "Schools", "Clinics"], faqItems: [{ question: "Schools?", answer: "Yes, enrollment and events." }] },
  { slug: "bukoto", name: "Bukoto", region: "Kampala Area", description: "Mixed neighborhood", heroTitle: "Web Design for Bukoto", heroSubtitle: "Professional websites for all", businessContext: "Diverse area with varied businesses.", industries: ["Retail", "Restaurants", "Clinics", "Schools"], faqItems: [{ question: "Best practices?", answer: "Professional design, mobile optimization." }] },
  { slug: "muyenga", name: "Muyenga", region: "Kampala Area", description: "Upscale with tourism", heroTitle: "Premium Design for Muyenga", heroSubtitle: "Luxury websites", businessContext: "Upscale area attracting tourists.", industries: ["Restaurants", "Hotels", "Tourism", "Retail"], faqItems: [{ question: "Tourism?", answer: "Yes, with booking systems." }] },
  { slug: "lubowa", name: "Lubowa", region: "Kampala Area", description: "Emerging area", heroTitle: "Web Design for Lubowa", heroSubtitle: "Modern websites", businessContext: "Emerging area needing online presence.", industries: ["Retail", "Restaurants", "Services"], faqItems: [{ question: "Affordable?", answer: "Yes, flexible pricing." }] },
  { slug: "munyonyo", name: "Munyonyo", region: "Kampala Area", description: "Waterfront area", heroTitle: "Website Design for Munyonyo", heroSubtitle: "Professional hospitality sites", businessContext: "Waterfront with tourism focus.", industries: ["Hotels", "Restaurants", "Tourism", "Events"], faqItems: [{ question: "Booking?", answer: "Yes, integrated systems." }] },
  { slug: "bunga", name: "Bunga", region: "Kampala Area", description: "Expanding commercial", heroTitle: "Web Design for Bunga", heroSubtitle: "Professional websites", businessContext: "Expanding with new businesses.", industries: ["Retail", "Restaurants", "Services"], faqItems: [{ question: "Timeline?", answer: "2-3 weeks basic, 4-8 weeks complex." }] },
  { slug: "kansanga", name: "Kansanga", region: "Kampala Area", description: "Major commercial hub", heroTitle: "Web Design in Kansanga", heroSubtitle: "Professional sites", businessContext: "Major hub with diverse businesses.", industries: ["Retail", "Restaurants", "Hotels", "Services"], faqItems: [{ question: "eCommerce?", answer: "Yes, full platforms." }] },
  { slug: "makindye", name: "Makindye", region: "Kampala Area", description: "Diverse with institutions", heroTitle: "Web Design for Makindye", heroSubtitle: "Institutional websites", businessContext: "Diverse area with institutions.", industries: ["Schools", "Health", "Retail", "Services"], faqItems: [{ question: "Institutions?", answer: "Yes, schools and hospitals." }] },
  { slug: "kawempe", name: "Kawempe", region: "Kampala Area", description: "Busy commercial area", heroTitle: "Web Design for Kawempe", heroSubtitle: "Community websites", businessContext: "Busy serving local community.", industries: ["Retail", "Restaurants", "Clinics", "Schools"], faqItems: [{ question: "Success?", answer: "We track all metrics." }] },
  { slug: "rubaga", name: "Rubaga", region: "Kampala Area", description: "Historic cultural area", heroTitle: "Websites for Rubaga", heroSubtitle: "Cultural web design", businessContext: "Historic with cultural significance.", industries: ["Religious", "Retail", "Restaurants"], faqItems: [{ question: "Community?", answer: "Yes, churches and centers." }] },
  { slug: "nakawa", name: "Nakawa", region: "Kampala Area", description: "Industrial area", heroTitle: "B2B Web Design for Nakawa", heroSubtitle: "Industrial sites", businessContext: "Industrial with manufacturing focus.", industries: ["Manufacturing", "Logistics", "Services"], faqItems: [{ question: "B2B?", answer: "Yes, professional B2B." }] },
  { slug: "kyaliwajjala", name: "Kyaliwajjala", region: "Kampala Area", description: "Growing suburb", heroTitle: "Web Design for Kyaliwajjala", heroSubtitle: "Emerging business sites", businessContext: "Growing suburban area.", industries: ["Retail", "Restaurants", "Schools"], faqItems: [{ question: "Suburbs?", answer: "Yes, all areas." }] },
  { slug: "namugongo", name: "Namugongo", region: "Kampala Area", description: "Religious center", heroTitle: "Websites for Namugongo", heroSubtitle: "Religious org sites", businessContext: "Religious and cultural center.", industries: ["Religious Sites", "Tourism", "Hospitality"], faqItems: [{ question: "Religious?", answer: "Yes, churches and temples." }] },
  { slug: "entebbe", name: "Entebbe", region: "Greater Kampala", description: "Tourism destination", heroTitle: "Web Design for Entebbe Tourism", heroSubtitle: "Tourism sites attracting visitors", businessContext: "Major tourism hub and gateway.", industries: ["Hotels", "Tourism", "Restaurants", "Travel Agencies"], faqItems: [{ question: "Tourism?", answer: "Yes, booking systems." }] },
  { slug: "jinja", name: "Jinja", region: "Eastern Uganda", description: "Industrial hub", heroTitle: "Web Design for Jinja", heroSubtitle: "Industrial and tourism sites", businessContext: "Industrial and tourism center.", industries: ["Manufacturing", "Tourism", "Hospitality"], faqItems: [{ question: "Industrial?", answer: "Yes, manufacturing sites." }] },
  { slug: "mukono", name: "Mukono", region: "Greater Kampala", description: "Growing suburb", heroTitle: "Web Design for Mukono", heroSubtitle: "Suburban professional sites", businessContext: "Rapidly growing business center.", industries: ["Schools", "Clinics", "Retail"], faqItems: [{ question: "Schools?", answer: "Yes, enrollment systems." }] },
  { slug: "mbarara", name: "Mbarara", region: "Western Uganda", description: "Regional hub", heroTitle: "Web Design for Mbarara", heroSubtitle: "Regional business sites", businessContext: "Major commercial hub in southwest.", industries: ["Retail", "Hospitality", "Healthcare"], faqItems: [{ question: "Regional?", answer: "Yes, all regions." }] },
  { slug: "gulu", name: "Gulu", region: "Northern Uganda", description: "Growing center", heroTitle: "Web Design for Gulu", heroSubtitle: "Northern Uganda sites", businessContext: "Emerging business center.", industries: ["NGOs", "Education", "Healthcare"], faqItems: [{ question: "NGOs?", answer: "Yes, donor portals." }] },
  { slug: "fort-portal", name: "Fort Portal", region: "Western Uganda", description: "Tourism gateway", heroTitle: "Web Design for Fort Portal", heroSubtitle: "Tourism sites", businessContext: "Gateway to Rwenzori Mountains.", industries: ["Tourism", "Hotels", "Tours"], faqItems: [{ question: "Tourism?", answer: "Yes, bookings." }] },
  { slug: "mbale", name: "Mbale", region: "Eastern Uganda", description: "Mountain town", heroTitle: "Web Design for Mbale", heroSubtitle: "Tourism and agricultural sites", businessContext: "Mountain town with tourism and agriculture.", industries: ["Tourism", "Agriculture", "Hospitality"], faqItems: [{ question: "Agricultural?", answer: "Yes, farms and cooperatives." }] },
  { slug: "masaka", name: "Masaka", region: "Central Uganda", description: "Trading center", heroTitle: "Web Design for Masaka", heroSubtitle: "Regional trade sites", businessContext: "Regional trading center.", industries: ["Retail", "Hospitality", "Healthcare"], faqItems: [{ question: "Regional?", answer: "Yes, dedicated expertise." }] },
  { slug: "arua", name: "Arua", region: "Northern Uganda", description: "Northwestern hub", heroTitle: "Web Design for Arua", heroSubtitle: "Northwest Uganda sites", businessContext: "Major commercial center in northwest.", industries: ["Retail", "Hospitality", "Services"], faqItems: [{ question: "North?", answer: "Yes, all Uganda." }] },
  { slug: "lira", name: "Lira", region: "Northern Uganda", description: "Regional hub", heroTitle: "Web Design for Lira", heroSubtitle: "Lira business sites", businessContext: "Regional commercial hub.", industries: ["Retail", "Hospitality", "Healthcare"], faqItems: [{ question: "Success?", answer: "We track metrics." }] },
  { slug: "soroti", name: "Soroti", region: "Eastern Uganda", description: "Pastoral center", heroTitle: "Web Design for Soroti", heroSubtitle: "Agricultural sites", businessContext: "Pastoral and commercial center.", industries: ["Livestock", "Retail", "Hospitality"], faqItems: [{ question: "Livestock?", answer: "Yes, agribusiness." }] },
  { slug: "hoima", name: "Hoima", region: "Western Uganda", description: "Oil hub", heroTitle: "Web Design for Hoima", heroSubtitle: "Energy and commercial sites", businessContext: "Emerging oil and commercial hub.", industries: ["Oil & Energy", "Hospitality", "Services"], faqItems: [{ question: "Energy?", answer: "Yes, oil companies." }] },
  { slug: "kabale", name: "Kabale", region: "Southwestern Uganda", description: "Mountain tourism", heroTitle: "Web Design for Kabale Tourism", heroSubtitle: "Tourist sites", businessContext: "Scenic mountain destination.", industries: ["Tourism", "Hotels", "Restaurants"], faqItems: [{ question: "Tourism?", answer: "Yes, galleries and bookings." }] },
  { slug: "kasese", name: "Kasese", region: "Southwestern Uganda", description: "Adventure gateway", heroTitle: "Web Design for Kasese", heroSubtitle: "Adventure tourism sites", businessContext: "Gateway to top destinations.", industries: ["Tourism", "Adventure", "Hotels"], faqItems: [{ question: "International?", answer: "Yes, multi-language SEO." }] },
  { slug: "tororo", name: "Tororo", region: "Eastern Uganda", description: "Mining center", heroTitle: "Web Design for Tororo", heroSubtitle: "B2B industrial sites", businessContext: "Mining and commercial center.", industries: ["Mining", "Commerce", "Services"], faqItems: [{ question: "B2B?", answer: "Yes, professional B2B." }] },
  { slug: "iganga", name: "Iganga", region: "Eastern Uganda", description: "Agricultural hub", heroTitle: "Web Design for Iganga", heroSubtitle: "Agricultural sites", businessContext: "Agricultural trading center.", industries: ["Agriculture", "Retail", "Services"], faqItems: [{ question: "Agricultural?", answer: "Yes, farmers and traders." }] },
];

export const locations: Location[] = baseLocations.map((loc, index) => ({
  ...loc,
  image: getLocationImage(index),
}));

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((loc) => loc.slug === slug);
};

export const getAllLocationSlugs = () => {
  return locations.map((loc) => loc.slug);
};
