import React from 'react';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import SliderOpener from '../components/Home/SliderOpener';
import Footer from '../layout/Footer';
import BlogsBanner from "../assets/blogs_banner.svg";
import Seperator from '../components/Home/SeperatorComponent';

// Vaastu Tips Images
import VaastuLeftFirst from "../assets/vaasu_tips_left_side_first.svg";
import VaastuLeftSecond from "../assets/vaasu_tips_left_side_second.svg";
import VaastuRightFirst from "../assets/vaasu_tips_right_side_first.svg";
import VaastuRightSecond from "../assets/vaasu_tips_right_side_second.svg";
import VaastuRightThird from "../assets/vaasu_tips_right_side_third.svg";
import VaastuRightFourth from "../assets/vaasu_tips_right_side_fourth.svg";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Vastu Shastra: The Ancient Science of Architecture",
      excerpt: "Discover the fundamental principles of Vastu Shastra and how they influence modern architecture and interior design for positive energy flow.",
      category: "Vastu Shastra",
      readTime: "5 min read",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "The Power of Crystal Healing in Modern Life",
      excerpt: "Explore how crystals can enhance your spiritual journey and bring balance to your daily life through their unique healing properties.",
      category: "Crystal Healing",
      readTime: "4 min read",
      date: "March 12, 2024"
    },
    {
      id: 3,
      title: "Tarot Reading: A Journey into Self-Discovery",
      excerpt: "Learn about the mystical world of tarot cards and how they can provide guidance and insights into your life's journey.",
      category: "Tarot",
      readTime: "6 min read",
      date: "March 10, 2024"
    },
    {
      id: 4,
      title: "Astrological Remedies for Career Success",
      excerpt: "Discover powerful astrological remedies and practices that can help you achieve success in your professional life.",
      category: "Astrology",
      readTime: "7 min read",
      date: "March 8, 2024"
    },
    {
      id: 5,
      title: "The Science Behind Kundli Analysis",
      excerpt: "Understand the scientific basis of Kundli analysis and how birth charts reveal your life's blueprint and potential.",
      category: "Kundli",
      readTime: "8 min read",
      date: "March 5, 2024"
    },
    {
      id: 6,
      title: "Spiritual Healing: Ancient Wisdom for Modern Wellness",
      excerpt: "Explore traditional spiritual healing methods and their application in contemporary wellness practices.",
      category: "Spiritual Healing",
      readTime: "5 min read",
      date: "March 3, 2024"
    }
  ];

  const vaastuTips = [
    {
      id: 1,
      title: "Entrance Direction",
      description: "The main entrance should ideally face north, east, or northeast for positive energy flow.",
      image: VaastuLeftFirst
    },
    {
      id: 2,
      title: "Kitchen Placement",
      description: "Kitchen should be in the southeast corner to harness the fire element effectively.",
      image: VaastuLeftSecond
    },
    {
      id: 3,
      title: "Bedroom Location",
      description: "Master bedroom in southwest ensures stability and promotes restful sleep.",
      image: VaastuRightFirst
    },
    {
      id: 4,
      title: "Study Room",
      description: "North or east facing study rooms enhance concentration and learning abilities.",
      image: VaastuRightSecond
    },
    {
      id: 5,
      title: "Prayer Room",
      description: "Northeast corner is ideal for prayer room to attract divine energy.",
      image: VaastuRightThird
    },
    {
      id: 6,
      title: "Bathroom Position",
      description: "Northwest or southeast corners are suitable for bathroom placement.",
      image: VaastuRightFourth
    }
  ];

  return (
    <div className="bg-white text-[#073349]">
      
      {/* TOP BAR */}
      <div className="bg-[#D44459] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">AI-POWERED PLATFORM REVOLUTIONIZING ASTROLOGY</p>
      </div>
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center bg-[#F5D6B4] px-4 md:px-6 py-3 shadow">
        <div className="flex items-center">
          <SliderOpener />
        </div>
        <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-12" />
        <div className="space-x-2 md:space-x-4">
          <button className="text-sm font-semibold text-[#073349] hover:text-[#D44459] transition-colors">CONTACT US</button>
          <button className="bg-[#D44459] text-white px-4 py-2 rounded-lg hover:bg-[#B83A4A] transition-colors">SIGN IN</button>
        </div>
      </nav>

      {/* HERO SECTION WITH BANNER IMAGE */}
      <section className="relative -mt-1">
        <img 
          src={BlogsBanner} 
          alt="Blogs Banner" 
          className="w-full h-[600px] object-cover object-top"
        />
      </section>
      <Seperator />

      {/* NAVIGATION/FILTER BUTTONS */}
      <section className="bg-white py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F5D6B4] text-[#073349] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8C8A0] transition-colors">
              QUICK LINKS
            </button>
            <button className="bg-[#EAA83E] text-white px-6 py-3 rounded-lg font-semibold">
              VAASTU TIPS
            </button>
            <button className="bg-[#F5D6B4] text-[#073349] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8C8A0] transition-colors">
              CRYSTAL KNOWLEDGE
            </button>
            <button className="bg-[#F5D6B4] text-[#073349] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8C8A0] transition-colors">
              PODCAST
            </button>
          </div>
        </div>
      </section>

      {/* VASTU TIPS SECTION */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#D44459]">
                VAASTU TIPS
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                READY TO DISCOVER WHAT THE STARS REVEAL? BOOK YOUR PERSONALIZED TAROT OR ASTROLOGY READING NOW.
              </p>
            </div>
          </div>

                                           {/* Content Layout */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* LEFT SIDE - 2 Large Cards in ROW */}
             <div className="lg:col-span-1 relative">
               <div className="grid grid-cols-2 gap-4">
                 {/* Card 1 */}
                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                   <img 
                     src={VaastuLeftFirst} 
                     alt="Vaastu Tips"
                     className="w-full h-32 object-cover"
                   />
                   <div className="p-3">
                     <div className="flex items-center justify-between mb-1">
                       <span className="text-gray-500 text-xs">18-08-2025</span>
                       <span className="bg-[#D44459] text-white px-1 py-0.5 rounded-full text-xs font-semibold">
                         VAASTU TIPS
                       </span>
                     </div>
                     <h3 className="text-xs font-bold text-[#073349] mb-1">
                       LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                     </h3>
                     <p className="text-gray-600 text-xs leading-relaxed">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                   </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                   <img 
                     src={VaastuLeftSecond} 
                     alt="Vaastu Tips"
                     className="w-full h-32 object-cover"
                   />
                   <div className="p-3">
                     <div className="flex items-center justify-between mb-1">
                       <span className="text-gray-500 text-xs">18-08-2025</span>
                       <span className="bg-[#D44459] text-white px-1 py-0.5 rounded-full text-xs font-semibold">
                         VAASTU TIPS
                       </span>
                     </div>
                     <h3 className="text-xs font-bold text-[#073349] mb-1">
                       LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                     </h3>
                     <p className="text-gray-600 text-xs leading-relaxed">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                   </div>
                 </div>
               </div>
               
               {/* VERTICAL DIVIDER LINE - Positioned with margin */}
               <div className="hidden lg:block absolute top-0 -right-4 w-px h-full bg-black"></div>
             </div>

             {/* RIGHT SIDE - 4 Smaller Entries in COLUMN */}
             <div className="lg:col-span-2 space-y-3">
               {/* Entry 1 */}
               <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                 <div className="w-20 h-20 flex-shrink-0">
                   <img 
                     src={VaastuRightFirst} 
                     alt="Vaastu Tips"
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="p-3 flex-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className="text-gray-500 text-xs">18-08-2025</span>
                     <span className="bg-[#D44459] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                       VAASTU TIPS
                     </span>
                   </div>
                   <h3 className="text-sm font-bold text-[#073349] mb-1">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                   </h3>
                   <p className="text-gray-600 text-xs">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND...
                   </p>
                 </div>
               </div>

               {/* Entry 2 */}
               <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                 <div className="w-20 h-20 flex-shrink-0">
                   <img 
                     src={VaastuRightSecond} 
                     alt="Vaastu Tips"
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="p-3 flex-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className="text-gray-500 text-xs">18-08-2025</span>
                     <span className="bg-[#D44459] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                       VAASTU TIPS
                     </span>
                   </div>
                   <h3 className="text-sm font-bold text-[#073349] mb-1">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                   </h3>
                   <p className="text-gray-600 text-xs">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND...
                   </p>
                 </div>
               </div>

               {/* Entry 3 */}
               <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                 <div className="w-20 h-20 flex-shrink-0">
                   <img 
                     src={VaastuRightThird} 
                     alt="Vaastu Tips"
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="p-3 flex-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className="text-gray-500 text-xs">18-08-2025</span>
                     <span className="bg-[#D44459] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                       VAASTU TIPS
                     </span>
                   </div>
                   <h3 className="text-sm font-bold text-[#073349] mb-1">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                   </h3>
                   <p className="text-gray-600 text-xs">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND...
                   </p>
                 </div>
               </div>

               {/* Entry 4 */}
               <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                 <div className="w-20 h-20 flex-shrink-0">
                   <img 
                     src={VaastuRightFourth} 
                     alt="Vaastu Tips"
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="p-3 flex-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className="text-gray-500 text-xs">18-08-2025</span>
                     <span className="bg-[#D44459] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                       VAASTU TIPS
                     </span>
                   </div>
                   <h3 className="text-sm font-bold text-[#073349] mb-1">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTIN
                   </h3>
                   <p className="text-gray-600 text-xs">
                     LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND...
                   </p>
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
