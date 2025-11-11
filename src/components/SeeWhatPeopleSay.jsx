import React from 'react';
import { motion } from 'framer-motion';
// Keep laptop image imports
import laptopImage from '../assets/Images/laptop-front-adhesive-notes-stucked-wall 2.webp';
import gifVideo from '../assets/Videos/HayMarket-all.gif';

export default function Section7() {
  const testimonials = [
    {
      quote: '"A terrific piece of praise"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    },
    {
      quote: '"A fantastic bit of feedback"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    },
    {
      quote: '"A genuinely glowing review"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    }
  ];

  // Animation variants for the testimonial cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      x: 0,
      y: 200
    },
    show: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 relative flex flex-col items-center justify-center">
        <div className="text-center mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px]">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-[#1a1a1a] tracking-[0.5px] font-tusker">
            SEE WHAT PEOPLE SAY <span className="text-[#a020f0]">ABOUT US</span>
          </h1>
        </div>

        {/* Testimonial Cards Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[15px] sm:gap-[15px] md:gap-[25px] lg:gap-[30px] mb-20 sm:mb-20 md:mb-60 lg:mb-80 w-full max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-[15px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-300 relative hover:translate-y-[-8px] hover:shadow-[0_12px_30px_rgba(160,32,240,0.2)]"
              variants={item}
              transition={{ delay: index * 0.1 }}
            >
              <div className=" bg-gradient-to-r from-[#6c07a3] to-[#460666] p-[15px] sm:p-[10px] md:p-[18px] lg:p-[25px] text-white relative min-h-[120px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col justify-between">
                <div className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-semibold leading-[1.5] text-white mb-[10px] sm:mb-[10px] lg:mb-[15px] italic font-tusker">
                  {testimonial.quote}
                </div>
                <div className="flex gap-2.5 sm:gap-2.5 lg:gap-3 items-center">
                  <div className="w-9 h-9 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center text-[18px] sm:text-[18px] lg:text-[20px] flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="text-[12px] sm:text-[12px] lg:text-[13px]">
                    <span className="font-bold text-white block text-[12px] font-tusker">
                      {testimonial.name}
                    </span>
                    <span className="text-[10px] sm:text-[10px] lg:text-[11px] text-[rgba(255,255,255,0.9)] block">
                      {testimonial.description}
                    </span>
                  </div>
                </div>
                <div className="absolute top-[15px] right-[15px] w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] bg-[rgba(255,255,255,0.2)] rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Laptop Image - Hidden on small devices, visible from md breakpoint */}
        <div className="hidden md:block absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[75%] lg:w-full max-w-3xl">
          <div className="relative">
            <img 
              src={laptopImage} 
              alt="Laptop with adhesive notes" 
              className="w-full h-auto"
            />
            {/* Replace the logo image with GIF */}
            <img 
              src={gifVideo} 
              alt="Haymarket Publishers Animation" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[180px] lg:h-[220px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}