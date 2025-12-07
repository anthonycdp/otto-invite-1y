import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import GiftModal from './GiftModal';
import { Calendar, Clock, MapPin, Gift } from 'lucide-react';

interface InfoSectionProps {
  onProceed: () => void;
}

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  onClick?: () => void;
  clickable?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description, delay, onClick, clickable }) => (
  <ScrollReveal delay={delay} className="flex flex-col items-center text-center group">
    <div
      className={`
        flex flex-col items-center text-center
        ${clickable ? 'cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95' : ''}
      `}
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === 'Enter' && onClick?.() : undefined}
    >
      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/30 shadow-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30">
        {icon}
      </div>
      <h3 className="font-heading text-xl text-white font-bold mb-2 drop-shadow-lg">{title}</h3>
      <p className="font-body text-yellow-300 font-semibold bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
        {description}
      </p>
    </div>
  </ScrollReveal>
);

const InfoSection: React.FC<InfoSectionProps> = ({ onProceed }) => {
  const [showGiftModal, setShowGiftModal] = useState(false);

  const openMaps = () => {
    const address = "R. Taubaté, 161 - Vila Nair, São José dos Campos - SP, 12231-030";
    const venue = "Mini Golf Aventura";
    const query = encodeURIComponent(`${venue} ${address}`);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
  };

  return (
    <motion.section
      id="info"
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/fundo-aventura.jpeg')" }}
      ></div>
      {/* Background Overlay to make it distinct */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Scrollable Content Container */}
      <div className="absolute inset-0 overflow-y-auto pt-16 pb-4 z-10 flex flex-col justify-between">
        <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-toy text-toyYellow drop-shadow-[0_2px_0_rgba(0,0,0,0.3)] stroke-blue-900">
            Missão Especial
          </h2>
          <p className="text-white text-lg font-heading mt-2">Detalhes da nossa aventura</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <InfoItem
            icon={<Calendar size={36} strokeWidth={2} className="text-white" />}
            title="DATA"
            description="18/01/2025"
            delay={0}
          />
          <InfoItem
            icon={<Clock size={36} strokeWidth={2} className="text-white" />}
            title="HORÁRIO"
            description="18h às 22h"
            delay={100}
          />
          <InfoItem
            icon={<MapPin size={36} strokeWidth={2} className="text-white" />}
            title="LOCAL"
            description="Mini Golf Aventura"
            delay={200}
            onClick={openMaps}
            clickable={true}
          />
           <InfoItem
            icon={<Gift size={36} strokeWidth={2} className="text-white" />}
            title="PRESENTE"
            description="Caixinha da Felicidade"
            delay={300}
            onClick={() => setShowGiftModal(true)}
            clickable={true}
          />
        </div>

        {/* Map Container */}
        <div className="w-full flex justify-center mt-8 mb-32">
          <div
            className="transition-all duration-1000 ease-out opacity-100 translate-y-0 w-full md:w-3/4 h-56 md:h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-inner border-4 border-dashed border-gray-300 relative"
            style={{ transitionDelay: '200ms' }}
          >
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Mapa do local"
              src="https://maps.google.com/maps?q=R.+Taubat%C3%A9%2C+161+-+Vila+Nair%2C+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP%2C+12231-030&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ border: '0px' }}
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-toyBlue/20 rounded-2xl"></div>
          </div>
        </div>
        </div>
      </div>

      {/* Button Container - Fixed at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <motion.button
          style={{ pointerEvents: 'auto' }}
          onClick={onProceed}
          className="
            relative font-heading font-bold rounded-full transition-all duration-200
            bg-toyYellow border-b-4 border-yellow-600 text-yellow-900
            shadow-lg active:scale-95 active:border-b-2 active:translate-y-1 active:shadow-none
            focus:outline-none focus:ring-4 focus:ring-toyYellow/50
            px-8 py-4 text-xl min-w-[200px] overflow-hidden
          "
          tabIndex={0}
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -1, 1, 0],
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 25px 30px -5px rgba(255, 215, 0, 0.3), 0 10px 10px -5px rgba(255, 215, 0, 0.2)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.15, rotate: 0 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "linear"
            }}
          ></motion.div>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Clique e confirme sua presença
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block"
              style={{ transform: 'rotate(-1.49645deg)' }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </span>
          <svg
            className="absolute -top-2 -left-2 text-yellow-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: 'rotate(170.907deg)', opacity: 1 }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            className="absolute -top-1 -right-2 text-yellow-600"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: 'scale(0.820932) rotate(318.791deg)', opacity: 0.820932 }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        </motion.button>
      </div>

      {/* Gift Modal */}
      <GiftModal
        isOpen={showGiftModal}
        onClose={() => setShowGiftModal(false)}
      />
    </motion.section>
  );
};

export default InfoSection;
