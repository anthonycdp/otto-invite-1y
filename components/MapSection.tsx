import React from 'react';
import { Button } from './ui/Button';
import ScrollReveal from './ui/ScrollReveal';
import { ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  // Configurable address link
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Buffet+Espaço+Sonhos";

  return (
    <section id="local" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <ScrollReveal className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading text-toyBlue mb-4">
              Como Chegar
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              Rua dos Brinquedos, 123 – Bairro Feliz.<br/>
              Estacionamento disponível no local.
            </p>
            <Button 
              variant="primary" 
              onClick={() => window.open(mapLink, '_blank')}
              className="flex items-center gap-2"
            >
              Abrir no Google Maps <ExternalLink size={18} />
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full md:w-1/2 h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-inner border-4 border-dashed border-gray-300 relative">
             {/* Simulating an Embedded Map */}
             <iframe 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               loading="lazy"
               title="Mapa do local"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870245053!2d-46.65219568502223!3d-23.56134858468285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.+Paulista+-+Bela+Vista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1556627092892!5m2!1spt-BR!2sbr"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-4 border-toyBlue/20 rounded-2xl"></div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
