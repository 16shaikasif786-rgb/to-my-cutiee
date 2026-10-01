import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingEmojis from './FloatingEmojis';

export default function JaanuuuVsSystem({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState(0);

  const handleSelection = (type: string) => {
    setPhase(1);
    setTimeout(() => setPhase(2), 2000);
    setTimeout(() => setPhase(3), 4500);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#050306] relative">
      {phase >= 3 && <FloatingEmojis emojis={['💋', '❤️', '🥰', '🎀', '✨']} count={5} />}
      
      {phase === 0 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <p className="text-white/40 font-mono text-sm uppercase tracking-[0.3em]">System Scan</p>
            <h2 className="text-xl md:text-2xl font-serif text-[#f4d9e1] drop-shadow-md">Ek chhota sa test hai Jaanuuu 👀</h2>
            <p className="text-[#f7e7ce]/80 font-serif text-sm">System check karega... aap kitni cute ho.</p>
          </div>
          
          <div className="w-full space-y-4 flex flex-col">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('normal')} className="px-6 py-4 glass-button rounded-2xl text-white/80 font-serif italic">
              Normal 😌
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('cute')} className="px-6 py-4 glass-button rounded-2xl text-[#f4d9e1] font-serif italic">
              Cute 🥰
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('danger')} className="px-6 py-4 bg-[#4a1525]/30 border border-[#f4d9e1]/20 rounded-2xl hover:bg-[#4a1525]/50 text-[#f7e7ce] transition-colors shadow-[0_0_20px_rgba(244,217,225,0.15)] font-serif italic font-bold">
              Dangerously Cute 💋
            </motion.button>
          </div>
        </motion.div>
      )}

      {phase === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#f4d9e1]/20 border-t-[#f4d9e1] rounded-full animate-spin mb-6" />
          <p className="text-[#f7e7ce]/50 font-mono tracking-widest animate-pulse uppercase text-sm">System calculating...</p>
        </motion.div>
      )}

      {phase === 2 && (
        <motion.div 
          animate={{ x: [-2, 2, -2, 2, 0], filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }} 
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center p-8 bg-[#4a1525]/30 border border-[#f4d9e1]/20 rounded-3xl backdrop-blur-md"
        >
          <p className="text-3xl text-[#f4d9e1] font-bold tracking-[0.2em] mb-2 font-mono drop-shadow-[0_0_10px_rgba(244,217,225,0.5)]">ERROR 404</p>
          <p className="text-[#f7e7ce] font-serif text-lg">Normal Jaanuuu not found 😂</p>
        </motion.div>
      )}

      {phase === 3 && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }} className="flex flex-col items-center p-10 glass-panel rounded-3xl shadow-[0_0_40px_rgba(74,21,37,0.4)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4d9e1]/10 to-transparent pointer-events-none" />
          <p className="text-[#f7e7ce]/60 font-mono text-sm tracking-[0.3em] uppercase mb-4 z-10">Result:</p>
          <p className="text-2xl md:text-3xl text-[#f4d9e1] font-serif font-bold mb-10 z-10 drop-shadow-md">Dangerously Cute 💋❤️</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="px-8 py-3 glass-button text-[#f7e7ce] rounded-full font-medium uppercase tracking-widest text-xs z-10">
            Continue
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
