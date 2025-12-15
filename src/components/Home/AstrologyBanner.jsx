import React, { useEffect, useRef } from "react";
import { useConnectModal } from "../../contexts/ConnectModalContext";
import Banner from "../../assets/BANNER.svg";
import ChakraImage from "../../assets/Chakra_image.svg";
import Chakra from "../../assets/chakra_new.svg";
import ChakraWithLotus from "../../assets/chakra_with_lotus.svg";
import ChakraGif from "../../assets/freecompress-chakra.gif";
import HomeBannerVector from '../../assets/home_banner_vector.png';
import HOMESEPERATOR from '../../assets/HOME_Seperator_1.png';
import ExpertIcon from "../../assets/expert.svg";
import AuthenticIcon from "../../assets/authentic.svg";
import PERSONALISEDIcon from "../../assets/PERSONALISED.svg";
import AIPowerIcon from "../../assets/ai_power.svg";

// const AstrologyBanner = () => {
//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
//       style={{ backgroundImage: `url(${Banner})` }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 max-w-4xl text-center px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           UNLOCK YOUR DESTINY WITH <br />
//           <span className="text-pink-300">AI-POWERED ASTROLOGY</span>
//         </h1>

//         <p className="text-sm md:text-base text-gray-200 mb-6">
//           PERSONALIZED GUIDANCE. MODERN MYSTICISM. ALWAYS CONNECTED.
//         </p>

//         <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
//           GET STARTED
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AstrologyBanner;




// import React from "react";

const AstrologyHome = () => {
  const gifRef = useRef(null);
  const { openModal } = useConnectModal();

  useEffect(() => {
    const img = gifRef.current;
    if (img) {
      // Ensure GIF loops infinitely by reloading when it completes
      const handleLoad = () => {
        // Add a small delay and reload to ensure continuous looping
        const checkAndReload = () => {
          if (img.complete) {
            const currentSrc = img.src.split('?')[0]; // Remove any query params
            // Force reload by adding timestamp
            img.src = currentSrc + '?v=' + Date.now();
          }
        };
        
        // Check periodically to ensure it keeps looping
        const interval = setInterval(checkAndReload, 3000);
        
        return () => clearInterval(interval);
      };
      
      img.addEventListener('load', handleLoad);
      
      return () => {
        img.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <div className="w-full">

      {/* SECTION 1: Banner */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center"
       style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 w-full">
          {/* Left Content */}
          <div className="text-white max-w-xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
             Unlock Your Destiny With The Best <br />
              <span className="text-pink-300">Astrology Predictions</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200">
             100+ Astrologers | Personalised Guidance | AI-Powered Insights
            </p>
            <button 
              onClick={openModal}
              className="bg-[#d05a69] hover:bg-pink-500 text-2xl text-white font-semibold py-3 px-16 rounded-full shadow-lg transition duration-300"
            >
              Get a Free Prediction
            </button>
          </div>

          {/* Right Zodiac Wheel */}
          {/* <img
            src={ChakraImage}
            alt="Zodiac Wheel"
            className="hidden md:block w-[300px] lg:w-[400px]"
          /> */}
        </div>
      </div>

       <div className="flex justify-center my-4">
                <img src={HOMESEPERATOR} alt="Separator" className="h-12" />
              </div>

      {/* SECTION 2: Chakra Section */}
      {/* <div className="flex flex-col md:flex-row items-start justify-between px-10 md:px-20 py-8 gap-10 bg-white">

      
        <div className="flex-shrink-0 pr-24 flex-col">
             <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-green-900">FROM </span>
            <span className="text-pink-600 font-bold">CHARTS TO CHAKRAS - </span>
            <div className="text-green-900"> EVERYTHING YOU NEED</div>
          </h2>
          <img
            src={ChakraWithLotus}
            alt="Chakra"
            className="w-[900px] h-auto rounded-full block"
          />

        </div>

       
        <div className="max-w-2xl space-y-6 "  >
          <p className="text-gray-700 text-xl">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry’s standard dummy text ever
            since the 1500s.
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry’s standard dummy text ever
            since the 1500s.
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry’s standard dummy text ever
            since the 1500s.
           
          </p>

          
          <div className="grid grid-cols-2 gap-8 bg-[#fff5e5] py-8 px-4 rounded-3xl shadow-md text-sm">
            <div className="flex items-center gap-2">
              <span><img
            src={AIPowerIcon}
            alt="Chakra"
            className="w-[50px] rounded-full "
          /></span>
              <span className="font-semibold text-green-800">AI-POWERED INSIGHTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span><img
            src={AuthenticIcon}
            alt="Chakra"
            className="w-[50px] rounded-full "
          /></span>
              <span className="font-semibold text-pink-700">AUTHENTIC REMEDIES</span>
            </div>
            <div className="flex items-center gap-2">
              <span><img
            src={ExpertIcon}
            alt="Chakra"
            className="w-[50px] rounded-full "
          /></span>
              <span className="font-semibold text-red-600">EXPERT-BACKED CONSULTATIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <span><img
            src={PERSONALISEDIcon}
            alt="Chakra"
            className="w-[50px] rounded-full "
          /></span>
              <span className="font-semibold text-green-600">PERSONALIZED SPIRITUAL GROWTH</span>
            </div>
          </div>

          <button className="mt-4 text-2xl bg-[#d05a69] hover:bg-rose-600 text-white font-semibold py-2 px-12 rounded-full transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div> */}

      {/* <div className="flex flex-col md:flex-row items-start justify-between px-10 md:px-20 py-8 gap-10 bg-white overflow-hidden">

 
  <div className="flex-shrink-0 flex-col relative">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      <span className="text-green-900">FROM </span>
      <span className="text-pink-600 font-bold">CHARTS TO CHAKRAS - </span>
      <div className="text-green-900"> EVERYTHING YOU NEED</div>
    </h2>

   
    <div className="relative w-[800px] h-auto -ml-80">
      <img
        src={ChakraWithLotus}
        alt="Chakra with Lotus"
        className="w-full h-auto rounded-full"
      />
    </div>
  </div>

 
  <div className="max-w-2xl space-y-6">
    <p className="text-gray-700 text-xl">
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry’s standard dummy text ever
      since the 1500s. Lorem ipsum is simply dummy text of the printing and
      typesetting industry. Lorem ipsum has been the industry’s standard dummy
      text ever since the 1500s.
    </p>

    
    <div className="grid grid-cols-2 gap-8 bg-[#fff5e5] py-8 px-4 rounded-3xl shadow-md text-sm">
      <div className="flex items-center gap-2">
        <img src={AIPowerIcon} alt="AI Power" className="w-[50px] rounded-full" />
        <span className="font-semibold text-green-800">AI-POWERED INSIGHTS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={AuthenticIcon} alt="Authentic Remedies" className="w-[50px] rounded-full" />
        <span className="font-semibold text-pink-700">AUTHENTIC REMEDIES</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={ExpertIcon} alt="Expert" className="w-[50px] rounded-full" />
        <span className="font-semibold text-red-600">EXPERT-BACKED CONSULTATIONS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={PERSONALISEDIcon} alt="Personalized" className="w-[50px] rounded-full" />
        <span className="font-semibold text-green-600">PERSONALIZED SPIRITUAL GROWTH</span>
      </div>
    </div>

    
    <button className="mt-4 text-2xl bg-[#d05a69] hover:bg-rose-600 text-white font-semibold py-2 px-12 rounded-full transition duration-300">
      LEARN MORE
    </button>
  </div>
</div> */}

<div className="flex flex-col  md:flex-row items-start justify-between px-6 sm:px-10 md:px-20 pt-10 gap-10 bg-white overflow-visible">
  {/* Image Section */}
  <div className="flex-shrink-0 flex-col relative overflow-visible">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
      <span className="text-green-900">FROM </span>
      <span className="text-pink-600 font-bold">CHARTS TO CHAKRAS - </span>
      <div className="text-green-900"> EVERYTHING YOU NEED</div>
    </h2>

    {/* Chakra GIF - showing only right half (container shifted left) */}
   <div
  className="
    relative 
    w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] 
    -ml-40 sm:-ml-56 md:-ml-72 lg:-ml-[340px] xl:-ml-[400px] 
    h-[650px] sm:h-[650px] md:h-[750px] lg:h-[850px]
  "
  style={{ overflow: 'visible' }}
>
  <img
    ref={gifRef}
    src={ChakraGif}
    alt="Chakra with Lotus"
    style={{ 
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      display: 'block',
      borderRadius: '50%',
      transform: 'scale(1.05)'
    }}
  />
</div>

  </div>

  {/* Content Section */}
  <div className="max-w-2xl space-y-6">
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
     The cosmos are with you. And, it's your time to seek wisdom from ancient Indian sciences and Unlock Your Destiny.
    </p>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
     At Tathasstu, we are here with timeless practices that heal, empower, and guide you. From online astrology services to Vaastu and crystal healing to aura scanning, our team of experts helps you awaken your purpose and connect you with your higher self.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#fff5e5] py-8 px-6 rounded-3xl shadow-md text-sm">
      <div className="flex items-center gap-3">
        <img src={AIPowerIcon} alt="AI Power" className="w-10 h-10 rounded-full" />
       <div className="flex flex-col gap-2">
         <span className="font-semibold text-green-800">Real Guidance by Verified Astrologers</span>
        <span className="font-semibold text-green-800">We have a community of — + best astrologers who provide you with real-time predictions.</span>
       </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={AuthenticIcon} alt="Authentic Remedies" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-pink-700">100% Safe & Secure</span>
        <span className="font-semibold text-pink-700">Your personal information & privacy are 100% protected with us.</span>
       </div>
       
      </div>
      <div className="flex items-center gap-3">
        <img src={ExpertIcon} alt="Expert" className="w-10 h-10 rounded-full" />
         <div className="flex flex-col gap-2">
          <span className="font-semibold text-red-600">Accurate and Personalised Predictions</span>
          <span className="font-semibold text-red-600">Every report and consultation is based on your unique birth details and current planetary alignments from — + years of experienced astrologers.</span>
       </div>
        
      </div>
      <div className="flex items-center gap-3">
        <img src={PERSONALISEDIcon} alt="Personalized" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-2">
           <span className="font-semibold text-green-600">24/7 Available</span>
            <span className="font-semibold text-green-600">We are 24/7 available. You can connect with experts anytime via call or chat.</span>
       </div>
      
      </div>
    </div>

    {/* Button */}
    <button 
      onClick={openModal}
      className="mt-4 text-xl md:text-2xl bg-[#d05a69] hover:bg-rose-600 text-white font-semibold py-2 px-10 md:px-12 rounded-full transition duration-300"
    >
      Get a Free Prediction
    </button>
  </div>
</div>

    </div>
  );
};

export default AstrologyHome;

