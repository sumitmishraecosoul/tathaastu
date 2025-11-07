import React, { useState } from 'react';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import SliderOpener from '../components/Home/SliderOpener';
import Footer from '../layout/Footer';
import ContactBanner from "../assets/contact_us_banner.svg";
import Seperator from '../components/Home/SeperatorComponent';

export default function Contact() {
  const [activeFAQ, setActiveFAQ] = useState(2); // FAQ 3 is open by default
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    enquiryFor: '',
    message: '',
    categories: {
      career: false,
      relationship: false,
      education: false,
      finance: false,
      travel: false,
      health: false,
      compatibility: false,
      kundli: false,
      childFuture: false,
      spiritual: false,
      vaastu: false,
      tarot: false,
      horoscope: false,
      numerology: false,
      gemstone: false,
      other: false
    }
  });

  const faqItems = [
    {
      id: 0,
      question: "WHAT MAKE YOU THE BEST ASTROLOGERS?",
      answer: "Our team consists of highly qualified and experienced astrologers with deep knowledge of Vedic astrology, modern techniques, and AI-powered insights."
    },
    {
      id: 1,
      question: "HOW ACCURATE ARE YOUR PREDICTIONS?",
      answer: "We combine traditional Vedic astrology with modern AI technology to provide highly accurate predictions and personalized guidance."
    },
    {
      id: 2,
      question: "WHEN CAN I EXPECT MY PROBLEMS TO BE RESOLVED?",
      answer: "The timeline for problem resolution varies based on the nature of your issues. Our experts will provide specific guidance during your consultation."
    },
    {
      id: 3,
      question: "DO I NEED EXACT BIRTH TIME FOR A READING?",
      answer: "While exact birth time provides the most accurate reading, we can work with approximate time and still provide valuable insights."
    },
    {
      id: 4,
      question: "HOW DO YOU OFFER ASTROLOGY REMEDIES?",
      answer: "We offer personalized remedies including gemstones, mantras, yantras, and lifestyle recommendations based on your birth chart analysis."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }));
  };

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="bg-white text-[#073349]">
      
      {/* TOP BAR */}
      <div className="bg-[#D44459] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">AI-POWERED PLATFORM REVOLUTIONIZING ASTROLOGY</p>
      </div>
      
      {/* NAVIGATION */}
      <nav className="grid grid-cols-3 items-center bg-[#F5D6B4] px-4 md:px-6 py-3 shadow">
        <div className="flex items-center">
          <SliderOpener />
        </div>
        <div className="flex justify-center">
          <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-16 md:h-20" />
        </div>
        <div className="flex justify-end space-x-2 md:space-x-4">
          <button className="text-sm font-semibold text-[#073349] hover:text-[#D44459] transition-colors">CONTACT US</button>
          <button className="bg-[#D44459] text-white px-4 py-2 rounded-lg hover:bg-[#B83A4A] transition-colors">SIGN IN</button>
        </div>
      </nav>

      {/* HERO SECTION WITH BANNER IMAGE */}
      <section className="relative -mt-1">
        <img 
          src={ContactBanner} 
          alt="Contact Us Banner" 
          className="w-full h-[600px] object-cover object-top"
        />
      </section>
      <Seperator />

      {/* MAIN CONTENT SECTION */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN - CONTACT FORM */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-[#073349]">GET YOUR FIRST </span>
                  <span className="text-[#D44459]">FREE</span>
                  <span className="text-[#073349]"> CONSULTATION NOW</span>
                </h2>
              </div>

              <form className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">FIRST NAME</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] text-sm"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">LAST NAME</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] text-sm"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">PHONE NO.</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] text-sm"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">E-MAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] text-sm"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Enquiry For Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">ENQUIRY FOR</label>
                  <div className="relative">
                    <select
                      name="enquiryFor"
                      value={formData.enquiryFor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] appearance-none text-sm"
                    >
                      <option value="">Select your enquiry type</option>
                      <option value="career">Career & Business</option>
                      <option value="relationship">Relationship</option>
                      <option value="education">Education</option>
                      <option value="finance">Finance & Legal Case</option>
                      <option value="travel">Foreign Travel</option>
                      <option value="health">Health</option>
                      <option value="compatibility">Compatibility</option>
                      <option value="kundli">Kundli Reading</option>
                      <option value="child">Child's Future</option>
                      <option value="spiritual">Spiritual Healing</option>
                      <option value="vaastu">Vaastu Reading</option>
                      <option value="tarot">Tarot Reading</option>
                      <option value="horoscope">Horoscope Report</option>
                      <option value="numerology">Numerology Report</option>
                      <option value="gemstone">Gemstone Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-[#073349]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    {[
                      { key: 'career', label: 'CAREER & BUSINESS' },
                      { key: 'relationship', label: 'RELATIONSHIP' },
                      { key: 'education', label: 'EDUCATION' },
                      { key: 'finance', label: 'FINANCE & LEGAL CASE' },
                      { key: 'travel', label: 'FOREIGN TRAVEL' },
                      { key: 'health', label: 'HEALTH' },
                      { key: 'compatibility', label: 'COMPATIBILITY' },
                      { key: 'kundli', label: 'KUNDLI READING' }
                    ].map((item) => (
                      <label key={item.key} className="flex items-center space-x-2 cursor-pointer">
                        <div className="w-3 h-3 border border-[#073349] rounded-sm flex items-center justify-center">
                          {formData.categories[item.key] && (
                            <div className="w-1.5 h-1.5 bg-[#073349] rounded-sm"></div>
                          )}
                        </div>
                        <span className="text-xs text-[#073349] font-medium">{item.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { key: 'childFuture', label: "CHILD'S FUTURE" },
                      { key: 'spiritual', label: 'SPIRITUAL HEALING' },
                      { key: 'vaastu', label: 'VAASTU READING' },
                      { key: 'tarot', label: 'TAROT READING' },
                      { key: 'horoscope', label: 'HOROSCOPE REPORT' },
                      { key: 'numerology', label: 'NUMEROLOGY REPORT' },
                      { key: 'gemstone', label: 'GEMSTONE SUGGESTION' },
                      { key: 'other', label: 'OTHER' }
                    ].map((item) => (
                      <label key={item.key} className="flex items-center space-x-2 cursor-pointer">
                        <div className="w-3 h-3 border border-[#073349] rounded-sm flex items-center justify-center">
                          {formData.categories[item.key] && (
                            <div className="w-1.5 h-1.5 bg-[#073349] rounded-sm"></div>
                          )}
                        </div>
                        <span className="text-xs text-[#073349] font-medium">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-[#073349] mb-2 uppercase tracking-wide">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2.5 bg-[#F5D6B4] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D44459] resize-none text-sm"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-[#D44459] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#B83A4A] transition-colors shadow-md"
                  >
                    LET'S CONNECT
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN - FAQ SECTION */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-6 leading-relaxed">
                  READY TO DISCOVER WHAT THE STARS REVEAL? BOOK YOUR PERSONALIZED TAROT OR ASTROLOGY READING NOW.
                </h3>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                {faqItems.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className={`w-full px-4 py-3 text-left flex justify-between items-center transition-colors ${
                        activeFAQ === faq.id 
                          ? 'bg-[#EAA83E] text-white' 
                          : 'bg-[#F5D6B4] text-[#073349] hover:bg-[#E8C8A0]'
                      }`}
                    >
                      <span className="font-semibold text-xs">{faq.question}</span>
                      <span className="text-lg font-bold">
                        {activeFAQ === faq.id ? '×' : '+'}
                      </span>
                    </button>
                    {activeFAQ === faq.id && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <p className="text-[#073349] text-xs leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative Mandala Pattern */}
              <div className="relative mt-8">
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-48 bg-gradient-to-b from-[#F5D6B4] to-transparent rounded-full transform scale-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
