import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Shield, Target } from 'lucide-react';
import objectsImage from '../assets/Images/OBJECTS.webp';
import halfCircleGradient from '../assets/Images/wave_gradient.png';

export default function PublicFigureBiography() {
  const aspects = [
    { icon: Award, text: 'Real-life incidents of a public figure' },
    { icon: TrendingUp, text: 'Success stories and achievements' },
    { icon: Shield, text: 'Life difficulties you had to overcome as a public figure' },
    { icon: Target, text: 'Milestones achieved.' }
  ];

  return (
    <div className="min-h-screen bg-white py-6 px-2 sm:py-10 sm:px-4 md:py-16 md:px-8 relative">
      {/* Decorative elements */}
      <motion.div 
        className="
          absolute z-0 pointer-events-none
          -bottom-[10px] right-0
          sm:-bottom-[10px] sm:right-0
          md:-bottom-[10px] md:right-0
          h-[180px] sm:h-[260px] md:h-[50%]
          origin-center
        "
        style={{ rotate: '0deg' }}
        initial={{ opacity: 0, x: 100 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content Section */}
          <motion.div 
            className="flex flex-col justify-center order-2 lg:order-1 px-2 sm:px-4 md:px-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 
              className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-gray-900 uppercase"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Public Figure Biography
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 text-sm sm:text-base mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Are you a celebrity, social media influencer, athlete, author, politician, or any 
              other public figure who wishes to share their experiences and achievements with 
              the world so other individuals can learn from them? If yes, then a public figure 
              biography is the right pic for you!
            </motion.p>
            
            <motion.p 
              className="text-gray-900 font-semibold text-base sm:text-lg mb-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              A public figure biography has the following aspects:
            </motion.p>
            
            <div className="space-y-2 mb-4">
              {aspects.map((aspect, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <aspect.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{aspect.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Thus, if you want to leave a legacy behind and wish to be remembered until 
              much later, our team can do it for you! Contact us today and get a chance to 
              publish a bestselling public figure biography!
            </motion.p>
          </motion.div>
          
          {/* Right Section - Image */}
          <motion.div 
            className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src={objectsImage} 
              alt="Objects" 
              className="
                w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
                h-auto object-contain
              "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}