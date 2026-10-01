'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Lock } from 'lucide-react';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from './CinematicPhoto';

export default function GiftVault({ onNext }: { onNext: () => void }) {
  const [openedGift, setOpenedGift] = useState<number | null>(null);
  const gifts = cutieeContent.gifts || [];
  const selectedGift = gifts.find(gift => gift.id === openedGift);
  const photo = selectedGift
    ? cutieeContent.photos.find(item => item.id === selectedGift.photoId)
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/10 to-black px-5 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 text-center font-serif text-3xl text-white md:text-4xl"
      >
        Chhota sa khazana
      </motion.h2>
      <p className="mb-10 text-center text-xs tracking-[0.22em] text-[#f9ead0]/55">
        Har dabbe mein ek pyaari si jhalak
      </p>

      <div className="mb-7 grid w-full max-w-xl grid-cols-2 gap-3 md:gap-5">
        {gifts.map((gift, index) => {
          const isOpen = openedGift === gift.id;

          return (
            <motion.button
              key={gift.id}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: index * 0.12 + 0.3 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpenedGift(isOpen ? null : gift.id)}
              aria-expanded={isOpen}
              className={`relative flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9ead0] ${
                isOpen
                  ? 'border-[#f9ead0]/55 bg-[#f9ead0]/[0.08]'
                  : 'border-[#f9ead0]/20 bg-gradient-to-br from-yellow-900/20 to-black hover:border-[#f9ead0]/40'
              }`}
            >
              <span className="mb-3 text-2xl text-[#f9ead0]/75" aria-hidden="true">✦</span>
              <span className="z-10 text-xs font-medium text-[#f9ead0]/90 md:text-sm">
                {gift.title}
              </span>
              <span className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/40">
                {isOpen ? 'Khol diya' : 'Chhoo kar kholo'}
              </span>
              <span className="absolute inset-0 bg-[#f9ead0]/[0.025]" aria-hidden="true" />
            </motion.button>
          );
        })}

        {gifts.length === 0 && (
          <p className="col-span-2 py-8 text-center font-serif text-sm text-white/55">
            Abhi koi tohfa nahi rakha.
          </p>
        )}

        <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50">
          <Lock size={18} className="mb-3 text-white/35" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Abhi band hai</span>
        </div>
      </div>

      {openedGift !== null && (
        <motion.div
          id="gift-photo-reveal"
          key={openedGift}
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          className="w-full max-w-xs"
          aria-live="polite"
        >
          <div className="rounded-2xl border border-[#f9ead0]/25 bg-white/[0.035] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <CinematicPhoto
              key={photo?.id ?? openedGift}
              photo={photo}
              sizes="(max-width: 640px) 82vw, 320px"
              className="aspect-[4/5] rounded-xl"
            />
            <p className="px-3 pb-2 pt-3 text-center font-serif text-sm italic text-[#f9ead0]/80">
              {photo?.caption || 'Ek pyaara sa ehsaas.'}
            </p>
          </div>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
        onClick={onNext}
        className="mt-8 rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-[#f9ead0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
      >
        Khazane se aage chalo
      </motion.button>
    </motion.div>
  );
}
