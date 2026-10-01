import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cutieeContent } from '../content/cutiee';
import FloatingEmojis from './FloatingEmojis';
import CinematicPhoto from './CinematicPhoto';

export default function RealSurprise({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);
  const displayName = cutieeContent.name || cutieeContent.nickname || "Shehzadi";
  const revealPhotos = cutieeContent.photos.slice(15, 17);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000);
    const t2 = setTimeout(() => setStep(2), 6000);
    const t3 = setTimeout(() => setStep(3), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1, transition: { duration: 1.5 } }} 
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#050306]"
    >
      {/* Luxury Cinematic Glow */}
      {step >= 1 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f4d9e1]/40 via-[#4a1525]/20 to-transparent pointer-events-none" 
        />
      )}
      
      {step >= 1 && (
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(15px)' }} 
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 3, ease: "easeOut" } }} 
          className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-[#f4d9e1] to-[#f7e7ce] mb-16 drop-shadow-[0_0_30px_rgba(244,217,225,0.4)] tracking-wide z-10"
        >
          {displayName}
        </motion.h1>
      )}

      {step >= 1 && revealPhotos.length > 0 && (
        <div className="z-10 mb-8 grid w-full max-w-sm grid-cols-2 gap-3">
          {revealPhotos.map((photo, index) => (
            <motion.figure
              key={photo.id}
              initial={{ opacity: 0, y: 18, rotate: index === 0 ? -2 : 2, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, rotate: index === 0 ? -1 : 1, filter: 'blur(0px)' }}
              transition={{ delay: index * 0.45, duration: 1.2 }}
              className="rounded-2xl border border-[#f9ead0]/20 bg-white/[0.035] p-2 shadow-[0_16px_50px_rgba(0,0,0,0.42)]"
            >
              <CinematicPhoto
                photo={photo}
                sizes="(max-width: 640px) 42vw, 180px"
                className="aspect-[4/5] rounded-xl"
              />
              <figcaption className="truncate px-1 pt-2 text-[10px] text-[#f9ead0]/70">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}
      
      <div className="space-y-8 max-w-lg px-4 text-base md:text-lg text-gray-300 leading-relaxed font-serif z-10">
        {step >= 2 && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 2 } }} className="text-xl md:text-2xl text-[#f4d9e1]/90 italic mb-8 drop-shadow-md">
            Jaanuuu...
          </motion.p>
        )}
        
        {step >= 3 && (
          <>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }} className="text-white/90">
              Kuch log zindagi mein aate nahi...
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.5, duration: 1.5 } }} className="text-white/90">
              Allah unhe bhejta hai.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 5, duration: 2 } }} className="text-[#f7e7ce] text-lg md:text-xl pt-4 italic">
              And you are the most beautiful blessing. ✨
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, transition: { delay: 8, duration: 1.5 } }} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext} 
              className="mt-16 glass-button px-10 py-4 text-[#f4d9e1] rounded-full font-medium tracking-widest shadow-[0_0_30px_rgba(244,217,225,0.15)] uppercase text-xs"
            >
              Continue
            </motion.button>
            <FloatingEmojis emojis={['✨', '🌸', '🤍', '🎀']} count={6} />
          </>
        )}
      </div>
    </motion.div>
  );
}