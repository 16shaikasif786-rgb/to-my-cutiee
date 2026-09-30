import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cutieeContent } from '../content/cutiee';
import FloatingEmojis from './FloatingEmojis';

export default function RealSurprise({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);
  const displayName = cutieeContent.name || cutieeContent.nickname || "Shehzadi";

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000); // dark -> light / Atuba
    const t2 = setTimeout(() => setStep(2), 6000); // pause -> Jaanuuu
    const t3 = setTimeout(() => setStep(3), 9000); // emotional content
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1, transition: { duration: 1.5 } }} 
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black"
    >
      {/* Cinematic Glow Sequence */}
      {step >= 1 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/30 via-purple-900/10 to-transparent pointer-events-none" 
        />
      )}
      
      {step >= 1 && (
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }} 
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 2.5, ease: "easeOut" } }} 
          className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-100 to-purple-300 mb-16 drop-shadow-2xl tracking-wide z-10"
        >
          {displayName}
        </motion.h1>
      )}
      
      <div className="space-y-8 max-w-lg px-4 text-base md:text-lg text-gray-300 leading-relaxed font-serif z-10">
        {step >= 2 && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }} className="text-xl md:text-2xl text-pink-200/90 italic mb-8">
            Jaanuuu...
          </motion.p>
        )}
        
        {step >= 3 && (
          <>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }}>
              Kuch log zindagi mein aate nahi...
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.5, duration: 1.5 } }}>
              Allah unhe bhejta hai.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 5, duration: 1.5 } }} className="text-pink-300 text-lg md:text-xl pt-4">
              And you are the most beautiful blessing. ✨
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, transition: { delay: 8, duration: 1 } }} 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext} 
              className="mt-16 px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
            >
              Continue
            </motion.button>
            <FloatingEmojis emojis={['✨', '🌸']} count={6} />
          </>
        )}
      </div>
    </motion.div>
  );
}