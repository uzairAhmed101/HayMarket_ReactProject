import React from 'react';
import { motion } from 'framer-motion';
import waveGradient from '../assets/Images/wave_gradient.png';
import section3Img from '../assets/Images/Section3-img.webp';

export default function AssistanceSection() {
  return (
    <section className="bg-white py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] xl:py-[112px] px-[15px] sm:px-[20px] md:px-[40px] lg:px-[65px] relative">
      {/* Decorative wave element */}
      <motion.div 
        className="absolute pointer-events-none z-0 top-[-40px] sm:top-[-80px] md:top-[-120px] lg:top-[-160px] xl:top-[-200px] right-[-10px] sm:right-[-15px] md:right-[-40px] lg:right-[-60px] xl:right-[-80px] h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] w-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img 
          src={waveGradient} 
          alt="" 
          className="h-[25%] sm:h-[35%] md:h-[45%] lg:h-[55%] xl:h-[65%] 2xl:h-[75%] w-auto object-cover" 
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[80px] items-center relative z-1">
        
        {/* Left side - Image */}
        <div className="relative flex justify-center items-center order-1 lg:order-1">
          {/* Purple Circle 1 */}
          <motion.div 
            className="absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] top-[-7px] sm:top-[3px] md:top-[2px] left-[30px] sm:left-[50px] md:left-[60px] lg:left-[67px] rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] opacity-60 z-1"
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
            className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[125px] lg:w-[135px] lg:h-[128px] xl:w-[139px] xl:h-[131px] bottom-[-9px] sm:bottom-[-16px] md:bottom-[-10px] lg:bottom-[-6px] right-[27px] sm:right-[40px] md:right-[45px] lg:right-[51px] rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] opacity-50 z-1"
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
          <div className="relative z-2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-[40px] sm:rounded-[40px] md:rounded-[45px] lg:rounded-[50px] overflow-hidden">
            <img 
              src={section3Img} 
              alt="Customer support representative" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="max-w-full lg:max-w-[600px] order-2 lg:order-2 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.2] text-center lg:text-left font-tusker">
            <span className="text-[#8E2DE2]">NEED ASSISTANCE?</span><br />
            <span className="text-black">HERE'S HOW YOU CAN GET OUR HELP</span>
          </h2>
          
          <p className="text-[14px] sm:text-[14px] md:text-[15px] leading-[1.8] text-[#555] mb-[25px] sm:mb-[30px] text-center lg:text-left">
            To ensure you get the most effective and personalized support, simply follow the step-by-step guide 
            below — each step is designed to help you identify the best solution tailored to your specific needs and 
            preferences.
          </p>

          <ul className="list-none mb-[30px] sm:mb-[35px] max-w-[500px] mx-auto lg:max-w-full lg:mx-0">
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
              <li key={i} className="text-[13px] sm:text-[13px] md:text-[14px] text-[#333] pl-[25px] relative leading-[1.6] font-tusker">
                <span className="absolute left-0 top-[-5px] text-[18px] sm:text-[20px] font-bold text-[#8E2DE2]">•</span>
                {step}
              </li>
            ))}
          </ul>

          <div className="flex gap-[15px] flex-wrap justify-center lg:justify-start">
            {/* Primary Button */}
            <button className="bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] text-white border-none py-[12px] sm:py-[14px] px-[28px] sm:px-[32px] rounded-[25px] text-[13px] sm:text-[14px] font-semibold cursor-pointer shadow-[0_4px_12px_rgba(142,45,226,0.3)] hover:shadow-[0_6px_16px_rgba(142,45,226,0.4)] active:scale-95 transition-transform w-full sm:w-auto font-tusker">
              Get In Touch Today
            </button>

            {/* Secondary Button */}
            <button className="bg-white text-[#8E2DE2] border-2 border-[#8E2DE2] py-[10px] sm:py-[12px] px-[24px] sm:px-[28px] rounded-[25px] text-[13px] sm:text-[14px] font-semibold cursor-pointer hover:bg-[#8E2DE2] hover:text-white transition-colors w-full sm:w-auto font-tusker">
              Email To Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}