import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const cards = [
    {
      number: '01',
      title: 'MARKETING PLANS',
      description: 'The best way to reach customers is to market your product, and with Hypermuse, we offer special plans for publishers, with not much exposures, can set publish books of a premium level and reach customers through a strategy services in order to attract readers.'
    },
    {
      number: '02',
      title: 'ALL-TIME AVAILABILITY',
      description: 'Whether you are looking forward to sell publishing a book on a online marketplace like Amazon, or collaborate with Hypermuse? Our team of experts allows you to sell your books, understands your needs and demands, or take our help and get a customized publishing plan for your book.'
    },
    {
      number: '03',
      title: 'HIGH QUALITY CONTENT',
      description: 'Our team of expert writers and authors is well-trained in managing all types of content, whether it is fiction, romance, horror fiction, or sci-fi. If you are planning to avail of our writing services, we\'re strict about its content because we promise to deliver the best.'
    },
    {
      number: '04',
      title: 'REACHING MILLION READERS',
      description: 'The steps to self publishing a book are not so difficult as it seems. With the help of our publishing group book reach the targeted audience. But if you work with us, this problem becomes zero. We have book stockists in the USA, which makes it easier for you to reach a million readers, once you attach your book on their platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-10 py-20 sm:px-8 md:px-12 py-10 lg:px-16 py-20 xl:px-20 py-20 relative">
      {/* Title */}
      <motion.div
        className="text-center mb-12 sm:mb-12 md:mb-16 lg:mb-20 text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 font-tusker"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        WHY <span className="text-[#8E2DE2]">CHOOSE</span> US
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12 md:gap-8 lg:gap-7 xl:gap-7.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col relative items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            {/* Card Box */}
            <div className="bg-[#f0f0f0] rounded-[20px] p-4 sm:p-3 md:p-4 lg:p-3 xl:p-3 mb-5 sm:mb-5 md:mb-6 lg:mb-7.5 flex-grow min-h-[160px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] text-center shadow-[1px_1px_5px_gray] relative w-full">
              <h3 className="font-extrabold text-sm sm:text-sm md:text-sm lg:text-sm mb-2 text-[#8E2DE2] font-tusker">
                {card.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-xs pb-10">
                {card.description}
              </p>
            </div>

            {/* Number */}
            <div className="text-lg sm:text-5xl md:text-7xl lg:text-9xl font-bold text-[#8E2DE2] text-center absolute bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] lg:bottom-[-33px] left-1/2 transform -translate-x-1/2 w-full font-tusker">
              {card.number}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}