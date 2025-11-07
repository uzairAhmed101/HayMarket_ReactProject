import React from 'react';
import { motion } from 'framer-motion';
import { MotionStaggerDiv, MotionFadeInUp } from './AnimationUtils'; // Added AnimationUtils import
// import waveGradient from '../assets/Images/circular_gradient.png';

export default function WhyChooseUs() {
  const cards = [
    {
      number: '01',
      title: 'MARKETING PLANS',
      description: 'The best way to reach customers is to market your product, and with Hypermuse, we offer special plans for publishers, with not much exposures, can set publish books of a premium level and reach customers through a strategy services in order to attract readers.'
    },
    {
      number: '02',
      title: 'ALL-TIME AVAILABILITY',
      description: 'Whether you are looking forward to sell publishing a book on a online marketplace like Amazon, or collaborate with Hypermuse? Our team of experts allows you to sell your books, understands your needs and demands, or take our help and get a customized publishing plan for your book.'
    },
    {
      number: '03',
      title: 'HIGH QUALITY CONTENT',
      description: 'Our team of expert writers and authors is well-trained in managing all types of content, whether it is fiction, romance, horror fiction, or sci-fi. If you are planning to avail of our writing services, we\'re strict about its content because we promise to deliver the best.'
    },
    {
      number: '04',
      title: 'REACHING MILLION READERS',
      description: 'The steps to self publishing a book are not so difficult as it seems. With the help of our publishing group book reach the targeted audience. But if you work with us, this problem becomes zero. We have book stockists in the USA, which makes it easier for you to reach a million readers, once you attach your book on their platform.'
    }
  ];

  return (
    <div className="why-choose-us-section">
      {/* Decorative element - center left */}
      <motion.div 
        className="section5-decoration-element-center-left"
        initial={{ opacity: 0, x: -150, y: 0 }}
        animate={{ 
          opacity: 0.7, 
          x: 0, 
          y: 0,
          transition: { 
            duration: 1, 
            ease: "easeOut",
            delay: 0.3
          }
        }}
        whileInView={{ 
          x: [0, -10, 0, 10, 0],
          y: [0, 10, 0, -10, 0],
          transition: { 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <img src={waveGradient} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
      </motion.div>

      {/* Title */}
      <MotionFadeInUp> {/* Wrapped title with MotionFadeInUp */}
        <div className="section-title">
          WHY <span className="purple-text">CHOOSE</span> US
        </div>
      </MotionFadeInUp>

      {/* Cards Container */}
      <MotionStaggerDiv className="cards-container"> {/* Wrapped cards container with stagger animation */}
        {cards.map((card, index) => (
          <MotionFadeInUp key={index} className="card-wrapper"> {/* Wrapped each card with fade in animation */}
            {/* Card Box */}
            <div className="card-box">
              <h3 className="card-title">
                {card.title}
              </h3>
              <p className="card-description">
                {card.description}
              </p>
            </div>

            {/* Number */}
            <div className="card-number">
              {card.number}
            </div>
          </MotionFadeInUp>
        ))}
      </MotionStaggerDiv>

      <style>{`
        .why-choose-us-section {
          min-height: 100vh;
          background-color: #ffffff;
          padding: 164px 79px 0px 79px;
          position: relative;
        }

        .section5-decoration-element-center-left {
       position: absolute;
    /* width: 400px; */
    height: 80%;
    top: -192px;
    left: 0px;
    transform: translateY(-50%);
    /* border-radius: 50% 50% 40% 60%; */
    /* overflow: hidden; */
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
        }

        .section-title {
          text-align: center;
          margin-bottom: 80px;
          font-size: 48px;
          font-weight: bold;
        }

        .purple-text {
          color: #8E2DE2;
        }

        .cards-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .card-wrapper {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .card-box {
          background-color: #f0f0f0;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 30px;
          flex-grow: 1;
          min-height: 330px;
          text-align: center;
          box-shadow: 1px 1px 5px gray;
          position: relative;
        }

        .card-title {
          font-weight: 800;
          font-size: 16px;
          margin-bottom: 20px;
          color: #8E2DE2;
        }

        .card-description {
          font-size: 11px;
          line-height: 1.6;
          font-weight: 600;
          margin-bottom: 0;
        }

        .card-number {
          font-size: 85px;
    font-weight: bold;
    color: #8E2DE2;
    text-align: center;
    position: absolute;
    bottom: -33px;
    margin-left: 75px;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 40px;
            margin-bottom: 60px;
          }
          
          .cards-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .section5-decoration-element-center-left{
              height: 40%;
    top: 7%;
    left: -18px;
          }

          
          .card-box {
            padding: 30px 25px;
            min-height: 300px;
          }
          
          .card-title {
            font-size: 20px;
          }
          
          .card-description {
            font-size: 14px;
          }
          
          .card-number {
            font-size: 113px;
        margin-left: 147px;
          }
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 60px 20px;
          }
          .section5-decoration-element-center-left{
          height: 25%;
        top: -142px;
        left: -15px;
          }
          .section-title {
            font-size: 32px;
            margin-bottom: 50px;
          }
          
          .cards-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .card-box {
            padding: 25px 20px;
            min-height: 280px;
          }
          
          .card-title {
            font-size: 18px;
          }
          
          .card-description {
            font-size: 13px;
          }
          
          .card-number {
            font-size: 110px;
        left: 153px;
        top: 187px;
          }
        }

        @media (max-width: 480px) {
         .section5-decoration-element-center-left {
       height: 18%;
        top: -111px;
        left: -15px;
          }

          .card-number{
          left:0;
          }
        }

        /* Media query for screens up to 375px wide */
        @media (max-width: 375px) {
          .card-number {
            left: -30px !important; /* Adjust position for smaller screens */
          }
        }


      `}</style>
    </div>
  );
}