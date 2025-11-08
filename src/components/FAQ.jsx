import React, { useState } from 'react';
import { motion } from 'framer-motion';
import springGradient from '../assets/Images/spring_gradient-2.png';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Haymarket Publishers offer?",
      answer: "Haymarket Publishers offers a comprehensive range of publishing services including book editing, formatting, cover design, printing, and distribution. We also provide marketing support and author branding services to help authors reach their target audience effectively."
    },
    {
      question: "How long does the publishing process take?",
      answer: "The publishing timeline varies depending on the services selected and the complexity of the project. Typically, our standard publishing process takes 6-8 weeks from manuscript submission to publication. Expedited services are available for an additional fee."
    },
    {
      question: "Do you offer editing services?",
      answer: "Yes, we provide professional editing services including developmental editing, line editing, and proofreading. Our experienced editors work closely with authors to enhance the quality and readability of their manuscripts while preserving their unique voice and style."
    },
    {
      question: "Can I retain the rights to my book?",
      answer: "Absolutely. With our self-publishing services, you retain full ownership and rights to your book. We simply assist you in the publishing process and help you bring your work to market."
    },
    {
      question: "Do you help with book marketing?",
      answer: "Yes, we offer comprehensive marketing services including social media promotion, book launch strategies, press release distribution, and author branding. Our marketing team works to maximize your book's visibility and sales potential."
    },
    {
      question: "What formats are available for my book?",
      answer: "We offer multiple formats including paperback, hardcover, eBook (Kindle, ePub, PDF), and audiobook production. You can choose the formats that best suit your target audience and distribution preferences."
    }
  ];

  // Split FAQs into two columns
  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <div className="max-w-[1200px] mx-auto pt-20 px-5 pb-10 relative lg:pt-[80px] lg:px-5 lg:pb-10 md:pt-[60px] md:px-5 md:pb-[30px] sm:pt-[50px] sm:px-[15px] sm:pb-[25px] max-[480px]:pt-10 max-[480px]:px-[10px] max-[480px]:pb-5">
      {/* Decorative element with improved viewport settings for all zoom levels */}
      <motion.div 
        className="w-[35%] absolute h-[120%] bottom-[152px] right-[-170px] rounded-[50%_50%_40%_60%] pointer-events-none z-[100] opacity-70 lg:h-[137%] lg:bottom-[152px] lg:right-[-71px] max-[480px]:h-[89%] max-[480px]:bottom-[220px] max-[480px]:right-[-53px]"
        initial={{ opacity: 0, x: 200, y: 100 }}
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
          x: [0, -20, 0, 20, 0],
          y: [0, 20, 0, -20, 0],
          transition: { 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, amount: 0.5, margin: "-100px 0px -100px 0px" }}
      >
        <img src={springGradient} alt="" style={{height: '70%', width: '70%', objectFit: 'cover' }} />
      </motion.div>

      <div className="text-center mb-[60px] relative z-[1] md:mb-10 max-[480px]:mb-[30px]">
        <h1 className="text-[40px] font-bold text-[#1a1a1a] tracking-[1px] lg:text-[36px] md:text-[32px] max-[480px]:text-[28px] font-tusker">
          FREQUENTLY ASKED <span className="text-[#a020f0]">QUESTIONS</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-[30px] relative z-[1] md:grid-cols-1 md:gap-[25px]">
        {/* Left Column - First 3 FAQs */}
        <div className="flex flex-col gap-5">
          {leftFaqs.map((faq, index) => (
            <div key={index}>
              <div
                className={`bg-[#e8e8e8] rounded-[12px] p-5 cursor-pointer transition-all duration-300 ease-in-out flex justify-between items-center min-h-[60px] hover:bg-[#ddd] hover:translate-x-[-5px] md:p-[18px] max-[480px]:p-[15px] max-[480px]:min-h-[55px] ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="text-[15px] font-semibold text-[#333] flex-1 text-left lg:text-[14px] md:text-[14px] max-[480px]:text-[13px] font-tusker">
                  {faq.question}
                </div>
                <div className={`w-[35px] h-[35px] min-w-[35px] bg-gradient-to-br from-[#a020f0] to-[#d020f0] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 ease-in-out ml-[15px] max-[480px]:w-[30px] max-[480px]:h-[30px] max-[480px]:min-w-[30px] max-[480px]:text-lg ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  ✓
                </div>
              </div>
              <div className={`${
                activeIndex === index ? 'block' : 'hidden'
              } py-[15px] px-5 bg-[#f5f5f5] rounded-b-[12px] text-sm text-[#555] leading-[1.6] mt-[-5px] border-t border-[#ddd] lg:text-[13px] md:text-[13px] md:py-3 md:px-[18px] max-[480px]:text-xs max-[480px]:py-[10px] max-[480px]:px-[15px]`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Last 3 FAQs */}
        <div className="flex flex-col gap-5">
          {rightFaqs.map((faq, index) => (
            <div key={index + 3}>
              <div
                className={`bg-[#e8e8e8] rounded-[12px] p-5 cursor-pointer transition-all duration-300 ease-in-out flex justify-between items-center min-h-[60px] hover:bg-[#ddd] hover:translate-x-[-5px] md:p-[18px] max-[480px]:p-[15px] max-[480px]:min-h-[55px] ${
                  activeIndex === index + 3 ? 'active' : ''
                }`}
                onClick={() => toggleFAQ(index + 3)}
              >
                <div className="text-[15px] font-semibold text-[#333] flex-1 text-left lg:text-[14px] md:text-[14px] max-[480px]:text-[13px] font-tusker">
                  {faq.question}
                </div>
                <div className={`w-[35px] h-[35px] min-w-[35px] bg-gradient-to-br from-[#a020f0] to-[#d020f0] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 ease-in-out ml-[15px] max-[480px]:w-[30px] max-[480px]:h-[30px] max-[480px]:min-w-[30px] max-[480px]:text-lg ${
                  activeIndex === index + 3 ? 'rotate-180' : ''
                }`}>
                  ✓
                </div>
              </div>
              <div className={`${
                activeIndex === index + 3 ? 'block' : 'hidden'
              } py-[15px] px-5 bg-[#f5f5f5] rounded-b-[12px] text-sm text-[#555] leading-[1.6] mt-[-5px] border-t border-[#ddd] lg:text-[13px] md:text-[13px] md:py-3 md:px-[18px] max-[480px]:text-xs max-[480px]:py-[10px] max-[480px]:px-[15px]`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[50px] relative z-[1] md:mt-10 max-[480px]:mt-[30px]">
        <button className="bg-gradient-to-br from-[#a020f0] to-[#d020f0] text-white border-none py-[14px] px-10 rounded-[25px] text-[15px] font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-[0_5px_20px_rgba(160,32,240,0.3)] hover:translate-y-[-3px] hover:shadow-[0_8px_30px_rgba(160,32,240,0.4)] active:translate-y-[-1px] md:py-3 md:px-[35px] md:text-sm max-[480px]:py-3 max-[480px]:px-[30px] max-[480px]:text-[13px] font-tusker">
          Chat With Us
        </button>
      </div>
    </div>
  );
}