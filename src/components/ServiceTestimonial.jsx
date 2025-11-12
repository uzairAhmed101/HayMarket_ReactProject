import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import testimonialImage1 from '../assets/Images/testimonial-1.webp';
import testimonialImage2 from '../assets/Images/testimonial-2.webp';
import bookImage1 from '../assets/Images/beautiful-1.webp';
import bookImage2 from '../assets/Images/beautiful-2.webp';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "MORWENNA BLACKWOOD",
      image: testimonialImage1,
      text: "I spent 10 years in the tech space and had a few not-so-great ideas to share with the world. Fortunately, I hired guys at Gnome who produced an outstanding book for me in the space of six months",
      bookImage: bookImage1,
      bookTitle: "UNDERRATED"
    },
    {
      id: 2,
      name: "STEVEN WRIGHT",
      image: testimonialImage2,
      text: "I wanted a several short story books for my children and nieces with a few drawings. I wanted to keep things simple and make it an enjoyable read for the children. After several mealy attempts, I finally got in touch with Gnome Book Writing. Now the kids get to enjoy their favorite books!",
      bookImage: bookImage2,
      bookTitle: "Harold"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-10 sm:py-10 px-20 sm:px-20 md:px-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-8 sm:mb-12 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          TESTIMONIALS!
        </motion.h1>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden min-h-[320px] sm:min-h-[380px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Purple gradient accent */}
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-40 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-2xl opacity-15 -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Combined Content */}
                <div className="flex flex-col md:flex-row items-center mb-3 sm:mb-4 md:mb-5">
                  {/* Left Column - Author Info and Text */}
                  <motion.div 
                    className="flex-1 w-full md:w-auto md:pr-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Author Info */}
                    <div className="flex items-center mb-2 sm:mb-3">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover shadow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop';
                        }}
                      />
                      <motion.h3 
                        className="text-base sm:text-lg font-black text-purple-600 tracking-tight ml-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                    </div>
                    
                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed w-full"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {testimonial.text}
                    </motion.p>
                  </motion.div>

                  {/* Right Column - Book Image */}
                  <motion.div 
                    className="mt-4 sm:mt-6 md:mt-0 md:ml-4 lg:ml-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-md blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                      <div className="relative">
                        <motion.img
                          src={testimonial.bookImage}
                          alt={testimonial.bookTitle}
                          className="w-36 sm:w-40 md:w-44 lg:w-48 h-auto transform hover:scale-105 transition duration-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                          viewport={{ once: true, amount: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop';
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Star Rating */}
                <motion.div 
                  className="flex gap-1 sm:gap-2 justify-start mt-2 sm:mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}