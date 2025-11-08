import React, { useState } from 'react';
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
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements with improved viewport settings for all zoom levels */}
      <div 
        className="absolute h-[50%] left-0 top-0 w-[200px]"
      >
        <img src={waveGradient} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 text-center mb-8 sm:mb-12 tracking-tight">
          FAQS
        </h1>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-all duration-300 group"
              >
                <span className="text-left text-white font-semibold text-sm sm:text-base lg:text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-white">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}