import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SecretAlgorithm({ onNext }: { onNext: () => void }) {
  const [error, setError] = useState(false);
  const [metrics, setMetrics] = useState({ chaos: 0, charm: 0, danger: 0, softness: 0 });

  useEffect(() => {
    const int1 = setInterval(() => setMetrics(m => ({ ...m, chaos: Math.min(100, m.chaos + 5) })), 100);
    const int2 = setInterval(() => setMetrics(m => ({ ...m, charm: Math.min(100, m.charm + 3) })), 100);
    const int3 = setInterval(() => setMetrics(m => ({ ...m, danger: Math.min(100, m.danger + 7) })), 100);
    const int4 = setInterval(() => setMetrics(m => ({ ...m, softness: Math.min(100, m.softness + 4) })), 100);
    
    setTimeout(() => setError(true), 4000);
    setTimeout(onNext, 9000);

    return () => { clearInterval(int1); clearInterval(int2); clearInterval(int3); clearInterval(int4); };
  }, [onNext]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }} className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 to-black">
      <h2 className="text-sm md:text-base text-blue-400 font-mono mb-12 tracking-widest uppercase">
        {error ? 'FATAL CALCULATION ERROR' : 'Calculating attributes...'}
      </h2>
      
      {!error ? (
        <div className="w-full max-w-sm space-y-6">
          {[
            { label: 'Chaos Factor', val: metrics.chaos },
            { label: 'Charm Level', val: metrics.charm },
            { label: 'Danger Index', val: metrics.danger },
            { label: 'Softness', val: metrics.softness }
          ].map(m => (
            <div key={m.label} className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-blue-200/70">
                <span>{m.label}</span>
                <span>{m.val}%</span>
              </div>
              <div className="h-1 w-full bg-blue-950 rounded-full overflow-hidden">
                <motion.div className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" style={{ width: `${m.val}%` }} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          className="text-center p-10 bg-red-950/20 border border-red-500/20 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(239,68,68,0.1)]"
        >
          <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-red-500 text-2xl font-bold">!</span>
          </motion.div>
          <p className="text-red-400/80 mb-4 font-mono text-xs md:text-sm tracking-widest uppercase">System cannot calculate this person.</p>
          <p className="text-2xl md:text-3xl text-white font-serif mt-6">Reason: <span className="text-red-300 font-italic">one of one.</span></p>
        </motion.div>
      )}
    </motion.div>
  );
}