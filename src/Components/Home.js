import React from 'react';
import './Home.css';
import ReactIcon from './Mbox/React.png';
import NodeIcon from './Mbox/Node.js.png';
import PythonIcon from './Mbox/Python.png';
import DjangoIcon from './Mbox/Django.png';
import profileicon from './Mbox/heroimage.jpeg';
import HtmlIcon from './Mbox/HTML5.png';
import CssIcon from './Mbox/CSS3.png';
import JsIcon from './Mbox/JavaScript.png';

export default function Home() {
  const skillCards = [
    { id: 1, icon: ReactIcon, title: 'React', description: 'Interactive UIs with hooks & components', alt: 'React' },
    { id: 2, icon: NodeIcon, title: 'Node.js', description: 'Scalable backend services & APIs', alt: 'Node.js' },
    { id: 3, icon: PythonIcon, title: 'Python', description: 'Scripting, automation & logic', alt: 'Python' },
    { id: 4, icon: DjangoIcon, title: 'Django', description: 'Secure web applications', alt: 'Django' },
    { id: 5, icon: JsIcon, title: 'JavaScript', description: 'ES6+, async & web APIs', alt: 'JavaScript' },
    { id: 6, title: 'HTML/CSS', description: 'Semantic markup & responsive design', alt: 'HTML5 & CSS3', isDoubleIcon: true, icons: [HtmlIcon, CssIcon] }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Namaste, I'm</span><br />
              <span className="name-highlight">VIKASH KUMAR</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I build robust web applications using modern technologies.
              Specializing in React, Node.js, and Django with Python.
            </p>
            <div className="skill-badges">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">Django</span>
              <span className="badge">Python</span>
              <span className="badge">JavaScript</span>
              <span className="badge">HTML/CSS</span>
            </div>
            <div className="hero-buttons">
              <a href="/contact" className="primary-button">Hire Me</a>
              <a href="/projects" className="secondary-button">See Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profileicon} alt="Vikash Kumar - Full Stack Developer" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">⚡ My Tech Stack</h2>
        <div className="skills-grid">
          {skillCards.map((card) => (
            <div key={card.id} className="skill-card">
              <div className="skill-icon">
                {card.isDoubleIcon ? (
                  <div className="double-icon-wrapper">
                    {card.icons.map((icon, idx) => (
                      <img key={idx} src={icon} alt={card.alt} />
                    ))}
                  </div>
                ) : (
                  <img src={card.icon} alt={card.alt} />
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}