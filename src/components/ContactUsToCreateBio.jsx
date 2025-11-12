import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, FileText, CheckCircle, Edit, Layout, Palette, BookOpen, TrendingUp } from 'lucide-react';
import halfCircleGradient from '../assets/Images/circular_gradient.png';

export default function BiographyStepsSection() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'ORDER DETAILS',
      description: 'Hire a biography writer to begin your biography-writing process. Contact our team now and provide us with your order details.',
      color: 'bg-purple-600'
    },
    {
      icon: FileText,
      title: 'RESEARCH AND OUTLINE',
      description: 'Our team will research and fact-check your information and create an outline for each chapter.',
      color: 'bg-gray-700'
    },
    {
      icon: CheckCircle,
      title: 'CHAPTER APPROVAL',
      description: 'Our biography writers will create the first chapter and send it for approval. This step will continue for all chapters.',
      color: 'bg-gray-700'
    },
    {
      icon: Edit,
      title: 'EDITING/PROOFREADING',
      description: 'The biographies we write undergo an extensive proofreading and editing process by experts, ensuring your content is clear and understandable.',
      color: 'bg-gray-700'
    },
    {
      icon: Layout,
      title: 'FORMATTING',
      description: 'Our book formatters will then format your book, so it shows consistent headings, paragraph breaks, and line spacing.',
      color: 'bg-gray-700'
    },
    {
      icon: Palette,
      title: 'DESIGNING',
      description: 'Your biography will be given to the design team, who will create an attractive cover for your book.',
      color: 'bg-gray-700'
    },
    {
      icon: BookOpen,
      title: 'PUBLISHING',
      description: 'We will publish your work so the world can read and inspire by your true life events.',
      color: 'bg-gray-700'
    },
    {
      icon: TrendingUp,
      title: 'MARKETING',
      description: 'Our work doesn\'t end here. Our experienced book marketers will promote your book on different platforms to ensure it reaches its',
      color: 'bg-gray-700'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white py-10 sm:py-10 lg:py-10 px-20 sm:px-20 lg:px-20 overflow-hidden">
      {/* Decorative elements*/}
      <motion.div 
        className="
          absolute z-0 pointer-events-none
          -top-[60px] -left-2
          sm:-top-[90px] sm:-left-3
          md:-top-[115px] md:-left-3
          h-[80px] sm:h-[120px] md:h-[60%]
          origin-center
        "
        style={{ rotate: '0deg' }}
        initial={{ opacity: 0, x: -100 }}
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
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-2xl sm:text-2xl lg:text-3xl font-extrabold mb-2 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-purple-600">CONTACT US TO CREATE A BIOGRAPHY FOR</span>
            <br />
            <span className="text-black">YOURSELF IN THESE 8 SIMPLE STEPS:</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-700 text-xs sm:text-sm md:text-sm max-w-2xl mx-auto mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Don't know how the biography writing process would proceed? Review our 8-step process for more understanding.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 hover:bg-purple-600 rounded-2xl p-3 sm:p-4 md:p-5 text-white shadow-sm hover:shadow-md transition-all duration-300 min-h-[160px] sm:min-h-[180px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <step.icon className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" strokeWidth={1.5} />
              </motion.div>
              
              <motion.h3 
                className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2 uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p 
                className="text-[0.65rem] sm:text-xs md:text-sm leading-relaxed opacity-90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}