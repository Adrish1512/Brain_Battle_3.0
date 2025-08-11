import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BBLogo from '../../BB_Loading.png';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [isLifting, setIsLifting] = useState(false);

  const words = ['CODING', 'INNOVATION', 'EXPERIENCE'];

  useEffect(() => {
    let wordTimer: ReturnType<typeof setTimeout>;

    const showNextWord = () => {
      if (currentWord < words.length - 1) {
        setShowWord(false);
        setTimeout(() => {
          setCurrentWord((prev) => prev + 1);
          setShowWord(true);
        }, 300);
      } else {
        setTimeout(() => {
          setIsLifting(true);
          setTimeout(() => {
            onComplete();
          }, 1500);
        }, 1000);
      }
    };

    setShowWord(true);

    wordTimer = setTimeout(() => {
      showNextWord();
    }, 1500);

    return () => {
      clearTimeout(wordTimer);
    };
  }, [currentWord, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLifting ? '-100vh' : 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="text-center relative z-10 flex flex-col items-center gap-4 transform scale-90 md:scale-95 lg:scale-100">
        {/* Logo */}
        <motion.img
          src={BBLogo}
          alt="Brain Battle 3.0 Logo"
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-44 sm:w-52 md:w-60 lg:w-64 h-auto select-none"
          draggable={false}
        />

        {/* Means label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-cyber-cyan text-xs sm:text-sm md:text-base tracking-widest font-orbitron"
        >
          MEANS
        </motion.div>

        {/* Current word */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentWord}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: showWord ? 1 : 0, y: showWord ? 0 : 20, scale: showWord ? 1 : 0.95 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-black neon-glow tracking-wider"
            style={{ color: 'white' }}
          >
            {words[currentWord]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/10" />
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-white/10" />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-white/20" />
      <div className="absolute top-6 right-6 w-20 h-20 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-l-2 border-b-2 border-white/20" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-white/20" />
    </motion.div>
  );
};

export default LoadingScreen;
