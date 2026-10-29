import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Onest, Unbounded } from "next/font/google";
import { hero, person } from "@/content";
import "./globals.css";

const display = Unbounded({ variable: "--font-display", subsets: ["latin", "cyrillic"], weight: ["500", "700"] });
const body = Onest({ variable: "--font-body", subsets: ["latin", "cyrillic"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: `${person.name} — ${person.role}`,
  description: hero.lead,
  openGraph: { title: `${person.name} — ${person.role}`, description: hero.lead, locale: "ru_RU", type: "website" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f8" },
    { media: "(prefers-color-scheme: dark)", color: "#14121c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
