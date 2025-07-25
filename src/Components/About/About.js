import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    // Parallax effect for profile card
    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      const card = profileRef.current;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const angleY = (e.clientX - cardCenterX) / 20;
      const angleX = (cardCenterY - e.clientY) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="header-decoration">
            <div className="deco-line"></div>
            <div className="deco-dot"></div>
          </div>
          <h2 className="section-title">
            <span className="title-highlight">About</span> Me
          </h2>
          <p className="section-subtitle">Beyond the code: My journey, passion, and vision</p>
        </div>

        <div className="about-grid">
          <div className="profile-card" ref={profileRef}>
            <div className="profile-3d">
              <div className="profile-image">
                <div className="glow-effect"></div>
              </div>
              <div className="tech-orbits">
                <div className="orbit orbit-1">
                  <div className="tech-orb react" data-tooltip="React">
                    <i className="fab fa-react"></i>
                  </div>
                </div>
                <div className="orbit orbit-2">
                  <div className="tech-orb node" data-tooltip="Node.js">
                    <i className="fab fa-node-js"></i>
                  </div>
                </div>
                <div className="orbit orbit-3">
                  <div className="tech-orb python" data-tooltip="Python">
                    <i className="fab fa-python"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-details">
              <h3>Alex Morgan</h3>
              <div className="role-tag">Full Stack Developer</div>
              <div className="location-tag">
                <i className="fas fa-map-marker-alt"></i> San Francisco, CA
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="content-block">
              <div className="block-header">
                <div className="block-icon">🚀</div>
                <h3>My Journey</h3>
              </div>
              <p>
                From physics student to software engineer, my path has been anything but linear. 
                I discovered coding through scientific simulations and fell in love with creating 
                digital solutions to complex problems. Over the past 5 years, I've worked with startups 
                and enterprises to build scalable applications that make a difference.
              </p>
            </div>

            <div className="content-block">
              <div className="block-header">
                <div className="block-icon">💡</div>
                <h3>Philosophy</h3>
              </div>
              <p>
                I believe technology should serve humanity, not the other way around. My approach 
                combines technical excellence with human-centered design. I focus on creating 
                intuitive experiences that solve real problems while pushing technical boundaries.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">500+</div>
                <div className="stat-label">Cups of Coffee</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Curiosity</div>
              </div>
            </div>
          </div>

          <div className="skill-visualization">
            <div className="skill-radar">
              <div className="radar-grid">
                <div className="grid-circle"></div>
                <div className="grid-circle"></div>
                <div className="grid-circle"></div>
                <div className="grid-axis"></div>
                <div className="grid-axis"></div>
                <div className="grid-axis"></div>
                <div className="grid-axis"></div>
                
                <div className="skill-point frontend" style={{ '--size': '90%', '--angle': '30deg' }}>
                  <div className="point-label">Frontend</div>
                </div>
                <div className="skill-point backend" style={{ '--size': '85%', '--angle': '110deg' }}>
                  <div className="point-label">Backend</div>
                </div>
                <div className="skill-point devops" style={{ '--size': '75%', '--angle': '190deg' }}>
                  <div className="point-label">DevOps</div>
                </div>
                <div className="skill-point uiux" style={{ '--size': '80%', '--angle': '270deg' }}>
                  <div className="point-label">UI/UX</div>
                </div>
              </div>
            </div>
            <div className="skill-legend">
              <h4>Core Competencies</h4>
              <ul>
                <li>Full Stack Development</li>
                <li>Cloud Architecture</li>
                <li>Performance Optimization</li>
                <li>Accessibility Advocacy</li>
                <li>Technical Mentoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="signature">
          <div className="signature-line"></div>
          {/* <div className="signature-text">Creating with purpose</div> */}
          <div className="signature-line"></div>
        </div>
      </div>

      <div className="background-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;