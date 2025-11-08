import React, { useState } from 'react';

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
    <div className="border-t border-white min-h-screen bg-[#3A0368] p-5 font-tusker">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-10 items-start lg:gap-10 md:grid-cols-2 sm:grid-cols-1">
        {/* Left Section - Content */}
        <div className="text-white py-5">
          <h1 className="text-3xl font-bold mb-5 leading-tight uppercase md:text-4xl">
            WRITING MADE EASY WITHOUT SACRIFICING QUALITY!
          </h1>
          
          <p className="text-base leading-relaxed mb-8 opacity-95 md:text-sm">
            eBook Authors offers affordable, professional writing, editing, and proofreading services customized to your 
            needs. We also help promote your work across multiple platforms using expert strategies and advanced tools. 
            With our 24/7 live content solutions, we're your go-to destination for success.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 text-sm md:text-sm">
                <div className="text-white flex-shrink-0 bg-[#8B0CCC] rounded-full p-0.5 w-4 h-4 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-8">
            <h3 className="text-2xl font-bold mb-4 md:text-2xl">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-3">
              {quickLinks.map((link, index) => (
                <a key={index} href="#" className="text-white text-sm opacity-90 transition-opacity duration-300 hover:opacity-100 hover:underline">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="sticky top-5">
          <div className="backdrop-blur-lg rounded-xl p-[90px] md:p-5">
            <h2 className="text-white text-2xl font-bold mb-6 text-center md:text-xl">
              TALK TO WRITING EXPERT
            </h2>
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 text-white mb-4 border-none rounded-full bg-[#8B0CCC] text-base"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 text-white mb-4 border-none rounded-full bg-[#8B0CCC] text-base"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 text-white mb-4 border-none rounded-full bg-[#8B0CCC] text-base"
              />
              
              <textarea
                name="brief"
                placeholder="Enter Brief"
                value={formData.brief}
                onChange={handleChange}
                className="w-full p-5 text-white mb-4 border-none rounded-2xl bg-[#8B0CCC] text-base resize-y min-h-[100px]"
                rows="4"
              ></textarea>
              
              <button onClick={handleSubmit} className="w-full p-4 bg-[#8B0CCC] text-white border-none rounded-full text-lg font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 mx-auto block">
                SUBMIT
              </button>
            </div>

            <p className="text-white text-xs leading-relaxed mt-5 opacity-80 text-center md:text-xs">
              By clicking the "Submit" button, you are agreeing to the eBook Authors terms 
              and conditions and privacy policy. Rest assured, we will never share your 
              personal information with third parties unless absolutely necessary for 
              service-related activities. Our commitment is to protect your data and maintain 
              the confidentiality of your information. Trust eBook Authors for secure and 
              reliable content creation services. View our complete details.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .footer-form-content-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-form-main-heading {
            font-size: 2rem;
          }

          .footer-form-right-section {
            position: static;
            order: 3;
          }

          .footer-form-left-section {
            order: 1;
          }

        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-form-landing-container {
            padding: 15px;
          }

          .footer-form-main-heading {
            font-size: 1.5rem;
          }

          .footer-form-description {
            font-size: 0.85rem;
          }

          .footer-form-form-container {
            padding: 20px;
          }

          .footer-form-form-title {
            font-size: 1.2rem;
          }

          .footer-form-form-input,
          .footer-form-form-textarea {
            padding: 12px;
            font-size: 0.9rem;
          }

          .footer-form-submit-button {
            padding: 12px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .footer-form-main-heading {
            font-size: 1.3rem;
          }

          .footer-form-service-item {
            font-size: 0.85rem;
          }

          .footer-form-form-container {
            padding: 15px;
          }

          .footer-form-disclaimer {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}