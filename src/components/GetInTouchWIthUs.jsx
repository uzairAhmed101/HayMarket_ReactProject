import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import halfCircleGradient from '../assets/Images/star_gradient (1).png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="py-4 px-4 md:py-6 md:px-6 relative">
      {/* Decorative Element - Top Right */}
      <motion.div
        className="
          absolute pointer-events-none z-0
          top-[0px] right-[-20px] 
          sm:top-[20px] sm:right-[-10px]
          md:top-[0px] md:right-[-40px]
          lg:top-[-25px] lg:right-[-29px]
          h-[180px] w-auto
          sm:h-[250px]
          md:h-[350px]
          lg:h-[500px]
        "
        initial={{ opacity: 0, x: 150, y: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={halfCircleGradient} alt="" className="h-full w-auto object-cover block" />
      </motion.div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title and Subtitle Section */}
        <motion.div 
          className="text-center m-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Get In Touch With Us
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-sm max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Have questions about our publishing services? We're here to help you bring your story to life. Reach out to our team of experts today.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Contact Form Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-3 sm:p-4 md:p-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-white text-base md:text-lg font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              SEND US A MESSAGE
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-xs mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>

            <div className="space-y-3">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <label className="text-white text-xs font-medium mb-1 block">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm h-9 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <label className="text-white text-xs font-medium mb-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm h-9 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <label className="text-white text-xs font-medium mb-1 block">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm h-9 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <label className="text-white text-xs font-medium mb-1 block">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm h-9 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <label className="text-white text-xs font-medium mb-1 block">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows="2"
                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none text-sm min-h-[5rem] pl-10"
                  ></textarea>
                  <div className="absolute left-3 top-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm h-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="text-white" />
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div 
            className="space-y-4 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-purple-600 text-lg font-extrabold mb-1">CONTACT INFORMATION</h2>
              <p className="text-gray-600 text-xs">
                Reach out to us through any of the following channels.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-2.5">
              {/* Call Us Card */}
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-3 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm mb-1">CALL US</h3>
                    <p className="text-white text-sm font-semibold">
                      +1 (877)-629-0316
                    </p>
                    <p className="text-purple-100 text-xs">Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>
              </motion.div>

              {/* Email Us Card */}
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-3 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm mb-1">EMAIL US</h3>
                    <p className="text-white text-sm font-semibold">
                      info@baiymarketpublishers.com
                    </p>
                    <p className="text-purple-100 text-xs">We'll respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Visit Us Card */}
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-3 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm mb-1">VISIT US</h3>
                    <p className="text-white text-sm">
                      1260 Madison Ave Unit # 301<br />
                      New York, NY 10128<br />
                      United States
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Office Hours */}
            <motion.div 
              className="bg-white font-extrabold rounded-xl p-3 shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3 
                className="text-purple-600 font-bold text-sm mb-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                OFFICE HOURS
              </motion.h3>
              <div className="space-y-1.5 text-xs">
                <motion.div 
                  className="flex justify-between py-1 border-b border-gray-100"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-gray-700">Monday - Friday:</span>
                  <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between py-1 border-b border-gray-100"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-gray-700">Saturday:</span>
                  <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between py-1"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-gray-700">Sunday:</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}