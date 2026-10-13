Last updated: 2026-10-12 (created 2026-10-12)

# Ingre: Open Food Facts derived data

Some ingredient information in Ingre comes from [Open Food Facts](https://world.openfoodfacts.org), made available under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/). This folder is everything Ingre derived from it, as plain JSON and CSV, free to download with no login. Individual values are under the [Database Contents License (DbCL)](https://opendatacommons.org/licenses/dbcl/1-0/). See [LICENSE](LICENSE).

Credit: Open Food Facts contributors, https://world.openfoodfacts.org. No Open Food Facts product photos are used anywhere in Ingre.

Public home: published at `https://ingre.ai/open-data/`, from this folder.

## Files

| File | What it holds |
| --- | --- |
| `ingre-off-additives-odbl.json`, `.csv` | The 87 food additive records Ingre created from the Open Food Facts additives taxonomy, every field as the app uses it. |
| `ingre-off-enrichments-odbl.json`, `.csv` | The 18 Ingre records from other sources that carry values merged in from Open Food Facts: only those values, by record. |
| `export-info.json` | Counts, the SHA-256 of Ingre's source record file, and the signature of the data file the app ships, so a download can be matched to a release. |
| `LICENSE` | The ODbL and DbCL notice. |

In the CSV files, list values are joined with ` | ` and `banned_since` is a JSON object (empty in every record here).

## Fields: `ingre-off-additives-odbl`

| Field | Meaning | From |
| --- | --- | --- |
| `id` | Ingre's record id, `off_` and a number. | Ingre |
| `data_source` | Always `openfoodfacts`. | Ingre tag |
| `name` | The additive's English name with the leading `E### - ` removed. | Open Food Facts, altered |
| `aliases` | The additive's names in other languages (prefix removed, under 60 characters) and the `E###` and `E ###` forms. Where several Open Food Facts entries share an E-number family (for example E339i, E339ii, E339iii), their names are merged into one record. | Open Food Facts, altered |
| `category` | `Food additive (...)` with the Open Food Facts additive classes. | Open Food Facts classes, Ingre wording |
| `product_type` | `FOOD`. | Ingre |
| `cas_number` | Empty. | Ingre |
| `concern_level` | `high` when the Open Food Facts EFSA over-exposure field says high, otherwise `medium`. An internal field: the app shows no grade. | Ingre, from Open Food Facts fields |
| `severity_label` | `HIGH CONCERN` or `MODERATE CONCERN`, from `concern_level`. Internal; not shown in the app. | Ingre |
| `reason` | A sentence Ingre wrote from the EFSA and ANSES fields (E-number, additive classes, what EFSA or ANSES recorded). | Ingre, from Open Food Facts fields |
| `restricted_in` | Empty. | Ingre |
| `banned_since` | Empty. | Ingre |
| `evidence_type` | `EFSA evaluation` and, or `ANSES additives of interest`. | Ingre labels for Open Food Facts fields |
| `regions_flagged` | `EU (EFSA)` and, or `France (ANSES)`. | Ingre labels for Open Food Facts fields |
| `applicable_products` | `Food`, `Beverages`. | Ingre |
| `notes` | `E-number E###.` and a fixed sentence about EU authorization. | Ingre |
| `source` | The EFSA evaluation link Open Food Facts records for the additive, or the Open Food Facts additive page. | Open Food Facts |

## Fields: `ingre-off-enrichments-odbl`

| Field | Meaning |
| --- | --- |
| `id`, `name` | Ingre's record id and name (Ingre data, included so each row can be identified). |
| `aliases_from_off` | Names in other languages and E-number forms merged in from Open Food Facts. |
| `evidence_type_from_off` | `EFSA evaluation`, `ANSES additives of interest`. |
| `regions_flagged_from_off` | `EU (EFSA)`, `France (ANSES)`. |
| `source_from_off` | EFSA evaluation links and Open Food Facts additive pages. |

## What Ingre changed (our alterations)

1. **Selection.** From the Open Food Facts additives taxonomy (`https://static.openfoodfacts.org/data/taxonomies/additives.json`, imported 17 Jun 2026 in git commit `8dd2669`), only additives with an E-number and at least one of: EFSA over-exposure risk moderate or high, EFSA 95th percentile exposure above the ADI, or ANSES "additive of interest". The others were not imported.
2. **Names.** The `E### - ` prefix is removed from names; other-language names become `aliases`, with the E-number forms added.
3. **Merging.** Entries that match an existing record by E-number or name are merged into it instead of becoming new records: into another Open Food Facts record (same E-number family), or into one of the 18 records from other sources (the enrichments file).
4. **Ingre fields.** `category`, `concern_level`, `severity_label`, `reason`, `evidence_type`, `regions_flagged`, `notes` and the defaults listed above are Ingre's wording and mapping, made from the Open Food Facts fields.
5. **Tag.** `data_source` marks each record for this export.

No record has changed since the June 2026 import (checked against git history on 12 Oct 2026). Five `source` links in the additives file start with `hhttps://`, a typo carried over from the source data; they are published exactly as they ship.

## Regenerate on every data release

```
python3 constants/export_off_open_data.py export
```

It reads `constants/golden_ingredients.json` (Ingre's source record) and `constants/off_enrichments.json` (what the import merged into other records), and rewrites the data files here, `export-info.json`, and `lib/core/licenses/open_food_facts_records.dart` (the record ids the app credits with "Source: Open Food Facts (ODbL)"). Run it after the encrypted data file is rebuilt, then publish this folder, so the public copy matches what ships. `test/open_food_facts_attribution_test.dart` decrypts the shipped data file and fails if any exported record differs from it.

The `data_source` tag was added to Ingre's source record on 12 Oct 2026. The data file in builds made before the next data release does not carry that one field; every other field matches.
