import React, { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import "./Portfolio.css";

const NAVBAR_HEIGHT = 136;

const handleScroll = (navs, setIsScrolled, setActiveSection) => {
  setIsScrolled(window.scrollY > 50);

  const sections = navs
    .map(name => {
      const id = name.toLowerCase();
      const el = document.getElementById(id);
      return el ? { id, top: el.getBoundingClientRect().top + window.scrollY } : null;
    })
    .filter(Boolean);

  const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 2;

  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollPosition >= sections[i].top) {
      setActiveSection(sections[i].id);
      break;
    }
  }
};

const scrollToSection = (sectionId, setActiveSection, setIsMobileMenuOpen) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - NAVBAR_HEIGHT;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setActiveSection(sectionId);
  }
  setIsMobileMenuOpen(false);
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (!data) return;

    const onScroll = () => handleScroll(data.navs, setIsScrolled, setActiveSection);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  if (!data) return null;

  const { profile, navs, experience, education, achievements, skills, projects, footer } = data;

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <ul className={`navbar-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            {navs.map((name) => {
              const id = name.toLowerCase();
              return (
                <li key={name}>
                  <a
                    className={`navbar-link ${activeSection === id ? "active" : ""}`}
                    onClick={() => scrollToSection(id, setActiveSection, setIsMobileMenuOpen)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profile" className="hero-section bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {profile.name}
              </h1>

              <p className="hero-description">
                {profile.description}
              </p>

              <div className="contact-links">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="profile-image-container">
              <img
                src={profile.image}
                alt="Profile"
                className="profile-image"
              />
              <div className="profile-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-container">
        <div className="container">
          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title" style={{ paddingTop: "2px" }}>
              Experience
            </h2>

            <div className="experience-container">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-header">
                    <div className="experience-header">
                      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={job.image} alt={job.company} className="company-logo" />
                        <div>
                          <h3 className="card-title">{job.company}</h3>
                          <p className="card-company">
                            {job.title}
                          </p>
                        </div>
                      </div>
                      <div className="experience-meta">
                        <div className="meta-item" style={{ marginRight: "4px" }}>
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{job.period}</span>
                        </div>
                        <div className="meta-item">
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span style={{ marginLeft: "-2px" }}>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content" style={{ marginBottom: `${job.description.length === 0 && job.technologies.length === 0 ? "-35px" : "-5px"}` }}>
                    <p className="project-description">
                      <ul>
                        {job.description.map((point, idx) => (
                          <li key={idx} className="project-description" style={{ marginLeft: "12px" }}>{point}</li>
                        ))}
                      </ul>
                    </p>
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="tech-badges" style={{ marginTop: "20px", marginBottom: "7px" }}>
                        {job.technologies.map((tech) => (
                          <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {job.link && (
                      <div className="project-links" style={{ marginBottom: "2px", marginTop: "16px" }}>
                        <a
                          href={job.link}
                          target="_blank"
                                                   className="project-link"
                        >
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          <span>Link</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="section">
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
                  <div className="card-header" style={{ marginBottom: "21px" }}>
                    <div className="experience-header">
                      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <img src={edu.image} alt={edu.school} className="company-logo" />
                        <div>
                          <h3 className="card-title">{edu.school}</h3>
                          <p className="card-company">
                            {edu.degree}
                          </p>
                        </div>
                      </div>
                      <div className="experience-meta">
                        <div className="meta-item" style={{ marginRight: "4px" }}>
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{edu.period}</span>
                        </div>
                        <div className="meta-item">
                          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span style={{ marginLeft: "-2px" }}>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="section">
            <h2 className="section-title">
              Achievements
            </h2>

            <div className="projects-grid">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card project-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-header" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <img src={achievement.image} alt={achievement.title} className="company-logo" />
                    <h3 className="card-title" style={{ paddingTop: "4px" }}>{achievement.title}</h3>
                  </div>
                  <div className="card-content project-content" style={{ marginBottom: "-14px", marginTop: "0px" }}>
                    <div className="tech-badges">
                      <span className="tech-badge">{achievement.rating}</span>
                      <span className="tech-badge">{achievement.label}</span>
                      <span className="tech-badge">{achievement.questions} problems</span>
                      <span className="tech-badge">{achievement.contests} contests</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <h2 className="section-title" style={{ paddingTop: "5px" }}>
              Skills
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

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title">
              Projects
            </h2>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="card project-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="card-header">
                    <h3 className="card-title" style={{ marginTop: "-4px", marginBottom: "10px" }}>{project.title}</h3>
                    <p className="project-description">
                      <ul>
                        {project.description.map((point, idx) => (
                          <li key={idx} className="project-description" style={{ marginLeft: "12px" }}>{point}</li>
                        ))}
                      </ul>
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

                    <div className="project-links" style={{ marginBottom: "-3px", marginTop: "3px" }}>
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                      >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        <span>Link</span>
                      </a>
                      <a
                        href={project.code}
                        className="project-link"
                        target="_blank"
                      >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span>Code</span>
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
          <div className="footer-content" style={{ display: "flex", justifyContent: "center" }}>
            <div className="contact-links">
              <a href={footer.github} target="_blank" rel="noopener noreferrer" className="contact-link footer-content">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
