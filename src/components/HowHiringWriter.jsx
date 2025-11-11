import React from 'react';
import { motion } from 'framer-motion';
import serviceImage from '../assets/Images/Service-S2.webp';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';

export default function BiographyWriterCard() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 relative">
      {/* Decorative Element - Top Right */}
      <motion.div
        className="
          absolute pointer-events-none z-0
          top-[-120px] right-[-20px] 
          sm:top-[-100px] sm:right-[-10px]
          md:top-[-150px] md:right-[-40px]
          lg:top-[-175px] lg:right-[-29px]
          h-[180px] w-auto
          sm:h-[250px]
          md:h-[350px]
          lg:h-[500px]
        "
        initial={{ opacity: 0, x: 150, y: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={halfCircleGradient} alt="" className="h-full w-auto object-cover block" />
      </motion.div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content Section */}
            <motion.div 
              className="p-4 sm:p-8 lg:py-14 flex flex-col justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1 
                className="text-2xl sm:text-2xl lg:text-3xl font-extrabold mb-2 text-gray-900 uppercase"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                How Hiring Biography Writers Can <br />Light Up <br /> Your Achievements
              </motion.h1>
              
              <div className="space-y-2 text-gray-700 text-sm sm:text-sm pt-1">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Hire a writer for a biography if you think you have a success story that other
                  individuals can benefit from. A person learns many things as he lives through his
                  life. However, engaging biography writers for hire can help articulate your
                  personal experiences and understanding, offering valuable insights that can
                  assist other people in coping with life.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  We have experts who are willing to write your biography. We’ll preserve your
                  knowledge, and share your learned lessons to inspire and help other individuals
                  out there.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Whether you wish to share your life's tragedies and how you coped with
                  troubles, or want to relay your achievements throughout the course of your life,
                  we can help! We'll use storytelling to share your thoughts and ideas most
                  compellingly. With our creative and powerful words, we can ensure the world
                  won't forget about you!
                </motion.p>
              </div>
            </motion.div>
            
            {/* Right Image Section */}
            <motion.div 
              className="relative flex items-center justify-center order-1 lg:order-2 p-4 sm:p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src={serviceImage} 
                alt="Service" 
                className="
                  w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]
                  h-auto object-contain rounded-lg shadow-md
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}