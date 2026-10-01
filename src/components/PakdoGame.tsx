import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function PakdoGame({ onNext }: { onNext: () => void }) {
  const [clicks, setClicks] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const move = () => {
    if (containerRef.current) {
      const maxX = containerRef.current.clientWidth * 0.3;
      const maxY = containerRef.current.clientHeight * 0.3;
      setPos({
        x: (Math.random() - 0.5) * maxX * 2,
        y: (Math.random() - 0.5) * maxY * 2
      });
    }
  };

  const handleInteraction = () => {
    if (clicks < 4) {
      setClicks(c => c + 1);
      move();
    } else {
      setClicks(5);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#050306]" ref={containerRef}>
      <h2 className="text-xl md:text-2xl text-[#f7e7ce] font-serif mb-2 z-10 drop-shadow-md">Jaanuuu, ek kaam karo 👀</h2>
      <p className="text-[#f4d9e1]/80 mb-16 font-serif">Is button ko pakdo.</p>
      
      {clicks < 5 ? (
        <motion.div className="w-full flex-1 flex items-center justify-center relative max-w-sm max-h-[60vh] glass-panel rounded-3xl">
          <motion.button
            animate={pos}
            onHoverStart={move}
            onClick={handleInteraction}
            whileTap={{ scale: 0.9 }}
            className="absolute px-6 py-3 glass-button text-[#f4d9e1] rounded-full font-bold shadow-[0_0_20px_rgba(244,217,225,0.2)] text-sm uppercase tracking-wider"
          >
            PAKDO MUJHE 🎀
          </motion.button>
        </motion.div>
      ) : (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center z-10">
          <p className="text-lg md:text-xl text-[#f4d9e1] font-serif mb-4">Arey itna serious kyun ho gaye 😂</p>
          <p className="text-[#f7e7ce] font-serif text-xl md:text-2xl mb-12 drop-shadow-md">Bas bas Jaanuuu... maan liya, aap jeet gaye 🤍✨</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="glass-button px-10 py-4 text-[#f4d9e1] rounded-full uppercase tracking-widest text-xs">
            Aage Badho
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
