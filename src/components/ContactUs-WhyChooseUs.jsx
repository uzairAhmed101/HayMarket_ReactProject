import React from 'react';
import { motion } from 'framer-motion';
import halfCircleGradient from '../assets/Images/half_cicle_gradient (1).png';

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "24/7 SUPPORT",
      description: "Our dedicated team is available around the clock to answer your questions and provide assistance."
    },
    {
      number: "02",
      title: "EXPERT TEAM",
      description: "Work with industry professionals who understand the publishing landscape inside and out."
    },
    {
      number: "03",
      title: "QUICK RESPONSE",
      description: "We value your time and ensure prompt responses to all inquiries within 24 hours."
    },
    {
      number: "04",
      title: "FREE CONSULTATION",
      description: "Get a complimentary consultation to discuss your project and explore the best solutions."
    }
  ];

  return (
    <div className="bg-white py-20 px-20 relative">
      {/* Decorative elements*/}
      <motion.div 
        className="absolute z-0 pointer-events-none top-[100px] sm:top-[0px] md:-top-[60px] lg:-top-[140px] xl:-top-[120px] -left-1 sm:-left-2 md:-left-3 lg:-left-4 xl:-left-5 h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] origin-center"
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
      
      <motion.div 
        className="max-w-6xl mx-auto text-center m-20 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-purple-600">WHY</span>
          <span className="text-black"><br />CHOOSE US</span>
        </motion.h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-5 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-3xl font-bold text-purple-600">
                {feature.number}
              </span>
            </motion.div>
            <motion.h3 
              className="text-purple-600 font-bold text-sm mb-2 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className="text-gray-700 text-xs leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}