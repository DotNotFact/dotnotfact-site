"use client";

import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Icon } from "@/components/Icon";
import type { Direction } from "@/content";

// Карточка направления с обратной стороной: клик в любом месте открывает пример
// задачи и первый шаг. Обратная сторона раскрывается кругом от точки клика.
// Кнопка растянута на всю карточку - курсор «рука» там, где клик правда работает.
export function FlipCard({ d, i, tg }: { d: Direction; i: number; tg: string }) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const back = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const id = `dir-${i}`;

  const show = (e: MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget.closest("li")?.getBoundingClientRect();
    // С клавиатуры координат нет (0,0) - раскрываем из центра
    if (card && e.clientX) setOrigin({ x: `${e.clientX - card.left}px`, y: `${e.clientY - card.top}px` });
    setOpen(true);
    requestAnimationFrame(() => back.current?.querySelector<HTMLElement>("a, button")?.focus());
  };

  const hide = () => {
    setOpen(false);
    opener.current?.focus();
  };

  return (
    <li
      className={`card card--direction${open ? " is-open" : ""}`}
      data-reveal
      style={{ "--i": i % 2, "--cx": origin.x, "--cy": origin.y } as CSSProperties}
      onKeyDown={(e) => e.key === "Escape" && open && hide()}
    >
      <div className="card__head">
        <span className="card__icon">
          <Icon name={d.icon} />
        </span>
        <h3>{d.title}</h3>
      </div>
      <p>{d.body}</p>
      <p className="card__result">{d.result}</p>
      <ul className="card__tags" aria-label="Технологии">
        {d.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
        <li className="card__hint" aria-hidden="true">
          Пример задачи <span>→</span>
        </li>
      </ul>

      <button
        ref={opener}
        type="button"
        className="card__open"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`Пример задачи: ${d.title}`}
        onClick={show}
      />

      <div ref={back} id={id} className="card__back" inert={!open}>
        <p className="card__label">Пример задачи</p>
        <p>{d.example}</p>
        <p className="card__label">Первый шаг</p>
        <p>{d.start}</p>
        <div className="card__back-actions">
          <a className="btn btn--small" href={tg}>
            Обсудить
          </a>
          <button type="button" className="btn btn--small btn--ghost" onClick={hide}>
            Назад
          </button>
        </div>
      </div>
    </li>
  );
}
