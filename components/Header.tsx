import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Informações', href: '#info' },
  { label: 'Local', href: '#local' },
  { label: 'Confirmar', href: '#rsvp' },
];

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 mx-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`font-body font-bold text-lg hover:scale-110 transition-transform text-white hover:text-toyYellow drop-shadow-md`}
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>

    </header>
  );
};

export default Header;
