
// import React from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const PlanetsSection = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
//       {/* Title */}
//       <div className="flex flex-row gap-x-32">
//          <h1 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">
//         PLANETS ACTIVE IN 2025-26
//       </h1>
//        <p className="text-xl  text-center mb-12 uppercase tracking-normal">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       </div>

//       {/* Planets Layout */}
//       <div className="flex flex-col items-center">
//         {/* SURYA - Top Center */}
       
//         {/* Bottom Row - Three Planets */}
//         <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
//           {/* CHANDRMA - Left */}
//           <div className="text-center flex-1">
//             {/* Placeholder for image */}
//             <div className="h-48  flex items-center justify-center pb-10">
//                 <img
//                           src={Surya}
//                           alt="Surya"
//                           className="w-[400px] h-auto rounded-full block"
//                         />
//             </div>
//              <h4 className="text-2xl font-bold uppercase mb-4">SURYA</h4>
//           </div>
//           <div className="text-center flex-1">
            
//             {/* Placeholder for image */}
//             <div className="h-48 flex items-center justify-center pb-10">
//                <img
//                           src={Chandrma}
//                           alt="Chandrma"
//                           className="w-[400px] h-auto rounded-full block"
//                         />
//             </div>
//             <h4 className="text-2xl font-bold uppercase mb-4">CHANDRMA</h4>
//           </div>

//           {/* GURU - Middle */}
//           <div className="text-center flex-1">
           
//             {/* Placeholder for image */}
//             <div className="h-48 flex items-center justify-center pb-10">
//               <img
//                           src={Guru}
//                           alt="Guru"
//                           className="w-[400px] h-auto rounded-full block"
//                         />
//             </div>
//              <h4 className="text-2xl font-bold uppercase mb-4">GURU</h4>
//           </div>

//           {/* SHANI - Right */}
//           <div className="text-center flex-1">
            
//             {/* Placeholder for image */}
//             <div className="h-48 flex items-center justify-center pb-10">
//                <img
//                           src={Shani}
//                           alt="Shani"
//                           className="w-[400px] h-auto rounded-full block"
//                         />
//             </div>
//             <h4 className="text-2xl font-bold uppercase mb-4">SHANI</h4>
//           </div>
//         </div>
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;











// import React, { useRef } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // optional, or use any icons

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const scrollAmount = 400;
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold uppercase tracking-wider">
//           PLANETS ACTIVE IN 2025-26
//         </h1>
//         <p className="text-xl mt-4 uppercase tracking-normal max-w-2xl mx-auto">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Scroll Buttons */}
//       <button
//         className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
//         onClick={() => scroll("left")}
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
//         onClick={() => scroll("right")}
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Scrollable Image Row */}
//       <div
//         ref={scrollRef}
//         className="flex gap-x-16 overflow-x-auto pb-4 px-2 snap-x scroll-smooth no-scrollbar"
//       >
//         {/* Card Template */}
//         {[{ src: Surya, name: "SURYA" }, { src: Chandrma, name: "CHANDRMA" }, { src: Guru, name: "GURU" }, { src: Shani, name: "SHANI" }].map((planet, index) => (
//           <div key={index} className="flex-shrink-0 w-[320px] snap-start text-center">
//             <div className="h-48 flex items-center justify-center mb-4">
//               <img
//                 src={planet.src}
//                 alt={planet.name}
//                 className="w-[300px] h-auto rounded-full"
//               />
//             </div>
//             <h4 className="text-2xl font-bold uppercase">{planet.name}</h4>
//           </div>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;





// import React, { useRef } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -500 : 500,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//         <h1 className="text-3xl font-bold text-center uppercase tracking-wider text-[#A5364E]">
//           PLANETS <span className="text-[#2D7351]">ACTIVE IN 2025-26</span>
//         </h1>
//         <p className="text-lg text-center text-black max-w-xl">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Left & Right Arrows */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-4 top-[50%] transform -translate-y-1/2 bg-[#C5445D] text-white w-10 h-10 rounded-full shadow-md z-10 flex items-center justify-center"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-4 top-[50%] transform -translate-y-1/2 bg-[#C5445D] text-white w-10 h-10 rounded-full shadow-md z-10 flex items-center justify-center"
//       >
//         &#8250;
//       </button>

//       {/* Scrollable Planets Row */}
//       <div
//         ref={scrollRef}
//         className="flex gap-20 overflow-x-auto scrollbar-hide px-4 pb-8 scroll-smooth"
//       >
//         {/* Planet Card */}
//         <div className="flex flex-col items-center min-w-[320px]">
//           <img src={Surya} alt="Surya" className="w-[180px] h-[180px] object-contain" />
//           <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">SURYA</h4>
//         </div>

//         <div className="flex flex-col items-center min-w-[320px]">
//           <img src={Chandrma} alt="Chandrma" className="w-[180px] h-[180px] object-contain" />
//           <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">CHANDRMA</h4>
//         </div>

//         <div className="flex flex-col items-center min-w-[320px]">
//           <img src={Guru} alt="Guru" className="w-[180px] h-[180px] object-contain" />
//           <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">GURU</h4>
//         </div>

//         <div className="flex flex-col items-center min-w-[320px]">
//           <img src={Shani} alt="Shani" className="w-[180px] h-[180px] object-contain" />
//           <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">SHANI</h4>
//         </div>
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;




// import React, { useRef } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -400 : 400,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//         <h1 className="text-3xl font-bold text-center uppercase tracking-wider text-[#A5364E]">
//           PLANETS <span className="text-[#2D7351]">ACTIVE IN 2025-26</span>
//         </h1>
//         <p className="text-lg text-center text-black max-w-xl">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Scroll Buttons */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Planet Cards - Scrollable */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto gap-20 scroll-smooth px-6 py-4 scrollbar-hide"
//       >
//         {/* Planet Cards (all 4 visible by default) */}
//         <div className="flex flex-row justify-center flex-nowrap w-full">
//           {/* Card 1 */}
//           <div className="flex flex-col items-center min-w-[250px]">
//             <img src={Surya} alt="Surya" className="w-[180px] h-[180px] object-contain" />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">SURYA</h4>
//           </div>

//           {/* Card 2 */}
//           <div className="flex flex-col items-center min-w-[250px]">
//             <img src={Chandrma} alt="Chandrma" className="w-[180px] h-[180px] object-contain" />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">CHANDRMA</h4>
//           </div>

//           {/* Card 3 */}
//           <div className="flex flex-col items-center min-w-[250px]">
//             <img src={Guru} alt="Guru" className="w-[180px] h-[180px] object-contain" />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">GURU</h4>
//           </div>

//           {/* Card 4 */}
//           <div className="flex flex-col items-center min-w-[250px]">
//             <img src={Shani} alt="Shani" className="w-[180px] h-[180px] object-contain" />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">SHANI</h4>
//           </div>
//         </div>
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;




// import React, { useRef, useEffect } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const planets = [
//   { name: "SURYA", src: Surya },
//   { name: "CHANDRMA", src: Chandrma },
//   { name: "GURU", src: Guru },
//   { name: "SHANI", src: Shani },
// ];

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);

//   // Clone the data 3 times: [clone] [real] [clone]
//   const extendedPlanets = [...planets, ...planets, ...planets];

//   // Scroll to real content center on mount
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       const cardWidth = 250 + 80; // card min-width + gap (min-w-[250px] + gap-20)
//       container.scrollLeft = planets.length * cardWidth;
//     }
//   }, []);

//   // Handle infinite scroll effect
//   const handleScroll = () => {
//     const container = scrollRef.current;
//     const cardWidth = 250 + 80; // 250 card + 80 gap
//     const scrollLeft = container.scrollLeft;

//     const totalCards = extendedPlanets.length;
//     const visibleCards = planets.length;

//     const maxScroll = cardWidth * (totalCards - visibleCards);
//     const middleScroll = cardWidth * visibleCards;

//     if (scrollLeft <= 0) {
//       // if scrolled to beginning
//       container.scrollLeft = middleScroll;
//     } else if (scrollLeft >= maxScroll) {
//       // if scrolled to end
//       container.scrollLeft = middleScroll;
//     }
//   };

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     const cardWidth = 250 + 80;
//     if (container) {
//       container.scrollBy({
//         left: direction === "left" ? -cardWidth : cardWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//         <h1 className="text-3xl font-bold text-center uppercase tracking-wider text-[#A5364E]">
//           PLANETS <span className="text-[#2D7351]">ACTIVE IN 2025-26</span>
//         </h1>
//         <p className="text-lg text-center text-black max-w-xl">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Scroll Buttons */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Infinite Carousel Container */}
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="flex overflow-x-auto gap-20 scroll-smooth px-6 py-4 scrollbar-hide"
//       >
//         {extendedPlanets.map((planet, idx) => (
//           <div key={idx} className="flex flex-col items-center min-w-[250px]">
//             <img
//               src={planet.src}
//               alt={planet.name}
//               className="w-[180px] h-[180px] object-contain"
//             />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase">{planet.name}</h4>
//           </div>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;



// import React from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const planets = [
//   { name: "SURYA", src: Surya },
//   { name: "CHANDRMA", src: Chandrma },
//   { name: "GURU", src: Guru },
//   { name: "SHANI", src: Shani },
// ];

// const PlanetsSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//         <h1 className="text-3xl font-bold text-center uppercase tracking-wider text-[#A5364E]">
//           PLANETS <span className="text-[#2D7351]">ACTIVE IN 2025-26</span>
//         </h1>
//         <p className="text-lg text-center text-black max-w-xl">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Arrows */}
//       <button
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Fixed Grid of 4 Planets */}
//       <div className="flex justify-center gap-16 items-center px-20">
//         {planets.map((planet, idx) => (
//           <div key={idx} className="flex flex-col items-center w-[200px]">
//             <img
//               src={planet.src}
//               alt={planet.name}
//               className="w-[180px] h-[180px] object-contain"
//             />
//             <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase text-center">
//               {planet.name}
//             </h4>
//           </div>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;



// import React, { useRef, useEffect } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const planets = [
//   { name: "SURYA", src: Surya },
//   { name: "CHANDRMA", src: Chandrma },
//   { name: "GURU", src: Guru },
//   { name: "SHANI", src: Shani },
// ];

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);
//   const cardWidth = 250 + 48; // image card width + gap

//   // Clone data 3 times for seamless loop
//   const extendedPlanets = [...planets, ...planets, ...planets];

//   // Scroll to middle (real data start)
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft = planets.length * cardWidth;
//     }
//   }, []);

//   // Handle infinite loop scroll
//   const handleScroll = () => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollLeft = container.scrollLeft;
//     const totalCards = extendedPlanets.length;
//     const visibleCount = planets.length;
//     const maxScroll = cardWidth * (totalCards - visibleCount);
//     const middleScroll = cardWidth * visibleCount;

//     if (scrollLeft <= 0) {
//       container.scrollLeft = middleScroll;
//     } else if (scrollLeft >= maxScroll) {
//       container.scrollLeft = middleScroll;
//     }
//   };

//   // Scroll by one card (or more)
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -cardWidth : cardWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 font-sans relative">
//       {/* Title */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//         <h1 className="text-3xl font-bold text-center uppercase tracking-wider text-[#A5364E]">
//           PLANETS <span className="text-[#2D7351]">ACTIVE IN 2025-26</span>
//         </h1>
//         <p className="text-lg text-center text-black max-w-xl">
//           LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//         </p>
//       </div>

//       {/* Arrows (outside image area) */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Carousel Wrapper */}
//       <div className="overflow-hidden px-20">
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-12 overflow-x-auto scroll-smooth scrollbar-hide py-4"
//         >
//           {extendedPlanets.map((planet, idx) => (
//             <div key={idx} className="flex flex-col items-center min-w-[250px]">
//               <img
//                 src={planet.src}
//                 alt={planet.name}
//                 className="w-[180px] h-[180px] object-contain"
//               />
//               <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase text-center">
//                 {planet.name}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Text */}
//       <p className="mt-16 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//       <p className="mt-4 text-center text-gray-600 uppercase tracking-wide">
//         LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
//       </p>
//     </div>
//   );
// };

// export default PlanetsSection;







// import React, { useRef, useEffect } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// // Dynamically add more if needed
// const planets = [
//   { name: "SURYA", src: Surya },
//   { name: "CHANDRMA", src: Chandrma },
//   { name: "GURU", src: Guru },
//   { name: "SHANI", src: Shani },
//   { name: "SURYA 2", src: Surya },
//   { name: "CHANDRMA 2", src: Chandrma },
//   { name: "GURU 2", src: Guru },
//   { name: "SHANI 2", src: Shani },
// ];

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);
//   const ITEM_WIDTH = 250 + 32; // image width + gap

//   const extendedPlanets = [...planets, ...planets, ...planets];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollLeft = planets.length * ITEM_WIDTH;
//     }
//   }, []);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollLeft = container.scrollLeft;
//     const total = extendedPlanets.length;
//     const visible = planets.length;
//     const middle = visible * ITEM_WIDTH;
//     const maxScroll = (total - visible) * ITEM_WIDTH;

//     if (scrollLeft <= 0) {
//       container.scrollLeft = middle;
//     } else if (scrollLeft >= maxScroll) {
//       container.scrollLeft = middle;
//     }
//   };

//   const scroll = (dir) => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollBy({
//         left: dir === "left" ? -ITEM_WIDTH : ITEM_WIDTH,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-[1400px] mx-auto px-6 py-8 font-sans relative">
//       {/* Arrows */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Carousel */}
//       <div className="overflow-hidden px-16">
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-8 scroll-smooth overflow-x-auto snap-x snap-mandatory scrollbar-hide"
//         >
//           {extendedPlanets.map((planet, index) => (
//             <div
//               key={index}
//               className="min-w-[250px] snap-start shrink-0 flex flex-col items-center"
//             >
//               <img
//                 src={planet.src}
//                 alt={planet.name}
//                 className="w-[200px] h-[200px] object-contain"
//               />
//               <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase text-center">
//                 {planet.name}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanetsSection;



// import React, { useRef, useEffect } from "react";
// import Surya from "../../assets/Surya.svg";
// import Shani from "../../assets/Shani.svg";
// import Guru from "../../assets/Guru.svg";
// import Chandrma from "../../assets/Chandrma.svg";

// const planets = [
//   { name: "SURYA", src: Surya },
//   { name: "CHANDRMA", src: Chandrma },
//   { name: "GURU", src: Guru },
//   { name: "SHANI", src: Shani },
//   { name: "SURYA 2", src: Surya },
//   { name: "CHANDRMA 2", src: Chandrma },
//   { name: "GURU 2", src: Guru },
//   { name: "SHANI 2", src: Shani },
// ];

// const CARD_WIDTH = 250;
// const GAP = 32;
// const VISIBLE_CARDS = 4;
// const CONTAINER_WIDTH = VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * GAP;

// const PlanetsSection = () => {
//   const scrollRef = useRef(null);

//   const extendedPlanets = [...planets, ...planets, ...planets];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollLeft = planets.length * (CARD_WIDTH + GAP);
//     }
//   }, []);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollLeft = container.scrollLeft;
//     const total = extendedPlanets.length;
//     const visible = planets.length;
//     const middle = visible * (CARD_WIDTH + GAP);
//     const maxScroll = (total - visible) * (CARD_WIDTH + GAP);

//     if (scrollLeft <= 0) {
//       container.scrollLeft = middle;
//     } else if (scrollLeft >= maxScroll) {
//       container.scrollLeft = middle;
//     }
//   };

//   const scroll = (dir) => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollBy({
//         left: dir === "left" ? -(CARD_WIDTH + GAP) : CARD_WIDTH + GAP,
//         behavior: "smooth",
//       });
//     }
//   };

  

//   return (
//     <div className="">
//       <div className="flex flex-row justify-center items-center gap-x-32">
//          <h1 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">
//         Discover which cosmic forces will rule 2025–26
//       </h1>
//        <p className="text-xl  text-center mb-12 uppercase tracking-normal">
//        the planets are in motion, and so is your destiny. <br></br>
       
//       </p>
//       </div>
//       <div className="mx-auto py-8 font-sans relative max-w-[1200px]">
//       {/* Arrows */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-[#C5445D] text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl"
//       >
//         &#8250;
//       </button>

//       {/* Carousel Wrapper with fixed width */}
//       <div className="overflow-hidden mx-auto" style={{ width: `${CONTAINER_WIDTH}px` }}>
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-8 scroll-smooth overflow-x-auto snap-x snap-mandatory scrollbar-hide"
//         >
//           {extendedPlanets.map((planet, index) => (
//             <div
//               key={index}
//               className="min-w-[250px] snap-start shrink-0 flex flex-col items-center"
//             >
//               <img
//                 src={planet.src}
//                 alt={planet.name}
//                 className="w-[200px] h-[200px] object-contain"
//               />
//               <h4 className="text-xl font-bold text-[#2D7351] mt-4 uppercase text-center">
//                 {planet.name}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PlanetsSection;




import React, { useRef, useEffect } from "react";
import Surya from "../../assets/Surya.svg";
import Shani from "../../assets/Shani.svg";
import Guru from "../../assets/Guru.svg";
import Chandrma from "../../assets/Chandrma.svg";

const planets = [
  { name: "SURYA", src: Surya },
  { name: "CHANDRMA", src: Chandrma },
  { name: "GURU", src: Guru },
  { name: "SHANI", src: Shani },
  { name: "SURYA 2", src: Surya },
  { name: "CHANDRMA 2", src: Chandrma },
  { name: "GURU 2", src: Guru },
  { name: "SHANI 2", src: Shani },
];

const CARD_WIDTH = 250;
const GAP = 32;

const PlanetsSection = () => {
  const scrollRef = useRef(null);
  const extendedPlanets = [...planets, ...planets, ...planets];

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft = planets.length * (CARD_WIDTH + GAP);
    }
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const total = extendedPlanets.length;
    const visible = planets.length;
    const middle = visible * (CARD_WIDTH + GAP);
    const maxScroll = (total - visible) * (CARD_WIDTH + GAP);

    if (scrollLeft <= 0) {
      container.scrollLeft = middle;
    } else if (scrollLeft >= maxScroll) {
      container.scrollLeft = middle;
    }
  };

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = CARD_WIDTH + GAP;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full px-4 md:px-8 lg:px-16">
      {/* Headings */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#073349]">
          Discover which cosmic forces will rule 2025–26
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 uppercase">
          the planets are in motion, and so is your destiny.
        </p>
      </div>

      {/* Carousel with relative container for positioning */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-[#C5445D] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md flex items-center justify-center text-xl top-1/2 -translate-y-1/2"
        >
          &#8249;
        </button>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="scrollbar-hide overflow-x-auto scroll-smooth snap-x snap-mandatory w-full"
        >
          {/* <div className="flex gap-4 sm:gap-6 md:gap-8 py-4 px-4 sm:px-6 md:px-8 w-fit">
            {extendedPlanets.map((planet, index) => (
              <div
                key={index}
                className="snap-start shrink-0 flex flex-col items-center 
                  min-w-[80%] sm:min-w-[50%] md:min-w-[23%] xl:min-w-[19%] 2xl:min-w-[17%]"
              >
                <img
                  src={planet.src}
                  alt={planet.name}
                  className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] object-contain"
                />
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#2D7351] mt-4 uppercase text-center">
                  {planet.name}
                </h4>
              </div>
            ))}
          </div> */}
          {/* <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-4 px-2 sm:px-6 md:px-8 w-fit">
  {extendedPlanets.map((planet, index) => (
    <div
      key={index}
      className="snap-start shrink-0 flex flex-col items-center 
        min-w-[65%] sm:min-w-[45%] md:min-w-[23%] xl:min-w-[19%] 2xl:min-w-[17%]"
    >
      <img
        src={planet.src}
        alt={planet.name}
        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-contain"
      />
      <h4 className="text-xs sm:text-sm md:text-base font-bold text-[#2D7351] mt-3 uppercase text-center">
        {planet.name}
      </h4>
    </div>
  ))}
</div> */}

<div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-4 px-2 sm:px-4 md:px-8 w-fit">
  {extendedPlanets.map((planet, index) => (
    <div
      key={index}
      className="snap-start shrink-0 flex flex-col items-center 
        min-w-[25%] xs:min-w-[25%] sm:min-w-[25%] md:min-w-[30%] xl:min-w-[19%] 2xl:min-w-[17%]"
    >
      <img
        src={planet.src}
        alt={planet.name}
        className="w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-contain"
      />
      <h4 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-[#2D7351] mt-3 uppercase text-center">
        {planet.name}
      </h4>
    </div>
  ))}
</div>


        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-[#C5445D] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md flex items-center justify-center text-xl top-1/2 -translate-y-1/2"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PlanetsSection;
