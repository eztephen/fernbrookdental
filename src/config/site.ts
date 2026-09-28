// Central business config — update here and it reflects across the entire site
export const SITE = {
  name: "Fernbrook Dental Studio",
  shortName: "Fernbrook",
  descriptor: "Dental Studio",
  tagline: "Gentle dentistry since 2009",
  description:
    "A small, unhurried dental practice in Riverton. Forty-minute appointments, published fees, and a team experienced with nervous patients.",
  phone: { display: "09 555 0142", href: "tel:+6495550142" },
  email: "hello@fernbrookdental.example",
  address: {
    line1: "Level 2, 118 Fernbrook Road",
    line2: "Riverton 0612",
    short: "Level 2, 118 Fernbrook Road, Riverton",
  },
  hoursSummary: "Open weekdays from 8am · Saturdays by appointment",
  // `days` uses JavaScript's getDay(): 0 = Sunday … 6 = Saturday
  hours: [
    { label: "Monday", days: [1], time: "8:00 am – 6:00 pm" },
    { label: "Tuesday – Thursday", days: [2, 3, 4], time: "8:00 am – 6:00 pm" },
    { label: "Friday", days: [5], time: "8:00 am – 4:30 pm" },
    { label: "Saturday", days: [6], time: "By appointment" },
    { label: "Sunday", days: [0], time: "Closed" },
  ],
  replyPromise: "within the hour",
};
