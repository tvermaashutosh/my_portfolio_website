import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, ExternalLink, Github } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%220.5%22%20opacity%3D%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <div className="relative mb-8 animate-float">
              <img 
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-white/20 shadow-glow object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Alex Johnson
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in max-w-2xl">
              Full Stack Developer & Software Engineer
            </p>
            
            <p className="text-lg text-white/80 mb-8 animate-fade-in max-w-3xl">
              Passionate about creating elegant solutions to complex problems. 
              Specialized in modern web technologies and scalable applications.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Skills Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="skill"
                className="text-sm py-2 px-4 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-elegant animate-slide-in border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-elegant animate-slide-in border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {edu.school}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-elegant animate-slide-in border-border/50 h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Johnson. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;