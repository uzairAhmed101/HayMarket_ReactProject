import React, { useState } from 'react';
import { motion } from 'framer-motion';
import section3Img from '../assets/Images/laughing-young-businessman-dressed-suit 1.png';
import waveGradient from '../assets/Images/plaid_gradient.png';

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sendNDA: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white py-[112px] px-32 w-full relative overflow-hidden">
      {/* Decorative elements with improved viewport settings for all zoom levels */}
      <div 
        className="absolute h-[50%] -right-0 top-30 w-[200px] rotate-180"
      >
        <img src={waveGradient} alt="" className="w-full h-full object-cover" 
          onError={(e) => {
            e.target.src = '../assets/Images/wave_gradient.png';
          }}
        />
      </div>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-[80px] items-center w-full relative z-10">
        {/* Left side - Content */}
        <div className="max-w-[600px] bg-[#383838] p-8 rounded-2xl">
          <h2 className="text-[30px] leading-[1.2] text-center font-white mb-[25px] font-tusker">
            <span className="text-[#ffffff]">Tell Us About Your Job</span><br />
          </h2>

          {/* Form */}
          <form className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-[15px] border-0 border-b-1 border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-[15px]">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-[15px] border-0 border-b-1 border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-[15px] border-0 border-b-1 border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder='Enter your message'
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[15px] border-0 border-b-1 border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
              ></textarea>
            </div>
            
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                name="sendNDA"
                checked={formData.sendNDA}
                onChange={handleChange}
                className="w-4 h-4 text-[#8E2DE2] bg-transparent border-white rounded focus:ring-[#8E2DE2] focus:ring-2"
              />
              <label htmlFor="sendNDA" className="ml-2 text-sm text-white">
                Send me your NDA
              </label>
            </div>
            
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleSubmit}
                className="w-[240px] bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base tracking-wide"
              >
                LET'S TALK
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center items-center">
          {/* Image */}
          <div className="relative z-2 w-[450px] h-[450px] rounded-[50px] overflow-hidden">
            <img 
              src={section3Img}
              alt="Customer support representative"
              className="w-full h-full object-cover block"
              onError={(e) => {
                e.target.src = '../assets/Images/Section3-img.webp';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}