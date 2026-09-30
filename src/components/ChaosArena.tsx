import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import FloatingEmojis from './FloatingEmojis';

export default function ChaosArena({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState(0); // 0: Runway Button, 1: Catch Hearts, 2: Done
  const [buttonClicks, setButtonClicks] = useState(0);
  const [heartsCaught, setHeartsCaught] = useState(0);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [heartPos, setHeartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const moveButton = () => {
    if (containerRef.current) {
      const maxX = containerRef.current.clientWidth - 150;
      const maxY = containerRef.current.clientHeight - 100;
      setButtonPos({
        x: (Math.random() - 0.5) * maxX * 0.7,
        y: (Math.random() - 0.5) * maxY * 0.7
      });
    }
  };

  const moveHeart = () => {
    if (containerRef.current) {
      const maxX = containerRef.current.clientWidth - 80;
      const maxY = containerRef.current.clientHeight - 80;
      setHeartPos({
        x: (Math.random() - 0.5) * maxX * 0.8,
        y: (Math.random() - 0.5) * maxY * 0.8
      });
    }
  };

  const handleButtonInteract = () => {
    if (buttonClicks < 3) {
      setButtonClicks(c => c + 1);
      moveButton();
    } else {
      setPhase(1);
      moveHeart();
    }
  };

  const handleHeartCatch = () => {
    setHeartsCaught(c => c + 1);
    if (heartsCaught < 4) {
      moveHeart();
    } else {
      setPhase(2);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden relative" ref={containerRef}>
      {phase === 2 && <FloatingEmojis emojis={['😂', '🤭', '👀', '✨']} count={8} />}
      
      <h2 className="text-xl md:text-2xl text-white/70 font-serif mb-12 z-10 text-center pointer-events-none">
        {phase === 0 ? "Thoda khel lein? 👀" : phase === 1 ? "Catch the hearts! 💕" : "Areyyy wahhh 😂❤️"}
      </h2>
      
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div key="phase0" className="absolute inset-0 flex items-center justify-center">
             <motion.button 
                animate={buttonPos}
                onHoverStart={moveButton}
                onClick={handleButtonInteract}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-pink-500/10 backdrop-blur-md border border-pink-500/30 text-pink-200 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.15)] font-medium"
              >
                {buttonClicks === 0 ? "Bas ek baar tap karo 👀" : buttonClicks === 1 ? "Nice try 😂" : buttonClicks === 2 ? "Arey pakdo na!" : "Areyyy Jaanuuu 😂 itna aasaan thodi na hai!"}
              </motion.button>
          </motion.div>
        )}
        
        {phase === 1 && (
          <motion.div key="phase1" className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={handleHeartCatch}
              whileTap={{ scale: 0.7 }}
              initial={{ scale: 0 }}
              animate={{ ...heartPos, scale: 1 }}
              className="text-4xl md:text-5xl drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] p-4 outline-none"
            >
              {['❤️', '🌸', '💕', '🥰', '🫶🏻'][heartsCaught % 5]}
            </motion.button>
            <div className="absolute bottom-10 text-gray-500 text-sm font-mono">Score: {heartsCaught}/5</div>
          </motion.div>
        )}

        {phase === 2 && (
          <motion.div key="phase2" className="text-center z-10 flex flex-col items-center" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <p className="text-pink-300 mb-8 font-serif text-xl md:text-2xl">Maan gaye aapki speed ko! ✨</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="px-10 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Continue
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
