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
    // e.g. API call
    // setFormData({ name: '', email: '', phone: '', message: '', sendNDA: false });
  };

  return (
    <div className="bg-white py-10 md:py-10 lg:py-10 px-20 sm:px-20 md:px-20 lg:px-20 w-full relative overflow-hidden">
      {/* ---------------- Decorative Wave Gradient ---------------- */}
      {/* Size and position adjusted for all screens */}
      <motion.div
        className="absolute h-40 sm:h-56 md:h-72 right-[-20px] sm:right-[-40px] md:right-[-60px] lg:right-[-120px] top-5 md:top-16 w-32 sm:w-56 lg:w-96 rotate-180 z-10"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={waveGradient}
          alt="Decorative wave gradient"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = '../assets/Images/wave_gradient.png'; // fallback
          }}
        />
      </motion.div>

      {/* ---------------- Main Title ---------------- */}
      <motion.h1 
        className="text-4xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center px-4 font-tusker text-[#383838]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get In Touch
      </motion.h1>

      {/* ---------------- Content Grid (Image + Form) ---------------- */}
      <motion.div 
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[80px] items-center w-full relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* ---------------- Image Section ---------------- */}
        {/* Appears first on mobile, right side on desktop */}
        <motion.div 
          className="relative flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image container – size adjusted for every device */}
          <div className="relative z-2 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-[50px] overflow-hidden p-1 sm:p-2 md:p-3 lg:p-0">
            <motion.img
              src={section3Img}
              alt="Customer support representative"
              className="w-full h-full object-cover block rounded-[50px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              onError={(e) => {
                e.target.src = '../assets/Images/Section3-img.webp'; // fallback
              }}
            />
          </div>
        </motion.div>

        {/* ---------------- Form Section ---------------- */}
        {/* Appears second on mobile, left side on desktop */}
        <motion.div 
          className="max-w-[95%] sm:max-w-[600px] w-full mx-auto bg-[#383838] p-5 sm:p-8 rounded-2xl order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Form Heading */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl leading-[1.2] text-center text-white mb-4 sm:mb-6 font-tusker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-[#ffffff]">Tell Us About Your Job</span>
            <br />
          </motion.h2>

          {/* ---------------- Form ---------------- */}
          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>

            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-[15px] border-0 border-b border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
              />
            </motion.div>

            {/* Email & Phone – stack on mobile, 2 columns from sm up */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-[15px] border-0 border-b border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-[15px] border-0 border-b border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white"
                />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="3 sm:rows-4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-[15px] border-0 border-b border-white rounded-none text-white bg-transparent focus:outline-none focus:border-[#8E2DE2] focus:ring-0 placeholder-white resize-none"
              ></textarea>
            </motion.div>

            {/* NDA Checkbox */}
            <motion.div 
              className="flex items-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <input
                type="checkbox"
                name="sendNDA"
                id="sendNDA"
                checked={formData.sendNDA}
                onChange={handleChange}
                className="w-4 h-4 text-[#8E2DE2] bg-transparent border-white rounded focus:ring-[#8E2DE2] focus:ring-2"
              />
              <label htmlFor="sendNDA" className="ml-2 text-sm text-white">
                Send me your NDA
              </label>
            </motion.div>

            {/* Submit Button – FULL WIDTH on mobile */}
            <motion.div 
              className="pt-4 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <button
                type="submit"
                className="w-full sm:w-[240px] bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 
                       text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300 text-sm sm:text-base tracking-wide"
              >
                LET'S TALK
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}