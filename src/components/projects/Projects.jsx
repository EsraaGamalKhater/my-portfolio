import React from 'react';
import './projects.css';
import { FaNodeJs, FaReact, FaAngular, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress } from 'react-icons/si';

function Projects() {
  const projects = [
    {
      title: 'Autistic Children App',
      tech: ['Node.js', 'MongoDB', 'Express'],
      icon: <FaNodeJs />,
      color: '#4db5ff',
      description: 'Secure login for parents to manage tasks for children. Kids can view and complete tasks. Supports Arabic & English.',
    },
    {
      title: 'E-commerce System',
      tech: ['Node.js', 'MongoDB', 'Express'],
      icon: <FaDatabase />,
      color: '#8a2be2',
      description: 'Full-featured platform with login, sign up, cart, brand management, categories, and product reviews.',
    },
    {
      title: 'Saraha App',
      tech: ['Node.js', 'MongoDB', 'Express'],
      icon: <SiMongodb />,
      color: '#ff416c',
      description: 'Anonymous messaging app with registration, login, profile update, and sending/receiving messages.',
    },
    {
      title: 'Task Management',
      tech: ['Express', 'Mongoose'],
      icon: <SiExpress />,
      color: '#f9ca24',
      description: 'User authentication and task management with multiple statuses, deadlines, and CRUD operations.',
    },
    {
      title: 'Food Store',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      icon: <FaAngular />,
      color: '#e74c3c',
      description: 'Complete food ordering platform with browsing, cart, order management, and payment integration.',
    },
    {
      title: 'Movie App',
      tech: ['Next.js', 'React', 'Tailwind'],
      icon: <SiNextdotjs />,
      color: '#00b894',
      description: 'Modern movie app with Home, About, Top Trades, Dark Mode, and real-time data integration.',
    },
    {
      title: 'Online Shop',
      tech: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      icon: <SiTypescript />,
      color: '#fd79a8',
      description: 'Full e-commerce with auth, product management, cart, wishlist, checkout, payments, and reviews.',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h5>My Work</h5>
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card reveal-up" key={index} style={{ '--accent': project.color }}>
              <div className="project-icon">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-techs">
                  {project.tech.map((t, i) => (
                    <span className="project-tech" key={i}>{t}</span>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
