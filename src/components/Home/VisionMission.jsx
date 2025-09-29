import React from "react";
import lotusBackground from "../../assets/lotus.svg"; // Replace with your actual image path
import { ArrowRight } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="w-full py-16 bg-white font-sans">
      <div className="max-w-full  flex flex-col md:flex-row  justify-between px-6">
        
        {/* Left: Show only right half of the image */}
        {/* <div className="w-full md:w-1/2 h-[800px] overflow-hidden relative ">
          <div className="relative w-[200%] h-full transform -translate-x-1/2 flex items-center justify-center">
          
            <img
              src={lotusBackground}
              alt="Lotus"
              className="h-full object-contain"
            />
            <div className="absolute top-6 left-6 z-10 bg-black">
    <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2D7351]">
      WHAT WE DO – <span className="text-[#C5445D]">VISION & MISSION</span>
    </h2>
  </div>
          </div>
        </div> */}

        {/* <div className="w-full md:w-1/2 h-[800px] overflow-hidden relative justify-center">
  
  <div className="w-[200%] h-full transform -translate-x-1/2">
    <img
      src={lotusBackground}
      alt="Lotus"
      className="h-full object-contain"
    />
  </div>


  <div className="absolute top-6 left-6 z-10">
    <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2D7351]">
      WHAT WE DO – <span className="text-[#C5445D]">VISION & MISSION</span>
    </h2>
  </div>
</div> */}


<div className="w-full md:w-1/2 h-[800px] overflow-hidden relative">
      {/* Lotus Image - shift left to show right half only */}



      <div className="w-[200%] h-full transform -translate-x-1/2">
        <img
          src={lotusBackground}
          alt="Lotus"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text block positioned over visible image */}
      <div className="absolute top-10 left-[25%] z-10">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2D7351] leading-snug">
          WHAT WE DO – <span className="text-[#C5445D]">VISION & MISSION</span>
        </h2>
      </div>
    </div>


        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 pt-12 text-center md:text-left flex flex-col items-center justify-between">
          
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8 max-w-[500px]">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN
            THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY
            OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN
            THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY
            OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.
          </p>
          {/* <button className="bg-[#C5445D] max-w-1/2 text-white px-24 py-2  rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
            CONTACT US  
          </button> */}
          <button className="bg-[#C5445D] max-w-1/2 text-white px-24 py-2 flex items-center gap-2 rounded-full shadow-md font-semibold hover:bg-[#a6344f] transition-all">
  CONTACT US
  <ArrowRight size={20} />
</button>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
