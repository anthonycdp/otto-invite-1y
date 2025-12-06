import React from 'react';
import { motion } from 'framer-motion';

interface ToyStoryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ToyStoryButton: React.FC<ToyStoryButtonProps> = ({
  children,
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative font-heading font-bold rounded-full transition-all duration-200
        bg-toyYellow border-b-4 border-yellow-600 text-yellow-900
        shadow-lg hover:bg-yellow-300 hover:border-yellow-700
        active:scale-95 active:border-b-2 active:translate-y-1 active:shadow-none
        focus:outline-none focus:ring-4 focus:ring-toyYellow/50
        px-8 py-4 text-xl min-w-[200px] overflow-hidden group
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, y: 4 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: 0.8
      }}
    >
      {/* Efeito de brilho ao passar o mouse */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Texto do botão */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {/* Ícone do Woody */}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="inline-block"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      </span>

      {/* Estrelas animadas ao redor do botão */}
      <motion.svg
        className="absolute -top-2 -left-2 text-yellow-600 opacity-0 group-hover:opacity-100"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          rotate: [0, 360],
          scale: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>

      <motion.svg
        className="absolute -top-1 -right-2 text-yellow-600 opacity-0 group-hover:opacity-100"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          rotate: [360, 0],
          scale: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>
    </motion.button>
  );
};

export default ToyStoryButton;