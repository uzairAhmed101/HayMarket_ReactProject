import React from 'react';
import { motion } from 'framer-motion';
import serviceImage from '../assets/Images/Service-S2.webp';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';

export default function BiographyWriterCard() {
  return (
    <div className="min-h-screen p-10 relative">
      {/* Decorative Element - Top Right */}
      <motion.div
        className="absolute pointer-events-none z-0 top-[-175px] right-[-29px] h-[500px] w-auto md:right-[-60px] sm:right-[-18px] xs:right-[-18px] sm:top-[-136px] xs:top-[-125px] md:h-[500px] sm:h-[80%] xs:h-[60%]"
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
      <div className=" mx-auto">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content Section */}
            <div className="p-6 sm:p-12 lg:py-14 flex flex-col justify-center order-2 lg:order-1">
              <h1 className="text-2xl font-extrabold text-gray-900 mb-3 uppercase">
                How Hiring Biography Writers <br /> Can Light Up <br />Your Achievements
              </h1>
              
              <div className="space-y-2 text-gray-700 text-sm pt-2">
                <p>
                  Hire a writer for a biography if you think you have a success story that other
                  individuals can benefit from. A person learns many things as he lives through his
                  life. However, engaging biography writers for hire can help articulate your
                  personal experiences and understanding, offering valuable insights that can
                  assist other people in coping with life.
                </p>
                
                <p>
                  We have experts who are willing to write your biography. We’ll preserve your
                  knowledge, and share your learned lessons to inspire and help other individuals
                  out there.
                </p>
                
                <p>
                  Whether you wish to share your life's tragedies and how you coped with
                  troubles, or want to relay your achievements throughout the course of your life,
                  we can help! We'll use storytelling to share your thoughts and ideas most
                  compellingly. With our creative and powerful words, we can ensure the world
                  won't forget about you!
                </p>
              </div>
            </div>
            
            {/* Right Image Section - Simplified with just the image */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <img 
                src={serviceImage} 
                alt="Service" 
                className="w-100 h-100 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}