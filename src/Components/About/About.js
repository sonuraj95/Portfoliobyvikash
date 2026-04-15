// About.jsx
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const profileCardRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);

  // 3D tilt effect
  useEffect(() => {
    const card = profileCardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * 20; // max ±10deg
      const rotateX = ((centerY - e.clientY) / rect.height) * 20;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Intersection Observer for stat counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter component
  const AnimatedNumber = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsInView) return;
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration, statsInView]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="about" className="about-section-new">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <span className="header-badge">Who am I?</span>
          <h2 className="about-title">
            Crafting <span className="title-gradient">Digital</span> Experiences
          </h2>
          <p className="about-subtitle">
            Full‑stack developer with a passion for clean code and user‑centric design.
          </p>
        </div>

        {/* Main Grid */}
        <div className="about-grid-new">
          {/* Left Column - Profile & Bio */}
          <div className="about-left">
            <div className="profile-card-new" ref={profileCardRef}>
              <div className="profile-glow"></div>
              <div className="profile-image-wrapper">
                <div className="profile-avatar">
                  <span className="avatar-emoji">👨‍💻</span>
                </div>
                <div className="profile-ring"></div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Vikash Kumar</h3>
                <p className="profile-title">Full Stack Developer</p>
                <div className="profile-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Jharkhand, Dumka
                </div>
              </div>
            </div>

            <div className="bio-card">
              <div className="bio-icon">✨</div>
              <p className="bio-text">
                Former physics student turned developer. I blend analytical thinking with creative
                problem‑solving to build applications that are both robust and delightful to use.
                Over 2 years of experience across startups and enterprise projects.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="about-right">
            <div className="skills-orbital">
              <h4 className="skills-heading">Tech Stack</h4>
              <div className="orbital-container">
                <div className="orbital-center">⚡</div>
                <div className="orbital-item" style={{ '--angle': '0deg', '--distance': '120px' }}>
                  <span className="tech-badge react">React</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '72deg', '--distance': '120px' }}>
                  <span className="tech-badge node">Node.js</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '144deg', '--distance': '120px' }}>
                  <span className="tech-badge python">Python</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '216deg', '--distance': '120px' }}>
                  <span className="tech-badge aws">AWS</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '288deg', '--distance': '120px' }}>
                  <span className="tech-badge ts">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="core-competencies">
              <h4>Core Competencies</h4>
              <ul className="competencies-list">
                <li>Full Stack Architecture</li>
                <li>Cloud & DevOps (AWS, Docker)</li>
                <li>Performance Optimization</li>
                <li>Accessibility (a11y)</li>
                <li>Technical Leadership</li>
              </ul>
            </div>

            <div className="stats-container" ref={statsRef}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={50} suffix="+" />
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={500} suffix="+" />
                </div>
                <div className="stat-label">Cups of Coffee</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={15} suffix="+" />
                </div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Curiosity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Footer */}
        <div className="about-footer">
          <div className="footer-line"></div>
          <p className="footer-quote">“Creating with purpose, learning without limits.”</p>
          <div className="footer-line"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-grid"></div>
    </section>
  );
};

export default About;