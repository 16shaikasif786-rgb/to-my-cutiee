import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cutieeContent } from '../content/cutiee';

export default function FinalMoment({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState(0); // 0 = short texts, 1 = emotional message, 2 = button
  const [step, setStep] = useState(0);
  const [msgStep, setMsgStep] = useState(0);

  const texts = [
    "Aapka ek msg bhi...",
    "...pura mood change kardeta.",
    "Aapke saath jo comfort feel hota...",
    "...woh mere liye sabse special hai ❤️"
  ];

  // Split the final message into distinct paragraphs
  const messageBlocks = cutieeContent.finalMessage.split('\n\n').filter(Boolean);

  useEffect(() => {
    if (phase === 0) {
      if (step < texts.length) {
        const timer = setTimeout(() => setStep(s => s + 1), 3500);
        return () => clearTimeout(timer);
      } else {
        const transitionTimer = setTimeout(() => setPhase(1), 2000);
        return () => clearTimeout(transitionTimer);
      }
    } else if (phase === 1) {
      if (msgStep < messageBlocks.length) {
        // Give longer reading time for the deep paragraphs
        const readingTime = Math.max(5000, messageBlocks[msgStep].length * 70); 
        const timer = setTimeout(() => setMsgStep(s => s + 1), readingTime);
        return () => clearTimeout(timer);
      } else {
        const transitionTimer = setTimeout(() => setPhase(2), 2000);
        return () => clearTimeout(transitionTimer);
      }
    }
  }, [phase, step, msgStep, texts.length, messageBlocks.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 2 } }} 
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative bg-[#050204]"
    >
      {/* Subtle deep pink/lavender cinematic glow */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.3 }} 
        transition={{ duration: 4 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3d0c1c]/40 via-[#1a0b18]/10 to-transparent pointer-events-none" 
      />

      <div className="max-w-2xl w-full z-10 flex flex-col items-center justify-center relative min-h-[40vh]">
        <AnimatePresence mode="wait">
          
          {/* PHASE 0: Original short sequence */}
          {phase === 0 && step < texts.length && (
            <motion.p 
              key={`text-${step}`}
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }} 
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
              exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`text-2xl md:text-3xl font-serif leading-relaxed px-4 ${step % 2 !== 0 ? 'text-[#f8c8d8] drop-shadow-[0_0_15px_rgba(248,200,216,0.3)]' : 'text-[#f9ead0]/90'}`}
            >
              {texts[step]}
            </motion.p>
          )}

          {/* PHASE 1: The real Final Message */}
          {phase === 1 && msgStep < messageBlocks.length && (
            <motion.div
              key={`msg-${msgStep}`}
              initial={{ opacity: 0, y: 20, filter: 'blur(15px)' }} 
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
              exit={{ opacity: 0, y: -20, filter: 'blur(15px)' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              {messageBlocks[msgStep].split('\n').map((line, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.8, duration: 1.5 }}
                  className="text-[17px] md:text-xl text-[#f9ead0] font-serif leading-[1.8] mb-4 drop-shadow-md italic tracking-wide text-center"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}

          {/* PHASE 2: Outro Action */}
          {phase === 2 && (
            <motion.div
              key="outro"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} 
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
              transition={{ duration: 2 }}
              className="flex flex-col items-center"
            >
              <p className="text-[#f8c8d8]/60 text-sm font-serif italic mb-12 uppercase tracking-[0.3em]">
                One last thing...
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="glass-button px-10 py-4 rounded-full text-[#f8c8d8] font-medium tracking-[0.2em] uppercase text-xs shadow-[0_0_20px_rgba(248,200,216,0.15)] flex items-center gap-2"
              >
                Continue ✦
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}
