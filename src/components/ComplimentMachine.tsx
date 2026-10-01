import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ComplimentMachine({ onNext }: { onNext: () => void }) {
  const [presses, setPresses] = useState(0);
  
  const compliments = [
    "",
    "Aapki smile dangerous level ki hai 🤍🌸",
    "Aapki eyes ka alag hi scene hai 👀✨",
    "Aapka ek message mood change kar deta hai 💎",
    "Aapke saath baat karna genuinely special lagta hai ✨🤍",
    "Shehzadi energy detected 🎀",
    "System officially impressed ✨"
  ];

  const handlePress = () => {
    if (presses < compliments.length) {
      setPresses(p => p + 1);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#050204] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f8c8d8]/5 via-[#3d0c1c]/10 to-transparent pointer-events-none" />

      <h2 className="text-xl md:text-2xl text-[#f8c8d8] font-serif mb-12 drop-shadow-[0_0_15px_rgba(248,200,216,0.3)]">Jaanuuu Compliment Machine 🎀</h2>
      
      <div className="w-full max-w-sm aspect-[4/3] glass-panel rounded-3xl mb-12 flex items-center justify-center p-6 relative overflow-visible shadow-[0_0_40px_rgba(61,12,28,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8c8d8]/10 pointer-events-none rounded-3xl" />
        <div className="absolute inset-0 sparkle-edge rounded-3xl pointer-events-none" />
        <div className="absolute -top-4 -left-4 text-3xl animate-pulse">✨</div>
        <div className="absolute -bottom-3 -right-3 text-2xl">🤍</div>
        
        <AnimatePresence mode="wait">
          {presses > 0 && presses < compliments.length ? (
            <motion.p 
              key={presses}
              initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, scale: 0.9, filter: 'blur(5px)' }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="text-lg md:text-xl text-[#f9ead0] font-serif leading-relaxed drop-shadow-md z-10"
            >
              {compliments[presses]}
            </motion.p>
          ) : presses >= compliments.length ? (
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-lg md:text-xl text-[#f8c8d8] font-serif drop-shadow-md z-10"
            >
              Bas karo Jaanuuu... machine bhi shy ho gayi 🥺🤍
            </motion.p>
          ) : (
            <motion.p className="text-white/30 text-xs tracking-[0.3em] font-mono uppercase z-10">
              Waiting for input...
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {presses < compliments.length ? (
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.9, rotate: -2 }}
          onClick={handlePress}
          className="glass-button px-10 py-5 bg-[#f8c8d8]/15 text-[#f9ead0] rounded-full font-bold shadow-[0_0_30px_rgba(248,200,216,0.25)] tracking-[0.2em] uppercase text-sm border-[#f8c8d8]/40 relative overflow-hidden group"
        >
          <span className="relative z-10">PRESS KARO ✨</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f9ead0]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </motion.button>
      ) : (
        <motion.button 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-10 py-4 glass-button text-[#f8c8d8] rounded-full transition-colors uppercase tracking-[0.3em] text-xs font-bold"
        >
          Aage Badhein
        </motion.button>
      )}
    </motion.div>
  );
}
