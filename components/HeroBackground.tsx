import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Imagem de fundo para Mobile */}
      <picture className="absolute inset-0">
        <source
          srcSet="/hero-background-mobile.jpg"
          media="(max-width: 768px)"
        />
        <img
          src="/hero-background-desktop.jpg"
          alt="Toy Story Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay escuro para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Gradiente adicional para contraste no bottom (onde fica o texto principal) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-0"></div>
    </>
  );
};

export default HeroBackground;