import { resumeData } from "@/data/resumeData";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide">{resumeData.name}</span>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-24 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            {resumeData.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {resumeData.title}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {resumeData.summary}
          </p>
          <div className="flex items-center gap-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </section>

        {/* Experience Section */}
        <section id="about" className="mb-24 scroll-mt-24 animate-fade-in animate-delay-100">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Experience</h2>
          
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-border last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="mt-12">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Education</h2>
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-medium">{resumeData.education.degree}</h3>
                  <p className="text-muted-foreground">{resumeData.education.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground">{resumeData.education.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">CGPA: {resumeData.education.cgpa}</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24 animate-fade-in animate-delay-200">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Projects</h2>
          
          <div className="grid gap-6">
            {resumeData.projects.map((project, index) => (
              <div 
                key={index} 
                className="group p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-24 animate-fade-in animate-delay-300">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.languages.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-muted rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Databases & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.databases.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-muted rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frameworks.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-muted rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">AI & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.ai.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-muted rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-24 animate-fade-in animate-delay-400">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Certifications</h2>
          
          <div className="grid gap-4">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer && `${cert.issuer} • `}{cert.year}
                  </p>
                </div>
                <div className="flex gap-2">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground hidden md:inline">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Contact</h2>
          
          <div className="p-8 border border-border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{resumeData.email}</span>
              </a>
              
              <a 
                href={`tel:${resumeData.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{resumeData.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{resumeData.location}</span>
              </div>
              
              <a 
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
