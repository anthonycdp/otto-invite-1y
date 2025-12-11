import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import { InvitationStep } from './types';
import PaginationArrows from './components/ui/PaginationArrows';

function App() {
  const [currentStep, setCurrentStep] = useState<InvitationStep>(InvitationStep.HERO);

  const transitions = {
    [InvitationStep.HERO]: {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.1 },
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    [InvitationStep.INFO]: {
      initial: { y: 100, opacity: 0, scale: 0.95 },
      animate: { y: 0, opacity: 1, scale: 1 },
      exit: { x: -100, rotateY: -90, opacity: 0 },
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    },
    [InvitationStep.RSVP]: {
      initial: { x: 100, rotateY: 90, opacity: 0 },
      animate: { x: 0, rotateY: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="relative font-body text-gray-800 antialiased overflow-x-hidden selection:bg-toyYellow selection:text-toyPurple z-10">
      <BackgroundMusic src="/amigo-toy-story.mp3" />
      <PaginationArrows currentStep={currentStep} onStepChange={setCurrentStep} />
      <AnimatePresence mode="wait">
        {currentStep === InvitationStep.HERO && (
          <motion.div
            key="hero"
            {...transitions[InvitationStep.HERO]}
            className="h-dvh overflow-hidden"
          >
            <Header />
            <main>
              <Hero onOpenInvitation={() => setCurrentStep(InvitationStep.INFO)} />
            </main>
            <Footer />
          </motion.div>
        )}

        {currentStep === InvitationStep.INFO && (
          <motion.div
            key="info"
            {...transitions[InvitationStep.INFO]}
            className="h-dvh overflow-hidden"
          >
            <Header />
            <main>
              <InfoSection onProceed={() => setCurrentStep(InvitationStep.RSVP)} />
            </main>
          </motion.div>
        )}

        {currentStep === InvitationStep.RSVP && (
          <motion.div
            key="rsvp"
            {...transitions[InvitationStep.RSVP]}
            className="h-dvh overflow-hidden"
          >
            <Header />
            <main>
              <RSVP />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
