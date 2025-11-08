import React from 'react';
import { Star } from 'lucide-react';
import testimonialImage1 from '../assets/Images/testimonial-1.webp';
import testimonialImage2 from '../assets/Images/testimonial-2.webp';
import bookImage1 from '../assets/Images/beautiful-1.webp';
import bookImage2 from '../assets/Images/beautiful-2.webp';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "MORWENNA BLACKWOOD",
      image: testimonialImage1,
      text: "I spent 10 years in the tech space and had a few not-so-great ideas to share with the world. Fortunately, I hired guys at Gnome who produced an outstanding book for me in the space of six months",
      bookImage: bookImage1,
      bookTitle: "UNDERRATED"
    },
    {
      id: 2,
      name: "STEVEN WRIGHT",
      image: testimonialImage2,
      text: "I wanted a several short story books for my children and nieces with a few drawings. I wanted to keep things simple and make it an enjoyable read for the children. After several mealy attempts, I finally got in touch with Gnome Book Writing. Now the kids get to enjoy their favorite books!",
      bookImage: bookImage2,
      bookTitle: "Harold"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-4 px-2 sm:px-3 lg:px-30 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white text-center mb-4 lg:mb-6 tracking-tight">
          TESTIMONIALS!
        </h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-2 sm:p-3 lg:p-4 shadow-md relative overflow-hidden h-80"
            >
              {/* Purple gradient accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-2xl opacity-15 -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Combined Content - Left center aligned */}
                <div className="flex flex-col lg:flex-row items-center mb-2">
                  {/* Left Column - Author Info and Text */}
                  <div className="flex-1">
                    {/* Author Info */}
                    <div className="flex items-center mb-1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover shadow"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop';
                        }}
                      />
                      <h3 className="text-sm sm:text-base font-black text-purple-600 tracking-tight ml-2">
                        {testimonial.name}
                      </h3>
                    </div>
                    
                    {/* Testimonial Text - Decreased width */}
                    <p className="text-gray-700 text-xs leading-relaxed font-tusker w-4/5">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Right Column - Book Image */}
                  <div className="mt-2 lg:mt-0 lg:ml-3">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                      <div className="relative">
                        <img
                          src={testimonial.bookImage}
                          alt={testimonial.bookTitle}
                          className="w-20 sm:w-24 lg:w-32 h-auto rounded-md shadow-md transform hover:scale-105 transition duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Star Rating - Left aligned */}
                <div className="flex gap-0.5 justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}