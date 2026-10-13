/**
 * Colour tokens, named like the app's LabelVerdict values. Screens never show
 * these names: Ingre reports regulator status and does not rate. The demo
 * mirrors the app's own records: Fragrance and Sodium benzoate each have a
 * record with a medium concern level (amber), the rest have none.
 */
export type Level = "avoid" | "caution" | "clear";

export const LABEL_ROWS: { name: string; level: Level }[] = [
  { name: "Water", level: "clear" },
  { name: "Glycerin", level: "clear" },
  { name: "Cetyl alcohol", level: "clear" },
  { name: "Sodium benzoate", level: "caution" },
  { name: "Fragrance", level: "caution" },
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
    note: "Open it to read the source",
    level: "caution",
    tag: "Personal care",
  },
  {
    name: "Sodium benzoate",
    note: "Open it to read the source",
    level: "caution",
    tag: "Personal care",
  },
  {
    name: "Glycerin",
    note: "No regulator record in Ingre's sources",
    level: "clear",
    tag: "Personal care",
  },
];

export const SCHEMATIC_TOKENS: { name: string; level: Level }[] = [
  { name: "water", level: "clear" },
  { name: "sodium benzoate", level: "caution" },
  { name: "glycerin", level: "clear" },
  { name: "fragrance", level: "caution" },
  { name: "cetyl alcohol", level: "clear" },
  { name: "tocopherol", level: "clear" },
];

export const flaggedCount = LABEL_ROWS.filter(
  (row) => row.level !== "clear"
).length;
