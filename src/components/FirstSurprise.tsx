import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from './CinematicPhoto';

export default function FirstSurprise({ onNext }: { onNext: () => void }) {
  const fragments = cutieeContent.photos.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center"
    >
      <motion.p
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)', transition: { delay: 0.4, duration: 1.2 } }}
        className="mb-3 text-xs uppercase tracking-[0.28em] text-[#f9ead0]/60"
      >
        Ek chhota sa raaz
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 1.2 } }}
        className="mb-9 max-w-sm font-serif text-2xl leading-relaxed text-[#f8c8d8] md:text-3xl"
      >
        Kuch tasveerein bas dil ke kareeb hoti hain.
      </motion.h2>

      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        {fragments.map((photo, index) => (
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, y: 24, rotate: index === 0 ? -3 : 3, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, rotate: index === 0 ? -2 : 2, filter: 'blur(0px)' }}
            transition={{ delay: 1.2 + index * 0.35, duration: 1.2 }}
            className="rounded-2xl border border-[#f9ead0]/20 bg-white/[0.035] p-2 shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
          >
            <CinematicPhoto
              photo={photo}
              sizes="(max-width: 640px) 44vw, 180px"
              className="aspect-[4/5] rounded-xl"
            />
            <figcaption className="truncate px-1 pt-2 text-[10px] text-[#f9ead0]/70">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2.2 } }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="glass-button mt-10 rounded-full px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#f9ead0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
      >
        Aage chalo
      </motion.button>
    </motion.div>
  );
}
