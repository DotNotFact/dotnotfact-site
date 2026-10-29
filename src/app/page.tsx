import type { CSSProperties } from "react";
import { FlipCard } from "@/components/FlipCard";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Motion } from "@/components/Motion";
import {
  aiPrinciples,
  cta,
  directions,
  hero,
  manifesto,
  nav,
  person,
  steps,
  stories,
} from "@/content";

const tg = `https://t.me/${person.telegram}`;

// Schema.org для Яндекса и Google: кто это, чем занимается и как с ним связаться.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${person.site}#person`,
      name: person.name,
      jobTitle: person.role,
      url: person.site,
      email: `mailto:${person.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Ессентуки", addressCountry: "RU" },
      sameAs: [`https://github.com/${person.github}`, tg],
      knowsAbout: ["C#", "ASP.NET Core", "PostgreSQL", "Next.js", "TypeScript", "LLM", "YandexGPT", "GigaChat"],
    },
    {
      "@type": "ProfessionalService",
      name: `${person.name} — разработка и продукты с ИИ`,
      url: person.site,
      description: hero.lead,
      provider: { "@id": `${person.site}#person` },
      areaServed: "RU",
      availableLanguage: "ru",
      knowsAbout: directions.map((d) => d.title),
    },
  ],
};
// Порядковый номер для задержки появления в группе
const order = (i: number) => ({ "--i": i }) as CSSProperties;

// Одна колонка на всю страницу: шапка, секции и подвал на одних вертикалях.
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Motion />

      <header className="bar">
        <div className="bar__inner container">
          <a className="bar__name" href="#top">
            <Logo />
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
          <div className="hero__meta hero__in" style={order(0)}>
            <p className="status">
              <span className="pulse" aria-hidden="true" />
              {person.status}
            </p>
            <p className="hero__role">{person.role}</p>
          </div>
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
              <FlipCard key={d.title} d={d} i={i} tg={tg} />
            ))}
          </ul>
        </section>

        <section id="ai" className="section" aria-labelledby="ai-h">
          <div className="section__head" data-reveal>
            <h2 id="ai-h" className="h2">
              ИИ в работе
            </h2>
            <p className="section__lead">Как в продукте, так и в том, как я его строю.</p>
          </div>
          <ul className="cards">
            {aiPrinciples.map((a, i) => (
              <li key={a.title} className="card card--principle" data-reveal style={order(i % 2)}>
                <div className="card__head">
                  <span className="card__icon">
                    <Icon name={a.icon} />
                  </span>
                  <h3>{a.title}</h3>
                </div>
                <p>{a.body}</p>
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
          <ol className="cards cards--4 steps">
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
          <a href={`https://github.com/${person.github}`} rel="me">
            GitHub
          </a>
        </footer>
      </main>
    </>
  );
}
