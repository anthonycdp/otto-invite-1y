import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Calendar, Clock, MapPin, Gift } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description, delay }) => (
  <ScrollReveal delay={delay} className="flex flex-col items-center text-center group">
    <div className="w-20 h-20 bg-toyYellow rounded-full flex items-center justify-center text-toyBlue border-4 border-white shadow-lg mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
      {icon}
    </div>
    <h3 className="font-heading text-xl text-white drop-shadow-md mb-1">{title}</h3>
    <p className="font-body text-white/90 font-bold bg-toyBlue/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
      {description}
    </p>
  </ScrollReveal>
);

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-16 relative overflow-hidden">
        {/* Background Overlay to make it distinct */}
        <div className="absolute inset-0 bg-toyBlue/80 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-toy text-toyYellow drop-shadow-[0_2px_0_rgba(0,0,0,0.3)] stroke-blue-900">
            Missão Especial
          </h2>
          <p className="text-white text-lg font-heading mt-2">Detalhes da nossa aventura</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <InfoItem 
            icon={<Calendar size={36} strokeWidth={2.5} />}
            title="DATA"
            description="24/01/2026"
            delay={0}
          />
          <InfoItem 
            icon={<Clock size={36} strokeWidth={2.5} />}
            title="HORÁRIO"
            description="15h às 19h"
            delay={100}
          />
          <InfoItem 
            icon={<MapPin size={36} strokeWidth={2.5} />}
            title="LOCAL"
            description="Ver Mapa"
            delay={200}
          />
           <InfoItem 
            icon={<Gift size={36} strokeWidth={2.5} />}
            title="PRESENTE"
            description="Sugestões"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;