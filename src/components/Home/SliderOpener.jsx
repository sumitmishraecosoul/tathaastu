import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @param {{ variant?: 'light' | 'dark' }} props — dark = light icon for navy header
 */
export default function SliderOpener({ variant = "light" }) {
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
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact" }
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSlider}
        className={
          variant === "dark"
            ? "text-2xl text-white/90 transition-colors duration-300 hover:text-white"
            : "text-3xl text-[#073349] transition-colors duration-300 hover:text-[#D44459]"
        }
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

      </div>
    </>
  );
}
