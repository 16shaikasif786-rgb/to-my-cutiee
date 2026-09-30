import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';

export default function MemoryUniverse({ onNext }: { onNext: () => void }) {
  const hasMemories = cutieeContent.memories && cutieeContent.memories.length > 0;
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }} className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black -z-10" />
      
      <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }} className="text-lg md:text-xl font-serif text-gray-300 mb-12 text-center max-w-lg leading-relaxed drop-shadow-md">
        Jaanuuu, aapke saath na bohot saare special moments hain jo meku kabhi nai bhoolte...
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl px-4">
        {hasMemories ? cutieeContent.memories.map((mem, i) => (
          <motion.div 
            key={mem.id} 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.4 + 1.5 } }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-8 shadow-xl flex flex-col items-center text-center justify-center min-h-[160px]"
            style={{ perspective: 1000 }}
          >
            <p className="text-indigo-200/90 font-serif text-lg leading-relaxed">{mem.text}</p>
          </motion.div>
        )) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }} className="col-span-full py-12 text-center text-gray-500 font-serif italic border border-dashed border-white/10 rounded-2xl">
            A beautiful empty universe, waiting for memories.
          </motion.div>
        )}
      </div>
      
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (cutieeContent.memories.length * 0.4) + 2.5 } }} onClick={onNext} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
        Next <span className="text-lg">→</span>
      </motion.button>
    </motion.div>
  );
}