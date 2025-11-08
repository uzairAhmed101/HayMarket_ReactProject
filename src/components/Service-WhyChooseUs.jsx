import React from 'react';
import whyChooseUsImage from '../assets/Images/WhyChooseUs-1.webp';
import whyChooseUsImage2 from '../assets/Images/WhyChooseUs-2.webp';

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-5">
            WHY <span className="text-purple-600">CHOOSE US?</span>
          </h1>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Expertise Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                Expertise and<br />Professionalism
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our team comprises highly skilled professionals with years of experience in their respective fields. We maintain strict adherence to excellence in everything we undertake. With deep expertise, we ensure quality work with the highest standards of accuracy, professionalism, and reliability.
              </p>
            </div>

            {/* Tailored Approach Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                Tailored and Personalized<br />Approach
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We understand that each client is unique with distinct needs and goals. Our customized solutions are designed with you in mind. We collaborate closely with you to understand your objectives and challenges, ensuring our services are aligned with your vision. Our personalized approach guarantees relevancy and efficacy tailored from the ground up.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src={whyChooseUsImage} 
                alt="Why Choose Us" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <img 
                src={whyChooseUsImage2} 
                alt="Why Choose Us" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Attention to Detail Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                Attention to Detail and<br />Accuracy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We believe excellence lies in meticulous attention to detail. Every piece of work undergoes thorough scrutiny and refinement to ensure the highest level of accuracy and precision. Our rigorous quality control processes mean you receive flawless results that meet and exceed expectations consistently.
              </p>
            </div>

            {/* Confidentiality Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                Confidentiality and Privacy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Your privacy and security are our utmost priorities. We implement stringent confidentiality protocols and maintain the highest standards of data protection. All information is safeguarded with advanced security measures. Your trust means everything to us, and we ensure that your sensitive data is handled with complete discretion and never shared with third parties without explicit consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}