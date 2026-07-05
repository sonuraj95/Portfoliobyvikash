// About.jsx
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

// Animated counter component (moved outside so it doesn't get recreated on every render)
const AnimatedNumber = ({ target, suffix = '', duration = 2000, statsInView }) => {
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
      const rotateY = ((e.clientX - centerX) / rect.width) * 20;
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
            Full-stack developer with a passion for clean code and user-centric design.
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
                <h3 className="profile-name">Vikash Kumar Mandal</h3>
                <p className="profile-title">Full Stack Web Developer | BCA Student</p>
                <div className="profile-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Dumka, Jharkhand, India
                </div>
              </div>
            </div>

            <div className="bio-card">
              <div className="bio-icon">✨</div>
              <p className="bio-text">
                Hi, I'm Vikash Kumar Mandal, a passionate Full Stack Web Developer and BCA student
                from Dumka, Jharkhand. My journey into programming started with curiosity about how
                websites and applications work — that curiosity turned into a passion for building
                modern, responsive, and user-friendly web applications that solve real-world problems.
              </p>
            </div>

            <div className="bio-card">
              <div className="bio-icon">🎯</div>
              <p className="bio-text">
                I believe technology isn't just about writing code — it's about creating experiences
                that are useful, accessible, and meaningful. My goal is to become a skilled developer
                who builds impactful products, helps businesses grow through technology, and keeps
                learning throughout the journey.
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
                  <span className="tech-badge react">React.js</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '72deg', '--distance': '120px' }}>
                  <span className="tech-badge node">Node.js</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '144deg', '--distance': '120px' }}>
                  <span className="tech-badge python">Django</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '216deg', '--distance': '120px' }}>
                  <span className="tech-badge aws">JavaScript</span>
                </div>
                <div className="orbital-item" style={{ '--angle': '288deg', '--distance': '120px' }}>
                  <span className="tech-badge ts">HTML/CSS</span>
                </div>
              </div>
            </div>

            <div className="core-competencies">
              <h4>Core Skills</h4>
              <ul className="competencies-list">
                <li>Frontend: React.js, JS</li>
                <li>Backend: Node.js, Django</li>
                <li>API Integration</li>
                <li>Responsive UI Design</li>
                <li>Git & GitHub</li>
                <li>Problem Solving</li>
              </ul>
            </div>

            <div className="stats-container" ref={statsRef}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={10} suffix="+" statsInView={statsInView} />
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={5} suffix="+" statsInView={statsInView} />
                </div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedNumber target={100} suffix="%" statsInView={statsInView} />
                </div>
                <div className="stat-label">Dedication</div>
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
          <p className="footer-quote">
            "I believe in continuous learning and turning ideas into modern, user-friendly, and impactful web applications." 🚀
          </p>
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