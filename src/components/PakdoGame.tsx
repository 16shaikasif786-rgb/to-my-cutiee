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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#050505]" ref={containerRef}>
      <h2 className="text-xl md:text-2xl text-gray-300 font-serif mb-2 z-10">Jaanuuu, ek kaam karo 👀</h2>
      <p className="text-pink-300/80 mb-16 font-serif">Is button ko pakdo.</p>
      
      {clicks < 5 ? (
        <motion.div className="w-full flex-1 flex items-center justify-center relative max-w-sm max-h-[60vh] border border-white/5 rounded-3xl bg-white/[0.02]">
          <motion.button
            animate={pos}
            onHoverStart={move}
            onClick={handleInteraction}
            whileTap={{ scale: 0.9 }}
            className="absolute px-6 py-3 bg-pink-500/20 backdrop-blur-md border border-pink-500/40 text-pink-200 rounded-full font-bold shadow-lg"
          >
            PAKDO MUJHE 😂
          </motion.button>
        </motion.div>
      ) : (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center z-10">
          <p className="text-lg md:text-xl text-white font-serif mb-4">Areyyy itna serious kyun ho gaye 😂</p>
          <p className="text-pink-300 font-serif text-xl md:text-2xl mb-12">Bas bas Jaanuuu... maan liya, aap jeet gaye 😭❤️</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Aage Badho
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
