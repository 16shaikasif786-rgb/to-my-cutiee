'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import AmbientBackground from '../components/AmbientBackground';
import AudioPlayer from '../components/AudioPlayer';
import Opening from '../components/Opening';
import SecretEntry from '../components/SecretEntry';
import Scanner from '../components/Scanner';
import PersonalityGlitch from '../components/PersonalityGlitch';
import JaanuuuVsSystem from '../components/JaanuuuVsSystem';
import ChaosArena from '../components/ChaosArena';
import PakdoGame from '../components/PakdoGame';
import SecretAlgorithm from '../components/SecretAlgorithm';
import FirstSurprise from '../components/FirstSurprise';
import MemoryUniverse from '../components/MemoryUniverse';
import LittleThings from '../components/LittleThings';
import ComplimentMachine from '../components/ComplimentMachine';
import RomanticMoment from '../components/RomanticMoment';
import GiftVault from '../components/GiftVault';
import SpecialPhotoReveal from '../components/SpecialPhotoReveal';
import SpecialPick from '../components/SpecialPick';
import FakeEnding from '../components/FakeEnding';
import RealSurprise from '../components/RealSurprise';
import FinalMoment from '../components/FinalMoment';
import FloatingEmojis from '../components/FloatingEmojis';
import { cutieeContent } from '../content/cutiee';
import CinematicPhoto from '../components/CinematicPhoto';

function UniverseFinale({ onReplay }: { onReplay: () => void }) {
  const [phase, setPhase] = useState(0); // 0: Comedy, 1: Islamic, 2: SmileMeter, 3: Final Punchline
  const [smileMeter, setSmileMeter] = useState(0);

  // Comedy Sequence
  const comedySequence = [
    "Ek serious baat bolun? 👀",
    "Aapko impress karne ke liye itna bada universe bana diya...",
    "Ab smile toh banti hai na 😂❤️",
    "Warna meku complaint karni padegi 😭",
    "Itna effort gaya kidhar Jaanuuu? 😂💋"
  ];
  const [comedyIndex, setComedyIndex] = useState(0);

  // Islamic Transition Sequence
  const islamicSequence = [
    "Har khoobsurat cheez ke peeche Allah ki ek hikmat hoti hai. 🤍",
    "Aur kuch log zindagi mein ek khoobsurat ehsaas ban jaate hain.",
    "Alhamdulillah for you, Shehzadi. 🤍"
  ];
  const [islamicIndex, setIslamicIndex] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      if (comedyIndex < comedySequence.length) {
        const t = setTimeout(() => setComedyIndex(c => c + 1), 3500);
        return () => clearTimeout(t);
      } else {
        setTimeout(() => setPhase(1), 2000);
      }
    } else if (phase === 1) {
      if (islamicIndex < islamicSequence.length) {
        const t = setTimeout(() => setIslamicIndex(c => c + 1), 4000);
        return () => clearTimeout(t);
      } else {
        setTimeout(() => setPhase(2), 2000);
      }
    }
  }, [phase, comedyIndex, islamicIndex, comedySequence.length, islamicSequence.length]);

  const handleSmile = () => {
    if (smileMeter < 100) {
      setSmileMeter(prev => prev + 25);
    }
    if (smileMeter >= 75) {
      setTimeout(() => setPhase(3), 2000);
    }
  };

  const renderContent = () => {
    if (phase === 0) {
      return (
        <motion.p key="comedy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-xl md:text-2xl text-[#f8c8d8] font-serif leading-relaxed px-4 drop-shadow-md">
          {comedySequence[comedyIndex] || comedySequence[comedySequence.length - 1]}
        </motion.p>
      );
    } else if (phase === 1) {
      return (
        <motion.p key="islamic" initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }} transition={{ duration: 1 }} className="text-lg md:text-xl text-white/90 font-serif leading-relaxed px-4 italic">
          {islamicSequence[islamicIndex] || islamicSequence[islamicSequence.length - 1]}
        </motion.p>
      );
    } else if (phase === 2 || phase === 3) {
      return (
        <motion.div key="smile" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full max-w-sm relative z-10">
          {smileMeter >= 100 && <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:0.3, scale:1.5}} transition={{duration:3}} className="absolute inset-0 bg-[#f8c8d8] rounded-full blur-[100px] -z-10 pointer-events-none" />}
          {smileMeter >= 100 && <FloatingEmojis emojis={['🌸', '💕', '🥰', '✨', '❤️', '🫶🏻']} count={10} />}
          
          <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-4">SMILE LEVEL {smileMeter}%</p>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-8">
            <motion.div className="h-full bg-gradient-to-r from-[#4a1525] to-[#f4d9e1]" animate={{ width: `${smileMeter}%` }} transition={{ type: "spring", bounce: 0.5 }} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.9 }} 
            onClick={handleSmile}
            disabled={smileMeter >= 100}
            className={`px-8 py-5 rounded-full font-bold tracking-widest uppercase text-xs transition-all ${smileMeter >= 100 ? 'bg-[#f8c8d8] text-[#3d0c1c] shadow-[0_0_40px_rgba(248,200,216,0.6)]' : 'glass-button text-[#f8c8d8]'}`}
          >
            {smileMeter >= 100 ? "BASSSS... ab hui na baat 😌❤️" : "Smile kiya? 😌"}
          </motion.button>
          
          {phase === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-12 flex flex-col items-center">
              <p className="text-lg md:text-xl text-white font-serif mb-4">
                Ab smile karo Jaanuuu...
              </p>
              <p className="text-lg md:text-xl text-[#f8c8d8] font-serif mb-8 drop-shadow-md">
                itna bada scene bana ke bhi agar smile nahi kiye toh kya fayda 😂❤️
              </p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-base md:text-lg text-[#f9ead0] font-serif italic mb-12 drop-shadow-sm">
                Chalo ab zyada nakhre nahi... smile maintain rakho 😌💋
              </motion.p>
              <div className="mb-8 w-full max-w-sm" aria-label="Kuch pyaare se pal">
                <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#f9ead0]/55">
                  Kuch pyaare se pal
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[3, 6, 9, 12, 15, 17].map((photoId, index) => {
                    const photo = cutieeContent.photos.find(item => item.id === photoId);
                    if (!photo) return null;

                    return (
                      <motion.figure
                        key={photo.id}
                        initial={{ opacity: 0, y: 12, rotate: index % 2 === 0 ? -2 : 2 }}
                        animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                        transition={{ delay: index * 0.12, duration: 0.6 }}
                        className="rounded-xl border border-[#f9ead0]/20 bg-white/[0.035] p-1"
                      >
                        <CinematicPhoto
                          photo={photo}
                          sizes="(max-width: 640px) 27vw, 120px"
                          className="aspect-[4/5] rounded-lg"
                        />
                        <figcaption className="truncate px-0.5 pt-1 text-[9px] text-[#f9ead0]/65">
                          {photo.caption}
                        </figcaption>
                      </motion.figure>
                    );
                  })}
                </div>
              </div>
              <motion.button 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={onReplay} 
                className="rounded-full border border-gray-800 px-6 py-3 text-xs uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9ead0]"
              >
                Dobara dekho
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      );
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 relative max-w-2xl mx-auto w-full">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const [scene, setScene] = useState(1);

  const nextScene = () => setScene(prev => prev + 1);

  // Expanded scene flow with all new mini games and components safely inserted
  const renderScene = () => {
    switch (scene) {
      case 1: return <Opening key="s1" onNext={nextScene} />;
      case 2: return <SecretEntry key="s2" onNext={nextScene} />;
      case 3: return <Scanner key="s3" onNext={nextScene} />;
      case 4: return <PersonalityGlitch key="s4" onNext={nextScene} />;
      case 5: return <JaanuuuVsSystem key="s5" onNext={nextScene} />;
      case 6: return <ChaosArena key="s6" onNext={nextScene} />;
      case 7: return <PakdoGame key="s7" onNext={nextScene} />;
      case 8: return <SecretAlgorithm key="s8" onNext={nextScene} />;
      case 9: return <FirstSurprise key="s9" onNext={nextScene} />;
      case 10: return <MemoryUniverse key="s10" onNext={nextScene} />;
      case 11: return <LittleThings key="s11" onNext={nextScene} />;
      case 12: return <ComplimentMachine key="s12" onNext={nextScene} />;
      case 13: return <RomanticMoment key="s13" onNext={nextScene} />;
      case 14: return <GiftVault key="s14" onNext={nextScene} />;
      case 15: return <SpecialPhotoReveal key="s15" onNext={nextScene} />;
        case 16: return <SpecialPick key="s16" onNext={nextScene} />;
      case 17: return <FakeEnding key="s17" onNext={nextScene} />;
      case 18: return <RealSurprise key="s18" onNext={nextScene} />;
      case 19: return <FinalMoment key="s19" onNext={nextScene} />;
      case 20: return <UniverseFinale key="s20" onReplay={() => setScene(1)} />;
      default: return null;
    }
  };

  const audioSrc = cutieeContent.songs && cutieeContent.songs.length > 0 ? cutieeContent.songs[0].url : '';

  return (
    <main className="relative min-h-screen selection:bg-[#f7e7ce]/30 overflow-hidden font-sans bg-[#050306] text-white">
      <MotionConfig reducedMotion="user">
        <AmbientBackground />

        {scene > 1 && scene < 19 && (
          <div className="absolute top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
            <div className="flex gap-1.5 opacity-50">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className={"h-1 rounded-full transition-all duration-500 " + (i + 1 <= scene ? "bg-[#f4d9e1]/80 w-4 md:w-6" : "bg-white/10 w-1.5 md:w-2")}
                />
              ))}
            </div>
          </div>
        )}

        {scene > 1 && audioSrc && <AudioPlayer src={audioSrc} />}

        <AnimatePresence mode="wait">
          {renderScene()}
        </AnimatePresence>
      </MotionConfig>
    </main>
  );
}
