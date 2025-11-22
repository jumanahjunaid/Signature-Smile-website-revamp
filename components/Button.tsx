
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95";
  
  const variants = {
    // Blue gradient for high impact
    primary: "bg-gradient-brand text-white hover:shadow-lg hover:shadow-brand-cyan/40 border border-transparent",
    // Dark navy for secondary actions
    secondary: "bg-brand-navy text-white hover:bg-blue-900 hover:shadow-lg border border-transparent",
    // White outline
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-navy focus:ring-white",
    // Ghost
    ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5",
    // Solid white for dark backgrounds
    white: "bg-white text-brand-navy hover:bg-slate-100 hover:shadow-lg border border-transparent"
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5 uppercase tracking-wider",
    md: "text-sm px-7 py-3.5 uppercase tracking-wider",
    lg: "text-sm md:text-base px-8 py-4 uppercase tracking-wider"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
