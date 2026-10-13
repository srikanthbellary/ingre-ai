import { readFileSync, statSync } from "fs";
import path from "path";

/**
 * public/open-data/ is a copy of data/open-food-facts-derived/ in the Ingre
 * app repo; only README.md's "Public home" line is edited to say where it is
 * published. The /open-data/ page reads it at build time, so its counts,
 * sizes, and licence text always match the files served beside it.
 * Server only: this module reads the file system.
 */
const dir = path.join(process.cwd(), "public", "open-data");

const read = (name: string) => readFileSync(path.join(dir, name), "utf8");

type ExportInfo = {
  source: string;
  license: string;
  contents_license: string;
  off_origin_records: number;
  enriched_records: number;
  golden_sha256: string;
  shipped_db_signature: string;
  generated_by: string;
};

export const exportInfo = JSON.parse(read("export-info.json")) as ExportInfo;

/** The ODbL and DbCL notice, exactly as published. */
export const licenseText = read("LICENSE").trim();

/** The README's first line, "Last updated: 2026-10-12", as "12 Oct 2026". */
export const lastUpdated = (() => {
  const iso = read("README.md").match(/^Last updated: (\d{4})-(\d{2})-(\d{2})/);
  if (!iso) return null;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${Number(iso[3])} ${months[Number(iso[2]) - 1]} ${iso[1]}`;
})();

export function openDataHref(name: string) {
  return `/open-data/${name}`;
}

export function fileSize(name: string) {
  const bytes = statSync(path.join(dir, name)).size;
  return bytes < 1024 ? `${bytes} bytes` : `${Math.round(bytes / 1024)} KB`;
}
