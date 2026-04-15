// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-new">
      {/* Animated wave divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,21.11,27.64,19.58,41,16.77,73.13,8.9,105.81,4.25,138.5,2.11c50.66-3.31,101.35,7.26,151.83,13.38,67.51,8.19,135.24,10.15,202.9,4.79,37.63-3,74.53-10.22,111.28-19.11C695.61-9.36,789.44-6.19,883.38,4.58c44.57,5.12,88.83,15.36,133.79,10.14,24.77-2.88,49.47-8.87,74.11-15.23C1115.84-6.86,1157.15-2.23,1200,10.58V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c43.29-3.47,86.05-16.38,128.85-27.23C1130.84,46.32,1166.86,34.17,1200,24.31V0Z" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="brand-glow"></div>
            <h3 className="brand-name">
              <span className="brand-icon">⚡</span>
              Vikash<span className="brand-highlight">.dev</span>
            </h3>
            <p className="brand-tagline">
              Building digital experiences that matter. Clean code, creative solutions, and a passion for innovation.
            </p>
            <div className="brand-social">
              <a href="https://github.com/sonuraj95" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vikash-kumar-b77772351/" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/Contact" className="social-icon" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/mr_vikash._kr/?hl=en" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">
              <span className="heading-icon">🔗</span>
              Explore
            </h4>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-tech-stack">
            <h4 className="footer-heading">
              <span className="heading-icon">🛠️</span>
              Tech Stack
            </h4>
            <div className="tech-cloud">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">GraphQL</span>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="footer-contact-info">
            <h4 className="footer-heading">
              <span className="heading-icon">📍</span>
              Connect
            </h4>
            <ul className="contact-list">
              <li>
                <i className="fas fa-map-pin"></i>
                <span>Jharkhand, Dumka, India</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i>
                <a href="mailto:hello@vikash.dev">hello@vikash.dev</a>
              </li>
            </ul>
            <div className="newsletter-signup">
              <p className="newsletter-text">Get updates on my work</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright">
            © {currentYear} Vikash Kumar. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <span className="divider-dot"></span>
            <a href="#">Terms</a>
            <span className="divider-dot"></span>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-credit">
            <span className="pulse-dot"></span>
            Built with <i className="fas fa-heart"></i> and React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;