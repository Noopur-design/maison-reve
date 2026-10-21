export const images = {
  portraitSun: "/media/portrait-sun.jpg",
  portraitLift: "/media/portrait-lift.jpg",
  portraitShoulder: "/media/portrait-shoulder.jpg",
  portraitSmile: "/media/portrait-smile.jpg",
  salonHall: "/media/salon-hall.jpg",
  salonDesk: "/media/salon-desk.jpg",
  hairBow: "/media/hair-bow.jpg",
  skinDew: "/media/skin-dew.jpg",
  nails: "/media/nails.jpg",
  bridal: "/media/bridal.jpg",
  facial: "/media/facial.jpg",
  eye: "/media/eye.jpg",
  teamRiya: "/media/team-riya.jpg",
  teamAditi: "/media/team-aditi.jpg",
  teamSimran: "/media/team-simran.jpg",
  flowers: "/media/flowers.jpg",
  hairGloss: "/media/hair-gloss.jpg",
  makeupArtist: "/media/makeup-artist.jpg",
  portraitHome: "/media/portrait-home.jpg",
} as const;

export const studio = {
  name: "Maison Rêve",
  subtitle: "Hair · Beauty · Studio",
  tagline: "Beauty, crafted for every you.",
  philosophy: "Beauty is personal. Every service should help you feel confident, comfortable, and cared for.",
  city: "Gurugram, Haryana",
  address: ["123 Beauty Lane", "Gurugram, Haryana"],
  phoneDisplay: "+91 98765 43210",
  email: "hello@maisonreve.in",
  hours: "Mon – Sun · 10:00 AM – 8:00 PM",
  instagram: "@maisonreve.in",
};

export const priceNote =
  "Illustrative prices for this preview. The studio can edit them in one place before launch.";

export const sampleNote =
  "Sample content for the layout. Not verified reviews, staff records, or business statistics.";

export type IconName = "leaf" | "crown" | "heart" | "shield" | "spark" | "flower";

export type CategoryId = "hair" | "skin" | "nails" | "makeup" | "bridal" | "wellness" | "packages";

export type Service = {
  id: string;
  name: string;
  category: Exclude<CategoryId, "packages">;
  tags: string[];
  blurb: string;
  price: number;
  durationMin: number;
  image: string;
};

export type PackageItem = {
  id: string;
  group: "signature" | "bridal" | "seasonal" | "membership";
  name: string;
  blurb: string;
  includes: string[];
  price: number;
  onwards?: boolean;
  durationMin: number;
  image: string;
  highlight?: boolean;
};

export const services: Service[] = [
  { id: "haircut", name: "Haircut & styling", category: "hair", tags: [], blurb: "A precision cut and finish shaped around your hair and your day.", price: 799, durationMin: 60, image: images.hairBow },
  { id: "blowdry", name: "Blow-dry styling", category: "hair", tags: [], blurb: "Smooth, bouncy, or softly lived-in — styled to leave with you.", price: 999, durationMin: 45, image: images.hairGloss },
  { id: "colour", name: "Hair colour", category: "hair", tags: [], blurb: "Global colour chosen for your skin tone, with a gloss finish.", price: 2499, durationMin: 150, image: images.hairGloss },
  { id: "balayage", name: "Highlights & balayage", category: "hair", tags: [], blurb: "Soft, sunlit dimension painted where light naturally falls.", price: 4499, durationMin: 180, image: images.portraitShoulder },
  { id: "keratin", name: "Keratin & smoothing", category: "hair", tags: [], blurb: "A smoothing ritual for frizz, with a consultation before any formula.", price: 6499, durationMin: 180, image: images.hairBow },
  { id: "hair-spa", name: "Hair spa", category: "hair", tags: ["wellness"], blurb: "Scalp massage, mask, and a calmer finish for tired hair.", price: 1999, durationMin: 75, image: images.facial },
  { id: "repair", name: "Hair repair treatment", category: "hair", tags: [], blurb: "Bond-care for colour-tired or heat-styled hair. Results vary.", price: 2499, durationMin: 90, image: images.hairGloss },
  { id: "bridal-hair", name: "Bridal hairstyling", category: "hair", tags: ["bridal"], blurb: "Occasion styling planned with your outfit, jewellery, and timeline.", price: 4999, durationMin: 90, image: images.bridal },
  { id: "classic-facial", name: "Classic facial", category: "skin", tags: [], blurb: "Cleanse, exfoliation, and hydration tailored after a skin check.", price: 1299, durationMin: 60, image: images.skinDew },
  { id: "hydra", name: "Hydrating facial", category: "skin", tags: [], blurb: "A comfort-first facial for dryness and a fresher surface glow.", price: 2499, durationMin: 75, image: images.facial },
  { id: "acne", name: "Acne-focused facial", category: "skin", tags: [], blurb: "A gentle clarifying facial. Suitability depends on your consultation.", price: 1999, durationMin: 60, image: images.skinDew },
  { id: "brightening", name: "Brightening treatment", category: "skin", tags: [], blurb: "A glow-focused facial for dullness. Not a medical pigment treatment.", price: 1999, durationMin: 60, image: images.portraitSmile },
  { id: "detan", name: "De-tan facial", category: "skin", tags: [], blurb: "A soothing reset after sun exposure, planned around your skin barrier.", price: 1499, durationMin: 45, image: images.facial },
  { id: "antiage", name: "Anti-ageing facial", category: "skin", tags: [], blurb: "Massage and care aimed at comfort and bounce. No clinical promises.", price: 2999, durationMin: 75, image: images.eye },
  { id: "barrier", name: "Barrier & hydration care", category: "skin", tags: ["wellness"], blurb: "A quiet, replenishing facial for skin that feels tight or reactive.", price: 1799, durationMin: 60, image: images.skinDew },
  { id: "manicure", name: "Classic manicure", category: "nails", tags: [], blurb: "Shape, cuticle care, and a sheer or classic polish.", price: 699, durationMin: 45, image: images.nails },
  { id: "pedicure", name: "Classic pedicure", category: "nails", tags: [], blurb: "A clean, unhurried pedicure with massage and polish.", price: 799, durationMin: 50, image: images.nails },
  { id: "gel", name: "Gel polish", category: "nails", tags: [], blurb: "A longer-wearing gel colour, cured and finished with cuticle oil.", price: 1499, durationMin: 60, image: images.nails },
  { id: "extensions", name: "Nail extensions", category: "nails", tags: [], blurb: "Length and shape built to feel light. A patch test is discussed first.", price: 2499, durationMin: 90, image: images.nails },
  { id: "nail-art", name: "Minimal nail art", category: "nails", tags: [], blurb: "Fine lines, a single motif, or a soft French with a twist.", price: 999, durationMin: 55, image: images.nails },
  { id: "bridal-nails", name: "Bridal nail art", category: "nails", tags: ["bridal"], blurb: "Hands and feet coordinated with your bridal palette.", price: 1999, durationMin: 75, image: images.bridal },
  { id: "french", name: "French manicure", category: "nails", tags: [], blurb: "A clean tip and natural base, classic or softly modern.", price: 899, durationMin: 50, image: images.nails },
  { id: "removal", name: "Gel removal & care", category: "nails", tags: [], blurb: "Safe soak-off, tidy cuticles, and a nourishing finish.", price: 499, durationMin: 30, image: images.nails },
  { id: "party-makeup", name: "Party makeup", category: "makeup", tags: [], blurb: "Evening makeup that reads clearly in photographs and warm light.", price: 2499, durationMin: 75, image: images.eye },
  { id: "bridal-makeup", name: "Bridal makeup", category: "makeup", tags: ["bridal"], blurb: "A long-wear bridal look planned with a trial when you book one.", price: 14999, durationMin: 180, image: images.bridal },
  { id: "engagement", name: "Engagement makeup", category: "makeup", tags: ["bridal"], blurb: "Romantic, camera-ready makeup for the ring ceremony and family.", price: 7999, durationMin: 120, image: images.portraitSmile },
  { id: "reception", name: "Reception makeup", category: "makeup", tags: ["bridal"], blurb: "A slightly bolder evening face for the reception and dancing.", price: 9999, durationMin: 150, image: images.makeupArtist },
  { id: "festive", name: "Festive makeup", category: "makeup", tags: [], blurb: "Celebration makeup for puja, sangeet, or a dressed-up dinner.", price: 3499, durationMin: 90, image: images.eye },
  { id: "editorial", name: "Editorial makeup", category: "makeup", tags: [], blurb: "A defined look for a shoot, with skin still looking like skin.", price: 5999, durationMin: 120, image: images.portraitShoulder },
  { id: "everyday-glam", name: "Natural everyday makeup", category: "makeup", tags: [], blurb: "Skin, brow, and a soft lip — polished without looking costumed.", price: 2499, durationMin: 60, image: images.portraitSun },
  { id: "scalp", name: "Scalp therapy", category: "wellness", tags: [], blurb: "A focused scalp massage and treatment oil, chosen after a look at the scalp.", price: 999, durationMin: 40, image: images.hairBow },
  { id: "polish-body", name: "Body polishing", category: "wellness", tags: [], blurb: "A smoothing polish for arms and back before an event. Comfort-led, not clinical.", price: 1499, durationMin: 60, image: images.facial },
  { id: "massage", name: "Relaxation massage", category: "wellness", tags: [], blurb: "A short head, neck, and shoulder massage between services.", price: 1199, durationMin: 40, image: images.salonHall },
  { id: "lashes", name: "Lash extensions", category: "wellness", tags: ["makeup"], blurb: "A lighter lash set. A patch conversation happens before application.", price: 1999, durationMin: 75, image: images.eye },
];

export const addOns: { id: string; name: string; price: number; note: string }[] = [
  { id: "false-lash", name: "False eyelashes", price: 500, note: "Strip or cluster, removed the same day." },
  { id: "hd", name: "HD makeup upgrade", price: 1000, note: "Finer base work for close photography." },
  { id: "airbrush", name: "Airbrush makeup", price: 2500, note: "A lighter film of base, where suitable." },
  { id: "curls", name: "Hair styling, curls or bun", price: 1500, note: "Added to a makeup appointment." },
  { id: "drape", name: "Saree or dupatta draping", price: 800, note: "Draping support on the appointment day." },
  { id: "touchup", name: "Touch-up kit guidance", price: 1200, note: "A small kit talk, not a product sale promise." },
];

export const packages: PackageItem[] = [
  {
    id: "everyday-glow",
    group: "signature",
    name: "Everyday Glow",
    blurb: "A balanced visit for skin, hair, and hands.",
    includes: ["Classic facial", "Hair spa", "Basic manicure & pedicure", "Blow-dry styling"],
    price: 3999,
    durationMin: 180,
    image: images.facial,
  },
  {
    id: "signature-ritual",
    group: "signature",
    name: "Signature Ritual",
    blurb: "The longer self-care edit, highlighted on this page.",
    includes: ["Hydrating facial", "Hair repair treatment", "Gel manicure", "Classic pedicure", "Blow-dry styling"],
    price: 5999,
    durationMin: 240,
    image: images.portraitSun,
    highlight: true,
  },
  {
    id: "total-care",
    group: "signature",
    name: "Studio Afternoon",
    blurb: "Skin, scalp, and a polished finish without a full bridal day.",
    includes: ["Brightening facial", "Hair spa", "Classic manicure", "Natural makeup"],
    price: 7499,
    durationMin: 240,
    image: images.portraitSmile,
  },
  {
    id: "bridal-experience",
    group: "bridal",
    name: "Bridal Experience",
    blurb: "Makeup and hair for the wedding day, with a planning conversation.",
    includes: ["Bridal makeup", "Bridal hairstyling", "Pre-bridal consultation", "Lashes on request"],
    price: 14999,
    onwards: true,
    durationMin: 240,
    image: images.bridal,
    highlight: true,
  },
  {
    id: "bridal-luxe",
    group: "bridal",
    name: "Bridal Luxe",
    blurb: "Wedding-day beauty plus a trial and draping support.",
    includes: ["Bridal makeup", "Hairstyling", "Makeup trial", "Saree or dupatta draping", "Touch-up notes"],
    price: 24999,
    durationMin: 300,
    image: images.bridal,
  },
  {
    id: "destination",
    group: "bridal",
    name: "Destination Bride",
    blurb: "A travel-ready plan. Travel fees are quoted separately, never assumed here.",
    includes: ["Bridal makeup", "Reception makeup", "Two hairstyles", "Trial", "Timeline planning"],
    price: 34999,
    onwards: true,
    durationMin: 360,
    image: images.makeupArtist,
  },
  {
    id: "summer",
    group: "seasonal",
    name: "Summer Refresh",
    blurb: "Light hydration and a clean manicure for warmer months.",
    includes: ["De-tan facial", "Hair spa", "Classic manicure"],
    price: 4499,
    durationMin: 150,
    image: images.flowers,
  },
  {
    id: "monsoon",
    group: "seasonal",
    name: "Monsoon Revival",
    blurb: "Frizz care and a barrier-kind facial.",
    includes: ["Barrier facial", "Smoothing gloss treatment", "Pedicure"],
    price: 4999,
    durationMin: 160,
    image: images.skinDew,
  },
  {
    id: "winter",
    group: "seasonal",
    name: "Winter Nourish",
    blurb: "Richer masks and a scalp ritual when the air is dry.",
    includes: ["Hydrating facial", "Hair spa", "Manicure"],
    price: 5499,
    durationMin: 170,
    image: images.hairBow,
  },
  {
    id: "festive-glow",
    group: "seasonal",
    name: "Festive Glow",
    blurb: "A dressed look for the season’s invitations.",
    includes: ["Festive makeup", "Blow-dry", "Gel manicure"],
    price: 6999,
    durationMin: 180,
    image: images.eye,
  },
  {
    id: "member-classic",
    group: "membership",
    name: "Classic Member",
    blurb: "Three months of a standing ritual. Perks are sample terms.",
    includes: ["One facial or hair spa each month", "10% illustrative member rate", "Priority notes on the books"],
    price: 7999,
    durationMin: 60,
    image: images.salonDesk,
  },
  {
    id: "member-premium",
    group: "membership",
    name: "Premium Member",
    blurb: "Six months for clients who already know their routine.",
    includes: ["Monthly signature service", "15% illustrative member rate", "One guest blow-dry"],
    price: 14999,
    durationMin: 75,
    image: images.salonHall,
    highlight: true,
  },
  {
    id: "member-elite",
    group: "membership",
    name: "Elite Member",
    blurb: "A year of care. Birthday service is a sample benefit, not a live offer.",
    includes: ["Monthly service of choice", "20% illustrative member rate", "Birthday blow-dry note"],
    price: 24999,
    durationMin: 90,
    image: images.portraitLift,
  },
];

export const team = [
  {
    id: "riya",
    name: "Riya Sharma",
    role: "Hair specialist",
    focus: "Cuts, colour placement, and bridal hair.",
    image: images.teamRiya,
  },
  {
    id: "aditi",
    name: "Aditi Mehra",
    role: "Skin & wellness",
    focus: "Facials planned around comfort and skin goals.",
    image: images.teamAditi,
  },
  {
    id: "simran",
    name: "Simran Kaur",
    role: "Makeup artist",
    focus: "Bridal, festive, and editorial faces.",
    image: images.teamSimran,
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Ritika S.",
    service: "Hair colour & styling",
    quote: "The best salon hour I have had in this sample story. The room was calm, and my hair felt like itself — only more polished.",
    image: images.portraitSmile,
  },
  {
    id: "t2",
    name: "Megha T.",
    service: "Bridal makeup",
    quote: "A sample note: the trial listened to the jewellery and the neckline, instead of starting from a trend.",
    image: images.bridal,
  },
  {
    id: "t3",
    name: "Ananya K.",
    service: "Hydrating facial",
    quote: "Sample story. Skin was explained plainly, nothing was pushed, and the facial stayed comfortable.",
    image: images.skinDew,
  },
  {
    id: "t4",
    name: "Simran A.",
    service: "Haircut & styling",
    quote: "Sample story. The cut still looked right after I washed it at home.",
    image: images.portraitShoulder,
  },
  {
    id: "t5",
    name: "Priya M.",
    service: "Skin care",
    quote: "Sample story. I was told what might not suit me, which mattered more than the menu.",
    image: images.facial,
  },
  {
    id: "t6",
    name: "Kavya R.",
    service: "Nail art",
    quote: "Sample story. Neat shape, quiet colour, and no rush at the lamp.",
    image: images.nails,
  },
  {
    id: "t7",
    name: "Esha P.",
    service: "Party makeup",
    quote: "Sample story. It lasted through dinner and still looked soft in photographs.",
    image: images.eye,
  },
];

export const placeholderStats = [
  { value: "10K+", label: "Sample clients" },
  { value: "5+", label: "Sample years" },
  { value: "20+", label: "Sample specialists" },
  { value: "4.9", label: "Sample score" },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "hair" | "skin" | "makeup" | "nails" | "bridal" | "studio";
  title: string;
};

export const gallery: GalleryItem[] = [
  { id: "g1", src: images.hairBow, alt: "Glossy brunette hair styled with an ivory silk ribbon", category: "hair", title: "Ribboned twist" },
  { id: "g2", src: images.hairGloss, alt: "Close view of shiny chestnut waves", category: "hair", title: "Gloss waves" },
  { id: "g3", src: images.skinDew, alt: "Dewy skin in warm window light with a leaf shadow", category: "skin", title: "Quiet glow" },
  { id: "g4", src: images.facial, alt: "A cream mask being brushed onto a cheek in a calm treatment room", category: "skin", title: "Mask moment" },
  { id: "g5", src: images.bridal, alt: "Bridal portrait with gold maang tikka, jhumkas, and a maroon embroidered neckline", category: "bridal", title: "Bridal gold" },
  { id: "g6", src: images.eye, alt: "Soft eye makeup and a pearl earring", category: "makeup", title: "Soft liner" },
  { id: "g7", src: images.nails, alt: "Nude almond manicure resting on ivory linen", category: "nails", title: "Nude almond" },
  { id: "g8", src: images.salonHall, alt: "Salon floor with arched mirrors, cream chairs, and warm lamps", category: "studio", title: "The floor" },
  { id: "g9", src: images.salonDesk, alt: "Marble reception desk with white flowers", category: "studio", title: "Reception" },
  { id: "g10", src: images.portraitSun, alt: "Editorial portrait in an off-shoulder ivory blouse", category: "makeup", title: "Daylight skin" },
  { id: "g11", src: images.makeupArtist, alt: "Makeup artist applying a nude lip in warm light", category: "makeup", title: "At the chair" },
  { id: "g12", src: images.portraitLift, alt: "Portrait with long dark hair and a sheer ivory blouse", category: "hair", title: "Length and light" },
  { id: "g13", src: images.flowers, alt: "White daisies and cream roses in a ceramic vase", category: "studio", title: "Studio flowers" },
  { id: "g14", src: images.portraitSmile, alt: "Smiling portrait with loosely pinned hair and daisies", category: "bridal", title: "Soft celebration" },
];

export const posts = [
  {
    id: "slower-appointment",
    title: "A slower kind of appointment",
    kicker: "Studio notes",
    lede: "The visit should feel unrushed even when the calendar is full. Here is how Maison Rêve thinks about time in the chair.",
    image: images.salonHall,
    alt: "Salon floor with arched mirrors and warm lamps",
    body: [
      "A good appointment starts before the cape goes on. Ten quiet minutes to hear what you actually want — shorter around the face, a colour that survives humidity, makeup that still looks like you beside your mother — saves an hour of correction later.",
      "We would rather decline a stacked booking than pretend a keratin and a full bridal trial can share a courtesy gap. If a service needs longer for your hair density or a patch conversation, the book should say so.",
      "Bring a photograph of your outfit if the day is formal. Leave the rest. The point of the room is that you do not have to manage it.",
    ],
  },
  {
    id: "choosing-a-facial",
    title: "How to choose a facial without the noise",
    kicker: "Skin",
    lede: "Names on a menu are not diagnoses. A facial at Maison Rêve begins with what your skin is doing this month.",
    image: images.facial,
    alt: "A cream mask brushed on in a calm treatment room",
    body: [
      "Hydration, congestion, and dullness ask for different hands. A classic facial is often the right first visit. Stronger language — peel, laser, clinical — does not belong on this site, and it will not be promised in the chair.",
      "If you are using retinoids, have a wedding inside two weeks, or your skin is reactive, say so. Suitability is a conversation, not a guarantee printed under a price.",
      "Aftercare is unglamorous and useful: a gentle cleanse, sunscreen, and a pause on new acids until the next morning at least.",
    ],
  },
  {
    id: "bridal-without-panic",
    title: "Bridal beauty, planned without panic",
    kicker: "Bridal",
    lede: "The wedding face should agree with the jewellery, the hour, and the person wearing it.",
    image: images.bridal,
    alt: "Bridal portrait with gold jewellery and a maroon neckline",
    body: [
      "Start with the outfit and the photographs, not with a trend. Morning ceremonies and evening receptions want different intensity. A trial is how both of you find out whether a lash, a deeper lip, or a softer brow is the one.",
      "Hair and draping need the same timeline as makeup. If relatives are helping you dress, we plan the hand-off instead of competing for the last twenty minutes.",
      "Prices on this preview are illustrative. A real bridal quote should list what is included, what is extra, and whether travel sits outside the fee.",
    ],
  },
];

type CatKey = "hair" | "skin" | "nails" | "makeup";

export const categories: Record<
  CatKey,
  {
    key: CatKey;
    eyebrow: string;
    title: string;
    lede: string;
    hero: string;
    heroAlt: string;
    script: string;
    cta: string;
    marquee: string[];
    approachKicker: string;
    approachTitle: string;
    approachBody: string;
    approachImage: string;
    approachAlt: string;
    points: { icon: IconName; title: string; text: string }[];
    processTitle: string;
    process: { n: string; title: string; text: string }[];
    faqs: { q: string; a: string }[];
    careTitle?: string;
    care?: { title: string; text: string }[];
    teamIds: string[];
    ctaTitle: string;
    ctaNote: string;
  }
> = {
  hair: {
    key: "hair",
    eyebrow: "Services · Hair",
    title: "Hair services that bring out your best you",
    lede: "From precision cuts to colour, our hair services are designed to flatter your natural texture and the life you actually live.",
    hero: images.hairBow,
    heroAlt: "Glossy brunette hair finished with an ivory silk ribbon",
    script: "Healthy hair, happier you",
    cta: "Book a hair appointment",
    marquee: ["Haircut & styling", "Hair colour", "Balayage", "Hair spa", "Occasion styling"],
    approachKicker: "Our approach",
    approachTitle: "Healthy hair, inside and out",
    approachBody: "We pair a proper consultation with products chosen for your hair, not a single formula for the whole book. The aim is hair that looks polished and still feels like yours.",
    approachImage: images.hairBow,
    approachAlt: "Low twist finished with a sheer ivory ribbon",
    points: [
      { icon: "leaf", title: "Consultation", text: "Texture, history, and the shape you want." },
      { icon: "crown", title: "Thoughtful colour", text: "Placed for your skin, not a swatch on a wall." },
      { icon: "heart", title: "Comfort", text: "Breaks, scalp checks, and no rushed rinses." },
      { icon: "spark", title: "Finish", text: "A style you can recreate on a weekday." },
    ],
    processTitle: "A personalised hair journey",
    process: [
      { n: "01", title: "Consultation", text: "We look at density, previous colour, and your upkeep." },
      { n: "02", title: "Plan", text: "You hear the steps, the time, and the illustrative price." },
      { n: "03", title: "Service", text: "Cut, colour, or care, with checks along the way." },
      { n: "04", title: "Aftercare", text: "How to wash, what to pause, and when to return." },
    ],
    faqs: [
      { q: "How do I choose the right hair service?", a: "Start with the change you want and the time you can give it. A stylist confirms what your hair can take in the consultation. This preview cannot assess your hair remotely." },
      { q: "Will colour work on my hair?", a: "It depends on your current colour, previous chemical work, and condition. Global colour, highlights, and smoothing are quoted after a look, not from a photograph alone." },
      { q: "How long do appointments take?", a: "Each service lists an estimate. Thick hair, a correction, or a bridal trial can run longer. The booking screen shows demo times, not a live chair." },
      { q: "Do you offer a consultation before the service?", a: "Yes. Colour, smoothing, and bridal hair should not begin without one." },
    ],
    teamIds: ["riya", "simran"],
    ctaTitle: "Ready for a hair appointment?",
    ctaNote: "Beautiful hair is a good idea. A confirmed chair is a real booking — this preview only saves a demo request.",
  },
  skin: {
    key: "skin",
    eyebrow: "Services · Skin",
    title: "Healthy skin for a more confident you",
    lede: "Personalised facials and skincare experiences designed around your skin goals, comfort, and natural glow.",
    hero: images.skinDew,
    heroAlt: "Close portrait of dewy skin in warm light",
    script: "Glow, heal, rest",
    cta: "Book a skin consultation",
    marquee: ["Facials", "Hydration", "Acne-focused care", "Brightening", "Barrier care"],
    approachKicker: "Our approach",
    approachTitle: "Science-minded, never clinical theatre",
    approachBody: "We use sound facial technique and plain language. We do not diagnose skin disease, and we do not promise that pigment, acne, or lines will disappear.",
    approachImage: images.skinDew,
    approachAlt: "Close portrait of dewy skin with a soft leaf shadow",
    points: [
      { icon: "leaf", title: "Skin check", text: "What it feels like this week, not a label for life." },
      { icon: "crown", title: "Gentle products", text: "Chosen for comfort. Fragrance is optional." },
      { icon: "heart", title: "Your pace", text: "Pressure and steam only if your skin agrees." },
      { icon: "spark", title: "Honest aftercare", text: "Sunscreen and a quiet night, not a twelve-step sale." },
    ],
    processTitle: "Your skin journey, carefully held",
    process: [
      { n: "01", title: "Consultation", text: "Concerns, products you already use, and events coming up." },
      { n: "02", title: "Plan", text: "One facial, not a stack of add-ons by default." },
      { n: "03", title: "Treatment", text: "Cleanse, treat, and mask within your comfort." },
      { n: "04", title: "Aftercare", text: "What to pause, and when a doctor is the better next step." },
    ],
    faqs: [
      { q: "Which facial is best for my skin?", a: "It depends on dryness, congestion, sensitivity, and what you used this week. The menu is a starting point. The consultation decides." },
      { q: "Are the products suitable for sensitive skin?", a: "Many clients with sensitive skin do well with the barrier facial. Tell us about reactions. We cannot promise zero irritation." },
      { q: "Will a facial clear acne or pigment?", a: "A facial can make skin feel calmer and look fresher. It is not a medical treatment for acne, melasma, or dermatitis. See a dermatologist for those." },
      { q: "Do I need a consultation first?", a: "For a first visit, yes. It keeps the facial appropriate and avoids surprises on the day." },
    ],
    teamIds: ["aditi"],
    ctaTitle: "Ready for healthier-feeling skin?",
    ctaNote: "Self-care today, with no inflated claims about tomorrow.",
  },
  nails: {
    key: "nails",
    eyebrow: "Services · Nails",
    title: "Little details, beautifully done",
    lede: "Manicures, pedicures, gel, and nail art finished with a clean table and enough time to dry properly.",
    hero: images.nails,
    heroAlt: "Hands with a nude almond manicure on ivory linen",
    script: "The quiet polish",
    cta: "Book nail care",
    marquee: ["Manicure", "Pedicure", "Gel polish", "Nail art", "Bridal nails"],
    approachKicker: "Our approach",
    approachTitle: "Clean tools. Unhurried shape.",
    approachBody: "Nail care is intimate. Files and buffers are single-use or sanitised, and we would rather shorten a design than break a nail to force it.",
    approachImage: images.nails,
    approachAlt: "Soft nude manicure, neatly shaped",
    points: [
      { icon: "shield", title: "Hygiene", text: "Fresh files, clean lamps, and wiped stations." },
      { icon: "flower", title: "Shape first", text: "The outline matters more than the decoration." },
      { icon: "heart", title: "Comfort", text: "Cuticles are tidied, not cut aggressively." },
      { icon: "spark", title: "Wear", text: "You leave knowing how to make gel last." },
    ],
    processTitle: "From bare nail to finished hand",
    process: [
      { n: "01", title: "Look", text: "Length, damage, and the colour you brought or want." },
      { n: "02", title: "Prep", text: "Shape, cuticle care, and a clean surface." },
      { n: "03", title: "Colour", text: "Lacquer, gel, or art within the time booked." },
      { n: "04", title: "Care", text: "Oil, drying time, and removal advice." },
    ],
    faqs: [
      { q: "How long does gel polish last?", a: "Often two to three weeks with care. Water, gym chalk, and picking at a lifted edge shorten that. This is a guide, not a warranty." },
      { q: "Can you remove gel I had done elsewhere?", a: "Yes, as a removal service. If the nail plate looks damaged, we may suggest a break from enhancements." },
      { q: "Do you use sterilised tools?", a: "The studio standard is sanitised metal tools and single-use files. Confirm the live protocol with the salon before you visit." },
      { q: "Can nail art match a bridal outfit?", a: "Yes. Bring a fabric swatch or photograph. Elaborate art needs the bridal nail appointment, not a classic manicure slot." },
    ],
    careTitle: "Aftercare, briefly",
    care: [
      { title: "Let them cure", text: "Give gel the full lamp time. A smudge in the car is a return visit." },
      { title: "Oil the cuticle", text: "A drop at night keeps the edge from looking chalky." },
      { title: "Do not peel", text: "Lifted gel comes off in a soak, not between errands." },
    ],
    teamIds: ["simran"],
    ctaTitle: "Ready for neatly finished hands?",
    ctaNote: "Small details. Properly done.",
  },
  makeup: {
    key: "makeup",
    eyebrow: "Services · Makeup",
    title: "Makeup that brings out your true radiance",
    lede: "From soft, minimal glam to bridal looks, makeup is tailored to your features, outfit, and the hour you will be photographed.",
    hero: images.bridal,
    heroAlt: "Bridal portrait with gold jewellery and a maroon embroidered neckline",
    script: "Makeup for every you",
    cta: "Book a makeup consultation",
    marquee: ["Bridal", "Party", "Engagement", "Editorial", "Everyday glam"],
    approachKicker: "Our approach",
    approachTitle: "Artistry. Elegance. Individuality.",
    approachBody: "Makeup should feel like an extension of you. We plan the face around bone structure, clothing colour, and how long it has to last — not around a single viral look.",
    approachImage: images.eye,
    approachAlt: "Close view of soft eye makeup and luminous skin",
    points: [
      { icon: "leaf", title: "Your features", text: "Brows, lip, and skin are the brief." },
      { icon: "crown", title: "Occasion", text: "Daylight puja and night reception are different faces." },
      { icon: "heart", title: "Skin-first", text: "Base should not erase the person underneath." },
      { icon: "spark", title: "Longevity", text: "Set where the day is long. Never caked by default." },
    ],
    processTitle: "A seamless makeup experience",
    process: [
      { n: "01", title: "Consultation", text: "Outfit, jewellery, photographs, and preferences." },
      { n: "02", title: "Prep", text: "Clean skin and a base that agrees with your skin." },
      { n: "03", title: "Look", text: "Eyes, cheek, and lip built in the agreed direction." },
      { n: "04", title: "Finish", text: "Setting, a touch-up note, and hairstyling if booked." },
    ],
    faqs: [
      { q: "How early should I book bridal makeup?", a: "As soon as the date is fixed, especially in wedding season. A trial is a separate appointment and should not be the night before." },
      { q: "Can I bring my own products?", a: "Yes. Tell the artist if you prefer them, and mention allergies. Hygiene of shared brushes follows studio practice." },
      { q: "Will the makeup last all day?", a: "Long-wear products help. Heat, tears, and a heavy meal still happen. A touch-up plan belongs in the bridal quote." },
      { q: "Do you travel to a venue?", a: "Travel can be arranged when the studio confirms it. This preview does not quote a travel fee." },
    ],
    teamIds: ["simran", "riya"],
    ctaTitle: "Ready for your perfect look?",
    ctaNote: "Confidence looks good on you. A date on this site is still a demo until the studio confirms it.",
  },
};

export const homeServices = [
  { href: "/services/hair" as const, title: "Hair services", text: "Cuts, colour, treatments", image: images.hairBow, alt: "Hair styled with a silk ribbon" },
  { href: "/services/skin" as const, title: "Skin care", text: "Facials and glow treatments", image: images.skinDew, alt: "Close portrait with dewy skin" },
  { href: "/services/nails" as const, title: "Nail care", text: "Manicure, pedicure, nail art", image: images.nails, alt: "Nude manicure on linen" },
  { href: "/services/makeup" as const, title: "Makeup", text: "Bridal, party, editorial", image: images.eye, alt: "Soft eye makeup close-up" },
];

export const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: "leaf", title: "Premium products", text: "Chosen for hair and skin, not stacked for show." },
  { icon: "crown", title: "Expert stylists", text: "Sample team profiles — confirm the live roster with the studio." },
  { icon: "heart", title: "Personalised care", text: "Services shaped around the person in the chair." },
  { icon: "shield", title: "Hygienic & calm", text: "Clean stations and an unhurried room." },
  { icon: "spark", title: "Relaxing ambience", text: "Warm light, plants, and enough quiet to exhale." },
];

export function inr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function durationLabel(mins: number) {
  if (mins < 60) return `${mins} mins`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (!m) return h === 1 ? "1 hour" : `${h} hours`;
  return `${h} hr ${m} mins`;
}

export function serviceById(id: string) {
  return services.find((service) => service.id === id);
}

export function packageById(id: string) {
  return packages.find((item) => item.id === id);
}

export type Bookable = {
  id: string;
  kind: "service" | "package";
  name: string;
  category: CategoryId;
  blurb: string;
  price: number;
  onwards?: boolean;
  durationMin: number;
  image: string;
};

export function bookables(): Bookable[] {
  const fromServices: Bookable[] = services.map((service) => ({
    id: service.id,
    kind: "service",
    name: service.name,
    category: service.category,
    blurb: service.blurb,
    price: service.price,
    durationMin: service.durationMin,
    image: service.image,
  }));
  const fromPackages: Bookable[] = packages.map((item) => ({
    id: item.id,
    kind: "package",
    name: item.name,
    category: "packages",
    blurb: item.blurb,
    price: item.price,
    onwards: item.onwards,
    durationMin: item.durationMin,
    image: item.image,
  }));
  return [...fromServices, ...fromPackages];
}

export const bookingCategories: { id: CategoryId; label: string; image: string }[] = [
  { id: "hair", label: "Hair", image: images.hairBow },
  { id: "skin", label: "Skin care", image: images.skinDew },
  { id: "makeup", label: "Makeup", image: images.eye },
  { id: "nails", label: "Nails", image: images.nails },
  { id: "bridal", label: "Bridal", image: images.bridal },
  { id: "wellness", label: "Wellness", image: images.facial },
  { id: "packages", label: "Packages", image: images.flowers },
];

export function inCategory(item: Bookable, category: CategoryId) {
  if (category === "packages") return item.kind === "package";
  if (category === "bridal") {
    if (item.kind === "package") return false;
    const service = serviceById(item.id);
    return Boolean(service && (service.category === "bridal" || service.tags.includes("bridal")));
  }
  if (item.kind !== "service") return false;
  const service = serviceById(item.id);
  if (!service) return false;
  return service.category === category || service.tags.includes(category);
}

export const demoSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

export const faqsGeneral = [
  { q: "Where is Maison Rêve?", a: "The studio is planned for Gurugram, Haryana. The street address on this preview is a sample and should be replaced before launch." },
  { q: "How do I book?", a: "Use the appointment form to save a demo request on this device, or contact the studio once a real phone and email are confirmed. Nothing is reserved automatically." },
  { q: "Do you take walk-ins?", a: "That depends on the live diary. This website cannot see the chair schedule." },
  { q: "What should I bring to a bridal trial?", a: "Photographs of the outfit, jewellery if you have it, and notes about the venue light." },
];
