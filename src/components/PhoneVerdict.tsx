const rows = [
  { name: "Water", tone: "clear" as const, note: "Not on the lists we check" },
  { name: "Glycerin", tone: "clear" as const, note: "Not on the lists we check" },
  {
    name: "Sodium benzoate",
    tone: "caution" as const,
    note: "Flagged · open source",
  },
  {
    name: "Fragrance",
    tone: "avoid" as const,
    note: "Flagged · open source",
  },
];

const toneClass = {
  clear: "bg-clear/10 text-clear",
  caution: "bg-caution/12 text-caution",
  avoid: "bg-flag/10 text-flag-ink",
};

export function PhoneVerdict() {
  return (
    <div
      className="relative mx-auto w-[17.5rem] shrink-0 sm:w-[18.5rem]"
      aria-hidden="true"
    >
      <div className="rounded-[2rem] border border-ink/15 bg-ink p-2 shadow-phone">
        <div className="overflow-hidden rounded-[1.55rem] bg-card">
          <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[0.65rem] text-stone">
            <span>9:41</span>
            <span className="inline-block h-3.5 w-20 rounded-full bg-ink/80" />
            <span>Ingre</span>
          </div>
          <div className="px-5 pb-6 pt-1">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-stone">
              Personal care
            </p>
            <p className="mt-1 font-display text-2xl leading-tight text-ink">
              Daily lotion
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-flag/10 px-3 py-1 text-xs font-medium text-flag-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-flag" />
              Avoid
            </p>
            <ul className="mt-5 divide-y divide-line">
              {rows.map((row) => (
                <li key={row.name} className="flex items-start justify-between gap-3 py-2.5">
                  <div>
                    <p className="text-sm text-ink">{row.name}</p>
                    <p className="text-[0.7rem] text-stone">{row.note}</p>
                  </div>
                  <span
                    className={`mt-0.5 rounded-full px-2 py-0.5 text-[0.65rem] font-medium ${toneClass[row.tone]}`}
                  >
                    {row.tone === "clear"
                      ? "Clear"
                      : row.tone === "caution"
                        ? "Caution"
                        : "Avoid"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
