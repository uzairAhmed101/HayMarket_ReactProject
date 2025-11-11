import React from 'react';
import { motion } from 'framer-motion';
import halfCircleGradient from '../assets/Images/half_cicle_gradient (1).png';

export default function BiographyNichesSection() {
  const niches = [
    'Public Figure',
    'Executive Biography',
    'Personal Biography',
    'Portrait Biography',
    'Intellectual Biography'
  ];

  return (
    <div className="bg-white py-6 px-2 sm:py-8 sm:px-4 md:py-12 md:px-8 relative">
      {/* Decorative elements */}
      <motion.div 
        className="
          absolute z-0 pointer-events-none
          -top-[200px] -left-[80px]
          sm:-top-[200px] sm:-left-[80px]
          md:-top-[200px] md:-left-[80px]
          h-[180px] sm:h-[200px] md:h-[100%]
          origin-center
        "
        style={{ rotate: '-25deg' }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-full w-auto object-cover" 
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-purple-600">CREATE A BIOGRAPHY FOR ANY ONE OF THE</span>
            <br />
            <span className="text-black">FOLLOWING NICHES</span>
          </motion.h1>
          
          <div className="max-w-3xl mx-auto space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Not sure which category your biography would fall under? Here's a quick review of what each niche entails.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our professional biography writing service can help you
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              create a powerful book on the following:
            </motion.p>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {niches.map((niche, index) => (
            <motion.div
              key={niche}
              className={`px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${
                niche === 'Public Figure'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 border-2 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {niche}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}