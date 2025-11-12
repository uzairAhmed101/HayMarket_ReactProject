import React from 'react';
import { motion } from 'framer-motion';
import serviceImage from '../assets/Images/Service-S4.png';

export default function BioWritingHeroSection() {
  return (
    <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[540px] w-full overflow-hidden">
      {/* Background Image - Full coverage without cutting */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img 
          src={serviceImage} 
          alt="Service Background" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[540px] px-2 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto py-8 sm:py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-2xl sm:text-2xl lg:text-3xl font-extrabold mb-2 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            PROFESSIONAL BIO WRITING SERVICES BY <br /> EXPERT
            <br />
            BIO WRITERS!
          </motion.h1>
          
          <motion.p 
            className="text-white text-xs sm:text-sm md:text-base mb-6 sm:mb-8 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            With our professional bio writing services we guarantee that your biography book will become the bestselling.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
            <motion.button 
              className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Chat
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}