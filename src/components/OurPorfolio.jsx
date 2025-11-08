import React, { useState } from 'react';
import beautifulImage1 from '../assets/Images/beautiful-1.webp';
import beautifulImage2 from '../assets/Images/beautiful-2.webp';
import beautifulImage3 from '../assets/Images/beautiful-3.webp';
import beautifulImage4 from '../assets/Images/beautiful-4.webp';
import beautifulImage5 from '../assets/Images/beautiful-5.webp';
import beautifulImage6 from '../assets/Images/beautiful-6.webp';
import beautifulImage7 from '../assets/Images/beautiful-7.webp';
import beautifulImage8 from '../assets/Images/beautiful-8.webp';
import beautifulImage9 from '../assets/Images/beautiful-9.webp';
import beautifulImage10 from '../assets/Images/beautiful-10.webp';
import halfCircleGradient from '../assets/Images/spring_gradient.png';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Fiction');
  
  const tabs = ['Fiction', 'Non-Fiction', 'Biography', 'Children', 'Informative'];
  
  // Create a new array with properly formatted book data
  const books = [
    {
      id: 1,
      title: 'Only the Beautiful',
      image: beautifulImage1,
      color: 'bg-orange-100'
    },
    {
      id: 2,
      title: 'Pomegranate',
      image: beautifulImage2,
      color: 'bg-teal-100'
    },
    {
      id: 3,
      title: 'Romantic Comedy',
      image: beautifulImage3,
      color: 'bg-pink-100'
    },
    {
      id: 4,
      title: 'The Midnight Laundry',
      image: beautifulImage4,
      color: 'bg-blue-100'
    },
    {
      id: 5,
      title: 'Camp Zero',
      image: beautifulImage5,
      color: 'bg-gray-100'
    },
    {
      id: 6,
      title: 'The Thing She Feared',
      image: beautifulImage6,
      color: 'bg-indigo-100'
    },
    {
      id: 7,
      title: 'Adelaide',
      image: beautifulImage7,
      color: 'bg-yellow-100'
    },
    {
      id: 8,
      title: 'Symphony',
      image: beautifulImage8,
      color: 'bg-green-100'
    },
    {
      id: 9,
      title: 'Truly Yours',
      image: beautifulImage9,
      color: 'bg-red-100'
    },
    {
      id: 10,
      title: 'The Hazards Handbook',
      image: beautifulImage10,
      color: 'bg-purple-100'
    }
  ];

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop';
  };

  return (
    <div className="min-h-screen py-0 px-1 sm:px-1 lg:px-1 relative overflow-hidden">
      {/* Decorative elements*/}
      <div 
        className="absolute z-0 pointer-events-none top-[200px] left-[-200px] h-[600px] w-[600px]"
      >
        <img 
          src={halfCircleGradient} 
          alt="" 
          className="h-full w-full object-contain" 
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h1 className="text-4xl sm:text-2xl lg:text-4xl font-bold text-purple-600 uppercase mb-15">
            Our Portfolio
          </h1>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-0 mb-3 ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 sm:px-3 py-1 text-xs font-semibold transition-all duration-300 rounded-full ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid - 5 books per line */}
        <div className="grid grid-cols-5 gap-0">
          {books.map((book) => (
            <div
              key={book.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded transition-all duration-300 transform hover:scale-105">
                {/* Book Cover - Replaced with image */}
                <div className="aspect-[2/3]">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-contain"
                    onError={handleImageError}
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}