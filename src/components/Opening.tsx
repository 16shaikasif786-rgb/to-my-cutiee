import { motion } from 'framer-motion';
import FloatingEmojis from './FloatingEmojis';

export default function Opening({ onNext }: { onNext: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }} transition={{ duration: 1.5 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative bg-[#050204]">
      
      {/* Soft portal glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3d0c1c]/40 via-transparent to-transparent pointer-events-none" 
      />

      <FloatingEmojis emojis={['✨', '🌸', '🤍', '⭐']} count={6} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        className="glass-panel p-10 md:p-14 rounded-3xl max-w-sm w-full flex flex-col items-center relative overflow-visible shadow-[0_0_50px_rgba(248,200,216,0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8c8d8]/10 to-transparent pointer-events-none rounded-3xl" />
        <div className="absolute inset-0 sparkle-edge rounded-3xl pointer-events-none" />
        <div className="absolute -top-3 -right-2 text-2xl">🌸</div>

        <h1 className="text-sm md:text-base text-[#f9ead0] font-serif mb-6 drop-shadow-md leading-relaxed">
          Choryy cutiee... intezaar karwane ke liye maaf karna 🥺
        </h1>
        <p className="text-xs md:text-sm text-[#f8c8d8]/80 mb-12 font-serif italic leading-relaxed px-4">
          Thoda waqt lag gaya, lekin jo tumhare liye rakha hai... woh dil se rakha hai.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          onClick={onNext} 
          className="glass-button px-10 py-4 rounded-full text-[#f9ead0] font-mono text-sm tracking-[0.2em] uppercase relative group border-[#f9ead0]/20"
        >
          <span className="relative z-10 flex items-center gap-2">Enter <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#f8c8d8]">🎀</span></span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8c8d8]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
