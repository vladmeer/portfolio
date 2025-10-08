// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import ScrollButton from '@/components/ScrollButton';

import personalInfo from '@/data/personal-info.json';

const BrandSection: React.FC = () => {
  

  return (
    <div className="space-y-3 md:space-y-4 text-center md:text-left">
      <ScrollButton 
        targetId="hero"
        className="text-xl md:text-2xl font-bold gradient-text font-mono hover:scale-105 transition-transform duration-200 inline-block"
        ariaLabel="Scroll to top"
      >
        {`${personalInfo.personal.nickname}`}
      </ScrollButton>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {personalInfo.personal.closingBio}
      </p>
    </div>
  );
};

export default BrandSection;
