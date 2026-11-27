export const site = {
  name: "CHRIST Manufacturing",
  short: "CHRIST",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  city: "Abuja",
  country: "Nigeria",
  founder: "Victor Onyekachi",
  phoneDisplay: "0901 929 8269",
  whatsapp: "2349019298269",
  tiktok: "https://www.tiktok.com/@christ_manufacturing",
  tiktokHandle: "@christ_manufacturing",
};

export const wa = (text = "Hello CHRIST Manufacturing, I'd like to start a sample for my brand.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Studio", href: "#studio" },
  { label: "Pieces", href: "#pieces" },
  { label: "Process", href: "#process" },
  { label: "Floor", href: "#floor" },
];

export type Piece = { title: string; kind: string; detail: string; img: string; alt: string };

export const pieces: Piece[] = [
  { title: "Cropped Twill Set", kind: "Two-piece", detail: "Sample · Bulk", img: "/media/set-white.webp", alt: "White cropped twill jacket and flared trousers on a mannequin" },
  { title: "Camo Utility Tote", kind: "Accessories", detail: "Raw-edge flap", img: "/media/camo-totes.webp", alt: "Hand holding a printed camouflage tote with raw-edge flap and patch pockets" },
  { title: "Midnight Denim Set", kind: "Two-piece", detail: "Back view", img: "/media/set-black.webp", alt: "Black cropped jacket and flared trousers on a mannequin, seen from the back" },
  { title: "Match Jersey", kind: "Client · TXC", detail: "Sublimation print", img: "/media/still-txc.webp", alt: "Yellow and green TXC number 23 jersey on a mannequin" },
  { title: "Chain-Stitch Denim", kind: "Client drop", detail: "Embroidery", img: "/media/still-denim.webp", alt: "Dark denim jacket and trousers with white chain embroidery" },
  { title: "Force DNA Heavyweight", kind: "Client · Force DNA", detail: "Screen print", img: "/media/still-forcedna.webp", alt: "Bottle-green heavyweight tees printed with Force DNA graphics" },
  { title: "Wide-Leg Flare", kind: "Trousers", detail: "Brushed twill", img: "/media/look-hood.webp", alt: "Model in brown wide-leg flared trousers and a plaid hood in the studio" },
];

export const tiles = [
  "tile-plaid",
  "tile-camo",
  "tile-thread",
  "tile-swatches",
  "tile-denim",
  "tile-leather",
  "tile-flats",
  "tile-camo-type",
  "tile-machine",
  "tile-painting",
];

export const services = [
  { n: "01", title: "Sampling", body: "Your first piece, cut and sewn to your spec, so you can hold it, fit it and refine it before you commit." },
  { n: "02", title: "Pattern & Tech Packs", body: "Flats, measurements and grading drawn up from a sketch, a reference or a rough idea." },
  { n: "03", title: "Bulk Production", body: "Large runs or small ones. The same hands and the same standard on piece one and piece five hundred." },
  { n: "04", title: "Print & Embroidery", body: "Sublimation, screen print and chain-stitch embroidery, done in-house so colour and placement stay true." },
  { n: "05", title: "Quality Finishing", body: "Overlocked seams, clean hems, pressed and checked. Nothing leaves the floor until it is right." },
];

export const showcase = [
  { title: "TXC — Toxic Collections", meta: "Match jersey", by: "Client drop", img: "/media/still-txc.webp", alt: "TXC jersey on a mannequin in front of a rail of finished jerseys" },
  { title: "Reclaim Your Heritage", meta: "Camo totes", by: "In-house", img: "/media/camo-totes-2.webp", alt: "Two camouflage bags, one held and one on the floor" },
  { title: "Force DNA", meta: "Heavyweight tees", by: "Client drop", img: "/media/still-forcedna.webp", alt: "Force DNA bottle-green tees on mannequins" },
  { title: "Plaid & Flare", meta: "Studio look", by: "In-house", img: "/media/look-hood-side.webp", alt: "Model in plaid hood, black top and brown flared trousers walking through the studio" },
];

export const steps = [
  { n: "01", title: "Brief", body: "Send the idea — a sketch, a reference, a voice note. We talk fabric, fit and quantity.", img: "/media/studio-moodboard.webp" },
  { n: "02", title: "Pattern", body: "We draft flats and patterns and pin your swatches to the board.", img: "/media/studio-threads.webp" },
  { n: "03", title: "Sample", body: "One piece, made in full, for you to wear, test and sign off.", img: "/media/set-white.webp" },
  { n: "04", title: "Produce", body: "Cut, print, sew and overlock — in the quantity your launch needs.", img: "/media/studio-racks.webp" },
  { n: "05", title: "Deliver", body: "Finished, checked, folded and packed. Ready for your drop.", img: "/media/camo-totes.webp" },
];

export const reels = [
  { title: "TXC jerseys, ready for the drop", tag: "Client", src: "/media/reel-txc.mp4", poster: "/media/reel-txc-poster.webp", views: "302K views" },
  { title: "From screen to sublimation to seam", tag: "Process", src: "/media/reel-process.mp4", poster: "/media/reel-process-poster.webp" },
  { title: "Chain-stitch denim, unboxed", tag: "Client", src: "/media/reel-denim.mp4", poster: "/media/reel-denim-poster.webp" },
  { title: "Force DNA heavyweights", tag: "Client", src: "/media/reel-forcedna.mp4", poster: "/media/reel-forcedna-poster.webp" },
];
