import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  animation?: 'fade-up' | 'fade-in' | 'scale-up';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8'; // Initial state for fade-up
    
    switch (animation) {
      case 'fade-up':
        return 'opacity-100 translate-y-0';
      case 'fade-in':
        return 'opacity-100';
      case 'scale-up':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  // Initial state styles before animation triggers
  const initialStyles = animation === 'scale-up' ? 'scale-95' : '';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${initialStyles} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
