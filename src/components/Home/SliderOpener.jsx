import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SliderOpener() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    closeSlider();
    navigate(path);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
    { name: "Horoscope", path: "/#horoscope" },
    { name: "Astrologers", path: "/#astrologers" },
    { name: "Services", path: "/#services" },
    { name: "About Us", path: "/#about" },
    { name: "FAQs", path: "/#faqs" },
    { name: "Classes", path: "/#classes" }
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSlider}
        className="text-3xl text-[#073349] hover:text-[#D44459] transition-colors duration-300"
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSlider}
        ></div>
      )}

      {/* Slider Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#FFF1E5] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#073349] border-opacity-20">
          <h2 className="text-xl font-bold text-[#073349]">Menu</h2>
          <button
            onClick={closeSlider}
            className="text-2xl text-[#073349] hover:text-[#D44459] transition-colors duration-300"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left py-3 px-4 text-[#073349] hover:text-[#D44459] hover:bg-[#073349] hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#073349] border-opacity-20">
          <div className="space-y-4">
            {/* Sign In Button */}
            <button className="w-full bg-[#D44459] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#B83A4A] transition-colors duration-300">
              SIGN IN
            </button>
            
            {/* Contact Button */}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="w-full bg-transparent text-[#073349] py-3 px-6 rounded-lg font-semibold border border-[#073349] hover:bg-[#073349] hover:text-white transition-all duration-300"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
