export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "custom-furniture",
    title: "Custom Furniture Manufacturing",
    description:
      "Bespoke pieces built to your exact specifications — from single statement items to full room sets.",
    icon: "Hammer",
  },
  {
    slug: "contract-production",
    title: "Contract & Bulk Production",
    description:
      "Reliable high-volume production for hotels, offices, cafés and retail chains with consistent quality.",
    icon: "Factory",
  },
  {
    slug: "oem-odm",
    title: "OEM / ODM Services",
    description:
      "White-label manufacturing and design collaboration for furniture brands and distributors worldwide.",
    icon: "Package",
  },
  {
    slug: "design-consultation",
    title: "Design & Prototyping",
    description:
      "In-house design team turns concepts into 3D models, samples and production-ready drawings.",
    icon: "PencilRuler",
  },
  {
    slug: "finishing",
    title: "Finishing & Upholstery",
    description:
      "Premium wood finishing, lacquer, veneer and upholstery work by experienced craftsmen.",
    icon: "Paintbrush",
  },
  {
    slug: "logistics",
    title: "Export & Logistics",
    description:
      "Packing, documentation and worldwide shipping handled end-to-end for a hassle-free delivery.",
    icon: "Ship",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "grand-hotel-suite",
    title: "Grand Hotel Suite",
    category: "Hospitality",
    year: "2025",
    description:
      "Full furniture package for 120 suites — beds, wardrobes, desks and lounge seating in solid teak.",
  },
  {
    slug: "nordic-office-hub",
    title: "Nordic Office Hub",
    category: "Commercial",
    year: "2025",
    description:
      "Modular workstation system and meeting room furniture for a 400-seat tech campus.",
  },
  {
    slug: "coastal-villa",
    title: "Coastal Villa Collection",
    category: "Residential",
    year: "2024",
    description:
      "Custom indoor-outdoor furniture in weather-resistant teak for a private beachfront residence.",
  },
  {
    slug: "artisan-cafe-chain",
    title: "Artisan Café Chain",
    category: "Retail & F&B",
    year: "2024",
    description:
      "Rolled out identical café fit-outs across 18 locations with a 6-week production cycle.",
  },
  {
    slug: "boutique-retail",
    title: "Boutique Retail Fixtures",
    category: "Retail & F&B",
    year: "2023",
    description:
      "Display units, counters and shelving for a luxury fashion retailer's flagship stores.",
  },
  {
    slug: "heritage-restoration",
    title: "Heritage Restoration",
    category: "Restoration",
    year: "2023",
    description:
      "Careful restoration and reproduction of period furniture for a heritage boutique hotel.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "choosing-teak-vs-mahogany",
    title: "Choosing Teak vs Mahogany for Contract Furniture",
    excerpt:
      "A practical comparison of durability, cost and finish options to help you specify the right hardwood.",
    date: "2026-09-18",
    author: "Barkajaya Team",
    category: "Materials",
  },
  {
    slug: "hotel-furniture-lead-times",
    title: "How to Plan Hotel Furniture Lead Times",
    excerpt:
      "Production, finishing and shipping timelines explained so your opening date stays on track.",
    date: "2026-08-30",
    author: "Barkajaya Team",
    category: "Production",
  },
  {
    slug: "sustainable-wood-sourcing",
    title: "Sustainable Wood Sourcing at Barkajaya",
    excerpt:
      "How we source legally harvested timber and reduce waste across our Jepara workshop.",
    date: "2026-08-12",
    author: "Barkajaya Team",
    category: "Sustainability",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Barkajaya delivered 120 hotel suites on time and the quality exceeded our expectations. A true production partner.",
    name: "Sarah Mitchell",
    role: "Procurement Director, Grand Hotel Group",
  },
  {
    quote:
      "Their design team translated our concept into production-ready furniture flawlessly. We've reordered three times.",
    name: "Andreas Weber",
    role: "Founder, Nordic Workspace",
  },
  {
    quote:
      "Consistent quality across 18 café locations. Their export logistics made international rollout effortless.",
    name: "Putri Handayani",
    role: "Operations Lead, Artisan Café",
  },
];
