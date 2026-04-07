import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import SiteNavbar from "../layout/SiteNavbar";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";
import {
  Star,
  Calculator,
  Home as HomeIcon,
  Heart,
  Briefcase,
  Hand,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const iconByServiceId = {
  "astrology-kundli": Star,
  "vedic-astrology": Sparkles,
  numerology: Calculator,
  "vastu-shastra": HomeIcon,
  "horoscope-matching": Heart,
  "tarot-reading": Hand,
  "crystal-healing": Sparkles,
  "pet-healing": Heart,
  dowsing: Hand,
  "pooja-services": Sparkles,
  "aura-healing-scanning": Sparkles,
};

export default function Services() {
  return (
    <div className="bg-white text-[#073349] min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#D44459] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          GUIDING YOUR SPIRITUAL JOURNEY WITH AUTHENTIC EXPERTS
        </p>
      </div>

      <SiteNavbar />

      {/* Page Header (screenshot-style) */}
      <section className="bg-gradient-to-r from-[#D44459] to-[#f39aa6] py-16 sm:py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-balance"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/90"
          >
            Comprehensive astrological and spiritual services to guide your life journey
          </motion.p>
        </div>
      </section>

      {/* Services (animated alternating rows) */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14 sm:space-y-20">
            {servicesData.map((service, index) => {
              const IconComponent = iconByServiceId[service.id] || Sparkles;
              const benefits = Array.isArray(service.whyChooseUs) ? service.whyChooseUs : [];
              const href = `/services/${service.slug || service.id}`;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group"
                >
                  <Link
                    to={href}
                    aria-label={`Open ${service.title}`}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#D44459] focus-visible:ring-offset-4"
                  >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#D44459]/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-[#D44459]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#073349]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-[#325d72] text-base sm:text-lg mb-6 leading-relaxed">
                      {service.longDescription || service.description}
                    </p>

                    {benefits.length > 0 && (
                      <div className="mb-7">
                        <h3 className="text-lg font-bold text-[#073349] mb-4">
                          Key Benefits:
                        </h3>
                        <ul className="space-y-2">
                          {benefits.slice(0, 6).map((benefit, i) => (
                            <motion.li
                              key={`${service.id}-b-${i}`}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: i * 0.08 }}
                              className="flex items-start gap-2 text-[#073349]/80"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#2D7351] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <span className="inline-block px-6 py-3 rounded-lg bg-[#D44459] text-white font-bold shadow-sm group-hover:shadow-lg group-hover:shadow-[#D44459]/30 transition-all duration-300 transform group-hover:scale-[1.02]">
                      Get This Service
                    </span>
                  </div>

                  {/* Image (existing service images) */}
                  <div className={`flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-6 sm:p-8 bg-gradient-to-br from-[#D44459]/10 to-[#2D7351]/10 rounded-2xl border border-[#f2d8c2] w-full max-w-[520px]"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[260px] sm:h-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </motion.div>
                  </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

