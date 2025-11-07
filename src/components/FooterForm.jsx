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
    <div className="footer-form-landing-container">
      <div className="footer-form-content-wrapper">
        {/* Left Section */}
        <div className="footer-form-left-section">
          <h1 className="footer-form-main-heading">
            WRITING MADE EASY WITHOUT SACRIFICING QUALITY!
          </h1>
          
          <p className="footer-form-description">
            eBook Authors offers affordable, professional writing, editing, and proofreading services customized to your 
            needs. We also help promote your work across multiple platforms using expert strategies and advanced tools. 
            With our 24/7 live content solutions, we're your go-to destination for success.
          </p>

          <div className="footer-form-services-grid">
            {services.map((service, index) => (
              <div key={index} className="footer-form-service-item">
                <div className="footer-form-check-icon"></div>
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="footer-form-quick-links-section-left">
            <h3 className="footer-form-quick-links-title">Quick Links</h3>
            <div className="footer-form-quick-links-grid">
              {quickLinks.map((link, index) => (
                <a key={index} href="#" className="footer-form-quick-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="footer-form-right-section">
          <div className="footer-form-form-container">
            <h2 className="footer-form-form-title">TALK TO WRITING EXPERT</h2>
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="footer-form-form-input"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="footer-form-form-input"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="footer-form-form-input"
              />
              
              <textarea
                name="brief"
                placeholder="Enter Brief"
                value={formData.brief}
                onChange={handleChange}
                className="footer-form-form-textarea"
                rows="4"
              ></textarea>
              
              <button onClick={handleSubmit} className="footer-form-submit-button">
                SUBMIT
              </button>
            </div>

            <p className="footer-form-disclaimer">
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer-form-landing-container {
        border-top: 1px solid white;
          min-height: 100vh;
          background: #3A0368;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        .footer-form-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .footer-form-left-section {
          color: white;
          padding: 20px 0;
        }

        .footer-form-main-heading {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .footer-form-description {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .footer-form-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .footer-form-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
        }

        .footer-form-check-icon {
          color: white;
          flex-shrink: 0;
          background: #8B0CCC;
          border-radius: 50%;
          padding: 2px;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-form-check-icon::before {
          content: '✓';
          font-size: 12px;
          font-weight: bold;
        }

        .footer-form-quick-links-section-left {
          margin-top: 30px;
        }

        .footer-form-quick-links-title {
          font-size: 1.3rem;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .footer-form-quick-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .footer-form-quick-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.9;
          transition: opacity 0.3s;
        }

        .footer-form-quick-link:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .footer-form-right-section {
          position: sticky;
          top: 20px;
        }

        .footer-form-form-container {
        
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 90px;
         
        }

        .footer-form-form-title {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 25px;
          text-align: center;
          font-weight: bold;
        }

        .footer-form-form-input,
        .footer-form-form-textarea {
          width: 100%;
          padding: 15px;
          color: white;
          margin-bottom: 15px;
          border: none;
          border-radius: 50px;
          background: #8B0CCC;
          font-size: 0.95rem;
          font-family: inherit;
        }

        .footer-form-form-input::placeholder,
        .footer-form-form-textarea::placeholder {
          color: white;
        }

        .footer-form-form-textarea {
          resize: vertical;
          min-height: 100px;
          padding: 20px;
        }

        .footer-form-submit-button {
          width: 100%;
          padding: 15px;
          background: #8B0CCC;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
          margin: 0 auto;
          display: block;
        }

        .footer-form-submit-button:hover {
          transform: translateY(-2px);
        }

        .footer-form-disclaimer {
          color: white;
          font-size: 0.7rem;
          line-height: 1.5;
          margin-top: 20px;
          opacity: 0.8;
          text-align: center;
        }

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