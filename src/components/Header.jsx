import React, { useState } from 'react';
import headerLogo from '../assets/Images/Header-Logo.png';
import emailIcon from '../assets/Images/Email-Icon.png';
import callIcon from '../assets/Images/Call-Icon.png';

export default function Header() {
  const [showEmailContent, setShowEmailContent] = useState(false);
  const [showCallContent, setShowCallContent] = useState(false);

  return (
    <header className="w-[90%] mx-auto md:w-[95%] sm:w-[98%] xs:w-[99%] max-w-full p-4">
      <div className="w-full flex items-center justify-between sm:flex-wrap sm:p-0 sm:pl-[18px] sm:pr-[35px]">
        {/* Logo */}
        <div className="flex-shrink-0 sm:order-1">
          <img 
            src={headerLogo} 
            alt="Haymarket Publishers Logo" 
            className="w-[80%] h-[80%] object-contain"
          />
        </div>

        {/* Contact Info and CTA Button Container */}
        <div className="flex items-center flex-1 justify-end sm:order-3 gap-8">
          {/* Contact Info */}
          <div className="flex gap-5 [@media(max-width:768px)]:flex-col [@media(min-width:1024px)]:flex-row xs:gap-1">
            <div className="flex">
              <span className="text-[12px] text-[#9521d0] font-medium md:text-[11px] xs:text-[10px] hidden md:hidden">Email Us</span>
              <div className="flex items-center relative">
                <button 
                  onClick={() => setShowEmailContent(!showEmailContent)}
                  className="flex items-center md:hidden"
                >
                  <img src={emailIcon} alt="Email" className="flex-shrink-0 w-4 h-4 xs:w-3 xs:h-3" />
                </button>
                <div className="hidden md:flex items-center">
                  <img src={emailIcon} alt="Email" className="flex-shrink-0 w-4 h-4" />
                  <a 
                    href="mailto:info@haymarketpublishers.com" 
                    className="text-[#333] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#8E2DE2] md:text-[13px] xs:text-[12px] ml-2"
                  >
                    info@haymarketpublishers.com
                  </a>
                </div>
                {/* Email popup that appears above the icon on mobile when clicked */}
                {showEmailContent && (
                  <div className="md:hidden absolute bottom-full mb-2 left-0 min-w-[180px] bg-white border rounded-lg p-3 shadow-lg z-10">
                    <a 
                      href="mailto:info@haymarketpublishers.com" 
                      className="text-[#333] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#8E2DE2] md:text-[13px] xs:text-[11px]"
                    >
                      info@haymarketpublishers.com
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex">
              <span className="text-[12px] text-[#9521d0] font-medium md:text-[11px] xs:text-[10px] hidden md:hidden">Call Us</span>
              <div className="flex items-center relative">
                <button 
                  onClick={() => setShowCallContent(!showCallContent)}
                  className="flex items-center md:hidden"
                >
                  <img src={callIcon} alt="Call" className="flex-shrink-0 w-4 h-4 xs:w-3 xs:h-3" />
                </button>
                <div className="hidden md:flex items-center">
                  <img src={callIcon} alt="Call" className="flex-shrink-0 w-4 h-4" />
                  <a 
                    href="tel:+18776260316" 
                    className="text-[#333] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#8E2DE2] md:text-[13px] xs:text-[12px] ml-2"
                  >
                    +1 (877)-626-0316
                  </a>
                </div>
                {/* Call popup that appears above the icon on mobile when clicked */}
                {showCallContent && (
                  <div className="md:hidden absolute bottom-full mb-2 left-0 min-w-[180px] bg-white border rounded-lg p-3 shadow-lg z-10">
                    <a 
                      href="tel:+18776260316" 
                      className="text-[#333] no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#8E2DE2] md:text-[13px] xs:text-[11px]"
                    >
                      +1 (877)-626-0316
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* CTA Button - Get Started Now */}
          <div className="flex-shrink-0">
            <button className="bg-[#890BCA] text-white border-none py-3 px-7 rounded-[25px] text-[14px] font-semibold cursor-pointer shadow-[0_4px_12px_rgba(142,45,226,0.3)] inline-block hover:shadow-[0_6px_16px_rgba(142,45,226,0.4)] md:py-[10px] md:px-6 md:text-[13px] xs:py-2 xs:px-5 xs:text-[12px]">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}