import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InvitationStep } from '../../types';

interface PaginationArrowsProps {
  currentStep: InvitationStep;
  onStepChange: (step: InvitationStep) => void;
}

const PaginationArrows: React.FC<PaginationArrowsProps> = ({ currentStep, onStepChange }) => {
  const steps = [InvitationStep.HERO, InvitationStep.INFO, InvitationStep.RSVP];
  const currentIndex = steps.indexOf(currentStep);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < steps.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onStepChange(steps[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onStepChange(steps[currentIndex + 1]);
    }
  };

  return (
    <>
      <AnimatePresence>
        {hasPrev && (
          <motion.button
            key="prev-arrow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="fixed left-1 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 text-white/40 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Voltar"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronLeft size={32} className="md:w-10 md:h-10 drop-shadow-md" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasNext && (
          <motion.button
            key="next-arrow"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="fixed right-1 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 text-white/40 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Avançar"
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight size={32} className="md:w-10 md:h-10 drop-shadow-md" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default PaginationArrows;