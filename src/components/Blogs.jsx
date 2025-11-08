import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="mx-auto w-full relative flex flex-col items-center justify-center p-40">
        {/* Decorative elements with improved viewport settings for all zoom levels */}
        <div 
          className="absolute h-[50%] left-0 top-0"
        >
          <img src={waveGradient} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div 
          className="absolute h-[50%] right-[20%] bottom-[-35%]"
        >
          <img src={waveGradient2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-center mb-[70px] md:mb-[50px] sm:mb-10 xs:mb-[30px] relative z-10">
          <h1 className="text-[42px] md:text-[36px] sm:text-[32px] xs:text-[28px] font-bold text-[#1a1a1a] tracking-[1px] font-tusker">
            LATEST <span className="text-[#a020f0]">BLOGS</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] md:gap-[25px] sm:gap-5 xs:gap-[15px] relative z-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col hover:translate-y-[-10px] hover:shadow-[0_15px_45px_rgba(160,32,240,0.2)]">
              <div className="w-full h-[220px] sm:h-[180px] xs:h-[200px] bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] overflow-hidden flex items-center justify-center text-[60px] text-[#ddd] flex-shrink-0">
                <img src={blog.image} alt={blog.title} className="w-[90%] h-[90%]" />
              </div>
              
              <div className="p-[25px] sm:p-5 xs:p-[15px] flex-grow flex flex-col">
                <div className="flex gap-5 sm:gap-[15px] xs:gap-[10px] mb-[15px] xs:mb-3 flex-wrap text-[13px] sm:text-[12px] xs:text-[10px] text-[#999]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#a020f0] font-bold text-[14px] sm:text-[12px] xs:text-[10px]">📅</span>
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#a020f0] font-bold text-[14px] sm:text-[12px] xs:text-[10px]">✍️</span>
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="relative w-[14px] h-[14px]">
                      <div className="absolute w-[14px] h-[14px] bg-[#a020f0] rounded-full top-[-7px] left-0"></div>
                      <div className="absolute w-[14px] h-[14px] bg-[#a020f0] rounded-full top-0 left-[7px]"></div>
                    </div>
                    <span>{blog.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block w-4 h-4 border-2 border-[#a020f0] rounded-full relative">
                      <div className="absolute w-2 h-2 bg-[#a020f0] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <span>{blog.views}</span>
                  </div>
                </div>
                
                <h3 className="text-[18px] sm:text-[16px] xs:text-[14px] font-bold text-[#1a1a1a] mb-2 xs:mb-1.5 leading-[1.4] font-tusker">
                  <span className="text-[#a020f0]">Haymarket</span> Publishers
                </h3>
                
                <p className="text-[14px] sm:text-[13px] xs:text-[11px] leading-[1.6] text-[#666] flex-grow">
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