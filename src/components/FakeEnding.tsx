import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FakeEnding({ onNext }: { onNext: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [anomaly, setAnomaly] = useState(false);

  useEffect(() => {
    if (exiting) {
      const timer1 = setTimeout(() => setAnomaly(true), 2500); // Wait for quiet, then glitch
      return () => clearTimeout(timer1);
    }
  }, [exiting]);

  if (exiting) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.5 } }} className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Subtle anomaly effect */}
        {anomaly && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0, 1, 0.5], scale: [1, 1.05, 1, 1.02, 1] }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/40 to-transparent pointer-events-none mix-blend-screen" 
          />
        )}
        
        {anomaly && (
          <>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }} className="text-gray-700 text-sm mb-12 font-mono">...wait.</motion.p>
            <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 2.5, duration: 1.5 } }} className="text-xl md:text-2xl text-white mb-12 font-serif">Tum seriously jaa rahi thi? 😭</motion.p>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1, transition: { delay: 4.5, duration: 1 } }} 
              whileHover={{ scale: 1.05, textShadow: '0 0 15px rgba(236,72,153,0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="text-lg md:text-xl text-pink-400 font-bold tracking-[0.3em] outline-none border border-pink-500/30 px-8 py-3 rounded-full hover:bg-pink-900/20 transition-colors"
            >
              ONE LAST THING
            </motion.button>
          </>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: 1 } }} className="text-gray-400 mb-4 text-lg">Okay.</motion.p>
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: 2 } }} className="text-gray-300 mb-4 text-lg">Bas.</motion.p>
      <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, transition: { delay: 3.5 } }} className="text-white text-2xl md:text-3xl mb-16 font-serif">Ab jao. 😂</motion.p>
      
      <motion.button 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 5 } }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExiting(true)} 
        className="px-12 py-4 bg-white/5 text-white/80 rounded-full border border-white/10 transition-all font-mono text-sm tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      >
        EXIT
      </motion.button>
    </motion.div>
  );
}