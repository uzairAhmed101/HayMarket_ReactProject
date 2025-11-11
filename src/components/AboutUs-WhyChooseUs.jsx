import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Globe, TrendingUp } from 'lucide-react';
import aboutUsImage from '../assets/Images/AboutUs-2.webp';
import waveGradient from '../assets/Images/wave_gradient.png';

export default function WhyChooseHaymarket() {
  const features = [
    {
      icon: Zap,
      title: "END-TO-END SERVICES",
      description: "From manuscript editing to marketing, we handle every aspect of publishing so you can focus on writing."
    },
    {
      icon: Award,
      title: "INDUSTRY EXPERTISE",
      description: "Our team consists of seasoned publishing professionals with decades of combined experience in the industry."
    },
    {
      icon: Globe,
      title: "GLOBAL DISTRIBUTION",
      description: "Your book will be available on major platforms worldwide, including Amazon, Barnes & Noble, and more."
    },
    {
      icon: TrendingUp,
      title: "COMPETITIVE ROYALTIES",
      description: "We offer some of the most competitive royalty rates in the industry because we believe authors deserve fair compensation."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 relative">
      {/* Decorative wave element */}
      <motion.div 
        className="absolute pointer-events-none z-0 top-[-200px] sm:top-[-220px] md:top-[-240px] lg:top-[-260px] xl:top-[-280px] right-[-30px] sm:right-[-40px] md:right-[-50px] lg:right-[-60px] xl:right-[-70px] h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] xl:h-[100%] w-auto"
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 items-center">
          {/* Left Column - Image Only */}
          <motion.div 
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img 
              src={aboutUsImage} 
              alt="About Us" 
              className="w-full h-full md:w-[450px] md:h-[450px] object-cover"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-purple-600">WHY CHOOSE</span>{' '}
              <span className="text-gray-900">HAYMARKET</span>
            </motion.h2>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-purple-600 mb-1 group-hover:text-purple-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

           
       
          </motion.div>
        </div>
      </div>
    </div>
  );
}