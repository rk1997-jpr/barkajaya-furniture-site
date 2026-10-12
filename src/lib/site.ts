export const siteConfig = {
  name: "Barkajaya Indonesia",
  tagline: "Premium Furniture Manufacturing & Production Services",
  description:
    "Barkajaya Indonesia crafts custom furniture for homes, offices, hotels and retail. From design to production to installation.",
  url: "https://barkajaya-furniture-site.vercel.app",
  email: "hello@barkajaya.id",
  phone: "+62 812-3456-7890",
  address: "Jepara, Central Java, Indonesia",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
