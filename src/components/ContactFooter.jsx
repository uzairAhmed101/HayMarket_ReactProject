import React from 'react';
import phoneIcon from '../assets/Images/Icon-1.png';
import mailIcon from '../assets/Images/Icon-2.png';
import mapIcon from '../assets/Images/Icon-3.png';

export default function ContactHeaderBar() {
  return (
    <div className="contact-footer-header">
      <div className="contact-footer-container">
        <div className="contact-footer-item">
          <div className="contact-footer-icon-wrapper">
            <img src={phoneIcon} alt="Phone" className="contact-footer-phone-icon" />
          </div>
          <div className="contact-footer-info">
            <div className="contact-footer-label">CALL NOW</div>
            <div className="contact-footer-value">(801)-856-7738</div>
          </div>
        </div>

        <div className="contact-footer-item">
          <div className="contact-footer-icon-wrapper">
            <img src={mailIcon} alt="Mail" className="contact-footer-mail-icon" />
          </div>
          <div className="contact-footer-info">
            <div className="contact-footer-label">MAIL US AT</div>
            <div className="contact-footer-value">info@hymnmarket.com</div>
          </div>
        </div>

        <div className="contact-footer-item">
          <div className="contact-footer-icon-wrapper">
            <img src={mapIcon} alt="Location" className="contact-footer-map-icon" />
          </div>
          <div className="contact-footer-info">
            <div className="contact-footer-label">FIND US AT</div>
            <div className="contact-footer-value">1090 Montauk Hwy # 300, New York, NY 10158, United States</div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-footer-header {
          background: #3A0368;
          padding: 15px 20px;
          font-family: 'TuskerGrotesk', sans-serif;
          border-top: 1px solid white;
          border-bottom: 1px solid white;
        }

        .contact-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          align-items: center;
        }

        .contact-footer-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-footer-icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-footer-phone-icon,
        .contact-footer-mail-icon,
        .contact-footer-map-icon {
          width: 24px;
          height: 24px;
        }

        .contact-footer-mail-icon::before,
        .contact-footer-map-icon::before {
          content: "";
        }

        .contact-footer-mail-icon::before {
          content: "✉️";
          font-size: 16px;
        }

        .contact-footer-map-icon::before {
          content: "📍";
          font-size: 16px;
        }

        .contact-footer-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-footer-label {
          color: white;
          font-size: 0.75rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }

        .contact-footer-value {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .contact-footer-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-footer-item {
            justify-content: center;
            text-align: left;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .contact-footer-header {
            padding: 15px;
          }

          .contact-footer-container {
            gap: 15px;
            justify-content: flex-start;
            text-align: left;
          }

          .contact-footer-item {
            justify-content: flex-start;
            text-align: left;
          }

          .contact-footer-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .contact-footer-phone-icon,
          .contact-footer-mail-icon,
          .contact-footer-map-icon {
            width: 18px;
            height: 18px;
          }

          .contact-footer-phone-icon::before,
          .contact-footer-mail-icon::before,
          .contact-footer-map-icon::before {
            font-size: 14px;
          }

          .contact-footer-label {
            font-size: 0.7rem;
          }

          .contact-footer-value {
            font-size: 0.85rem;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .contact-footer-header {
            padding: 12px;
          }

          .contact-footer-item {
            gap: 10px;
          }

          .contact-footer-icon-wrapper {
            width: 35px;
            height: 35px;
          }

          .contact-footer-phone-icon,
          .contact-footer-mail-icon,
          .contact-footer-map-icon {
            width: 16px;
            height: 16px;
          }

          .contact-footer-phone-icon::before,
          .contact-footer-mail-icon::before,
          .contact-footer-map-icon::before {
            font-size: 12px;
          }

          .contact-footer-label {
            font-size: 0.65rem;
          }

          .contact-footer-value {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}