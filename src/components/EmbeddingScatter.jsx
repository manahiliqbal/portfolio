import { useEffect, useRef } from 'react';

const BASE_RGB = '201, 185, 138';
const ACCENT_RGB = '196, 92, 122';
const LINK_DIST = 150;
const QUERY_DIST = 190;

function makeNode(w, h) {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.12 + Math.random() * 0.2;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 1.6 + Math.random() * 1.6,
  };
}

/** Drifting dot-and-line network; a query point (your cursor, or a slow ghost) links to its nearest nodes with similarity scores */
export default function EmbeddingScatter() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let nodes = [];
    let mouse = null;
    let raf = 0;
    let last = 0;
    let inView = true;
    let now = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${BASE_RGB}, ${(1 - d / LINK_DIST) * 0.5})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${BASE_RGB}, 0.7)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      const q = mouse || (reduceMotion ? null : ghostPoint());
      if (q) {
        const strength = mouse ? 1 : 0.55;
        const near = [];
        nodes.forEach((n) => {
          const d = Math.hypot(n.x - q.x, n.y - q.y);
          if (d < QUERY_DIST) near.push({ n, d });
        });
        near.sort((a, b) => a.d - b.d);

        near.forEach(({ n, d }) => {
          const a = 1 - d / QUERY_DIST;
          ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${a * 0.7 * strength})`;
          ctx.beginPath();
          ctx.moveTo(q.x, q.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
          ctx.fillStyle = `rgba(${ACCENT_RGB}, ${a * strength})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 1, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.font = '11px "IBM Plex Mono", monospace';
        near.slice(0, 3).forEach(({ n, d }, i) => {
          const score = (1 - 0.45 * (d / QUERY_DIST)).toFixed(2);
          ctx.fillStyle = `rgba(${ACCENT_RGB}, ${(i === 0 ? 0.95 : 0.7) * strength})`;
          ctx.fillText(score, n.x + 9, n.y - 7);
          if (i === 0) {
            ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${0.6 * strength})`;
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2);
            ctx.stroke();
          }
        });

        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${0.85 * strength})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('query', q.x + 9, q.y - 8);
      }
    };

    const ghostPoint = () => ({
      x: w * (0.5 + 0.36 * Math.sin(now * 0.00018)),
      y: h * (0.5 + 0.28 * Math.sin(now * 0.00027 + 1.3)),
    });

    const step = (dt) => {
      nodes.forEach((n) => {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > w) {
          n.vx *= -1;
          n.x = Math.min(Math.max(n.x, 0), w);
        }
        if (n.y < 0 || n.y > h) {
          n.vy *= -1;
          n.y = Math.min(Math.max(n.y, 0), h);
        }
      });
    };

    const frame = (ts) => {
      const dt = Math.min(ts - last, 50) / 16.67;
      last = ts;
      now = ts;
      step(dt);
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || reduceMotion) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;

      if (w && h) {
        nodes.forEach((n) => {
          n.x *= rect.width / w;
          n.y *= rect.height / h;
        });
      }
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.min(90, Math.round((w * h) / 16000)));
      while (nodes.length < count) nodes.push(makeNode(w, h));
      nodes = nodes.slice(0, count);

      if (reduceMotion) draw();
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      mouse = x >= 0 && y >= 0 && x <= r.width && y <= r.height ? { x, y } : null;
    };

    const onLeave = () => {
      mouse = null;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (inView) start();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView && !document.hidden) start();
      else stop();
    });
    intersection.observe(canvas);

    if (!reduceMotion) {
      window.addEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="embedding-scatter" aria-hidden="true" />;
}
