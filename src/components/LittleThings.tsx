import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';

export default function LittleThings({ onNext }: { onNext: () => void }) {
  const hasThings = cutieeContent.littleThings && cutieeContent.littleThings.length > 0;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="text-xl md:text-2xl text-gray-300/80 mb-16 font-serif max-w-md leading-relaxed">
        Tumhe shayad ye sab normal lagta hoga...
      </motion.h2>
      
      <div className="space-y-4 md:space-y-6 mb-20 w-full max-w-md px-4">
        {hasThings ? cutieeContent.littleThings.map((thing, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 1.5 + 1.5, type: 'spring' } }}
            whileHover={{ scale: 1.02, x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg text-left"
          >
            <p className="text-pink-100/90 font-serif text-lg md:text-xl leading-relaxed">{thing}</p>
          </motion.div>
        )) : (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }} className="p-8 text-center text-gray-500 font-serif italic">
             The little things make everything special.
           </motion.div>
        )}
      </div>
      
      <motion.div initial={{ opacity: 0, filter: 'blur(5px)' }} animate={{ opacity: 1, filter: 'blur(0px)', transition: { delay: (cutieeContent.littleThings?.length || 1) * 1.5 + 3, duration: 1.5 } }}>
        <p className="text-2xl md:text-3xl text-white font-serif mb-12 drop-shadow-md">Main notice karta hoon.</p>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }} 
          whileTap={{ scale: 0.95 }}
          onClick={onNext} 
          className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  );
}