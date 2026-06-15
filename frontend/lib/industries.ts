export type Industry = {
  slug: string;
  name: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  industryOverview: string;
  challenges: string[];
  solutions: string[];
  faqItems: { question: string; answer: string }[];
  image: string;
};

const industryImages = [
  "/service-four1.webp",
  "/service-four2.webp",
  "/service-four3.webp",
  "/service-four4.webp",
  "/service-four5.webp",
  "/L1.webp",
  "/L2.webp",
  "/L3.webp",
  "/L4.webp",
];

const getRandomImageForIndustry = (seed: string) => {
  const hash = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return industryImages[hash % industryImages.length];
};

export const industries: Industry[] = [
  {
    slug: "schools-and-educational-institutions",
    name: "Schools & Educational Institutions",
    description: "Website solutions for schools, colleges, and educational centers",
    heroTitle: "Professional Websites for Schools & Educational Institutions",
    heroSubtitle: "Empower your school with a modern website for student recruitment and engagement",
    industryOverview:
      "Schools and educational institutions need websites to attract students, communicate with parents, and showcase academic programs. A professional education website builds credibility and simplifies enrollment.",
    challenges: [
      "Attracting prospective students and parents",
      "Managing course and program information",
      "Facilitating online inquiries and registrations",
      "Communicating school news and updates",
      "Showcasing student achievements and faculty credentials",
    ],
    solutions: [
      "Professional homepage with clear program listings",
      "Online admission inquiry forms",
      "Staff and faculty directory with credentials",
      "News/blog section for updates",
      "Photo galleries of campus and activities",
      "Event calendar for parents and students",
      "Mobile-responsive design for accessibility",
    ],
    faqItems: [
      {
        question: "What features should a school website have?",
        answer:
          "Key features include program info, faculty directory, news updates, inquiry forms, event calendars, and parent communication tools.",
      },
      {
        question: "Can you help with student online enrollment?",
        answer:
          "Yes, we build online enrollment systems and inquiry forms tailored for schools.",
      },
    ],
    image: getRandomImageForIndustry("schools"),
  },
  {
    slug: "hotels-and-hospitality",
    name: "Hotels & Hospitality",
    description: "Website design for hotels, resorts, and hospitality businesses",
    heroTitle: "Hotel & Hospitality Websites That Drive Bookings",
    heroSubtitle:
      "Increase direct bookings with stunning hotel websites optimized for guest conversion",
    industryOverview:
      "Hotels and hospitality businesses compete on online visibility. A professional website with booking integration, room galleries, and guest reviews is essential for attracting bookings.",
    challenges: [
      "Competing with major booking platforms",
      "Showcasing rooms and amenities effectively",
      "Managing online reservations",
      "Building guest trust and credibility",
      "Increasing direct bookings vs. OTA commissions",
    ],
    solutions: [
      "Beautiful room galleries and virtual tours",
      "Integrated booking engine",
      "Real-time availability calendar",
      "Guest testimonials and reviews section",
      "Amenities and services showcase",
      "Event/conference facility information",
      "Integration with review platforms",
    ],
    faqItems: [
      {
        question: "Can you integrate booking systems?",
        answer:
          "Yes, we integrate booking engines like Booking.com, Airbnb, and custom reservation systems.",
      },
      {
        question: "How do I increase direct bookings through my website?",
        answer:
          "Professional design, clear pricing, guest reviews, and prominent CTAs increase direct bookings.",
      },
    ],
    image: getRandomImageForIndustry("hotels"),
  },
  {
    slug: "ngo-and-nonprofit-organizations",
    name: "NGO & Nonprofit Organizations",
    description: "Websites designed for NGOs and nonprofit impact organizations",
    heroTitle: "Professional Websites for NGOs & Nonprofit Organizations",
    heroSubtitle: "Tell your organization's story and attract donors with an impactful website",
    industryOverview:
      "NGOs and nonprofits need websites to communicate their mission, attract donors, showcase impact, and recruit volunteers. A professional website builds trust and credibility.",
    challenges: [
      "Building donor trust and credibility",
      "Showcasing impact and programs",
      "Managing donations online",
      "Recruiting and engaging volunteers",
      "Communicating mission and vision effectively",
    ],
    solutions: [
      "Clear mission and vision statements",
      "Impact stories and case studies",
      "Donation system integration",
      "Volunteer application forms",
      "Program information and updates",
      "Team and leadership profiles",
      "Financial transparency information",
    ],
    faqItems: [
      {
        question: "Can you build donation systems for NGOs?",
        answer:
          "Yes, we integrate secure donation systems and can facilitate recurring donations.",
      },
      {
        question: "How do we tell our impact story effectively?",
        answer:
          "Through compelling narratives, case studies, photos, and testimonials from beneficiaries.",
      },
    ],
    image: getRandomImageForIndustry("ngo"),
  },
  {
    slug: "healthcare-and-medical-clinics",
    name: "Healthcare & Medical Clinics",
    description: "Professional websites for hospitals, clinics, and healthcare providers",
    heroTitle: "Medical Clinic Websites That Build Patient Trust",
    heroSubtitle:
      "Professional healthcare website design to attract patients and streamline clinic operations",
    industryOverview:
      "Healthcare providers need websites to build patient trust, provide appointment booking, and share health information. A professional medical website increases patient confidence and inquiries.",
    challenges: [
      "Building patient trust and credibility",
      "Managing appointment bookings",
      "Sharing health information effectively",
      "Compliance with healthcare regulations",
      "Highlighting medical expertise and certifications",
    ],
    solutions: [
      "Professional doctor/staff profiles with credentials",
      "Online appointment scheduling",
      "Health condition and treatment information",
      "Patient testimonials and success stories",
      "Service and facility showcase",
      "Health blog for patient education",
      "HIPAA-compliant design",
    ],
    faqItems: [
      {
        question: "Can you build online appointment systems?",
        answer:
          "Yes, we integrate appointment booking systems that send confirmations and reminders.",
      },
      {
        question: "How do we ensure patient data privacy?",
        answer:
          "We implement HIPAA compliance, SSL encryption, and secure data handling protocols.",
      },
    ],
    image: getRandomImageForIndustry("healthcare"),
  },
  {
    slug: "restaurants-and-food-business",
    name: "Restaurants & Food Business",
    description: "Website design for restaurants, cafes, and food businesses",
    heroTitle: "Restaurant Websites That Drive Customer Reservations",
    heroSubtitle:
      "Build your restaurant's online presence with a website that showcases food and drives reservations",
    industryOverview:
      "Restaurants and food businesses need websites to showcase menus, accept reservations, and build brand identity. A professional food website increases foot traffic and online orders.",
    challenges: [
      "Showcasing menu items appetizingly",
      "Managing online reservations",
      "Building brand identity and loyalty",
      "Competing with food delivery platforms",
      "Capturing customer reviews and feedback",
    ],
    solutions: [
      "High-quality food photography",
      "Digital menu with pricing",
      "Online reservation system",
      "Special events and promotions showcase",
      "Customer reviews and ratings",
      "Location and hours information",
      "Integration with food delivery platforms",
    ],
    faqItems: [
      {
        question: "Can you build online ordering systems?",
        answer:
          "Yes, we integrate online ordering with payment processing and delivery logistics.",
      },
      {
        question: "How do we showcase our menu effectively?",
        answer:
          "Through professional food photography, clear descriptions, pricing, and dietary information.",
      },
    ],
    image: getRandomImageForIndustry("restaurants"),
  },
  {
    slug: "real-estate-and-property",
    name: "Real Estate & Property",
    description: "Websites for real estate companies, property agents, and property management",
    heroTitle: "Real Estate Websites That Close Property Sales",
    heroSubtitle: "Professional property websites designed to showcase properties and convert leads",
    industryOverview:
      "Real estate companies need websites to showcase properties, provide property searches, and manage leads. A professional real estate website accelerates sales and property visibility.",
    challenges: [
      "Showcasing properties effectively with photos/tours",
      "Managing property listings and inventory",
      "Capturing buyer leads",
      "Differentiating from competitors",
      "Providing property search functionality",
    ],
    solutions: [
      "Professional property galleries with virtual tours",
      "Advanced property search filters",
      "Lead capture and contact forms",
      "Property details with pricing and specifications",
      "Agent profiles and contact information",
      "Mortgage calculator tools",
      "Neighborhood information and maps",
    ],
    faqItems: [
      {
        question: "Can you build property listing systems?",
        answer:
          "Yes, we build comprehensive property management systems with search, filtering, and virtual tours.",
      },
      {
        question: "How do virtual property tours help?",
        answer:
          "Virtual tours increase buyer engagement, reduce office visits, and speed up the sales cycle.",
      },
    ],
    image: getRandomImageForIndustry("realestate"),
  },
  {
    slug: "law-firms-and-legal-services",
    name: "Law Firms & Legal Services",
    description: "Professional websites for law firms and legal service providers",
    heroTitle: "Law Firm Websites That Attract Legal Clients",
    heroSubtitle:
      "Professional legal website design to establish credibility and attract qualified clients",
    industryOverview:
      "Law firms need websites to build credibility, showcase expertise, and attract clients. A professional legal website demonstrates professionalism and attracts high-quality leads.",
    challenges: [
      "Demonstrating legal expertise and experience",
      "Building client trust",
      "Managing client confidentiality",
      "Generating qualified leads",
      "Competing with other law firms",
    ],
    solutions: [
      "Attorney bios with credentials and experience",
      "Practice areas and expertise showcase",
      "Client testimonials and case results",
      "Legal blog for thought leadership",
      "Consultation request forms",
      "Secure client portal",
      "Contact information and hours",
    ],
    faqItems: [
      {
        question: "How do law firms use websites to attract clients?",
        answer:
          "Through thought leadership content, attorney profiles, testimonials, and clear service descriptions.",
      },
      {
        question: "Can you ensure client data security?",
        answer: "Yes, we implement SSL encryption and secure client portals for confidential data.",
      },
    ],
    image: getRandomImageForIndustry("legal"),
  },
  {
    slug: "ecommerce-and-retail",
    name: "Ecommerce & Retail",
    description: "Powerful eCommerce solutions for online retail businesses",
    heroTitle: "Ecommerce Websites That Convert Visitors to Customers",
    heroSubtitle:
      "Build a high-converting online store with professional eCommerce website design",
    industryOverview:
      "eCommerce businesses need websites with robust product catalogs, payment systems, and customer management. A professional eCommerce site increases sales and customer satisfaction.",
    challenges: [
      "Showcasing products effectively",
      "Managing inventory and variants",
      "Processing payments securely",
      "Managing customer orders and shipping",
      "Building customer loyalty and repeat sales",
    ],
    solutions: [
      "Product catalog with descriptions and images",
      "Shopping cart and checkout system",
      "Multiple payment methods",
      "Inventory management system",
      "Customer accounts and order history",
      "Product reviews and ratings",
      "Email marketing integration",
    ],
    faqItems: [
      {
        question: "What payment methods should we support?",
        answer:
          "We support credit cards, mobile money (MTN, Airtel), bank transfers, and cash on delivery.",
      },
      {
        question: "How do we manage shipping and logistics?",
        answer:
          "We integrate shipping calculators, tracking systems, and courier partnerships.",
      },
    ],
    image: getRandomImageForIndustry("ecommerce"),
  },
  {
    slug: "fitness-and-wellness",
    name: "Fitness & Wellness",
    description: "Websites for gyms, fitness centers, and wellness businesses",
    heroTitle: "Fitness Website Design to Build Your Member Base",
    heroSubtitle:
      "Professional fitness website design with online booking and membership management",
    industryOverview:
      "Fitness centers and wellness businesses need websites to attract members, showcase classes, and manage registrations. A professional fitness website increases member sign-ups.",
    challenges: [
      "Attracting gym members online",
      "Showcasing classes and trainers",
      "Managing class schedules and bookings",
      "Building member engagement",
      "Retaining members through communication",
    ],
    solutions: [
      "Class schedule and trainer profiles",
      "Online membership and class booking",
      "Member portal for account management",
      "Fitness blog and tips",
      "Testimonials from successful members",
      "Gallery of facilities",
      "Email newsletters for member engagement",
    ],
    faqItems: [
      {
        question: "Can you build online class booking systems?",
        answer:
          "Yes, we build member portals with real-time class booking and cancellation.",
      },
    ],
    image: getRandomImageForIndustry("fitness"),
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((ind) => ind.slug === slug);
};

export const getAllIndustrySlugs = () => {
  return industries.map((ind) => ind.slug);
};
