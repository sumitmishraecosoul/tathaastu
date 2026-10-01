import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gem,
  Heart,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  User,
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
import MainBanner from "../../assets/Main banner 1.svg";
import NumerologyBanner from "../../assets/background_banner/Numerology.png";
import MatchMakingBanner from "../../assets/background_banner/Match making.png";
import BlueprintBanner from "../../assets/background_banner/Blueprint.png";
import FreeKundliLogo from "../../assets/home_services/Free-kundli.png";
import DailyHoroscopeLogo from "../../assets/home_services/Daily-Horoscope.png";
import TarotReadingLogo from "../../assets/home_services/tarot-reading.png";
import NumerologyLogo from "../../assets/home_services/Numerology.png";
import VastuLogo from "../../assets/home_services/Vastu.png";
import CrystalHealingLogo from "../../assets/home_services/crystal-healing.png";
import AriesLogo from "../../assets/logo/aries_logo.svg";
import TaurusLogo from "../../assets/logo/taurus_logo.svg";
import GeminiLogo from "../../assets/logo/gemini_logo.svg";
import CancerLogo from "../../assets/logo/cancer_logo.svg";
import LeoLogo from "../../assets/logo/leo_logo.svg";
import VirgoLogo from "../../assets/logo/virgo_logo.svg";
import LibraLogo from "../../assets/logo/libra_logo.svg";
import ScorpioLogo from "../../assets/logo/scorpio_logo.svg";
import SagittariusLogo from "../../assets/logo/sagittarius_logo.svg";
import CapricornLogo from "../../assets/logo/capricorn_logo.svg";
import AquariusLogo from "../../assets/logo/aquarius_logo.svg";
import PiscesLogo from "../../assets/logo/pisces_logo.svg";
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

const CATEGORIES = [
  { title: "Love", count: "120+ experts", icon: Heart },
  { title: "Marriage & Kundli", count: "95+ experts", icon: Users },
  { title: "Career", count: "80+ experts", icon: Briefcase },
  { title: "Finance & Health", count: "70+ experts", icon: Wallet },
  { title: "Education", count: "45+ experts", icon: BookOpen },
  { title: "Family Guidance", count: "60+ experts", icon: Users },
];

const TRUST_BADGES = [
  { title: "Authentic & Pure", desc: "Sourced with care", icon: ShieldCheck },
  { title: "Secure Payments", desc: "100% safe checkout", icon: Lock },
  { title: "Fast & Reliable Delivery", desc: "Pan India shipping", icon: Truck },
  { title: "Trusted by Thousands", desc: "4.8+ average rating", icon: Users },
];

const SERVICE_TILES = [
  {
    title: "Free Kundli",
    desc: "Get your personalized birth chart.",
    img: FreeKundliLogo,
    path: "/calculator",
  },
  {
    title: "Daily Horoscope",
    desc: "Your cosmic guidance for today.",
    img: DailyHoroscopeLogo,
    path: "/#daily-horoscope",
  },
  {
    title: "Tarot Reading",
    desc: "Find clarity for your next step.",
    img: TarotReadingLogo,
    path: "/services",
  },
  {
    title: "Numerology",
    desc: "Decode your numbers, discover your path.",
    img: NumerologyLogo,
    path: "/services",
  },
  {
    title: "Vastu",
    desc: "Harmonize your space, invite positivity.",
    img: VastuLogo,
    path: "/services",
  },
  {
    title: "Crystal Healing",
    desc: "Natural energy for a balanced you.",
    img: CrystalHealingLogo,
    path: "/services",
  },
];

const ZODIAC = [
  {
    name: "Aries",
    logo: AriesLogo,
    blurb: "Bold, energetic, and driven. Today brings fresh momentum and opportunities to take the lead.",
    scores: { love: 50, career: 85, marriage: 62, finance: 78 },
  },
  {
    name: "Taurus",
    logo: TaurusLogo,
    blurb: "Steady and grounded. Focus on comfort, patience, and one meaningful goal that builds lasting value.",
    scores: { love: 72, career: 60, marriage: 80, finance: 70 },
  },
  {
    name: "Gemini",
    logo: GeminiLogo,
    blurb: "Curious energy opens doors. Conversations spark clarity—share ideas and stay flexible with plans.",
    scores: { love: 65, career: 88, marriage: 55, finance: 58 },
  },
  {
    name: "Cancer",
    logo: CancerLogo,
    blurb: "Emotional intuition is strong. Nurture close bonds and protect your peace with gentle boundaries.",
    scores: { love: 82, career: 54, marriage: 76, finance: 63 },
  },
  {
    name: "Leo",
    logo: LeoLogo,
    blurb: "Confidence shines today. Lead with warmth, celebrate progress, and let your creativity take center stage.",
    scores: { love: 78, career: 90, marriage: 68, finance: 74 },
  },
  {
    name: "Virgo",
    logo: VirgoLogo,
    blurb: "Detail brings results. Organize priorities, refine routines, and trust careful steps over rush.",
    scores: { love: 58, career: 86, marriage: 70, finance: 81 },
  },
  {
    name: "Libra",
    logo: LibraLogo,
    blurb: "Balance and beauty guide you. Seek harmony in relationships and choose fairness in every decision.",
    scores: { love: 84, career: 66, marriage: 88, finance: 60 },
  },
  {
    name: "Scorpio",
    logo: ScorpioLogo,
    blurb: "Depth and focus intensify. Transform one lingering issue and trust your instinct on hidden truths.",
    scores: { love: 70, career: 75, marriage: 64, finance: 82 },
  },
  {
    name: "Sagittarius",
    logo: SagittariusLogo,
    blurb: "Adventure calls. Expand your view, say yes to learning, and keep optimism as your compass.",
    scores: { love: 67, career: 79, marriage: 58, finance: 69 },
  },
  {
    name: "Capricorn",
    logo: CapricornLogo,
    blurb: "Discipline pays off. Climb steadily, honor commitments, and build toward a long-term win.",
    scores: { love: 55, career: 92, marriage: 72, finance: 88 },
  },
  {
    name: "Aquarius",
    logo: AquariusLogo,
    blurb: "Fresh ideas flow freely. Innovate with community in mind and welcome unexpected allies.",
    scores: { love: 61, career: 84, marriage: 57, finance: 73 },
  },
  {
    name: "Pisces",
    logo: PiscesLogo,
    blurb: "Dreams feel vivid. Soften into intuition, create space for rest, and let compassion lead.",
    scores: { love: 86, career: 52, marriage: 79, finance: 56 },
  },
];

const SCORE_META = [
  { key: "love", label: "Love", icon: Heart },
  { key: "career", label: "Career", icon: Briefcase },
  { key: "marriage", label: "Marriage", icon: Gem },
  { key: "finance", label: "Finance", icon: Wallet },
];

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
  const [numerologyForm, setNumerologyForm] = useState({ name: "", dob: "" });
  const [matchMakingForm, setMatchMakingForm] = useState({ name: "", partnerName: "" });
  const [kundliForm, setKundliForm] = useState({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });
  const blogs = useMemo(() => blogsData.slice(0, 3), []);

  const goPrevZodiac = () => {
    setActiveZodiac((i) => (i - 1 + ZODIAC.length) % ZODIAC.length);
  };

  const goNextZodiac = () => {
    setActiveZodiac((i) => (i + 1) % ZODIAC.length);
  };

  const visibleZodiac = useMemo(() => {
    const total = ZODIAC.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeZodiac + offset + total) % total;
      return { ...ZODIAC[index], index, offset };
    });
  }, [activeZodiac]);

  useEffect(() => {
    const t = setInterval(() => {
      setActivityIdx((i) => (i + 1) % ACTIVITY.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="astro-home">
      {/* HERO — Figma-style banner */}
      <section className="astro-hero">
        <div className="astro-hero-banner">
          <img
            className="astro-hero-banner__img"
            src={MainBanner}
            alt="Tathaastu — trusted astrology and healing experts"
          />
          <div className="astro-hero-banner__overlay">
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
                <Link to="/calculator" className="astro-btn-ghost astro-btn-ghost--on-banner">
                  Get Free Kundli
                </Link>
              </div>
              <div className="astro-activity" key={activityIdx}>
                <Sparkles className="h-4 w-4 text-[#E74660]" />
                <span>{ACTIVITY[activityIdx]}</span>
              </div>
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

      {/* TRUST BAR + OUR SERVICES — Figma rounded cards */}
      <section className="astro-services-section">
        <div className="astro-section astro-services-section__inner">
          <div className="astro-trust-bar">
            {TRUST_BADGES.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="astro-trust-item">
                <span className="astro-trust-item__icon">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="astro-services-head">
            <p className="astro-services-eyebrow">Our Services</p>
            <h2>Everything You Need – From Charts to Chakras</h2>
            <p className="astro-services-sub">
              Ancient wisdom for a modern life. Explore personalised guidance, healing solutions
              and spiritual tools — all in one place.
            </p>
          </div>

          <div className="astro-service-row">
            {SERVICE_TILES.map((s) => (
              <Link key={s.title} to={s.path} className="astro-service-card">
                <span className="astro-service-card__icon">
                  <img src={s.img} alt="" />
                </span>
                <strong className="astro-service-card__title">{s.title}</strong>
                <em className="astro-service-card__desc">{s.desc}</em>
                <span className="astro-service-card__arrow" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="astro-services-cta">
            <Link to="/services" className="astro-services-cta__btn">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE — Figma carousel */}
      <section id="daily-horoscope" className="astro-horoscope-section">
        <div className="astro-section">
          <div className="astro-horoscope-head">
            <p>Daily Horoscope</p>
            <h2>Your Cosmic Guidance for today</h2>
          </div>

          <div className="astro-horoscope-carousel">
            <button
              type="button"
              className="astro-horoscope-nav"
              onClick={goPrevZodiac}
              aria-label="Previous zodiac"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="astro-horoscope-track">
              {visibleZodiac.map((z) => (
                <article
                  key={`${z.name}-${z.offset}`}
                  className={`astro-horoscope-card is-offset-${Math.abs(z.offset)} ${
                    z.offset === 0 ? "is-active" : ""
                  } ${z.offset < 0 ? "is-left" : ""} ${z.offset > 0 ? "is-right" : ""}`}
                  onClick={() => setActiveZodiac(z.index)}
                >
                  <div className="astro-horoscope-card__logo">
                    <img src={z.logo} alt="" />
                  </div>
                  <h3>{z.name}</h3>
                  <p>{z.blurb}</p>
                  <div className="astro-horoscope-scores">
                    {SCORE_META.map(({ key, label, icon: Icon }) => (
                      <div key={key} className="astro-horoscope-score">
                        <span className="astro-horoscope-score__label">
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                        </span>
                        <span className="astro-horoscope-score__bar">
                          <i style={{ width: `${z.scores[key]}%` }} />
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="astro-horoscope-nav"
              onClick={goNextZodiac}
              aria-label="Next zodiac"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="astro-horoscope-dots" role="tablist" aria-label="Zodiac signs">
            {ZODIAC.map((z, idx) => (
              <button
                key={z.name}
                type="button"
                className={idx === activeZodiac ? "is-active" : ""}
                aria-label={z.name}
                aria-selected={idx === activeZodiac}
                onClick={() => setActiveZodiac(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FREE NUMEROLOGY REPORT — Figma banner */}
      <section className="astro-promo-banner">
        <img
          className="astro-promo-banner__bg"
          src={NumerologyBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-promo-banner__inner">
          <div className="astro-promo-banner__copy">
            <p className="astro-promo-banner__eyebrow">Free Numerology Report</p>
            <h2>
              Understand Your Personality
              <br />
              Through Numbers
            </h2>
            <p className="astro-promo-banner__sub">
              Discover your life path, strengths, and opportunities with a personalized
              numerology reading — absolutely free.
            </p>

            <form
              className="astro-promo-banner__form"
              onSubmit={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <label className="astro-promo-field">
                <User className="h-4 w-4" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={numerologyForm.name}
                  onChange={(e) =>
                    setNumerologyForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="astro-promo-field">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={numerologyForm.dob}
                  onChange={(e) =>
                    setNumerologyForm((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  required
                />
              </label>
              <button type="submit" className="astro-promo-banner__btn">
                Generate Numerology
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FREE MATCH MAKING — Figma banner */}
      <section className="astro-promo-banner">
        <img
          className="astro-promo-banner__bg"
          src={MatchMakingBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-promo-banner__inner">
          <div className="astro-promo-banner__copy">
            <p className="astro-promo-banner__eyebrow">Free Match Making</p>
            <h2>
              Find Your Life
              <br />
              Partner
            </h2>
            <p className="astro-promo-banner__sub">
              Discover your compatibility through Vedic Astrology and find the perfect
              life partner — absolutely free.
            </p>

            <form
              className="astro-promo-banner__form"
              onSubmit={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <label className="astro-promo-field">
                <User className="h-4 w-4" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={matchMakingForm.name}
                  onChange={(e) =>
                    setMatchMakingForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="astro-promo-field">
                <Users className="h-4 w-4" aria-hidden="true" />
                <input
                  type="text"
                  name="partnerName"
                  placeholder="Partner Name"
                  value={matchMakingForm.partnerName}
                  onChange={(e) =>
                    setMatchMakingForm((prev) => ({
                      ...prev,
                      partnerName: e.target.value,
                    }))
                  }
                  required
                />
              </label>
              <button type="submit" className="astro-promo-banner__btn">
                Generate Match Making
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GET FREE KUNDLI — Figma banner */}
      <section className="astro-promo-banner">
        <img
          className="astro-promo-banner__bg"
          src={BlueprintBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-promo-banner__inner">
          <div className="astro-promo-banner__copy astro-promo-banner__copy--wide">
            <p className="astro-promo-banner__eyebrow">Get Free Kundli</p>
            <h2>
              Your Cosmic
              <br />
              Blueprint
            </h2>
            <p className="astro-promo-banner__sub">
              Enter your birth details to generate your personalized Vedic birth chart.
            </p>

            <form
              className="astro-promo-banner__form astro-promo-banner__form--kundli"
              onSubmit={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <label className="astro-promo-field">
                <User className="h-4 w-4" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={kundliForm.name}
                  onChange={(e) =>
                    setKundliForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="astro-promo-field">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={kundliForm.dob}
                  onChange={(e) =>
                    setKundliForm((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="astro-promo-field">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <input
                  type="time"
                  name="tob"
                  placeholder="Time of Birth"
                  value={kundliForm.tob}
                  onChange={(e) =>
                    setKundliForm((prev) => ({ ...prev, tob: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="astro-promo-field">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <input
                  type="text"
                  name="place"
                  placeholder="Place of Birth"
                  value={kundliForm.place}
                  onChange={(e) =>
                    setKundliForm((prev) => ({ ...prev, place: e.target.value }))
                  }
                  required
                />
              </label>
              <button type="submit" className="astro-promo-banner__btn">
                Generate My Kundli
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TOP EXPERTS */}
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
