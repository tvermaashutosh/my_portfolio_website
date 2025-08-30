import React from "react";
import "./Portfolio.css";
import profileImage from "../assets/profile-image.jpg";

const Portfolio = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "SQL", "Git", "AWS", "Docker", "GraphQL"
  ];

  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of scalable web applications using React and Node.js. Managed a team of 4 developers and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces."
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      location: "Austin, TX",
      description: "Built responsive web applications and REST APIs. Participated in agile development processes and code reviews."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
      location: "Boston, MA"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy",
      period: "2018",
      location: "Online"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using Socket.io. Includes project boards, team collaboration, and deadline tracking.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard that displays weather patterns and analytics using Chart.js and a third-party weather API.",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        
        <div className="container">
          <div className="hero-content">
            <div className="profile-image-container">
              <img 
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
              <div className="profile-overlay"></div>
            </div>
            
            <h1 className="hero-title">
              Alex Johnson
            </h1>
            
            <p className="hero-subtitle">
              Full Stack Developer & Software Engineer
            </p>
            
            <p className="hero-description">
              Passionate about creating elegant solutions to complex problems. 
              Specialized in modern web technologies and scalable applications.
            </p>
          </div>
        </div>
      </section>

      <div className="content-container">
        <div className="container">
          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">
              Skills & Technologies
            </h2>
            
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="skill-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="section">
            <h2 className="section-title">
              Work Experience
            </h2>
            
            <div className="experience-container">
              {workExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-header">
                    <div className="experience-header">
                      <div>
                        <h3 className="card-title">{job.title}</h3>
                        <p className="card-company">
                          {job.company}
                        </p>
                      </div>
                      <div className="experience-meta">
                        <div className="meta-item">
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <span>{job.period}</span>
                        </div>
                        <div className="meta-item">
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="card-description">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">
              Education
            </h2>
            
            <div className="education-grid">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-header">
                    <h3 className="card-title">{edu.degree}</h3>
                    <p className="card-company">
                      {edu.school}
                    </p>
                  </div>
                  <div className="card-content">
                    <div className="meta-item">
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{edu.period}</span>
                    </div>
                    <div className="meta-item">
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="section">
            <h2 className="section-title">
              Featured Projects
            </h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="card project-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-header">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>
                  <div className="card-content project-content">
                    <div>
                      <div className="tech-badges">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        className="project-link"
                      >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        className="project-link"
                      >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              © 2024 Alex Johnson. Built with React & CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;