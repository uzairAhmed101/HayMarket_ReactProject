import React from 'react';
import { motion } from 'framer-motion';
import laptopImage from '../assets/Images/laptop-front-adhesive-notes-stucked-wall 2.webp';
import laptopImage2 from '../assets/Images/Haymarket Publishers.png';

const style = `

  .section7-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 160px 40px 20px 40px;
  }

  .section7-title-section {
    text-align: center;
    margin-bottom: 50px;
  }

  .section7-title {
    font-size: 36px;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 0.5px;
  }

  .section7-title-highlight {
    color: #a020f0;
  }

  .testimonials-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    perspective: 1000px;
  }

  .testimonial-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
  }

  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(160, 32, 240, 0.2);
  }

  .card-header {
    background: linear-gradient(135deg, #9020f0 0%, #a020f0 100%);
    padding: 25px;
    color: white;
    position: relative;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .quote-text {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
    color: white;
    margin-bottom: 15px;
    font-style: italic;
  }

  .user-info {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .user-details {
    font-size: 13px;
  }

  .user-name {
    font-weight: 700;
    color: white;
    display: block;
  }

  .user-description {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.9);
    display: block;
  }

  .card-body {
    padding: 25px;
    background: #f9f3ff;
    min-height: 80px;
  }

  .card-body-content {
    color: #666;
    font-size: 13px;
    line-height: 1.6;
  }

  .decoration {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .laptop-image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding: 40px 20px;
    position: relative;
    height: 400px; /* Add fixed height to create space for absolutely positioned image */
  }

  .laptop-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .laptop-centered-image {
   width: 100%;
    height: auto;
    border-radius: 8px;
    position: absolute;
    left: -11px;
    /* top: -24px; */
    bottom: -150px;
    z-index: 10;
  }

  .laptop-logo-section{
z-index: 50;
    z-index: 50;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 190px;
  }

  @media (max-width: 1024px) {
    .section7-container {
      padding: 92px 15px;
    }

    .section7-title {
      font-size: 32px;
    }

    .testimonials-wrapper {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }
  }

  @media (max-width: 1024px){
  .laptop-centered-image {
      width: 100%;
    height: auto;
    border-radius: 8px;
    position: absolute;
    left: -11px;
    bottom: 25px;
    z-index: 10;

  }
    .laptop-logo-section{
    z-index: 50;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 155px;
    }
}


  @media (max-width: 768px) {
    .section7-container {
      padding: 0px 2px 14px;
    }

    .laptop-logo-section{
    z-index: 50;
    position: absolute;
    top: 28%;
    left: 51%;
    transform: translate(-50%, -50%);
    height: 155px;
    }

    .section7-title {
      font-size: 28px;
    }

    .testimonials-wrapper {
      grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
    }

    .card-header {
      padding: 10px 18px;
      min-height: 85px;
    }

    .quote-text {
      font-size: 10px;
    }

    .card-body {
      padding: 6px 13px;
      min-height: 70px;
    }

    .avatar {
      width: 36px;
      height: 36px;
      font-size: 18px;
    }

    .user-details {
      font-size: 12px;
    }

    .user-name {
      font-size: 12px;
    }

    .user-description {
      font-size: 10px;
    }

    .laptop-image-section {
      padding: 30px 15px;
      margin-top: 40px;
    }

    .laptop-centered-image {
     border-radius: 6px;
    left: 0px;
    bottom: 0px;
    }
  }

  @media (max-width: 480px) {
    .section7-container {
      padding: 30px 10px;
    }
.laptop-logo-section{

        z-index: 50;
        position: absolute;
        top: 61%;
        left: 51%;
        transform: translate(-50%, -50%);
        height: 84px;}
    .section7-title-section {
      margin-bottom: 35px;
    }

    .section7-title {
      font-size: 22px;
    }

    .testimonials-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .card-header {
      padding: 18px;
      min-height: 100px;
    }

    .quote-text {
      font-size: 13px;
      margin-bottom: 10px;
    }

    .card-body {
      padding: 18px;
      min-height: 60px;
    }

    .avatar {
      width: 34px;
      height: 34px;
      font-size: 16px;
    }

    .user-details {
      font-size: 11px;
    }

    .card-body-content {
      font-size: 12px;
    }

    .laptop-image-section {
      display: none;
    }

    .laptop-centered-image {
      border-radius: 4px;
    }
  }

  @media (max-width: 374px){
  .laptop-logo-section{
  display: none;
}
  .laptop-centered-image{
  display: none;
}

  .laptop-image-section {
    display: none;
    height: 0;
  }
  }

//  @media (max-width: 375px){
//    display: none;
// }
//   .laptop-centered-image{
//   display: none;
// }

//   .laptop-image-section {
//     display: none;
//     height: 0;
//   }
 }

`;

export default function Section7() {
  const testimonials = [
    {
      quote: '"A terrific piece of praise"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    },
    {
      quote: '"A fantastic bit of feedback"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    },
    {
      quote: '"A genuinely glowing review"',
      name: 'Name',
      description: 'Description',
      avatar: '👤'
    }
  ];

  // Animation variants for the testimonial cards - emerging directly from laptop-logo-section
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      // Position cards to start from the laptop-logo-section location
      x: 0,
      y: 150, // Start below the laptop-logo-section
      position: 'relative'
    },
    show: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      y: 0, // Move to original position
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    }
  };

  // Animation for laptop image section
  const laptopSectionAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <style>{style}</style>
      <div className="section7-container">
        <div className="section7-title-section">
          <h1 className="section7-title">
            SEE WHAT PEOPLE SAY <span className="section7-title-highlight">ABOUT US</span>
          </h1>
        </div>

        {/* Animated testimonials section - cards emerge directly from laptop-logo-section */}
        <motion.div 
          className="testimonials-wrapper"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ position: 'relative', zIndex: 60 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={item}
              custom={index}
              style={{ 
                originX: 0.5, 
                originY: 1.0, // Anchor at the bottom center of the laptop-logo-section
              }}
            >
              <div className="card-header">
                <div className="quote-text">{testimonial.quote}</div>
                <div className="user-info">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="user-details">
                    <span className="user-name">{testimonial.name}</span>
                    <span className="user-description">{testimonial.description}</span>
                  </div>
                </div>
                <div className="decoration"></div>
              </div>
              <div className="card-body">
                <div className="card-body-content">
                  Additional feedback and detailed review content goes here to complete the testimonial experience.
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Laptop Image Section */}
      <motion.div 
        className="laptop-image-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={laptopSectionAnimation}
        data-motion-dev
      >
        <div className="laptop-image-container">
          <img 
            src={laptopImage2} 
            alt="Laptop with adhesive notes" 
            className="laptop-logo-section"
            data-motion-dev-element
          />
          <img 
            src={laptopImage} 
            alt="Laptop with adhesive notes" 
            className="laptop-centered-image"
            data-motion-dev-element
          />
        </div>
      </motion.div>

    </>
  );
}