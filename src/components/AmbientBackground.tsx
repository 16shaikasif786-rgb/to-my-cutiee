import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    type Particle = { x: number, y: number, r: number, vx: number, vy: number, op: number, type: 'gold' | 'blush' | 'wine' | 'petal' | 'star' | 'heart' };
    let particles: Particle[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    const count = window.innerWidth < 768 ? 20 : 45;
    const types: Particle['type'][] = ['gold', 'blush', 'wine', 'petal', 'star', 'heart'];
    
    for(let i=0; i<count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05 - 0.03, // dreamy upward drift
        op: Math.random() * 0.3 + 0.05,
        type: types[Math.floor(Math.random() * types.length)]
      });
    }
    
    let animId: number;
    let isActive = true;
    
    const handleVisibilityChange = () => {
      isActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size/10, size/10);
      ctx.fillStyle = `rgba(248, 200, 216, ${opacity})`;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
      ctx.bezierCurveTo(-5, 3, 0, 5, 0, 7);
      ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
      ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      if (!isActive) {
        animId = requestAnimationFrame(render);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Sway for petals
        if (p.type === 'petal') {
           p.x += Math.sin(p.y * 0.01) * 0.1;
        }

        if (p.x < -10) p.x = canvas.width + 10; if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10; if (p.y > canvas.height + 10) p.y = -10;
        
        ctx.beginPath();
        if (p.type === 'heart') {
          drawHeart(ctx, p.x, p.y, p.r * 1.5, p.op);
        } else if (p.type === 'star') {
          ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(249, 234, 208, ${p.op * 1.5})`;
          ctx.fill();
        } else if (p.type === 'petal') {
          ctx.ellipse(p.x, p.y, p.r, p.r * 0.5, p.x * 0.01, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(248, 200, 216, ${p.op})`;
          ctx.fill();
        } else {
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          if (p.type === 'gold') ctx.fillStyle = `rgba(249, 234, 208, ${p.op})`; 
          else if (p.type === 'wine') ctx.fillStyle = `rgba(61, 12, 28, ${p.op})`; 
          else ctx.fillStyle = `rgba(248, 200, 216, ${p.op})`; 
          ctx.fill();
        }
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
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050204]">
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#3d0c1c] rounded-full blur-[140px] opacity-[0.3] mix-blend-screen" />
      <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] bg-[#1a0b18] rounded-full blur-[160px] opacity-[0.5] mix-blend-screen" />
      <div className="absolute bottom-[0%] left-[10%] w-[30%] h-[30%] bg-[#f8c8d8] rounded-full blur-[150px] opacity-[0.08] mix-blend-screen" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70"></canvas>
    </div>
  );
}
