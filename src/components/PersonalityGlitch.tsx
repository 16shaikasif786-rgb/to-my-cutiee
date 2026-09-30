import { motion } from 'framer-motion';

export default function PersonalityGlitch({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }} 
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-red-950/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 to-transparent -z-10" />
      
      <motion.h2 
        animate={{ x: [-3, 3, -4, 2, 0], opacity: [1, 0.8, 1, 0.9, 1], filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }} 
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2.5 }}
        className="text-4xl md:text-6xl font-black text-red-500 mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
      >
        WAIT.
      </motion.h2>
      
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: 1 } }} className="text-xl md:text-2xl text-gray-300 mb-6 font-serif">System found something unusual.</motion.p>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1, transition: { delay: 2.5 } }} 
        className="p-8 border border-red-500/40 bg-red-950/30 rounded-2xl mb-10 backdrop-blur-xl shadow-[0_0_40px_rgba(239,68,68,0.15)] max-w-sm w-full relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
        <p className="text-red-400/80 font-mono mb-3 text-xs md:text-sm tracking-widest">RESULT:</p>
        <p className="text-2xl md:text-3xl text-white font-bold tracking-wide">Too much charm detected.</p>
      </motion.div>
      
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4 } }} className="text-red-300/60 mb-16 uppercase tracking-[0.2em] text-xs md:text-sm max-w-xs leading-relaxed">
        Warning: Normal people should not be this cute.
      </motion.p>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 6 } }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(239,68,68,0.2)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-red-500/10 text-red-200 rounded-full border border-red-500/30 font-medium tracking-wide"
      >
        Okay stop 😂
      </motion.button>
    </motion.div>
  );
}