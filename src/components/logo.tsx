import Link from "next/link";
 
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Gansystem Limited — home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-leaf-500/25 to-tide-500/20 ring-1 ring-leaf-500/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M3 16c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2"
            fill="none"
            stroke="currentColor"
            className="text-tide-400"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 3.5c2.7 2 4.1 4 4.1 6a4.1 4.1 0 1 1-8.2 0c0-2 1.4-4 4.1-6Z"
            fill="none"
            stroke="currentColor"
            className="text-leaf-500"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[0.95rem] font-semibold tracking-tight text-chalk">
          GanSystems
        </span>
        {!compact && (
          <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-fog">
            Gansystem Limited
          </span>
        )}
      </span>
    </Link>
  );
}