import React from 'react';
import { motion } from 'framer-motion';
import whyChooseUsImage from '../assets/Images/WhyChooseUs-1.webp';
import whyChooseUsImage2 from '../assets/Images/WhyChooseUs-2.webp';

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            WHY <span className="text-purple-600">CHOOSE US?</span>
          </motion.h1>
        </motion.div>

        {/* First Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-gray-900 mb-3 uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Expertise and<br />Professionalism
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Our team comprises highly skilled professionals with years of experience in their respective fields. We maintain strict adherence to excellence in everything we undertake. With deep expertise, we ensure quality work with the highest standards of accuracy, professionalism, and reliability.
              </motion.p>
            </motion.div>

            {/* Tailored Approach Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-gray-900 mb-3 uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Tailored and Personalized<br />Approach
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                We understand that each client is unique with distinct needs and goals. Our customized solutions are designed with you in mind. We collaborate closely with you to understand your objectives and challenges, ensuring our services are aligned with your vision. Our personalized approach guarantees relevancy and efficacy tailored from the ground up.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src={whyChooseUsImage} 
                alt="Why Choose Us - Expertise and Professionalism" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Image */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src={whyChooseUsImage2} 
                alt="Why Choose Us - Attention to Detail and Confidentiality" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Attention to Detail Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-gray-900 mb-3 uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Attention to Detail and<br />Accuracy
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-sm lg:text-lg text-gray-600"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                We believe excellence lies in meticulous attention to detail. Every piece of work undergoes thorough scrutiny and refinement to ensure the highest level of accuracy and precision. Our rigorous quality control processes mean you receive flawless results that meet and exceed expectations consistently.
              </motion.p>
            </motion.div>

            {/* Confidentiality Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-gray-900 mb-3 uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Confidentiality and Privacy
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-600"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Your privacy and security are our utmost priorities. We implement stringent confidentiality protocols and maintain the highest standards of data protection. All information is safeguarded with advanced security measures. Your trust means everything to us, and we ensure that your sensitive data is handled with complete discretion and never shared with third parties without explicit consent.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}