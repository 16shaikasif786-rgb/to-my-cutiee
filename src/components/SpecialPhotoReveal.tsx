'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from './CinematicPhoto';
import FloatingEmojis from './FloatingEmojis';

const revealLines = [
  'Ek tasveer, iss kahaani ke beech ek narm sa waqfa.',
  'Bas ek pal, aaram se dekhne ke liye.',
  'Iss jhalak ko thoda sa waqt do.',
  'Allah aapki muskurahat hamesha mehfooz rakhe. 🤍'
];

export default function SpecialPhotoReveal({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);
  const [phase, setPhase] = useState(0);
  const photo = cutieeContent.photos.find(item => item.id === 15);

  useEffect(() => {
    if (!opened || phase >= revealLines.length - 1) return;

    const timer = window.setTimeout(() => setPhase(current => current + 1), 2600);
    return () => window.clearTimeout(timer);
  }, [opened, phase]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050204] px-5 py-20 text-center"
    >
      <motion.div
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f8c8d8]/15 via-[#3d0c1c]/10 to-transparent"
      />

      {!opened ? (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="z-10 flex flex-col items-center">
          <p className="mb-8 max-w-xs font-serif text-lg italic leading-relaxed text-[#f8c8d8]">
            Ek tasveer ke liye, ek alag sa pal.
          </p>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpened(true)}
            className="glass-button flex flex-col items-center gap-3 rounded-2xl border-[#f9ead0]/30 px-10 py-6 text-[#f9ead0] shadow-[0_0_30px_rgba(249,234,208,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
          >
            <span aria-hidden="true" className="text-xl">✦</span>
            <span className="text-xs uppercase tracking-[0.22em]">Tasveer kholo</span>
          </motion.button>
        </motion.div>
      ) : (
        <motion.div className="z-10 flex w-full max-w-sm flex-col items-center">
          <FloatingEmojis emojis={['✨', '🌸', '🤍']} count={5} />

          <motion.div
            initial={{ scale: 0.94, filter: 'blur(24px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="sparkle-edge relative mb-6 w-full overflow-hidden rounded-3xl border border-[#f9ead0]/20 bg-white/[0.025] p-2 shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
          >
            <CinematicPhoto
              photo={photo}
              sizes="(max-width: 640px) 84vw, 340px"
              className="aspect-[3/4] max-h-[58svh] rounded-2xl"
            />
            <div className="pointer-events-none absolute inset-x-2 bottom-2 h-1/4 rounded-b-2xl bg-gradient-to-t from-[#1a0b18]/55 to-transparent" />
          </motion.div>

          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="min-h-14 px-2 font-serif text-base italic leading-relaxed text-[#f9ead0] sm:text-lg"
            aria-live="polite"
          >
            {revealLines[phase]}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === revealLines.length - 1 ? 1 : 0 }}
            disabled={phase !== revealLines.length - 1}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            className="mt-4 rounded-full border border-white/15 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-[#f9ead0]/50 hover:text-[#f9ead0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0] disabled:pointer-events-none"
          >
            Aage chalo
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
