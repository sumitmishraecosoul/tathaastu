import React from "react";
import { Link } from "react-router-dom";
import SliderOpener from "../components/Home/SliderOpener";
import Footer from "../layout/Footer";
import tathaastuLogo from "../assets/tathaastu_logo.png";
import servicesData from "../data/servicesData";

export default function Services() {
  return (
    <div className="bg-white text-[#073349] min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#D44459] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          GUIDING YOUR SPIRITUAL JOURNEY WITH AUTHENTIC EXPERTS
        </p>
      </div>

      {/* Navigation */}
      <nav className="grid grid-cols-3 items-center bg-[#F5D6B4] px-4 md:px-6 py-3 shadow">
        <div className="flex items-center">
          <SliderOpener />
        </div>
        <div className="flex justify-center">
          <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-16 md:h-20" />
        </div>
        <div className="flex justify-end space-x-2 md:space-x-4">
          <Link
            to="/contact"
            className="text-sm font-semibold text-[#073349] hover:text-[#D44459] transition-colors"
          >
            CONTACT US
          </Link>
          <Link
            to="/login"
            className="bg-[#D44459] text-white px-4 py-2 rounded-lg hover:bg-[#B83A4A] transition-colors inline-block"
          >
            SIGN IN
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#073349]"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Our Divine Services
          </h1>
          <p className="text-base md:text-lg text-[#325d72] max-w-3xl mx-auto leading-relaxed">
            Explore a holistic range of spiritual services delivered by trusted astrologers,
            healers, and practitioners—each crafted to help you align your energy, find clarity,
            and walk your path with confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#073349]">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#D44459] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug || service.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#f2d8c2] hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#073349] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#325d72] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

