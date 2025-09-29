import React from "react";
import AnkitImg from "../../assets/AnkitImg.svg";
import MeeraImg from "../../assets/MeeraImg.svg";
import NeerajImg from "../../assets/NeerajImg.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
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
  ];

  return (
    <section className="bg-[#f2f2f2] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#073349]">
          <span className="text-[#e54787]">LOVED</span>{" "}
          <span className="text-[#073349]">BY SEEKERS</span>{" "}
          <span className="text-[#16876a]">ACROSS THE GLOBE</span>
        </h2>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
          <ChevronLeft className="text-[#e54787]" />
        </button>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] shadow-md p-6 max-w-[350px] w-full flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-[30px] w-full h-[300px] object-cover mb-4"
              />
              <div className="relative w-full mb-2">
                <div className="absolute -left-6 -top-2 text-[#fcb138] text-[70px] leading-none font-bold select-none">
                  &ldquo;
                </div>
              </div>
              <h4 className="text-[#e54787] text-sm font-bold">{item.name}</h4>
              <p className="text-[#16876a] text-sm font-semibold mb-2">
                {item.role}
              </p>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
          <ChevronRight className="text-[#e54787]" />
        </button>
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#e54787] hover:bg-[#d93a79] text-white font-bold py-3 px-8 rounded-full shadow-md">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
