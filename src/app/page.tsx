import type { CSSProperties } from "react";
import { FlipCard } from "@/components/FlipCard";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Motion } from "@/components/Motion";
import {
  cta,
  directions,
  faq,
  hero,
  layers,
  manifesto,
  nav,
  packages,
  person,
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
      knowsAbout: ["RAG", "ИИ-агенты", "MCP", "n8n", "LangGraph", "C#", "ASP.NET Core", "Next.js", "PostgreSQL", "YandexGPT", "GigaChat"],
    },
    {
      "@type": "ProfessionalService",
      name: `${person.name} - внедрение ИИ в бизнес`,
      url: person.site,
      description: hero.lead,
      provider: { "@id": `${person.site}#person` },
      areaServed: "RU",
      availableLanguage: "ru",
      knowsAbout: directions.map((d) => d.title),
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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

        <section id="stack" className="section" aria-labelledby="stack-h">
          <div className="section__head" data-reveal>
            <h2 id="stack-h" className="h2">
              Как я строю ИИ-системы
            </h2>
            <p className="section__lead">Шесть слоёв. За каждый отвечает инженер, а не фреймворк.</p>
          </div>
          <ul className="cards">
            {layers.map((l, i) => (
              <li key={l.title} className="card card--layer" data-reveal style={order(i % 2)}>
                <div className="card__head">
                  <span className="card__icon">
                    <Icon name={l.icon} />
                  </span>
                  <h3>{l.title}</h3>
                </div>
                <p>{l.body}</p>
                <ul className="card__tags" aria-label="Технологии">
                  {l.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
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

        <section id="packages" className="section" aria-labelledby="packages-h">
          <div className="section__head" data-reveal>
            <h2 id="packages-h" className="h2">
              Как работаем
            </h2>
            <p className="section__lead">Пакетами, а не почасово: вы платите за результат, а не за мои часы.</p>
          </div>
          <ol className="cards cards--4 steps">
            {packages.map((s, i) => (
              <li key={s.title} className="step step--package" data-reveal style={order(i % 2)}>
                <span className="step__n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p className="step__time">{s.time}</p>
                <p>{s.body}</p>
                <p className="step__get">{s.get}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-h">
          <h2 id="faq-h" className="h2" data-reveal>
            Частые вопросы
          </h2>
          <div className="faq" data-reveal>
            {faq.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
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
