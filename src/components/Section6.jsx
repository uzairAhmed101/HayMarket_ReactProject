import React from 'react';
import { motion } from 'framer-motion';
import { MotionStaggerDiv, MotionFadeInUp } from './AnimationUtils';
import waveGradient from '../assets/Images/circular_gradient.png';

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
    <div className="min-h-screen bg-white relative py-[60px] px-5 md:pt-[164px] md:px-[79px] md:pb-0">
      {/* Decorative element - center left */}
      <motion.div
        className="absolute h-[25%] -top-[142px] -left-[15px] pointer-events-none z-1 opacity-70 md:h-[40%] md:top-[7%] md:-left-[18px] lg:h-[80%] lg:-top-[192px] lg:left-0 lg:-translate-y-1/2"
        initial={{ opacity: 0, x: -150, y: 0 }}
        animate={{
          opacity: 0.7,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.3
          }
        }}
        whileInView={{
          x: [0, -10, 0, 10, 0],
          y: [0, 10, 0, -10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <img src={waveGradient} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Title */}
      <MotionFadeInUp>
        <div className="text-center text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-[50px] md:mb-[60px] lg:mb-[80px]">
          WHY <span className="text-[#8E2DE2]">CHOOSE</span> US
        </div>
      </MotionFadeInUp>

      {/* Cards Container */}
      <MotionStaggerDiv className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] md:gap-[25px] lg:gap-[30px]">
        {cards.map((card, index) => (
          <MotionFadeInUp key={index} className="flex flex-col relative">
            {/* Card Box */}
            <div className="bg-[#f0f0f0] rounded-[20px] py-[25px] px-5 md:py-[30px] md:px-[25px] lg:py-[24px] lg:px-[24px] mb-[30px] flex-grow min-h-[280px] md:min-h-[300px] lg:min-h-[330px] text-center shadow-[1px_1px_5px_gray] relative">
              <h3 className="font-extrabold text-[18px] md:text-[20px] lg:text-[16px] mb-[20px] text-[#8E2DE2]">
                {card.title}
              </h3>
              <p className="text-[13px] md:text-[14px] lg:text-[11px] leading-[1.6] font-semibold mb-0">
                {card.description}
              </p>
            </div>

            {/* Number */}
            <div className="text-[#8E2DE2] font-bold text-center absolute left-[153px] top-[187px] text-[110px] md:text-[113px] lg:text-[85px] md:-bottom-[33px] lg:-bottom-[33px] md:ml-[147px] lg:ml-[75px] md:left-auto lg:left-auto md:top-auto lg:top-auto">
              {card.number}
            </div>
          </MotionFadeInUp>
        ))}
      </MotionStaggerDiv>
    </div>
  );
}