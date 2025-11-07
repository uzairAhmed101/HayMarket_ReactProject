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

      
      <div className="blogs-container">
        {/* Decorative elements with improved viewport settings for all zoom levels */}
        <motion.div 
          className="blogs-decoration-element-top-left"
          initial={{ opacity: 0, x: -150, y: -100 }}
          animate={{ 
            opacity: 0.7, 
            x: 0, 
            y: 0,
            transition: { 
              duration: 1, 
              ease: "easeOut",
              delay: 0.2
            }
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
          viewport={{ once: true, amount: 0.5, margin: "-100px 0px -100px 0px" }} // Updated for all zoom levels
        >
          <img src={waveGradient} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        
        <motion.div 
          className="blogs-decoration-element-bottom"
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ 
            opacity: 0.6, 
            x: 0, 
            y: 0,
            transition: { 
              duration: 1, 
              ease: "easeOut",
              delay: 0.4
            }
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
          viewport={{ once: true, amount: 0.5, margin: "-100px 0px -100px 0px" }} // Updated for all zoom levels
        >
          <img src={waveGradient2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        <div className="title-section">
          <h1 className="title">
            LATEST <span className="title-highlight">BLOGS</span>
          </h1>
        </div>

        <div className="blogs-wrapper">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span>{blog.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">✍️</span>
                    <span>{blog.author}</span>
                  </div>
                  <div className="meta-item">
                    <span className="like-icon"></span>
                    <span>{blog.likes}</span>
                  </div>
                  <div className="meta-item">
                    <span className="views-icon"></span>
                    <span>{blog.views}</span>
                  </div>
                </div>
                
                <h3 className="blog-title">
                  <span className="blog-title-highlight">Haymarket</span> Publishers
                </h3>
                
                <p className="blog-description">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .blogs-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0px 65px 60px 65px;
          position: relative;
        }

        .blogs-decoration-element-top-left {
         position: absolute;
    height: 70%;
    top: -244px;
    left: -48px;
    border-radius: 50% 50% 40% 60%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
    opacity: 0.7;
        }

        .blogs-decoration-element-bottom {
             position: absolute;
    height: 70%;
    bottom: -338px;
    left: 78%;
    transform: translateX(-50%);
    border-radius: 50% 50% 40% 60%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.6;
        }

        .blogs-decoration-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          top: -355px;
          rotate: -4deg;
          left: -1px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 70px;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 1px;
        }

        .title-highlight {
          color: #a020f0;
        }

        .blogs-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 35px;
          position: relative;
          z-index: 1;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 45px rgba(160, 32, 240, 0.2);
        }

        .blog-image {
          width: 100%;
          height: 220px;
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          color: #ddd;
          flex-shrink: 0;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #999;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-icon {
          color: #a020f0;
          font-weight: 700;
          font-size: 14px;
        }

        .like-icon {
          color: #a020f0;
          font-size: 14px;
          position: relative;
          width: 14px;
          height: 14px;
        }

        .like-icon:before,
        .like-icon:after {
          content: "";
          position: absolute;
          background: #a020f0;
          border-radius: 50%;
          width: 14px;
          height: 14px;
        }

        .like-icon:before {
          top: -7px;
          left: 0;
        }

        .like-icon:after {
          top: 0;
          left: 7px;
        }

        .like-icon .square {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #a020f0;
          transform: rotate(45deg);
          top: 0;
          left: 0;
        }

        .views-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #a020f0;
          border-radius: 50%;
          position: relative;
        }

        .views-icon::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #a020f0;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .blog-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .blog-title-highlight {
          color: #a020f0;
        }

        .blog-description {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          flex-grow: 1;
        }

        @media (max-width: 1024px) {
          .blogs-container {
            padding: 0px 20px 50px 20px;
          }

          .blogs-decoration-element-bottom{
              height: 51%;
    bottom: -338px;
    left: 64%;
    }

          .blogs-decoration-element-top-left{
          height: 40%;
    top: -213px;
    left: -52px;
    }

          .title {
            font-size: 36px;
            margin-bottom: 50px;
          }

          .blogs-wrapper {
            gap: 25px;
          }

          .blog-content {
            padding: 20px;
          }

          .blog-meta {
            font-size: 12px;
            gap: 15px;
          }

          .blog-title {
            font-size: 16px;
          }

          .blog-description {
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .blogs-container {
            padding: 0px 15px 40px 15px;
          }
.blogs-decoration-element-top-left{
top: -173px;
}

.blogs-decoration-element-bottom{

bottom: -279px;
}

          .title {
            font-size: 32px;
            margin-bottom: 40px;
          }

          .blogs-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .blog-image {
            height: 180px;
          }

          .blog-content {
            padding: 15px;
          }

          .blog-meta {
            font-size: 11px;
            gap: 12px;
            margin-bottom: 12px;
          }

          .blog-title {
            font-size: 15px;
            margin-bottom: 6px;
          }

          .blog-description {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .blogs-container {
            padding: 77px 10px 30px 10px;
          }

.blogs-decoration-element-bottom{
bottom: -321px;
        height: 400px;
}

          .title {
            font-size: 28px;
            margin-bottom: 30px;
          }
            .blogs-decoration-element-top-left{
            top: -144px;
        height: 353px;
            }

          .blogs-wrapper {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .blog-image {
            height: 200px;
          }

          .blog-content {
            padding: 15px;
          }

          .blog-meta {
            font-size: 10px;
            gap: 10px;
          }

          .blog-title {
            font-size: 14px;
          }

          .blog-description {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}