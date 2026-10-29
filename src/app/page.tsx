import type { CSSProperties } from "react";
import { Motion } from "@/components/Motion";
import {
  about,
  cta,
  directions,
  hero,
  manifesto,
  nav,
  notFor,
  person,
  steps,
  stories,
  ticket,
} from "@/content";

const tg = `https://t.me/${person.telegram}`;
// Порядковый номер для задержки появления в группе
const order = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Home() {
  return (
    <>
      <Motion />

      <header className="bar">
        <div className="bar__inner wrap">
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
            Обсудить проект
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero__text">
            <p className="eyebrow hero__in" style={order(0)}>
              <span className="pulse" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="hero__title">
              {hero.title.map((line, i) => (
                <span key={line} className="hero__line hero__in" style={order(i + 1)}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero__lead hero__in" style={order(4)}>
              {hero.lead}
            </p>
            <div className="actions hero__in" style={order(5)}>
              <a className="btn" href={tg}>
                Обсудить проект
              </a>
              <a className="btn btn--ghost" href="#practice">
                Как я работаю
              </a>
            </div>
          </div>

          <figure className="ticket hero__in" style={order(3)}>
            <figcaption className="ticket__where">{ticket.where}</figcaption>
            <p className="ticket__title">{ticket.title}</p>
            <dl className="rows">
              {ticket.rows.map((r) => (
                <div key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
              <div>
                <dt>Чем заплатил</dt>
                <dd>
                  <mark className="price price--hero">{ticket.price}</mark>
                </dd>
              </div>
            </dl>
          </figure>
        </section>

        <section className="manifesto wrap" data-reveal>
          <h2 className="manifesto__title">{manifesto.title}</h2>
          <div className="manifesto__body">
            {manifesto.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="directions" className="section wrap" aria-labelledby="directions-h">
          <div className="section__head" data-reveal>
            <p className="eyebrow">Что могу построить</p>
            <h2 id="directions-h" className="h2">
              Шесть направлений, в которых я беру ответственность целиком
            </h2>
          </div>
          <ul className="directions">
            {directions.map((d, i) => (
              <li key={d.title} className="direction" data-reveal style={order(i % 3)}>
                <span className="tag">{d.tag}</span>
                <h3 className="direction__title">{d.title}</h3>
                <p>{d.body}</p>
                <p className="direction__proof">{d.proof}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="practice" className="section wrap" aria-labelledby="practice-h">
          <div className="section__head" data-reveal>
            <p className="eyebrow">Как это выглядит на деле</p>
            <h2 id="practice-h" className="h2">
              У каждого решения есть цена. Я называю её до того, как вы её заплатите
            </h2>
          </div>
          <div className="stories">
            {stories.map((s, i) => (
              <article key={s.lead} className="story" data-reveal style={order(i % 2)}>
                <h3 className="story__lead">{s.lead}</h3>
                <p>{s.body}</p>
                <p>
                  <mark className="price">{s.price}</mark>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" aria-labelledby="steps-h">
          <div className="section__head" data-reveal>
            <p className="eyebrow">Как начинаем</p>
            <h2 id="steps-h" className="h2">
              От первого сообщения до сдачи — четыре шага
            </h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step" data-reveal style={order(i)}>
                <span className="step__n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="step__title">{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section wrap split" aria-labelledby="not-for-h">
          <div className="section__head" data-reveal>
            <p className="eyebrow">Честно</p>
            <h2 id="not-for-h" className="h2">
              Когда я вам не подхожу
            </h2>
          </div>
          <ul className="notfor">
            {notFor.map((n, i) => (
              <li key={n.title} data-reveal style={order(i)}>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section wrap about" aria-labelledby="about-h">
          <div data-reveal>
            <p className="eyebrow">{person.name}</p>
            <h2 id="about-h" className="h2">
              {about.title}
            </h2>
            {about.body.map((p) => (
              <p key={p} className="about__p">
                {p}
              </p>
            ))}
          </div>
          <div data-reveal style={order(1)}>
            <dl className="facts">
              {about.facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
            <ul className="chips" aria-label="Технологии">
              {about.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta wrap" aria-labelledby="cta-h" data-reveal>
          <h2 id="cta-h" className="cta__title">
            {cta.title}
          </h2>
          <p className="cta__body">{cta.body}</p>
          <div className="actions">
            <a className="btn" href={tg}>
              Написать @{person.telegram}
            </a>
            <a className="btn btn--ghost" href={`mailto:${person.email}`}>
              Написать на почту
            </a>
          </div>
          <p className="cta__mail">{person.email}</p>
        </section>
      </main>

      <footer className="foot wrap">
        <span>
          © 2026 {person.name} · {person.place}
        </span>
        <a href={`https://github.com/${person.github}`}>GitHub</a>
      </footer>
    </>
  );
}
