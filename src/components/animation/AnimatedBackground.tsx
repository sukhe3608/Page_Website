import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/utils/env";

interface AnimatedBackgroundProps {
  className?: string;
  /** Particle density multiplier. */
  density?: number;
  /** Enable subtle mouse attraction on pointer devices. */
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

/** Lightweight canvas particle field with connecting lines. Light theme, GPU-friendly, reduced-motion aware. */
export function AnimatedBackground({ className, density = 1, interactive = true }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = prefersReducedMotion;
    const smallScreen = window.matchMedia("(max-width: 640px)").matches;
    const count = Math.max(10, Math.round((smallScreen ? 16 : 40) * density));
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00022,
      vy: (Math.random() - 0.5) * 0.00022,
      r: 0.8 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    let mouse = { x: -1, y: -1 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: (e.clientX - rect.left) / Math.max(1, rect.width), y: (e.clientY - rect.top) / Math.max(1, rect.height) };
    };

    resize();
    window.addEventListener("resize", resize);
    if (interactive && !reduce && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", onMove);
    }

    let raf = 0;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const now = performance.now();

      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
        if (interactive && mouse.x >= 0 && !reduce) {
          p.x += (mouse.x - p.x) * 0.0015;
          p.y += (mouse.y - p.y) * 0.0015;
        }
        const alpha = reduce ? 0.3 : 0.22 + 0.28 * Math.sin(now / 1800 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.16) {
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.strokeStyle = `rgba(21, 94, 239, ${(1 - dist / 0.16) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density, interactive]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}