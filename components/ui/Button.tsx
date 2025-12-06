import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  // Added active:translate-y-1 to simulate button press with the border-b
  const baseStyles = "font-heading font-bold rounded-full transition-all duration-200 transform active:scale-95 active:translate-y-1 active:shadow-none focus:outline-none flex items-center justify-center";
  
  const variants = {
    // Red button (Plastic look)
    primary: "bg-toyRed border-b-4 border-red-800 text-white shadow-lg hover:bg-red-500",
    // Yellow button (Sheriff Badge look)
    secondary: "bg-toyYellow border-b-4 border-yellow-600 text-yellow-900 shadow-lg hover:bg-yellow-300",
    // White/Outline
    outline: "bg-white border-b-4 border-toyBlue text-toyBlue shadow-md hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-[100px]",
    md: "px-6 py-3 text-base min-w-[140px]",
    lg: "px-8 py-4 text-xl min-w-[200px]",
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