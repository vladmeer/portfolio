import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 98 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 87 },
        { name: "GraphQL", level: 83 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 80 },
        { name: "Vercel", level: 95 },
        { name: "CI/CD", level: 87 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      skills: [
        { name: "Git", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 88 },
        { name: "Webpack", level: 82 },
        { name: "Prisma", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I've mastered to build exceptional digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="glass-card p-6 rounded-xl group">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-accent-gradient mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-accent-gradient transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023"
              },
              {
                title: "React Specialist Certification",
                issuer: "Meta",
                year: "2022"
              },
              {
                title: "Google Cloud Professional",
                issuer: "Google",
                year: "2024"
              }
            ].map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-accent font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;