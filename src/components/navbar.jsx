import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-[90%] md:w-[95%] sm:w-[98%] xs:w-[99%] mx-auto relative">
      <div className="bg-[#890BCA] w-full rounded-[50px]">
        {/* Mobile Menu Button */}
        <button className="sm:hidden flex flex-col bg-transparent border-none cursor-pointer p-[15px_10px]" onClick={toggleMenu}>
          <span className="w-[25px] h-[3px] bg-white my-[3px] transition duration-300 rounded-[2px]"></span>
          <span className="w-[25px] h-[3px] bg-white my-[3px] transition duration-300 rounded-[2px]"></span>
          <span className="w-[25px] h-[3px] bg-white my-[3px] transition duration-300 rounded-[2px]"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`list-none m-0 p-0 ${isMenuOpen ? 'sm:flex sm:absolute sm:top-full sm:left-0 sm:right-0 sm:bg-gradient-to-r sm:from-[#8E2DE2] sm:to-[#4A00E0] sm:flex-col sm:rounded-[0_0_15px_15px] sm:max-h-[500px] sm:shadow-[0_4px_12px_rgba(0,0,0,0.1)] sm:z-[1000]' : 'hidden'} md:flex md:static md:bg-none md:flex-row md:items-center md:justify-center md:gap-[5px] md:rounded-[20px] md:max-h-none md:overflow-visible md:shadow-none tablet:gap-[2px]`}>
          <li className="relative">
            <Link to="/" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">HOME</Link>
          </li>
          <li className="relative">
            <Link to="/about" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">About Us</Link>
          </li>
          <li className="relative">
            <Link to="/services" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">
              Our Services <span className="text-[10px] ml-[4px]">▼</span>
            </Link>
          </li>
          <li className="relative">
            <Link to="/book-marketing" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">Book Marketing</Link>
          </li>
          <li className="relative">
            <Link to="/book-publishing" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">Book Publishing</Link>
          </li>
          <li className="relative">
            <Link to="/ghostwriting" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">
              Ghostwriting <span className="text-[10px] ml-[4px]">▼</span>
            </Link>
          </li>
          <li className="relative">
            <Link to="/audio-book" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">Audio Book</Link>
          </li>
          <li className="relative">
            <Link to="/how-we-work" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">How We Work</Link>
          </li>
          <li className="relative">
            <Link to="/contact" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2] font-tusker">Contact Us</Link>
          </li>
        </ul>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
        @media (max-width: 1024px) {
          .tablet\\:gap-\\[2px\\] {
            gap: 2px;
          }
        }
      `}</style>
    </nav>
  );
}