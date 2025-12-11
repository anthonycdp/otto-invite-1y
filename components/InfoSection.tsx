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
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/30 shadow-lg mb-2 sm:mb-3 md:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30">
        {icon}
      </div>
      <h3 className="font-heading text-base sm:text-lg md:text-2xl text-white font-bold mb-1 sm:mb-2 md:mb-3 drop-shadow-lg">{title}</h3>
      <p className="font-body text-yellow-300 font-semibold bg-black/30 backdrop-blur-md px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base border border-white/20">
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
      className="relative h-dvh flex flex-col overflow-hidden"
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

      {/* Content Container - Flex Column */}
      <div className="relative z-10 flex flex-col h-full pt-14 sm:pt-20 pb-6">
        <div className="container mx-auto px-4 flex flex-col h-full justify-between">
          <ScrollReveal className="text-center flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-toy text-toyYellow drop-shadow-[0_2px_0_rgba(0,0,0,0.3)] stroke-blue-900">
              Missão Especial
            </h2>
            <p className="text-white text-sm sm:text-base md:text-xl font-heading mt-1 sm:mt-2">Detalhes da nossa aventura</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 md:gap-8 justify-items-center flex-shrink-0 w-full max-w-4xl mx-auto">
          <InfoItem
            icon={<Calendar size={28} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            title="DATA"
            description="18/01/2026"
            delay={0}
          />
          <InfoItem
            icon={<Clock size={28} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            title="HORÁRIO"
            description="18h às 22h"
            delay={100}
          />
          <InfoItem
            icon={<MapPin size={28} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            title="LOCAL"
            description="Mini Golf Aventura"
            delay={200}
            onClick={openMaps}
            clickable={true}
          />
           <InfoItem
            icon={<Gift size={28} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            title="PRESENTE"
            description="Dicas de Presentes"
            delay={300}
            onClick={() => setShowGiftModal(true)}
            clickable={true}
          />
        </div>

        {/* Map Container - Fixed small height */}
        <div className="flex-shrink-0 flex justify-center w-full">
          <div
            className="transition-all duration-1000 ease-out opacity-100 translate-y-0 w-full max-w-3xl h-44 sm:h-52 md:h-72 bg-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-inner border-2 sm:border-4 border-dashed border-gray-300 relative"
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
            <div className="absolute inset-0 pointer-events-none border-2 sm:border-4 border-toyBlue/20 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
          </div>
        </div>

        {/* Button Container - Fixed at bottom */}
        <div className="flex-shrink-0 flex justify-center pb-2">
        <motion.button
          onClick={onProceed}
          className="
            relative font-heading font-bold rounded-full transition-all duration-200
            bg-toyYellow border-b-4 border-yellow-600 text-yellow-900
            shadow-lg active:scale-95 active:border-b-2 active:translate-y-1 active:shadow-none
            focus:outline-none focus:ring-4 focus:ring-toyYellow/50
            px-7 sm:px-9 md:px-12 py-3.5 sm:py-5 md:py-6 text-base sm:text-lg md:text-2xl min-w-[200px] sm:min-w-[240px] md:min-w-[280px] overflow-hidden
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
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            Confirme sua presença
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
              style={{ transform: 'rotate(-1.49645deg)' }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </span>
          <svg
            className="absolute -top-2 -left-2 text-yellow-600 hidden sm:block"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: 'rotate(170.907deg)', opacity: 1 }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            className="absolute -top-1 -right-2 text-yellow-600 hidden sm:block"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: 'scale(0.820932) rotate(318.791deg)', opacity: 0.820932 }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        </motion.button>
        </div>
        </div>
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
