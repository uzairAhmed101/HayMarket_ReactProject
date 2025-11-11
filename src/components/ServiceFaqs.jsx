import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import waveGradient from '../assets/Images/plaid_gradient.png';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the ghostwriting process work?",
      answer: "Our ghostwriting process begins with an in-depth consultation to understand your vision, goals, and story. We then assign a professional writer who specializes in your genre. The process includes outlining, drafting, revisions, and final editing to ensure the manuscript reflects your voice and meets your expectations."
    },
    {
      question: "How long does it take to complete a book?",
      answer: "The timeline varies depending on the length and complexity of your project. Typically, a full-length book takes 3-6 months from start to finish. We work with you to establish realistic deadlines and milestones throughout the process to keep everything on track."
    },
    {
      question: "What genres do you specialize in?",
      answer: "We specialize in a wide range of genres including fiction (mystery, romance, science fiction, fantasy), non-fiction (memoirs, business, self-help), children's books, and more. Our diverse team of writers ensures we can match you with someone who has expertise in your specific genre."
    },
    {
      question: "Will I own the rights to my book?",
      answer: "Absolutely! You retain full ownership and all rights to your book. Our ghostwriters sign comprehensive agreements ensuring that you are the sole owner of all intellectual property. We believe your story belongs to you, and we're here to help bring it to life."
    },
    {
      question: "How much does ghostwriting cost?",
      answer: "Pricing varies based on project scope, length, genre, and timeline. We offer customized packages to fit different budgets and needs. Contact us for a free consultation where we can discuss your project and provide a detailed quote tailored to your specific requirements."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Your satisfaction is our priority. We offer multiple revision rounds included in our packages. Throughout the process, we maintain open communication and incorporate your feedback. We don't consider the project complete until you're completely happy with the final manuscript."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 sm:py-8 lg:py-16 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
      {/* Decorative elements with improved responsiveness */}
      <motion.div 
        className="absolute h-[40%] left-0 top-0 w-[90px] sm:w-[200px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={waveGradient} alt="" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="max-w-full sm:max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.h1 
          className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-800 text-center mb-6 sm:mb-8 lg:mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          FAQS
        </motion.h1>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6 flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-all duration-300 group"
              >
                <span className="text-left text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg pr-2">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white transform group-hover:scale-110 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white transform group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[50vh] sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <motion.div 
                  className="px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6 bg-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}