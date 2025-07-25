import React from 'react';
import './Home.css';
import ReactIcon from './Mbox/React.png';
import NodeIcon from './Mbox/Node.js.png';
import PythonIcon from './Mbox/Python.png';
import DjangoIcon from './Mbox/Django.png';
import profileicon from './Mbox/home-main.svg';
import HtmlIcon from './Mbox/HTML5.png';
import CssIcon from './Mbox/CSS3.png';
import JsIcon from './Mbox/JavaScript.png';  // Added JavaScript icon

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title">
              <span className="gradient-text">Namaste, I'm</span>
              <br />
              <span className="name-highlight">VIKASH KUMAR</span>  {/* Fixed typo */}
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I build robust web applications using modern technologies.
              Specializing in React, Node.js, and Django development with Python expertise.
            </p>
            <div className="skill-badges">
              <span className="badge react">React</span>
              <span className="badge node">Node.js</span>
              <span className="badge django">Django</span>
              <span className="badge python">Python</span>
              <span className="badge js">JavaScript</span>
              <span className="badge htmlcss">HTML/CSS</span>
            </div>
            <div className="hero-buttons">
              <a href="#contact" className="primary-button hover-scale">
                Hire Me
              </a>
              <a href="#projects" className="secondary-button hover-scale">
                See Projects
              </a>
            </div>
          </div>
          
          <div className="hero-image animate-fade-in-delay">
            <div className="image-wrapper">
              <div className="profile-image">
                <img src={profileicon} alt="Vikash Kumar - Full Stack Developer" />
              </div>
              <div className="tech-icons">
                {/* Corrected icons and titles */}
                <div className="icon" title="React"><img src={ReactIcon} alt="React" /></div>
                <div className="icon" title="Node.js"><img src={NodeIcon} alt="Node.js" /></div>
                <div className="icon" title="Python"><img src={PythonIcon} alt="Python" /></div>
                <div className="icon" title="Django"><img src={DjangoIcon} alt="Django" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {/* Removed inline styles - use CSS classes instead */}
          <div className="skill-card">
            <div className="skill-icon">
              <img src={ReactIcon} alt="React" />
            </div>
            <h3>React</h3>
            <p>Building interactive UIs with functional components and hooks</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <img src={NodeIcon} alt="Node.js" />
            </div>
            <h3>Node.js</h3>
            <p>Creating scalable backend services and APIs</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <img src={PythonIcon} alt="Python" />
            </div>
            <h3>Python</h3>
            <p>Developing scripts, automation, and backend logic</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <img src={DjangoIcon} alt="Django" />
            </div>
            <h3>Django</h3>
            <p>Building secure and maintainable web applications</p>
          </div>
          
          {/* Fixed card order and icons */}
          <div className="skill-card">
            <div className="skill-icon">
              <img src={JsIcon} alt="JavaScript" />
            </div>
            <h3>JavaScript</h3>
            <p>ES6+ syntax, async programming, and web APIs</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <div style={{ display: 'flex', gap: '5px' }}>
                <img src={HtmlIcon} alt="HTML5" style={{ width: '30px' }} />
                <img src={CssIcon} alt="CSS3" style={{ width: '30px' }} />
              </div>
            </div>
            <h3>HTML/CSS</h3>
            <p>Semantic markup and responsive design principles</p>
          </div>
        </div>
      </section>
    </div>
  );
}