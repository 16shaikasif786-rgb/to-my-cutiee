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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black relative">
      {phase >= 3 && <FloatingEmojis emojis={['💋', '❤️', '🥰']} count={5} />}
      
      {phase === 0 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">System Scan</p>
            <h2 className="text-xl md:text-2xl font-serif text-white">Ek chhota sa test hai Jaanuuu 👀</h2>
            <p className="text-pink-300/80 font-serif text-sm">System check karega... aap kitni cute ho.</p>
          </div>
          
          <div className="w-full space-y-4 flex flex-col">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('normal')} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              Normal 😌
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('cute')} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              Cute 🥰
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => handleSelection('danger')} className="px-6 py-4 bg-pink-900/20 border border-pink-500/30 rounded-2xl hover:bg-pink-900/40 text-pink-200 transition-colors shadow-[0_0_15px_rgba(236,72,153,0.1)]">
              Dangerously Cute 💋
            </motion.button>
          </div>
        </motion.div>
      )}

      {phase === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin mb-6" />
          <p className="text-gray-400 font-mono tracking-widest animate-pulse">System calculating...</p>
        </motion.div>
      )}

      {phase === 2 && (
        <motion.div 
          animate={{ x: [-2, 2, -2, 2, 0], filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }} 
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center p-8 bg-red-950/20 border border-red-500/30 rounded-3xl backdrop-blur-md"
        >
          <p className="text-3xl text-red-500 font-bold tracking-widest mb-2 font-mono">ERROR 404</p>
          <p className="text-red-300 font-serif text-lg">Normal Jaanuuu not found 😂</p>
        </motion.div>
      )}

      {phase === 3 && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }} className="flex flex-col items-center p-10 bg-white/5 border border-pink-500/30 rounded-3xl backdrop-blur-xl shadow-[0_0_40px_rgba(236,72,153,0.2)]">
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-4">Result:</p>
          <p className="text-2xl md:text-3xl text-pink-200 font-serif font-bold mb-10">Dangerously Cute 💋❤️</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="px-8 py-3 bg-pink-500/20 text-pink-200 border border-pink-500/50 rounded-full font-medium">
            Continue
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
