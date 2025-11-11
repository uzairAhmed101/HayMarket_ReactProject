import React from 'react';
import { motion } from 'framer-motion';
import waveGradient from '../assets/Images/wave_gradient.png';

const ContactUs_Location = () => {
  return (
    <div className="w-full flex justify-center mt-10 relative">
      {/* Decorative wave element */}
      <motion.div 
        className="absolute pointer-events-none z-0 top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] xl:top-[-140px] right-[-30px] sm:right-[-40px] md:right-[-50px] lg:right-[-60px] xl:right-[-70px] h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] xl:h-[100%] w-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img 
          src={waveGradient} 
          alt="" 
          className="h-[45%] sm:h-[55%] md:h-[65%] lg:h-[75%] xl:h-[85%] 2xl:h-[95%] w-auto object-cover" 
        />
      </motion.div>
      
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg relative z-10" style={{ height: '400px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.109977109749!2d67.0766776!3d24.791687399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5358d2b1e3%3A0x6861d64394c01004!2sSavTech%20Digital!5e0!3m2!1sen!2s!4v1762802156497!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs_Location;