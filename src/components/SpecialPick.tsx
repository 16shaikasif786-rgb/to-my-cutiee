import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

export default function SpecialPick({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState(0); // 0: Entry, 1: Photo, 2: Prompt Video, 3: Video Player, 4: Outro
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleVideoEnd = () => {
    setPhase(4);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }} 
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#050204]"
    >
      {/* Background Cinematic Atmosphere */}
      <motion.div 
        animate={{ opacity: phase >= 1 ? 0.8 : 0.2 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3d0c1c]/30 via-transparent to-transparent pointer-events-none"
      />
      {phase >= 1 && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 4 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f8c8d8]/10 via-transparent to-transparent pointer-events-none blur-3xl"
        />
      )}

      <AnimatePresence mode="wait">
        {/* PHASE 0: ENTRY */}
        {phase === 0 && (
          <motion.div 
            key="phase0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center z-10 max-w-sm w-full"
          >
            <p className="text-white/40 text-xs font-mono uppercase tracking-[0.3em] mb-4">
              I saved one moment separately...
            </p>
            <h2 className="text-2xl md:text-3xl text-[#f9ead0] font-serif mb-6 drop-shadow-md">
              Ek Special Pick hai.
            </h2>
            <p className="text-[#f8c8d8]/80 text-sm md:text-base font-serif italic mb-12 leading-relaxed">
              Har memory ko ek jagah nahi rakha jaata... kuch ko thoda alag rakhte hain.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setPhase(1)}
              className="glass-button px-8 py-4 rounded-full text-[#f8c8d8] font-medium tracking-[0.2em] uppercase text-xs shadow-[0_0_20px_rgba(248,200,216,0.15)] flex items-center gap-2"
            >
              Open the special pick ✦
            </motion.button>
          </motion.div>
        )}

        {/* PHASE 1 & 2: PHOTO REVEAL */}
        {(phase === 1 || phase === 2) && (
          <motion.div 
            key="phase1"
            className="flex flex-col items-center w-full max-w-lg z-10"
          >
            <motion.div 
              initial={{ scale: 1.04, filter: 'blur(20px)', opacity: 0 }}
              animate={{ scale: 1.0, filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="w-full aspect-[4/5] glass-panel rounded-2xl overflow-hidden relative shadow-[0_15px_50px_rgba(0,0,0,0.6)] mb-8"
              onAnimationComplete={() => setTimeout(() => setPhase(2), 2000)}
            >
              <div className="absolute top-4 left-0 right-0 flex justify-center z-20">
                <span className="glass-panel px-4 py-1.5 rounded-full text-[10px] text-[#f9ead0] tracking-[0.3em] uppercase font-bold shadow-lg">
                  SPECIAL PICK
                </span>
              </div>
              <img 
                src="/special/IMG_20260930_231334_302.jpg.jpeg" 
                alt="Special Pick" 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-[#3d0c1c] to-[#1a0b18] flex flex-col items-center justify-center z-10 text-[#f9ead0] font-serif text-lg italic">
                Awaiting photo...
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b18]/80 via-transparent to-transparent pointer-events-none z-10" />
            </motion.div>

            <AnimatePresence>
              {phase === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-[#f8c8d8] text-lg font-serif italic mb-8 drop-shadow-sm">
                    Kuch moments bas moments nahi hote...
                  </p>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                    Aur ek cheez hai...
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => setPhase(3)}
                    className="glass-button px-8 py-3 rounded-full text-[#f9ead0] text-xs uppercase tracking-widest"
                  >
                    See the moment ✦
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* PHASE 3: VIDEO PLAYER */}
        {phase === 3 && (
          <motion.div 
            key="phase3"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full max-w-lg z-10 flex flex-col items-center"
          >
            <div className="w-full aspect-[9/16] max-h-[70vh] glass-panel rounded-3xl overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#f9ead0]/20 group">
              <video 
                ref={videoRef}
                src="/special/VID_20261001_045350_789.mp4"
                playsInline
                className="w-full h-full object-cover bg-black"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onClick={togglePlay}
                onError={(e) => {
                  handleVideoEnd();
                }}
              />
              {/* Custom Luxury Controls */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050204]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#f8c8d8]" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between items-center">
                  <button onClick={togglePlay} className="text-[#f9ead0] hover:text-white transition-colors p-2 rounded-full glass-panel">
                    {isVideoPlaying ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>
                  <button onClick={toggleMute} className="text-[#f9ead0] hover:text-white transition-colors p-2 rounded-full glass-panel text-xs font-mono tracking-widest">
                    {isMuted ? 'UNMUTE' : 'MUTE'}
                  </button>
                </div>
              </div>
              
              {!isVideoPlaying && progress === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-[#f9ead0] shadow-[0_0_30px_rgba(249,234,208,0.3)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-6 text-[#f8c8d8]/60 text-xs uppercase tracking-[0.3em] font-mono">
              Tap video to play/pause
            </p>
          </motion.div>
        )}

        {/* PHASE 4: OUTRO */}
        {phase === 4 && (
          <motion.div 
            key="phase4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}
            className="flex flex-col items-center z-10"
          >
            <p className="text-xl md:text-2xl text-[#f9ead0] font-serif mb-6 drop-shadow-md">
              Bas... ye moment thoda alag tha.
            </p>
            <p className="text-[#f8c8d8]/80 text-sm md:text-base font-serif italic mb-12">
              Kuch cheezein explain nahi hoti.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="glass-button px-10 py-4 rounded-full text-[#f8c8d8] font-bold tracking-[0.2em] uppercase text-xs shadow-[0_0_30px_rgba(248,200,216,0.2)]"
            >
              Keep this memory ✦
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
