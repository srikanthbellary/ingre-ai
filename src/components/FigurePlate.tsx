import type { ReactNode } from "react";

type FigurePlateProps = {
  kicker: string;
  note?: string;
  children: ReactNode;
  className?: string;
  fieldClassName?: string;
};

export function FigurePlate({
  kicker,
  note,
  children,
  className = "",
  fieldClassName = "",
}: FigurePlateProps) {
  return (
    <figure className={`figure-plate ${className}`.trim()}>
      <figcaption className="figure-legend">
        <span>{kicker}</span>
        {note ? <span>{note}</span> : null}
      </figcaption>
      <div className={`figure-field ${fieldClassName}`.trim()}>
        {children}
        <span className="figure-corner tl" aria-hidden="true" />
        <span className="figure-corner tr" aria-hidden="true" />
        <span className="figure-corner bl" aria-hidden="true" />
        <span className="figure-corner br" aria-hidden="true" />
      </div>
    </figure>
  );
}
