import React, { useState } from 'react';
import formBg from '../assets/Images/Form-bg.webp';

const style = `
  .manuscript-cta-container {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding: 0;
    position: relative;
  }

  .manuscript-cta-section {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 70px 40px;
    position: relative;
    overflow: hidden;
    min-height: 550px;
    display: flex;
    align-items: center;
    margin-top: 60px;
  }

  .manuscript-decorative-pen {
    position: absolute;
    opacity: 0.1;
    z-index: 0;
    right: 80px;
    bottom: 50px;
    width: 200px;
    height: 500px;
    transform: rotate(-20deg);
  }

  .manuscript-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .manuscript-left-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .manuscript-main-title {
    font-size: 29px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .manuscript-description-text {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 35px;
    line-height: 1.7;
  }

  .manuscript-features-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-bottom: 40px;
  }

  .manuscript-feature-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .manuscript-feature-icon {
    width: 18px;
    height: 18px;
    min-width: 18px;
    background: white;
    color: #6b1b9a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    margin-top: 3px;
  }

  .manuscript-feature-text {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
  }

  .manuscript-bottom-section {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .manuscript-help-text {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }

  .manuscript-btn-started {
    background: linear-gradient(135deg, #a020f0 0%, #c020f0 100%);
    color: white;
    border: none;
    padding: 11px 24px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(160, 32, 240, 0.4);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .manuscript-btn-started:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(160, 32, 240, 0.5);
  }

  .manuscript-right-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .manuscript-form-title {
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .manuscript-form-subtitle {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 25px;
    text-align: center;
  }

  .manuscript-form-group {
    margin-bottom: 18px;
  }

  .manuscript-form-input {
    width: 100%;
    padding: 11px 14px;
    border: none;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    font-size: 13px;
    color: white;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .manuscript-form-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .manuscript-form-input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: #a020f0;
  }

  .manuscript-form-textarea {
    width: 100%;
    padding: 11px 14px;
    border: none;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    font-size: 13px;
    color: white;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-height: 100px;
    resize: vertical;
  }

  .manuscript-form-textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .manuscript-form-textarea:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: #a020f0;
  }

  .manuscript-form-submit {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #a020f0 0%, #c020f0 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(160, 32, 240, 0.3);
  }

  .manuscript-form-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(160, 32, 240, 0.4);
  }

  .manuscript-success-message {
    margin-top: 20px;
    padding: 15px;
    background: rgba(0, 255, 0, 0.1);
    border-radius: 6px;
    color: #00ff00;
    text-align: center;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    .manuscript-cta-section {
      padding: 60px 30px;
      min-height: 500px;
    }

    .manuscript-content-wrapper {
      gap: 50px;
    }

    .manuscript-main-title {
      font-size: 26px;
    }

    .manuscript-description-text {
      font-size: 13px;
      margin-bottom: 30px;
    }

    .manuscript-features-wrapper {
      margin-bottom: 30px;
    }

    .manuscript-feature-text {
      font-size: 12px;
    }

    .manuscript-form-title {
      font-size: 16px;
    }

    .manuscript-form-subtitle {
      font-size: 12px;
    }

    .manuscript-form-input,
    .manuscript-form-textarea {
      font-size: 12px;
      padding: 10px 12px;
    }

    .manuscript-form-submit {
      font-size: 13px;
      padding: 11px;
    }
  }

  @media (max-width: 768px) {
    .manuscript-cta-section {
      padding: 50px 20px;
      min-height: auto;
      margin-top: 40px;
    }

    .manuscript-content-wrapper {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .manuscript-left-content,
    .manuscript-right-content {
      text-align: center;
    }

    .manuscript-main-title {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .manuscript-description-text {
      font-size: 12px;
      margin-bottom: 25px;
    }

    .manuscript-features-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
      margin-bottom: 25px;
    }

    .manuscript-bottom-section {
      flex-direction: column;
      gap: 10px;
    }

    .manuscript-help-text {
      font-size: 12px;
    }

    .manuscript-btn-started {
      font-size: 12px;
      padding: 10px 20px;
    }

    .manuscript-form-title {
      font-size: 15px;
      margin-bottom: 6px;
    }

    .manuscript-form-subtitle {
      font-size: 11px;
      margin-bottom: 20px;
    }

    .manuscript-form-group {
      margin-bottom: 15px;
    }

    .manuscript-decorative-pen {
      width: 150px;
      height: 400px;
      right: 30px;
      bottom: 30px;
    }
  }

  @media (max-width: 480px) {
    .manuscript-cta-section {
      padding: 40px 15px;
      margin-top: 30px;
    }

    .manuscript-main-title {
      font-size: 20px;
      margin-bottom: 12px;
    }

    .manuscript-description-text {
      font-size: 11px;
      margin-bottom: 20px;
    }

    .manuscript-features-wrapper {
      gap: 12px;
      margin-bottom: 20px;
    }

    .manuscript-feature-item {
      gap: 10px;
    }

    .manuscript-feature-icon {
      width: 16px;
      height: 16px;
      min-width: 16px;
      font-size: 10px;
    }

    .manuscript-feature-text {
      font-size: 11px;
    }

    .manuscript-help-text {
      font-size: 11px;
    }

    .manuscript-btn-started {
      font-size: 11px;
      padding: 9px 18px;
    }

    .manuscript-form-title {
      font-size: 14px;
    }

    .manuscript-form-subtitle {
      font-size: 10px;
    }

    .manuscript-form-input,
    .manuscript-form-textarea {
      font-size: 11px;
      padding: 9px 10px;
    }

    .manuscript-form-submit {
      font-size: 12px;
      padding: 10px;
    }

    .manuscript-decorative-pen {
      display: none;
    }
  }
`;

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
      <style>{style}</style>
      <div className="manuscript-cta-container">
        <div 
          className="manuscript-cta-section"
          style={{ backgroundImage: `url(${formBg})` }}
        >
          <div className="manuscript-content-wrapper">
            <div className="manuscript-left-content">
              <h1 className="manuscript-main-title">
                GET YOUR MANUSCRIPT PUBLISHED WITH US
              </h1>
              <p className="manuscript-description-text">
                Transform your manuscript into a professionally published book with our comprehensive publishing services. 
                Our expert team will guide you through every step of the process, from editing to distribution.
              </p>
              
              <div className="manuscript-features-wrapper">
                <div className="manuscript-feature-item">
                  <div className="manuscript-feature-icon">✓</div>
                  <div className="manuscript-feature-text">Professional Editing & Proofreading</div>
                </div>
                <div className="manuscript-feature-item">
                  <div className="manuscript-feature-icon">✓</div>
                  <div className="manuscript-feature-text">Custom Book Design & Layout</div>
                </div>
                <div className="manuscript-feature-item">
                  <div className="manuscript-feature-icon">✓</div>
                  <div className="manuscript-feature-text">Global Distribution Channels</div>
                </div>
                <div className="manuscript-feature-item">
                  <div className="manuscript-feature-icon">✓</div>
                  <div className="manuscript-feature-text">Marketing & Promotion Support</div>
                </div>
              </div>
              
              <div className="manuscript-bottom-section">
                <span className="manuscript-help-text">Need help with your publishing journey?</span>
                <button className="manuscript-btn-started">
                  <span>Chat With Us</span>
                  <span>💬</span>
                </button>
              </div>
            </div>
            
            <div className="manuscript-right-content">
              <h2 className="manuscript-form-title">SUBMIT YOUR MANUSCRIPT</h2>
              <p className="manuscript-form-subtitle">Fill out the form below and our experts will contact you shortly</p>
              
              <div className="manuscript-form-wrapper">
                <div className="manuscript-form-group">
                  <input
                    type="text"
                    name="name"
                    className="manuscript-form-input"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="manuscript-form-group">
                  <input
                    type="email"
                    name="email"
                    className="manuscript-form-input"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="manuscript-form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="manuscript-form-input"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="manuscript-form-group">
                  <textarea
                    name="description"
                    className="manuscript-form-textarea"
                    placeholder="Enter a brief description about your book and publishing goals"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button className="manuscript-form-submit" onClick={handleSubmit}>
                  Submit
                </button>
                
                {submitted && (
                  <div className="manuscript-success-message">
                    Thank you! We will contact you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}