import React from 'react';
import { motion } from 'framer-motion';
import waveGradient from '../assets/Images/wave_gradient.png';
import section3Img from '../assets/Images/Section3-img.webp';

export default function AssistanceSection() {
  return (
    <section className="bg-white py-[112px] px-[65px] relative">
      {/* Decorative element - top right */}
      <motion.div 
        className="absolute top-[-327px] right-[-81px] pointer-events-none z-[100]"
        initial={{ opacity: 0, x: 200, y: -100 }}
        animate={{ 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: { duration: 1, ease: "easeOut", delay: 0.3 }
        }}
        whileInView={{ 
          x: [0, -20, 0, 20, 0],
          y: [0, 20, 0, -20, 0],
          transition: { 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, amount: 0.5, margin: "-100px 0px -100px 0px" }}
      >
        <img src={waveGradient} alt="" className="h-[70%] object-cover" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-[80px] items-center relative z-1">
        
        {/* Left side - Image */}
        <div className="relative flex justify-center items-center">

          {/* Purple Circle 1 */}
          <motion.div 
            className="absolute w-[200px] h-[200px] top-[2px] left-[67px] rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] opacity-60 z-1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: 0.6, 
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -200px 0px" }}
            transition={{ delay: 0.2 }}
          ></motion.div>
          
          {/* Purple Circle 2 */}
          <motion.div 
            className="absolute w-[139px] h-[131px] bottom-[-6px] right-[51px] rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] opacity-50 z-1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: 0.5, 
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -200px 0px" }}
            transition={{ delay: 0.4 }}
          ></motion.div>
          
          {/* Image Wrapper */}
          <div className="relative z-2 w-[450px] h-[450px] rounded-[50px] overflow-hidden">
            <img 
              src={section3Img} 
              alt="Customer support representative" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="max-w-[600px]">
          <h2 className="text-[40px] leading-[1.2] font-black mb-[25px]">
            <span className="text-[#8E2DE2]">NEED ASSISTANCE?</span><br />
            <span className="text-black">HERE'S HOW YOU CAN GET OUR HELP</span>
          </h2>
          
          <p className="text-[15px] leading-[1.8] text-[#555] mb-[30px]">
            To ensure you get the most effective and personalized support, simply follow the step-by-step guide 
            below — each step is designed to help you identify the best solution tailored to your specific needs and 
            preferences.
          </p>

          <ul className="list-none mb-[35px]">
            {[
              "Connect with us on the Live Chat or Call Us",
              "Submit Your Details",
              "Brainstorm with a Live Expert",
              "Get a Customized Solution",
              "Review and Approve Your NDA",
              "Use a 30 Secure Link to Place Your Order",
              "Receive the Confirmation of your Purchase",
              "Track Your Order on Client Portal",
              "Upload Your Files",
              "Start your Astonishing Journey"
            ].map((step, i) => (
              <li key={i} className="text-[14px] text-[#333] pl-[25px] relative leading-[1.6]">
                <span className="absolute left-0 top-[-5px] text-[20px] font-bold text-[#8E2DE2]">•</span>
                {step}
              </li>
            ))}
          </ul>

          <div className="flex gap-[15px] flex-wrap">
            {/* Primary Button */}
            <button className="bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] text-white border-none py-[14px] px-[32px] rounded-[25px] text-[14px] font-semibold cursor-pointer shadow-[0_4px_12px_rgba(142,45,226,0.3)] hover:shadow-[0_6px_16px_rgba(142,45,226,0.4)] active:scale-95 transition-transform">
              Get In Touch Today
            </button>

            {/* Secondary Button */}
            <button className="bg-white text-[#8E2DE2] border-2 border-[#8E2DE2] py-[12px] px-[28px] rounded-[25px] text-[14px] font-semibold cursor-pointer hover:bg-[#8E2DE2] hover:text-white transition-colors">
              Email To Us
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Styles via Tailwind's built-in breakpoints */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .assistance-section { padding: 60px 20px; }
          .section4-decoration-element-top-right { top: -355px; right: -121px; }
          .assistance-container { gap: 50px; }
          .content-title { font-size: 36px; }
          .image-wrapper { width: 380px; height: 380px; }
          .purple-circle-1 { width: 160px; height: 160px; }
          .purple-circle-2 { width: 140px; height: 140px; }
        }

        @media (max-width: 768px) {
          .assistance-section { padding: 50px 20px; }
          .section4-decoration-element-top-right { top: -208px; right: -81px; height: 50%; }
          .assistance-container { grid-template-columns: 1fr; gap: 40px; }
          .image-container { order: 1; }
          .content-container { order: 2; max-width: 100%; }
          .content-title { font-size: 32px; text-align: center; }
          .content-description { text-align: center; }
          .steps-list { max-width: 500px; margin-left: auto; margin-right: auto; }
          .button-group { justify-content: center; }
          .image-wrapper { width: 350px; height: 350px; }
          .purple-circle-1 { width: 140px; height: 140px; top: 3px; left: 166px; }
          .purple-circle-2 { width: 120px; height: 120px; bottom: -16px; right: 150px; }
        }

        @media (max-width: 480px) {
          .assistance-section { padding: 40px 15px; }
          .section4-decoration-element-top-right { top: -202px; right: -64px; height: 40%; }
          .content-title { font-size: 28px; }
          .content-description { font-size: 14px; }
          .steps-list li { font-size: 13px; }
          .button-group { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; }
          .image-wrapper { width: 300px; height: 300px; border-radius: 40px; }
          .purple-circle-1 { width: 120px; height: 120px; top: -7px; left: 63px; }
          .purple-circle-2 { width: 100px; height: 100px; bottom: -9px; right: 27px; }
        }
      `}</style>
    </section>
  );
}