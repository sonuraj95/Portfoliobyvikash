import React, { useState } from 'react';

export default function Proje() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Add Bootstrap CSS and Bootstrap Icons to the document head
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha512-t4GWSVZO1eC8BM339Xd7Uphw5s17a86tIZIj8qRxhnKub6WoyhnrxeCIMeAqBPgdZGlCcG2PrZjMc+Wr78+5Xg==';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    const iconLink = document.createElement('link');
    iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css';
    iconLink.rel = 'stylesheet';
    iconLink.integrity = 'sha512-YI2MMT+6uT2mGsT6eU+55MtjXKMm3VnhVdGMUY4+8V2Oqv6oqiOA6CMW1lhOvBQLSl1rUQ1KDiHkrscCWGZvKw==';
    iconLink.crossOrigin = 'anonymous';
    document.head.appendChild(iconLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(iconLink);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-15",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-02-20",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A responsive weather application that provides detailed forecasts, weather maps, and location-based weather updates using external APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-01-10",
      status: "completed"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-12-05",
      status: "completed"
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      category: "data",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-04-01",
      status: "in-progress"
    },
    {
      id: 6,
      title: "Machine Learning Model",
      description: "A predictive machine learning model for customer behavior analysis with data preprocessing and model evaluation components.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      category: "ml",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-28",
      status: "in-progress"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { value: 'data', label: 'Data Science', count: projects.filter(p => p.category === 'data').length },
    { value: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return 'badge bg-success';
      case 'in-progress': return 'badge bg-primary';
      default: return 'badge bg-secondary';
    }
  };

  return (
    <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)'}}>
      <div className="container py-5">
       
      

        
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0" style={{
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,.075)';
              }}>
                {/* Project Image */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className={getStatusBadge(project.status)}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title text-primary fw-bold mb-0">
                      {project.title}
                    </h5>
                    <small className="text-muted d-flex align-items-center">
                      <i className="bi bi-calendar3 me-1"></i>
                      {new Date(project.date).toLocaleDateString()}
                    </small>
                  </div>
                  
                  <p className="card-text text-muted flex-grow-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-light text-primary me-1 mb-1 d-inline-flex align-items-center"
                      >
                        <i className="bi bi-tag me-1"></i>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2 d-md-flex">
                    <a
                      href={project.demoUrl}
                      className="btn btn-primary flex-fill d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn btn-dark flex-fill d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-github"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
       

        {/* Footer CTA */}
       
      </div>
    </div>
  );
}