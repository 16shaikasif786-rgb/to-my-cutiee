import { motion } from 'framer-motion';

export default function SecretEntry({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease: 'easeOut' } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8 } }}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1.2 } }} className="text-3xl md:text-5xl text-white font-serif mb-6 drop-shadow-lg">
        Welcome to somewhere...
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.5, duration: 1 } }} className="text-xl md:text-2xl text-pink-300/80 mb-12 font-light">
        ...you weren't supposed to find.
      </motion.p>
      
      <div className="space-y-3 mb-16 h-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4.5 } }} className="text-gray-500 text-sm md:text-base">Relax.</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 6 } }} className="text-gray-400 text-sm md:text-base">Main koi weird hacker nahi hoon. 😂</motion.p>
      </div>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 8, duration: 1 } }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-12 py-4 bg-white/5 border border-white/20 text-white rounded-full backdrop-blur-md transition-all font-medium tracking-[0.1em]"
      >
        Continue
      </motion.button>
    </motion.div>
  );
}