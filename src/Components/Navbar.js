import React, { useState, useEffect } from 'react';
import './Nav.css'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="accent">V</span>IKASH'S PORTFOLIO
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/" className="nav-link">
            <span>Home</span>
          </a>
          <a href="/About" className="nav-link">
            <span>About</span>
          </a>
          <a href="/Proje" className="nav-link">
            <span>Projects</span>
          </a>
          
          <a href="/Resume" className="nav-link">
            <span>Resume</span>
          </a>
          <div className="nav-highlight"></div>
        </nav>
        
        {/* Mobile Navigation */}
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <a href="/" onClick={toggleMenu} className="mobile-link">
            <span>Home</span>
          </a>
          <a href="/About" onClick={toggleMenu} className="mobile-link">
            <span>About</span>
          </a>
          <a href="/Proje" onClick={toggleMenu} className="mobile-link">
            <span>Projects</span>
          </a>
         
          <a href="/Resume" onClick={toggleMenu} className="mobile-link">
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}