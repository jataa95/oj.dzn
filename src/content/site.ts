// All copy, links and project data live here so the site is easy to update.

export const site = {
  name: "oj.dzn",
  person: "Olajide Oladunni",
  nickname: "Ohjay",
  role: "Web designer & developer",
  location: "Lagos, Nigeria",
  url: "https://ojdzn.vercel.app",
  email: "oladunnijayd@gmail.com",
  calendly: "https://calendly.com/oladunnijayd/30min",
  // Add your WhatsApp number in international format (e.g. "2348012345678")
  // to show WhatsApp buttons across the site.
  whatsapp: "",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/olajide-oladunni-37a4161a5/" },
    { label: "X", href: "https://x.com/themanJayyy" },
  ],
};

export type Tone = "volt" | "sky" | "coral" | "sage" | "sand";

export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  location: string;
  headline: string;
  summary: string;
  scope: string[];
  tone: Tone;
};

export const projects: Project[] = [
  {
    slug: "blocsmith",
    name: "Blocsmith Brokerage",
    url: "https://blocsmithbroks.vercel.app/",
    industry: "Luxury real estate",
    location: "Lagos",
    headline: "Sells the lifestyle before the viewing.",
    summary:
      "A luxury brokerage site for homes across Ikoyi, Lekki, Victoria Island and Banana Island, with priced listings, galleries and a clear route to enquire.",
    scope: ["Brand-led web design", "Listings with prices & galleries", "Services & enquiry flow", "Scroll-driven storytelling"],
    tone: "sand",
  },
  {
    slug: "oseyi",
    name: "Òseyi",
    url: "https://oseyi.vercel.app/",
    industry: "Fashion label",
    location: "Nationwide",
    headline: "Turns Instagram browsers into orders.",
    summary:
      "A dark, editorial storefront for a Nigerian clothing brand. Customers build a bag on the site and send the full order by Instagram DM in one tap.",
    scope: ["Product catalogue & quick-add bag", "Order-by-DM checkout flow", "Lookbook spotlights", "Mobile-first design"],
    tone: "sage",
  },
  {
    slug: "olawale",
    name: "Olawale Decorations",
    url: "https://olawaledecorations.vercel.app/",
    industry: "Interior & exterior finishing",
    location: "Abeokuta",
    headline: "Books site visits, not just compliments.",
    summary:
      "An editorial studio site for POP ceilings, lighting and feature walls. It shows the work, explains the approach and makes booking a site visit the obvious next step.",
    scope: ["Project gallery", "Services by category", "Site-visit booking CTA", "Local SEO for Abeokuta"],
    tone: "sky",
  },
  {
    slug: "fourdtruth",
    name: "4dtruth",
    url: "https://4dtruth.vercel.app/",
    industry: "Painter & colourist",
    location: "Lagos",
    headline: "Built to turn followers into collectors.",
    summary:
      "A bold portfolio for Seun Okunola's textured oil paintings: collections, series, artist statements and a simple four-step commission process.",
    scope: ["Collection & series pages", "Artist statements", "Commission flow", "Social proof stats"],
    tone: "coral",
  },
  {
    slug: "ibase",
    name: "IBASE",
    url: "https://ibase.vercel.app/",
    industry: "Streetwear label",
    location: "Made in Nigeria",
    headline: "A campaign-led store for a label made at home.",
    summary:
      "A clean, image-first storefront for tracksuits and separates, with a campaign hero, categories, a journal and a quick-add bag.",
    scope: ["Campaign hero slider", "Shop & categories", "Brand journal", "Bag & checkout-ready UI"],
    tone: "volt",
  },
  {
    slug: "celesta",
    name: "Celesta Jonah",
    url: "https://celestajonah.vercel.app/",
    industry: "Fine art · Portraiture",
    location: "Nigeria",
    headline: "A gallery-grade home for a painter's work.",
    summary:
      "An artist site for oil and graphite portraits: a works archive, a studio journal and a direct line for commissions and enquiries.",
    scope: ["Works archive & detail pages", "Studio journal", "Commission enquiries", "Typographic art direction"],
    tone: "sand",
  },
  {
    slug: "lovesquad",
    name: "LoveSquad Church",
    url: "https://lovesquadchurch.vercel.app/",
    industry: "Church & community",
    location: "Lagos",
    headline: "Makes first-timers feel at home before Sunday.",
    summary:
      "A cinematic, video-led church website with messages, service recaps, stories, events and a plan-your-visit flow for newcomers.",
    scope: ["Video-led hero", "Messages & service recaps", "Events & LoveSpots", "Plan-your-visit flow"],
    tone: "sky",
  },
];

export const earlierWork = [
  { name: "ArtHaus", note: "Art marketplace", url: "https://arthaus25.webflow.io/" },
  { name: "Ematec Agency", note: "Digital agency", url: "https://ematec-agency.webflow.io/" },
  { name: "TeamApp", note: "Group messaging", url: "https://team-app-b80ace.webflow.io/" },
];

export const painPoints = [
  "Looks like a template",
  "Slow on mobile",
  "Clients DM to ask the price",
  "Nowhere on Google",
  "Outdated photos",
  "No clear next step",
  "Built years ago",
  "Lost in a link-in-bio",
  "Too shy to share the link",
  "Looks cheaper than you are",
];

export type ServiceStage = {
  tag: string;
  title: string;
  items: { name: string; note?: string; tone: Tone; shape: ShapeName }[];
};

export type ShapeName = "dots" | "asterisk" | "arch" | "wave" | "bolt" | "leaf" | "spiral" | "loop" | "quarter" | "bars" | "diamond" | "half";

export const services: ServiceStage[] = [
  {
    tag: "Strategy",
    title: "Get clear on what the site must do",
    items: [
      { name: "Discovery call", tone: "sky", shape: "dots" },
      { name: "Copy & structure", tone: "sage", shape: "asterisk" },
      { name: "Art direction", tone: "coral", shape: "arch" },
    ],
  },
  {
    tag: "Design",
    title: "Make it look like the brand you're becoming",
    items: [
      { name: "Website design", tone: "sand", shape: "half" },
      { name: "Brand visuals", tone: "volt", shape: "bolt" },
      { name: "Social & flyer design", note: "Add-on", tone: "sky", shape: "wave" },
    ],
  },
  {
    tag: "Build",
    title: "Ship a fast site that's easy to run",
    items: [
      { name: "Next.js development", tone: "coral", shape: "bars" },
      { name: "Shop & catalogue", tone: "sage", shape: "diamond" },
      { name: "CMS & blog", note: "Edit it yourself", tone: "volt", shape: "spiral" },
    ],
  },
  {
    tag: "Growth",
    title: "Get found, then keep improving",
    items: [
      { name: "SEO setup", tone: "sky", shape: "quarter" },
      { name: "Speed & analytics", tone: "sand", shape: "leaf" },
      { name: "Care plan", note: "Monthly", tone: "coral", shape: "loop" },
    ],
  },
];

export const comparison = {
  columns: ["DIY template", "Big agency", "oj.dzn"],
  rows: [
    { label: "Custom design for your brand", values: [false, true, true] },
    { label: "One person from brief to launch", values: [false, false, true] },
    { label: "You don't build it yourself", values: [false, true, true] },
    { label: "Built to get enquiries, not just look nice", values: [false, true, true] },
    { label: "Fast, no long approval chains", values: [true, false, true] },
    { label: "Website and graphics from one designer", values: [false, false, true] },
  ],
};

export const steps = [
  {
    n: "01",
    title: "Call",
    tone: "sky" as Tone,
    points: ["30-minute discovery call", "Goals, audience & budget", "Clear quote and timeline"],
  },
  {
    n: "02",
    title: "Design",
    tone: "volt" as Tone,
    points: ["Structure & copy direction", "Homepage design first", "Revisions until it's right"],
  },
  {
    n: "03",
    title: "Build",
    tone: "coral" as Tone,
    points: ["Responsive Next.js build", "Motion, SEO & speed", "Preview link to test"],
  },
  {
    n: "04",
    title: "Launch",
    tone: "sage" as Tone,
    points: ["Domain & go-live", "Walkthrough to manage it", "Support after launch"],
  },
];

// Set `price` to a string like "From ₦350,000" to show it. Leave it null to show "Quote on call".
export const packages = [
  {
    name: "Launch",
    for: "New brands & campaigns",
    price: null as string | null,
    features: ["One-page or landing page", "Custom design, mobile-first", "Contact, WhatsApp & booking links", "Basic SEO & analytics"],
    tone: "sky" as Tone,
    featured: false,
  },
  {
    name: "Brand Site",
    for: "Businesses ready to look premium",
    price: null as string | null,
    features: ["Up to 6 custom pages", "Copy & structure guidance", "Scroll motion & interactions", "SEO, speed & analytics", "CMS so you can update it"],
    tone: "volt" as Tone,
    featured: true,
  },
  {
    name: "Signature",
    for: "Shops, studios & artists",
    price: null as string | null,
    features: ["Everything in Brand Site", "Product catalogue or works archive", "Order, booking or commission flow", "Launch graphics for socials"],
    tone: "coral" as Tone,
    featured: false,
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "It depends on the number of pages and how ready your content is. You get a clear timeline on the discovery call before anything starts.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project is quoted on its scope. Book a free 30-minute call, tell me what you need, and you'll get a clear quote with no surprises.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes. If you need to change products, events, listings or posts often, I set up an easy CMS and walk you through it at launch.",
  },
  {
    q: "Do you write the words too?",
    a: "I help shape the structure and copy so every page leads to an action: a booking, an order, an enquiry. You bring the knowledge of your business; I make it read well.",
  },
  {
    q: "Do you handle domain and hosting?",
    a: "Yes. I can set up your domain, hosting and business email, or connect the site to what you already have.",
  },
  {
    q: "Do you also design flyers and social posts?",
    a: "Yes. I'm a graphic designer too, so launch graphics, flyers and social posts can match your new website exactly.",
  },
  {
    q: "Do you only work with businesses in Nigeria?",
    a: "I'm based in Lagos and most of my clients are Nigerian brands, artists and businesses, but I work with anyone, anywhere, online.",
  },
];

export const industries = ["Real estate", "Fashion labels", "Interior studios", "Fine artists", "Churches", "Streetwear", "Painters", "Personal brands"];

export const heroWords = ["look premium", "sell while you sleep", "get you booked", "feel world-class"];
