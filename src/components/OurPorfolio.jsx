import React, { useState } from 'react';
import { motion } from 'framer-motion';
import beautifulImage1 from '../assets/Images/beautiful-1.webp';
import beautifulImage2 from '../assets/Images/beautiful-2.webp';
import beautifulImage3 from '../assets/Images/beautiful-3.webp';
import beautifulImage4 from '../assets/Images/beautiful-4.webp';
import beautifulImage5 from '../assets/Images/beautiful-5.webp';
import beautifulImage6 from '../assets/Images/beautiful-6.webp';
import beautifulImage7 from '../assets/Images/beautiful-7.webp';
import beautifulImage8 from '../assets/Images/beautiful-8.webp';
import beautifulImage9 from '../assets/Images/beautiful-9.webp';
import beautifulImage10 from '../assets/Images/beautiful-10.webp';
import halfCircleGradient from '../assets/Images/spring_gradient.png';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Fiction');

  const tabs = ['Fiction', 'Non-Fiction', 'Biography', 'Children', 'Informative'];

  const books = [
    { id: 1, title: 'Only the Beautiful', image: beautifulImage1, color: 'bg-orange-100' },
    { id: 2, title: 'Pomegranate', image: beautifulImage2, color: 'bg-teal-100' },
    { id: 3, title: 'Romantic Comedy', image: beautifulImage3, color: 'bg-pink-100' },
    { id: 4, title: 'The Midnight Laundry', image: beautifulImage4, color: 'bg-blue-100' },
    { id: 5, title: 'Camp Zero', image: beautifulImage5, color: 'bg-gray-100' },
    { id: 6, title: 'The Thing She Feared', image: beautifulImage6, color: 'bg-indigo-100' },
    { id: 7, title: 'Adelaide', image: beautifulImage7, color: 'bg-yellow-100' },
    { id: 8, title: 'Symphony', image: beautifulImage8, color: 'bg-green-100' },
    { id: 9, title: 'Truly Yours', image: beautifulImage9, color: 'bg-red-100' },
    { id: 10, title: 'The Hazards Handbook', image: beautifulImage10, color: 'bg-purple-100' }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop';
  };

  return (
    <div className="min-h-screen py-0 px-1 sm:px-1 lg:px-1 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute z-0 pointer-events-none top-[200px] left-[-200px] h-[600px] w-[600px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={halfCircleGradient} alt="" className="h-full w-full object-contain" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10 px-10 sm:px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-2 sm:mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-purple-600 uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Portfolio
          </motion.h1>

          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 sm:px-12 py-4 text-xs font-semibold transition-all duration-300 rounded-full min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Responsive Grid: 2 on small, 3 on medium, 4 on large, 5 on xl */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {books.map((book, index) => (
            <motion.div 
              key={book.id} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 5) }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded transition-all duration-300 transform hover:scale-105">
                {/* Book Cover */}
                <div className="aspect-[2/3]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain"
                    onError={handleImageError}
                  />
                </div>

                {/* Optional hover overlay */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}