import React, { useState } from 'react';
import logo1 from '../assets/Images/LogoBar-1.png';
import logo2 from '../assets/Images/LogoBar-2.png';
import logo3 from '../assets/Images/LogoBar-3.png';
import logo4 from '../assets/Images/LogoBar-4.png';
import logo5 from '../assets/Images/LogoBar-5.png';
import logo6 from '../assets/Images/LogoBar-6.png';
import logo7 from '../assets/Images/LogoBar-7.png';

export default function PublisherLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden sm:p-[30px_15px] md:p-[30px_15px] lg:p-[25px_10px]">
      <div className="max-w-[930px] mx-auto relative">
        <div className="flex items-center justify-center py-[20px] overflow-hidden">
          <div className={`flex animate-slide ${isHovered ? 'paused' : ''}`}>
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center mx-6 transition-all duration-300 ease-in-out h-[30px] hover:scale-105 flex-shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img 
                  src={logo} 
                  alt={`Publisher Logo ${index + 1}`} 
                  className="max-w-[80px] max-h-[30px] h-auto w-auto object-contain filter brightness-0 saturate-100"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Purple decorative element */}
        <div className="absolute right-[-100px] top-[50%] -translate-y-[50%] w-[300px] h-[200px] rounded-[50%_0%_50%_50%] opacity-30 blur-[40px] pointer-events-none md:w-[250px] md:h-[150px] md:right-[-80px] lg:w-[200px] lg:h-[120px] lg:right-[-60px]"></div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}