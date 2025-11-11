import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, CheckCircle } from 'lucide-react';
import halfCircleGradient from '../assets/Images/half_cicle_gradient (1).png';

export default function CoreValues() {
  const values = [
    {
      icon: BookOpen,
      title: "QUALITY FIRST",
      description: "We maintain the highest standards in editing, design, and production to ensure every book meets professional publishing excellence."
    },
    {
      icon: Users,
      title: "AUTHOR-CENTRIC",
      description: "Your success is our success. We provide personalized support and guidance throughout your entire publishing journey."
    },
    {
      icon: CheckCircle,
      title: "TRANSPARENCY",
      description: "No hidden fees or surprises. We believe in clear communication and honest business practices at every step."
    }
  ];

  return (
    <div className="w-full py-40 px-4 relative">
      {/* Decorative elements*/}
      <motion.div 
        className="absolute z-0 pointer-events-none top-[40px] sm:top-[-60px] md:-top-[120px] lg:-top-[200px] xl:-top-[180px] -left-1 sm:-left-2 md:-left-3 lg:-left-4 xl:-left-5 h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] origin-center"
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
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-purple-600">OUR CORE</span>{' '}
            <span className="text-gray-900">VALUES</span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-5 shadow-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-4 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-md shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-lg font-bold text-white text-center mb-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {value.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-300 text-xs leading-relaxed text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}