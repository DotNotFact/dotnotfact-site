import type { CSSProperties } from "react";
import { Motion } from "@/components/Motion";
import { about, cta, directions, hero, manifesto, nav, notFor, person, steps, stories } from "@/content";

const tg = `https://t.me/${person.telegram}`;
// Порядковый номер для задержки появления в группе
const order = (i: number) => ({ "--i": i }) as CSSProperties;

// Одна колонка на всю страницу: шапка, секции и подвал на одних вертикалях.
export default function Home() {
  return (
    <>
      <Motion />

      <header className="bar">
        <div className="bar__inner container">
          <a className="bar__name" href="#top">
            {person.name}
          </a>
          <nav className="bar__nav" aria-label="Разделы">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn--small" href={tg}>
            Написать
          </a>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <p className="status hero__in" style={order(0)}>
            <span className="pulse" aria-hidden="true" />
            {person.status}
          </p>
          <h1 className="hero__title">
            {hero.title.map((line, i) => (
              <span key={line} className="hero__line hero__in" style={order(i + 1)}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__lead hero__in" style={order(3)}>
            {hero.lead}
          </p>
          <div className="actions hero__in" style={order(4)}>
            <a className="btn" href={tg}>
              Обсудить проект
            </a>
            <a className="btn btn--ghost" href="#directions">
              Что я строю
            </a>
          </div>
        </section>

        <section className="section" aria-labelledby="manifesto-h" data-reveal>
          <h2 id="manifesto-h" className="h2">
            {manifesto.title}
          </h2>
          <p className="lead">{manifesto.body}</p>
        </section>

        <section id="directions" className="section" aria-labelledby="directions-h">
          <h2 id="directions-h" className="h2" data-reveal>
            Что я строю
          </h2>
          <ul className="cards">
            {directions.map((d, i) => (
              <li key={d.title} className="card" data-reveal style={order(i % 2)}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <p className="card__foot">{d.proof}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="practice" className="section" aria-labelledby="practice-h">
          <div className="section__head" data-reveal>
            <h2 id="practice-h" className="h2">
              Как я принимаю решения
            </h2>
            <p className="section__lead">У каждого решения есть цена. Я называю её заранее.</p>
          </div>
          <div className="cards">
            {stories.map((s, i) => (
              <article key={s.lead} className="card" data-reveal style={order(i % 2)}>
                <h3>{s.lead}</h3>
                <p>{s.body}</p>
                <p>
                  <mark className="price">{s.price}</mark>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="steps" className="section" aria-labelledby="steps-h">
          <h2 id="steps-h" className="h2" data-reveal>
            Как начинаем
          </h2>
          <ol className="cards steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step" data-reveal style={order(i % 2)}>
                <span className="step__n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" aria-labelledby="not-for-h">
          <h2 id="not-for-h" className="h2" data-reveal>
            Когда я вам не подхожу
          </h2>
          <ul className="list">
            {notFor.map((n, i) => (
              <li key={n.title} data-reveal style={order(i)}>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section" aria-labelledby="about-h">
          <h2 id="about-h" className="h2" data-reveal>
            Обо мне
          </h2>
          <div className="prose" data-reveal>
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="chips" aria-label="Технологии" data-reveal>
            {about.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="section cta" aria-labelledby="cta-h" data-reveal>
          <h2 id="cta-h" className="cta__title">
            {cta.title}
          </h2>
          <p className="lead">{cta.body}</p>
          <div className="actions">
            <a className="btn" href={tg}>
              Написать в Telegram
            </a>
            <a className="btn btn--ghost" href={`mailto:${person.email}`}>
              Написать на почту
            </a>
          </div>
        </section>

        <footer className="foot">
          <span>
            © 2026 {person.name} · {person.place}
          </span>
          <a href={`https://github.com/${person.github}`}>GitHub</a>
        </footer>
      </main>
    </>
  );
}
