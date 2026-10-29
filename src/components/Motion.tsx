"use client";

import { useEffect, useRef } from "react";

// Живой фон в три слоя глубины: дальний (сетка, пятна), средний (орбиты и
// потоки данных с бегущими точками), ближний (плавающие фигуры). Всё плывёт
// само (CSS), а от мыши слои сдвигаются на разную глубину. Фигуры стоят по
// краям — колонка текста посередине остаётся спокойной.

// Плавающие фигуры: где стоят (в % экрана), какая, какого размера, какой темп
const floaters = [
  { x: 6, y: 14, kind: "ring", size: 26, dur: 17 },
  { x: 92, y: 10, kind: "plus", size: 18, dur: 13 },
  { x: 3, y: 46, kind: "square", size: 16, dur: 19 },
  { x: 95, y: 38, kind: "ring", size: 14, dur: 15 },
  { x: 10, y: 78, kind: "plus", size: 14, dur: 21 },
  { x: 88, y: 70, kind: "square", size: 22, dur: 16 },
  { x: 18, y: 28, kind: "dot", size: 8, dur: 11 },
  { x: 82, y: 24, kind: "dot", size: 6, dur: 14 },
  { x: 96, y: 88, kind: "plus", size: 12, dur: 18 },
  { x: 4, y: 94, kind: "ring", size: 18, dur: 20 },
  { x: 78, y: 56, kind: "dot", size: 5, dur: 12 },
  { x: 22, y: 62, kind: "square", size: 10, dur: 22 },
] as const;

// Потоки данных: плавные линии через весь экран (координаты в рамке 1600×1000)
const flows = [
  "M -50 220 C 300 120, 520 380, 860 260 S 1400 120, 1650 300",
  "M -50 760 C 260 640, 600 900, 980 720 S 1420 600, 1650 820",
  "M 1650 520 C 1300 460, 1150 620, 820 540 S 300 420, -50 520",
];

export function Motion() {
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = bg.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (still || !fine || !el) return;

    // Параллакс от мыши: фон плавно догоняет курсор
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
      <div className="layer layer--far">
        <div className="backdrop__grid" />
        <div className="glow glow--a" />
        <div className="glow glow--b" />
        <div className="glow glow--c" />
        <div className="glow glow--d" />
      </div>

      <div className="layer layer--mid">
        <svg className="orbit orbit--right" viewBox="0 0 800 800">
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
        <svg className="orbit orbit--left" viewBox="0 0 800 800">
          <g className="orbit__ring">
            <circle cx="400" cy="400" r="300" strokeDasharray="1 8" />
            <circle cx="400" cy="400" r="180" />
          </g>
          <g className="orbit__nodes">
            <circle cx="400" cy="100" r="5" />
            <circle cx="700" cy="400" r="4" />
            <circle cx="220" cy="400" r="6" />
          </g>
        </svg>
        <svg className="flows" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
          {flows.map((d, i) => (
            <g key={d}>
              <path className="flow" d={d} />
              <circle className="flow__dot" r="3.5">
                <animateMotion dur={`${14 + i * 5}s`} repeatCount="indefinite" path={d} />
              </circle>
              <circle className="flow__dot flow__dot--late" r="2.5">
                <animateMotion dur={`${14 + i * 5}s`} begin={`${-(5 + i * 2)}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          ))}
        </svg>
      </div>

      <div className="layer layer--near">
        {floaters.map((f, i) => (
          <span
            key={i}
            className={`floater floater--${f.kind}`}
            style={
              {
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: f.size,
                height: f.size,
                animationDuration: `${f.dur}s`,
                animationDelay: `${-i * 1.7}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
