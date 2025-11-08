import React from 'react';
import { motion } from 'framer-motion';
import { MotionStaggerDiv, MotionFadeInUp } from './AnimationUtils';

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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-20 relative">
      {/* Title */}
      <MotionFadeInUp>
        <div className="text-center mb-20 md:mb-15 sm:mb-12 text-5xl md:text-4xl sm:text-3xl font-bold font-tusker">
          WHY <span className="text-[#8E2DE2]">CHOOSE</span> US
        </div>
      </MotionFadeInUp>

      {/* Cards Container */}
      <MotionStaggerDiv className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5 md:gap-6.25 sm:gap-12.5">
        {cards.map((card, index) => (
          <MotionFadeInUp key={index} className="flex flex-col relative items-center">
            {/* Card Box */}
            <div className="bg-[#f0f0f0] rounded-[20px] p-3 md:p-[15px] sm:p-2 mb-7.5 md:mb-6 sm:mb-5 flex-grow min-h-[200px] md:min-h-[180px] sm:min-h-[160px] text-center shadow-[1px_1px_5px_gray] relative w-full">
              <h3 className="font-extrabold text-sm md:text-base sm:text-md mb-2 text-[#8E2DE2] font-tusker">
                {card.title}
              </h3>
              <p className="text-[0.8rem] font-semibold pb-10">
                {card.description}
              </p>
            </div>

            {/* Number */}
            <div className="text-[5rem] sm:text-[5rem] xs:text-[4rem] font-bold text-[#8E2DE2] text-center absolute bottom-[-33px] md:bottom-[-25px] sm:bottom-[-20px] xs:bottom-[-15px] left-1/2 transform -translate-x-1/2 w-full font-tusker">
              {card.number}
            </div>
          </MotionFadeInUp>
        ))}
      </MotionStaggerDiv>
    </div>
  );
}