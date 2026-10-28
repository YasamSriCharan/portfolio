import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

interface HalftoneWordmarkFooterProps {
  wordmark?: string;
  label?: string;
  meta?: string;
  palette?: {
    background: string;
    ink: string;
    warm: string;
  };
  dotGap?: number;
  interactive?: boolean;
}

const HalftoneWordmarkFooter: React.FC<HalftoneWordmarkFooterProps> = ({
  wordmark = "yasam",
  label = "Yasam Sri Charan",
  meta = "Computer Science Student · Developer",
  palette = { background: "#2B2D42", ink: "#EDF2F4", warm: "#EF233C" },
  dotGap = 6,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = 400 * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = '400px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = 400;
      
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, width, height);

      ctx.font = 'bold 160px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';
      ctx.fillText(wordmark.toUpperCase(), width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x += dotGap) {
        for (let y = 0; y < height; y += dotGap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          
          if (alpha > 128) {
            const dist = Math.hypot(x - mouseX, y - mouseY);
            const size = Math.max(1, (alpha / 255) * 4);
            
            ctx.fillStyle = dist < 100 ? palette.warm : palette.ink;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY - (window.innerHeight - 400);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [wordmark, palette, dotGap]);

  return (
    <footer className="relative w-full bg-primary-dark text-primary-light pt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-bold mb-6">Explore</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-primary-accent transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-primary-accent transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary-accent transition-colors">Projects</a></li>
            <li><a href="#journey" className="hover:text-primary-accent transition-colors">Journey</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Connect</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-primary-accent transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-primary-accent transition-colors">LinkedIn</a></li>
            <li><a href="mailto:your-email@example.com" className="hover:text-primary-accent transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div className="relative h-[400px] overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">{label}</h2>
          <p className="text-primary-muted font-medium">{meta}</p>
        </div>
      </div>
      
      <div className="absolute top-10 right-10">
        <a href="#top" className="p-3 rounded-full bg-primary-muted/10 hover:bg-primary-accent transition-colors text-primary-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </a>
      </div>
    </footer>
  );
};

export default HalftoneWordmarkFooter;
