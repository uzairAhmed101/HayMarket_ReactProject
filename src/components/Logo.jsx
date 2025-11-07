import React from 'react';
import logoBar21 from '../assets/Images/LogoBar-2-1.png';
import logoBar22 from '../assets/Images/LogoBar-2-2.png';
import logoBar23 from '../assets/Images/LogoBar-2-3.png';
import logoBar24 from '../assets/Images/LogoBar-2-4.png';
import logoBar25 from '../assets/Images/LogoBar-2-5.png';

export default function BadgeBar() {
  return (
    <>
      <style>{`
        .logo-bar-2-badge-bar {
        border-top: 1px solid white;
          background: #3A0368;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .logo-bar-2-left-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-bar-2-center-section {
          display: flex;
          align-items: center;
          gap: 3.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .logo-bar-2-badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-bar-2-right-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-bar-2-trustpilot-logo {
          font-size: 0.75rem;
          font-weight: bold;
          color: #00b67a;
        }

        .logo-bar-2-stars {
          display: flex;
          gap: 0.125rem;
        }

        .logo-bar-2-star {
          width: 0.75rem;
          height: 0.75rem;
          background-color: #00b67a;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .logo-bar-2-satisfaction-badge {
          background-color: #ffd700;
          padding: 0.5rem 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.5rem;
          font-weight: bold;
          color: #4a148c;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          position: relative;
        }

        .logo-bar-2-satisfaction-badge::before {
          content: '';
          position: absolute;
          width: 120%;
          height: 120%;
          border: 2px dashed #ffd700;
          border-radius: 50%;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .logo-bar-2-badge-bar {
            padding: 1rem;
            justify-content: center;
          }

          .logo-bar-2-center-section {
            order: 3;
            width: 100%;
            margin-top: 0.5rem;
          }

          .logo-bar-2-left-section {
            order: 1;
          }

          .logo-bar-2-right-section {
            order: 2;
          }
        }

        @media (max-width: 480px) {
          .logo-bar-2-badge-bar {
            gap: 0.75rem;
            display:block;
          }

          .logo-bar-2-left-section{
          display: block;
          }

          .logo-bar-2-center-section{
          display: block;
          }

          .logo-bar-2-trustpilot-badge {
            padding: 0.35rem 0.6rem;
          }

          .logo-bar-2-trustpilot-logo {
            font-size: 0.65rem;
          }

          .logo-bar-2-star {
            width: 0.65rem;
            height: 0.65rem;
          }

          .logo-bar-2-satisfaction-badge {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 0.45rem;
            padding: 0.4rem;
          }
        }
      `}</style>

      <div className="logo-bar-2-badge-bar">
        {/* Left Section - Logo */}
        <div className="logo-bar-2-left-section">
          <img 
            src={logoBar21} 
            alt="Logo" 
            className="logo-bar-2-logo-image"
            style={{
              height: '3.5rem',
              width: 'auto',
              padding: '0.5rem'
            }}
          />
        </div>

        {/* Center Section - Badges */}
        <div className="logo-bar-2-center-section">
          <div className="logo-bar-2-divider"></div>

          <img 
            src={logoBar22} 
            alt="Logo 2" 
            className="logo-bar-2-logo-image"
            style={{
              height: '2.5rem',
              width: 'auto',
              padding: '0.3rem'
            }}
          />
          <img 
            src={logoBar23} 
            alt="Logo 3" 
            className="logo-bar-2-logo-image"
            style={{
              height: '2.5rem',
              width: 'auto',
              padding: '0.3rem'
            }}
          />
          <img 
            src={logoBar24} 
            alt="Logo 4" 
            className="logo-bar-2-logo-image"
            style={{
              height: '2.5rem',
              width: 'auto',
              padding: '0.3rem'
            }}
          />
          <img 
            src={logoBar25} 
            alt="Logo 5" 
            className="logo-bar-2-logo-image"
            style={{
              height: '2.5rem',
              width: 'auto',
              padding: '0.3rem'
            }}
          />

          {/* Right Section - Trust Badges */}
          <div className="logo-bar-2-right-section">
            <div className="logo-bar-2-trustpilot-badge">
            </div>

          </div>
        </div>
      </div>
    </>
  );
}