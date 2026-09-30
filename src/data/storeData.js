import crystalImg from "../assets/Crystal Healing.jpg";
import poojaImg from "../assets/POOJA_SERVICES.png";
import vastuImg from "../assets/Vastu Astrology.jpg";
import numerologyImg from "../assets/Numerology.jpg";
import kundliImg from "../assets/AStrology kundli.jpg";
import tarotImg from "../assets/Tarot Reading.jpg";
import auraImg from "../assets/Aura Healing & Scanning.jpg";
import chakraImg from "../assets/chakra.jpg";
import dowsingImg from "../assets/dowsing.jpg";
import petImg from "../assets/Pet healing.jpeg";
import numberImg from "../assets/Number.jpeg";
import horoscopeImg from "../assets/Horoscope Guidance.jpg";
import lotusMandala from "../assets/lotus_mandala.svg";

export const STORE_CATEGORIES = [
  { id: "puja", name: "Puja", slug: "puja", image: poojaImg, banner: poojaImg },
  { id: "remedies", name: "Remedies", slug: "remedies", image: kundliImg, banner: kundliImg },
  { id: "gemstones", name: "Gemstones", slug: "gemstones", image: crystalImg, banner: crystalImg },
  { id: "rudraksha", name: "Rudraksha", slug: "rudraksha", image: numberImg, banner: numberImg },
  { id: "crystals", name: "Crystals", slug: "crystals", image: crystalImg, banner: crystalImg },
  { id: "vastu", name: "Vastu", slug: "vastu", image: vastuImg, banner: vastuImg },
  { id: "incense", name: "Incense", slug: "incense", image: auraImg, banner: auraImg },
  { id: "yantras", name: "Yantras", slug: "yantras", image: chakraImg, banner: chakraImg },
];

export const STORE_INTENTIONS = [
  { id: "peace", name: "Peace & Calm", image: auraImg },
  { id: "prosperity", name: "Prosperity", image: vastuImg },
  { id: "love", name: "Love & Harmony", image: tarotImg },
  { id: "protection", name: "Protection", image: kundliImg },
  { id: "focus", name: "Focus & Clarity", image: horoscopeImg },
  { id: "healing", name: "Healing", image: petImg },
];

export const STORE_FILTERS = [
  "All Products",
  "Puja Essentials",
  "Gemstones",
  "Rudraksha",
  "Crystals",
  "Vastu Items",
  "Incense & Dhoop",
  "Yantras",
  "Best Sellers",
  "New Arrivals",
];

const products = [
  {
    id: 1,
    slug: "sandalwood-puja-dhoop-cones",
    name: "Sandalwood Puja Dhoop Cones",
    price: 299,
    mrp: 399,
    category: "puja",
    intention: "peace",
    image: auraImg,
    badge: "Best Seller",
    rating: 4.8,
    reviews: 128,
    shortDesc: "Fragrant sandalwood cones for daily puja and meditation.",
    description:
      "Hand-rolled sandalwood dhoop cones crafted for home temples and meditation spaces. Creates a calm, sacred atmosphere in minutes.",
    howToUse: "Light the tip, place on a heat-safe holder, and let the fragrance fill your prayer space for 15–20 minutes.",
    benefits: ["Purifies space", "Supports focus in prayer", "Natural sandalwood aroma"],
  },
  {
    id: 2,
    slug: "rose-quartz-love-crystal",
    name: "Rose Quartz Love Crystal",
    price: 799,
    mrp: 999,
    category: "crystals",
    intention: "love",
    image: crystalImg,
    badge: "Popular",
    rating: 4.9,
    reviews: 210,
    shortDesc: "Soft pink crystal for love, compassion, and emotional healing.",
    description:
      "A carefully selected rose quartz piece for relationship harmony and self-love rituals. Ideal for altar placement or daily carry.",
    howToUse: "Keep near your bedside or hold during meditation while setting a clear intention of love and kindness.",
    benefits: ["Emotional balance", "Relationship harmony", "Gentle healing energy"],
  },
  {
    id: 3,
    slug: "5-mukhi-rudraksha-mala",
    name: "5 Mukhi Rudraksha Mala",
    price: 1199,
    mrp: 1499,
    category: "rudraksha",
    intention: "protection",
    image: numberImg,
    badge: "Sacred",
    rating: 4.7,
    reviews: 96,
    shortDesc: "Traditional 5-mukhi mala for peace, focus, and spiritual grounding.",
    description:
      "Authentic 5 Mukhi Rudraksha beads strung as a wearable mala. Used for japa, meditation, and everyday spiritual protection.",
    howToUse: "Wear around the neck or wrist after energizing with a short mantra practice.",
    benefits: ["Supports calm mind", "Spiritual protection", "Daily wear ready"],
  },
  {
    id: 4,
    slug: "vastu-pyramid-for-home",
    name: "Vastu Pyramid for Home",
    price: 1499,
    mrp: 1899,
    category: "vastu",
    intention: "prosperity",
    image: vastuImg,
    badge: "Recommended",
    rating: 4.6,
    reviews: 74,
    shortDesc: "Brass Vastu pyramid to balance energy flow in living spaces.",
    description:
      "A compact Vastu pyramid designed to support positive directional energy at home or office. A practical remedy recommended by Vastu experts.",
    howToUse: "Place in the north-east or as advised by your Vastu expert after cleaning the area.",
    benefits: ["Energy balance", "Home harmony", "Compact & elegant"],
  },
  {
    id: 5,
    slug: "sri-yantra-brass-plate",
    name: "Sri Yantra Brass Plate",
    price: 2499,
    mrp: 2999,
    category: "yantras",
    intention: "prosperity",
    image: chakraImg,
    badge: "Premium",
    rating: 4.9,
    reviews: 151,
    shortDesc: "Sacred Sri Yantra plate for abundance and spiritual alignment.",
    description:
      "Finely crafted brass Sri Yantra for puja rooms and meditation altars. A timeless symbol of prosperity and divine order.",
    howToUse: "Place on a clean cloth facing east or north. Offer flowers and light a diya during prayer.",
    benefits: ["Abundance rituals", "Altar centerpiece", "Durable brass finish"],
  },
  {
    id: 6,
    slug: "complete-puja-essentials-kit",
    name: "Complete Puja Essentials Kit",
    price: 999,
    mrp: 1299,
    category: "puja",
    intention: "peace",
    image: poojaImg,
    badge: "Value Pack",
    rating: 4.8,
    reviews: 183,
    shortDesc: "All-in-one kit with core items for daily and festive puja.",
    description:
      "A curated kit with incense, diya, kumkum, rice, and essentials so you can begin or elevate your home puja practice instantly.",
    howToUse: "Unpack items onto a clean tray and follow your family tradition or expert-guided ritual steps.",
    benefits: ["Ready-to-use set", "Ideal for beginners", "Festive & daily use"],
  },
  {
    id: 7,
    slug: "amethyst-focus-cluster",
    name: "Amethyst Focus Cluster",
    price: 899,
    mrp: 1099,
    category: "crystals",
    intention: "focus",
    image: crystalImg,
    badge: "New",
    rating: 4.7,
    reviews: 62,
    shortDesc: "Amethyst cluster for clarity, intuition, and calm focus.",
    description:
      "Natural amethyst cluster for study desks, meditation corners, and healing spaces. Helps settle restless energy.",
    howToUse: "Place on your work desk or meditation altar. Cleanse weekly with sound or moonlight.",
    benefits: ["Mental clarity", "Calm focus", "Natural formation"],
  },
  {
    id: 8,
    slug: "navagraha-remedy-set",
    name: "Navagraha Remedy Set",
    price: 1799,
    mrp: 2199,
    category: "remedies",
    intention: "protection",
    image: kundliImg,
    badge: "Expert Pick",
    rating: 4.8,
    reviews: 88,
    shortDesc: "Planet-aligned remedy set recommended for dosha balance.",
    description:
      "A thoughtfully packed Navagraha remedy kit with items commonly suggested by Vedic experts for planetary harmony.",
    howToUse: "Use under guidance of your preferred expert. Follow the included ritual card for each planet day.",
    benefits: ["Dosha support", "Guided ritual card", "Trusted combinations"],
  },
  {
    id: 9,
    slug: "camphor-and-diya-combo",
    name: "Camphor & Diya Combo",
    price: 349,
    mrp: 449,
    category: "puja",
    intention: "peace",
    image: poojaImg,
    rating: 4.5,
    reviews: 140,
    shortDesc: "Everyday camphor tablets with brass-finish diya.",
    description: "A simple combo for aarti and daily cleansing rituals at home.",
    howToUse: "Light camphor on the diya during aarti in a ventilated area.",
    benefits: ["Daily aarti ready", "Cleansing aroma", "Affordable starter set"],
  },
  {
    id: 10,
    slug: "citrine-prosperity-stone",
    name: "Citrine Prosperity Stone",
    price: 699,
    mrp: 899,
    category: "gemstones",
    intention: "prosperity",
    image: crystalImg,
    badge: "Wealth",
    rating: 4.6,
    reviews: 77,
    shortDesc: "Warm citrine stone associated with confidence and abundance.",
    description: "Polished citrine for wealth corners, wallets, or meditation intention work.",
    howToUse: "Keep in the north or wealth corner of your space after setting a clear prosperity intention.",
    benefits: ["Abundance rituals", "Warm energy", "Pocket-friendly size"],
  },
  {
    id: 11,
    slug: "healing-incense-gift-box",
    name: "Healing Incense Gift Box",
    price: 549,
    mrp: 699,
    category: "incense",
    intention: "healing",
    image: dowsingImg,
    badge: "Gift",
    rating: 4.7,
    reviews: 59,
    shortDesc: "Assorted incense sticks curated for healing and rest.",
    description: "A gift-ready box with calming incense blends for evening wind-down and energy clearing.",
    howToUse: "Burn one stick in a holder; allow smoke to circulate then ventilate gently.",
    benefits: ["Gift packaging", "Calming blends", "Evening ritual friendly"],
  },
  {
    id: 12,
    slug: "chakra-alignment-kit",
    name: "Chakra Alignment Kit",
    price: 1599,
    mrp: 1999,
    category: "crystals",
    intention: "healing",
    image: chakraImg,
    badge: "Complete",
    rating: 4.9,
    reviews: 104,
    shortDesc: "Seven-stone kit for chakra meditation and energy work.",
    description: "A full set of chakra stones with a simple guide for beginners and practitioners alike.",
    howToUse: "Lay stones along the body during meditation following the included chakra map.",
    benefits: ["7 stones included", "Beginner guide", "Energy balancing"],
  },
];

export const STORE_HERO = {
  title: "Is Your Home Blocking Positive Energy?",
  subtitle: "Discover expert-recommended Vastu remedies, puja essentials, and sacred products for a harmonious space.",
  cta: "Shop Vastu Remedies",
  ctaPath: "/store/vastu",
  image: lotusMandala,
  bgImage: vastuImg,
};

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return products;
  return products.filter((p) => p.category === categorySlug);
}

export function getProductsByIntention(intentionId) {
  return products.filter((p) => p.intention === intentionId);
}

export function getRecommendedProducts(limit = 8) {
  return products.slice(0, limit);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.intention === product.intention))
    .slice(0, limit);
}

export function getCategoryBySlug(slug) {
  return STORE_CATEGORIES.find((c) => c.slug === slug) || null;
}

export function formatInr(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
