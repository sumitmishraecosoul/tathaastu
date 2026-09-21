/**
 * Top nav IA for Tathaastu — keep top labels simple; depth lives in mega-menus.
 */
export const NAV_MEGA_MENUS = [
  {
    id: "consult",
    label: "Consult",
    accent: "#6B5B95",
    tint: "#F3EFFA",
    path: "/services",
    items: [
      { name: "Talk to Expert", path: "/consultation-booking" },
      { name: "Chat / Call", path: "/consultation-booking" },
      { name: "Video Consultation", path: "/consultation-booking" },
      { name: "Tarot / Numerology", path: "/services" },
      { name: "Vastu / Healing", path: "/services" },
    ],
  },
  {
    id: "astrology",
    label: "Astrology",
    accent: "#C9A227",
    tint: "#FBF6E8",
    path: "/calculator",
    items: [
      { name: "Free Kundli", path: "/calculator" },
      { name: "Kundli Matching", path: "/calculator" },
      { name: "Horoscope", path: "/#daily-horoscope" },
      { name: "Panchang", path: "/calculator" },
      { name: "Calculators", path: "/calculator" },
    ],
  },
  {
    id: "guidance",
    label: "Guidance",
    accent: "#C45C7A",
    tint: "#FBEFF2",
    path: "/services",
    items: [
      { name: "Love / Relationship", path: "/services" },
      { name: "Marriage", path: "/services" },
      { name: "Career / Business", path: "/services" },
      { name: "Finance", path: "/services" },
      { name: "Family / Education", path: "/services" },
    ],
  },
  {
    id: "store",
    label: "Store",
    accent: "#2D7351",
    tint: "#EEF6F1",
    path: "/services",
    items: [
      { name: "Puja", path: "/services" },
      { name: "Remedies", path: "/services" },
      { name: "Gemstones", path: "/services" },
      { name: "Rudraksha", path: "/services" },
      { name: "Crystals / Vastu", path: "/services" },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    accent: "#3B6EA5",
    tint: "#EEF4FA",
    path: "/blog",
    items: [
      { name: "Blog", path: "/blog" },
      { name: "Videos", path: "/courses" },
      { name: "Guides", path: "/blog" },
      { name: "Festivals", path: "/blog" },
      { name: "FAQs", path: "/#faq" },
    ],
  },
  {
    id: "about",
    label: "About",
    accent: "#4A5568",
    tint: "#F4F5F7",
    path: "/contact",
    items: [
      { name: "About + Founder", path: "/contact" },
      { name: "Become an Expert", path: "/contact" },
      { name: "Login / Dashboard", path: "/login" },
      { name: "Wallet", path: "/pricing" },
      { name: "Support", path: "/contact" },
    ],
  },
];
