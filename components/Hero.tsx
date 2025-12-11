import React from 'react';
import { motion } from 'framer-motion';
import ToyStoryButton from './ui/ToyStoryButton';
import FloatingParticles from './FloatingParticles';
import HeroBackground from './HeroBackground';
import { Star, Cloud } from 'lucide-react';

interface HeroProps {
  onOpenInvitation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenInvitation }) => {

  return (
    <section id="hero" className="relative w-full h-dvh flex flex-col items-center justify-between overflow-hidden pt-12 sm:pt-14 md:pt-16 pb-0">
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
      <div className="absolute bottom-0 w-full h-6 sm:h-8 md:h-16 bg-[#D4A373] border-t-4 sm:border-t-8 border-[#BC8A5F] z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center flex-1 relative">

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
          className="mb-2 sm:mb-4 md:mb-6 animate-[pop_0.6s_cubic-bezier(0.34,1.56,0.64,1)]"
        >
          <motion.div
            className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 drop-shadow-2xl cursor-default group hover:scale-110 transition-transform duration-300"
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
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF7CC"></stop>
                    <stop offset="30%" stopColor="#FFC800"></stop>
                    <stop offset="100%" stopColor="#DAA520"></stop>
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur>
                    <feMerge>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M50 15 L63 40 L90 40 L68 58 L78 85 L50 70 L22 85 L32 58 L10 40 L37 40 Z"
                  fill="url(#goldGradient)"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                  className="drop-shadow-sm"
                ></path>
                <circle cx="50" cy="15" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1"></circle>
                <circle cx="90" cy="40" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1"></circle>
                <circle cx="78" cy="85" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1"></circle>
                <circle cx="22" cy="85" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1"></circle>
                <circle cx="10" cy="40" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1"></circle>
                <text
                  x="50"
                  y="58"
                  fontFamily="serif"
                  fontSize="10"
                  fontWeight="bold"
                  fill="#5D4037"
                  textAnchor="middle"
                  className="tracking-widest uppercase"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  SHERIFF
                </text>
              </svg>
            </motion.div>
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
          className="relative mb-4 sm:mb-6 md:mb-8 cursor-default"
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
            className="font-heading text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-widest drop-shadow-md mb-[-8px] sm:mb-[-10px] uppercase"
          >
            Aniversário do
          </motion.div>

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
            className="relative z-0"
          >

          {/* Main Name - Toy Story Style */}
          <motion.h1
            className="text-toy-story text-8xl sm:text-9xl md:text-[16rem] leading-none relative z-20"
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
            <motion.div
              className="bg-toyRed transform -skew-x-6 inline-block px-8 sm:px-10 md:px-14 py-3 sm:py-4 border-2 border-red-800 shadow-[0_4px_0_rgba(0,0,0,0.2)] mt-4 sm:mt-6 md:mt-8"
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
                className="block transform skew-x-6 font-toy text-white text-2xl sm:text-3xl md:text-6xl tracking-wide text-shadow-sm"
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

        {/* Date / Info - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 1.2
          }}
          className="flex flex-col items-center gap-1 mb-4 sm:mb-6 md:mb-10 animate-[fade-up_1s_ease-out_0.5s]"
        >
          {/* "Venha Brincar" Tag */}
          <motion.div
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: 2 }}
            transition={{ delay: 1.3 }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="bg-white text-toyBlue px-4 sm:px-5 py-1.5 transform rotate-2 border-2 border-toyBlue rounded-full shadow-md z-10 mb-1 sm:mb-2"
          >
            <motion.span
              className="font-heading font-bold tracking-wider text-base sm:text-lg md:text-xl uppercase"
              animate={{
                textShadow: [
                  "1px 1px 0px rgba(59, 130, 246, 0.2)",
                  "2px 2px 0px rgba(59, 130, 246, 0.3)",
                  "1px 1px 0px rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Venha Brincar
            </motion.span>
          </motion.div>

          {/* Date Blocks Container */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            {/* Number Blocks */}
            <div className="flex items-center gap-3 sm:gap-4 z-10">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-toyRed border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 border-t-2 border-l-2 border-red-800 rounded-lg shadow-xl flex items-center justify-center transform -rotate-6 transition-transform hover:rotate-0 hover:scale-110 duration-300"
                whileHover={{
                  rotate: 0,
                  scale: 1.1,
                  boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                <motion.span
                className="font-heading text-4xl sm:text-5xl md:text-7xl text-white font-bold drop-shadow-md"
                  animate={{
                    textShadow: [
                      "2px 2px 0px rgba(0,0,0,0.3)",
                      "3px 3px 0px rgba(0,0,0,0.4)",
                      "2px 2px 0px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  1
                </motion.span>
              </motion.div>

              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-toyGreen border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 border-t-2 border-l-2 border-green-800 rounded-lg shadow-xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0 hover:scale-110 duration-300"
                whileHover={{
                  rotate: 0,
                  scale: 1.1,
                  boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                <motion.span
                className="font-heading text-4xl sm:text-5xl md:text-7xl text-white font-bold drop-shadow-md"
                  animate={{
                    textShadow: [
                      "2px 2px 0px rgba(0,0,0,0.3)",
                      "3px 3px 0px rgba(0,0,0,0.4)",
                      "2px 2px 0px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  8
                </motion.span>
              </motion.div>
            </div>

            {/* Month Label */}
            <motion.div
              className="bg-toyBlue px-5 sm:px-8 md:px-10 py-1.5 sm:py-2.5 rounded-lg border-2 border-white shadow-lg -mt-3 sm:-mt-4 pt-4 sm:pt-6 z-0 transform rotate-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                className="font-heading text-xl sm:text-2xl md:text-4xl text-white font-bold tracking-widest uppercase drop-shadow-sm"
                animate={{
                  textShadow: [
                    "2px 2px 0px rgba(0,0,0,0.3)",
                    "3px 3px 0px rgba(0,0,0,0.4)",
                    "2px 2px 0px rgba(0,0,0,0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                JANEIRO
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Time and Location Container */}
          <motion.div
            className="mt-3 sm:mt-4 md:mt-6 flex flex-col items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {/* Time Badge */}
            <motion.div
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full border-2 border-toyBlue shadow-sm hover:scale-105 transition-transform"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 1)"
              }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-toyRed"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="font-heading text-toyBlue text-lg sm:text-xl md:text-2xl font-bold">
                SÁBADO • 18:00H
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              className="font-heading text-toyYellow font-bold text-base sm:text-lg md:text-2xl uppercase tracking-tight text-shadow-sm"
              animate={{
                x: [0, 3, 0],
                textShadow: [
                  "1px 1px 2px rgba(0,0,0,0.3)",
                  "2px 2px 4px rgba(0,0,0,0.4)",
                  "1px 1px 2px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Buffet Infantil Mini Golf Aventura
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Button */}
        <div className="pb-8 sm:pb-10 md:pb-12 flex-shrink-0">
          <ToyStoryButton onClick={onOpenInvitation}>
            Abrir Convite
          </ToyStoryButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;