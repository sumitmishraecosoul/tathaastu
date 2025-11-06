// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const services = [
//   {
//     title: "NUMEROLOGY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: "/images/numerology.jpg",
//   },
//   {
//     title: "TAROT READING",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: "/images/tarot.jpg",
//   },
//   {
//     title: "PALMISTRY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: "/images/palm.jpg",
//   },
//   {
//     title: "ASTROLOGY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: "/images/astro.jpg",
//   },
// ];

// const ServicesCarousel = () => {
//   const scrollRef = useRef(null);
//   const CARD_WIDTH = 300 + 24; // width + gap

//   const scroll = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: dir === "left" ? -CARD_WIDTH : CARD_WIDTH,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-[1300px] mx-auto px-4 py-16 font-sans relative">
//       {/* Title + Button */}
//       <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
//         <h2 className="text-3xl font-bold tracking-wide text-[#2D7351]">
//           WHAT ARE THE{" "}
//           <span className="text-[#C5445D]">SERVICES</span> THAT WE ARE OFFERING
//           TO YOU.
//         </h2>
//         <button className="bg-[#C5445D] text-white px-6 py-2 rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
//           KNOW MORE
//         </button>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
//       >
//         <ChevronLeft className="text-[#C5445D]" />
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
//       >
//         <ChevronRight className="text-[#C5445D]" />
//       </button>

//       {/* Scrollable Cards */}
//       <div className="overflow-hidden">
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-2"
//         >
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[200px] object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h4 className="text-xl font-bold text-[#2D7351]">
//                   {service.title}
//                 </h4>
//                 <p className="text-sm text-[#2D7351] mt-1">
//                   {service.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesCarousel;






// import React, { useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Tarot from "../../assets/TarotReading.svg";
// import Numerology from "../../assets/Numerology.svg";

// // Example services (replace images with yours)
// const services = [
//   {
//     title: "NUMEROLOGY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: Numerology,
//   },
//   {
//     title: "TAROT READING",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: Tarot,
//   },
//   {
//     title: "PALMISTRY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: Numerology,
//   },
//   {
//     title: "ASTROLOGY",
//     subtitle: "BIRTH CHARTS, PREDICTIONS",
//     image: Tarot,
//   },
// ];

// // Settings
// const CARD_WIDTH = 600;
// const GAP = 44;
// const SCROLL_AMOUNT = CARD_WIDTH + GAP;

// const ServicesCarousel = () => {
//   const scrollRef = useRef(null);
//   const cloned = [...services, ...services, ...services];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollLeft = services.length * SCROLL_AMOUNT;
//     }
//   }, []);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     const scrollLeft = container.scrollLeft;
//     const visible = services.length;
//     const middle = visible * SCROLL_AMOUNT;
//     const maxScroll = (cloned.length - visible) * SCROLL_AMOUNT;

//     if (scrollLeft <= 0) {
//       container.scrollLeft = middle;
//     } else if (scrollLeft >= maxScroll) {
//       container.scrollLeft = middle;
//     }
//   };

//   const scroll = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative font-sans py-16">
//       {/* Title and Button */}
//       <div className="max-w-[1300px] mx-auto px-6 flex justify-between items-center flex-wrap gap-4 mb-10">
//         <h2 className="text-3xl font-bold tracking-wide text-[#2D7351]">
//           WHAT ARE THE <span className="text-[#C5445D]">SERVICES</span> THAT WE ARE OFFERING TO YOU.
//         </h2>
//         <button className="bg-[#C5445D] text-white px-6 py-2 rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
//           KNOW MORE
//         </button>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
//       >
//         <ChevronLeft className="text-[#C5445D]" />
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
//       >
//         <ChevronRight className="text-[#C5445D]" />
//       </button>

//       {/* Carousel */}
//       <div className="overflow-hidden px-[84px]">
//         {/* 84px = (50% of CARD_WIDTH + GAP/2) to allow 50% partial view */}
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-6 scroll-smooth overflow-x-auto scrollbar-hide"
//           style={{ scrollSnapType: "x mandatory" }}
//         >
//           {cloned.map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[600px]  snap-start shrink-0 bg-white rounded-2xl overflow-hidden shadow-md"
//             >
//               <img src={item.image} alt={item.title} className="w-full h-[300px] object-cover" />
//               {/* <div className="p-4 text-center">
//                 <h4 className="text-xl font-bold text-[#2D7351]">{item.title}</h4>
//                 <p className="text-sm text-[#2D7351] mt-1">{item.subtitle}</p>
//               </div> */}
//             </div>
//           ))}
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default ServicesCarousel;



import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Tarot from "../../assets/service1.svg";
import Numerology from "../../assets/service2.svg";

const services = [
  {
    title: "Vaastu Shastra",
    subtitle: "300+ homes & Offices energized | Covers vaastu for home and office and remedy suggestions | Ideal for new constructions, renovations & space healing",
    image: Numerology,
  },
  {
    title: "Astrology",
    subtitle: "Prepared 200+ Personalised Chart | Find insights into marriage, love life, career, health, or personal growth | Analyse Dasha analysis, transit readings & remedies",
    image: Tarot,
  },
  {
    title: "Tarot Reading",
    subtitle: "500+ clients guided | Accurate and intuitive tarot readings, both in-person and online | Specialized spreads: Love, Finance, Yes/No, Chakra",
    image: Tarot,
  },
  {
    title: "Numerology",
    subtitle: "200+ Numerology Calculated | Create Numerology Charts",
    image: Numerology,
  },
  {
    title: "Aura Scanning & Cleaning",
    subtitle: "500+ aura cleaning performed | Scan and cleanse your energy field using crystal, sound & chakra methods",
    image: Numerology,
  },
  {
    title: "Spiritual Growth & Healing",
    subtitle: "100+ Customers Mentored for Spiritual Growth & Healing | Provide one on one guidance, digital meditations & group healing circles",
    image: Tarot,
  },
];

const ServicesCarousel = () => {
  const scrollRef = useRef(null);
  const cloned = [...services, ...services, ...services];

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".carousel-card");
      if (card) container.scrollLeft = card.offsetWidth * services.length;
    }
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".carousel-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const visible = services.length;
    const middle = visible * cardWidth;
    const maxScroll = (cloned.length - visible) * cardWidth;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = middle;
    } else if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = middle;
    }
  };

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".carousel-card");
    if (!card) return;

    const scrollAmount = card.offsetWidth + 24; // Include gap
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    // <div className="relative font-sans py-16 w-full">
    //   {/* Title and Button */}
    //   <div className="max-w-[1300px] mx-auto px-6 flex flex-wrap gap-4 justify-between items-center mb-10">
    //     <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#2D7351]">
    //       WHAT ARE THE <span className="text-[#C5445D]">SERVICES</span> THAT WE ARE OFFERING TO YOU.
    //     </h2>
    //     <button className="bg-[#C5445D] text-white px-6 py-2 rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
    //       KNOW MORE
    //     </button>
    //   </div>

    //   {/* Arrows */}
    //   <button
    //     onClick={() => scroll("left")}
    //     className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center"
    //   >
    //     <ChevronLeft className="text-[#C5445D]" />
    //   </button>
    //   <button
    //     onClick={() => scroll("right")}
    //     className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center"
    //   >
    //     <ChevronRight className="text-[#C5445D]" />
    //   </button>

    //   {/* Carousel */}
    //   <div className="overflow-hidden px-4 sm:px-10">
    //     <div
    //       ref={scrollRef}
    //       onScroll={handleScroll}
    //       className="flex gap-6 scroll-smooth overflow-x-auto scrollbar-hide"
    //       style={{ scrollSnapType: "x mandatory" }}
    //     >
    //       {cloned.map((item, index) => (
    //         <div
    //           key={index}
    //           className="carousel-card snap-start shrink-0 bg-white rounded-2xl overflow-hidden shadow-md w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]"
    //         >
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
    //           />
    //           {/* <div className="p-4 text-center">
    //             <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#2D7351]">
    //               {item.title}
    //             </h4>
    //             <p className="text-sm text-[#2D7351] mt-1">{item.subtitle}</p>
    //           </div> */}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="relative font-sans py-16 w-full">
  {/* Title and Button */}
  <div className=" mx-auto px-6 flex flex-wrap gap-4 justify-between items-center mb-10">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#2D7351] ml-4 sm:ml-6">
      Our Services
    </h2>
    <button className="bg-[#C5445D] text-white px-6 py-2 rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
      KNOW MORE
    </button>
  </div>

  {/* Carousel + Arrows wrapper */}
  <div className="relative  mx-auto px-8 sm:px-12 lg:px-20">
    {/* Left Arrow */}
    <button
      onClick={() => scroll("left")}
      className="hidden sm:flex absolute left-0 lg:-left-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center"
    >
      <ChevronLeft className="text-[#C5445D]" />
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => scroll("right")}
      className="hidden sm:flex absolute right-0 lg:-right-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-md items-center justify-center"
    >
      <ChevronRight className="text-[#C5445D]" />
    </button>

    {/* Carousel */}
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 scroll-smooth overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cloned.map((item, index) => (
          <div
            key={index}
            className="carousel-card snap-start shrink-0 bg-white rounded-2xl overflow-hidden shadow-md w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#2D7351]">
                {item.title}
              </h4>
              <p className="text-sm text-[#2D7351] mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default ServicesCarousel;
