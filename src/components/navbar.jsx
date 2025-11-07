import React, { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
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
            <a href="#home" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">HOME</a>
          </li>
          <li className="relative">
            <a href="#about" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">About Us</a>
          </li>
          <li className="relative">
            <a href="#services" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]" onClick={(e) => { e.preventDefault(); toggleDropdown('services'); }}>
              Our Services <span className="text-[10px] ml-[4px]">▼</span>
            </a>
            {openDropdown === 'services' && (
              <ul className="absolute top-full left-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[4px] list-none p-[8px_0] min-w-[200px] z-[1000] animate-fadeIn sm:static sm:shadow-none sm:bg-[rgba(255,255,255,0.1)] sm:rounded-none">
                <li><a href="#service1" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Service 1</a></li>
                <li><a href="#service2" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Service 2</a></li>
                <li><a href="#service3" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Service 3</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <a href="#book-marketing" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">Book Marketing</a>
          </li>
          <li className="relative">
            <a href="#book-publishing" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">Book Publishing</a>
          </li>
          <li className="relative">
            <a href="#ghostwriting" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]" onClick={(e) => { e.preventDefault(); toggleDropdown('ghostwriting'); }}>
              Ghostwriting <span className="text-[10px] ml-[4px]">▼</span>
            </a>
            {openDropdown === 'ghostwriting' && (
              <ul className="block absolute top-full left-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[4px] list-none p-[8px_0] min-w-[200px] z-[1000] animate-fadeIn sm:static sm:shadow-none sm:bg-[rgba(255,255,255,0.1)] sm:rounded-none">
                <li><a href="#ghost1" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Fiction Writing</a></li>
                <li><a href="#ghost2" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Non-Fiction Writing</a></li>
                <li><a href="#ghost3" className="block p-[10px_20px] md:p-[12px_30px] text-[#333] no-underline text-[14px] transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#8E2DE2] sm:text-white sm:hover:bg-[rgba(255,255,255,0.2)] sm:hover:text-white">Biography Writing</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <a href="#audio-book" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">Audio Book</a>
          </li>
          <li className="relative">
            <a href="#how-we-work" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">How We Work</a>
          </li>
          <li className="relative">
            <a href="#contact" className="block text-white no-underline p-[16px_18px] md:p-[14px_12px] xs:p-[12px_15px] text-[14px] md:text-[13px] xs:text-[12px] font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer hover:bg-white hover:text-[#8E2DE2]">Contact Us</a>
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