import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    let particles: {x: number, y: number, r: number, vx: number, vy: number, op: number}[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Reduce particle count on smaller screens for performance
    const count = window.innerWidth < 768 ? 20 : 40;
    
    for(let i=0; i<count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        op: Math.random() * 0.4 + 0.1
      });
    }
    
    let animId: number;
    let isActive = true;
    
    // Pause animation when tab is hidden
    const handleVisibilityChange = () => {
      isActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isActive) {
        animId = requestAnimationFrame(render);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 192, 203, ${p.op})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(render);
    };
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Cinematic subtle gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-pink-900/10 rounded-full blur-[140px] opacity-70 mix-blend-screen" />
      <div className="absolute top-[50%] -right-[20%] w-[70%] h-[70%] bg-purple-900/10 rounded-full blur-[160px] opacity-60 mix-blend-screen" />
      
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50"></canvas>
    </div>
  );
}