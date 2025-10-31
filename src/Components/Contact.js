import React from 'react';
import './Contact.css';

export default function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="contact-card">
        {/* Left Green Section */}
        <div className="left-section">
          <div className="left-content">
            <h1 className="main-heading">
              GET TO<br />
              <span className="know-us">KNOW US</span>
            </h1>
            <div className="company-name">
              <p>Full Stack Developer </p>
            </div>
          </div>
        </div>

        {/* Right White Section */}
        <div className="right-section">
          <div className="right-content">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-text">+91 8252895546</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">sonuraj0789123@gmail.com
</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">https://buildwithvikash.online/</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">India ,Jharkhand city - Dumka </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h2 className="cta-heading">Let's Connect!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}