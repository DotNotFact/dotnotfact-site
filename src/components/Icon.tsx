import type { Icon as IconName } from "@/content";

// Линейные иконки в одном стиле: рамка 24×24, обводка 1.75, скруглённые концы.
// Цвет берут из currentColor — красятся вместе с текстом вокруг.
const paths: Record<IconName, React.ReactNode> = {
  // Слои — много клиентов на одной платформе
  layers: (
    <>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </>
  ),
  // Кошелёк — деньги
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M16 14.5h2" />
      <path d="M6 6V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  // Искра — ИИ
  spark: (
    <>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
      <path d="M19 15.5c.25 1.6 1 2.35 2.5 2.5-1.5.25-2.25 1-2.5 2.5-.25-1.5-1-2.25-2.5-2.5 1.5-.15 2.25-.9 2.5-2.5Z" />
    </>
  ),
  // Экран на стойке — сенсорные стенды
  screen: (
    <>
      <rect x="4" y="3" width="16" height="12" rx="2" />
      <path d="M12 15v4" />
      <path d="M8 21h8" />
      <path d="M9.5 9.5 11 11l3.5-3.5" />
    </>
  ),
  // Вилка — интеграции
  plug: (
    <>
      <path d="M9 3v4" />
      <path d="M15 3v4" />
      <path d="M6 7h12v3a6 6 0 0 1-12 0V7Z" />
      <path d="M12 16v5" />
    </>
  ),
  // Книга с лупой — поиск по документам (RAG)
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15v13H5.5A1.5 1.5 0 0 0 4 18.5v-13Z" />
      <path d="M4 18.5A1.5 1.5 0 0 0 5.5 20H11" />
      <circle cx="17" cy="16" r="3" />
      <path d="m19.2 18.2 1.8 1.8" />
    </>
  ),
  // Агент — голова с антенной и узлами действий
  agent: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 8V5" />
      <circle cx="12" cy="4" r="1" />
      <path d="M9.5 13h.01" />
      <path d="M14.5 13h.01" />
      <path d="M10 16.5h4" />
    </>
  ),
  // Поток — узлы, связанные стрелками (автоматизация)
  flow: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1.5" />
      <rect x="15" y="4" width="6" height="5" rx="1.5" />
      <rect x="9" y="15" width="6" height="5" rx="1.5" />
      <path d="M9 6.5h6" />
      <path d="M18 9v2.5a1.5 1.5 0 0 1-1.5 1.5H12v2" />
    </>
  ),
  // Щит с галочкой — качество и безопасность
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  // Спидометр — эксплуатация и метрики
  gauge: (
    <>
      <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
      <path d="m12 13 4-4" />
      <circle cx="12" cy="13" r="1.5" />
    </>
  ),
  // Компас — направление и решения
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
