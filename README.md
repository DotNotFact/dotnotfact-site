# Сайт-визитка

**[dotnotfact.github.io/dotnotfact-site](https://dotnotfact.github.io/dotnotfact-site/)**

[![Первый экран сайта](docs/screen.png)](https://dotnotfact.github.io/dotnotfact-site/)

Одна страница для заказчика: какие ИИ-задачи решаю, из чего строю, как
работаем, пакеты и ответы на частые вопросы. Next.js 16 и TypeScript, собирается
в статику и живёт на GitHub Pages.

## Править текст

Весь текст лежит в `src/content.ts`, вёрстка в `src/app/page.tsx` только
раскладывает его по блокам. Картинки в `public/work/`. На сайт попадает то, что
можно подтвердить кодом, снимком или ссылкой. Без длинного тире и без оборотов,
по которым узнают текст нейросети.

## Команды

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm build        # статика в out/
```

## Публикация

Каждый пуш в `main` собирает сайт и выкладывает его на GitHub Pages
(`.github/workflows/pages.yml`).
