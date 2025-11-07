import React from 'react';
import { motion } from 'framer-motion';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';
import section2Img from '../assets/Images/Section2-img.webp';

export default function StorySection() {
  return (
    <section className="bg-white p-20 relative box-border">
      {/* Decorative Element - Top Left */}
      <motion.div
        className="absolute pointer-events-none z-0 top-[-175px] right-[-29px] h-[500px] w-auto md:right-[-60px] sm:right-[-18px] xs:right-[-18px] sm:top-[-136px] xs:top-[-125px] md:h-[500px] sm:h-4/5 xs:h-3/5"
        initial={{ opacity: 0, x: -200, y: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
        }}
        viewport={{ once: true, amount: 0.5, margin: '-100px 0px -100px 0px' }}
      >
        <img src={halfCircleGradient} alt="" className="h-[80%] w-auto object-cover block" />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 md:gap-12 sm:gap-10 xs:gap-10 items-center relative z-10">
        {/* Left - Image */}
        <div className="flex justify-center items-center relative">
          <div className="relative z-20 overflow-hidden rounded-2xl transform translate-y-[-20px]">
            <img
              src={section2Img}
              alt="Woman with phone"
              className="w-[350px] h-[450px] object-cover block md:w-[300px] md:h-[400px] sm:w-[260px] sm:h-[350px] xs:w-[220px] xs:h-[300px]"
            />
          </div>

          {/* Sparkles (if you want to keep them, though not in original JSX) */}
          {/* Uncomment if you add sparkle emojis or icons */}
          {/* <div className="sparkle sparkle-1 absolute text-3xl z-30 animate-twinkle" style={{ top: '10%', left: '5%' }}>✨</div>
          <div className="sparkle sparkle-2 absolute text-3xl z-30 animate-twinkle" style={{ bottom: '15%', left: '10%' }} style={{ animationDelay: '1s' }}>✨</div> */}
        </div>

        {/* Right - Content */}
        <div className="max-w-[600px] sm:max-w-full">
          <h2 className="text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-extrabold leading-tight mb-8">
            <span className="text-[#8E2DE2]">LET THE WORLD KNOW</span>
            <br />
            <span className="text-black">YOUR STORY</span>
          </h2>

          <p className="text-sm md:text-xs sm:text-xs xs:text-[13px] leading-relaxed mb-5 w-[400px]">
            In this era of digital media, anybody can become a world-famous being by just doing 
            what he does best. Authors use promotional tools that any individual or entity can 
            use. A story or anything can bring a person fame. Unlike earlier times, social media platforms have made life 
            craziest of all with space for all the hidden talent be it dance, music, goals, singers, 
            and artists.
          </p>

          <p className="text-sm md:text-xs sm:text-xs xs:text-[13px] leading-relaxed mb-8 w-[400px]">
            Contributing to the publishing industry, Haymarket is a platform that allows authors, 
            bloggers, and any person to publish their work. In earlier times, there were only a few ways 
            for the publishing of a book. All these processes used to take ages in earlier times, but 
            today, all one needs to do is learn how Kindle Publishing works and start the process. If 
            you were looking for a stage, this is it!
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white text-xs font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 whitespace-nowrap w-auto xs:w-full">
              Start Publishing Now
            </button>
            <button className="bg-white text-[#8E2DE2] text-xs font-semibold py-3 px-7 border-2 border-[#8E2DE2] rounded-full hover:bg-[#8E2DE2] hover:text-white transition-colors duration-200 whitespace-nowrap w-auto xs:w-full">
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