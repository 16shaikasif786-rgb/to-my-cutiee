import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingEmojis({ emojis = ['✨', '🌸'], count = 8 }: { emojis?: string[], count?: number }) {
  const [particles, setParticles] = useState<{ id: number; emoji: string; x: number; delay: number; duration: number, drift: number, rotation: number }[]>([]);

  useEffect(() => {
    // Generate limited random particles based on screen width (less on mobile)
    const isMobile = window.innerWidth < 768;
    const actualCount = isMobile ? Math.min(count, 5) : count;
    
    const newParticles = Array.from({ length: actualCount }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 80 + 10, // 10% to 90%
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 4, // 4 to 7 seconds
      drift: Math.random() * 10 - 5,
      rotation: Math.random() * 360 - 180
    }));
    setParticles(newParticles);
  }, [emojis, count]);

  // Don't render until client-side hydrated
  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: '110vh', x: `${p.x}vw`, rotate: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: '-10vh',
            x: [`${p.x}vw`, `${p.x + p.drift}vw`],
            rotate: p.rotation,
            scale: [0.5, 1.2, 0.8]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute text-2xl drop-shadow-md"
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
