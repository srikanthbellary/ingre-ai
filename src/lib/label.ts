export type Level = "avoid" | "caution" | "clear";

export const LABEL_ROWS: { name: string; level: Level }[] = [
  { name: "Water", level: "clear" },
  { name: "Glycerin", level: "clear" },
  { name: "Cetyl alcohol", level: "clear" },
  { name: "Sodium benzoate", level: "caution" },
  { name: "Fragrance", level: "avoid" },
  { name: "Tocopherol", level: "clear" },
];

export const FINDINGS: {
  name: string;
  note: string;
  level: Level;
  tag: string;
}[] = [
  {
    name: "Fragrance",
    note: "Flagged · open source",
    level: "avoid",
    tag: "Personal care",
  },
  {
    name: "Sodium benzoate",
    note: "Flagged · open source",
    level: "caution",
    tag: "Personal care",
  },
  {
    name: "Glycerin",
    note: "Not on the lists we check",
    level: "clear",
    tag: "Personal care",
  },
];

export const SCHEMATIC_TOKENS: { name: string; level: Level }[] = [
  { name: "water", level: "clear" },
  { name: "sodium benzoate", level: "caution" },
  { name: "glycerin", level: "clear" },
  { name: "fragrance", level: "avoid" },
  { name: "cetyl alcohol", level: "clear" },
  { name: "tocopherol", level: "clear" },
];

export const flaggedCount = LABEL_ROWS.filter(
  (row) => row.level !== "clear"
).length;
