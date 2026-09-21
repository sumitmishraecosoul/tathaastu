import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Calculator,
  Heart,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { useConnectModal } from "../../contexts/ConnectModalContext";
import blogsData from "../../data/blogsData";
import AnkitImg from "../../assets/AnkitImg.svg";
import MeeraImg from "../../assets/MeeraImg.svg";
import NeerajImg from "../../assets/NeerajImg.svg";
import RishikaImg from "../../assets/Srinita_testimonial.jpg";
import AriesImg from "../../assets/Aries.jpg";
import TaurusImg from "../../assets/taurus.jpg";
import GeminiImg from "../../assets/gemini.jpg";
import CancerImg from "../../assets/cancer.jpg";
import LeoImg from "../../assets/leo.jpg";
import VirgoImg from "../../assets/virgo.jpg";
import LibraImg from "../../assets/libra.jpg";
import ScorpioImg from "../../assets/scorpio.jpg";
import SagittariusImg from "../../assets/sagittarius.jpg";
import CapricornImg from "../../assets/capricorn.png";
import AquariusImg from "../../assets/aquarius.jpg";
import PiscesImg from "../../assets/pisces.jpg";
import TarotImg from "../../assets/Tarot Reading.jpg";
import KundliImg from "../../assets/AStrology kundli.jpg";
import HoroscopeImg from "../../assets/Horoscope Guidance.jpg";
import NumerologyImg from "../../assets/Numerology.jpg";
import VastuImg from "../../assets/Vastu Astrology.jpg";
import CrystalImg from "../../assets/Crystal Healing.jpg";
import "./astro-home.css";

const ASTROLOGERS = [
  {
    name: "Acharya Prem",
    expertise: ["Vedic", "Numerology"],
    languages: "English · Hindi",
    exp: "18 yrs",
    rating: "5.0",
    reviews: "12k+",
    price: "₹49/min",
    badge: "Celebrity",
    img: AnkitImg,
  },
  {
    name: "Meera Sharma",
    expertise: ["Tarot", "Psychic"],
    languages: "English · Hindi",
    exp: "14 yrs",
    rating: "4.9",
    reviews: "9k+",
    price: "₹39/min",
    badge: "Top Choice",
    img: MeeraImg,
  },
  {
    name: "Pt. Raghav",
    expertise: ["Vedic", "Vastu"],
    languages: "Hindi · English",
    exp: "22 yrs",
    rating: "5.0",
    reviews: "20k+",
    price: "₹59/min",
    badge: "Celebrity",
    img: NeerajImg,
  },
  {
    name: "Rishika Sen",
    expertise: ["Tarot", "Life Coach"],
    languages: "English · Hindi",
    exp: "11 yrs",
    rating: "4.9",
    reviews: "7k+",
    price: "₹35/min",
    badge: "Rising Star",
    img: RishikaImg,
  },
];

const QUICK_LINKS = [
  { title: "Daily Horoscope", desc: "Personalized daily reading", icon: Sparkles, path: "/#daily-horoscope" },
  { title: "Free Kundli", desc: "Detailed birth chart", icon: Calculator, path: "/calculator" },
  { title: "Kundli Matching", desc: "Guna milan score", icon: Heart, path: "/calculator" },
  { title: "Chat with Expert", desc: "Instant text guidance", icon: MessageCircle, path: "/consultation-booking" },
];

const CATEGORIES = [
  { title: "Love", count: "120+ experts", icon: Heart },
  { title: "Marriage & Kundli", count: "95+ experts", icon: Users },
  { title: "Career", count: "80+ experts", icon: Briefcase },
  { title: "Finance & Health", count: "70+ experts", icon: Wallet },
  { title: "Education", count: "45+ experts", icon: BookOpen },
  { title: "Family Guidance", count: "60+ experts", icon: Users },
];

const SERVICE_TILES = [
  { title: "Free Kundli", img: KundliImg, path: "/calculator" },
  { title: "Daily Horoscope", img: HoroscopeImg, path: "/#daily-horoscope" },
  { title: "Tarot Reading", img: TarotImg, path: "/services" },
  { title: "Numerology", img: NumerologyImg, path: "/services" },
  { title: "Vastu", img: VastuImg, path: "/services" },
  { title: "Crystal Healing", img: CrystalImg, path: "/services" },
];

const ZODIAC = [
  { name: "Aries", hindi: "Mesh", dates: "Mar 21 – Apr 19", img: AriesImg },
  { name: "Taurus", hindi: "Vrishabh", dates: "Apr 20 – May 20", img: TaurusImg },
  { name: "Gemini", hindi: "Mithun", dates: "May 21 – Jun 20", img: GeminiImg },
  { name: "Cancer", hindi: "Kark", dates: "Jun 21 – Jul 22", img: CancerImg },
  { name: "Leo", hindi: "Singh", dates: "Jul 23 – Aug 22", img: LeoImg },
  { name: "Virgo", hindi: "Kanya", dates: "Aug 23 – Sep 22", img: VirgoImg },
  { name: "Libra", hindi: "Tula", dates: "Sep 23 – Oct 22", img: LibraImg },
  { name: "Scorpio", hindi: "Vrishchik", dates: "Oct 23 – Nov 21", img: ScorpioImg },
  { name: "Sagittarius", hindi: "Dhanu", dates: "Nov 22 – Dec 21", img: SagittariusImg },
  { name: "Capricorn", hindi: "Makar", dates: "Dec 22 – Jan 19", img: CapricornImg },
  { name: "Aquarius", hindi: "Kumbh", dates: "Jan 20 – Feb 18", img: AquariusImg },
  { name: "Pisces", hindi: "Meen", dates: "Feb 19 – Mar 20", img: PiscesImg },
];

const HOROSCOPE_COPY = {
  default:
    "The Moon supports clarity and calm action today. Focus on one meaningful goal, stay thoughtful in conversations, and trust steady progress over rushed decisions. Love feels warmer when you listen first; work rewards careful planning.",
};

const ACTIVITY = [
  "Priya from Mumbai just started a chat with Acharya Prem",
  "Rahul from Delhi booked a Vastu consultation",
  "Neha from Hyderabad got her Kundli read",
  "Amit from Pune consulted about career",
  "Sneha from Bangalore received a tarot reading",
];

const FAQS = [
  {
    q: "Why is astrology so accurate?",
    a: "Astrology draws on long observation of planetary patterns mapped to your unique birth chart. Personalized readings look at your chart—not generic sun-sign blurbs—so guidance feels specific and practical.",
  },
  {
    q: "Why choose Tathaastu?",
    a: "Tathaastu connects you with verified experts across Vedic astrology, tarot, numerology, Vastu, and healing—with clear pricing, confidential sessions, and guidance you can apply in daily life.",
  },
  {
    q: "Are online consultations reliable?",
    a: "Yes. Online sessions use the same birth details and chart analysis as in-person work, with the added ease of chat, call, or video from home whenever you need support.",
  },
  {
    q: "How much does a consultation cost?",
    a: "Pricing varies by expert experience and format. Many users begin with a short introductory chat, then continue with the guide who feels right for them.",
  },
];

function SectionHeading({ eyebrow, title, subtitle, action }) {
  return (
    <div className="astro-section-head">
      <div>
        {eyebrow ? <p className="astro-eyebrow">{eyebrow}</p> : null}
        <h2 className="astro-title">{title}</h2>
        {subtitle ? <p className="astro-subtitle">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export default function AstroHomePage() {
  const { openModal } = useConnectModal();
  const [activeZodiac, setActiveZodiac] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [activityIdx, setActivityIdx] = useState(0);
  const blogs = useMemo(() => blogsData.slice(0, 3), []);
  const sign = ZODIAC[activeZodiac];

  useEffect(() => {
    const t = setInterval(() => {
      setActivityIdx((i) => (i + 1) % ACTIVITY.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="astro-home">
      {/* HERO */}
      <section className="astro-hero">
        <div className="astro-hero__inner">
          <div className="astro-hero__copy">
            <p className="astro-live-pill">
              <span className="astro-live-dot" />
              Live now · Experts online
            </p>
            <h1>
              India’s most trusted
              <br />
              <span>astrology &amp; healing</span> platform
            </h1>
            <ul className="astro-hero__bullets">
              <li>Personalized Kundli &amp; life guidance</li>
              <li>Chat, call, or video with verified experts</li>
              <li>Remedies, Vastu, tarot &amp; healing in one place</li>
            </ul>
            <div className="astro-hero__actions">
              <button type="button" className="astro-btn-primary" onClick={openModal}>
                Chat with Expert
              </button>
              <Link to="/calculator" className="astro-btn-ghost">
                Get Free Kundli
              </Link>
            </div>
            <div className="astro-activity" key={activityIdx}>
              <Sparkles className="h-4 w-4 text-[#E74660]" />
              <span>{ACTIVITY[activityIdx]}</span>
            </div>
          </div>

          <div className="astro-hero__visual" aria-hidden="true">
            <div className="astro-orbit">
              <div className="astro-orbit__ring" />
              <img className="astro-orbit__center" src={RishikaImg} alt="" />
              <img className="astro-orbit__a" src={AnkitImg} alt="" />
              <img className="astro-orbit__b" src={MeeraImg} alt="" />
              <img className="astro-orbit__c" src={NeerajImg} alt="" />
            </div>
          </div>
        </div>

        <div className="astro-stats">
          {[
            ["50M+", "Seekers guided"],
            ["100+", "Verified experts"],
            ["13+", "Languages"],
            ["24×7", "Available support"],
          ].map(([value, label]) => (
            <div key={label} className="astro-stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="astro-section">
        <div className="astro-quick-grid">
          {QUICK_LINKS.map(({ title, desc, icon: Icon, path }) => (
            <Link key={title} to={path} className="astro-quick-card">
              <span className="astro-quick-icon">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-50" />
            </Link>
          ))}
        </div>
      </section>

      {/* TOP ASTROLOGERS */}
      <section className="astro-section">
        <SectionHeading
          eyebrow="Consult"
          title="Talk to India’s top-rated experts"
          subtitle="Every expert is verified for skill, clarity, and a caring consultation experience."
          action={
            <Link to="/consultation-booking" className="astro-link">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="astro-astro-grid">
          {ASTROLOGERS.map((a) => (
            <article key={a.name} className="astro-card">
              <div className="astro-card__top">
                <img src={a.img} alt={a.name} />
                <div>
                  <div className="astro-card__name">
                    {a.name}
                    <BadgeCheck className="h-4 w-4 text-[#2D7351]" />
                  </div>
                  <span className="astro-badge">{a.badge}</span>
                </div>
              </div>
              <div className="astro-tags">
                {a.expertise.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="astro-meta">{a.languages}</p>
              <p className="astro-meta">{a.exp} exp · ★ {a.rating} · {a.reviews}</p>
              <div className="astro-card__footer">
                <strong>{a.price}</strong>
                <div className="astro-card__btns">
                  <button type="button" onClick={openModal}>
                    <MessageCircle className="h-4 w-4" /> Chat
                  </button>
                  <button type="button" className="is-call" onClick={openModal}>
                    <Phone className="h-4 w-4" /> Call
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="astro-section astro-section--soft">
        <SectionHeading
          eyebrow="Guidance"
          title="Find the right expert for you"
          subtitle="Browse by the life area you want clarity on."
        />
        <div className="astro-category-grid">
          {CATEGORIES.map(({ title, count, icon: Icon }) => (
            <button key={title} type="button" className="astro-category" onClick={openModal}>
              <span className="astro-category__icon">
                <Icon className="h-5 w-5" />
              </span>
              <span className="astro-category__text">
                <strong>{title}</strong>
                <em>{count}</em>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="astro-section">
        <SectionHeading
          eyebrow="Our services"
          title="Everything you need — charts to chakras"
          action={
            <Link to="/services" className="astro-link">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="astro-service-row">
          {SERVICE_TILES.map((s) => (
            <Link key={s.title} to={s.path} className="astro-service-tile">
              <img src={s.img} alt={s.title} />
              <span>{s.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section id="daily-horoscope" className="astro-section astro-section--soft">
        <SectionHeading
          eyebrow="Horoscope"
          title="Your daily horoscope reading"
          subtitle="Pick your raashi to see today’s pillars at a glance."
        />
        <div className="astro-zodiac-scroll scrollbar-hide">
          {ZODIAC.map((z, idx) => (
            <button
              key={z.name}
              type="button"
              className={`astro-zodiac ${idx === activeZodiac ? "is-active" : ""}`}
              onClick={() => setActiveZodiac(idx)}
            >
              <img src={z.img} alt={z.name} />
              <strong>{z.name}</strong>
              <span>{z.hindi}</span>
            </button>
          ))}
        </div>

        <div className="astro-horoscope-panel">
          <div className="astro-horoscope-panel__head">
            <img src={sign.img} alt={sign.name} />
            <div>
              <h3>
                {sign.name} · {sign.hindi}
              </h3>
              <p>{sign.dates}</p>
            </div>
          </div>
          <p className="astro-horoscope-copy">{HOROSCOPE_COPY.default}</p>
          <div className="astro-score-grid">
            {[
              ["Love", "Strong"],
              ["Career", "Good"],
              ["Health", "Strong"],
              ["Money", "High"],
            ].map(([label, value]) => (
              <div key={label} className="astro-score">
                <span>{label}</span>
                <strong>{value}</strong>
                <i style={{ width: value === "High" || value === "Strong" ? "86%" : "68%" }} />
              </div>
            ))}
          </div>
          <div className="astro-hero__actions">
            <button type="button" className="astro-btn-primary" onClick={openModal}>
              Talk to a specialist
            </button>
            <Link to="/blog" className="astro-btn-ghost">
              Read more horoscope
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="astro-section">
        <SectionHeading
          eyebrow="Reviews"
          title="Real people. Real reviews."
          subtitle="Join seekers who trust Tathaastu for clear, caring guidance."
        />
        <div className="astro-review-layout">
          <div className="astro-review-score">
            <strong>4.8</strong>
            <div className="astro-stars" aria-label="4.8 out of 5">
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <p>Based on thousands of consultations</p>
          </div>
          <div className="astro-review-card">
            <p>
              “I consulted Tathaastu during a confusing career phase. The guidance felt personal and practical—
              within months I had clarity and a path I trusted. Grateful for the support.”
            </p>
            <div>
              <strong>Rishika, 29</strong>
              <span>Bengaluru · India</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="astro-section astro-section--soft">
        <SectionHeading
          eyebrow="Learn"
          title="Read from our blog"
          action={
            <Link to="/blog" className="astro-link">
              View all blogs <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="astro-blog-grid">
          {blogs.map((b) => (
            <Link key={b.id} to={`/blog/${b.slug}`} className="astro-blog-card">
              <img src={b.image} alt={b.title} />
              <div>
                <span>{b.category}</span>
                <h3>{b.title}</h3>
                <p>{b.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO / INFO */}
      <section className="astro-section">
        <div className="astro-seo">
          <h2>Why do you need astrology?</h2>
          <p>
            Astrology helps you understand timing, patterns, and purpose—so love, career, family, and spiritual
            choices feel less random and more aligned. At Tathaastu, ancient wisdom meets modern convenience:
            chat or call an expert, generate your Kundli, and explore remedies from one calm, trusted home.
          </p>
          <h3>How online consultation works</h3>
          <ol>
            <li>Share birth details or your question.</li>
            <li>Connect with a verified expert via chat, call, or video.</li>
            <li>Receive clear guidance and practical next steps.</li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="astro-section astro-section--soft">
        <SectionHeading eyebrow="Help" title="First time? Read these first." />
        <div className="astro-faq">
          {FAQS.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <div key={item.q} className={`astro-faq__item ${open ? "is-open" : ""}`}>
                <button type="button" onClick={() => setOpenFaq(open ? -1 : idx)}>
                  <span>{item.q}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open ? <p>{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
