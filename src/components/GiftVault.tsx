import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';
import { Lock } from 'lucide-react';

export default function GiftVault({ onNext }: { onNext: () => void }) {
  const hasGifts = cutieeContent.gifts && cutieeContent.gifts.length > 0;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/10 to-black">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-serif text-white mb-4 text-center">
        The Vault
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="text-yellow-500/50 text-sm tracking-widest uppercase mb-16">
        Stored for safekeeping
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20 w-full max-w-2xl px-4">
        {hasGifts && cutieeContent.gifts.map((gift, i) => (
          <motion.div 
            key={gift.id} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.15 + 1 } }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(234,179,8,0.15)' }}
            className="aspect-square bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-500/20 rounded-3xl flex flex-col items-center justify-center p-4 text-center cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors" />
            <span className="text-2xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity">✦</span>
            <span className="text-xs md:text-sm text-yellow-100/70 font-medium z-10">{gift.title}</span>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (cutieeContent.gifts?.length || 0) * 0.15 + 1.5 } }}
          className="aspect-square bg-black/50 border border-gray-800 rounded-3xl flex flex-col items-center justify-center cursor-not-allowed relative overflow-hidden"
        >
          <Lock size={20} className="text-gray-700 mb-3" />
          <span className="text-xs text-gray-600 font-mono tracking-widest">LOCKED</span>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]" />
        </motion.div>
      </div>
      
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3 } }} onClick={onNext} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
        Leave Vault →
      </motion.button>
    </motion.div>
  );
}