import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ComplimentMachine({ onNext }: { onNext: () => void }) {
  const [presses, setPresses] = useState(0);
  
  const compliments = [
    "",
    "Aapki smile dangerous level ki hai 🥹❤️",
    "Aapki eyes ka alag hi scene hai 👀🌸",
    "Aapka ek message mood change kar deta hai 🫶🏻",
    "Aapke saath baat karna genuinely special lagta hai ❤️",
    "Shehzadi energy detected 👑",
    "System officially impressed 😂"
  ];

  const handlePress = () => {
    if (presses < compliments.length - 1) {
      setPresses(p => p + 1);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black">
      <h2 className="text-xl md:text-2xl text-pink-300 font-serif mb-12">Jaanuuu Compliment Machine 💋</h2>
      
      <div className="w-full max-w-sm aspect-[4/3] bg-white/5 border border-pink-500/20 rounded-3xl mb-12 flex items-center justify-center p-6 relative overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {presses > 0 && presses < compliments.length ? (
            <motion.p 
              key={presses}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="text-lg md:text-xl text-white font-serif leading-relaxed"
            >
              {compliments[presses]}
            </motion.p>
          ) : presses >= compliments.length ? (
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-lg md:text-xl text-pink-300 font-serif"
            >
              Bas karo Jaanuuu... machine bhi shy ho gayi 😂❤️
            </motion.p>
          ) : (
            <motion.p className="text-gray-500 text-sm tracking-widest font-mono uppercase">
              Waiting for input...
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {presses < compliments.length ? (
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.9 }}
          onClick={handlePress}
          className="px-10 py-4 bg-pink-600 border border-pink-400 text-white rounded-full font-bold shadow-[0_0_20px_rgba(236,72,153,0.4)] tracking-wide"
        >
          PRESS KARO
        </motion.button>
      ) : (
        <motion.button 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full transition-colors"
        >
          Aage Badhein
        </motion.button>
      )}
    </motion.div>
  );
}
