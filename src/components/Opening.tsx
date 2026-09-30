import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Opening({ onNext }: { onNext: () => void }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    setTimeout(onNext, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.2, transition: { duration: 1.2 } }}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-black to-black -z-10" />
      
      {!pressed ? (
        <>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1.5 } }} className="text-gray-400 mb-2 font-light tracking-wide text-sm italic">Bismillah...</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.5, duration: 1.5 } }} className="text-xl text-white/90 mb-2 font-serif">ek chhoti si kahani shuru hoti hai.</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 4.5, duration: 1.5 } }} className="text-2xl text-pink-300 font-serif mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)] mt-8">idhar dekho.</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 7, duration: 2 } }} className="text-lg text-gray-400 mb-16 italic">Actually... don't.</motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 8.5, duration: 1 } }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236,72,153,0.4)', borderColor: 'rgba(236,72,153,0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePress}
              className="px-10 py-5 bg-black/60 backdrop-blur-xl border border-pink-500/30 text-pink-200 rounded-full font-medium tracking-[0.2em] shadow-[0_0_15px_rgba(236,72,153,0.1)] transition-colors"
            >
              DON'T TOUCH
            </motion.button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.p className="text-2xl text-pink-400 font-serif mb-4">HAHA. Pata tha. 😂</motion.p>
          <motion.p className="text-gray-300 mb-2">Har khoobsurat cheez ka ek sabab hota hai.</motion.p>
          <motion.p className="text-gray-400">Tumse control nahi hota na?</motion.p>
          <motion.p className="text-white font-bold mt-8 text-xl tracking-widest uppercase">Chalo andar.</motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}