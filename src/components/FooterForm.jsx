import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WritingServiceLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brief: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.brief) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', brief: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Ghostwriting',
    'Book Writing',
    'Book Editing',
    'Book Branding / Design',
    'Video Book Trailer',
    'Author Website',
    'Book Publishing',
    'Book Cover',
    'Book Formatting',
    'Audio Book',
    'Book Launch Marketing',
    'Book Illustration'
  ];

  const quickLinks = [
    'About Us',
    'Blogs',
    'Case Studies',
    'Contact Us',
    'Terms and Conditions',
    'Privacy Policy'
  ];

  return (
    <div className="border-t border-white min-h-screen bg-[#3A0368] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 font-tusker">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* Left Section - Content */}
        <motion.div 
          className="text-white py-1 sm:py-2 md:py-3 lg:py-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight uppercase"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            WRITING MADE EASY WITHOUT SACRIFICING QUALITY!
          </motion.h1>
          
          <motion.p 
            className="text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 opacity-95"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            eBook Authors offers affordable, professional writing, editing, and proofreading services customized to your 
            needs. We also help promote your work across multiple platforms using expert strategies and advanced tools. 
            With our 24/7 live content solutions, we're your go-to destination for success.
          </motion.p>

          {/* Services and Quick Links Side by Side */}
          <motion.div 
            className="flex flex-col lg:flex-row mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Services Column */}
            <motion.div 
              className="lg:flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2 p-1.5 hover:bg-[#8B0CCC] rounded-lg transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index + 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="text-white flex-shrink-0 bg-[#8B0CCC] rounded-full p-0.5 w-4 h-4 flex items-center justify-center">
                      <span className="text-[8px] font-bold">✓</span>
                    </div>
                    <span className="text-white text-xs">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Links Column */}
            <motion.div 
              className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Quick Links</h3>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link, index) => (
                  <motion.a 
                    key={index} 
                    href="#" 
                    className="block p-1.5 text-white text-xs hover:bg-[#8B0CCC] rounded-lg transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index + 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div 
          className="sticky top-3 md:sticky sm:static"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="backdrop-blur-lg rounded-xl p-5 max-w-md mx-auto">
            <motion.h2 
              className="text-white text-xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              TALK TO WRITING EXPERT
            </motion.h2>
            
            <div>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-white mb-3 border-none rounded-full bg-[#8B0CCC] text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              />
              
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-white mb-3 border-none rounded-full bg-[#8B0CCC] text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              />
              
              <motion.input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 text-white mb-3 border-none rounded-full bg-[#8B0CCC] text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              />
              
              <motion.textarea
                name="brief"
                placeholder="Enter Brief"
                value={formData.brief}
                onChange={handleChange}
                className="w-full p-3 text-white mb-3 border-none rounded-2xl bg-[#8B0CCC] text-sm resize-y min-h-[80px]"
                rows="4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              ></motion.textarea>
              
              <motion.button 
                onClick={handleSubmit} 
                className="w-full p-3 bg-[#8B0CCC] text-white border-none rounded-full text-base font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 mx-auto block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SUBMIT
              </motion.button>
            </div>

            <motion.p 
              className="text-white text-[9px] leading-relaxed mt-3 opacity-80 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              By clicking the "Submit" button, you are agreeing to the eBook Authors terms 
              and conditions and privacy policy. Rest assured, we will never share your 
              personal information with third parties unless absolutely necessary for 
              service-related activities. Our commitment is to protect your data and maintain 
              the confidentiality of your information. Trust eBook Authors for secure and 
              reliable content creation services. View our complete details.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}