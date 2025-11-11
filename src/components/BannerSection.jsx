import React, { useState } from 'react';

export default function BannerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="bg-white py-[60px] px-[20px] sm:px-[40px] md:px-[65px] w-full">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] items-center w-full">
        {/* Left Content */}
        <div className="max-w-[600px] mx-auto lg:mx-0">
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-wider text-[#333] mb-[10px] sm:mb-[15px]">
            BECOME A GLOBALLY PUBLISHED AUTHOR TODAY
          </p>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 font-tusker" style={{ fontFamily: 'TuskerGrotesk, Arial, sans-serif' }}>
            <span className="text-[#8E2DE2]">SELF PUBLISH AND BE A</span><br />
            <span className="text-black">WORLD-FAMOUS AUTHOR TODAY!</span>
          </h1>
          <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555] mb-[25px] sm:mb-[30px]">
            Haymarket Publishers offers full professional book publishing services. We'll work with our 
            modern world-class. Our team provides guidance at every stage of the process. Get your 
            positive experience and a smooth publication process. You'll also feel comfortable with us to 
            expand your book's visibility and connect with more readers.
          </p>
          <div className="flex gap-[10px] sm:gap-[15px] flex-wrap justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white border-0 p-[12px_24px] sm:p-[14px_32px] rounded-[25px] text-[13px] sm:text-sm font-semibold shadow-[0_4px_12px_rgba(142,45,226,0.3)] hover:shadow-[0_6px_16px_rgba(142,45,226,0.4)]">
              Get Started Now
            </button>
            <button className="bg-white text-[#8E2DE2] border-2 border-[#8E2DE2] p-[10px_20px] sm:p-[12px_28px] rounded-[25px] text-[13px] sm:text-sm font-semibold hover:bg-[#8E2DE2] hover:text-white">
              Toll-Free +1 (877)-626-0316
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex justify-center lg:justify-end w-full">
          <div className="bg-white rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden w-full max-w-[450px]">
            <div className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] p-4 sm:p-5 text-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wider font-tusker" style={{ fontFamily: 'TuskerGrotesk, Arial, sans-serif' }}>LET'S GET STARTED !</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-[20px] sm:p-[30px] flex flex-col gap-[12px] sm:gap-[15px]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-[12px_14px] sm:p-[14px_16px] border border-[#ddd] rounded-lg text-[13px] sm:text-sm focus:border-[#8E2DE2] focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[12px_14px] sm:p-[14px_16px] border border-[#ddd] rounded-lg text-[13px] sm:text-sm focus:border-[#8E2DE2] focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-[12px_14px] sm:p-[14px_16px] border border-[#ddd] rounded-lg text-[13px] sm:text-sm focus:border-[#8E2DE2] focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[12px_14px] sm:p-[14px_16px] border border-[#ddd] rounded-lg text-[13px] sm:text-sm focus:border-[#8E2DE2] focus:outline-none resize-y min-h-[100px]"
                required
              ></textarea>
              <button type="submit" className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white border-0 p-[12px_28px] sm:p-[14px_32px] rounded-[25px] text-[14px] sm:text-[15px] font-semibold shadow-[0_4px_12px_rgba(142,45,226,0.3)] hover:shadow-[0_6px_16px_rgba(142,45,226,0.4)] self-center mt-[8px] sm:mt-[10px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}