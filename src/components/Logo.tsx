// Знак «Д» — тот же, что иконка вкладки (src/app/icon.svg), для шапки.
export function Logo() {
  return (
    <svg className="logo" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="logo-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a98bfa" />
          <stop offset="1" stopColor="#6aa2ff" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="#0f0d16" />
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="url(#logo-edge)" strokeOpacity=".7" />
      <g fill="none" stroke="#fff" strokeWidth="5">
        <path d="M26 15h16v27" />
        <path d="M26 15c0 13-2.5 22-7 27" />
        <path d="M15 42h34" />
        <path d="M17.5 39.5v9" />
      </g>
      <rect x="44" y="39.5" width="5" height="11" fill="url(#logo-fade)" />
    </svg>
  );
}
