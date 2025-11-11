import React, { useState } from 'react';
import formBg from '../assets/Images/Form-bg.webp';

export default function ManuscriptCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <div className="w-full relative overflow-hidden box-border">
        <div 
          className="bg-cover bg-center bg-no-repeat py-[70px] px-10 relative overflow-hidden min-h-[550px] flex items-center mt-[60px] font-tusker 2xl:py-[70px] 2xl:px-12 xl:py-[60px] xl:px-10 lg:py-[55px] lg:px-8 md:py-[50px] md:px-6 md:min-h-[500px] md:mt-10 sm:py-[40px] sm:px-5 sm:min-h-[450px] sm:mt-[35px] xs:py-[35px] xs:px-4 xs:min-h-[400px] xs:mt-[30px]"
          style={{ backgroundImage: `url(${formBg})` }}
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto relative z-10 w-full 2xl:gap-20 xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 xs:gap-6 box-border px-2">
            
            {/* Left Section - Content */}
            <div className="flex flex-col items-start justify-center w-full min-w-0 order-1 lg:order-1">
              <h1 className="text-white text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight uppercase tracking-[1px] font-tusker 2xl:text-[32px] xl:text-[28px] lg:text-[26px] md:text-[24px] md:mb-4 sm:text-[22px] sm:mb-4 xs:text-[20px] xs:mb-3 break-words w-full">
                GET YOUR MANUSCRIPT PUBLISHED WITH US
              </h1>
              
              <p className="text-[14px] text-[rgba(255,255,255,0.85)] mb-[35px] leading-relaxed 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[13px] md:mb-[30px] sm:text-[12px] sm:mb-[25px] xs:text-[11px] xs:mb-5 break-words w-full">
                Transform your manuscript into a professionally published book with our comprehensive publishing services. 
                Our expert team will guide you through every step of the process, from editing to distribution.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-4 md:mb-8 sm:gap-3 sm:mb-7 xs:gap-3 xs:mb-6">
                <div className="flex gap-3 items-start min-w-0 2xl:gap-3.5 xl:gap-3 lg:gap-2.5 md:gap-2.5 sm:gap-2.5 xs:gap-2">
                  <div className="w-[18px] h-[18px] min-w-[18px] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 2xl:w-5 2xl:h-5 2xl:min-w-5 xl:w-[18px] xl:h-[18px] xl:min-w-[18px] lg:w-4 lg:h-4 lg:min-w-4 md:w-4 md:h-4 md:min-w-4 sm:w-4 sm:h-4 sm:min-w-4 xs:w-[15px] xs:h-[15px] xs:min-w-[15px] xs:text-[9px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] flex-1 min-w-0 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] break-words leading-relaxed">
                    Professional Editing & Proofreading
                  </div>
                </div>
                
                <div className="flex gap-3 items-start min-w-0 2xl:gap-3.5 xl:gap-3 lg:gap-2.5 md:gap-2.5 sm:gap-2.5 xs:gap-2">
                  <div className="w-[18px] h-[18px] min-w-[18px] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 2xl:w-5 2xl:h-5 2xl:min-w-5 xl:w-[18px] xl:h-[18px] xl:min-w-[18px] lg:w-4 lg:h-4 lg:min-w-4 md:w-4 md:h-4 md:min-w-4 sm:w-4 sm:h-4 sm:min-w-4 xs:w-[15px] xs:h-[15px] xs:min-w-[15px] xs:text-[9px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] flex-1 min-w-0 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] break-words leading-relaxed">
                    Custom Book Design & Layout
                  </div>
                </div>
                
                <div className="flex gap-3 items-start min-w-0 2xl:gap-3.5 xl:gap-3 lg:gap-2.5 md:gap-2.5 sm:gap-2.5 xs:gap-2">
                  <div className="w-[18px] h-[18px] min-w-[18px] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 2xl:w-5 2xl:h-5 2xl:min-w-5 xl:w-[18px] xl:h-[18px] xl:min-w-[18px] lg:w-4 lg:h-4 lg:min-w-4 md:w-4 md:h-4 md:min-w-4 sm:w-4 sm:h-4 sm:min-w-4 xs:w-[15px] xs:h-[15px] xs:min-w-[15px] xs:text-[9px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] flex-1 min-w-0 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] break-words leading-relaxed">
                    Global Distribution Channels
                  </div>
                </div>
                
                <div className="flex gap-3 items-start min-w-0 2xl:gap-3.5 xl:gap-3 lg:gap-2.5 md:gap-2.5 sm:gap-2.5 xs:gap-2">
                  <div className="w-[18px] h-[18px] min-w-[18px] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 2xl:w-5 2xl:h-5 2xl:min-w-5 xl:w-[18px] xl:h-[18px] xl:min-w-[18px] lg:w-4 lg:h-4 lg:min-w-4 md:w-4 md:h-4 md:min-w-4 sm:w-4 sm:h-4 sm:min-w-4 xs:w-[15px] xs:h-[15px] xs:min-w-[15px] xs:text-[9px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] flex-1 min-w-0 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] break-words leading-relaxed">
                    Marketing & Promotion Support
                  </div>
                </div>
              </div>
              
              {/* CTA Button Section */}
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full 2xl:gap-4 xl:gap-3.5 lg:gap-3 md:gap-3 sm:gap-3 xs:gap-2.5">
                <span className="text-[13px] text-[rgba(255,255,255,0.8)] font-normal 2xl:text-[14px] xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] break-words">
                  Need help with your publishing journey?
                </span>
                <button 
                  type="button"
                  className="bg-gradient-to-br from-[#a020f0] to-[#c020f0] text-white border-none py-[11px] px-6 rounded-[20px] text-[13px] font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-[0_5px_20px_rgba(160,32,240,0.4)] flex gap-2 items-center font-tusker hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(160,32,240,0.5)] active:translate-y-[0px] 2xl:text-[14px] 2xl:py-3 2xl:px-7 xl:text-[13px] xl:py-[11px] xl:px-6 lg:text-[12px] lg:py-[10px] lg:px-5 md:text-[12px] md:py-[10px] md:px-5 sm:text-[12px] sm:py-[10px] sm:px-5 xs:text-[11px] xs:py-[9px] xs:px-5 whitespace-nowrap"
                >
                  <span>Chat With Us</span>
                  <span>💬</span>
                </button>
              </div>
            </div>
            
            
            {/* Right Section - Form */}
            <div className="flex flex-col justify-center w-full min-w-0 order-2 lg:order-2">
              <h2 className="text-white text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 uppercase tracking-[0.5px] text-center font-tusker 2xl:text-[20px] xl:text-[19px] lg:text-[17px] md:text-[16px] md:mb-2 sm:text-[15px] sm:mb-2 xs:text-[14px] xs:mb-1.5 break-words">
                SUBMIT YOUR MANUSCRIPT
              </h2>
              
              <p className="text-[13px] text-[rgba(255,255,255,0.7)] mb-[25px] text-center 2xl:text-[14px] 2xl:mb-7 xl:text-[13px] xl:mb-6 lg:text-[12px] lg:mb-5 md:text-[12px] md:mb-5 sm:text-[11px] sm:mb-5 xs:text-[10px] xs:mb-4 break-words px-2">
                Fill out the form below and our experts will contact you shortly
              </p>
              
              {/* Form Container */}
              <div className="bg-transparent border border-[rgba(255,255,255,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] relative overflow-hidden p-[30px] w-full box-border 2xl:p-[35px] xl:p-[30px] lg:p-[25px] md:p-[22px] sm:p-5 xs:p-4">
                <form onSubmit={handleSubmit} className="w-full">
                  
                  {/* Name Input */}
                  <div className="mb-[18px] 2xl:mb-5 xl:mb-[18px] lg:mb-4 md:mb-4 sm:mb-[15px] xs:mb-3">
                    <input
                      type="text"
                      name="name"
                      className="w-full p-[11px_0px] bg-transparent text-[13px] text-white transition-all duration-300 border-0 border-b border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:border-[#a020f0] placeholder:text-[rgba(255,255,255,0.5)] box-border 2xl:text-[14px] 2xl:p-[13px_0px] xl:text-[13px] xl:p-[12px_0px] lg:text-[12px] lg:p-[11px_0px] md:text-[12px] md:p-[10px_0px] sm:text-[12px] sm:p-[10px_0px] xs:text-[11px] xs:p-[9px_0px]"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="mb-[18px] 2xl:mb-5 xl:mb-[18px] lg:mb-4 md:mb-4 sm:mb-[15px] xs:mb-3">
                    <input
                      type="email"
                      name="email"
                      className="w-full p-[11px_0px] bg-transparent text-[13px] text-white transition-all duration-300 border-0 border-b border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:border-[#a020f0] placeholder:text-[rgba(255,255,255,0.5)] box-border 2xl:text-[14px] 2xl:p-[13px_0px] xl:text-[13px] xl:p-[12px_0px] lg:text-[12px] lg:p-[11px_0px] md:text-[12px] md:p-[10px_0px] sm:text-[12px] sm:p-[10px_0px] xs:text-[11px] xs:p-[9px_0px]"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="mb-[18px] 2xl:mb-5 xl:mb-[18px] lg:mb-4 md:mb-4 sm:mb-[15px] xs:mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="w-full p-[11px_0px] bg-transparent text-[13px] text-white transition-all duration-300 border-0 border-b border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:border-[#a020f0] placeholder:text-[rgba(255,255,255,0.5)] box-border 2xl:text-[14px] 2xl:p-[13px_0px] xl:text-[13px] xl:p-[12px_0px] lg:text-[12px] lg:p-[11px_0px] md:text-[12px] md:p-[10px_0px] sm:text-[12px] sm:p-[10px_0px] xs:text-[11px] xs:p-[9px_0px]"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {/* Description Textarea */}
                  <div className="mb-[18px] 2xl:mb-5 xl:mb-[18px] lg:mb-4 md:mb-4 sm:mb-[15px] xs:mb-3">
                    <textarea
                      name="description"
                      className="w-full p-[11px_0px] bg-transparent text-[13px] text-white transition-all duration-300 border-0 border-b border-[rgba(255,255,255,0.2)] min-h-[100px] resize-y font-tusker focus:outline-none focus:border-[#a020f0] placeholder:text-[rgba(255,255,255,0.5)] box-border 2xl:text-[14px] 2xl:p-[13px_0px] 2xl:min-h-[120px] xl:text-[13px] xl:p-[12px_0px] xl:min-h-[110px] lg:text-[12px] lg:p-[11px_0px] lg:min-h-[100px] md:text-[12px] md:p-[10px_0px] md:min-h-[90px] sm:text-[12px] sm:p-[10px_0px] sm:min-h-[85px] xs:text-[11px] xs:p-[9px_0px] xs:min-h-[80px]"
                      placeholder="Enter a brief description about your book and publishing goals"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button - Centered, shorter, with rounded corners */}
                  <div className="flex justify-center mt-6">
                    <button 
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-br from-[#a020f0] to-[#c020f0] text-white border-none rounded-full text-[14px] font-medium cursor-pointer transition-all duration-300 ease-in-out shadow-[0_5px_15px_rgba(160,32,240,0.3)] font-tusker hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(160,32,240,0.4)] active:translate-y-[0px] box-border 2xl:text-[15px] 2xl:px-10 2xl:py-4 xl:text-[14px] xl:px-9 xl:py-3.5 lg:text-[13px] lg:px-8 lg:py-3 md:text-[13px] md:px-7 md:py-2.5 sm:text-[13px] sm:px-6 sm:py-2.5 xs:text-[12px] xs:px-5 xs:py-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                
                {/* Success Message */}
                {submitted && (
                  <div className="mt-5 p-[15px] bg-[rgba(0,255,0,0.1)] text-[#00ff00] text-center font-medium text-[13px] break-words 2xl:text-[14px] 2xl:mt-6 2xl:p-4 xl:text-[13px] xl:mt-5 lg:text-[12px] lg:mt-4 md:text-[12px] md:mt-4 sm:text-[12px] sm:mt-4 xs:text-[11px] xs:mt-3 xs:p-3">
                    Thank you! We will contact you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute opacity-10 z-0 right-20 bottom-[50px] w-[200px] h-[500px] rotate-[-20deg] pointer-events-none 2xl:right-24 2xl:w-[220px] 2xl:h-[550px] xl:right-20 xl:w-[200px] xl:h-[500px] lg:right-16 lg:w-[180px] lg:h-[450px] md:right-12 md:bottom-10 md:w-[150px] md:h-[400px] sm:right-8 sm:bottom-8 sm:w-[120px] sm:h-[350px] xs:hidden">
          </div>
        </div>
      </div>
    </>
  );
}