// Page copy lives here so a new client can be set up without touching components.
// Wrap a word in *asterisks* to render it in the italic brass accent.

export const NAV = [
  { href: "#services", label: "Treatments" },
  { href: "#visit", label: "Your first visit" },
  { href: "#fees", label: "Fees" },
  { href: "#team", label: "Our dentists" },
  { href: "#faq", label: "Questions" },
];

export const HERO = {
  headline: "Dentistry that doesn't make you *dread* the chair.",
  lede: "A small, unhurried practice. Forty-minute appointments as standard, every fee quoted before we begin, and a team that has spent fifteen years looking after nervous patients.",
  highlights: ["Same-week emergency slots", "Payment plans available", "Free parking on site"],
  story: { quote: "“I hadn't been in eleven years.”", caption: "Mira's story — and how we started" },
};

export const TRUST = [
  { figure: "15", caption: "years in Riverton" },
  { figure: "4.9", caption: "from 380+ reviews" },
  { figure: "40", caption: "minute appointments" },
  { figure: "6", caption: "insurers billed directly" },
];

export type ServiceIcon = "tooth" | "star" | "pulse" | "aligner" | "implant" | "child";

export const SERVICES: { icon: ServiceIcon; title: string; body: string; price: string }[] = [
  {
    icon: "tooth",
    title: "Check-up & clean",
    body: "A full examination, scale and polish, and low-dose digital X-rays when they're due. We'll show you what we're seeing on the screen.",
    price: "From $149",
  },
  {
    icon: "star",
    title: "Cosmetic & whitening",
    body: "Take-home whitening, composite bonding and porcelain veneers. We mock the result up first so you decide before anything is permanent.",
    price: "From $390",
  },
  {
    icon: "pulse",
    title: "Emergency care",
    body: "Broken tooth, lost filling, swelling or pain. Ring before 10am and we will find you a slot that day, every weekday.",
    price: "Assessment $95",
  },
  {
    icon: "aligner",
    title: "Invisible braces",
    body: "Clear aligner treatment for crowding and gaps, with a 3D scan at the first visit. Most cases finish in six to twelve months.",
    price: "From $4,200",
  },
  {
    icon: "implant",
    title: "Implants & crowns",
    body: "Single implants, bridges and same-visit ceramic crowns milled in the practice. No temporary crown, no second appointment.",
    price: "From $1,850",
  },
  {
    icon: "child",
    title: "Children's dentistry",
    body: "First visits from age two, fissure sealants and a genuinely patient approach. Under-13 check-ups are free for enrolled families.",
    price: "Free under 13",
  },
];

export const VISIT_STEPS = [
  {
    title: "We talk first",
    body: "Fifteen minutes, sitting up and fully clothed, before anything goes near your mouth. Tell us what you're worried about. Plenty of our patients haven't been to a dentist in years — you will not be lectured.",
  },
  {
    title: "We show you what we see",
    body: "An intraoral camera puts your teeth on the screen beside you. You see the same image the dentist does, and we explain what is urgent, what can wait, and what needs nothing at all.",
  },
  {
    title: "You get the price in writing",
    body: "A written plan with every fee itemised, emailed before you commit. If a treatment could be staged over two years to spread the cost, we will say so.",
  },
];

export const FEES = [
  { item: "New patient examination", detail: "Full assessment, X-rays, written treatment plan", amount: "$149" },
  { item: "Scale, clean and polish", detail: "Includes fluoride application", amount: "$135" },
  { item: "White filling", detail: "Single surface, composite", amount: "$210" },
  { item: "Emergency assessment", detail: "Same-day, credited against treatment on the day", amount: "$95" },
  { item: "Take-home whitening kit", detail: "Custom trays, professional-strength gel", amount: "$390" },
  { item: "Same-visit ceramic crown", detail: "Scanned, milled and fitted in one appointment", amount: "$1,450" },
];

export const FEES_NOTE =
  "Fees current to March 2026. We bill six insurers directly, and interest-free payment plans are available over three, six or twelve months on treatment above $500.";

// `tone` picks a placeholder gradient in globals.css — swap the plate for a real <Image> when photos arrive.
export const TEAM: { name: string; role: string; bio: string; tone: "plum" | "slate" | "sand" }[] = [
  {
    name: "Dr Amara Whitfield",
    role: "Principal dentist · BDS",
    bio: "Founded the practice in 2009 after eight years in hospital dentistry. Special interest in treating anxious patients and in implant restoration.",
    tone: "plum",
  },
  {
    name: "Dr Tomas Reyes",
    role: "Dentist · BDS, PGDipClinDent",
    bio: "Handles most of our aligner and cosmetic work. Trained in digital smile design and runs the in-house milling unit.",
    tone: "slate",
  },
  {
    name: "Nadia Kaur",
    role: "Oral health therapist",
    bio: "Twelve years in preventive care. Nadia sees most of our children's appointments and has yet to meet a child she couldn't win over.",
    tone: "sand",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I avoided dentists for eleven years out of pure fear. Dr Whitfield sat and talked to me for twenty minutes before she even looked in my mouth. I've been back four times since without dreading it.",
    name: "Mira A.",
    context: "Patient since 2023",
  },
  {
    quote:
      "Cracked a molar on a Sunday. Rang at 8:40 on Monday, was in the chair by 11, walked out with a permanent crown the same afternoon. I still don't quite believe it.",
    name: "Dev P.",
    context: "Emergency appointment, January",
  },
  {
    quote:
      "They quoted $2,100 for my son's aligners and charged exactly $2,100. After three practices that all “found something extra”, that alone made them our family dentist.",
    name: "Helen T.",
    context: "Family of four, patients since 2021",
  },
];

export const FAQS = [
  {
    q: "I'm genuinely frightened of the dentist. Can you help?",
    a: "Yes, and you are in good company — it is the single most common thing patients tell us. Book a talk-only consultation: you sit in a normal chair, fully upright, and nothing goes near your mouth. We agree a stop signal before any treatment starts and we honour it every time. Oral sedation is available if you'd like it.",
  },
  {
    q: "How much will it cost, and will you tell me before you start?",
    a: "Our standard fees are published on this page. After your examination you receive a written, itemised plan by email, and we do not begin treatment until you have said yes to it. If something unexpected appears mid-treatment we stop and talk to you rather than carrying on and adding it to the bill.",
  },
  {
    q: "Do you take my insurance?",
    a: "We bill six major insurers directly, so you usually pay only the gap on the day. Bring your membership number to your first appointment and our reception team will check your cover and tell you your exact out-of-pocket cost before you go in.",
  },
  {
    q: "Can I get an appointment today?",
    a: "We keep emergency slots open every weekday morning. Ring before 10am and we will almost always see you the same day. Routine check-ups are usually available within the week, and you can book those online at any hour.",
  },
  {
    q: "Do you see children, and from what age?",
    a: "From age two. The first visit is a ride in the chair, a count of the teeth and a sticker — no treatment unless there's a problem. Check-ups are free for under-13s in enrolled families.",
  },
];

export const BOOKING = {
  reasons: [
    "Check-up and clean",
    "New patient examination",
    "Something hurts — emergency",
    "Cosmetic or whitening consultation",
    "Aligners / invisible braces",
    "Children's appointment",
    "Not sure — please advise",
  ],
  times: ["Morning", "Early afternoon", "After 4pm", "Any time"],
};
