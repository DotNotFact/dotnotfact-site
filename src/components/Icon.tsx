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
