import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Eye } from 'lucide-react';
import blogImage1 from '../assets/Images/Rectangle 1 (1).png';
import blogImage2 from '../assets/Images/Rectangle 1 (2).png';
import blogImage3 from '../assets/Images/Rectangle 1 (3).png';
import waveGradient from '../assets/Images/plaid_gradient.png';
import waveGradient2 from '../assets/Images/plaid_gradient (1).png';

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      image: blogImage1,
      title: "The Future of Publishing",
      description: "Explore how digital transformation is reshaping the publishing industry and what it means for authors.",
      date: "June 15, 2023",
      author: "Jane Smith",
      views: 1240,
      likes: 42
    },
    {
      id: 2,
      image: blogImage2,
      title: "Self-Publishing vs Traditional Publishing",
      description: "A comprehensive comparison of the pros and cons of different publishing approaches for modern authors.",
      date: "May 28, 2023",
      author: "John Doe",
      views: 980,
      likes: 38
    },
    {
      id: 3,
      image: blogImage3,
      title: "Marketing Your Book in the Digital Age",
      description: "Effective strategies for promoting your book using social media and online platforms.",
      date: "May 10, 2023",
      author: "Emily Johnson",
      views: 1560,
      likes: 56
    }
  ];

  return (
    <>
      <div className="mx-auto w-full relative flex flex-col items-center justify-center sm:p-8 md:p-15 lg:px-20">
        <motion.div 
          className="absolute h-[30%] sm:h-[35%] md:h-[40%] lg:h-[45%] xl:h-[50%] left-0 top-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={waveGradient} alt="" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div 
          className="absolute h-[30%] sm:h-[35%] md:h-[40%] lg:h-[45%] xl:h-[50%] right-[10%] sm:right-[15%] lg:right-[20%] bottom-[-20%] sm:bottom-[-25%] md:bottom-[-30%] lg:bottom-[-35%]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={waveGradient2} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <div className="text-center mb-[30px] sm:mb-10 md:mb-[50px] lg:mb-[60px] xl:mb-[70px] relative z-10">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-[#1a1a1a] tracking-[1px]">
            LATEST <span className="text-[#a020f0]">BLOGS</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] sm:gap-5 md:gap-[25px] lg:gap-[30px] xl:gap-[35px] relative z-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col hover:translate-y-[-10px] hover:shadow-[0_15px_45px_rgba(160,32,240,0.2)]">
              <div className="w-full h-[180px] sm:h-[200px] md:h-[200px] lg:h-[210px] xl:h-[220px] bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] overflow-hidden flex items-center justify-center text-[60px] text-[#ddd] flex-shrink-0">
                <img src={blog.image} alt={blog.title} className="w-[90%] h-[90%]" />
              </div>
              
              <div className="p-[15px] sm:p-5 md:p-[22px] lg:p-[25px] flex-grow flex flex-col">
                <div className="flex gap-[10px] sm:gap-[15px] md:gap-4 lg:gap-5 mb-3 sm:mb-3 lg:mb-[15px] flex-wrap text-[10px] sm:text-[12px] md:text-[12px] lg:text-[13px] text-[#999]">
                  <div className="flex items-center gap-1.5">
                    <User className="text-[#a020f0] font-medium text-[10px] sm:text-[12px] lg:text-[14px] w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="text-[#a020f0] w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{blog.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="text-[#a020f0] w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{blog.views}</span>
                  </div>
                </div>
                
                <h3 className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#1a1a1a] mb-1.5 sm:mb-2 leading-[1.4] font-tusker">
                  <span className="text-[#a020f0]">Haymarket</span> Publishers
                </h3>
                
                <p className="text-[11px] sm:text-[13px] md:text-[13px] lg:text-[14px] leading-[1.6] text-[#666] flex-grow">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}