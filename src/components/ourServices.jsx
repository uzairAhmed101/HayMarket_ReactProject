import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      description: "Haymarket offers full professional book publishing services. We'll work with our modern world-class. Our team provides guidance at every stage of the process. Get your positive experience and a smooth publication process."
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

  // Get slide percentage based on screen size
  const getSlidePercentage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 85;
      if (window.innerWidth < 1024) return 50;
    }
    return 25;
  };

  return (
    <section className="relative w-full px-[10px] sm:px-[10px] md:px-[15px] lg:px-5 xl:px-16 py-[40px] sm:py-[40px] md:py-[50px] lg:py-[60px]">
      {/* Decorative elements*/}
      <motion.div 
        className="absolute z-0 pointer-events-none -top-[120px] sm:-top-[180px] md:-top-[240px] lg:-top-[320px] xl:-top-[400px] -left-1 sm:-left-2 md:-left-3 lg:-left-4 xl:-left-5 h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] origin-center"
        style={{ rotate: '-25deg' }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-[70%] sm:h-[75%] md:h-[80%] lg:h-[85%] xl:h-[90%] w-auto object-cover" 
        />
      </motion.div>

      <div className="mx-auto relative z-10 w-full py-4">
        {/* Header */}
        <div className="text-center mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[60px]">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-black font-tusker">
            OUR <span className="text-[#8E2DE2]">SERVICES</span>
          </h2>
          <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-sm leading-relaxed text-[#555] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto px-2 sm:px-0">
            Our team offers professional book publishing services. We'll work with our team of editors, 
            designers and formats. From creative storytelling to hard-work about 60/60+, we cover it all. 
            Here are some of our most popular and frequently availed writing services:
          </p>
        </div>

        {/* Services Cards */}
        <div className="overflow-hidden mb-6 sm:mb-8 lg:mb-10 w-full sm:overflow-visible">
          <div 
            className="flex gap-3 sm:gap-4 lg:gap-5 transition-transform duration-300 ease-in-out justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-28"
            style={{ transform: `translateX(-${activeSlide * getSlidePercentage()}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] h-[280px] sm:h-[290px] lg:h-[300px] bg-gradient-to-r from-[#6c07a3] to-[#460666] rounded-[50px_22px_50px_22px] p-[20px] sm:p-[22px] lg:p-[25px] text-white relative flex flex-col"
              >
                {/* Top-left decorative div */}
                <div className="absolute -top-1 -left-1 w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] bg-black rounded-[100%_0%_0%_100%/100%_98%_2%_0%] -z-10"></div>
                
                <div className="h-[45px] sm:h-[50px] lg:h-[55px] flex justify-start items-start w-full mb-3">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} Icon`} 
                    className="h-full object-contain self-start" 
                  />
                </div>
                
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm font-bold mb-[10px] sm:mb-[12px] lg:mb-[15px] uppercase tracking-widest font-tusker">
                  {service.title}
                </h3>
                
                <p className="text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] leading-relaxed mb-[20px] sm:mb-[22px] lg:mb-[25px] flex-grow">
                  {service.description}
                </p>
                
                <button className="bg-white text-[#8E2DE2] border-none px-[12px] sm:px-[14px] py-[8px] sm:py-[10px] rounded-full text-[10px] sm:text-xs font-semibold cursor-pointer self-center mt-auto hover:shadow-lg hover:shadow-white/30 transition-all duration-300 font-tusker">
                  Learn More
                </button>
                
                {/* Bottom-right decorative div */}
                <div className="absolute -bottom-1 -right-1 w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] bg-black -z-10 rounded-br-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-[20px] sm:mt-[25px] lg:mt-[30px]">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-2 sm:h-3 rounded-full border-none cursor-pointer transition-colors duration-300 ${
                index === 0 
                  ? 'w-6 sm:w-8 bg-[#8E2DE2]' 
                  : activeSlide === index 
                    ? 'w-2 sm:w-3 bg-[#8E2DE2]' 
                    : 'w-2 sm:w-3 bg-[#d0d0d0]'
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