import type { ReactNode } from "react";

type FigurePlateProps = {
  kicker: string;
  note?: string;
  children: ReactNode;
  tone?: "bone" | "graphite";
  className?: string;
  fieldClassName?: string;
};

export function FigurePlate({
  kicker,
  note,
  children,
  tone = "bone",
  className = "",
  fieldClassName = "",
}: FigurePlateProps) {
  const toneClass = tone === "graphite" ? "on-graphite" : "";

  return (
    <figure className={`figure-plate ${toneClass} ${className}`.trim()}>
      <figcaption className="figure-legend">
        <span>{kicker}</span>
        {note ? <span>{note}</span> : null}
      </figcaption>
      <div className={`figure-field ${fieldClassName}`.trim()}>
        {children}
        <span className="aperture-corner tl" aria-hidden="true" />
        <span className="aperture-corner tr" aria-hidden="true" />
        <span className="aperture-corner bl" aria-hidden="true" />
        <span className="aperture-corner br" aria-hidden="true" />
      </div>
    </figure>
  );
}
