import React from 'react';
import { motion } from 'framer-motion';
// Keep laptop image imports
import laptopImage from '../assets/Images/laptop-front-adhesive-notes-stucked-wall 2.webp';
import laptopImage2 from '../assets/Images/Haymarket Publishers.png';

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
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="px-40 relative flex flex-col items-center justify-center">
        <div className="text-center mb-[50px] md:mb-[35px]">
          <h1 className="text-[36px] md:text-[32px] sm:text-[28px] font-bold text-[#1a1a1a] tracking-[0.5px] font-tusker">
            SEE WHAT PEOPLE SAY <span className="text-[#a020f0]">ABOUT US</span>
          </h1>
        </div>

        {/* Testimonial Cards Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[25px] sm:gap-[15px] mb-80"
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
              <div className="bg-gradient-to-br from-[#9020f0] to-[#a020f0] p-[25px] sm:p-[10px] md:p-[18px] text-white relative min-h-[120px] sm:min-h-[85px] md:min-h-[100px] flex flex-col justify-between">
                <div className="text-[15px] md:text-[10px] sm:text-[13px] font-semibold leading-[1.5] text-white mb-[15px] sm:mb-[10px] italic font-tusker">
                  {testimonial.quote}
                </div>
                <div className="flex gap-3 sm:gap-2.5 items-center">
                  <div className="w-[40px] h-[40px] sm:w-9 sm:h-9 rounded-full bg-[rgba(255,255,255,0.3)] flex items-center justify-center text-[20px] sm:text-[18px] flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="text-[13px] sm:text-[12px]">
                    <span className="font-bold text-white block text-[12px] font-tusker">
                      {testimonial.name}
                    </span>
                    <span className="text-[11px] sm:text-[10px] text-[rgba(255,255,255,0.9)] block">
                      {testimonial.description}
                    </span>
                  </div>
                </div>
                <div className="absolute top-[15px] right-[15px] w-[30px] h-[30px] bg-[rgba(255,255,255,0.2)] rounded-full"></div>
              </div>
              <div className="p-[25px] sm:p-[6px] md:p-[18px] bg-[#f9f3ff] min-h-[80px] sm:min-h-[70px] md:min-h-[60px]">
                <div className="text-[#666] text-[13px] sm:text-[12px] leading-[1.6]">
                  Additional feedback and detailed review content goes here to complete the testimonial experience.
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Laptop Image - Same position but without overflow */}
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-3xl">
          <div className="relative">
            <img 
              src={laptopImage} 
              alt="Laptop with adhesive notes" 
              className="w-full h-auto"
            />
            <img 
              src={laptopImage2} 
              alt="Haymarket Publishers Logo" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[180px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}