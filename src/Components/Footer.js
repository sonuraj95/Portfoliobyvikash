import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading">About Me</h3>
          <p className="footer-about">
            Full Stack Developer specializing in React, Node.js, Django, and Python. 
            I build modern, responsive web applications with clean code and great user experiences.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/sonuraj95" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/vikash-kumar-b77772351/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:sonuraj0789123@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="skills">Skills</a></li>
            <li><a href="/Proje">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-section">
          <h3 className="footer-heading">Technologies</h3>
          <ul className="footer-tech">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Django</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML5/CSS3</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> Jharkhand, India</li>
            <li><i className="fas fa-envelope"></i> sonuraj0789123@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VIKASH. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;