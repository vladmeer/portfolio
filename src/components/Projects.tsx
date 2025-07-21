import React, { useState } from 'react';
import { ExternalLink, Github, Laptop, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "web",
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Modern analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "web",
      liveUrl: "https://analytics.example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, instant transfers, and budget tracking.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      tags: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      category: "mobile",
      liveUrl: "https://app.example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 4,
      title: "DevOps Automation Suite",
      description: "Comprehensive DevOps platform for CI/CD pipeline management, infrastructure monitoring, and deployment automation.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
      tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
      category: "devops",
      liveUrl: "https://devops.example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 5,
      title: "SaaS Project Management Tool",
      description: "Enterprise-grade project management platform with team collaboration, time tracking, and advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      category: "web",
      liveUrl: "https://pm.example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Scalable chat application with end-to-end encryption, file sharing, and multi-device synchronization.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
      tags: ["React", "Socket.io", "Redis", "WebRTC"],
      category: "web",
      liveUrl: "https://chat.example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Apps', icon: Laptop },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'devops', name: 'DevOps', icon: Github }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work and technical achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 ${
                  filter === category.id 
                    ? 'glow-button' 
                    : 'border-primary/50 hover:border-primary hover:bg-primary/10'
                }`}
              >
                <Icon size={18} />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass-card rounded-xl overflow-hidden group ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-primary rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <ExternalLink size={20} className="text-primary-foreground" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-accent rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <Github size={20} className="text-accent-foreground" />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent-gradient text-background">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg"
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Projects;