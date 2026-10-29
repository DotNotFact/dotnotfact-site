"use client";

import { useEffect, useRef } from "react";

// Живой фон: размытые пятна и орбита медленно плывут сами (CSS), а от мыши
// слои сдвигаются на разную глубину. Появление блоков — в CSS, без JS.
export function Motion() {
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Параллакс от мыши: фон плавно догоняет курсор, слои сдвигаются на разную глубину
    const el = bg.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (still || !fine || !el) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.setProperty("--px", x.toFixed(4));
      el.style.setProperty("--py", y.toFixed(4));
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.0005 ? requestAnimationFrame(tick) : 0;
    };

    const move = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={bg} className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__glow backdrop__glow--a" />
      <div className="backdrop__glow backdrop__glow--b" />
      <div className="backdrop__glow backdrop__glow--c" />
      <svg className="backdrop__orbit" viewBox="0 0 800 800">
        <g className="orbit__ring">
          <circle cx="400" cy="400" r="250" />
          <circle cx="400" cy="400" r="360" strokeDasharray="2 10" />
        </g>
        <g className="orbit__nodes">
          <line x1="400" y1="150" x2="650" y2="400" />
          <line x1="650" y1="400" x2="400" y2="760" />
          <line x1="400" y1="150" x2="150" y2="400" />
          <line x1="150" y1="400" x2="400" y2="650" />
          <circle cx="400" cy="150" r="6" />
          <circle cx="650" cy="400" r="5" />
          <circle cx="150" cy="400" r="5" />
          <circle cx="400" cy="650" r="4" />
          <circle cx="400" cy="760" r="7" />
        </g>
      </svg>
    </div>
  );
}
