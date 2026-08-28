import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const starCount = Math.min(150, Math.floor((width * height) / 10000));
    let stars: Star[] = [];
    let shootingStar: ShootingStar | null = null;
    let lastShootingStarTime = Date.now();

    const starColors = [
      '#fcf8ec', // warm cream
      '#e5c57b', // antique gold
      '#dfbe76', // soft gold
      '#d7b5f0', // soft plum
      '#ffffff'  // pure starlight
    ];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep celestial gradient backing
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      grad.addColorStop(0, '#1c0e29');
      grad.addColorStop(0.4, '#14091f');
      grad.addColorStop(0.8, '#0d0614');
      grad.addColorStop(1, '#08030c');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle warm plum nebula clouds
      const nebula1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.3,
        0,
        width * 0.2,
        height * 0.3,
        width * 0.45
      );
      nebula1.addColorStop(0, 'rgba(74, 25, 87, 0.14)');
      nebula1.addColorStop(0.5, 'rgba(51, 15, 61, 0.07)');
      nebula1.addColorStop(1, 'rgba(14, 7, 20, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7,
        0,
        width * 0.8,
        height * 0.7,
        width * 0.5
      );
      nebula2.addColorStop(0, 'rgba(92, 38, 70, 0.12)');
      nebula2.addColorStop(0.5, 'rgba(64, 22, 45, 0.06)');
      nebula2.addColorStop(1, 'rgba(14, 7, 20, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Render twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.phase) * 0.35;
        const boundedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = boundedAlpha;
        ctx.fill();

        // Subtle halo around larger stars
        if (star.size > 1.2 && boundedAlpha > 0.6) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(223, 190, 118, 0.12)';
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      // Occasional subtle shooting star
      const now = Date.now();
      if (!shootingStar && now - lastShootingStarTime > 8000 && Math.random() < 0.02) {
        lastShootingStarTime = now;
        shootingStar = {
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 60,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 1,
          active: true
        };
      }

      if (shootingStar && shootingStar.active) {
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const starGrad = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          endX,
          endY
        );
        starGrad.addColorStop(0, `rgba(255, 245, 220, ${shootingStar.alpha})`);
        starGrad.addColorStop(0.3, `rgba(223, 190, 118, ${shootingStar.alpha * 0.6})`);
        starGrad.addColorStop(1, 'rgba(223, 190, 118, 0)');

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = starGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.015;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="cosmic-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};
