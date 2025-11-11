import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import SliderOpener from "../components/Home/SliderOpener";
import tathaastuLogo from "../assets/tathaastu_logo.png";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { fadeInVariant, fadeUpVariant, staggerContainer } from "../utils/motionVariants";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = useMemo(
    () => servicesData.find((item) => item.slug === slug || item.id === slug),
    [slug]
  );

  if (!service) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <header className="bg-[#F5D6B4] px-4 md:px-6 py-3 shadow">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SliderOpener />
              <span className="text-sm font-semibold text-[#073349]">Navigate</span>
            </div>
            <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-16 md:h-20" />
            <button
              onClick={() => navigate("/")}
              className="text-sm font-semibold text-[#073349] hover:text-[#D44459] transition-colors"
            >
              Back Home
            </button>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="max-w-lg space-y-4"
          >
            <h1 className="text-3xl font-bold text-[#073349]">Service not found</h1>
            <p className="text-gray-600">
              The service you are looking for is not available right now. Please explore our offerings or
              reach out for personalised guidance.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/services")}
                className="px-5 py-2 rounded-full bg-[#D44459] text-white font-semibold hover:bg-[#b83a4a] transition"
              >
                Explore Services
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-5 py-2 rounded-full border border-[#D44459] text-[#D44459] font-semibold hover:bg-[#fbe6ea] transition"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedStartingPrice = service.startingPrice
    ? `₹ ${service.startingPrice.toLocaleString("en-IN")}`
    : "₹ 3,100";

  return (
    <div className="bg-white text-[#073349] min-h-screen">
      {/* Top bar */}
      <div className="bg-[#D44459] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">Experience holistic healing with Tathaastu experts</p>
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
          <button
            onClick={() => navigate("/contact")}
            className="text-sm font-semibold text-[#073349] hover:text-[#D44459] transition-colors"
          >
            CONTACT US
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#D44459] text-white px-4 py-2 rounded-lg hover:bg-[#B83A4A] transition-colors"
          >
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full">
        <div className="relative h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">
          <img
            src={service.banner}
            alt={`${service.title} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <p className="text-sm md:text-base uppercase tracking-widest text-[#F4D9C6] mb-4">
              Tathaastu Signature Service
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {service.title}
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/85 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <main className="px-4 md:px-8 lg:px-16 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto space-y-16"
        >
          <motion.section variants={fadeInVariant} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#073349]">
              Awaken Your Potential With {service.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {service.longDescription}
            </p>
          </motion.section>

          <motion.section
            variants={fadeUpVariant}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFF6EF] rounded-3xl p-8 shadow-lg"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#073349]">What’s Included</h3>
              <ul className="space-y-3 text-sm md:text-base text-[#073349] leading-relaxed">
                {service.highlights.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#D44459] pt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#073349]">Benefits You’ll Experience</h3>
              <ul className="space-y-3 text-sm md:text-base text-[#073349] leading-relaxed">
                {service.benefits.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#D44459] pt-1">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section variants={fadeUpVariant} className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-[#073349] mb-4">
              Ready to Begin Your Session?
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Our certified practitioners combine time-tested rituals with compassionate guidance to help
              you transform. Book a consultation to receive a bespoke session blueprint and remedy plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  navigate("/consultation-booking", {
                    state: {
                      plan: {
                        name: service.title,
                        price: formattedStartingPrice,
                        features: service.highlights,
                      },
                    },
                  })
                }
                className="px-6 py-3 rounded-full bg-[#D44459] text-white font-semibold hover:bg-[#B83A4A] transition"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-full border border-[#D44459] text-[#D44459] font-semibold hover:bg-[#FBE6EA] transition"
              >
                Speak to an Expert
              </button>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

