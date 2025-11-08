import React from 'react';
import { Award, TrendingUp, Shield, Target } from 'lucide-react';
import objectsImage from '../assets/Images/OBJECTS.webp';
import halfCircleGradient from '../assets/Images/wave_gradient.png';

export default function PublicFigureBiography() {
  const aspects = [
    { icon: Award, text: 'Real-life incidents of a public figure' },
    { icon: TrendingUp, text: 'Success stories and achievements' },
    { icon: Shield, text: 'Life difficulties you had to overcome as a public figure' },
    { icon: Target, text: 'Milestones achieved.' }
  ];

  return (
    <div className="min-h-screen bg-white py-0 px-30 relative">
      {/* Decorative elements */}
      <div 
        className="absolute z-0 pointer-events-none -bottom-[120px] -right-0 h-[100%] origin-center"
        style={{ rotate: '0deg' }}
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-[83%] w-auto object-cover" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 uppercase">
              Public Figure Biography
            </h1>
            
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Are you a celebrity, social media influencer, athlete, author, politician, or any 
              other public figure who wishes to share their experiences and achievements with 
              the world so other individuals can learn from them? If yes, then a public figure 
              biography is the right pic for you!
            </p>
            
            <p className="text-gray-900 font-semibold text-base sm:text-lg mb-3">
              A public figure biography has the following aspects:
            </p>
            
            <div className="space-y-2 mb-4">
              {aspects.map((aspect, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <aspect.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{aspect.text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Thus, if you want to leave a legacy behind and wish to be remembered until 
              much later, our team can do it for you! Contact us today and get a chance to 
              publish a bestselling public figure biography!
            </p>
          </div>
          
          {/* Right Section - Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <img 
              src={objectsImage} 
              alt="Objects" 
              className="w-[70%] h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}