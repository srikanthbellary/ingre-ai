import type { Metadata } from "next";
import { Fragment } from "react";
import {
  exportInfo,
  fileSize,
  lastUpdated,
  licenseText,
  openDataHref,
} from "@/lib/openData";
import { site } from "@/lib/site";

const OFF_URL = "https://world.openfoodfacts.org";
const ODBL_URL = "https://opendatacommons.org/licenses/odbl/1-0/";
const DBCL_URL = "https://opendatacommons.org/licenses/dbcl/1-0/";

export const metadata: Metadata = {
  title: "Open data",
  description:
    "Ingre's Open Food Facts derived data, free to download as JSON and CSV under the Open Database License (ODbL).",
  alternates: { canonical: `${site.url}/open-data/` },
};

// Copy below follows the folder's README.md; backticks mark code. Counts come
// from export-info.json so the page cannot drift from the files.

const files = [
  {
    name: "ingre-off-additives-odbl.json",
    format: "JSON",
    holds: `The ${exportInfo.off_origin_records} food additive records Ingre created from the Open Food Facts additives taxonomy, every field as the app uses it.`,
  },
  {
    name: "ingre-off-additives-odbl.csv",
    format: "CSV",
    holds: "The same additive records as CSV.",
  },
  {
    name: "ingre-off-enrichments-odbl.json",
    format: "JSON",
    holds: `The ${exportInfo.enriched_records} Ingre records from other sources that carry values merged in from Open Food Facts: only those values, by record.`,
  },
  {
    name: "ingre-off-enrichments-odbl.csv",
    format: "CSV",
    holds: "The same merged values as CSV.",
  },
  {
    name: "export-info.json",
    format: "JSON",
    holds:
      "Counts, the SHA-256 of Ingre's source record file, and the signature of the data file the app ships, so a download can be matched to a release.",
  },
  { name: "LICENSE", format: "Text", holds: "The ODbL and DbCL notice." },
  {
    name: "README.md",
    format: "Markdown",
    holds: "What each file holds, every field, and what Ingre changed.",
  },
];

type Field = { names: string[]; meaning: string; from?: string };

const additiveFields: Field[] = [
  { names: ["id"], meaning: "Ingre's record id, `off_` and a number.", from: "Ingre" },
  { names: ["data_source"], meaning: "Always `openfoodfacts`.", from: "Ingre tag" },
  {
    names: ["name"],
    meaning: "The additive's English name with the leading `E### - ` removed.",
    from: "Open Food Facts, altered",
  },
  {
    names: ["aliases"],
    meaning:
      "The additive's names in other languages (prefix removed, under 60 characters) and the `E###` and `E ###` forms. Where several Open Food Facts entries share an E-number family (for example E339i, E339ii, E339iii), their names are merged into one record.",
    from: "Open Food Facts, altered",
  },
  {
    names: ["category"],
    meaning: "`Food additive (...)` with the Open Food Facts additive classes.",
    from: "Open Food Facts classes, Ingre wording",
  },
  { names: ["product_type"], meaning: "`FOOD`.", from: "Ingre" },
  { names: ["cas_number"], meaning: "Empty.", from: "Ingre" },
  {
    names: ["concern_level"],
    meaning:
      "`high` when the Open Food Facts EFSA over-exposure field says high, otherwise `medium`. An internal field: the app shows no grade.",
    from: "Ingre, from Open Food Facts fields",
  },
  {
    names: ["severity_label"],
    meaning: "A text label made from `concern_level`. Internal; not shown in the app.",
    from: "Ingre",
  },
  {
    names: ["reason"],
    meaning:
      "A sentence Ingre wrote from the EFSA and ANSES fields (E-number, additive classes, what EFSA or ANSES recorded).",
    from: "Ingre, from Open Food Facts fields",
  },
  { names: ["restricted_in"], meaning: "Empty.", from: "Ingre" },
  { names: ["banned_since"], meaning: "Empty.", from: "Ingre" },
  {
    names: ["evidence_type"],
    meaning: "`EFSA evaluation` and, or `ANSES additives of interest`.",
    from: "Ingre labels for Open Food Facts fields",
  },
  {
    names: ["regions_flagged"],
    meaning: "`EU (EFSA)` and, or `France (ANSES)`.",
    from: "Ingre labels for Open Food Facts fields",
  },
  { names: ["applicable_products"], meaning: "`Food`, `Beverages`.", from: "Ingre" },
  {
    names: ["notes"],
    meaning: "`E-number E###.` and a fixed sentence about EU authorization.",
    from: "Ingre",
  },
  {
    names: ["source"],
    meaning:
      "The EFSA evaluation link Open Food Facts records for the additive, or the Open Food Facts additive page.",
    from: "Open Food Facts",
  },
];

const enrichmentFields: Field[] = [
  {
    names: ["id", "name"],
    meaning:
      "Ingre's record id and name (Ingre data, included so each row can be identified).",
  },
  {
    names: ["aliases_from_off"],
    meaning:
      "Names in other languages and E-number forms merged in from Open Food Facts.",
  },
  {
    names: ["evidence_type_from_off"],
    meaning: "`EFSA evaluation`, `ANSES additives of interest`.",
  },
  {
    names: ["regions_flagged_from_off"],
    meaning: "`EU (EFSA)`, `France (ANSES)`.",
  },
  {
    names: ["source_from_off"],
    meaning: "EFSA evaluation links and Open Food Facts additive pages.",
  },
];

const changes = [
  {
    lead: "Selection.",
    body: 'From the Open Food Facts additives taxonomy (`https://static.openfoodfacts.org/data/taxonomies/additives.json`, imported 17 Jun 2026 in git commit `8dd2669`), only additives with an E-number and at least one of: EFSA over-exposure risk moderate or high, EFSA 95th percentile exposure above the ADI, or ANSES "additive of interest". The others were not imported.',
  },
  {
    lead: "Names.",
    body: "The `E### - ` prefix is removed from names; other-language names become `aliases`, with the E-number forms added.",
  },
  {
    lead: "Merging.",
    body: `Entries that match an existing record by E-number or name are merged into it instead of becoming new records: into another Open Food Facts record (same E-number family), or into one of the ${exportInfo.enriched_records} records from other sources (the enrichments file).`,
  },
  {
    lead: "Ingre fields.",
    body: "`category`, `concern_level`, `severity_label`, `reason`, `evidence_type`, `regions_flagged`, `notes` and the defaults listed above are Ingre's wording and mapping, made from the Open Food Facts fields.",
  },
  { lead: "Tag.", body: "`data_source` marks each record for this export." },
];

/** README text with its `code` spans. */
function Ticks({ text }: { text: string }) {
  return (
    <>
      {text
        .split("`")
        .map((part, i) => (i % 2 === 1 ? <code key={i}>{part}</code> : part))}
    </>
  );
}

function FieldTable({ fields }: { fields: Field[] }) {
  const withFrom = fields.some((field) => field.from);
  return (
    // Wide enough to read on a phone; the wrapper scrolls sideways there.
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-[36rem]">
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Meaning</th>
            {withFrom ? (
              <th scope="col" className="min-w-[9rem]">
                From
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.names.join()}>
              <td className="whitespace-nowrap">
                {field.names.map((name, i) => (
                  <Fragment key={name}>
                    {i > 0 ? ", " : null}
                    <code>{name}</code>
                  </Fragment>
                ))}
              </td>
              <td>
                <Ticks text={field.meaning} />
              </td>
              {withFrom ? <td className="text-gr-400">{field.from}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function OpenDataPage() {
  return (
    <main id="main" className="doc mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Open data</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Open Food Facts derived data.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gr-300">
        Some ingredient information in Ingre comes from{" "}
        <a className="ink-link" href={OFF_URL}>
          Open Food Facts
        </a>
        , made available under the{" "}
        <a className="ink-link" href={ODBL_URL}>
          Open Database License (ODbL)
        </a>
        . These files are everything Ingre derived from it, as plain JSON and
        CSV, free to download with no login. Individual values are under the{" "}
        <a className="ink-link" href={DBCL_URL}>
          Database Contents License (DbCL)
        </a>
        .
      </p>
      <p className="mt-4 text-base leading-relaxed text-gr-300">
        Credit: Open Food Facts contributors,{" "}
        <a className="ink-link" href={OFF_URL}>
          https://world.openfoodfacts.org
        </a>
        . No Open Food Facts product photos are used anywhere in Ingre.
      </p>

      <section
        aria-labelledby="in-the-app"
        className="glass glass-strong mt-10 px-6 py-8 text-base leading-relaxed text-gr-300 sm:px-8"
      >
        <h2 id="in-the-app" className="font-display text-2xl text-bone">
          The credit in the app
        </h2>
        <figure className="mt-5">
          <blockquote className="border-l-2 border-ink-soft pl-4 text-bone">
            Some ingredient information comes from{" "}
            <a className="ink-link" href={OFF_URL}>
              Open Food Facts
            </a>{" "}
            (openfoodfacts.org), made available under the{" "}
            <a className="ink-link" href={ODBL_URL}>
              Open Database License (ODbL)
            </a>
            . Download our Open Food Facts derived data at ingre.ai/open-data.
          </blockquote>
          <figcaption className="mt-2 text-sm text-gr-400">
            In About &amp; FAQ, in Settings, and on the Open-source licenses
            page.
          </figcaption>
        </figure>
        <figure className="mt-6">
          <blockquote className="border-l-2 border-ink-soft pl-4 text-bone">
            Source:{" "}
            <a className="ink-link" href={OFF_URL}>
              Open Food Facts
            </a>{" "}
            (
            <a className="ink-link" href={ODBL_URL}>
              ODbL
            </a>
            )
          </blockquote>
          <figcaption className="mt-2 text-sm text-gr-400">
            On a result and in an ingredient&apos;s Sources, wherever Open Food
            Facts data is shown.
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="downloads"
        className="glass glass-strong mt-6 px-6 py-8 text-base leading-relaxed text-gr-300 sm:px-8"
      >
        <h2 id="downloads" className="font-display text-2xl text-bone">
          Downloads
        </h2>
        <p className="mt-3">
          Free, with no login.
          {lastUpdated ? ` Last updated ${lastUpdated}.` : null}
        </p>
        <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {files.map((file) => (
            <li
              key={file.name}
              className="py-4 sm:flex sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <a
                  className="ink-link font-mono text-sm"
                  href={openDataHref(file.name)}
                  download
                >
                  {file.name}
                </a>
                <p className="mt-1.5 text-sm leading-relaxed">{file.holds}</p>
              </div>
              <p className="eyebrow mt-2 shrink-0 sm:mt-0">
                {file.format} · {fileSize(file.name)}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          In the CSV files, list values are joined with <code>{" | "}</code>{" "}
          and <code>banned_since</code> is a JSON object (empty in every record
          here).
        </p>
      </section>

      <section
        aria-labelledby="license"
        className="glass glass-strong mt-6 px-6 py-8 text-base leading-relaxed text-gr-300 sm:px-8"
      >
        <h2 id="license" className="font-display text-2xl text-bone">
          License
        </h2>
        <p className="mt-3">
          The data is under the{" "}
          <a className="ink-link" href={ODBL_URL}>
            Open Database License (ODbL) 1.0
          </a>
          . Individual contents are under the{" "}
          <a className="ink-link" href={DBCL_URL}>
            Database Contents License (DbCL) 1.0
          </a>
          . The notice that comes with the files:
        </p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-graphite/40 p-4 text-[13px] leading-relaxed">
          {licenseText}
        </pre>
      </section>

      <div className="glass glass-strong mt-6 px-6 py-8 sm:px-8">
        <div className="space-y-10 text-base leading-relaxed text-gr-300">
          <section aria-labelledby="fields">
            <h2 id="fields" className="font-display text-2xl text-bone">
              Fields
            </h2>
            <h3 className="mt-6 font-mono text-sm text-bone">
              ingre-off-additives-odbl
            </h3>
            <FieldTable fields={additiveFields} />
            <h3 className="mt-8 font-mono text-sm text-bone">
              ingre-off-enrichments-odbl
            </h3>
            <FieldTable fields={enrichmentFields} />
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="font-display text-2xl text-bone">
              What Ingre changed
            </h2>
            <ol>
              {changes.map((change) => (
                <li key={change.lead}>
                  <strong>{change.lead}</strong> <Ticks text={change.body} />
                </li>
              ))}
            </ol>
            <p className="mt-4">
              No record has changed since the June 2026 import (checked against
              git history on 12 Oct 2026). Five <code>source</code> links in the
              additives file start with <code>hhttps://</code>, a typo carried
              over from the source data; they are published exactly as they
              ship.
            </p>
          </section>

          <section aria-labelledby="release">
            <h2 id="release" className="font-display text-2xl text-bone">
              Match a download to a release
            </h2>
            <p className="mt-3">
              Ingre regenerates these files on every data release.{" "}
              <code>export-info.json</code> records this export:
            </p>
            <dl className="mt-5 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
              <dt className="eyebrow pt-0.5">Additive records</dt>
              <dd className="font-mono text-bone">
                {exportInfo.off_origin_records}
              </dd>
              <dt className="eyebrow pt-0.5">Records with merged values</dt>
              <dd className="font-mono text-bone">
                {exportInfo.enriched_records}
              </dd>
              <dt className="eyebrow pt-0.5">Source record SHA-256</dt>
              <dd className="break-all font-mono text-bone">
                {exportInfo.golden_sha256}
              </dd>
              <dt className="eyebrow pt-0.5">Shipped data file signature</dt>
              <dd className="break-all font-mono text-bone">
                {exportInfo.shipped_db_signature}
              </dd>
            </dl>
            <p className="mt-5">
              The <code>data_source</code> tag was added to Ingre&apos;s source
              record on 12 Oct 2026. The data file in builds made before the
              next data release does not carry that one field; every other
              field matches.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
