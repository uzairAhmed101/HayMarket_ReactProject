import React from 'react';

export default function FooterDisclaimer() {
  return (
    <div className="disclaimer-footer-disclaimer">
      <div className="disclaimer-container">
        <p className="disclaimer-text">
          Disclaimer: Olivia D publishers is an independent entity and is not affiliated with, sponsored by, or associated with any other company in any way, nor a disposal center, involving but not limited to major publishing companies or corporations. All content, services, and products offered through our website are solely provided by Olivia Publishers, and are not endorsed or approved by any other entities. Olivia Publishers is a DBA of HW1 LLC.
        </p>
        
        <p className="disclaimer-copyright-text">
          © 2025 Olivia Publishers All rights reserved
        </p>
      </div>

      <style jsx>{`
        .disclaimer-footer-disclaimer {
          background: linear-gradient(135deg, #2D0F4A 0%, #1a0829 100%);
          padding: 30px 20px;
          font-family: 'Arial', sans-serif;
        }

        .disclaimer-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .disclaimer-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.8rem;
          line-height: 1.6;
          margin-bottom: 20px;
          text-align: center;
        }

        .disclaimer-copyright-text {
          color: white;
          font-size: 0.85rem;
          font-weight: 500;
          margin-top: 20px;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .disclaimer-footer-disclaimer {
            padding: 25px 20px;
          }

          .disclaimer-text {
            font-size: 0.75rem;
            line-height: 1.5;
          }

          .disclaimer-copyright-text {
            font-size: 0.8rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .disclaimer-footer-disclaimer {
            padding: 20px 15px;
          }

          .disclaimer-text {
            font-size: 0.7rem;
            line-height: 1.5;
            margin-bottom: 15px;
          }

          .disclaimer-copyright-text {
            font-size: 0.75rem;
            margin-top: 15px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .disclaimer-footer-disclaimer {
            padding: 18px 12px;
          }

          .disclaimer-text {
            font-size: 0.65rem;
            line-height: 1.4;
          }

          .disclaimer-copyright-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}