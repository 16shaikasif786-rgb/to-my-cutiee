import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from './CinematicPhoto';

export default function MemoryUniverse({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const photos = cutieeContent.photos.slice(2, 7);
  const memories = cutieeContent.memories || [];
  const slideCount = photos.length + memories.length;

  if (slideCount === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
        <p className="font-serif text-lg text-[#f8c8d8]">Yahan abhi koi yaad nahi hai.</p>
        <button
          onClick={onNext}
          className="glass-button rounded-full px-7 py-3 text-xs uppercase tracking-widest text-[#f9ead0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
        >
          Aage chalo
        </button>
      </div>
    );
  }

  const nextMemory = () => {
    if (index < slideCount - 1) {
      setIndex(current => current + 1);
    } else {
      onNext();
    }
  };

  const photo = photos[index];
  const memory = index >= photos.length ? memories[index - photos.length] : undefined;
  const photoIndex = photo ? index + 1 : undefined;
  const memoryIndex = memory ? index - photos.length + 1 : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#050204] px-5 py-20"
    >
      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#f8c8d8]/70">Dil ke paas</p>

      <div className="relative w-full max-w-xs">
        <AnimatePresence mode="wait">
          <motion.article
            key={photo?.id ?? `memory-${memory?.id ?? index}`}
            initial={{ opacity: 0, y: 22, rotate: -2, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, rotate: 2, filter: 'blur(8px)' }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.16 }}
            className="polaroid-card overflow-hidden rounded-2xl p-3"
            aria-live="polite"
          >
            {photo && (
              <CinematicPhoto
                photo={photo}
                sizes="(max-width: 640px) 82vw, 320px"
                className="aspect-[4/5] rounded-xl border border-white/10"
              />
            )}
            <div className="px-2 pb-3 pt-4 text-center">
              <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[#f9ead0]/55">
                {photoIndex ? `Jhalak ${photoIndex} / ${photos.length}` : `Yaad ${memoryIndex} / ${memories.length}`}
              </p>
              {memory && (
                <p className="mb-2 font-serif text-sm leading-relaxed text-white/75">{memory.text}</p>
              )}
              {photo && <p className="font-serif text-base italic text-[#f8c8d8]">{photo.caption}</p>}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: slideCount }, (_, dot) => (
          <span
            key={dot}
            className={`h-1 rounded-full transition-all ${dot === index ? 'w-5 bg-[#f9ead0]' : 'w-1.5 bg-white/25'}`}
          />
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={nextMemory}
        className="glass-button mt-7 rounded-full px-9 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8c8d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
        aria-label={index < slideCount - 1 ? `Agli jhalak, ${index + 2}` : 'Yaadon se aage chalo'}
      >
        {index < slideCount - 1 ? 'Agli jhalak' : 'Aage chalo'}
      </motion.button>
    </motion.div>
  );
}
