// import React from 'react';
// import HomeBannerVector from '../assets/home_banner_vector.png';
// import tathaastuLogo from '../assets/tathaastu_logo.png';
// import HOMESEPERATOR from '../assets/HOME_Seperator_1.png';


// export default function Home() {
//   return (
//     <div className="bg-white text-[#073349]">
//       <nav className="flex justify-between items-center bg-[#F5D6B4] px-6 py-3 shadow">
//         <div className="flex items-center">
//           <button className="mr-4 text-3xl">☰</button>
//           {/* <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-10" /> */}
//         </div>
//          <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-12" />
//         <div className="space-x-4">
//           <button className="text-sm font-semibold text-green-800">CONTACT US</button>
//           <button className="bg-[#D9716C] text-white px-4 py-1 rounded">SIGN IN</button>
//         </div>
//       </nav>

//       <section className="flex flex-col lg:flex-row items-center justify-between p-6 lg:pl-20 lg:pr-0 lg:py-10 space-y-6 lg:space-y-0">
        
//         <div className="max-w-xl space-y-6">
//           <h1 className="text-2xl md:text-3xl font-bold text-green-900">
//             UNLOCK YOUR DESTINY WITH <br /> AI-POWERED ASTROLOGY
//           </h1>
//           <p className="text-sm text-gray-700 uppercase">
//             PERSONALIZED GUIDANCE. MODERN MYSTICISM. <br /> ALWAYS CONNECTED.
//           </p>
//           <button className="bg-[#D9716C] text-white px-16 py-3 rounded-xl shadow font-semibold">
//             GET STARTED
//           </button>
//         </div>

//         <div className="mt-10 lg:mt-0 mr-0">
//           <img src={HomeBannerVector} alt="Zodiac Chart" className="w-full max-w-lg" />
//         </div>
//       </section>

//       <section className="bg-white px-4 py-10 md:px-16 lg:px-32 xl:px-52 2xl:px-72">
//       <h2 className="heading">FROM CHARTS TO CHAKRAS – EVERYTHING YOU NEED</h2>

//       <div className="flex justify-center my-4">
//        <img src={HOMESEPERATOR} alt="Tathaastu Logo" className="h-12" />
//       </div>

//       <div className="space-y-6">
//         <p className="paragraph">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
//           been the industry's standard dummy text ever since the 1500s, when an unknown printer
//           took a galley of type and scrambled it to make a type specimen book. It has survived not
//           only five centuries, but also the leap into electronic typesetting,
//         </p>

//         <p className="paragraph">
//           Remaining essentially unchanged. It was popularised in the 1960s with the release of
//           Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
//           software like Aldus PageMaker including versions of Lorem Ipsum.
//         </p>

//         <p className="paragraph">
//           The 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
//         </p>
//       </div>
//     </section>

//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBannerVector from '../assets/home_banner_vector.png';
import tathaastuLogo from '../assets/tathaastu_logo.png';
import HOMESEPERATOR from '../assets/HOME_Seperator_1.png';
import FeatureSection from '../components/Home/FeatureSection';
import ZodiacSection from '../components/Home/ZodiacSection';
import AstrologyBanner from '../components/Home/AstrologyBanner';
import ChakraSection from '../components/Home/ChakraSection';
import PlanetsSection from '../components/Home/PlanetsSection';
import ServicesCarousel from '../components/Home/ServiceCarousel';
import Seperator from '../components/Home/SeperatorComponent';
import AIContentSection from '../components/Home/AIContent';
import VisionMission from '../components/Home/VisionMission';
import WhyChooseSection from '../components/Home/WhyChooseSection';
import KnowYourHoroscope from '../components/Home/KnowYourHoroscope';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import SliderOpener from '../components/Home/SliderOpener';
import Footer from '../layout/Footer';

export default function Home() {
  const DeferredSection = ({ children, minHeight = "240px", rootMargin = "300px 0px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const placeholderRef = useRef(null);

    useEffect(() => {
      const node = placeholderRef.current;
      if (!node || isVisible) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, [isVisible, rootMargin]);

    return (
      <div ref={placeholderRef} style={{ minHeight }}>
        {isVisible ? children : null}
      </div>
    );
  };

  return (
    <div className="bg-white text-[#073349]">
      
      {/* NAVIGATION */}
      <nav className="grid grid-cols-3 items-center bg-[#F5D6B4] px-4 md:px-6 py-3 shadow">
        <div className="flex items-center">
          <SliderOpener />
        </div>
        <div className="flex justify-center">
          <img src={tathaastuLogo} alt="Tathaastu Logo" className="h-16 md:h-20" />
        </div>
        <div className="flex justify-end space-x-2 md:space-x-4">
          {/* <button className="text-sm font-semibold text-green-800">CONTACT US</button>
          <Link to="/login" className="bg-[#D9716C] text-white px-4 py-1 rounded hover:bg-[#B83A4A] transition-colors inline-block">SIGN IN</Link> */}
        </div>
      </nav>
      <AstrologyBanner/>
      <Seperator/>
      {/* <ChakraSection /> */}

      {/* HERO SECTION */}
      {/* <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:pl-20 lg:pr-0 py-10 gap-10">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="heading">
            UNLOCK YOUR DESTINY WITH <br /> AI-POWERED ASTROLOGY
          </h1>
          <p className="paragraph uppercase">
            PERSONALIZED GUIDANCE. MODERN MYSTICISM. <br /> ALWAYS CONNECTED.
          </p>
          <button className="bg-[#D9716C] text-white px-12 py-3 rounded-xl shadow font-semibold mt-4">
            GET STARTED
          </button>
        </div>

        <div className="w-full max-w-lg px-4 lg:px-0">
          <img src={HomeBannerVector} alt="Zodiac Chart" className="w-full" />
        </div>
      </section> */}

      {/* CHAKRA CONTENT SECTION */}
      {/* <section className="bg-white px-4 py-10 md:px-16 lg:px-32 xl:px-52 2xl:px-72">
        <h2 className="heading">
          FROM CHARTS TO CHAKRAS – EVERYTHING YOU NEED
        </h2>

        <div className="flex justify-center my-4">
          <img src={HOMESEPERATOR} alt="Separator" className="h-12" />
        </div>

        <div className="space-y-6">
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>

          <p className="paragraph">
            Remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p className="paragraph">
            The 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
        </div>
      </section> */}
      <DeferredSection minHeight="420px">
        <PlanetsSection />
        <Seperator />
      </DeferredSection>

      <DeferredSection minHeight="360px">
        <ServicesCarousel />
        <Seperator />
      </DeferredSection>

      <DeferredSection minHeight="340px">
        <AIContentSection />
        <Seperator />
      </DeferredSection>

      <DeferredSection minHeight="320px">
        <VisionMission />
        <Seperator />
      </DeferredSection>

      <DeferredSection minHeight="320px">
        <WhyChooseSection />
        <Seperator />
      </DeferredSection>

      <DeferredSection minHeight="380px">
        <KnowYourHoroscope />
      </DeferredSection>

      <DeferredSection minHeight="320px">
        <TestimonialsSection />
      </DeferredSection>
      <Footer />
    </div>
  );
}
