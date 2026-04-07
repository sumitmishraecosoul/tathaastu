import React from 'react';
import { ArrowUp } from 'lucide-react';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import FacebookIcon from '../assets/Facebook.svg';
import YoutubeIcon from '../assets/Youtube.svg';
import InstagramIcon from '../assets/Instagram.svg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF1E5] text-[#073349] w-full">
      {/* Social Media Icons Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex justify-end">
        <div className="flex space-x-4">
          <img src={FacebookIcon} alt="Facebook" className="w-10 h-10" />
          <a
            href="https://www.youtube.com/@Tathasstu_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YoutubeIcon} alt="YouTube" className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/tathasstu_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-[#073349] mx-6 md:mx-16"></div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10 space-y-10">
        <div className="flex items-center justify-center lg:justify-start">
          <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-14" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,260px)_1fr_minmax(0,180px)] items-start">
          <div className="space-y-4 text-sm text-[#325d72] leading-relaxed font-semibold">
            <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">About Tathasstu</h3>
            <p>
              At Tathasstu, we help you align your life with the rhythm of the universe. From astrology and healing to spiritual courses and remedies, we're your trusted guide on the journey to self-awareness and divine balance. Discover the wisdom within — and unlock your destiny with Tathasstu.
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-4 w-full flex flex-col items-center">
            <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">Our Services</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[#073349] leading-6 w-full">
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Vaastu for Home</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Vaastu for Offices</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Vaastu for Factories</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Astrology - Kundli Reading</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Vedic Astrology</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Numerology</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Pooja Services</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Horoscope Matching</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Tarot Reading</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Crystal Healing</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Pet Healing</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Dowsing</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Aura Healing &amp; Scanning</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-[#D44459] font-semibold text-base uppercase tracking-wide">Contact Us</h3>
            <div className="grid grid-cols-1 gap-3 text-sm text-[#073349] leading-6">
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">About Us</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Contact Us</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Classes</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">FAQs</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Privacy Policy</a>
              <a href="#" className="hover:text-[#D44459] transition-colors whitespace-normal">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#073349] mx-6 md:mx-16"></div>
      <div className="py-6 flex justify-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 px-6 py-3 bg-[#C5445D] text-white rounded-full shadow-md hover:bg-[#a6344f] transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
          <span className="text-sm font-semibold tracking-wide">Back to Top</span>
        </button>
      </div>
    </footer>
  );
}
