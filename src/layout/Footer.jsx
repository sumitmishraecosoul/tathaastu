import React from 'react';
import { ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import FacebookIcon from '../assets/Facebook.svg';
import YoutubeIcon from '../assets/Youtube.svg';
import InstagramIcon from '../assets/Instagram.svg';
import AnkitImg from "../assets/AnkitImg.svg";
import MeeraImg from "../assets/MeeraImg.svg";
import NeerajImg from "../assets/NeerajImg.svg";
import RishikaImg from "../assets/Srinita_testimonial.jpg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "ANKIT, 34",
      role: "PRODUCT DESIGNER, MUMBAI",
      text: "The AI birth chart was scary-accurate. It explained things about my personality I hadn’t put into words.",
      img: AnkitImg,
    },
    {
      name: "MEERA, 41",
      role: "HOMEMAKER, JAIPUR",
      text: "We consulted Tathaastu for Vaastu when we were renovating our home. The expert’s remedies were simple yet powerful– & the shift in energy was real.",
      img: MeeraImg,
    },
    {
      name: "NEERAJ, 55",
      role: "GENERAL MANAGER, UDAIPUR",
      text: "We consulted Tathaastu for Vaastu when we were renovating our home. The expert’s remedies were simple yet powerful– & the shift in energy was real.",
      img: NeerajImg,
    },
    {
      name: "RISHIKA, 29",
      role: "SOFTWARE ENGINEER, BENGALURU",
      text: "I tried Tathaastu’s astrology consultation out of curiosity, and it turned out to be life-changing. The guidance I received helped me make sense of my career choices and relationships with such clarity—it felt deeply personal and accurate.",
      img: RishikaImg,
    },
  ];

  return (
    <footer className="w-full">
      {/* OLD FOOTER UI (kept for reference) */}
      {/*
      <footer className="bg-[#FFF1E5] text-[#073349] w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex justify-end">
          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook" className="w-10 h-10" />
            <a href="https://www.youtube.com/@Tathasstu_official" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="YouTube" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/tathasstu_official/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="border-t border-[#073349] mx-6 md:mx-16"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10 space-y-10">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-14" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,260px)_1fr_minmax(0,180px)] items-start">
            <div className="space-y-4 text-sm text-[#325d72] leading-relaxed font-semibold">
              <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">About Tathasstu</h3>
              <p>At Tathasstu, we help you align your life with the rhythm of the universe...</p>
            </div>
            <div className="space-y-4 w-full flex flex-col items-center">
              <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">Our Services</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[#073349] leading-6 w-full">...</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">Contact Us</h3>
              <div className="grid grid-cols-1 gap-3 text-sm text-[#073349] leading-6">...</div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#073349] mx-6 md:mx-16"></div>
        <div className="py-6 flex justify-center">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-2 px-6 py-3 bg-[#C5445D] text-white rounded-full shadow-md hover:bg-[#a6344f] transition-all duration-300" aria-label="Back to top">
            <ArrowUp size={20} />
            <span className="text-sm font-semibold tracking-wide">Back to Top</span>
          </button>
        </div>
      </footer>
      */}

      {/* What Our Clients Say (screenshot-style UI) */}
      <section className="bg-[#FFF1E5] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#073349]">What Our Clients Say</h2>
            <p className="mt-2 text-sm md:text-base text-[#325d72]">
              Real experiences from seekers who chose Tathaastu.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
              >
                {/* Screenshot shows no customer photos: use simple initials badge */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F1E6] text-sm font-extrabold text-[#2D7351] ring-1 ring-black/5">
                    {(t.name || "U").trim().slice(0, 1)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-[#073349]">{t.name}</div>
                    <div className="text-xs font-semibold text-[#2D7351]">{t.role}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[#F2B233]" aria-label="5 star rating">
                  <span className="text-sm">★</span>
                  <span className="text-sm">★</span>
                  <span className="text-sm">★</span>
                  <span className="text-sm">★</span>
                  <span className="text-sm">★</span>
                </div>

                <div className="mt-3 text-sm leading-relaxed text-[#325d72]">
                  <span className="mr-1 font-extrabold text-[#F2B233]">“</span>
                  {t.text}
                  <span className="ml-1 font-extrabold text-[#F2B233]">”</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (screenshot-style) */}
      <section className="bg-gradient-to-r from-[#6E2B8C] via-[#6B2FA1] to-[#5B4BC6] py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center text-white">
          <div className="text-2xl md:text-3xl font-extrabold">Ready to Know Your Future?</div>
          <div className="mt-2 text-sm md:text-base text-white/85">
            Talk to an expert and get guidance that feels personal and accurate.
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-full bg-white px-7 py-3 text-sm font-extrabold text-[#5B2B8C] shadow-md hover:bg-white/90"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer (screenshot-style UI; uses your existing content) */}
      <section className="bg-[#4B1272] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              {/* Use text brand like screenshot footer */}
              <div className="flex items-center gap-3">
                <img src={tathaastuLogo} alt="Tathaastu" className="h-10 w-auto" />
                <div className="text-lg font-extrabold tracking-wide">Tathaastu</div>
              </div>
              <p className="text-sm leading-relaxed text-white/85">
                At Tathasstu, we help you align your life with the rhythm of the universe. From astrology and healing to spiritual courses and remedies, we're your trusted guide on the journey to self-awareness and divine balance.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@Tathasstu_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/tathasstu_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-extrabold tracking-wide text-white/95">Quick Links</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Services</a>
                <a href="#" className="hover:text-white">Courses</a>
                <a href="#" className="hover:text-white">Pricing</a>
                <a href="#" className="hover:text-white">Blog</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-extrabold tracking-wide text-white/95">Services</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
                <a href="#" className="hover:text-white">Vaastu for Home</a>
                <a href="#" className="hover:text-white">Vaastu for Offices</a>
                <a href="#" className="hover:text-white">Vaastu for Factories</a>
                <a href="#" className="hover:text-white">Astrology - Kundli Reading</a>
                <a href="#" className="hover:text-white">Vedic Astrology</a>
                <a href="#" className="hover:text-white">Numerology</a>
                <a href="#" className="hover:text-white">Pooja Services</a>
                <a href="#" className="hover:text-white">Horoscope Matching</a>
                <a href="#" className="hover:text-white">Tarot Reading</a>
                <a href="#" className="hover:text-white">Crystal Healing</a>
                <a href="#" className="hover:text-white">Pet Healing</a>
                <a href="#" className="hover:text-white">Dowsing</a>
                <a href="#" className="hover:text-white">Aura Healing &amp; Scanning</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-extrabold tracking-wide text-white/95">Contact</div>
              <div className="grid gap-2 text-sm text-white/85">
                <a href="#" className="hover:text-white">About Us</a>
                <a href="#" className="hover:text-white">Contact Us</a>
                <a href="#" className="hover:text-white">Classes</a>
                <a href="#" className="hover:text-white">FAQs</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-xs text-white/70">© {new Date().getFullYear()} Tathaastu. All rights reserved.</div>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-extrabold text-[#4E1B6E] shadow-sm hover:bg-white/90"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
