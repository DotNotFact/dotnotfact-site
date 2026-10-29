import type { MetadataRoute } from "next";
import { hero, person } from "@/content";

export const dynamic = "force-static";

// «Добавить на главный экран» на телефоне: имя, цвета и иконка сайта
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} - ${person.role}`,
    short_name: "Побединский",
    description: hero.lead,
    start_url: person.site,
    display: "standalone",
    background_color: "#0f0d16",
    theme_color: "#0f0d16",
    lang: "ru",
    icons: [
      { src: `${person.site}icon.svg`, type: "image/svg+xml", sizes: "any" },
      { src: `${person.site}apple-icon.png`, type: "image/png", sizes: "180x180" },
    ],
  };
}
