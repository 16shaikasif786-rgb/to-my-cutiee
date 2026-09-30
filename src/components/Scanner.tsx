import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Scanner({ onNext }: { onNext: () => void }) {
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onNext, 4000);
          return 100;
        }
        if (p === 80) setGlitch(true);
        if (p === 86) setGlitch(false);
        return p + (Math.random() > 0.5 ? 2 : 1);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onNext]);

  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 1.1 }} className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 to-black">
      <h2 className="text-sm md:text-base text-purple-300/80 font-mono mb-12 tracking-[0.3em] uppercase text-center">
        Current mood detect kar rahe hain...
      </h2>
      
      <div className="relative mb-12">
        <motion.div 
          animate={glitch ? { x: [-2, 2, -2, 2, 0], y: [-1, 1, -1, 1, 0] } : {}}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-purple-500/20 bg-purple-950/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
            initial={{ y: '100%' }}
            animate={{ y: `${100 - progress}%` }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
          />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.8)]" style={{ top: `${100 - progress}%` }} />
          <span className="text-5xl text-white font-mono relative z-10 font-light">{progress}%</span>
        </motion.div>
      </div>

      <div className="space-y-3 text-center text-xs md:text-sm font-mono text-purple-200/50 w-full max-w-xs">
        <div className="flex justify-between"><span>Analyzing Smile</span><span>{progress > 20 ? '98% Cute' : '...'}</span></div>
        <div className="flex justify-between"><span>Scanning Drama</span><span>{progress > 40 ? 'Normal' : '...'}</span></div>
        <div className="flex justify-between"><span>Checking Vibe</span><span>{progress > 70 ? '100% Shehzadi' : '...'}</span></div>
      </div>

      <AnimatePresence>
        {progress >= 100 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-12 text-center w-full px-6">
            <p className="text-xl text-pink-400 font-bold mb-2 tracking-widest drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] uppercase">ERROR</p>
            <p className="text-white mb-2 font-serif text-sm md:text-base">System confused... too much cuteness detected 😂</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
