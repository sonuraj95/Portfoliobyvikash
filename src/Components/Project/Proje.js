// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Full‑stack e‑commerce with payment integration and admin dashboard.",
      fullDescription: "A comprehensive e‑commerce solution built with the MERN stack. Features include JWT authentication, Stripe payment processing, product inventory management, order tracking, and an analytics dashboard for admins. The frontend is responsive and optimized for performance with lazy loading and code splitting.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-15",
      status: "completed",
      highlights: [
        "Secure payment processing with Stripe",
        "Role‑based access control (Admin/Customer)",
        "Real‑time inventory updates",
        "Responsive design with dark mode"
      ]
    },
    {
      id: 2,
      title: "TaskFlow",
      shortDescription: "Collaborative task management with real‑time sync and drag‑drop boards.",
      fullDescription: "TaskFlow is a Trello‑inspired project management tool. Users can create boards, lists, and cards with drag‑and‑drop functionality. Real‑time updates are powered by Socket.io. Includes team invitations, comments, file attachments, and activity logs.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material‑UI", "Socket.io", "React Beautiful DnD"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-02-20",
      status: "completed",
      highlights: [
        "Drag‑and‑drop Kanban boards",
        "Real‑time collaboration",
        "File uploads with Firebase Storage",
        "Customizable board themes"
      ]
    },
    {
      id: 3,
      title: "WeatherPulse",
      shortDescription: "Cross‑platform weather app with interactive maps and forecasts.",
      fullDescription: "A React Native mobile app that provides hyperlocal weather forecasts using OpenWeatherMap API. Features include animated weather icons, 7‑day forecast, air quality index, and interactive radar maps. The app supports geolocation and favorite locations saved locally.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React Native", "OpenWeather API", "Redux Toolkit", "React Navigation"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-01-10",
      status: "completed",
      highlights: [
        "Live weather radar maps",
        "Offline support with cached data",
        "Push notifications for severe alerts",
        "Smooth animations with Reanimated"
      ]
    },
    {
      id: 4,
      title: "Portfolio 2024",
      shortDescription: "Modern developer portfolio with 3D elements and smooth page transitions.",
      fullDescription: "A personal portfolio website showcasing projects and skills. Built with Next.js for SEO and performance. Features include a custom 3D background with Three.js, page transitions with Framer Motion, and a blog section powered by MDX.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "Vercel"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-12-05",
      status: "completed",
      highlights: [
        "Server‑side rendering for fast loads",
        "Interactive 3D background",
        "Blog with MDX support",
        "100 Lighthouse score"
      ]
    },
    {
      id: 5,
      title: "Insight Dashboard",
      shortDescription: "Business intelligence dashboard with interactive data visualizations.",
      fullDescription: "A dashboard for visualizing complex datasets with D3.js charts. Connects to a Flask backend that aggregates data from PostgreSQL. Users can create custom widgets, filter by date ranges, and export reports as PDF. Includes real‑time data streaming for live metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL", "WebSockets"],
      category: "data",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-04-01",
      status: "in-progress",
      highlights: [
        "Customizable dashboard widgets",
        "Real‑time data updates",
        "Advanced filtering and drill‑down",
        "PDF report generation"
      ]
    },
    {
      id: 6,
      title: "ChurnPredict ML",
      shortDescription: "Customer churn prediction model with interpretable AI explanations.",
      fullDescription: "A machine learning pipeline that predicts customer churn probability. The model is built with TensorFlow and served via a FastAPI endpoint. A companion Streamlit app allows business users to upload data and view SHAP explanations for each prediction.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit‑learn", "FastAPI", "Streamlit"],
      category: "ml",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-28",
      status: "in-progress",
      highlights: [
        "SHAP values for model interpretability",
        "REST API for predictions",
        "Automated retraining pipeline",
        "Interactive Streamlit demo"
      ]
    },
    {
      id: 7,
      title: "HealthTrack",
      shortDescription: "Fitness tracking app with workout plans and progress analytics.",
      fullDescription: "A mobile app (React Native) that helps users track workouts, nutrition, and body metrics. Includes a library of exercises with video demonstrations, personalized workout plans, and progress charts. Backend built with Node.js and MongoDB.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js", "JWT"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-05-10",
      status: "in-progress",
      highlights: [
        "Workout plan generator",
        "Body metrics tracking with charts",
        "Exercise video library",
        "Social sharing of achievements"
      ]
    },
    {
      id: 8,
      title: "CryptoTracker",
      shortDescription: "Real‑time cryptocurrency price tracker with portfolio management.",
      fullDescription: "A web app that displays live prices of top cryptocurrencies using the CoinGecko API. Users can create a portfolio to track their holdings and see profit/loss calculations. Includes price alerts and historical charts.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      technologies: ["React", "CoinGecko API", "Chart.js", "Context API", "LocalStorage"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-06-01",
      status: "completed",
      highlights: [
        "Live price updates every 30s",
        "Portfolio profit/loss calculation",
        "Interactive price charts",
        "Dark/light theme toggle"
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All', count: projects.length },
    { value: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { value: 'data', label: 'Data', count: projects.filter(p => p.category === 'data').length },
    { value: 'ml', label: 'ML/AI', count: projects.filter(p => p.category === 'ml').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  // Reset visible count when filter or search changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [filter, searchTerm]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(card => observer.observe(card));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [displayedProjects]);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="header-badge">Portfolio</span>
          <h2 className="projects-title">
            Featured <span className="title-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A showcase of my best work — from full‑stack applications to machine learning models.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="filter-bar">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-tab ${filter === cat.value ? 'active' : ''}`}
                onClick={() => setFilter(cat.value)}
              >
                <span>{cat.label}</span>
                <span className="tab-count">{cat.count}</span>
              </button>
            ))}
          </div>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                  <span className="view-details">View Details</span>
                </div>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                </span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.shortDescription}</p>
                <div className="tech-stack">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="card-footer">
                  <span className="project-date">
                    <i className="far fa-calendar-alt"></i> {project.date}
                  </span>
                  <div className="card-actions" onClick={(e) => e.stopPropagation()}>
                    <a href={project.githubUrl} className="action-btn" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demoUrl} className="action-btn" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMore}>
              Load More <i className="fas fa-arrow-down"></i>
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <span className={`modal-status ${selectedProject.status}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <p className="modal-description">{selectedProject.fullDescription}</p>
                
                <div className="modal-tech">
                  <h4>Technologies</h4>
                  <div className="tech-cloud">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-highlights">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.demoUrl} className="modal-btn primary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-play"></i> Live Demo
                  </a>
                  <a href={selectedProject.githubUrl} className="modal-btn secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-grid"></div>
    </section>
  );
};

export default Projects;