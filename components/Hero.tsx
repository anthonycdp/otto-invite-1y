import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import ToyStoryButton from './ui/ToyStoryButton';
import FloatingParticles from './FloatingParticles';
import HeroBackground from './HeroBackground';
import { Star, Cloud, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToInfo = () => {
    document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Responsive */}
      <HeroBackground />

      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Animated Floating Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-5 text-toyYellow opacity-90"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Star size={40} fill="currentColor" className="drop-shadow-md" />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-10 text-white opacity-60"
      >
        <Cloud size={80} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-10 text-white opacity-50"
      >
        <Cloud size={50} fill="currentColor" />
      </motion.div>

      {/* Additional floating stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-toyYellow opacity-30"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Star size={20 + i * 5} fill="currentColor" />
        </motion.div>
      ))}
      
      {/* Decorative Floor (Wood style) - Only visible at bottom */}
      <div className="absolute bottom-0 w-full h-12 md:h-16 bg-[#D4A373] border-t-8 border-[#BC8A5F] z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center relative">

        {/* Sheriff Star Badge at top */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="mb-4"
        >
          <motion.div
            className="relative text-toyYellow drop-shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Star size={64} fill="currentColor" stroke="#E59500" strokeWidth={2} />
            </motion.div>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-yellow-800 pt-1">
                SHERIFF
            </span>
          </motion.div>
        </motion.div>

        {/* LOGO BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.4
          }}
          className="relative mb-8 cursor-default"
        >
          {/* Top Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.6
            }}
            className="font-heading text-white text-xl md:text-2xl font-bold tracking-widest drop-shadow-md mb-[-10px] uppercase"
          >
            Aniversário do
          </motion.div>

          {/* Main Name - Toy Story Style */}
          <motion.h1
            className="text-toy-story text-7xl md:text-9xl leading-none"
            initial={{ scale: 0, rotate: -15 }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: 0,
              textShadow: [
                "2px 2px 0px rgba(0,0,0,0.2)",
                "0 0 30px rgba(255,255,0,0.5)",
                "2px 2px 0px rgba(0,0,0,0.2)"
              ]
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              textShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.8
              }
            }}
          >
            OTTO
          </motion.h1>

          {/* Red Banner - "Faz 1 Ano" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 1
            }}
            className="relative mt-[-10px] z-10"
          >
            <motion.div
              className="bg-toyRed transform -skew-x-6 inline-block px-8 py-2 border-2 border-red-800 shadow-[0_4px_0_rgba(0,0,0,0.2)]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                className="block transform skew-x-6 font-toy text-white text-2xl md:text-4xl tracking-wide text-shadow-sm"
                animate={{
                  textShadow: [
                    "2px 2px 0px rgba(0,0,0,0.2)",
                    "3px 3px 0px rgba(0,0,0,0.3)",
                    "2px 2px 0px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                FAZ 1 ANINHO
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Date / Info */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            ]
          }}
          transition={{
            opacity: { type: "spring", stiffness: 100, damping: 15, delay: 1.2 },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-4 border-toyBlue max-w-sm w-full mx-auto mb-8 relative"
        >
          {/* Animated Blue pins/screws in corners */}
          {[
            { top: "8px", left: "8px" },
            { top: "8px", right: "8px" },
            { bottom: "8px", left: "8px" },
            { bottom: "8px", right: "8px" }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gray-300 rounded-full border border-gray-400"
              style={position}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}

          <motion.p
            className="font-heading text-2xl text-toyBlue font-bold mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            24 de Janeiro
          </motion.p>
          <motion.p
            className="font-body text-gray-600 font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            Sábado • 15h00
          </motion.p>
          <motion.p
            className="font-body text-gray-500 text-sm mt-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            Buffet Espaço Sonhos
          </motion.p>
        </motion.div>

        {/* Animated Button */}
        <ToyStoryButton onClick={scrollToInfo}>
          Abrir Convite
        </ToyStoryButton>
      </div>
    </section>
  );
};

export default Hero;