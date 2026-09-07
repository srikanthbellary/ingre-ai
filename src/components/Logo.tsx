type ApertureMarkProps = {
  className?: string;
  title?: string;
};

/**
 * The Monograph mark: viewfinder corners around a centred `i` (dot + stem).
 * Strokes inherit currentColor so the mark reads on bone or on graphite.
 */
export function ApertureMark({ className = "", title }: ApertureMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path d="M23 9h-8a6 6 0 0 0-6 6v8" />
      <path d="M41 9h8a6 6 0 0 1 6 6v8" />
      <path d="M55 41v8a6 6 0 0 1-6 6h-8" />
      <path d="M9 41v8a6 6 0 0 0 6 6h8" />
      <circle cx="32" cy="22.4" r="2.2" strokeWidth="4.4" />
      <path d="M32 31v12" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  wordmarkClassName?: string;
};

export function Logo({ className = "", wordmarkClassName = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ApertureMark className="h-8 w-8" />
      <span
        className={`font-display text-[1.3rem] font-medium tracking-tight ${wordmarkClassName}`}
      >
        Ingre
      </span>
    </span>
  );
}
