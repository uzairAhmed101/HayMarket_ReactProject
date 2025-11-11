import React from "react";
import logoBar22 from "../assets/Images/LogoBar-2-2.png";
import logoBar23 from "../assets/Images/LogoBar-2-3.png";
import logoBar24 from "../assets/Images/LogoBar-2-4.png";
import logoBar25 from "../assets/Images/LogoBar-2-5.png";
import gifVideo from "../assets/Videos/HayMarket-all.gif";

export default function Logobar2() {
  return (
    <div className="bg-[#3A0368] border-t border-white py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 lg:py-5 lg:px-8">
      <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full md:min-w-[400px]">
        {/* -------------------  LEFT (main logo) ------------------- */}
        <div className="flex-shrink-0">
          <img
            src={gifVideo}
            alt="Haymarket Publishers Animation"
            className="h-25 sm:none md:h-25 lg:h-25 xl:h-25 object-contain max-w-full"
          />
        </div>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1 justify-center">
          <div className="hidden md:block w-px h-4 bg-white/30" />

          <img
            src={logoBar22}
            alt="Partner 1"
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 object-contain max-w-full"
          />
          <img
            src={logoBar23}
            alt="Partner 2"
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 object-contain max-w-full"
          />
          <img
            src={logoBar24}
            alt="Partner 3"
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 object-contain max-w-full"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={logoBar25}
            alt="Partner 4"
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  );
}