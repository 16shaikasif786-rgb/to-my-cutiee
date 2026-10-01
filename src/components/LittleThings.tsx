import { motion } from 'framer-motion';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from './CinematicPhoto';

export default function LittleThings({ onNext }: { onNext: () => void }) {
  const hasThings = cutieeContent.littleThings && cutieeContent.littleThings.length > 0;
  const photoKeepsakes = cutieeContent.photos.slice(7, 10);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center">
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="text-xl md:text-2xl text-gray-300/80 mb-16 font-serif max-w-md leading-relaxed">
        Tumhe shayad ye sab normal lagta hoga...
      </motion.h2>

      {photoKeepsakes.length > 0 && (
        <div className="mb-12 grid w-full max-w-sm grid-cols-3 gap-2.5">
          {photoKeepsakes.map((photo, index) => (
            <motion.figure
              key={photo.id}
              initial={{ opacity: 0, y: 16, rotate: index % 2 === 0 ? -2 : 2 }}
              animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              transition={{ delay: 0.25 + index * 0.2, duration: 0.8 }}
              className="rounded-xl border border-[#f9ead0]/15 bg-white/[0.035] p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.32)]"
            >
              <CinematicPhoto
                photo={photo}
                sizes="(max-width: 640px) 29vw, 120px"
                className="aspect-[3/4] rounded-lg"
              />
              <figcaption className="truncate px-0.5 pt-1.5 text-[9px] text-[#f9ead0]/65">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}
      
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
          className="rounded-full bg-white px-10 py-4 font-bold tracking-wider text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  );
}