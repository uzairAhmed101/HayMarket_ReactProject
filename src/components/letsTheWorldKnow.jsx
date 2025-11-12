import React from 'react';
import { motion } from 'framer-motion';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';
import section2Img from '../assets/Images/Section2-img.webp';

export default function StorySection() {
  return (
    <section className="bg-white px-[20px] py-10 sm:px-[20px] py-10 md:px-[20px] py-10 lg:px-20 py-10 relative box-border">
     {/* Decorative Element - Top Right */}
    <motion.div
      className="absolute pointer-events-none z-0 top-[-40px] sm:top-[-80px] md:top-[-120px] lg:top-[-160px] xl:top-[-200px] right-[-10px] sm:right-[-15px] md:right-[-15px] lg:right-[-15px] xl:right-[-15px] h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] w-auto"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={halfCircleGradient} alt="" className="h-[70%] sm:h-[75%] md:h-[80%] lg:h-[85%] xl:h-[90%] w-auto object-cover block" />
    </motion.div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-20 items-center relative z-10">
        {/* Left - Image */}
        <div className="flex justify-center items-center relative">
          <div className="relative z-20 overflow-hidden rounded-2xl transform translate-y-[-20px]">
            <img
              src={section2Img}
              alt="Woman with phone"
              className="w-[220px] h-[300px] xs:w-[220px] xs:h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] object-cover block"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="max-w-[600px] mx-auto lg:mx-0 px-4 sm:px-0 sm:max-w-full">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight font-tusker">
            <span className="text-[#8E2DE2]">LET THE WORLD KNOW</span>
            <br />
            <span className="text-black">YOUR STORY</span>
          </h2>

          <p className="text-gray-600 text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm leading-relaxed mb-5 w-full sm:w-full lg:w-[400px]">
            In this era of digital media, anybody can become a world-famous being by just doing 
            what he does best. Authors use promotional tools that any individual or entity can 
            use. A story or anything can bring a person fame. Unlike earlier times, social media platforms have made life 
            craziest of all with space for all the hidden talent be it dance, music, goals, singers, 
            and artists.
          </p>

          <p className="text-gray-600 text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm leading-relaxed mb-6 sm:mb-8 w-full sm:w-full lg:w-[400px]">
            Contributing to the publishing industry, Haymarket is a platform that allows authors, 
            bloggers, and any person to publish their work. In earlier times, there were only a few ways 
            for the publishing of a book. All these processes used to take ages in earlier times, but 
            today, all one needs to do is learn how Kindle Publishing works and start the process. If 
            you were looking for a stage, this is it!
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#8E2DE2] text-white text-xs font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 whitespace-nowrap w-full xs:w-full sm:w-auto font-tusker">
              Start Publishing Now
            </button>
            <button className="bg-white text-[#8E2DE2] text-xs font-semibold py-3 px-7 border-2 border-[#8E2DE2] rounded-full hover:bg-[#8E2DE2] hover:text-white transition-colors duration-200 whitespace-nowrap w-full xs:w-full sm:w-auto font-tusker">
              Chat with Us
            </button>
          </div>
        </div>
      </div>

      {/* Twinkle Animation for Sparkles (if used) */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}