import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactHeaderBar() {
  return (
    <div className="bg-[#3A0368] py-2 px-10 sm:py-3 sm:px-5 md:py-4 md:px-10 lg:py-5 lg:px-10 border-t border-b border-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center">
        <motion.div 
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3,
              delay: 0.1,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          </motion.div>
          <div className="flex flex-col gap-0 sm:gap-0.5 md:gap-1">
            <div className="text-white text-sm sm:text-sm md:text-sm lg:text-sm font-bold uppercase tracking-[0.5px] opacity-90">
              CALL NOW
            </div>
            <div className="text-white text-sm sm:text-sm md:text-sm lg:text-base font-medium">
              (801)-856-7738
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3,
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          </motion.div>
          <div className="flex flex-col gap-0 sm:gap-0.5 md:gap-1">
            <div className="text-white text-sm sm:text-sm md:text-sm lg:text-sm font-bold uppercase tracking-[0.5px] opacity-90">
              MAIL US AT
            </div>
            <div className="text-white text-sm sm:text-sm md:text-sm lg:text-base font-medium">
              info@hymnmarket.com
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          </motion.div>
          <div className="flex flex-col gap-0 sm:gap-0.5 md:gap-1">
            <div className="text-white text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.75rem] font-bold uppercase tracking-[0.5px] opacity-90">
              FIND US AT
            </div>
            <div className="text-white text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.9rem] font-medium whitespace-normal break-words">
              1090 Montauk Hwy # 300, New York, NY 10158, United States
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}