import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';

export default function FirstSurprise({ onNext }: { onNext: () => void }) {
  const photo = cutieeContent.photos && cutieeContent.photos.length > 0 ? cutieeContent.photos[0] : null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 1.5 } }} className="text-gray-400 mb-8 text-lg font-light">The day you called me for the first time...</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3, duration: 1.5 } }} className="text-2xl md:text-3xl text-white mb-16 font-serif">Woh feeling hi alag thi 🥹🫶🏻</motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }} 
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transition: { delay: 5.5, duration: 1.5, type: 'spring', bounce: 0.4 } }} 
        className="relative mb-8 cursor-pointer group" 
        onClick={onNext}
      >
        <div className="w-64 h-80 md:w-72 md:h-96 bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center relative shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
          {photo && photo.url && photo.url !== '/photos/placeholder1.jpg' ? (
             <img src={photo.url} alt="Memory" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
          ) : null}
          {/* Fallback elegant placeholder if image fails to load or is placeholder */}
          <div className={`flex flex-col items-center gap-4 opacity-50 ${(photo && photo.url && photo.url !== '/photos/placeholder1.jpg') ? 'hidden absolute' : ''}`}>
             <span className="text-4xl">📞</span>
             <p className="text-gray-400 text-sm tracking-widest uppercase">First Call</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 7 } }}>
          <p className="mt-8 text-pink-200/90 font-serif text-xl">{photo?.caption || 'Woh first call...'}</p>
          <p className="mt-3 text-sm text-gray-500 italic">Don't ask why. 😌</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}