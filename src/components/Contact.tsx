import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/alexchen',
      username: '@alexchen'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alexchen',
      username: 'Alex Chen'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/alexchen',
      username: '@alexchen_dev'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full glow-button py-6 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-4 group hover:text-primary transition-colors duration-200"
                    >
                      <div className="p-3 rounded-lg bg-accent-gradient group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-background" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Follow Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-accent-gradient group-hover:scale-110 transition-transform duration-300">
                          <Icon size={18} className="text-background" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-primary">→</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gradient mb-4">
                <div className="w-3 h-3 bg-background rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Available for Work</h4>
              <p className="text-muted-foreground mb-4">
                Currently accepting new projects and collaborations
              </p>
              <Button 
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;