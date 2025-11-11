import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSellers() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Is The Process Of Self-Publishing?",
      answer: "Self-publishing involves writing your book, editing it, designing a cover, formatting the interior, and then publishing it through platforms like Amazon KDP, IngramSpark, or others. You maintain full control over the content and rights."
    },
    {
      question: "Do You People Provide Book Marketing Services?",
      answer: "Yes, we offer comprehensive book marketing services including social media promotion, email campaigns, book launch strategies, and advertising management to help your book reach its target audience."
    },
    {
      question: "Do I Need Different Barcodes For EBook And Print Binding?",
      answer: "Yes, ebooks and print books require different identifiers. Print books need ISBN barcodes, while ebooks typically use digital identifiers provided by the publishing platform."
    },
    {
      question: "Will My Data Be Safe And Confidential?",
      answer: "Absolutely. We take data security seriously and use industry-standard encryption and security measures. Your manuscript and personal information are kept strictly confidential and will never be shared without your permission."
    },
    {
      question: "How Much Time Will It Take To Publish My Book?",
      answer: "The timeline varies depending on the book's length and complexity, but typically ranges from 2-6 weeks for the complete publishing process, including formatting, cover design, and platform approval."
    },
    {
      question: "What Are The Basics Of Designing A Book Cover?",
      answer: "A great book cover includes an eye-catching title, professional imagery or graphics, appropriate font choices, author name, and genre-appropriate design elements. It should be visually appealing at thumbnail size and clearly communicate the book's genre."
    },
    {
      question: "How Can I Get An ISBN?",
      answer: "You can purchase ISBNs directly from your country's ISBN agency (like Bowker in the US), or some publishing platforms like Amazon KDP offer free ISBNs when you publish through their service."
    },
    {
      question: "Where Will My Book Be Available For Purchase?",
      answer: "Your book can be distributed to major retailers including Amazon, Barnes & Noble, Apple Books, Google Play Books, and many other online and physical bookstores, depending on your chosen distribution channels."
    },
    {
      question: "Can I Self Publish A Book For Free?",
      answer: "Yes, platforms like Amazon KDP, Draft2Digital, and Smashwords allow you to publish ebooks for free. However, you may want to invest in professional editing, cover design, and formatting for the best results."
    },
    {
      question: "Can I Self Publish Graphic Novels?",
      answer: "Absolutely! Graphic novels can be self-published through various platforms. You'll need to ensure your files meet the specific formatting requirements for image-heavy content and consider platforms that specialize in visual content."
    },
    {
      question: "Is Having An Author's Website A Wise Decision?",
      answer: "Yes, an author website is highly recommended. It serves as your professional home base, helps with discoverability, allows you to build an email list, and gives you full control over your author brand and marketing."
    },
    {
      question: "What Is A Book's Video Trailer?",
      answer: "A book video trailer is a short promotional video (usually 30-90 seconds) that presents your book in a cinematic way, similar to a movie trailer. It's used for marketing on social media, websites, and other digital platforms."
    }
  ];

  const leftColumn = faqs.filter((_, index) => index % 2 === 0);
  const rightColumn = faqs.filter((_, index) => index % 2 !== 0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQItem = ({ faq, index }) => (
    <motion.div 
      className="mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 text-left"
      >
        <span className="font-medium text-gray-800 text-sm md:text-base pr-4">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white rounded-full">
          {openIndex === index ? (
            <ChevronUp className="w-5 h-5 text-purple-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-600" />
          )}
        </div>
      </button>
      {openIndex === index && (
        <motion.div 
          className="mt-2 p-10 bg-white rounded-lg border border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen py-30 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative circle */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            FREQUENTLY ASKED QUESTIONS{' '}
            <span className="text-transparent bg-clip-text bg-[#a020f0]">
              SELLERS!
            </span>
          </motion.h1>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {leftColumn.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {rightColumn.map((faq, index) => (
              <FAQItem key={index + 6} faq={faq} index={index + 6} />
            ))}
          </motion.div>
        </div>

        {/* Load More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className="px-8 py-3 bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            LOAD MORE
          </button>
        </motion.div>
      </div>
    </div>
  );
}