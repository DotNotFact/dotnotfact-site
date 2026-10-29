import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Onest, Unbounded } from "next/font/google";
import { hero, person } from "@/content";
import "./globals.css";

const display = Unbounded({ variable: "--font-display", subsets: ["latin", "cyrillic"], weight: ["500", "700"] });
const body = Onest({ variable: "--font-body", subsets: ["latin", "cyrillic"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

const title = `${person.name} — ${person.role}`;

// Картинка превью — для ссылки в Telegram и мессенджерах. Адрес полный: на Pages
// сайт живёт в подпапке, и относительный путь превью потерял бы её.
const og = { url: `${person.site}og.png`, width: 1200, height: 630, alt: title };

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title,
  description: hero.lead,
  applicationName: person.name,
  authors: [{ name: person.name, url: person.site }],
  creator: person.name,
  category: "technology",
  // Запросы, по которым заказчик ищет такого исполнителя
  keywords: [
    "AI-инженер",
    "внедрение ИИ в бизнес",
    "RAG база знаний",
    "ИИ-агенты",
    "автоматизация n8n",
    "MCP-сервер",
    "чат-бот с ИИ",
    "YandexGPT",
    "GigaChat",
    "LangGraph",
    "full-stack разработчик",
    "ASP.NET Core",
    "Next.js",
    "фриланс разработчик ИИ",
  ],
  alternates: { canonical: person.site },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
  openGraph: { title, description: hero.lead, locale: "ru_RU", type: "website", url: person.site, images: [og] },
  twitter: { card: "summary_large_image", title, description: hero.lead, images: [og.url] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0d16" },
  ],
};

// Анимации появления включаются в первом кадре отрисовки: если браузер кадры не
// рисует (фоновая вкладка, экономия энергии), класса нет и текст сразу на месте,
// а не висит невидимым в начале анимации. Кадр приходит до первого показа — без мигания.
const motionFlag = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)requestAnimationFrame(function(){document.documentElement.classList.add('motion')})`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
