import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import FloatingEmojis from './FloatingEmojis';

export default function RomanticMoment({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);
  
  const texts = [
    "Jitna meku aapse baat karna pasand hai na...",
    "...utna maine shayad kisi se bhi nai kiya.",
    "Aapse baat karte waqt...",
    "...ek alag hi happiness feel hoti jii 🥺❤️"
  ];

  useEffect(() => {
    if (step < texts.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 3800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onNext, 3500);
    }
  }, [step, onNext, texts.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 1.5 } }} className="min-h-screen flex items-center justify-center p-6 text-center relative bg-[#050306]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a1525]/20 via-transparent to-transparent -z-10" />
      
      {step >= 3 && <FloatingEmojis emojis={['💋', '❤️', '🌸', '✨']} count={6} />}

      <div className="max-w-xl px-4 h-40 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step < texts.length && (
            <motion.p 
              key={step}
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`text-2xl md:text-4xl font-serif leading-relaxed ${step % 2 !== 0 ? 'text-[#f4d9e1] drop-shadow-[0_0_20px_rgba(244,217,225,0.4)]' : 'text-white/90'}`}
            >
              {texts[step]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}