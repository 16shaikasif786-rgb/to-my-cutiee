import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FinalMoment({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (step < 4) {
      const timer = setTimeout(() => setStep(s => s + 1), 4000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onNext, 4500);
    }
  }, [step, onNext]);
  
  const texts = [
    "Aapka ek msg bhi...",
    "...pura mood change kardeta.",
    "Aapke saath jo comfort feel hota...",
    "...woh mere liye sabse special hai 🫶🏻✨"
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 2 } }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black">
      <div className="max-w-xl">
        <AnimatePresence mode="wait">
          {step < texts.length && (
            <motion.p 
              key={step}
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }} 
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              transition={{ duration: 1.5 }}
              className={`text-2xl md:text-4xl text-white font-serif leading-relaxed px-4 ${step % 2 !== 0 ? 'text-pink-200 drop-shadow-lg' : ''}`}
            >
              {texts[step]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}