import type { NextConfig } from "next";

// На GitHub Pages сайт живёт в подпапке (/dotnotfact-site); путь передаёт сборка
// из .github/workflows/pages.yml. Локально и на своём домене он пустой.
const basePath = process.env.PAGES_BASE_PATH ?? "";

// Сайт собирается в статику (папка out/) и лежит на любом хостинге без сервера.
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  // next dev сам пишет AGENTS.md, если его запустил ИИ-агент; в репозитории он не нужен
  agentRules: false,
  // Значок «N» в углу при next dev - только мешает смотреть страницу
  devIndicators: false,
};

export default nextConfig;
