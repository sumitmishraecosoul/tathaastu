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
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
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
import ClientsBanner from "../../assets/background_banner/Clients.png";
import AppDownloadBanner from "../../assets/background_banner/app_download_banner.svg";
import LeftMandala from "../../assets/background_banner/Left mandala.png";
import RightMandala from "../../assets/background_banner/Right mandala.png";
import FreeKundliLogo from "../../assets/home_services/Free-kundli.png";
import AppleLogoPng from "../../assets/logo/apple_logo.png";
import PlayStoreLogoPng from "../../assets/logo/playstore_logo.png";
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
  { title: "Love & Relationships", count: "120+ experts", icon: Heart },
  { title: "Marriage & Compatibility", count: "95+ experts", icon: Users },
  { title: "Career Decisions", count: "80+ experts", icon: Briefcase },
  { title: "Money & Wellbeing", count: "70+ experts", icon: Wallet },
  { title: "Education & Growth", count: "45+ experts", icon: BookOpen },
  { title: "Family & Personal Life", count: "60+ experts", icon: Users },
];

const TRUST_BADGES = [
  { title: "Authentic & Pure", desc: "Chosen With Care", icon: ShieldCheck },
  { title: "Secure Payments", desc: "100% Safe Checkout", icon: Lock },
  { title: "Fast & Reliable Delivery", desc: "Delivered Across India", icon: Truck },
  { title: "Trusted By Thousands", desc: "4.8+ Average Rating", icon: Users },
];

const SERVICE_TILES = [
  {
    title: "Free Kundli",
    desc: "Understand Your Birth Chart And Get A Personalised View Of Your Life.",
    img: FreeKundliLogo,
    path: "/calculator",
  },
  {
    title: "Daily Horoscope",
    desc: "Start Your Day With Simple Guidance For What May Lie Ahead.",
    img: DailyHoroscopeLogo,
    path: "/#daily-horoscope",
  },
  {
    title: "Tarot Reading",
    desc: "Get A Fresh Perspective When You’re Looking For Clarity.",
    img: TarotReadingLogo,
    path: "/services",
  },
  {
    title: "Numerology",
    desc: "Discover What Your Numbers Can Tell You About Your Journey.",
    img: NumerologyLogo,
    path: "/services",
  },
  {
    title: "Vastu",
    desc: "Create A Home That Feels Balanced, Comfortable, And Positive.",
    img: VastuLogo,
    path: "/services",
  },
  {
    title: "Crystal Healing",
    desc: "Bring A Little More Calm And Balance Into Your Everyday Life.",
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
    q: "What can I use Tathaastu for?",
    a: "Tathaastu helps you find guidance for different areas of life. You can create your Kundli, check your horoscope, talk to an expert, or explore tarot, numerology, Vastu, and healing.",
  },
  {
    q: "How can I talk to an expert?",
    a: "Choose a service and browse the available experts. You can connect with an expert through chat, call, or video, depending on the consultation you choose.",
  },
  {
    q: "What details do I need to create my Kundli?",
    a: "You’ll need your date of birth, exact birth time, and place of birth. These details help create your Vedic birth chart.",
  },
  {
    q: "How do I choose the right expert?",
    a: "Start by choosing what you need help with, such as love, marriage, career, finance or family. You can then explore expert profiles and choose someone who feels right for you.",
  },
  {
    q: "Can I ask questions during a consultation?",
    a: "Yes. You can ask the questions that are on your mind and discuss them directly with your expert during your consultation.",
  },
  {
    q: "Is Tathaastu available anytime?",
    a: "You can access Tathaastu online whenever you need it. Expert availability may vary, so check the available consultation slots before booking.",
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
                India’s Most Trusted
                <br />
                <span>Astrology &amp; Healing</span> Platform
              </h1>
              <ul className="astro-hero__bullets">
                <li>Personalised Kundli &amp; Life Guidance</li>
                <li>Trusted Guidance From Verified Astrologers</li>
                <li>Astrology, Vastu, Tarot &amp; Healing</li>
                <li>Connect With An Astrologer Via Chat, Call, Or Video</li>
              </ul>
              <div className="astro-hero__actions">
                <button type="button" className="astro-btn-primary" onClick={openModal}>
                  Chat With An Astrologer
                </button>
                <Link to="/calculator" className="astro-btn-ghost astro-btn-ghost--on-banner">
                  Get Your Free Kundli
                </Link>
              </div>
              <div className="astro-activity" key={activityIdx}>
                <Sparkles className="h-4 w-4 text-[#E74660]" />
                <span>{ACTIVITY[activityIdx]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR + OUR SERVICES — Figma rounded cards */}
      <section className="astro-services-section">
        <div className="astro-section astro-services-section__inner">
          <div className="astro-trust-bar">
            {TRUST_BADGES.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="astro-trust-item">
                <span className="astro-trust-item__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} />
                </span>
                <div className="astro-trust-item__text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="astro-services-head">
            <p className="astro-services-eyebrow">Our Services</p>
            <h2>Guidance For Every Part Of Your Journey</h2>
            <p className="astro-services-sub">
              Personalised Guidance For Your Journey, From Kundli And Astrology To Tarot, Vastu,
              And Healing.
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
        <img
          className="astro-horoscope-mandala astro-horoscope-mandala--left"
          src={LeftMandala}
          alt=""
          aria-hidden="true"
        />
        <img
          className="astro-horoscope-mandala astro-horoscope-mandala--right"
          src={RightMandala}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section">
          <div className="astro-horoscope-head">
            <p>Daily Horoscope</p>
            <h2>Your Cosmic Guidance For Today</h2>
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
              Understand What Your
              <br />
              Numbers Say About You
            </h2>
            <p className="astro-promo-banner__sub">
              Get a personalised look at your personality, strengths and life path with a free
              numerology report.
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
                Get Your Free Report
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
            <p className="astro-promo-banner__eyebrow">Free Matchmaking</p>
            <h2>
              Find Your Life
              <br />
              Partner
            </h2>
            <p className="astro-promo-banner__sub">
              Understand your compatibility through Vedic Astrology and explore the strengths of
              your relationship — completely free.
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
                Check Your Compatibility
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FULL KUNDLI CONSULTATION — Figma banner */}
      <section className="astro-promo-banner">
        <img
          className="astro-promo-banner__bg"
          src={BlueprintBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-promo-banner__inner">
          <div className="astro-promo-banner__copy astro-promo-banner__copy--wide">
            <p className="astro-promo-banner__eyebrow">Full Kundli Consultation</p>
            <h2>
              Full Kundli Consultation
              <br />
              at Just ₹499
            </h2>
            <p className="astro-promo-banner__sub">
              Get your detailed Kundli PDF along with a 30-minute live Q&amp;A session with an expert
              for personalised guidance and answers to your questions.
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
                Book Your Consultation Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY — Figma banner */}
      <section className="astro-clients-banner">
        <img
          className="astro-clients-banner__bg"
          src={ClientsBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-clients-banner__inner">
          <div className="astro-clients-banner__header">
            <p className="astro-promo-banner__eyebrow">Real Stories</p>
            <h2>What Our Clients Say</h2>
            <p>
              Hear from people who found the guidance, clarity, and support they were looking for
              with Tathaastu.
            </p>
          </div>

          <div className="astro-clients-grid">
            <article className="astro-client-card">
              <div className="astro-client-card__meta">
                <span className="astro-client-card__avatar">A</span>
                <div>
                  <strong>Ankit, 34</strong>
                  <small>Product Designer, Mumbai</small>
                </div>
              </div>
              <p>
                “The AI birth chart was scary-accurate. It explained things about my personality I
                hadn’t put into words.”
              </p>
            </article>

            <article className="astro-client-card">
              <div className="astro-client-card__meta">
                <span className="astro-client-card__avatar astro-client-card__avatar--green">M</span>
                <div>
                  <strong>Meera, 41</strong>
                  <small>Homemaker, Jaipur</small>
                </div>
              </div>
              <p>
                “We consulted Tathaastu for Vastu when we were renovating our home. The expert’s
                recommendations were simple yet powerful.”
              </p>
            </article>

            <article className="astro-client-card">
              <div className="astro-client-card__meta">
                <span className="astro-client-card__avatar astro-client-card__avatar--gold">N</span>
                <div>
                  <strong>Neeraj, 55</strong>
                  <small>Businessman, Udaipur</small>
                </div>
              </div>
              <p>
                “The expert’s guidance felt so personal and practical. Every suggestion had a clear
                sense of timing and purpose.”
              </p>
            </article>

            <article className="astro-client-card">
              <div className="astro-client-card__meta">
                <span className="astro-client-card__avatar astro-client-card__avatar--rose">R</span>
                <div>
                  <strong>Rishika, 29</strong>
                  <small>Engineer, Bengaluru</small>
                </div>
              </div>
              <p>
                “I tried Tathaastu’s astrology consultation out of curiosity, and it turned into one of
                the most grounded conversations I’ve had.”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DOWNLOAD TATHAASTU APP — Figma promo banner */}
      <section className="astro-app-download-banner">
        <img
          className="astro-app-download-banner__bg"
          src={AppDownloadBanner}
          alt=""
          aria-hidden="true"
        />
        <div className="astro-section astro-app-download-banner__inner">
          <div className="astro-app-download-banner__copy">
            <p className="astro-promo-banner__eyebrow">Tathaastu, Wherever You Go</p>
            <h2>
              Guidance for Every Moment,
              <br />
              Right at Your Fingertips
            </h2>
            <p>
              Check your Kundli, explore your daily horoscope, connect with astrologers, and get the
              guidance you need whenever you need it.
            </p>

            <div className="astro-app-download-banner__actions">
              <button type="button" className="astro-app-download-banner__cta" onClick={openModal}>
                Download The App Now
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="astro-app-download-banner__stores">
                <button type="button" className="astro-app-store-btn" onClick={openModal}>
                  <img src={AppleLogoPng} alt="Apple logo" className="astro-app-store-btn__icon" />
                  <span>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </button>
                <button type="button" className="astro-app-store-btn" onClick={openModal}>
                  <img src={PlayStoreLogoPng} alt="Google Play logo" className="astro-app-store-btn__icon" />
                  <span>
                    <small>Get it on</small>
                    <strong>Play Store</strong>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP EXPERTS */}
      <section className="astro-section">
        <SectionHeading
          eyebrow="Consult"
          title="Connect with India’s Trusted Astrologers"
          subtitle="Get personalised guidance from verified Astrologers who bring experience, clarity, and a caring approach to every consultation."
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
          title="Consult The Right Astrologer For You"
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

      {/* BLOG */}
      <section className="astro-section astro-section--soft">
        <SectionHeading
          eyebrow="Learn"
          title="Explore Our Latest Blogs"
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

      {/* FAQ — Figma */}
      <section id="faq" className="astro-section astro-faq-section">
        <div className="astro-faq-head">
          <Link to="/blog" className="astro-faq-blogs-btn">
            View All Blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
          <h2 className="astro-faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="astro-faq-sub">
            Everything you need to know about Tathaastu, in one place.
          </p>
        </div>

        <div className="astro-faq">
          {FAQS.map((item, idx) => {
            const open = openFaq === idx;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div key={item.q} className={`astro-faq__item ${open ? "is-open" : ""}`}>
                <button type="button" onClick={() => setOpenFaq(open ? -1 : idx)}>
                  <span className="astro-faq__num" aria-hidden="true">
                    {num}
                  </span>
                  <span className="astro-faq__q">{item.q}</span>
                  <span className={`astro-faq__toggle ${open ? "is-open" : ""}`} aria-hidden="true">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open ? <p className="astro-faq__a">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
