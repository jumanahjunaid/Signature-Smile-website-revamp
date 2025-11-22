
import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  subtitle, 
  title, 
  description, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-10 ${alignment === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
      {subtitle && (
        <span className={`block text-xs font-bold uppercase tracking-widest mb-3 ${light ? 'text-brand-cyan' : 'text-brand-cyan'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg font-light ${light ? 'text-slate-300' : 'text-brand-text'}`}>
          {description}
        </p>
      )}
      <div className={`h-1 w-20 mt-6 rounded-full ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'bg-white/30' : 'bg-brand-navy'}`} />
    </div>
  );
};

export default SectionHeading;
