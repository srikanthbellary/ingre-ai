type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        aria-hidden="true"
        fill="none"
      >
        <rect
          x="3.5"
          y="5"
          width="25"
          height="22"
          rx="4.5"
          fill="#FFFCF6"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 13.5h16"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M8 18h11"
          stroke="#C24A2A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 22.5h13.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[1.35rem] font-medium tracking-tight">
        Ingre
      </span>
    </span>
  );
}
