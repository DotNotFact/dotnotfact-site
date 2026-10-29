import Image from "next/image";
import {
  decisions,
  experience,
  hero,
  notFor,
  offers,
  person,
  products,
  stack,
  steps,
} from "@/content";

const tg = `https://t.me/${person.telegram}`;
// next/image сам не добавляет basePath к строковому src
const asset = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
const sample = decisions[0];

export default function Home() {
  return (
    <>
      <header className="bar">
        <div className="bar__inner wrap">
          <a className="bar__name" href="#top">
            {person.name}
          </a>
          <span className="bar__status">{person.status}</span>
          <a className="btn btn--small" href={tg}>
            Написать в Telegram
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero__text">
            <p className="eyebrow">
              {person.role} · {person.place}
            </p>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="actions">
              <a className="btn" href={tg}>
                Обсудить задачу
              </a>
              <a className="link" href="#decisions">
                Посмотреть, как я решаю
              </a>
            </div>
          </div>

          <figure className="ticket" aria-label="Пример записи решения">
            <figcaption className="ticket__where">{sample.where}</figcaption>
            <p className="ticket__title">{sample.title}</p>
            <dl className="rows">
              <dt>Кому больно</dt>
              <dd>Водитель без связи отправляет заправку дважды, и сверка ломается.</dd>
              <dt>Что сделал</dt>
              <dd>{sample.did}</dd>
              <dt>Чем заплатил</dt>
              <dd>
                <mark className="price price--hero">{sample.price}</mark>
              </dd>
            </dl>
          </figure>
        </section>

        <section className="section wrap" aria-labelledby="offers">
          <h2 id="offers" className="h2">
            Что могу для вас сделать
          </h2>
          <ul className="offers">
            {offers.map((o) => (
              <li key={o.title} className="offer">
                <h3 className="offer__title">{o.title}</h3>
                <p>{o.what}</p>
                <p className="mono">{o.stack}</p>
                <p className="offer__limit">{o.limit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section wrap" aria-labelledby="products">
          <h2 id="products" className="h2">
            Что я построил сам
          </h2>
          <p className="lead">
            Два продукта, которые я веду один: от схемы данных до оплаты. Код приватный, архитектуру и решения
            показываю на созвоне.
          </p>
          {products.map((p) => (
            <article key={p.name} className="product">
              <div className="product__text">
                <h3 className="product__name">{p.name}</h3>
                <p className="product__tagline">{p.tagline}</p>
                <p>{p.body}</p>
                <p className="mono">{p.stack}</p>
                {p.link && (
                  <a className="link" href={p.link.href}>
                    {p.link.label}
                  </a>
                )}
              </div>
              <div className={`product__shot${p.image.h > p.image.w ? " product__shot--phone" : ""}`}>
                <Image src={asset(p.image.src)}alt={p.image.alt} width={p.image.w} height={p.image.h} />
              </div>
            </article>
          ))}
        </section>

        <section id="decisions" className="section wrap" aria-labelledby="decisions-h">
          <h2 id="decisions-h" className="h2">
            Как я принимаю решения
          </h2>
          <p className="lead">
            У каждого решения есть цена. Я записываю её рядом с решением, чтобы вы знали её заранее, а не узнали из
            счёта.
          </p>
          <div className="decisions">
            {decisions.map((d) => (
              <details key={d.title} className="decision">
                <summary>
                  <span className="decision__where">{d.where}</span>
                  <span className="decision__title">{d.title}</span>
                </summary>
                <dl className="rows">
                  <dt>Кому было больно</dt>
                  <dd>{d.pain}</dd>
                  <dt>Что сделал</dt>
                  <dd>{d.did}</dd>
                  <dt>Чем заплатил</dt>
                  <dd>
                    <mark className="price">{d.price}</mark>
                  </dd>
                </dl>
              </details>
            ))}
          </div>
        </section>

        <section className="section wrap" aria-labelledby="steps">
          <h2 id="steps" className="h2">
            Как начинаем
          </h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title} className="step">
                <h3 className="step__title">{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section wrap split" aria-labelledby="not-for">
          <div>
            <h2 id="not-for" className="h2">
              Когда я вам не подхожу
            </h2>
            <p className="lead">Пишу до вопроса, чтобы никто не тратил время.</p>
          </div>
          <ul className="notfor">
            {notFor.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>

        <section className="section wrap" aria-labelledby="stack">
          <h2 id="stack" className="h2">
            Стек
          </h2>
          <p className="lead">То, за что мне платили, и то, что я применил в своих продуктах, — разные списки.</p>
          <div className="stack">
            {[stack.paid, stack.own].map((g) => (
              <div key={g.label}>
                <h3 className="stack__label">{g.label}</h3>
                <ul className="stack__list">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap" aria-labelledby="exp">
          <h2 id="exp" className="h2">
            Опыт
          </h2>
          <ul className="exp">
            {experience.map((e) => (
              <li key={e.place} className="exp__row">
                <span className="mono">{e.period}</span>
                <strong>{e.place}</strong>
                <span>{e.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta wrap" aria-labelledby="cta">
          <h2 id="cta" className="cta__title">
            Расскажите, что строите и что мешает
          </h2>
          <p className="lead">
            Отвечу в течение рабочего дня: что бы я сделал первым шагом и сколько это стоит. Или честно скажу, что я
            не тот человек, и подскажу, кого искать.
          </p>
          <div className="actions">
            <a className="btn" href={tg}>
              Написать @{person.telegram}
            </a>
            <a className="link" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <span>
          © 2026 {person.name} · {person.place}
        </span>
        <a className="link" href={`https://github.com/${person.github}`}>
          GitHub
        </a>
      </footer>
    </>
  );
}
