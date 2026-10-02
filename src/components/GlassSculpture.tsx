import React, { useRef, useEffect, useState } from 'react';

interface GlassSculptureProps {
  interactive?: boolean;
  className?: string;
}

export const GlassSculpture: React.FC<GlassSculptureProps> = ({
  interactive = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Render 3D parametric glass ribbon slats onto the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 580;
    const height = 580;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const numSlices = 42; // Number of layered glass slats

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      const tiltX = mousePos.x * 24;
      const tiltY = mousePos.y * 24;
      const floatOffsetY = Math.sin(time * 0.8) * 8;
      const floatOffsetX = Math.cos(time * 0.6) * 4;

      // Center of helical arc
      const centerX = width * 0.52 + tiltX + floatOffsetX;
      const centerY = height * 0.48 + tiltY + floatOffsetY;

      // Draw each glass slat along the curved 3D spiral
      for (let i = 0; i < numSlices; i++) {
        const t = i / (numSlices - 1); // 0 to 1

        // Parametric curve: sweeping curving helical arc (similar to reference)
        const angle = -1.2 + t * 3.4 + Math.sin(time * 0.5 + t * 2) * 0.08;
        const radiusX = 145 + Math.sin(t * Math.PI) * 40;
        const radiusY = 165 - t * 45;

        const posX = centerX + Math.cos(angle) * radiusX + (t - 0.5) * 50;
        const posY = centerY + Math.sin(angle) * radiusY * 0.85 + (t * 60);

        // Rotation & 3D tilt of each glass card
        const cardAngle = angle + Math.PI / 2 + 0.15;
        const cardWidth = 72 + Math.sin(t * Math.PI) * 22;
        const cardHeight = 160 + Math.sin(t * Math.PI) * 35;

        ctx.save();
        ctx.translate(posX, posY);
        ctx.rotate(cardAngle);

        // Dynamic 3D depth perspective scale
        const zScale = 0.82 + Math.sin(t * Math.PI * 0.9) * 0.32;
        ctx.scale(zScale, zScale);

        // Rounded rectangle glass slat
        const rw = cardWidth;
        const rh = cardHeight;
        const rad = 14;

        // Shadow behind the glass card for depth
        ctx.shadowColor = `rgba(225, 29, 72, ${0.12 + (1 - t) * 0.15})`;
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 8;

        // Gradient tint from deep ruby magenta to rose pink & subtle orange/violet
        const grad = ctx.createLinearGradient(-rw / 2, -rh / 2, rw / 2, rh / 2);
        
        // Color transition along ribbon:
        // Left: ruby magenta -> Middle: translucent rose -> Right: warm coral rose
        if (t < 0.4) {
          grad.addColorStop(0, `rgba(244, 63, 94, ${0.45 + t * 0.25})`);
          grad.addColorStop(0.5, `rgba(225, 29, 72, ${0.65 + t * 0.2})`);
          grad.addColorStop(1, `rgba(190, 24, 93, ${0.75})`);
        } else if (t < 0.75) {
          grad.addColorStop(0, `rgba(251, 113, 133, ${0.55})`);
          grad.addColorStop(0.6, `rgba(244, 63, 94, ${0.7})`);
          grad.addColorStop(1, `rgba(236, 72, 153, ${0.6})`);
        } else {
          grad.addColorStop(0, `rgba(254, 205, 211, ${0.6})`);
          grad.addColorStop(0.5, `rgba(251, 113, 133, ${0.7})`);
          grad.addColorStop(1, `rgba(244, 63, 94, ${0.65})`);
        }

        // Fill glass rounded rectangle
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(-rw / 2, -rh / 2, rw, rh, rad);
        ctx.fill();

        // Inner specular reflection rim highlight (crisp white glossy edge)
        ctx.shadowColor = 'transparent'; // clear shadow for crisp border
        ctx.lineWidth = 1.6;
        const rimGrad = ctx.createLinearGradient(-rw / 2, -rh / 2, rw / 2, rh / 2);
        rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        rimGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.35)');
        rimGrad.addColorStop(0.8, 'rgba(254, 205, 211, 0.5)');
        rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
        ctx.strokeStyle = rimGrad;
        ctx.stroke();

        // Top glossy surface sheen line
        ctx.beginPath();
        ctx.moveTo(-rw / 2 + rad, -rh / 2 + 4);
        ctx.lineTo(rw / 2 - rad, -rh / 2 + 4);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [mousePos, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft warm pink ambient background diffusion */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-rose-400/25 via-pink-400/20 to-purple-400/15 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 1: High-fidelity 3D Glass Render Backdrop with seamless blend */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-multiply transition-transform duration-700">
        <img
          src="/glass-sculpture.jpg"
          alt=""
          className="w-full h-full object-contain filter contrast-125 saturate-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Layer 2: Interactive Real-Time 3D Parametric Glass Slats Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: 580, height: 580 }}
        className="relative z-10 w-full h-full drop-shadow-[0_20px_45px_rgba(244,63,94,0.18)]"
      />
    </div>
  );
};
