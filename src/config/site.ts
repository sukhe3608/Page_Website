export const site = {
  name: "Shiva Engineers",
  shortName: "Shiva Engineers",
  tagline: "Innovating Smart and Safe Environments Since 2016",
  description:
    "Shiva Engineers delivers fire protection, security and automation solutions for aviation, defence, healthcare, hospitality and corporate clients across India. Based out of New Delhi, we provide certified design, supply, installation, commissioning and AMC support for reliable, compliant and future-ready systems.",
  /* TODO: replace with the real production domain before launch */
  url: "https://sukhe3608.github.io/Page_Website/",
  contactPerson: "Deepak Karoriya",
  email: "info@shivaengineer.com",
  phone: "+91 98701 25788",
  address: "7/29, Okhla Phase III, New Delhi, Delhi – 110020",
  hours: "Mon – Sat, 9:00 – 18:00 (IST)",
  founded: 2016,
  socials: [{ label: "Website", href: "https://www.shivaengineer.com" }],
} as const;

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    { label: "Company", href: "/about" },
    { label: "Resources", href: "/insights" },
  ],
} as const;