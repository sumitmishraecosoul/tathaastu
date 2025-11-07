import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import SliderOpener from '../components/Home/SliderOpener';
import Footer from '../layout/Footer';
import Seperator from '../components/Home/SeperatorComponent';

// Course Images
import VastuCourse1 from "../assets/vaastu_course1.svg";
import VastuCourse2 from "../assets/vaastu_course2.svg";
import VastuCourse3 from "../assets/vaastu_course3.svg";
import VastuCourse4 from "../assets/vaastu_course4.svg";
import VastuCourse5 from "../assets/vaastu_course5.svg";
import VastuCourse6 from "../assets/vaastu_course6.svg";
import VastuCourse7 from "../assets/vaastu_course7.svg";
import VastuCourse8 from "../assets/vaastu_course8.svg";
import VastuCourse9 from "../assets/vaastu_course9.svg";

// Navigation Arrows
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_side_arrow.svg";

export default function Courses() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const courseCategories = [
    "VASTU COURSE",
    "ASTROLOGY COURSE", 
    "CRYSTAL SCANNING",
    "TAROT CARD COURSE",
    "NUMEROLOGY COURSE",
    "YOGA COURSE",
    "PET HEALING",
    "AURA SCANNING",
    "DOWSING"
  ];

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200; // Adjust based on button width + gap
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200; // Adjust based on button width + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    // Scroll to the clicked category
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const buttonWidth = 150; // Approximate button width
      const gap = 12; // Gap between buttons
      const scrollPosition = index * (buttonWidth + gap);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const courses = [
    {
      id: 1,
      title: "VASTU COURSE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse1,
      imagePosition: "left"
    },
    {
      id: 2,
      title: "ASTROLOGY COURSE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse2,
      imagePosition: "right"
    },
    {
      id: 3,
      title: "TAROT CARD COURSE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse3,
      imagePosition: "left"
    },
    {
      id: 4,
      title: "NUMEROLOGY COURSE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse4,
      imagePosition: "right"
    },
    {
      id: 5,
      title: "YOGA COURSE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse5,
      imagePosition: "left"
    },
    {
      id: 6,
      title: "PET HEALING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse6,
      imagePosition: "right"
    },
    {
      id: 7,
      title: "AURA SCANNING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse7,
      imagePosition: "left"
    },
    {
      id: 8,
      title: "CRYSTAL SCANNING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse8,
      imagePosition: "right"
    },
    {
      id: 9,
      title: "DOWSING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: VastuCourse9,
      imagePosition: "left"
    }
  ];

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
          <Link to="/login" className="bg-[#D44459] text-white px-4 py-2 rounded-lg hover:bg-[#B83A4A] transition-colors inline-block">SIGN IN</Link>
        </div>
      </nav>

                           {/* HERO SECTION */}
        <section className="bg-white py-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0" style={{ fontFamily: 'DM Serif Display, serif' }}>
              <span className="text-[#073349]">BECOME AN </span>
              <span className="text-[#D44459]">ASTROLOGER</span>
            </h1>
          </div>
        </section>
        
        <Seperator />

        {/* COURSES TITLE */}
        <section className="bg-white py-0 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073349]">
              COURSES
            </h2>
          </div>
        </section>

      {/* COURSE CATEGORY NAVIGATION */}
      <section className="bg-white py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
                         {/* Left Arrow */}
             <button 
               onClick={handlePrevious}
               className="flex-shrink-0 w-10 h-10 bg-[#D44459] rounded-full flex items-center justify-center hover:bg-[#B83A4A] transition-colors shadow-md"
             >
               <img src={LeftArrow} alt="Previous" className="w-5 h-5" />
             </button>
            
                         {/* Scrollable Categories */}
             <div 
               ref={scrollContainerRef}
               className="flex gap-3 overflow-x-auto scrollbar-hide flex-1 scroll-smooth"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
               {courseCategories.map((category, index) => (
                 <button
                   key={index}
                   className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap flex-shrink-0 text-sm ${
                     index === currentCategoryIndex 
                       ? 'bg-[#D44459] text-white' 
                       : 'bg-[#F5D6B4] text-[#073349] hover:bg-[#E8C8A0]'
                   }`}
                   onClick={() => handleCategoryClick(index)}
                 >
                   {category}
                 </button>
               ))}
             </div>
            
                         {/* Right Arrow */}
             <button 
               onClick={handleNext}
               className="flex-shrink-0 w-10 h-10 bg-[#D44459] rounded-full flex items-center justify-center hover:bg-[#B83A4A] transition-colors shadow-md"
             >
               <img src={RightArrow} alt="Next" className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>

             {/* COURSE LISTINGS */}
       <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
         <div className="max-w-7xl mx-auto">
           <div className="space-y-20">
             {courses.map((course) => (
               <div key={course.id} className={`flex flex-col ${course.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                 
                 {/* Course Image */}
                 <div className="w-full lg:w-1/2">
                   <div className="relative group">
                     <img 
                       src={course.image} 
                       alt={course.title}
                       className="w-full h-72 lg:h-96 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                   </div>
                 </div>
                 
                 {/* Course Content */}
                 <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-4">
                     <h3 className="text-3xl md:text-4xl font-bold text-[#073349] leading-tight">
                       {course.title}
                     </h3>
                     <div className="w-16 h-1 bg-[#D44459] rounded-full"></div>
                   </div>
                   <p className="text-lg text-gray-700 leading-relaxed">
                     {course.description}
                   </p>
                   <div className="pt-4">
                     <button className="bg-gradient-to-r from-[#D44459] to-[#B83A4A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#B83A4A] hover:to-[#D44459] transition-all duration-300 transform hover:scale-105 shadow-lg">
                       LEARN MORE
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
