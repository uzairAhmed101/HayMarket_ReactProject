import React from 'react';
import serviceImage from '../assets/Images/Service-S4.png';

export default function BioWritingHeroSection() {
  return (
    <div className="relative min-h-[400px] sm:min-h-[400px] lg:min-h-[400px] w-full overflow-hidden">
      {/* Background Image - Full coverage without cutting */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <img 
          src={serviceImage} 
          alt="Service Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] sm:min-h-[400px] lg:min-h-[400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto py-16">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white mb-2 sm:mb-2 leading-tight">
            PROFESSIONAL BIO WRITING SERVICES BY EXPERT
            <br />
            BIO WRITERS!
          </h1>
          
          <p className="text-white text-sm sm:text-sm lg:text-sm mb-6 sm:mb-8 px-4">
            With our professional bio writing services we guarantee that your biography book will become the bestselling.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 sm:px-10 py-1 sm:py-4 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto text-sm sm:text-base">
              Call Now
            </button>
            <button className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white font-semibold px-8 sm:px-18 py-1 sm:py-4 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto text-sm sm:text-base">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}