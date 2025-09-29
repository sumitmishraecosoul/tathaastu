import React from 'react';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import FacebookIcon from '../assets/Facebook.svg';
import YoutubeIcon from '../assets/Youtube.svg';
import InstagramIcon from '../assets/Instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-[#FFF1E5] text-[#073349] w-full">
      {/* Social Media Icons Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex justify-end">
        <div className="flex space-x-4">
          <img src={FacebookIcon} alt="Facebook" className="w-10 h-10" />
          <img src={YoutubeIcon} alt="YouTube" className="w-10 h-10" />
          <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-[#073349] mx-6 md:mx-16"></div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-12" />
            </div>
            <p className="text-xs leading-5 text-[#073349] font-inter">
              LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. 
              LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, 
              WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. 
              LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, 
              WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.
            </p>
          </div>

          {/* Horoscope Links */}
          <div className="space-y-3">
            <h3 className="text-[#D44459] font-semibold text-sm uppercase">HOROSCOPE - IMPORTANT LINKS</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Market</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Panchang</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Free kundlu</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Free links</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Remedies</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors">Puja Services</a>
            </div>
          </div>

          {/* Astrologers */}
          <div className="space-y-3">
            <h3 className="text-[#D44459] font-semibold text-sm uppercase">ASTROLOGERS</h3>
            <div className="space-y-1">
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors block">Astrologer's login</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors block">Astrologer's registration</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h3 className="text-[#D44459] font-semibold text-sm uppercase">CONTACT US</h3>
            <div className="space-y-1">
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors block">FAQs</a>
              <a href="#" className="text-sm text-[#073349] hover:text-[#D44459] transition-colors block">Classes</a>
            </div>
          </div>

          {/* Login/Signup Section */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="px-4 py-2 rounded-full border border-[#073349] outline-none text-sm placeholder:text-gray-400 bg-transparent"
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="px-4 py-2 rounded-full border border-[#073349] outline-none text-sm placeholder:text-gray-400 bg-transparent"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="text-[#073349] font-semibold text-sm hover:text-[#D44459] transition-colors">
                SIGN IN
              </button>
            </div>
            <div className="text-xs text-[#073349]">
              Forgot password? <a href="#" className="underline hover:text-[#D44459] transition-colors">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
