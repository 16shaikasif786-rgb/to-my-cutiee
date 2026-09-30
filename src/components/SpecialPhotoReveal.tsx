import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingEmojis from './FloatingEmojis';

export default function SpecialPhotoReveal({ onNext, photoUrl }: { onNext: () => void, photoUrl?: string }) {
  const [opened, setOpened] = useState(false);
  const [phase, setPhase] = useState(0);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setPhase(1), 3000);
    setTimeout(() => setPhase(2), 6000);
    setTimeout(() => setPhase(3), 9000);
    setTimeout(() => setPhase(4), 12000); 
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black">
      <motion.div 
        animate={{ opacity: opened ? 1 : 0 }} 
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-orange-900/10 to-transparent pointer-events-none" 
      />

      {!opened ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 flex flex-col items-center">
          <p className="text-lg md:text-xl text-gray-300 font-serif mb-8">Ek photo... jo thodi zyada hi khoobsurat hai 👀</p>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-pink-500/30 text-pink-200 rounded-full font-medium shadow-[0_0_20px_rgba(236,72,153,0.15)]"
          >
            Open karun? 💋
          </motion.button>
        </motion.div>
      ) : (
        <motion.div className="z-10 flex flex-col items-center w-full max-w-md">
          <FloatingEmojis emojis={['💋', '🌸', '🥰', '🫶🏻', '💕', '✨', '👀']} count={8} />
          
          <motion.div 
            initial={{ scale: 0.92, filter: 'blur(20px)', opacity: 0 }} 
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }} 
            transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
            className="w-full aspect-[3/4] max-h-[60vh] bg-white/5 border border-white/20 rounded-3xl overflow-hidden relative shadow-[0_0_40px_rgba(236,72,153,0.3)] mb-8"
          >
            {photoUrl ? (
              <img src={photoUrl} alt="Special" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-5xl">✨📸✨</div>
            )}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-pink-200 tracking-[0.2em] uppercase font-bold shadow-lg">
                SECRET FAVORITE
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="h-24 flex items-center justify-center">
            {phase === 0 && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl text-pink-100 font-serif leading-relaxed">
                Areyyy Jaanuuu... ye wali toh dangerous level ki cute hai 😭❤️
              </motion.p>
            )}
            {phase === 1 && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl text-pink-100 font-serif leading-relaxed">
                Meku laga isko special jagah milni chahiye thi 💋🌸
              </motion.p>
            )}
            {phase === 2 && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl text-pink-100 font-serif leading-relaxed">
                Acha sunooo... 👀<br/>Itni cute rehne ka permission kisne diya reyy? 😂❤️
              </motion.p>
            )}
            {phase === 3 && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl text-pink-100 font-serif leading-relaxed">
                Meku toh pehle hi pata tha... aap problem ho Jaanuuu 😭💋
              </motion.p>
            )}
            {phase === 4 && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-xl text-white/90 font-serif leading-relaxed italic">
                Allah tumhari muskurahat hamesha mehfooz rakhe. 🤍
              </motion.p>
            )}
          </div>
          
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: phase >= 4 ? 1 : 0 }} 
            disabled={phase < 4}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-8 text-xs text-gray-400 hover:text-white uppercase tracking-[0.2em] border border-gray-800 rounded-full px-6 py-2 transition-colors"
          >
            Continue
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
