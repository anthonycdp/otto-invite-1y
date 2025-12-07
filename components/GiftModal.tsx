import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Shirt, Baby } from 'lucide-react';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftModal: React.FC<GiftModalProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    // Animation will be handled by AnimatePresence
    onClose();
  };

  const modalVariants = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const giftSuggestions = [
    {
      icon: Shirt,
      title: "Roupa",
      description: "Tamanho n.2",
      color: "toyBlue"
    },
    {
      icon: Baby,
      title: "Sapato",
      description: "Número 22/23",
      color: "toyYellow"
    },
    {
      icon: Gift,
      title: "Brinquedos",
      description: "Toys Story temáticos",
      color: "toyPurple"
    }
  ];

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-amber-50 rounded-3xl shadow-2xl max-w-md w-full p-6 border-4 border-blue-900/30"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-12 h-12 bg-toyRed border-b-4 border-red-800 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift className="w-6 h-6 text-white" />
            </motion.div>
            <h2
              className="font-toy text-2xl font-bold"
              style={{
                background: 'linear-gradient(180deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Caixinha da Felicidade
            </h2>
          </div>
          <motion.button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-toyCloud text-toyBlue transition-colors"
            aria-label="Fechar"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <p className="font-body text-gray-600 text-center mb-6">
            Sugestões de presentes para o Otto:
          </p>

          {/* Gift Suggestions */}
          <motion.div
            className="space-y-3"
            variants={itemVariants}
          >
            {giftSuggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              const colorClasses = {
                toyBlue: {
                  bg: 'bg-toyBlue',
                  border: 'border-blue-900',
                  lightBg: 'bg-blue-50',
                  lightBorder: 'border-blue-200'
                },
                toyYellow: {
                  bg: 'bg-toyYellow',
                  border: 'border-yellow-600',
                  lightBg: 'bg-yellow-50',
                  lightBorder: 'border-yellow-200'
                },
                toyPurple: {
                  bg: 'bg-toyPurple',
                  border: 'border-purple-800',
                  lightBg: 'bg-purple-50',
                  lightBorder: 'border-purple-200'
                }
              };
              const colors = colorClasses[suggestion.color as keyof typeof colorClasses] || colorClasses.toyBlue;

              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border-2 shadow-lg cursor-pointer"
                  style={{
                    borderColor: `${colors.border}40`
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: colors.lightBg,
                    borderColor: colors.border,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${colors.bg} border-b-4 ${colors.border} rounded-full flex items-center justify-center shadow-md`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-gray-800">
                      {suggestion.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      {suggestion.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer Message */}
          <motion.div
            className="mt-6 p-4 bg-toyCloud border-2 border-toyLightBlue/30 rounded-lg text-center"
            variants={itemVariants}
          >
            <p className="font-body text-sm text-gray-700">
              O mais importante é a sua presença!
            </p>
          </motion.div>

          {/* Close Button */}
          <motion.div
            className="mt-6 flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleClose}
              className="px-6 py-3 bg-toyRed border-b-4 border-red-800 text-white font-heading font-bold rounded-full shadow-lg hover:bg-red-500 transition-all duration-200 transform active:scale-95 active:translate-y-1 active:shadow-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fechar
            </motion.button>
          </motion.div>
        </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GiftModal;
