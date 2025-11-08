import React from 'react';
import halfCircleGradient from '../assets/Images/half_cicle_gradient (1).png';

export default function BiographyNichesSection() {
  const niches = [
    'Public Figure',
    'Executive Biography',
    'Personal Biography',
    'Portrait Biography',
    'Intellectual Biography'
  ];

  return (
    <div className="min-h-screen bg-white py-4 px-4 sm:px-4 lg:px-4 relative">
      {/* Decorative elements */}
      <div 
        className="absolute z-0 pointer-events-none -top-[215px] -left-1 h-[89%] origin-center"
        style={{ rotate: '-25deg' }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-[83%] w-auto object-cover" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">
            <span className="text-purple-600">CREATE A BIOGRAPHY FOR ANY ONE OF THE</span>
            <br />
            <span className="text-black">FOLLOWING NICHES</span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-2 text-gray-700 text-sm sm:text-base">
            <p>Not sure which category your biography would fall under? Here's a quick review of what each niche entails.</p>
            <p>Our professional biography writing service can help you</p>
            <p>create a powerful book on the following:</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {niches.map((niche) => (
            <div
              key={niche}
              className={`px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${
                niche === 'Public Figure'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 border-2 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600'
              }`}
            >
              {niche}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}