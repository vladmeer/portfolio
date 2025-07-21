import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary/20 rotate-45 float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-accent/20 rotate-12 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-primary/15 rotate-45 float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text text-shadow-glow">Alex Chen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Next.js Specialist & Full-Stack Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I craft exceptional digital experiences with cutting-edge technologies. 
            Specializing in React, Next.js, and modern web development, I transform 
            ideas into scalable, performant applications that delight users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button 
              onClick={scrollToContact}
              className="glow-button font-semibold px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2">
              <img 
                src={profilePhoto} 
                alt="Alex Chen" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Glowing ring effect */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -inset-8 rounded-full border border-accent/10 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;