import React from 'react';
import { motion } from 'framer-motion';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';

export default function AboutHaymarket() {
  return (
    <div className="w-full min-h-screen bg-white px-20 py-10 relative">
      {/* Decorative Element - Top Right */}
      <motion.div
        className="
          absolute pointer-events-none z-0
          top-[0px] right-[-20px] 
          sm:top-[20px] sm:right-[-10px]
          md:top-[0px] md:right-[-40px]
          lg:top-[-25px] lg:right-[-29px]
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
      
      {/* Header Section */}
      <div className="w-full mx-auto px-0 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 
            className="text-2xl sm:text-2xl lg:text-3xl font-extrabold mb-2 text-purple-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            ABOUT HAYMARKET PUBLISHERS
          </motion.h1>
          <motion.p 
            className="text-gray-700 text-sm max-w-2xl mx-auto px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Transforming aspiring authors into published successes since our inception. We're more than
            a publisher—we're your partner in bringing stories to life.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-purple-600">OUR</span>{' '}
              <span className="text-gray-900">STORY</span>
            </motion.h2>

            <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Haymarket Publishers was founded with a simple yet powerful vision: to democratize
                the publishing industry and give every author the opportunity to share their voice with
                the world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                What started as a small team of passionate publishing professionals has grown into
                a full-service publishing house that has helped thousands of authors achieve their
                dreams. We combine traditional publishing expertise with modern technology and
                innovative marketing strategies to ensure you book reaches its full potential.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Our commitment to authors goes beyond just printing books. We believe in building
                the most trusted names in the publishing industry. We don't just publish books—we
                build lasting relationships with our authors and help them navigate every step of their
                publishing journey.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <motion.img 
                src="/src/assets/Images/AboutUs-1.webp" 
                alt="About Haymarket Publishers" 
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optional: Add some breathing room at the bottom */}
      <div className="h-8 sm:h-12 lg:h-20"></div>
    </div>
  );
}