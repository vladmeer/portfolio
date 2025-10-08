// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import ScrollButton from '@/components/ScrollButton';
import personalInfo from '@/data/personal-info.json';

const QuickLinks: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: 'hero', type: 'scroll' },
    { name: 'Skills', href: 'skills', type: 'scroll' },
    { name: 'Experience', href: 'experience', type: 'scroll' },
    { name: 'Projects', href: 'projects', type: 'scroll' },
    // { name: 'Publications', href: 'publications', type: 'scroll' },
    // { name: 'Resume', href: personalInfo.social.resume, type: 'external' }
  ];

  return (
    <div className="space-y-3 md:space-y-4 text-center md:text-left md:mx-auto">
      <h3 className="text-base md:text-lg font-semibold text-foreground">Quick Links</h3>
      <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 md:gap-y-2">
        {quickLinks.map((link) => (
          <li key={link.name}>
            {link.type === 'scroll' ? (
              <ScrollButton
                targetId={link.href}
                className="relative group text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                ariaLabel={`Scroll to ${link.name} section`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
              </ScrollButton>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-1 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                aria-label={`Open ${link.name} in new tab`}
              >
                {link.name}
                <svg
                  className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default QuickLinks;
