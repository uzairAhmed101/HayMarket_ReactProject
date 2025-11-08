import React, { useState } from 'react';
import publishingIcon from '../assets/Images/Services Publishing Icon 1 (1).png';
import publishingIcon2 from '../assets/Images/Services Publishing Icon 1 (2).png';
import publishingIcon3 from '../assets/Images/Services Publishing Icon 1 (3).png';
import halfCircleGradient from '../assets/Images/half_cicle_gradient (1).png';

export default function ServicesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      icon: publishingIcon,
      title: "PUBLISHING",
      description: "Haymarket offers full professional book publishing services. We'll work with our modern world-class. Our team provides guidance at every stage of the process. Get your positive experience and a smooth publication process. You'll also feel comfortable with us to expand your book's visibility and connect."
    },
    {
      icon: publishingIcon2,
      title: "MARKETING STRATEGY",
      description: "Letting the readers know what you have to offer will boost your book sales. We have a team of digital marketers who will cater the smallest details of book publishing. After completion of all process, aspect of publishing plays the most important role to maximize the sales."
    },
    {
      icon: publishingIcon3,
      title: "FORMATTING AND DESIGNING",
      description: "Letting the readers know what you have to offer will boost your book sales. We have a team of digital marketers who will cater the smallest details of book publishing. After completion of all process of book publishing, comes the element of formatting and designing."
    },
    {
      icon: publishingIcon3,
      title: "WEBSITE DESIGNING",
      description: "The brands have gone to another level. To reach the top, you need to have a brand which is backed with exclusive quality data. We have the best team, who are experts in format. To be an expert brand."
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative w-full px-16 py-[60px] lg:px-5 md:px-[15px] sm:px-[10px] sm:py-[40px]">
      {/* Decorative elements*/}
      <div 
        className="absolute z-0 pointer-events-none -top-[415px] -left-1 h-[89%] origin-center"
        style={{ rotate: '-25deg' }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-[83%] w-auto object-cover" 
        />
      </div>

      <div className="mx-auto relative z-10 w-full py-4 ">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-6xl font-black mb-5 text-black lg:text-5xl md:text-4xl sm:text-3xl font-tusker">
            OUR <span className="text-[#8E2DE2]">SERVICES</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#555] max-w-[800px] mx-auto lg:text-[14px] md:text-[13px] sm:text-[12px]">
            Our team offers professional book publishing services. We'll work with our team of editors, 
            designers and formats. From creative storytelling to hard-work about 60/60+, we cover it all. 
            Here are some of our most popular and frequently availed writing services:
          </p>
        </div>

        {/* Services Cards */}
        <div className="overflow-hidden mb-10 w-full overflow-visible">
          <div 
            className="flex gap-5 transition-transform duration-300 ease-in-out justify-start pl-28"
            style={{ transform: `translateX(-${activeSlide * 25}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[300px] h-[300px] bg-gradient-to-r from-[#6c07a3] to-[#460666] rounded-[50px_22px_50px_22px] p-[25px] text-white relative flex flex-col"
              >
                {/* Top-left decorative div */}
                <div className="absolute -top-1 -left-1 w-[35px] h-[35px] bg-black rounded-[100%_0%_0%_100%/100%_98%_2%_0%] -z-10"></div>
                
                <div className="ml-3 lg:ml-0 h-[55px] flex items-center">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} Icon`} 
                    className="w-[70%] h-full object-contain md:w-[25px] md:h-[25px]" 
                  />
                </div>
                
                <h3 className="text-sm font-bold mb-[15px] uppercase tracking-widest lg:text-lg md:text-base font-tusker">
                  {service.title}
                </h3>
                
                <p className="text-[10px] leading-relaxed mb-[25px] flex-grow md:text-[9px] sm:text-[8px]">
                  {service.description}
                </p>
                
                <button className="bg-white text-[#8E2DE2] border-none px-[14px] py-[10px] rounded-full text-xs font-semibold cursor-pointer self-center mt-auto hover:shadow-lg hover:shadow-white/30 transition-all duration-300 font-tusker">
                  Learn More
                </button>
                
                {/* Bottom-right decorative div */}
                <div className="absolute -bottom-1 -right-1 w-[35px] h-[35px] bg-black -z-10 rounded-br-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3 mt-[30px]">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full border-none cursor-pointer transition-colors duration-300 ${
                index === 0 
                  ? 'w-8 bg-[#8E2DE2]' 
                  : activeSlide === index 
                    ? 'w-3 bg-[#8E2DE2]' 
                    : 'w-3 bg-[#d0d0d0]'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}