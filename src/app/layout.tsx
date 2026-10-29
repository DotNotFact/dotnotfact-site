import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Onest, Unbounded } from "next/font/google";
import { hero, person } from "@/content";
import "./globals.css";

const display = Unbounded({ variable: "--font-display", subsets: ["latin", "cyrillic"], weight: ["500", "700"] });
const body = Onest({ variable: "--font-body", subsets: ["latin", "cyrillic"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

const title = `${person.name} — ${person.role.toLowerCase()}`;

export const metadata: Metadata = {
  title,
  description: hero.lead,
  openGraph: { title, description: hero.lead, locale: "ru_RU", type: "website" },
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
