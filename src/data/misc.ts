import type { LocationInfo, Partner, Stat, ProcessStep, Faq } from "@/types/content";

export const clients: string[] = [
  "KSCA",
  "DRDO",
  "NIVEDI",
  "Indian Navy",
  "NPCIL",
  "Bharat Petroleum",
  "Reliance Industries",
  "ITC Limited",
  "Coca-Cola",
  "Tata Global Beverages",
  "EY",
  "Blue Star",
  "JSW Steel",
  "Metro",
  "KEC",
  "Unilever",
  "Radisson",
  "Prestige Group",
  "Hilton Hotels",
  "ITC Hotels",
  "Hyundai Glovis",
  "KIA Motors",
  "L&T",
  "HAL",
  "Indian Railways",
  "Cloud Nine Hospital",
  "Aster CMI",
  "GSK",
  "Syngene",
  "Manipal Hospital",
  "Bal Pharma",
  "Mylan",
  "Embassy",
];

export const locations: LocationInfo[] = [
  {
    city: "Bengaluru",
    country: "India",
    address: "Office No. 3, 1st Floor, KMV Complex, 160/217/3B, Kodigehalli – Thindlu Main Rd, Muniswamappa Layout, Sahakar Nagar, Bengaluru, Karnataka 560092",
    phone: "+91 90364 15959",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [12.9716, 77.5946],
  },
  {
    city: "Chennai",
    country: "India",
    address: "2nd Floor, Campus 1A, No. 143, RMZ Millenia Business Park, Dr. M.G.R Road, North Veeranam Salai, Perungudi, Sholinganallur, Chennai, Tamil Nadu 600096",
    phone: "+91 90364 15959",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [13.0827, 80.2707],
  },
  {
    city: "Mumbai",
    country: "India",
    address: "13th Floor, Vo-488, Wework 247 Park, Lal Bahadur Shastri Marg, Vikhroli Corporate Park, Near Gandhinagar, Mumbai, Maharashtra 400083",
    phone: "+91 90364 15959",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [19.076, 72.8777],
  },
  {
    city: "New Delhi",
    country: "India",
    address: "Ground, 1st and 2nd Floor, A-24/9, Saidabad Mohan C, Block B-1, Awfis – Mohan Cooperative, Mathura Road, New Delhi 110044",
    phone: "+91 90364 15959",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [28.6139, 77.209],
  },
  {
    city: "Hyderabad",
    country: "India",
    address: "Awfis – N Heights, 6th Floor, Plot No 38, Phase 2 Hitec City, Siddiq Nagar, Hyderabad, Telangana",
    phone: "+91 90364 15959",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [17.385, 78.4867],
  },
  {
    city: "West Bengal",
    country: "India",
    address: "Office No. 02, Ground Floor, Khaitan No 1462, Mouza Khapril, P.O New Chamta, P.S Matigara, District Darjeeling, West Bengal 734009",
    phone: "+91 95351 22946",
    email: "info@slninfosys.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [26.7592, 88.358],
  },
];

export const partners: Partner[] = [
  { name: "Honeywell", category: "Fire & Security" },
  { name: "Notifier", category: "Fire Alarm" },
  { name: "Edwards", category: "Fire Detection" },
  { name: "Bosch", category: "Security" },
  { name: "Mircom", category: "Fire & Life Safety" },
  { name: "Hikvision", category: "CCTV & Surveillance" },
];

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of excellence" },
  { value: 1000, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Top brands served" },
  { value: 4.9, prefix: "", suffix: "/5", label: "Customer rating" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation", description: "We understand your site, requirements and security or automation goals in a free consultation." },
  { title: "Assessment", description: "Our engineers survey the site and design a compliant, cost-effective solution." },
  { title: "Proposal", description: "You receive a transparent quote covering design, supply and installation." },
  { title: "Installation", description: "Certified technicians install, configure and test your system to specification." },
  { title: "Commissioning", description: "We test and commission the system, ensuring everything works as designed." },
  { title: "AMC & Support", description: "Annual maintenance contracts and priority support keep your systems reliable long after launch." },
];

export const generalFaqs: Faq[] = [
  {
    q: "How does SLN Automation engage with clients?",
    a: "We work as an end-to-end partner: free site inspection, transparent proposal, professional installation and ongoing AMC support. Every engagement starts by understanding your site and requirements.",
  },
  {
    q: "How do you price projects?",
    a: "Each project is assessed individually. After a free site inspection, you receive a transparent quote covering design, equipment, installation, testing and commissioning — no hidden costs.",
  },
  {
    q: "What is your service coverage area?",
    a: "We provide PAN-India service with offices in Bengaluru, Chennai, Mumbai, New Delhi, Hyderabad and West Bengal — plus trusted installations for clients across India.",
  },
  {
    q: "Do you provide annual maintenance contracts (AMC)?",
    a: "Yes. We offer AMC services for all our installations — covering periodic testing, preventive maintenance, priority response and genuine spare parts.",
  },
  {
    q: "Which equipment brands do you supply?",
    a: "We are authorized distributors for Honeywell, Notifier, Edwards, Bosch, Mircom and Hikvision — ensuring high-end, globally certified products.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve aviation, government & defence, corporate, hospitality, healthcare, industrial, retail, pharma, real estate and many more sectors across India.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Our installations comply with applicable safety and security standards, and our monitoring systems incorporate access control, encryption and audit trails where required.",
  },
  {
    q: "Can you take over maintenance of systems installed by others?",
    a: "Yes. We service and maintain a wide range of systems and brands, providing AMC and rectification support for existing installations.",
  },
  {
    q: "How do you keep projects on schedule?",
    a: "Transparent planning, experienced project management and clear milestones. Our projects manager coordinates every stage from design to commissioning.",
  },
  {
    q: "Do you train our staff?",
    a: "Yes. We train your team on system operation — including security scanning operators, facility teams and safety officers — as part of delivery.",
  },
  {
    q: "How do I get started?",
    a: "Contact us for a free site inspection. We'll assess your requirements and respond with a proposal — no obligation.",
  },
];