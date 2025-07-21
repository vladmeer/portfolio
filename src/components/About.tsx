import React from 'react';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead of technology trends and implementing cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in full-stack development, I've had the privilege 
                of working with startups and enterprise companies, building everything from MVPs 
                to large-scale applications serving millions of users.
              </p>
              <p>
                My expertise in Next.js and React ecosystem allows me to create performant, 
                SEO-friendly applications that deliver exceptional user experiences. I'm passionate 
                about modern development practices, clean architecture, and staying current with 
                the latest technologies.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or mentoring junior developers. I believe in 
                continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">How I Work</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="glass-card p-6 rounded-xl group">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-accent-gradient mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-background" />
                      </div>
                      <h4 className="font-semibold text-foreground">{principle.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;