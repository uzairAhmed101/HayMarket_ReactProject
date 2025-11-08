import React from 'react';
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
    <div className="relative min-h-screen bg-white py-6 sm:py-8 lg:py-30 px-3 sm:px-4 lg:px-6 overflow-hidden">
      {/* Decorative elements*/}
      <div 
        className="absolute z-0 pointer-events-none -top-[115px] -left-3 h-[89%] origin-center"
        style={{ rotate: '0deg' }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-[83%] w-auto object-cover" 
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            <span className="text-purple-600">CONTACT US TO CREATE A BIOGRAPHY FOR</span>
            <br />
            <span className="text-black">YOURSELF IN THESE 8 SIMPLE STEPS:</span>
          </h1>
          
          <p className="text-gray-700 text-xs max-w-2xl mx-auto mt-1">
            Don't know how the biography writing process would proceed? Review our 8-step process for more understanding.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-700 hover:bg-purple-600 rounded-2xl p-3 sm:p-4 text-white shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]"
            >
              <div className="mb-2">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase">
                {step.title}
              </h3>
              
              <p className="text-xs leading-relaxed opacity-90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}