import React from 'react';
import { ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react';
import tathaastuWhiteLogo from '../assets/logo/tathasstu_white_logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      {/* CTA band (screenshot-style) */}
      <section className="bg-[#064233] py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6 md:px-8 lg:px-10 text-center text-white">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            Ready to Know Your Future?
          </div>
          <div className="mt-2 text-sm md:text-base text-white/85 max-w-2xl mx-auto">
            Talk to an expert and get guidance that feels personal and accurate.
          </div>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-full bg-[#E74660] px-6 sm:px-7 py-3 text-sm font-extrabold text-white shadow-md hover:bg-[#d13a52] w-full sm:w-auto max-w-xs"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer (screenshot-style UI; uses your existing content) */}
      <section className="bg-[#064233] text-white">
        <div className="mx-auto max-w-[1680px] px-4 py-8 sm:py-10 md:py-12 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src={tathaastuWhiteLogo}
                  alt="Tathaastu"
                  className="h-14 w-auto max-w-full object-contain sm:h-20 md:h-24"
                />
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
