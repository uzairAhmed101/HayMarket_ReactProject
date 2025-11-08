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
      <div className="w-screen max-w-screen mx-[-50vw] ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] px-0 relative">
        <div 
          className="bg-cover bg-center bg-no-repeat py-[70px] px-10 relative overflow-hidden min-h-[550px] flex items-center mt-[60px] font-tusker md:py-[50px] md:px-5 md:min-h-auto md:mt-10 sm:py-[40px] sm:px-[30px] sm:mt-[40px] xs:py-[40px] xs:px-[15px] xs:mt-[30px]"
          style={{ backgroundImage: `url(${formBg})` }}
        >
          {/* Ensuring the form is on the right with explicit grid positioning */}
          <div className="grid grid-cols-2 gap-20 max-w-[1400px] mx-auto relative z-1 w-full lg:gap-[50px] md:grid-cols-1 md:gap-10 sm:gap-[40px]">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center md:text-center">
              <h1 className="text-[29px] font-bold text-white mb-5 leading-tight uppercase tracking-[1px] font-tusker md:text-[24px] md:mb-[15px] sm:text-[24px] sm:mb-[15px] xs:text-[20px] xs:mb-3">
                GET YOUR MANUSCRIPT PUBLISHED WITH US
              </h1>
              <p className="text-sm text-[rgba(255,255,255,0.85)] mb-[35px] md:text-[12px] md:mb-[25px] sm:text-[12px] sm:mb-[25px] xs:text-[11px] xs:mb-5">
                Transform your manuscript into a professionally published book with our comprehensive publishing services. 
                Our expert team will guide you through every step of the process, from editing to distribution.
              </p>
              
              <div className="grid grid-cols-2 gap-0.5 mb-10 md:grid-cols-1 md:gap-[15px] md:mb-[25px] sm:grid-cols-1 sm:gap-[15px] sm:mb-[25px] xs:gap-3 xs:mb-5">
                <div className="flex gap-3 items-start md:gap-2.5 sm:gap-2.5 xs:gap-2.5">
                  <div className="w-[18px] h-[18px] min-w-[18px] bg-white text-[#6b1b9a] rounded-full flex items-center justify-center text-xs font-bold mt-1 md:w-4 md:h-4 md:min-w-4 md:text-[10px] sm:w-4 sm:h-4 sm:min-w-4 sm:text-[10px] xs:w-4 xs:h-4 xs:min-w-4 xs:text-[10px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] md:text-[12px] sm:text-[12px] xs:text-[11px]">
                    Professional Editing & Proofreading
                  </div>
                </div>
                <div className="flex gap-3 items-start md:gap-2.5 sm:gap-2.5 xs:gap-2.5">
                  <div className="w-[18px] h-[18px] min-w-[18px] bg-white text-[#6b1b9a] rounded-full flex items-center justify-center text-xs font-bold mt-1 md:w-4 md:h-4 md:min-w-4 md:text-[10px] sm:w-4 sm:h-4 sm:min-w-4 sm:text-[10px] xs:w-4 xs:h-4 xs:min-w-4 xs:text-[10px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] md:text-[12px] sm:text-[12px] xs:text-[11px]">
                    Custom Book Design & Layout
                  </div>
                </div>
                <div className="flex gap-3 items-start md:gap-2.5 sm:gap-2.5 xs:gap-2.5">
                  <div className="w-[18px] h-[18px] min-w-[18px] bg-white text-[#6b1b9a] rounded-full flex items-center justify-center text-xs font-bold mt-1 md:w-4 md:h-4 md:min-w-4 md:text-[10px] sm:w-4 sm:h-4 sm:min-w-4 sm:text-[10px] xs:w-4 xs:h-4 xs:min-w-4 xs:text-[10px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] md:text-[12px] sm:text-[12px] xs:text-[11px]">
                    Global Distribution Channels
                  </div>
                </div>
                <div className="flex gap-3 items-start md:gap-2.5 sm:gap-2.5 xs:gap-2.5">
                  <div className="w-[18px] h-[18px] min-w-[18px] bg-white text-[#6b1b9a] rounded-full flex items-center justify-center text-xs font-bold mt-1 md:w-4 md:h-4 md:min-w-4 md:text-[10px] sm:w-4 sm:h-4 sm:min-w-4 sm:text-[10px] xs:w-4 xs:h-4 xs:min-w-4 xs:text-[10px]">
                    ✓
                  </div>
                  <div className="text-[13px] text-[rgba(255,255,255,0.9)] md:text-[12px] sm:text-[12px] xs:text-[11px]">
                    Marketing & Promotion Support
                  </div>
                </div>
              </div>
              
              <div className="flex gap-[15px] items-center md:flex-col md:gap-[10px] sm:flex-col sm:gap-[10px] xs:flex-col xs:gap-[10px]">
                <span className="text-[13px] text-[rgba(255,255,255,0.8)] font-medium md:text-[12px] sm:text-[12px] xs:text-[11px]">
                  Need help with your publishing journey?
                </span>
                <button className="bg-gradient-to-br from-[#a020f0] to-[#c020f0] text-white border-none py-[11px] px-6 rounded-[20px] text-[13px] font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-[0_5px_20px_rgba(160,32,240,0.4)] flex gap-2 items-center font-tusker hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(160,32,240,0.5)] md:text-[12px] md:py-[10px] md:px-5 sm:text-[12px] sm:py-[10px] sm:px-5 xs:text-[11px] xs:py-[9px] xs:px-[18px]">
                  <span>Chat With Us</span>
                  <span>💬</span>
                </button>
              </div>
            </div>
            
            
            
            <div className="flex flex-col justify-center md:text-center">
              <h2 className="text-[18px] font-bold text-white mb-2 uppercase tracking-[0.5px] text-center font-tusker md:text-[15px] md:mb-1.5 sm:text-[15px] sm:mb-1.5 xs:text-[14px]">
                SUBMIT YOUR MANUSCRIPT
              </h2>
              <p className="text-[13px] text-[rgba(255,255,255,0.7)] mb-[25px] text-center md:text-[11px] md:mb-5 sm:text-[11px] sm:mb-5 xs:text-[10px] xs:mb-5">
                Fill out the form below and our experts will contact you shortly
              </p>
              
              <div className="bg-transparent backdrop-blur-sm border border-[rgba(255,255,255,0.3)] rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] relative overflow-hidden p-[30px] md:p-[30px] sm:p-5 xs:p-5">
                <div className="mb-[18px] md:mb-[15px] sm:mb-[15px] xs:mb-[15px]">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-[11px_14px] border-none rounded-lg bg-[rgba(255,255,255,0.15)] text-[13px] text-white transition-all duration-300 border border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:bg-[rgba(255,255,255,0.2)] focus:border-[#a020f0] md:text-[12px] md:p-[10px_12px] sm:text-[12px] sm:p-[10px_12px] xs:text-[11px] xs:p-[9px_10px]"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-[18px] md:mb-[15px] sm:mb-[15px] xs:mb-[15px]">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-[11px_14px] border-none rounded-lg bg-[rgba(255,255,255,0.15)] text-[13px] text-white transition-all duration-300 border border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:bg-[rgba(255,255,255,0.2)] focus:border-[#a020f0] md:text-[12px] md:p-[10px_12px] sm:text-[12px] sm:p-[10px_12px] xs:text-[11px] xs:p-[9px_10px]"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-[18px] md:mb-[15px] sm:mb-[15px] xs:mb-[15px]">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-[11px_14px] border-none rounded-lg bg-[rgba(255,255,255,0.15)] text-[13px] text-white transition-all duration-300 border border-[rgba(255,255,255,0.2)] font-tusker focus:outline-none focus:bg-[rgba(255,255,255,0.2)] focus:border-[#a020f0] md:text-[12px] md:p-[10px_12px] sm:text-[12px] sm:p-[10px_12px] xs:text-[11px] xs:p-[9px_10px]"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-[18px] md:mb-[15px] sm:mb-[15px] xs:mb-[15px]">
                  <textarea
                    name="description"
                    className="w-full p-[11px_14px] border-none rounded-lg bg-[rgba(255,255,255,0.15)] text-[13px] text-white transition-all duration-300 border border-[rgba(255,255,255,0.2)] min-h-[100px] resize-y font-tusker focus:outline-none focus:bg-[rgba(255,255,255,0.2)] focus:border-[#a020f0] md:text-[12px] md:p-[10px_12px] sm:text-[12px] sm:p-[10px_12px] xs:text-[11px] xs:p-[9px_10px]"
                    placeholder="Enter a brief description about your book and publishing goals"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button 
                  className="w-full p-3 bg-gradient-to-br from-[#a020f0] to-[#c020f0] text-white border-none rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-[0_5px_15px_rgba(160,32,240,0.3)] font-tusker hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(160,32,240,0.4)] md:text-[13px] md:p-[11px] sm:text-[13px] sm:p-[11px] xs:text-[12px] xs:p-[10px]"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                
                {submitted && (
                  <div className="mt-5 p-[15px] bg-[rgba(0,255,0,0.1)] rounded-lg text-[#00ff00] text-center font-medium">
                    Thank you! We will contact you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="absolute opacity-10 z-0 right-20 bottom-[50px] w-[200px] h-[500px] rotate-[-20deg] md:right-[30px] md:bottom-[30px] md:w-[150px] md:h-[400px] sm:right-[30px] sm:bottom-[30px] sm:w-[150px] sm:h-[400px] xs:hidden">
          </div>
        </div>
      </div>
    </>
  );
}