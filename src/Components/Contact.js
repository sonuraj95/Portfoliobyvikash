import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function ContactCard() {
  const form = useRef();
  const [status, setStatus] = useState({ sending: false, success: false, error: false });

  // 👇 Apna Service ID, Template ID aur Public Key yahan daalo
  const SERVICE_ID = 'service_umbnvja';
  const ADMIN_TEMPLATE_ID = 'template_myshayi';
  const PUBLIC_KEY = 'Xp1EAGLVSZxdJF_JN';

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });

    emailjs
      .sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ sending: false, success: true, error: false });
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus({ sending: false, success: false, error: true });
      });
  };

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
              <p>Full Stack Developer</p>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-text">sonuraj0789123@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">buildwithvikash  </span>
              </div>
              <div className="contact-item">
                <span className="contact-text">sonuraj95 - GitHub</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">vikash-kumar09 - LinkedIn</span>
              </div>
              <div className="contact-item">
                <span className="contact-text">India, Jharkhand - Dumka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right White Section - Form */}
        <div className="right-section">
          <div className="right-content">
            <div className="cta-section">
              <h2 className="cta-heading">Let's Connect!</h2>
              <p className="cta-subtext">Apna message bhejo, jaldi reply milega.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn" disabled={status.sending}>
                {status.sending ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && (
                <p className="form-status success">✅ Message sent successfully!</p>
              )}
              {status.error && (
                <p className="form-status error">❌ Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}